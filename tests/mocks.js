/**
 * Contains mock objects to be used during testing
 *
 */
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
  }
}

exports.MockResponse = MockResponse;
exports.MockRequest = MockRequest;
