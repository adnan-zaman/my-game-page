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
    const wrapper = shallow(<Toolbar />);
    expect(wrapper.find("Form")).to.have.lengthOf(1);
  });
  it("should contain a TextField component inside the Form", function () {
    const wrapper = shallow(<Toolbar />);
    expect(wrapper.find("Form").find("TextField")).to.have.lengthOf(1);
  });
  it("should redirect to appropriate page on submitting form", function () {
    const wrapper = mount(<Toolbar />);
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
});
