import React, { useState } from "react";
import Form from "./Form";
import { TextField } from "./FormFields";
import Test from "./Test";

export default function Toolbar(props) {
  const [text, setText] = useState("Initial");

  function f(e, errorInfo) {
    return;
  }
  return (
    <div>
      <span>
        <Form
          id="Toolbar-Form"
          onSubmit={f}
          submitBtnText="Search"
          method="get"
          action="/search"
        >
          <TextField label="Search" name="Search" value="" />
        </Form>
        <h1>{text}</h1>
      </span>
    </div>
  );
}
