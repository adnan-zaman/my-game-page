const assert = require("assert").strict;
const { MockResponse } = require("./mocks");
const sinon = require("sinon");

const { body } = require("express-validator");
const {
  UserNotFoundError,
  IncorrectPasswordError,
  UserAlreadyExistsError,
} = require("../errors");
const db = require("../database");

const indexController = require("../controllers/indexController");
const usersController = require("../controllers/userController");

describe("GET /", function () {
  describe("loginGet", function () {
    beforeEach(function () {
      this.res = new MockResponse();
      this.req = {};
    });

    it("should render login if user not authenticated", function () {
      this.req.isAuthenticated = () => false;
      indexController.loginGet(this.req, this.res);
      assert.strictEqual(this.res.render.calledWith("login"), true);
    });

    it("should redirect to /user/:id if user is authenticated", function () {
      this.req.isAuthenticated = () => true;
      this.req.user = {
        id: 1,
        email: "unique@abc.com",
        password: "password1",
        displayName: "UniqueTester",
      };
      indexController.loginGet(this.req, this.res);
      assert.strictEqual(this.res.redirect.calledWith("/user/1"), true);
    });
  });
});

/*
 * (POST /) -> (emailValidator) -> (passwordValidator) ->
 * (loginFormErrorHandler) -> (passport.authenticate) -> (loginSuccess) ->
 * (loginFail)
 */
describe("POST /", function () {
  beforeEach(function () {
    this.res = new MockResponse();
    this.req = {
      body: {
        email: "unique@abc.com",
        password: "password1",
      },
    };
    this.nextFake = sinon.fake();
  });

  describe("loginFormErrorHandler", function () {
    it("should render login with message on validation error", async function () {
      //invalidate email field
      const mockValidation = body("email")
        .custom((value) => false)
        .withMessage("Email is required.");

      await mockValidation(this.req, this.res, sinon.fake());
      indexController.loginFormErrorHandler(this.req, this.res, this.nextFake);

      assert.strictEqual(this.res.locals.error.msg, "Email is required.");
      assert.strictEqual(this.res.locals.email_value, this.req.body.email);
      assert.strictEqual(
        this.res.locals.password_value,
        this.req.body.password
      );
      assert.strictEqual(this.res.render.calledWith("login"), true);
      assert.strictEqual(this.nextFake.callCount, 0);
    });

    it("should call next middleware on valid input", async function () {
      //valid input
      const mockValidation = body("email").custom((value) => true);
      await mockValidation(this.req, this.res, sinon.fake());
      indexController.loginFormErrorHandler(this.req, this.res, this.nextFake);

      assert.strictEqual(this.nextFake.called, true);
    });
  });

  describe("loginFail", function () {
    it("should render login on UserNotFoundError", function () {
      const err = new UserNotFoundError();
      indexController.loginFail(err, this.req, this.res, sinon.fake());

      assert.strictEqual(this.res.locals.error, err);
      assert.strictEqual(this.res.locals.email_value, this.req.body.email);
      assert.strictEqual(
        this.res.locals.password_value,
        this.req.body.password
      );
      assert.strictEqual(this.res.render.calledWith("login"), true);
    });

    it("should render login on IncorrectPasswordError", function () {
      const err = new IncorrectPasswordError();
      indexController.loginFail(err, this.req, this.res, sinon.fake());

      assert.strictEqual(this.res.locals.error, err);
      assert.strictEqual(this.res.locals.email_value, this.req.body.email);
      assert.strictEqual(
        this.res.locals.password_value,
        this.req.body.password
      );
      assert.strictEqual(this.res.render.calledWith("login"), true);
    });

    it("should pass error to next handler on any other error", function () {
      const err = new Error();
      indexController.loginFail(err, this.req, this.res, this.nextFake);

      assert.strictEqual(this.nextFake.calledWith(err), true);
    });
  });
});

describe("GET /signup", function () {
  describe("signupGet", function () {
    beforeEach(function () {
      this.res = new MockResponse();
      this.req = {};
    });

    it("should render signup if not authenticated", function () {
      this.req.isAuthenticated = () => false;
      indexController.signupGet(this.req, this.res);
      assert.strictEqual(this.res.render.calledWith("signup"), true);
    });

    it("should redirect to /users/:id if user authenticated", function () {
      this.req.isAuthenticated = () => true;
      this.req.user = { id: 1, email: "unique@abc.com", password: "password1" };
      indexController.signupGet(this.req, this.res);
      assert.strictEqual(this.res.redirect.calledWith("/user/1"), true);
    });
  });
});

