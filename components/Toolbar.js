import React, { useState } from "react";
import Form from "./Form";
import { TextField, HiddenField } from "./FormFields";
import Test from "./Test";

/**
 *
 * @param {object} props expected props:
 * - userId {number} the logged in user's user id
 * - profilePic {string} src url for user's profile picture
 */
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
      <a href={`/user/${props.userId}`}>
        <img src={props.profilePic} alt={`Your profile picture`} />
      </a>
    </div>
  );
}
