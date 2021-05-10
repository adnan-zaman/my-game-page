/**
 * Contains mock objects to be used during testing
 *
 */
const { assert } = require("sinon");
const sinon = require("sinon");

class MockResponse {
  constructor() {
    this.locals = {};
    this.send = sinon.fake();
    this.nextApp = { render: sinon.fake() };
    this.redirect = sinon.fake();
    this.json = sinon.fake();
    this.status = sinon.fake.returns(this);
  }
}

class MockRequest {
  constructor() {
    this.getApiHeaders = sinon.fake.returns({
      Accept: "application/json",
      "Client-ID": "abcde",
      Authorization: "Bearer 12345",
    });
    this.query = {};
    this.params = {};
    this.body = {};
    this.files = {};
    this.isAuthenticated = sinon.stub();
  }
}

/**
 * Mock of the IGDB API.
 */
class MockIgdb {
  /**
   *
   * Generated mock games will always have ids starting at 1
   * up to numOfGames. Their name will always be `game${id}`
   *
   * @param {number} numOfGames number of games in the the database
   * @param {array} noCovers array of game ids that shouldnt have covers
   */
  constructor(numOfGames, noCovers = []) {
    this.numOfGames = numOfGames;
    //making noCovers a hash map will make things easier during getGames()
    this.noCovers = {};
    for (const num of noCovers) {
      noCovers[num] = true;
    }

    this.gameSearch = this.gameSearch.bind(this);
    this.getGames = this.getGames.bind(this);
  }

  /**
   *
   * Mocks calling the IGDB game endpoint with the search field. In unit tests, axios.post
   * should be stubbed to call this. This will take the data
   * given to axios.post and return mock data.
   *
   * @param {string} url api request url
   * @param {string} data data string sent with url
   * @param {object} headers object with additional headers
   *
   * @returns an object that should accessed as if it were a response (ie, response.data contains results)
   */
  gameSearch(url, data, headers) {
    if (url !== "https://api.igdb.com/v4/games") throw Error("wrong endpoint");

    const queries = data.split(";");
    let limit = 10;
    let offset = 0;
    for (const query of queries) {
      //look for offset or limit query
      //split query by space
      //last element is the number
      if (query.indexOf("offset") > -1) {
        const terms = query.split(" ");
        offset = Number(terms[terms.length - 1]);
      } else if (query.indexOf("limit") > -1) {
        const terms = query.split(" ");
        limit = Number(terms[terms.length - 1]);
      }
    }

    return { data: this.getGames(offset, limit) };
  }

  /**
   * Generates search results. This method is used by
   * mockIgdbSearch() so can be used to compare reuslts
   * intests. Will take into account MockIgdb.numOfGames
   * and MockIgdb.noCovers
   * @param {number} offset how many games to skip
   * @param {number} limit how many games to return
   *
   * @returns array of search results
   */
  getGames(offset, limit) {
    const games = [];
    for (let i = 1; i <= limit; i++) {
      if (offset + i > this.numOfGames) break;
      const newGame = {
        id: offset + i,
        name: `game${offset + i}`,
      };
      if (!this.noCovers[offset + i])
        newGame.cover = { id: offset + i, url: `http//img${offset + i}.jpg` };
      games.push(newGame);
    }
    return games;
  }
}

exports.MockResponse = MockResponse;
exports.MockRequest = MockRequest;
exports.MockIgdb = MockIgdb;