/*
 * (POST /signup) -> (emailValidator) -> (displayNameValidator) -> (passwordValidator) -> (signupPost) -> (passport.authenticate) -> (redirect)
 */
describe("POST /signup", async function () {
  beforeEach(async function () {
    this.res = new MockResponse();
    this.req = { body: {} };
    this.nextFake = sinon.fake();
    this.connection = db.createConnection();
    await this.connection.query("CALL PopulateTestData();");
  });

  afterEach(async function () {
    this.connection.end();
  });

  describe("signupPost", function () {
    it("should render signup with message on validation error", async function () {
      this.req.body.email = "test@abc.com";
      this.req.body.password = "password1";
      this.req.body.displayName = "TesterName";

      //invalidate email field
      const mockValidation = body("email")
        .custom((value) => false)
        .withMessage("Email is required.");

      await mockValidation(this.req, this.res, sinon.fake());
      indexController.signupPost(this.req, this.res, this.nextFake);

      assert.strictEqual(this.res.locals.error.msg, "Email is required.");
      assert.strictEqual(this.res.locals.email_value, this.req.body.email);
      assert.strictEqual(
        this.res.locals.displayName_value,
        this.req.body.displayName
      );
      assert.strictEqual(
        this.res.locals.password_value,
        this.req.body.password
      );
      assert.strictEqual(this.res.render.calledWith("signup"), true);
      assert.strictEqual(this.nextFake.callCount, 0);
    });

    it("should render signup with UserAlreadyExistsError if email already exists", async function () {
      //get first user
      const results = await this.connection.query(
        "SELECT * FROM users LIMIT 1"
      );
      const existingUser = results[0];
      this.req.body.email = existingUser.email;
      this.req.body.password = existingUser.password;
      this.req.body.displayName = "UniqueName";

      await indexController.signupPost(this.req, this.res);

      assert.strictEqual(
        this.res.locals.error instanceof UserAlreadyExistsError,
        true
      );
      assert.strictEqual(this.res.locals.error.conflictType, "EMAIL");
      assert.strictEqual(this.res.locals.email_value, existingUser.email);
      assert.strictEqual(this.res.locals.password_value, existingUser.password);
      assert.strictEqual(this.res.locals.displayName_value, "UniqueName");
      assert.strictEqual(this.res.render.calledWith("signup"), true);
    });

    it("should render signup with UserAlreadyExistsError if display name already exists", async function () {
      //get first user
      const results = await this.connection.query(
        "SELECT * FROM users LIMIT 1"
      );
      const existingUser = results[0];
      this.req.body.email = "unique@abc.com";
      this.req.body.password = existingUser.password;
      this.req.body.displayName = existingUser.displayName;

      await indexController.signupPost(this.req, this.res);

      assert.strictEqual(
        this.res.locals.error instanceof UserAlreadyExistsError,
        true
      );
      assert.strictEqual(this.res.locals.error.conflictType, "DISPLAYNAME");
      assert.strictEqual(this.res.locals.email_value, "unique@abc.com");
      assert.strictEqual(this.res.locals.password_value, existingUser.password);
      assert.strictEqual(
        this.res.locals.displayName_value,
        existingUser.displayName
      );
      assert.strictEqual(this.res.render.calledWith("signup"), true);
    });

    it("should call next middleware on valid input", async function () {
      this.req.body.email = "unique@abc.com";
      this.req.body.password = "password1";
      this.req.body.displayName = "UniqueTester";
      //valid input
      const mockValidation = body("email").custom((value) => true);
      await mockValidation(this.req, this.res, sinon.fake());
      await indexController.signupPost(this.req, this.res, this.nextFake);

      assert.strictEqual(this.nextFake.called, true);
    });

    it("should update database on valid input", async function () {
      this.req.body.email = "unique@abc.com";
      this.req.body.password = "password1";
      this.req.body.displayName = "UniqueTester";

      await indexController.signupPost(this.req, this.res, this.nextFake);

      const results = await this.connection.query("CALL GetUserByEmail(?)", [
        "unique@abc.com",
      ]);

      const newUser = results[0][0];

      assert.strictEqual(newUser.email, "unique@abc.com");
      assert.strictEqual(newUser.password, "password1");
      assert.strictEqual(newUser.displayName, "UniqueTester");
    });
  });
});

