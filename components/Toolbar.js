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
    console.log(errorInfo);
    if (errorInfo) e.preventDefault();
  }

  return (
    <div className="row toolbar m-0">
      <Form
        id="Toolbar-Form"
        onSubmit={handleSubmit}
        submitBtnText="Go!"
        method="get"
        action="/search"
        className="col-md-11 col-10"
        btnClass="col-md-1 col-2 pt-1"
        inline={true}
      >
        <TextField
          label="Search"
          name="query"
          value=""
          groupClass="col-10 col-md-11 pt-1"
        />
        <HiddenField label="Page" name="page" value="0" groupClass="d.none" />
      </Form>
      <a href={`/user/${props.userId}`} className="col-md-1 col-2 pt-1">
        <img
          src={props.profilePic}
          alt={`Your profile picture`}
          className="rounded-circle"
          height="45"
          width="45"
        />
      </a>
    </div>
  );
}
