/**
 * Contains mock objects to be used during testing
 *
 */

class MockResponse {
  constructor() {
    this.locals = {};
    this.sendPath = null;
    this.renderPath = null;
    this.redirectPath = null;
  }

  send(path) {
    this.sendPath = path;
  }

  render(path) {
    this.renderPath = path;
  }

  redirect(path) {
    this.redirectPath = path;
  }
}

exports.MockResponse = MockResponse;
