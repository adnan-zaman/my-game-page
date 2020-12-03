const assert = require("assert").strict;
const { MockResponse } = require("./mocks");
const sinon = require("sinon");

const { body } = require("express-validator");
const {
  UserNotFoundError,
  IncorrectPasswordError,
  UserAlreadyExistsError,
} = require("../errors");
const db = require("../mockdb");

const indexController = require("../controllers/indexController");

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

    it("should redirect to /users if user is authenticated", function () {
      this.req.isAuthenticated = () => true;
      indexController.loginGet(this.req, this.res);
      assert.strictEqual(this.res.redirect.calledWith("/users"), true);
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

    it("should render signup", function () {
      indexController.signupGet(this.req, this.res);
      assert.strictEqual(this.res.render.calledWith("signup"), true);
    });
  });
});

/*
 * (POST /signup) -> (emailValidator) -> (passwordValidator) -> (signupPost) -> (passport.authenticate) -> (redirect)
 */
describe("POST /signup", function () {
  beforeEach(function () {
    this.res = new MockResponse();
    this.req = { body: {} };
    this.nextFake = sinon.fake();
  });

  afterEach(function () {
    db.resetToDefault();
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

    it("should render signup with UserAlreadyExistsError if user already exists", function () {
      const existingUser = db.findById(1);
      this.req.body.email = existingUser.email;
      this.req.body.password = existingUser.password;
      indexController.signupPost(this.req, this.res);

      assert.strictEqual(
        this.res.locals.error instanceof UserAlreadyExistsError,
        true
      );
      assert.strictEqual(this.res.locals.email_value, existingUser.email);
      assert.strictEqual(this.res.locals.password_value, existingUser.password);
      assert.strictEqual(this.res.render.calledWith("signup"), true);
    });

    it("should call next middleware on valid input", async function () {
      this.req.body.email = "test@abc.com";
      this.req.body.password = "pass1";
      //valid input
      const mockValidation = body("email").custom((value) => true);
      await mockValidation(this.req, this.res, sinon.fake());
      indexController.signupPost(this.req, this.res, this.nextFake);

      assert.strictEqual(this.nextFake.called, true);
    });

    it("should update database on valid input", function () {
      this.req.body.email = "test@abc.com";
      this.req.body.password = "pass1";

      indexController.signupPost(this.req, this.res, this.nextFake);

      const newUser = db.findByColumn("email", "test@abc.com");
      assert.strictEqual(newUser.email, "test@abc.com");
      assert.strictEqual(newUser.password, "pass1");
    });
  });
});
