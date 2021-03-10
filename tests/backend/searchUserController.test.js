const sinon = require("sinon");
const assert = require("assert").strict;
const { MockRequest, MockResponse } = require("../helpers/mocks");
const db = require("../../core/database");

const searchUserController = require("../../controllers/searchUserController");

/*
usage:

GET /search?query={search+term}&page={pageNumber}
    -search term is a string
    -page number should be >= 0
returns:
  res.locals.users: [{id, displayName}], <- array of search results (users)
  res.locals.hasNext: (boolean) <- whether or not there is a next page
  res.locals.searchQuery: (string) <- the search query
  res.locals.page: (number) <- the page being rendered
         

data flow:

GET -> searchTermValidation -> pageNumberValidation -> catchErrors -> userSearchController

*/
describe("GET /search", function () {
  beforeEach(function () {
    this.res = new MockResponse();
    this.req = new MockRequest();
    this.nextFake = sinon.fake();
    sinon.stub(db, "searchUser");
    db.searchUser.callsFake(() => []);
  });

  afterEach(function () {
    sinon.restore();
  });

  it("should shorten search terms greater than 50 characters to 50", async function () {
    this.req.query.query = "a";
    this.req.query.page = "0";
    for (let i = 0; i < 100; i++) this.req.query.query += "a";

    await searchUserController(this.req, this.res, this.nextFake);
    assert.strictEqual(db.searchUser.args[0][0].length, 50);
  });

  it("should call db with empty string if search term does not exist", async function () {
    this.req.query.page = "0";
    await searchUserController(this.req, this.res, this.nextFake);
    assert.strictEqual(db.searchUser.args[0][0], "");
  });

  it("should send data on valid input", async function () {
    this.req.query.query = "person";
    this.req.query.page = "0";
    const users = [];
    for (let i = 1; i <= 20; i++)
      users.push({ id: i, displayName: `person${i}` });
    db.searchUser.callsFake(() => [...users]);

    await searchUserController(this.req, this.res, this.nextFake);

    const args = db.searchUser.args[0];
    assert.strictEqual(args[0], "person"); //searchTerm
    assert.strictEqual(args[1], 0); //offset
    assert.strictEqual(this.res.nextApp.render.lastArg, "/resultsPage");
    assert.deepStrictEqual(this.res.locals.users, users.slice(0, 10));
    assert.strictEqual(this.res.locals.searchQuery, "person");
    assert.strictEqual(this.res.locals.page, 0);
  });

  it("should send data on valid input & page > 0", async function () {
    this.req.query.query = "person";
    this.req.query.page = "4";
    const users = [];
    for (let i = 1; i <= 20; i++)
      users.push({ id: i, displayName: `person${i}` });
    db.searchUser.callsFake(() => [...users]);

    await searchUserController(this.req, this.res, this.nextFake);

    const args = db.searchUser.args[0];
    assert.strictEqual(args[0], "person"); //searchTerm
    assert.strictEqual(args[1], 40); //offset
    assert.strictEqual(this.res.nextApp.render.lastArg, "/resultsPage");
    assert.deepStrictEqual(this.res.locals.users, users.slice(0, 10));
    assert.strictEqual(this.res.locals.searchQuery, "person");
    assert.strictEqual(this.res.locals.page, 4);
  });
  it("should send empty list if no results", async function () {
    this.req.query.query = "test";
    this.req.query.page = "6";
    const users = [];

    db.searchUser.callsFake(() => []);

    await searchUserController(this.req, this.res, this.nextFake);

    const args = db.searchUser.args[0];
    assert.strictEqual(args[0], "test"); //searchTerm
    assert.strictEqual(args[1], 60); //offset
    assert.strictEqual(this.res.nextApp.render.lastArg, "/resultsPage");
    assert.deepStrictEqual(this.res.locals.users, []);
  });

  it("should not render 'next' button on last page if last page is full", async function () {
    this.req.query.query = "test";
    this.req.query.page = "4";
    const users = [];
    for (let i = 1; i <= 10; i++)
      users.push({ id: i, displayName: `test${i}` });
    db.searchUser.callsFake(() => [...users]);

    await searchUserController(this.req, this.res, this.nextFake);

    const args = db.searchUser.args[0];
    assert.strictEqual(args[0], "test"); //searchTerm
    assert.strictEqual(args[1], 40); //offset
    assert.strictEqual(this.res.nextApp.render.lastArg, "/resultsPage");
    assert.deepStrictEqual(this.res.locals.users, users);
    assert.strictEqual(this.res.locals.hasNext, false);
  });

  it("should not render 'next' button on last page if last page is not full", async function () {
    this.req.query.query = "test";
    this.req.query.page = "4";
    const users = [];
    for (let i = 1; i <= 7; i++) users.push({ id: i, displayName: `test${i}` });
    db.searchUser.callsFake(() => [...users]);

    await searchUserController(this.req, this.res, this.nextFake);

    const args = db.searchUser.args[0];
    assert.strictEqual(args[0], "test"); //searchTerm
    assert.strictEqual(args[1], 40); //offset
    assert.strictEqual(this.res.nextApp.render.lastArg, "/resultsPage");
    assert.deepStrictEqual(this.res.locals.users, users);
    assert.strictEqual(this.res.locals.hasNext, false);
  });
});
