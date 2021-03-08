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
 * - FormField's label should be first child
 * - FormField's control should be second child
 *
 */
function FormFieldTemplate(props) {
  const children = React.Children.toArray(props.children);
  //preserve existing css classes + add bootstrap classes
  const label = React.cloneElement(children[0], {
    className: (children[0].className || "") + " col-form-label col-md-1",
  });
  const control = React.cloneElement(children[1], {
    className: (children[1].className || "") + " form-control",
  });

  return (
    <div className="container-md mb-3">
      <div className="row">
        {label}
        <div className="col-md-11">{control}</div>
      </div>
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
    <FormFieldTemplate>
      <label htmlFor={inputId}>{props.label}</label>
      <input
        id={inputId}
        name={props.name}
        value={props.value || ""}
        onChange={(e) => props.onChange(e, props.index)}
        required={props.required}
        minLength={minLength}
        maxLength={maxLength}
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
    <FormFieldTemplate>
      <label htmlFor={inputId}>{labelName}</label>
      <input
        id={inputId}
        name={props.name}
        value={props.value}
        type="email"
        onChange={(e) => props.onChange(e, props.index)}
        required={props.required}
        minLength={minLength}
        maxLength={maxLength}
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
    <FormFieldTemplate>
      <label htmlFor={inputId}>{labelName}</label>
      <input
        id={inputId}
        name={props.name}
        value={props.value || ""}
        type="password"
        onChange={(e) => props.onChange(e, props.index)}
        required={true}
        minLength={minLength}
        maxLength={maxLength}
        ref={inputField}
      />
    </FormFieldTemplate>
  );
}
