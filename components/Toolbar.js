import React, { useState } from "react";
import Form from "./Form";
import { TextField, HiddenField } from "./FormFields";
import Test from "./Test";

export default function Toolbar(props) {
  function handleSubmit(e, errorInfo) {
    if (errorInfo) e.preventDefault();
  }

  return (
    <div>
      <Form
        id="Toolbar-Form"
        onSubmit={handleSubmit}
        submitBtnText="Go!"
        method="get"
        action="/search"
      >
        <TextField label="Search" name="query" value="" />
        <HiddenField label="Page" name="page" value="0" />
      </Form>
    </div>
  );
}
