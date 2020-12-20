const { MockResponse } = require("./mocks");
const sinon = require("sinon");
const getToken = require("../core/getHeaders");
const { param } = require("express-validator");
const axios = require("axios");
const assert = require("assert").strict;

const searchController = require("../controllers/searchController");
const getHeaders = require("../core/getHeaders");

// GET -> queryValidator -> pageValidator -> searchController
describe("GET /api/search", function () {
  this.timeout(5000);
  beforeEach(async function () {
    this.headers = await getHeaders();
    this.res = new MockResponse();
    this.req = {};
  });

  it("should send error on improper input", async function () {
    //invalidate query param
    const mockValidation = param("query")
      .custom((value) => false)
      .withMessage("Invalid query.");
    await mockValidation(this.req, this.res, sinon.fake());
    await searchController(this.req, this.res);
    assert.strictEqual(this.res.json.calledWith("Invalid query."), true);
  });

  it("should send data on proper input", async function () {
    //get data manually to compare with searchController
    let response = await axios.post(
      "https://api.igdb.com/v4/games",
      `search "zelda"; fields name, cover.url;`,
      {
        headers: this.headers,
      }
    );
    const expected = response.data.map(function (elt) {
      return { id: elt.id, name: elt.name, coverurl: elt.cover.url };
    });
    this.req.params = { query: "zelda", page: "0" };
    await searchController(this.req, this.res);
    assert.strictEqual(this.res.json.calledWith(expected), true);
  });

  it("should send data on proper input and page > 0", async function () {
    //get data manually to compare with searchController
    let response = await axios.post(
      "https://api.igdb.com/v4/games",
      `search "zelda"; fields name, cover.url; offset 30;`,
      {
        headers: this.headers,
      }
    );
    const expected = response.data.map(function (elt) {
      const coverurl = elt.cover ? elt.cover.url : "https://imgs.default.jpg";
      return { id: elt.id, name: elt.name, coverurl };
    });
    this.req.params = { query: "zelda", page: "3" };
    await searchController(this.req, this.res);
    assert.strictEqual(this.res.json.calledWith(expected), true);
  });

  it("should send empty list when there are no more games", async function () {
    this.req.params = { query: "zelda", page: "11" };
    await searchController(this.req, this.res);
    assert.strictEqual(this.res.json.calledWith([]), true);
  });
});
