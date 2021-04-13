import React, { useState } from "react";
import Form from "../components/Form";
import { TextField, EmailField, PasswordField } from "../components/FormFields";

export default function Signup(props) {
  const [errorMessage, setErrorMessage] = useState(
    props.error && (props.error.message || props.error.msg)
  );

  function handleSubmit(e, errorInfo) {
    if (errorInfo) {
      console.log("we got error");
      setErrorMessage(errorInfo.message);
      e.preventDefault();
    }
  }
  return (
    <>
      <img src="/images/logo.png" className="main-logo-img" />
      <h1 className="main-header logo-name mb-3">MyGamePage</h1>
      <div className="main-form-container w-75">
        <Form
          id="signup-form"
          submitBtnText="Sign Up"
          onSubmit={handleSubmit}
          method="post"
          action="/signup"
        >
          <TextField
            value={props.displayName_value || ""}
            label="Display Name"
            name="displayName"
            required={true}
            max={20}
          />
          <EmailField
            value={props.email_value || ""}
            label="Email"
            name="email"
            required={true}
            max={50}
          />
          <PasswordField
            value={props.password || ""}
            label="Password"
            name="password"
            required={true}
            max={50}
            min={8}
          />
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
