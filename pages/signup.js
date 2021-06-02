import React, { useState, useRef } from "react";
import Form from "../components/Form";
import {
  TextField,
  EmailField,
  PasswordField,
  FileUploadField,
  HiddenField,
} from "../components/FormFields";

import $ from "jquery";

export default function Signup(props) {
  console.log(props);
  const [errorMessage, setErrorMessage] = useState(props.errorMessage || "");

  //page of the form
  const [page, setPage] = useState(props.page || 0);

  //values of the first page are saved so they can be repopulated
  //user goes from page 1 back to page 0
  const formValues = useRef({
    email: props.email || "",
    displayName: props.displayName || "",
    password: props.password || "",
  });

  //text for sign up button
  const [signupText, setSignupText] = useState("Skip");

  console.log("signup redraw");
  console.log(formValues.current);
  //a page of the form is a list of FormFields
  const firstPageFields = [
    <TextField
      value={formValues.current.displayName}
      label="Display Name"
      name="displayName"
      required={false}
      max={20}
      key={0}
    />,
    <EmailField
      value={formValues.current.email}
      label="Email"
      name="email"
      required={false}
      max={50}
      key={1}
    />,
    <PasswordField
      value={formValues.current.password}
      label="Password"
      name="password"
      required={false}
      max={50}
      min={1}
      key={2}
    />,
  ];

  //HiddenFields contain the values from the first page
  //so they are also sent when the form is finally sent
  const secondPageFields = [
    <FileUploadField
      value=""
      label="Profile Picture"
      name="profilePicture"
      key={0}
    />,
    <HiddenField label="email" name="email" value="eauk" key={1} />,
    <HiddenField
      label="password"
      name="password"
      value={formValues.current.password}
      key={2}
    />,
    <HiddenField
      label="Display Name"
      name="displayName"
      value={formValues.current.displayName}
      key={3}
    />,
  ];

  function handleSubmit(e, errorInfo, values, cleanup) {
    if (errorInfo) {
      e.preventDefault();
      return setErrorMessage(errorInfo.message);
    }

    if (page === 0) {
      e.preventDefault();
      for (const value in values) formValues.current[value] = values[value];
      setPage(1);
      cleanup();
    }

    //e.preventDefault();
    console.log(formValues.current);
    setErrorMessage("");
  }

  function handleChange(e) {
    if (e.target.files && e.target.files.length === 1) setSignupText("Sign Up");
    else setSignupText("Skip");
  }

  //list of buttons for the Form
  const buttonList =
    page === 0
      ? [
          <button className="btn btn-primary mx-3" type="submit" key={0}>
            Next
          </button>,
        ]
      : [
          <button
            className="btn btn-secondary mx-3"
            type="button"
            onClick={(e) => {
              setPage(0);
              setSignupText("Skip");
              //return value is list of FormField states
              //we want Form to have after switching back to page 0
              return [
                formValues.current.displayName,
                formValues.current.email,
                formValues.current.password,
              ];
            }}
            key={0}
          >
            Prev
          </button>,
          <button
            className="btn btn-primary mx-3"
            type="submit"
            key={1}
            lol={32}
          >
            {signupText}
          </button>,
        ];
  return (
    <>
      <img src="/images/logo.png" className="main-logo-img" />
      <h1 className="main-header logo-name mb-3">MyGamePage</h1>
      <div className="main-form-container w-75">
        <Form
          id="signup-form"
          submitBtnText={page === 0 ? "Next" : "Sign Up"}
          onSubmit={handleSubmit}
          onChange={handleChange}
          method="post"
          action="/signup"
          encType="multipart/form-data"
          buttonList={buttonList}
        >
          {page === 0 ? firstPageFields : secondPageFields}
          {buttonList}
        </Form>
        <p className="d-sm-inline-block mx-1">Already have an account?</p>
        <a href="/" className="d-block d-sm-inline-block mx-1">
          Log in here.
        </a>
        <p className="text-danger">{errorMessage}</p>
      </div>
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
