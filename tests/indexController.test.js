const assert = require("assert").strict;
const { MockResponse } = require("./mocks");
const sinon = require("sinon");

const { body, check } = require("express-validator");
const { UserNotFoundError, IncorrectPasswordError } = require("../errors");

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
