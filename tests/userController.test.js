const { MockResponse } = require("./mocks");
const sinon = require("sinon");
const db = require("../core/database");
const assert = require("assert").strict;

const userController = require("../controllers/userController");

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

    this.req.params.id = "" + displayedUser.id;
    this.req.user = viewingUser;

    await userController.getUserPage(this.req, this.res, this.nextFake);

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

    this.req.params.id = "" + user.id;
    this.req.user = user;

    await userController.getUserPage(this.req, this.res, this.nextFake);

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

    await userController.getUserPage(this.req, this.res, this.nextFake);
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

    await userController.getUserPage(this.req, this.res, this.nextFake);
    assert.strictEqual(err.status, 404);
  });
});
