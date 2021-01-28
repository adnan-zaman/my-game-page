const { MockResponse, MockRequest, MockIgdb } = require("./mocks");
const sinon = require("sinon");
const { param } = require("express-validator");
const axios = require("axios");
const assert = require("assert").strict;

const searchController = require("../controllers/searchController");

//usage:
//GET /api/search/{searchTerm}/{pageNumber}

//response:
// {
//   results: [{id, name, coverurl}, ...], -array of games
//   hasNext: (boolean) -whether or not there is a next page
// }
//error:
// {message: (string)}

// GET -> queryValidator -> pageValidator -> searchController
describe("GET /api/search", function () {
  beforeEach(function () {
    this.res = new MockResponse();
    this.req = new MockRequest();
    sinon.stub(axios, "post");
  });

  afterEach(function () {
    sinon.restore();
  });

  it("should send error on improper input", async function () {
    //invalidate query param
    const mockValidation = param("query")
      .custom((value) => false)
      .withMessage("Invalid query.");
    await mockValidation(this.req, this.res, sinon.fake());
    await searchController(this.req, this.res);
    assert.strictEqual(this.res.status.firstArg, 400);
    assert.strictEqual(
      this.res.json.calledWith({ message: "Invalid query." }),
      true
    );
  });

  it("should send data on proper input", async function () {
    this.igdb = new MockIgdb(50, [5, 15, 21, 22, 47]);
    axios.post.callsFake(this.igdb.gameSearch);
    this.req.params = { query: "zelda", page: "0" };
    const expectedSearchResults = formatSearchResults(
      this.igdb.getGames(0, 10)
    );
    await searchController(this.req, this.res);

    const controllerResponse = this.res.json.args[0][0];

    assert.deepStrictEqual(controllerResponse.results, expectedSearchResults);
    assert.strictEqual(controllerResponse.hasNext, true);
  });

  it("should send data on proper input and page > 0", async function () {
    this.igdb = new MockIgdb(50, [5, 15, 21, 22, 47]);
    axios.post.callsFake(this.igdb.gameSearch);
    this.req.params = { query: "zelda", page: "3" };
    const expectedSearchResults = formatSearchResults(
      this.igdb.getGames(30, 10)
    );
    await searchController(this.req, this.res);
    const controllerResponse = this.res.json.args[0][0];
    assert.deepStrictEqual(controllerResponse.results, expectedSearchResults);
    assert.strictEqual(controllerResponse.hasNext, true);
  });

  it("should detect last page if last page is full", async function () {
    this.igdb = new MockIgdb(50, [5, 15, 21, 22, 47]);
    axios.post.callsFake(this.igdb.gameSearch);
    this.req.params = { query: "zelda", page: "4" };
    const expectedSearchResults = formatSearchResults(
      this.igdb.getGames(40, 10)
    );
    await searchController(this.req, this.res);
    const controllerResponse = this.res.json.args[0][0];
    assert.deepStrictEqual(controllerResponse.results, expectedSearchResults);
    assert.strictEqual(controllerResponse.hasNext, false);
  });

  it("should detect last page if last page is not full", async function () {
    this.igdb = new MockIgdb(47, [5, 15, 21, 22, 47]);
    axios.post.callsFake(this.igdb.gameSearch);
    this.req.params = { query: "zelda", page: "4" };
    const expectedSearchResults = formatSearchResults(
      this.igdb.getGames(40, 10)
    );
    await searchController(this.req, this.res);
    const controllerResponse = this.res.json.args[0][0];
    assert.deepStrictEqual(controllerResponse.results, expectedSearchResults);
    assert.strictEqual(controllerResponse.hasNext, false);
  });

  it("should send empty list if there are no results", async function () {
    this.igdb = new MockIgdb(0);
    axios.post.callsFake(this.igdb.gameSearch);
    this.req.params = { query: "zelda", page: "1" };
    const expectedSearchResults = formatSearchResults(
      this.igdb.getGames(10, 10)
    );
    await searchController(this.req, this.res);
    const controllerResponse = this.res.json.args[0][0];
    assert.deepStrictEqual(controllerResponse.results, expectedSearchResults);
    assert.strictEqual(controllerResponse.hasNext, false);
  });
});

/**
 * Takes search results from the igdb api and formats them to how
 * they should be when sending to the frontend.
 *
 * @param {array} rawSearchResults array of game search results from igdb api
 */
function formatSearchResults(rawSearchResults) {
  return rawSearchResults.map((elt) => {
    const id = elt.id;
    const name = elt.name;
    const coverurl = elt.cover ? elt.cover.url : "/images/default-game.png";
    return { id, name, coverurl };
  });
}
