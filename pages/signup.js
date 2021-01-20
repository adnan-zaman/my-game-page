import { useState } from "react";
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
      <h1>Join and make your own Game Page today!</h1>
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
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
