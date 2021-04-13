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
  const [showDropdown, setShowDropdown] = useState(false);

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
        className="col-md-10 col-9"
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
      <div className="col-md-2 col-3 pt-1">
        <div className="toolbar-options">
          <a href={`/user/${props.userId}`}>
            <img
              src={props.profilePic}
              alt={`Your profile picture`}
              className="rounded-circle"
              height="45"
              width="45"
            />
          </a>
          <div className="dropdown d-inline-block">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="dropdown-button ml-2"
            >
              <i className="bi bi-caret-down-fill" />
            </button>
            <div
              className={`dropdown-content ${
                showDropdown ? "d-block" : "d-none"
              }`}
            >
              <a href="/logout" className="d-block">
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
