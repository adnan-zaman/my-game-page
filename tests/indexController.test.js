const assert = require("assert").strict;
const { MockResponse } = require("./mocks");

const indexController = require("../controllers/indexController");

describe("GET /", function () {
  describe("indexGet", function () {
    beforeEach(function () {
      this.res = new MockResponse();
      this.req = {};
    });

    it("should render login if user not authenticated", function () {
      this.req.isAuthenticated = () => false;
      indexController.loginGet(this.req, this.res);
      assert.strictEqual(this.res.renderPath, "login");
    });

    it("should redirect to /users if user is authenticated", function () {
      this.req.isAuthenticated = () => true;
      indexController.loginGet(this.req, this.res);
      assert.strictEqual(this.res.redirectPath, "/users");
    });
  });
});

/*
 * (POST /) -> (emailValidator) -> (passwordValidator) ->
 * (indexFormErrorHandler) -> (passport.authenticate) -> (indexLoginSuccess) ->
 * (indexLoginFail)
 */
describe("POST /", function () {
  beforeEach(function () {
    this.res = new MockResponse();
    this.req = {};
  });
});
