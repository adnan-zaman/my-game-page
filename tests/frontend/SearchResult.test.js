import React from "react";

import SearchResult from "../../components/SearchResult";

const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const sinon = require("sinon");
configure({ adapter: new Adapter() });

const { shallow, mount } = require("enzyme");
const expect = require("chai").expect;

describe("SearchResult component", function () {
  it("should display displayName", function () {
    const wrapper = shallow(
      <SearchResult
        displayName="ProTester"
        pageUrl="/user/1"
        profilePic="/profilePics/img1.jpg"
      />
    );
    expect(wrapper.find("h2")).to.have.lengthOf(1);
  });

  it("should link to user's page", function () {
    const wrapper = mount(
      <SearchResult
        displayName="ProTester"
        pageUrl="/user/1"
        profilePic="/profilePics/img1.jpg"
      />
    );
    expect(wrapper.find("a").getDOMNode()).to.have.property("href", "/user/1");
    wrapper.unmount();
  });

  it("should display to user's profile picture", function () {
    const wrapper = mount(
      <SearchResult
        displayName="ProTester"
        pageUrl="/user/1"
        profilePic="/profilePics/img1.jpg"
      />
    );
    expect(wrapper.find("img").getDOMNode()).to.have.property(
      "src",
      "/profilePics/img1.jpg"
    );
    wrapper.unmount();
  });
});
