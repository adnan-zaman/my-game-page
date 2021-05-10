import React, { useState, useRef } from "react";

import Toolbar from "../components/Toolbar";
import Form from "../components/Form";
import { FileUploadField } from "../components/FormFields";

export default function UserSettingsPage(props) {
  //object for setting status message when uploading profile pic
  //success: true if response code was 200, false otherwise
  //message: the message to display
  const [profilePicStatus, setProfilePicStatus] = useState({
    success: false,
    message: "",
  });

  async function handleProfilePicSubmit(e, errorInfo, values) {
    e.preventDefault();
    if (errorInfo) {
      return setProfilePicStatus({
        success: false,
        message: errorInfo.message,
      });
    }

    const formData = new FormData();

    if (values.profilePicture.length > 1)
      return setProfilePicError("Only one file can be uploaded.");

    formData.append("profilePicture", values.profilePicture[0]);
    try {
      const response = await fetch(
        `http://localhost:3000/user/settings/profile-picture/${props.userId}`,
        {
          method: "PUT",
          credentials: "same-origin",
          body: formData,
        }
      );

      if (response.ok)
        setProfilePicStatus({
          success: true,
          message: "Saved!",
        });
      else {
        const error = await response.json();
        setProfilePicStatus({ success: false, message: error.message });
      }
    } catch (e) {
      console.log(e);
      setProfilePicStatus({
        success: false,
        message: "Internal Server Error.",
      });
    }
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
        <Form
          id="newProfilePic"
          onSubmit={handleProfilePicSubmit}
          submitBtnText="Save"
          inline={true}
          className={"d-inline-block"}
        >
          <FileUploadField
            label="Profile Picture"
            name="profilePicture"
            required={true}
            value=""
            accept="image/*"
            size={5000000}
          />
        </Form>
        <p
          className={`d-inline-block mx-4 ${
            profilePicStatus.success ? "text-success" : "text-danger"
          }`}
        >
          {profilePicStatus.message}
        </p>
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
