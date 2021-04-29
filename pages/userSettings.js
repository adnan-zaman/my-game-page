import React, { useState, useRef } from "react";

import Toolbar from "../components/Toolbar";

export default function UserSettingsPage(props) {
  function handleFileChange(e) {
    console.log(e.target.files);
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
        <form
          method="post"
          enctype="multipart/form-data"
          onChange={handleFileChange}
        >
          <input
            name="profilePicture"
            className="d-inline-block"
            type="file"
            onChange={handleFileChange}
          ></input>
          <input type="text" name="duder"></input>
          <button type="submit">Save</button>
        </form>

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
          name="newPassword1"
          className="d-inline-block"
          type="password"
        ></input>

        <label for="newPassword2">Re-enter New Password</label>
        <input
          name="newPassword2"
          className="d-inline-block"
          type="password"
        ></input>
        <button>Save</button>
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
