const { MockResponse, MockRequest } = require("../helpers/mocks");
const sinon = require("sinon");
const assert = require("assert").strict;
const axios = require("axios");

const updateFavesController = require("../../controllers/updateFavoritesController");
const db = require("../../core/database");

describe("PUT /api/favorites/:userId", function () {
  beforeEach(function () {
    this.res = new MockResponse();
    this.req = new MockRequest();
    this.req.params = { userId: "13" };

    this.nextFake = sinon.fake();
    sinon.stub(axios, "post");
    sinon.stub(db);
  });

  afterEach(function () {
    sinon.restore();
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
        this.res.json.calledWith({ message: "No duplicate elements allowed." }),
        true
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
        this.res.json.calledWith({
          message: "Max length of favorite games is 5.",
        }),
        true
      );
    });
  });

  describe("checkGames", function () {
    it("should call IGDB api for games database doesn't have", async function () {
      this.req.body = [1, 10, 200, 210, 119];
      db.getGameById.callsFake((id) => {
        return { id, name: `game${id}`, coverurl: `http://game${id}.jpg` };
      });
      db.getGameById.withArgs(210).resolves(undefined);
      axios.post.resolves({
        data: [
          {
            id: 210,
            name: "game210",
            cover: { id: 2101, url: "http://game210.jpg" },
          },
        ],
      });

      await updateFavesController.checkGames(this.req, this.res, this.nextFake);
      const apiQuery = axios.post.args[0][1];

      assert.strictEqual(axios.post.calledOnce, true);
      assert.strictEqual(apiQuery.indexOf("where id = 210") > -1, true);
    });
    it("shouldn't call IGDB api for games database does have", async function () {
      this.req.body = [1, 10, 200, 210, 119];
      db.getGameById.callsFake((id) => {
        return { id, name: `game${id}`, coverurl: `http://game${id}.jpg` };
      });
      axios.post.resolves({
        data: [
          {
            id: 210,
            name: "game210",
            cover: { id: 2101, url: "http://game210.jpg" },
          },
        ],
      });

      await updateFavesController.checkGames(this.req, this.res, this.nextFake);

      assert.strictEqual(axios.post.callCount === 0, true);
    });
    it("should add all games retrieved from api to req", async function () {
      this.req.body = [15, 18, 2029, 1, 99999];
      db.getGameById.callsFake((id) => {
        return { id, name: `game${id}`, coverurl: `http://game${id}.jpg` };
      });
      db.getGameById.withArgs(2029).resolves(undefined);
      db.getGameById.withArgs(99999).resolves(undefined);
      const expectedAdded = [
        {
          id: 99999,
          name: "game99999",
          cover: { id: 999991, url: "http://game99999.jpg" },
        },
        {
          id: 2029,
          name: "game2029",
          cover: { id: 20291, url: "http://game2029.jpg" },
        },
      ];

      axios.post.onFirstCall().resolves({ data: [expectedAdded[0]] });
      axios.post.onSecondCall().resolves({ data: [expectedAdded[1]] });

      await updateFavesController.checkGames(this.req, this.res, this.nextFake);

      assert.strictEqual(this.nextFake.calledOnce, true);
      assert.strictEqual(this.req.gamesToAdd.length, 2);
      //order doesnt matter, assure both games to be added are there
      const found = {};
      for (const game of this.req.gamesToAdd) {
        if (game.id === 99999 || game.id === 2029) found[game.id] = game;
      }
      assert.deepStrictEqual(found[99999], expectedAdded[0]);
      assert.deepStrictEqual(found[2029], expectedAdded[1]);
    });
    it("should throw error if any games don't exist in api", async function () {
      this.req.body = [25, 4, 4102, 528491, 13];

      db.getGameById.callsFake((id) => {
        return { id, name: `game${id}`, coverurl: `http://game${id}.jpg` };
      });

      db.getGameById.withArgs(4102).resolves(undefined);
      db.getGameById.withArgs(4).resolves(undefined);

      axios.post.onFirstCall().resolves({
        data: [
          {
            id: 4,
            name: "game4",
            cover: { id: 4, url: "http://game4.jpg" },
          },
        ],
      });
      axios.post.onSecondCall().resolves({ data: [] });

      await updateFavesController.checkGames(this.req, this.res, this.nextFake);

      assert.strictEqual(this.res.status.calledWith(400), true);
      assert.strictEqual(
        this.res.json.calledWith({
          message: "One of the requested games do not exist.",
        }),
        true
      );
      assert.strictEqual(this.nextFake.callCount, 0);
    });
  });

  describe("addGames", function () {
    it("should add games to db with proper format", async function () {
      this.req.gamesToAdd = [
        {
          id: 99999,
          name: "game99999",
          cover: { id: 999991, url: "http://game99999.jpg" },
        },
        {
          id: 2029,
          name: "game2029",
          cover: { id: 20291, url: "http://game2029.jpg" },
        },
      ];

      await updateFavesController.addGames(this.req, this.res, this.nextFake);

      assert.strictEqual(
        db.addGame.calledWithExactly(
          99999,
          "game99999",
          "http://game99999.jpg"
        ),
        true
      );
      assert.strictEqual(
        db.addGame.calledWithExactly(2029, "game2029", "http://game2029.jpg"),
        true
      );
      assert.strictEqual(this.nextFake.callCount, 1);
    });
    it("should not call db if there are no games to add", async function () {
      this.req.gamesToAdd = [];

      await updateFavesController.addGames(this.req, this.res, this.nextFake);

      assert.strictEqual(db.addGame.callCount, 0);
      assert.strictEqual(this.nextFake.callCount, 1);
    });
  });

  describe("updateFavorites", function () {
    it("should change ranks for existing favorite games", async function () {
      this.req.body = [1, 10, 9021, 35, 47];
      db.getUsersFavoriteGames.resolves([
        { id: 1, name: "game1", coverurl: "http://game1.jpg" },
        { id: 10, name: "game10", coverurl: "http://game10.jpg" },
        { id: 35, name: "game35", coverurl: "http://game35.jpg" },
        { id: 47, name: "game47", coverurl: "http://game47.jpg" },
        { id: 9021, name: "game9021", coverurl: "http://game9021.jpg" },
      ]);

      await updateFavesController.updateFavorites(this.req, this.res);

      assert.strictEqual(db.changeFavoriteGameRank.callCount, 3);
      assert.strictEqual(db.addFavoriteGame.callCount, 0);
      assert.strictEqual(db.removeFavoriteGame.callCount, 0);
      assert.strictEqual(
        db.changeFavoriteGameRank.calledWithExactly(13, 9021, 3),
        true
      );
      assert.strictEqual(
        db.changeFavoriteGameRank.calledWithExactly(13, 35, 4),
        true
      );
      assert.strictEqual(
        db.changeFavoriteGameRank.calledWithExactly(13, 47, 5),
        true
      );
    });

    it("should add games that werent favorite games before", async function () {
      this.req.body = [1, 10, 35, 47, 9021];
      db.getUsersFavoriteGames.resolves([
        { id: 1, name: "game1", coverurl: "http://game1.jpg" },
        { id: 10, name: "game10", coverurl: "http://game10.jpg" },
        { id: 35, name: "game35", coverurl: "http://game35.jpg" },
        { id: 47, name: "game47", coverurl: "http://game47.jpg" },
      ]);

      await updateFavesController.updateFavorites(this.req, this.res);

      assert.strictEqual(db.changeFavoriteGameRank.callCount, 0);
      assert.strictEqual(db.addFavoriteGame.callCount, 1);
      assert.strictEqual(db.removeFavoriteGame.callCount, 0);

      assert.strictEqual(
        db.addFavoriteGame.calledWithExactly(13, 9021, 5),
        true
      );
    });

    it("should remove games that are no longer favorite", async function () {
      this.req.body = [];
      db.getUsersFavoriteGames.resolves([
        { id: 1, name: "game1", coverurl: "http://game1.jpg" },
      ]);

      await updateFavesController.updateFavorites(this.req, this.res);

      assert.strictEqual(db.changeFavoriteGameRank.callCount, 0);
      assert.strictEqual(db.addFavoriteGame.callCount, 0);
      assert.strictEqual(db.removeFavoriteGame.callCount, 1);

      assert.strictEqual(db.removeFavoriteGame.calledWithExactly(13, 1), true);
    });

    it("should handle all three cases at the same time", async function () {
      this.req.body = [10, 19, 24, 84012];
      db.getUsersFavoriteGames.resolves([
        { id: 1, name: "game1", coverurl: "http://game11.jpg" },
        { id: 24, name: "game24", coverurl: "http://game24.jpg" },
        { id: 19, name: "game19", coverurl: "http://game19.jpg" },
        { id: 7854, name: "game7854", coverurl: "http://game7854.jpg" },
        { id: 84012, name: "game84012", coverurl: "http://game84012.jpg" },
      ]);

      await updateFavesController.updateFavorites(this.req, this.res);

      assert.strictEqual(db.changeFavoriteGameRank.callCount, 3);
      assert.strictEqual(
        db.changeFavoriteGameRank.calledWithExactly(13, 19, 2),
        true
      );
      assert.strictEqual(
        db.changeFavoriteGameRank.calledWithExactly(13, 24, 3),
        true
      );
      assert.strictEqual(
        db.changeFavoriteGameRank.calledWithExactly(13, 84012, 4),
        true
      );

      assert.strictEqual(db.addFavoriteGame.callCount, 1);
      assert.strictEqual(db.addFavoriteGame.calledWithExactly(13, 10, 1), true);

      assert.strictEqual(db.removeFavoriteGame.callCount, 2);
      assert.strictEqual(db.removeFavoriteGame.calledWithExactly(13, 1), true);
      assert.strictEqual(
        db.removeFavoriteGame.calledWithExactly(13, 7854),
        true
      );
    });
  });
});
