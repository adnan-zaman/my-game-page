import React, { useState, useRef, useEffect } from "react";

/**
 * FormFields are meant to be used with the Form component.
 * They are a combination of a label and a corresponding input element of some kind.
 * They make up the fields of a Form component. Each FormField has its own
 * validator function that checks the validity of its input. FormField validators
 * are called by its parent Form. FormFields should be the children of a Form
 * component and should be initialied with an initial value prop. After first render,
 * the Form component will take control of the FormField's value state.
 *
 */

/**
 * Common layout template that FormFields use
 * @param {object} props expected props:
 * - groupClass {str} css class for the form-group containing the input
 * - children:
 * - FormField's control
 *
 */
function FormFieldTemplate(props) {
  const children = React.Children.toArray(props.children);
  //preserve existing css classes + add bootstrap classes
  const control = React.cloneElement(children[0], {
    className:
      (children[0].className || "") +
      ` form-control ${props.inline ? "w-100" : "w-75"}`,
  });

  return (
    <div
      className={`${props.inline || props.noMargin ? "" : "form-group m-3"} ${
        props.groupClass
      }`}
    >
      {control}
    </div>
  );
}

/**
 * General text input field.
 *
 * @param {object} props
 * - label {string} FormField's label
 * - name {string} name for input element
 * - required? {boolean} whether this FormField is required or not
 * - min? {number} minimum number of characters
 * - max? {number} maximum number of characters
 */
