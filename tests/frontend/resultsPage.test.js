import React from "react";
import Toolbar from "../../components/Toolbar";
import ResultsPage from "../../pages/resultsPage";
import { TextField } from "../../components/FormFields";

const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const sinon = require("sinon");
configure({ adapter: new Adapter() });

const { shallow, mount } = require("enzyme");
const expect = require("chai").expect;

describe("resultsPage page", function () {
  it("should have same number of SearchResults as props.users", function () {
    const users = [];
    for (let i = 1; i <= 10; i++) {
      users.push({ id: i, displayName: `ProTester${i}` });
    }
    const wrapper = shallow(
      <ResultsPage users={users} hasNext={true} searchQuery="tester" page={0} />
    );
    //correct number of SearchResults with correct props
    for (const user of users) {
      expect(
        wrapper.find(
          `SearchResult[displayName="${user.displayName}"][pageUrl="/user/${user.id}"]`
        )
      ).to.have.lengthOf(1);
    }
  });
  it("should display message if no search results", function () {
    const wrapper = shallow(
      <ResultsPage users={[]} hasNext={false} searchQuery="tester" page={0} />
    );
    expect(wrapper.find("SearchResult")).to.have.lengthOf(0);
    expect(wrapper.find("p")).to.have.lengthOf(1);
  });
  it("should display prev and next button", function () {
    const users = [];
    for (let i = 1; i <= 6; i++) {
      users.push({ id: i, displayName: `ProTester${i}` });
    }
    const wrapper = shallow(
      <ResultsPage users={users} hasNext={true} searchQuery="tester" page={1} />
    );
    //prev button
    expect(
      wrapper.find('a[href="/search?query=tester&page=0"]')
    ).to.have.lengthOf(1);
    //next button
    expect(
      wrapper.find('a[href="/search?query=tester&page=2"]')
    ).to.have.lengthOf(1);
  });
  it("should not display prev page button on page = 0", function () {
    const users = [];
    for (let i = 1; i <= 6; i++) {
      users.push({ id: i, displayName: `ProTester${i}` });
    }
    const wrapper = shallow(
      <ResultsPage users={users} hasNext={true} searchQuery="tester" page={0} />
    );
    //next button
    expect(
      wrapper.find('a[href="/search?query=tester&page=1"]')
    ).to.have.lengthOf(1);

    //there should only be one button; the next button
    expect(wrapper.find("a")).to.have.lengthOf(1);
  });
  it("should not display next button on last page", function () {
    const users = [];
    for (let i = 1; i <= 3; i++) {
      users.push({ id: i, displayName: `ProTester${i}` });
    }
    const wrapper = shallow(
      <ResultsPage
        users={users}
        hasNext={false}
        searchQuery="tester"
        page={4}
      />
    );
    //prev button
    expect(
      wrapper.find('a[href="/search?query=tester&page=3"]')
    ).to.have.lengthOf(1);
    //there should only be one button; the prev button
    expect(wrapper.find("a")).to.have.lengthOf(1);
  });
  it("should not display next or prev button if last page is first", function () {
    const users = [];
    for (let i = 1; i <= 3; i++) {
      users.push({ id: i, displayName: `ProTester${i}` });
    }
    const wrapper = shallow(
      <ResultsPage
        users={users}
        hasNext={false}
        searchQuery="tester"
        page={0}
      />
    );
    //there should be no buttons
    expect(wrapper.find("a")).to.have.lengthOf(0);
  });
});
