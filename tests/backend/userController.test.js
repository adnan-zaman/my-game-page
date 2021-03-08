const { MockResponse } = require("../helpers/mocks");
const sinon = require("sinon");
const db = require("../../core/database");
const assert = require("assert").strict;

const userController = require("../../controllers/userController");

/*
 * (GET /users/:id) -> (getUserPage)
 */
describe("GET /user/:id", function () {
  beforeEach(function () {
    this.res = new MockResponse();
    this.req = { body: {}, params: {} };
    this.nextFake = sinon.fake();
    this.db = sinon.stub(db);
  });

  afterEach(function () {
    sinon.restore();
  });

  it("should send all info to display user page", async function () {
    //user whose page is being displayed
    const displayedUser = {
      id: 1,
      email: "first@abc.com",
      password: "password1",
      displayName: "first",
    };

    //user who is viewing page
    const viewingUser = {
      id: 2,
      email: "second@abc.com",
      password: "password1",
      displayName: "second",
    };

    const expectedGames = [
      { id: 1, name: "game1", coverurl: "http://test.jpg" },
      { id: 2, name: "game2", coverurl: "http://test.jpg" },
      { id: 3, name: "game3", coverurl: "http://test.jpg" },
      { id: 4, name: "game4", coverurl: "http://test.jpg" },
      { id: 5, name: "game5", coverurl: "http://test.jpg" },
    ];
    this.db.getUsersFavoriteGames.resolves(expectedGames);
    this.db.getUserById.resolves(displayedUser);

    this.req.params.id = "" + displayedUser.id;
    this.req.user = viewingUser;

    await userController.getUserPage(this.req, this.res, this.nextFake);

    assert.strictEqual(this.res.locals.displayName, "first");
    assert.strictEqual(this.res.locals.id, null);
    assert.strictEqual(this.nextFake.callCount, 0);
    assert.strictEqual(this.res.nextApp.render.lastArg, "/userPage");
    assert.deepStrictEqual(this.res.locals.games, expectedGames);
  });

  it("should send all info to display user page + user id if logged in", async function () {
    //user whose page is being displayed & viewing
    const user = {
      id: 1,
      email: "first@abc.com",
      password: "password1",
      displayName: "first",
    };

    this.req.params.id = "" + user.id;
    this.req.user = user;

    const expectedGames = [
      { id: 1, name: "game1", coverurl: "http://test.jpg" },
      { id: 2, name: "game2", coverurl: "http://test.jpg" },
      { id: 3, name: "game3", coverurl: "http://test.jpg" },
      { id: 4, name: "game4", coverurl: "http://test.jpg" },
      { id: 5, name: "game5", coverurl: "http://test.jpg" },
    ];
    this.db.getUsersFavoriteGames.resolves(expectedGames);
    this.db.getUserById.resolves(user);

    await userController.getUserPage(this.req, this.res, this.nextFake);

    assert.strictEqual(this.res.locals.displayName, "first");
    assert.strictEqual(this.res.locals.id, 1);
    assert.strictEqual(this.nextFake.callCount, 0);
    assert.strictEqual(this.res.nextApp.render.lastArg, "/userPage");
    assert.deepStrictEqual(this.res.locals.games, expectedGames);
  });

  it("should return 404 on user that doesn't exist", async function () {
    this.req.user = {
      id: 1,
      email: "first@abc.com",
      password: "password1",
      displayName: "first",
    };
    this.req.params.id = "0";
    let err;
    //so we can see the contents of the error that getUserPage should throw
    this.nextFake = function (e) {
      err = e;
    };

    await userController.getUserPage(this.req, this.res, this.nextFake);
    assert.strictEqual(err.status, 404);
  });

  it("should return 404 on non-number :id", async function () {
    this.req.user = {
      id: 1,
      email: "first@abc.com",
      password: "password1",
      displayName: "first",
    };
    this.req.params.id = "notanumber";
    let err;
    //so we can see the contents of the error that getUserPage should throw
    this.nextFake = function (e) {
      err = e;
    };

    await userController.getUserPage(this.req, this.res, this.nextFake);
    assert.strictEqual(err.status, 404);
  });
});