export function TextField(props) {
  const inputId = `form-field-${props.label}-${props.parentId}`;
  const minLength = props.min;
  const maxLength = props.max;
  const validatorAdded = useRef(false);
  //reference to input html element
  const inputField = useRef(undefined);

  //to ensure validator only gets added to parent Form once
  if (!validatorAdded.current) {
    props.addValidator(validate);
    validatorAdded.current = true;
  }

  /**
   * Checks the validity of input
   */
  function validate() {
    const element = inputField.current;
    const validityState = element.validity;

    if (validityState.valueMissing)
      return { message: `${props.label} is required.`, element };
    if (validityState.tooShort)
      return {
        message: `${props.label} must be at least ${minLength} characters long.`,
        element,
      };
    if (validityState.tooLong)
      return {
        message: `${props.label} must be less than or equal to ${maxLength} characters long.`,
        element,
      };
    return null;
  }

  return (
    <FormFieldTemplate
      groupClass={props.groupClass}
      inline={props.inline}
      noMargin={props.noMargin}
    >
      <input
        id={inputId}
        name={props.name}
        value={props.value || ""}
        onChange={(e) => props.onChange(e, props.index)}
        required={props.required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={props.label}
        ref={inputField}
      />
    </FormFieldTemplate>
  );
}

/**
 * Input field for emails.
 *
 * @param {object} props
 * - label? {string} FormField's label (default label is Email)
 * - name {string} name for input element
 * - required? {boolean} whether this FormField is required or not
 * - min? {number} minimum number of characters
 * - max? {number} maximum number of characters
 */
export function EmailField(props) {
  const labelName = props.label || "Email";
  const inputId = `form-field-${labelName}-${props.parentId}`;
  const minLength = props.min;
  const maxLength = props.max || 50;

  const validatorAdded = useRef(false);
  //reference to input html element
  const inputField = useRef(undefined);

  //to ensure validator only gets added to parent Form once
  if (!validatorAdded.current) {
    props.addValidator(validate);
    validatorAdded.current = true;
  }

  /**
   * Checks the validity of input.
   *
   * @returns {object} if input is valid, returns null. Otherwise, returns an object
   * containg information about the error
   * {message: error message, element: reference to HtmlElement that contains error}
   */
  function validate() {
    const element = inputField.current;
    const validityState = element.validity;

    if (validityState.valueMissing)
      return { message: `${labelName} is required.`, element };
    if (validityState.typeMismatch)
      return { message: `${labelName} must be an email.`, element };
    if (validityState.tooShort)
      return {
        message: `${labelName} must be at least ${minLength} characters long.`,
        element,
      };
    if (validityState.tooLong)
      return {
        message: `${labelName} must be less than or equal to ${maxLength} characters long.`,
        element,
      };
    return null;
  }

  return (
    <FormFieldTemplate
      groupClass={props.groupClass}
      inline={props.inline}
      noMargin={props.noMargin}
    >
      <input
        id={inputId}
        name={props.name}
        value={props.value}
        type="email"
        onChange={(e) => props.onChange(e, props.index)}
        required={props.required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={labelName}
        ref={inputField}
      />
    </FormFieldTemplate>
  );
}

/**
 * Input field for passwords. Input is always required.
 *
 * @param {object} props
 * - label? {string} FormField's label (default label is Password)
 * - name {string} name for input element
 * - min? {number} minimum number of characters
 */
export function PasswordField(props) {
  const labelName = props.label || "Password";
  const inputId = `form-field-${labelName}-${props.parentId}`;
  const minLength = props.min;
  const maxLength = props.max || 50;

  const validatorAdded = useRef(false);
  //reference to input html element
  const inputField = useRef(undefined);

  //to ensure validator only gets added to parent Form once
  if (!validatorAdded.current) {
    props.addValidator(validate);
    validatorAdded.current = true;
  }

  /**
   * Checks the validity of input
   */
  function validate() {
    const element = inputField.current;
    const validityState = element.validity;

    if (validityState.valueMissing)
      return { message: `${labelName} is required.`, element };
    if (validityState.tooShort)
      return {
        message: `${labelName} must be at least ${minLength} characters long.`,
        element,
      };
    if (validityState.tooLong)
      return {
        message: `${labelName} must be less than or equal to ${maxLength} characters long.`,
        element,
      };
    return null;
  }

  return (
    <FormFieldTemplate
      groupClass={props.groupClass}
      inline={props.inline}
      noMargin={props.noMargin}
    >
      <input
        id={inputId}
        name={props.name}
        value={props.value || ""}
        type="password"
        onChange={(e) => props.onChange(e, props.index)}
        required={true}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={labelName}
        ref={inputField}
        className={props.className}
      />
    </FormFieldTemplate>
  );
}

/**
 * Hidden input field
 *
 * @param {object} props
 * - label {string} FormField's label (not visible, just for naming purposes)
 * - name {string} name for input element
 * - value {string} input's value
 */
export function HiddenField(props) {
  const inputId = `form-field-${props.label}-${props.parentId}`;

  const validatorAdded = useRef(false);
  //reference to input html element
  const inputField = useRef(undefined);

  //to ensure validator only gets added to parent Form once
  if (!validatorAdded.current) {
    props.addValidator(validate);
    validatorAdded.current = true;
  }

  /**
   * Checks the validity of input
   */
  function validate() {
    //always valid
    return null;
  }

  return (
    <FormFieldTemplate
      groupClass={props.groupClass}
      inline={props.inline}
      noMargin={props.noMargin}
    >
      <input
        id={inputId}
        name={props.name}
        value={props.value}
        hidden={true}
        readOnly={true}
        ref={inputField}
      />
    </FormFieldTemplate>
  );
}

/**
 * File upload field
 *
 * @param {object} props
 * - value {string} file inputs are uncontrolled components, so the value is just there
 *                  to conform with Form component's logic. Value can be anything.
 * - label {string} FormField's label
 * - name {string} name for input element
 * - required? {boolean} whether this FormField is required or not
 * - size? {number} max size of file in bytes
 * - accept? {string} mime type
 */
export function FileUploadField(props) {
  const inputId = `form-field-${props.label}-${props.parentId}`;
  const validatorAdded = useRef(false);
  //reference to input html element
  const inputField = useRef(undefined);

  //to ensure validator only gets added to parent Form once
  if (!validatorAdded.current) {
    props.addValidator(validate);
    validatorAdded.current = true;
  }

  /**
   * Checks the validity of input
   */
  function validate() {
    const element = inputField.current;
    const validityState = element.validity;
    const files = element.files;

    if (validityState.valueMissing)
      return { message: `${props.label} is required.`, element };

    for (let i = 0; i < files.length; i++) {
      if (props.accept) {
        const acceptParts = props.accept.split("/");
        for (const part of acceptParts) {
          if (part !== "*" && !files[i].type.includes(part))
            //prefer returning subtype over type
            return {
              message: `${props.label} is wrong format. Expected: ${
                acceptParts[1] !== "*" ? acceptParts[1] : acceptParts[0]
              }`,
              element,
            };
        }
      }

      if (props.size && files[i].size > props.size)
        return {
          message: `${props.label} is too big. Max ${props.size / 1000000}MB`,
          element,
        };
    }

    return null;
  }

  return (
    <FormFieldTemplate
      groupClass={props.groupClass}
      inline={props.inline}
      noMargin={props.noMargin}
    >
      <input
        id={inputId}
        type="file"
        name={props.name}
        onChange={(e) => props.onChange(e, props.index)}
        required={props.required}
        accept={props.accept}
        ref={inputField}
      />
    </FormFieldTemplate>
  );
}
