/**
 * Contains mock objects to be used during testing
 *
 */
const sinon = require("sinon");

class MockResponse {
  constructor() {
    this.locals = {};
    this.send = sinon.fake();
    this.render = sinon.fake();
    this.redirect = sinon.fake();
  }
}

exports.MockResponse = MockResponse;