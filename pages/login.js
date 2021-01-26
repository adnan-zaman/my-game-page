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
      <h1>MyGamePage</h1>

      <div>
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
        <Link href="/signup">
          <p>
            Don't have an account? <a>Sign up here.</a>
          </p>
        </Link>
        <p className="error-msg ">{errorMessage}</p>
      </div>
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
