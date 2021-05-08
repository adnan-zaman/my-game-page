import React, { useState, useRef } from "react";

import Toolbar from "../components/Toolbar";
import Form from "../components/Form";
import { FileUploadField } from "../components/FormFields";

export default function UserSettingsPage(props) {
  const form = useRef();
  const fileInp = useRef();
  const [text, setText] = useState("");
  function handleFileChange(e) {
    console.log(e.target.files);
  }

  function handleSubmit(e, errorInfo) {
    console.log("in");
    e.preventDefault();
    console.log("lout");
    if (errorInfo) setText(errorInfo.message);
    else setText("good");

    // const f = new FormData();
    // f.append("profilePicture", fileInp.current.files[0]);

    // const response = await fetch("http://localhost:3000/user/settings", {
    //   method: "POST",
    //   body: f,
    // });

    // if (response.ok) {
    //   setText("goodbye");
    // }
  }

  return (
    <>
      <Toolbar userId={props.userId} profilePic={props.profilePic} />
      <h1>Your Settings</h1>
      <div>
        <h2>Change Display Name</h2>
        <label for="displayName">New Display Name</label>
        <input name="displayName" className="d-inline-block"></input>
        <button>Save</button>
        <hr />

        <h2>Change Profile Picture</h2>
        <label for="profilePicture">New Display Name</label>
        <Form
          id="newProfilePic"
          onSubmit={handleSubmit}
          submitBtnText="Save"
          inline={true}
        >
          <FileUploadField
            label="Profile Picture"
            name="profilePicture"
            required={true}
            value=""
            accept="image/png"
            size={5000000}
          />
        </Form>

        <hr />

        <h2>Change Password</h2>
        <label for="oldPassword">New Display Name</label>
        <input
          name="oldPassword"
          className="d-inline-block"
          type="password"
        ></input>

        <label for="newPassword1">New Password</label>
        <input
          name="newPassword"
          className="d-inline-block"
          type="password"
        ></input>

        <label for="newPassword2">Re-enter New Password</label>
        <input
          name="newPasswordConfirm"
          className="d-inline-block"
          type="password"
        ></input>
        <button>Save</button>
        <p>{text}</p>
        <hr />
      </div>
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
