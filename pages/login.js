import React, { useState } from "react";
import Form from "../components/Form";
import { TextField } from "../components/FormFields";

export default function Login(props) {
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e, errorInfo) {
    if (errorInfo) {
      setErrorMessage(errorInfo.message);
      errorInfo.element.focus();
      e.preventDefault();
    }
  }

  return (
    <>
      <h1>Login</h1>
      <Form id="login-form" onSubmit={handleSubmit}></Form>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