/*
 * (GET /users/:id) -> (getUserPage)
 */
describe("GET /user/:id", function () {
  beforeEach(async function () {
    this.res = new MockResponse();
    this.req = { body: {}, params: {} };
    this.nextFake = sinon.fake();
    this.connection = db.createConnection();
    await this.connection.query("CALL PopulateTestData();");
  });

  afterEach(async function () {
    this.connection.end();
  });

  it("should send all info to display user page", async function () {
    //user whose page is being displayed
    let results = await this.connection.query("CALL GetUserByEmail(?)", [
      "test@abc.com",
    ]);
    const displayedUser = results[0][0];

    //user who is viewing page
    results = await this.connection.query("CALL GetUserByEmail(?)", [
      "test2@abc.com",
    ]);
    const viewingUser = results[0][0];

    this.req.params.id = displayedUser.id;
    this.req.user = viewingUser;

    await usersController.getUserPage(this.req, this.res, this.nextFake);

    assert.strictEqual(this.res.locals.displayName, "ProTester");
    assert.strictEqual(this.res.locals.id, null);
    assert.strictEqual(this.nextFake.callCount, 0);
    assert.strictEqual(this.res.render.calledWith("userPage"), true);

    //expected order of game ids
    //we do this because we can't deepStrictEqual objects because
    //returned objects are RowDataPackets and we only care about
    //its values
    const expectedOrder = [4, 2, 1, 3, 5];
    assert.strictEqual(this.res.locals.games.length, expectedOrder.length);
    for (let i = 0; i < expectedOrder.length; i++) {
      const id = expectedOrder[i];
      assert.strictEqual(this.res.locals.games[i].id, id);
      assert.strictEqual(this.res.locals.games[i].name, `Game${id}`);
      assert.strictEqual(
        this.res.locals.games[i].coverurl,
        `https://gameimg/game${id}.jpg`
      );
    }
  });

  it("should send all info to display user page + user id if logged in", async function () {
    //user whose page is being displayed & viewing
    const user = await (
      await this.connection.query("CALL GetUserByEmail(?)", ["test@abc.com"])
    )[0][0];

    this.req.params.id = user.id;
    this.req.user = user;

    await usersController.getUserPage(this.req, this.res, this.nextFake);

    assert.strictEqual(this.res.locals.displayName, "ProTester");
    assert.strictEqual(this.res.locals.id, user.id);
    assert.strictEqual(this.nextFake.callCount, 0);
    assert.strictEqual(this.res.render.calledWith("userPage"), true);
    //expected order of game ids
    //we do this because we can't deepStrictEqual objects because
    //returned objects are RowDataPackets and we only care about
    //its values
    const expectedOrder = [4, 2, 1, 3, 5];
    assert.strictEqual(this.res.locals.games.length, expectedOrder.length);
    for (let i = 0; i < expectedOrder.length; i++) {
      const id = expectedOrder[i];
      assert.strictEqual(this.res.locals.games[i].id, id);
      assert.strictEqual(this.res.locals.games[i].name, `Game${id}`);
      assert.strictEqual(
        this.res.locals.games[i].coverurl,
        `https://gameimg/game${id}.jpg`
      );
    }
  });

  it("should return 404 on user that doesn't exist", async function () {
    this.req.user = await (
      await this.connection.query("CALL GetUserByEmail(?)", ["test@abc.com"])
    )[0][0];
    this.req.params.id = 0;
    let err;
    //so we can see the contents of the error that getUserPage should throw
    this.nextFake = function (e) {
      err = e;
    };

    await usersController.getUserPage(this.req, this.res, this.nextFake);
    assert.strictEqual(err.status, 404);
  });

  it("should return 404 on non-number :id", async function () {
    this.req.user = await (
      await this.connection.query("CALL GetUserByEmail(?)", ["test@abc.com"])
    )[0][0];
    this.req.params.id = "notanumber";
    let err;
    //so we can see the contents of the error that getUserPage should throw
    this.nextFake = function (e) {
      err = e;
    };

    await usersController.getUserPage(this.req, this.res, this.nextFake);
    assert.strictEqual(err.status, 404);
  });
});
