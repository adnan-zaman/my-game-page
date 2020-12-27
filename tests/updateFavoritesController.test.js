const { MockResponse } = require("./mocks");
const sinon = require("sinon");
const assert = require("assert").strict;

const updateFavesController = require("../controllers/updateFavoritesController");

describe("PUT /api/favorites/:userId", function () {
  beforeEach(function () {
    this.res = new MockResponse();
    this.req = {};
  });

  describe("favoritesValidator", function () {
    it("should send error if there are duplicate elements", function () {
      this.req.body = [1, 2, 3, 4, 1];
      updateFavesController.favoritesValidator(
        this.req,
        this.res,
        sinon.fake()
      );
      assert.strictEqual(this.res.status.calledWith(400), true);
      assert.strictEqual(
        this.res.json.calledWith(
          { message: "No duplicate elements allowed." },
          true
        )
      );
    });

    it("should send error if length greater than 5", function () {
      this.req.body = [1, 2, 3, 4, 5, 6];
      updateFavesController.favoritesValidator(
        this.req,
        this.res,
        sinon.fake()
      );
      assert.strictEqual(this.res.status.calledWith(400), true);
      assert.strictEqual(
        this.res.json.calledWith(
          { message: "Max length of favorite games is 5." },
          true
        )
      );
    });
  });

  describe("checkGames", function () {});

  describe("addGames", function () {});

  describe("updateFavorites", function () {});
});
