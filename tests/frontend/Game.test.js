import React from "react";
import Game from "../../components/Game";
const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const sinon = require("sinon");
configure({ adapter: new Adapter() });

const { shallow, mount } = require("enzyme");
const expect = require("chai").expect;

describe("Game component", function () {
  it("should have no up button on first fave game", function () {
    const wrapper = shallow(<Game data-index="0" isEditing={true} />);
    expect(wrapper.find(".change-pos-up")).to.have.lengthOf(0);
  });

  it("should have no down button on last fave game", function () {
    const wrapper = shallow(
      <Game data-index="0" isLast={true} isEditing={true} />
    );
    expect(wrapper.find(".change-pos-down")).to.have.lengthOf(0);
  });

  it("should have no buttons at all on GameSearchBox games", function () {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(".change-pos-up")).to.have.lengthOf(0);
    expect(wrapper.find(".change-pos-down")).to.have.lengthOf(0);
  });

  it("should have both buttons for all else", function () {
    const wrapper = shallow(<Game data-index={2} isEditing={true} />);

    expect(wrapper.find(".change-pos-up")).to.have.lengthOf(1);
    expect(wrapper.find(".change-pos-down")).to.have.lengthOf(1);
  });

  it("should call props.changePosition on up button press", function () {
    const fake = sinon.fake();
    const wrapper = mount(
      <Game data-index="2" changePosition={fake} isEditing={true} />
    );

    wrapper.find(".change-pos-up").simulate("click");
    expect(fake.callCount).to.equal(1);
    expect(fake.args[0]).to.deep.equal([2, 1]);
  });

  it("should call props.changePosition on down button press", function () {
    const fake = sinon.fake();
    const wrapper = mount(
      <Game data-index="2" changePosition={fake} isEditing={true} />
    );
    wrapper.find(".change-pos-down").simulate("click");
    expect(fake.callCount).to.equal(1);
    expect(fake.args[0]).to.deep.equal([2, 3]);
  });
});
