const { MockResponse, MockRequest } = require("./mocks");
const sinon = require("sinon");
const { param } = require("express-validator");
const axios = require("axios");
const assert = require("assert").strict;

const searchController = require("../controllers/searchController");

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
    //this is what we expect searchController to output
    const expectedGames = [
      { id: 1, name: "zelda1", coverurl: "http://img1.jpg" },
      { id: 2, name: "zelda2", coverurl: "http://img2.jpg" },
      { id: 3, name: "zelda3", coverurl: "http://img3.jpg" },
      { id: 4, name: "zelda4", coverurl: "http://img4.jpg" },
      { id: 5, name: "zelda5", coverurl: "http://img5.jpg" },
      { id: 6, name: "zelda6", coverurl: "http://img6.jpg" },
      { id: 7, name: "zelda7", coverurl: "http://img7.jpg" },
      { id: 8, name: "zelda8", coverurl: "http://img8.jpg" },
      { id: 9, name: "zelda9", coverurl: "http://img9.jpg" },
      { id: 10, name: "zelda10", coverurl: "http://img10.jpg" },
    ];
    //this is the fake output generated by the axios stub
    const fakeApiOutput = expectedGames.map((elt) => {
      const id = elt.id;
      const name = elt.name;
      const url = elt.coverurl;
      return { id, name, cover: { id, url } };
    });
    axios.post.returns({ data: fakeApiOutput });
    this.req.params = { query: "zelda", page: "0" };
    await searchController(this.req, this.res);

    const apiQuery = axios.post.args[0][1];

    assert.strictEqual(this.res.json.calledWithExactly(expectedGames), true);
    assert.strictEqual(apiQuery.indexOf("offset 0") > -1, true);
  });

  it("should send data on proper input and page > 0", async function () {
    //this is what we expect searchController to output
    const expectedGames = [
      { id: 1, name: "zelda1", coverurl: "http://img1.jpg" },
      { id: 2, name: "zelda2", coverurl: "http://img2.jpg" },
      { id: 3, name: "zelda3", coverurl: "http://img3.jpg" },
      { id: 4, name: "zelda4", coverurl: "http://img4.jpg" },
      { id: 5, name: "zelda5", coverurl: "http://img5.jpg" },
      { id: 6, name: "zelda6", coverurl: "http://img6.jpg" },
      { id: 7, name: "zelda7", coverurl: "http://img7.jpg" },
      { id: 8, name: "zelda8", coverurl: "http://img8.jpg" },
      { id: 9, name: "zelda9", coverurl: "http://img9.jpg" },
      { id: 10, name: "zelda10", coverurl: "http://img10.jpg" },
    ];
    //this is the fake output generated by the axios stub
    const fakeApiOutput = expectedGames.map((elt) => {
      const id = elt.id;
      const name = elt.name;
      const url = elt.coverurl;
      return { id, name, cover: { id, url } };
    });
    axios.post.returns({ data: fakeApiOutput });
    this.req.params = { query: "zelda", page: "3" };

    await searchController(this.req, this.res);
    const apiQuery = axios.post.args[0][1];

    assert.strictEqual(this.res.json.calledWith(expectedGames), true);
    assert.strictEqual(apiQuery.indexOf("offset 30") > -1, true);
  });

  it("should send empty list when there are no more games", async function () {
    axios.post.returns({ data: [] });
    this.req.params = { query: "zelda", page: "11" };

    await searchController(this.req, this.res);
    const apiQuery = axios.post.args[0][1];

    assert.strictEqual(this.res.json.calledWith([]), true);
    assert.strictEqual(apiQuery.indexOf("offset 110") > -1, true);
  });
});
