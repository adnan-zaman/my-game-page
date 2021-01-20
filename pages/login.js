import React, { useState } from "react";
import Form from "../components/Form";
import { EmailField, PasswordField } from "../components/FormFields";

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
      <h1>Welcome to My Game Page</h1>
      <h2>Login</h2>
      <Form
        id="login-form"
        submitBtnText="Login"
        onSubmit={handleSubmit}
        method="post"
        action="/"
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
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
