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

    it("should redirect to /users/:id if user is authenticated", function () {
      this.req.isAuthenticated = () => true;
      this.req.user = { id: 1, email: "unique@abc.com", password: "password1" };
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
    this.req = { body: { email: "test@abc.com", password: "pass1" } };
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
 * (POST /signup) -> (emailValidator) -> (passwordValidator) -> (signupPost) -> (passport.authenticate) -> (redirect)
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
    await this.connection.query("CALL ClearTestData()");
    this.connection.end();
  });

  describe("signupPost", function () {
    it("should render signup with message on validation error", async function () {
      this.req.body.email = "test@abc.com";
      this.req.body.password = "pass1";

      //invalidate email field
      const mockValidation = body("email")
        .custom((value) => false)
        .withMessage("Email is required.");

      await mockValidation(this.req, this.res, sinon.fake());
      indexController.signupPost(this.req, this.res, this.nextFake);

      assert.strictEqual(this.res.locals.error.msg, "Email is required.");
      assert.strictEqual(this.res.locals.email_value, this.req.body.email);
      assert.strictEqual(
        this.res.locals.password_value,
        this.req.body.password
      );
      assert.strictEqual(this.res.render.calledWith("signup"), true);
      assert.strictEqual(this.nextFake.callCount, 0);
    });

    it("should render signup with UserAlreadyExistsError if user already exists", async function () {
      //get first user
      const results = await this.connection.query(
        "SELECT * FROM users LIMIT 1"
      );
      const existingUser = results[0];
      this.req.body.email = existingUser.email;
      this.req.body.password = existingUser.password;
      await indexController.signupPost(this.req, this.res);

      assert.strictEqual(
        this.res.locals.error instanceof UserAlreadyExistsError,
        true
      );
      assert.strictEqual(this.res.locals.email_value, existingUser.email);
      assert.strictEqual(this.res.locals.password_value, existingUser.password);
      assert.strictEqual(this.res.render.calledWith("signup"), true);
    });

    it("should call next middleware on valid input", async function () {
      this.req.body.email = "unique@abc.com";
      this.req.body.password = "password1";
      //valid input
      const mockValidation = body("email").custom((value) => true);
      await mockValidation(this.req, this.res, sinon.fake());
      await indexController.signupPost(this.req, this.res, this.nextFake);

      assert.strictEqual(this.nextFake.called, true);
    });

    it("should update database on valid input", async function () {
      this.req.body.email = "unique@abc.com";
      this.req.body.password = "password1";

      await indexController.signupPost(this.req, this.res, this.nextFake);

      const results = await this.connection.query("CALL GetUser(?)", [
        "unique@abc.com",
      ]);

      const newUser = results[0][0];

      assert.strictEqual(newUser.email, "unique@abc.com");
      assert.strictEqual(newUser.password, "password1");
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
    await this.connection.query("CALL ClearTestData()");
    this.connection.end();
  });

  it("should send all info to display user page", async function () {
    //user whose page is being displayed
    const displayedUser = await (
      await this.connection.query("CALL GetUser(?)", ["test@abc.com"])
    )[0][0];

    //user who is viewing page
    const viewingUser = await (
      await this.connection.query("CALL GetUser(?)", ["test2@abc.com"])
    )[0][0];

    this.req.params.id = displayedUser.id;
    this.req.user = viewingUser;

    usersController.getUserPage(this.req, this.res, this.nextFake);

    assert.strictEqual(this.res.locals.username, "ProTester");
    assert.strictEqual(this.res.locals.id, null);
    assert.strictEqual(this.nextFake.callCount, 0);
    assert.deepStrictEqual(res.locals.games, [
      { name: "Game4", imgurl: "https://gameimg/game4.jpg" },
      { name: "Game2", imgurl: "https://gameimg/game2.jpg" },
      { name: "Game1", imgurl: "https://gameimg/game1.jpg" },
      { name: "Game3", imgurl: "https://gameimg/game3.jpg" },
      { name: "Game5", imgurl: "https://gameimg/game5.jpg" },
    ]);
  });

  it("should send all info to display user page + user id if logged in", async function () {
    //user whose page is being displayed & viewing
    const user = await (
      await this.connection.query("CALL GetUser(?)", ["test@abc.com"])
    )[0][0];

    this.req.params.id = user.id;
    this.req.user = user;

    usersController.getUserPage(this.req, this.res, this.nextFake);

    assert.strictEqual(this.res.locals.username, "ProTester");
    assert.strictEqual(this.res.locals.id, user.id);
    assert.strictEqual(this.nextFake.callCount, 0);
    assert.deepStrictEqual(res.locals.games, [
      { name: "Game4", imgurl: "https://gameimg/game4.jpg" },
      { name: "Game2", imgurl: "https://gameimg/game2.jpg" },
      { name: "Game1", imgurl: "https://gameimg/game1.jpg" },
      { name: "Game3", imgurl: "https://gameimg/game3.jpg" },
      { name: "Game5", imgurl: "https://gameimg/game5.jpg" },
    ]);
  });
});
