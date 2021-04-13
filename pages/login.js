import React, { useState } from "react";
import Form from "../components/Form";
import { EmailField, PasswordField } from "../components/FormFields";
import Link from "next/link";

export default function Login(props) {
  const [errorMessage, setErrorMessage] = useState(
    props.error && (props.error.message || props.error.msg)
  );

  function handleSubmit(e, errorInfo) {
    if (errorInfo) {
      setErrorMessage(errorInfo.message);
      e.preventDefault();
    }
  }

  return (
    <>
      <img src="/images/logo.png" className="main-logo-img" />
      <h1 className="main-header display-md-1 logo-name mb-3">MyGamePage</h1>
      <div className="main-form-container w-75">
        <Form
          id="login-form"
          submitBtnText="Login"
          onSubmit={handleSubmit}
          method="post"
          action="/"
          className="mb-3 mw-100"
        >
          <EmailField
            name="email"
            required={true}
            value={props.email_value || ""}
          />
          <PasswordField
            name="password"
            required={true}
            value={props.password_value || ""}
          />
        </Form>

        <p className="d-sm-inline-block mx-1">Don't have an account?</p>
        <a href="/signup" className="d-block d-sm-inline-block mx-1">
          Sign up here.
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
