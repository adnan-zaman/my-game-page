import React, { useState, useRef } from "react";

import Toolbar from "../components/Toolbar";
import Form from "../components/Form";
import {
  FileUploadField,
  PasswordField,
  TextField,
  EmailField,
} from "../components/FormFields";

export default function UserSettingsPage(props) {
  //objects for setting status messages when changing information
  //success: true if response code was 200, false otherwise
  //message: the message to display

  const [profilePicStatus, setProfilePicStatus] = useState({
    success: false,
    message: "",
  });

  const [passwordStatus, setPasswordStatus] = useState({
    success: false,
    message: "",
  });

  const [displayNameStatus, setDisplayNameStatus] = useState({
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
        `/user/settings/profile-picture/${props.userId}`,
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

  async function handlePasswordSubmit(e, errorInfo, values) {
    e.preventDefault();
    if (errorInfo) {
      return setPasswordStatus({
        success: false,
        message: errorInfo.message,
      });
    }

    if (values.newPassword1 !== values.newPassword2) {
      return setPasswordStatus({
        success: false,
        message: "New passwords must match.",
      });
    }

    try {
      const response = await fetch(`/user/settings/password/${props.userId}`, {
        method: "PUT",
        credentials: "same-origin",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok)
        setPasswordStatus({
          success: true,
          message: "Saved!",
        });
      else {
        console.log("erro");
        const error = await response.json();
        console.log(error);
        setPasswordStatus({ success: false, message: error.message });
      }
    } catch (e) {
      console.log(e);
      setPasswordStatus({
        success: false,
        message: "Internal Server Error.",
      });
    }
  }

  async function handleDisplayNameSubmit(e, errorInfo, values) {
    e.preventDefault();
    if (errorInfo) {
      return setDisplayNameStatus({
        success: false,
        message: errorInfo.message,
      });
    }

    try {
      const response = await fetch(
        `/user/settings/display-name/${props.userId}`,
        {
          method: "PUT",
          credentials: "same-origin",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok)
        setDisplayNameStatus({
          success: true,
          message: "Saved!",
        });
      else {
        const error = await response.json();
        setDisplayNameStatus({ success: false, message: error.message });
      }
    } catch (e) {
      console.log(e);
      setDisplayNameStatus({
        success: false,
        message: "Internal Server Error.",
      });
    }
  }

  return (
    <>
      <Toolbar userId={props.userId} profilePic={props.profilePic} />
      <h1 className="ml-2">Your Settings</h1>
      <div className="my-3">
        <h2 className="ml-2">Change Display Name</h2>
        <Form
          id="newDisplayName"
          onSubmit={handleDisplayNameSubmit}
          submitBtnText="Save"
          inline={true}
          className={"d-inline-block ml-2"}
          btnClass="col-3 text-center"
        >
          <TextField
            label="Display Name"
            name="newDisplayName"
            required={true}
            max={20}
            value=""
            groupClass="col-9"
          />
        </Form>
        <p
          className={`d-inline-block mx-4 ${
            displayNameStatus.success ? "text-success" : "text-danger"
          }`}
        >
          {displayNameStatus.message}
        </p>
        <hr />

        <h2 className="ml-2">Change Profile Picture</h2>
        <Form
          id="newProfilePic"
          onSubmit={handleProfilePicSubmit}
          submitBtnText="Save"
          inline={true}
          className={"d-inline-block ml-2"}
          btnClass="col-2 text-align"
        >
          <FileUploadField
            label="Profile Picture"
            name="profilePicture"
            required={true}
            value=""
            accept="image/*"
            size={5000000}
            groupClass="col-9"
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

        <h2 className="ml-2">Change Password</h2>
        <Form
          id="newPassword"
          onSubmit={handlePasswordSubmit}
          submitBtnText="Save"
          className={"d-inline-block ml-2"}
          noMargin={true}
          btnClass="my-3"
        >
          <PasswordField
            label="Old Password"
            name="oldPassword"
            value=""
            className="my-3"
          />
          <PasswordField
            label="New Password"
            name="newPassword1"
            min={8}
            value=""
            className="my-3"
          />
          <PasswordField
            label="Re-enter New Password"
            name="newPassword2"
            min={8}
            value=""
            className="my-3"
          />
        </Form>
        <p
          className={`my-1 ml-2 ${
            passwordStatus.success ? "text-success" : "text-danger"
          }`}
        >
          {passwordStatus.message}
        </p>

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
