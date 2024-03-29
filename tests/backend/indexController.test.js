const assert = require("assert").strict;
const { MockResponse } = require("../helpers/mocks");
const sinon = require("sinon");

const { body } = require("express-validator");
const {
  UserNotFoundError,
  IncorrectPasswordError,
  UserAlreadyExistsError,
} = require("../../core/errors");
const db = require("../../core/database");

const indexController = require("../../controllers/indexController");
const usersController = require("../../controllers/userController");

describe("GET /", function () {
  describe("loginGet", function () {
    beforeEach(function () {
      this.res = new MockResponse();
      this.req = {};
    });

    it("should render login if user not authenticated", function () {
      this.req.isAuthenticated = () => false;
      indexController.loginGet(this.req, this.res);
      assert.strictEqual(this.res.nextApp.render.lastArg, "/login");
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
      assert.strictEqual(this.res.nextApp.render.lastArg, "/login");
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
      assert.strictEqual(this.res.nextApp.render.lastArg, "/login");
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
      assert.strictEqual(this.res.nextApp.render.lastArg, "/login");
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
      assert.strictEqual(this.res.nextApp.render.lastArg, "/signup");
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
  beforeEach(function () {
    this.res = new MockResponse();
    this.req = { body: {} };
    this.nextFake = sinon.fake();
    this.db = sinon.stub(db);
  });

  afterEach(function () {
    sinon.restore();
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
      assert.strictEqual(this.res.nextApp.render.lastArg, "/signup");
      assert.strictEqual(this.nextFake.callCount, 0);
    });

    it("should render signup with UserAlreadyExistsError if email already exists", async function () {
      this.req.body.email = "exist@abc.com";
      this.req.body.password = "password1";
      this.req.body.displayName = "UniqueName";
      this.db.getUserByEmail.resolves({
        id: 99,
        email: this.req.body.email,
        password: this.req.body.password,
        displayName: this.req.body.displayName,
      });

      await indexController.signupPost(this.req, this.res);

      assert.strictEqual(
        this.res.locals.error instanceof UserAlreadyExistsError,
        true
      );
      assert.strictEqual(this.res.locals.error.conflictType, "EMAIL");
      assert.strictEqual(this.res.locals.email_value, "exist@abc.com");
      assert.strictEqual(this.res.locals.password_value, "password1");
      assert.strictEqual(this.res.locals.displayName_value, "UniqueName");
      assert.strictEqual(this.res.nextApp.render.lastArg, "/signup");
    });

    it("should render signup with UserAlreadyExistsError if display name already exists", async function () {
      this.req.body.email = "exist@abc.com";
      this.req.body.password = "password1";
      this.req.body.displayName = "UniqueName";
      this.db.getUserByDisplayName.resolves({
        id: 99,
        email: this.req.body.email,
        password: this.req.body.password,
        displayName: this.req.body.displayName,
      });

      await indexController.signupPost(this.req, this.res);

      assert.strictEqual(
        this.res.locals.error instanceof UserAlreadyExistsError,
        true
      );
      assert.strictEqual(this.res.locals.error.conflictType, "DISPLAYNAME");
      assert.strictEqual(this.res.locals.email_value, "exist@abc.com");
      assert.strictEqual(this.res.locals.password_value, "password1");
      assert.strictEqual(this.res.locals.displayName_value, "UniqueName");
      assert.strictEqual(this.res.nextApp.render.lastArg, "/signup");
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

      assert.strictEqual(
        this.db.addUser.calledWithExactly(
          "unique@abc.com",
          "password1",
          "UniqueTester"
        ),
        true
      );
    });
  });
});
