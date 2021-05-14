import React, { useState, useRef } from "react";
import Form from "../components/Form";
import {
  TextField,
  EmailField,
  PasswordField,
  FileUploadField,
  HiddenField,
} from "../components/FormFields";

export default function Signup(props) {
  const [errorMessage, setErrorMessage] = useState(
    props.error && (props.error.message || props.error.msg)
  );

  const [page, setPage] = useState(0);

  const formValues = useRef({ email: "", displayName: "", password: "" });

  const firstPageFields = [
    <TextField
      value={props.displayName_value || ""}
      label="Display Name"
      name="displayName"
      required={true}
      max={20}
      key={0}
    />,
    <EmailField
      value={props.email_value || ""}
      label="Email"
      name="email"
      required={true}
      max={50}
      key={1}
    />,
    <PasswordField
      value={props.password || ""}
      label="Password"
      name="password"
      required={true}
      max={50}
      min={8}
      key={2}
    />,
  ];

  const secondPageFields = [
    <FileUploadField
      value=""
      label="Profile Picture"
      name="profilePicture"
      accept="image/*"
      size={5000000}
    />,
    <HiddenField name="email" value={formValues.current.email} />,
    <HiddenField name="password" value={formValues.current.password} />,
    <HiddenField name="displayName" value={formValues.current.password} />,
  ];

  function handleSubmit(e, errorInfo, values) {
    if (errorInfo) {
      e.preventDefault();
      return setErrorMessage(errorInfo.message);
    }

    if (page === 0) {
      e.preventDefault();
      for (const value in values) formValues.current[value] = values[value];
      setPage(1);
    }
  }
  return (
    <>
      <img src="/images/logo.png" className="main-logo-img" />
      <h1 className="main-header logo-name mb-3">MyGamePage</h1>
      <div className="main-form-container w-75">
        <Form
          id="signup-form"
          submitBtnText={page === 0 ? "Next" : "Sign Up"}
          onSubmit={handleSubmit}
          method="post"
          action="/signup"
          encType="multipart/form-data"
        >
          {page === 0 ? firstPageFields : secondPageFields}
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
