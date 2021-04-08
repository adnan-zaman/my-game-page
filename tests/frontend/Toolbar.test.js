import React from "react";
import Toolbar from "../../components/Toolbar";
import Form from "../../components/Form";
import { TextField } from "../../components/FormFields";

const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const sinon = require("sinon");
configure({ adapter: new Adapter() });

const { shallow, mount } = require("enzyme");
const expect = require("chai").expect;

describe("Toolbar component", function () {
  it("should contain a Form component", function () {
    const wrapper = shallow(
      <Toolbar userId={1} profilePic="/images/img1.jpg" />
    );
    expect(wrapper.find("Form")).to.have.lengthOf(1);
  });
  it("should contain a TextField component inside the Form", function () {
    const wrapper = shallow(
      <Toolbar userId={1} profilePic="/images/img1.jpg" />
    );
    expect(wrapper.find("Form").find("TextField")).to.have.lengthOf(1);
  });
  it("should redirect to appropriate page on submitting form", function () {
    const wrapper = mount(<Toolbar userId={1} profilePic="/images/img1.jpg" />);
    wrapper
      .find("Form")
      .find("TextField")
      .find("input")
      .simulate("change", { target: { value: "testsearch" } });

    //confirm get request to right endpoint
    const formWrapper = wrapper.find('Form[method="get"][action="/search"]');
    expect(formWrapper).to.have.lengthOf(1);

    //confirm correct values
    const actualForm = formWrapper.getDOMNode();
    const formValues = [];
    for (const elt of actualForm.elements) {
      if (elt.type !== "submit") formValues.push(elt.name + "=" + elt.value);
    }
    expect(formValues).to.have.lengthOf(2);
    expect(formValues).to.contain("query=testsearch");
    expect(formValues).to.contain("page=0");
    wrapper.unmount();
  });
  it("it should link to user's page through profile picture", function () {
    const wrapper = shallow(
      <Toolbar userId={1} profilePic="/images/img1.jpg" />
    );
    const linkWrapper = wrapper.find("a[href='/user/1']");
    expect(linkWrapper).to.have.lengthOf(1);
    expect(linkWrapper.find('img[src="/images/img1.jpg"]')).to.have.lengthOf(1);
  });
  it("should have dropdown content that is default invisible", function () {
    const wrapper = mount(<Toolbar userId={1} profilePic="/images/img1.jpg" />);
    expect(
      getComputedStyle(wrapper.find(".dropdown-content").getDOMNode()).style
    ).to.have.property("display", "none");
  });
  it("should show dropdown content after button is clicked", function () {
    const wrapper = mount(<Toolbar userId={1} profilePic="/images/img1.jpg" />);
    wrapper.find(".dropdown-button").simulate("click");
    expect(
      getComputedStyle(wrapper.find(".dropdown-content").getDOMNode()).style
    ).to.have.property("display", "block");
  });
  it("should delete session and redirect to login page on clicking sign out", function () {});
});
