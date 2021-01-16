import { useState, useRef, useEffect } from "react";

export function TextField(props) {
  const inputId = `form-field-${props.label}-${props.parentId}`;
  const minLength = props.min;

  const validatorAdded = useRef(false);

  //to ensure validator only gets added to parent Form once
  if (!validatorAdded.current) {
    props.addValidator(validate);
    validatorAdded.current = true;
  }

  function validate() {
    const [element, validityState] = getElementAndValidityState(inputId);

    if (validityState.valueMissing)
      return { message: `${props.label} is required.`, element };
    if (validityState.tooShort)
      return {
        message: `${props.label} must be at least ${minLength} characters long.`,
        element,
      };
    return null;
  }

  return (
    <>
      <label htmlFor={inputId}>{props.label}</label>
      <input
        id={inputId}
        value={props.value}
        onChange={(e) => props.onChange(e, props.index)}
        required={props.required}
        minLength={minLength}
      />
    </>
  );
}

function getElementAndValidityState(elementId) {
  const element = document.querySelector(`#${elementId}`);
  const validityState = element.validity;
  return [element, validityState];
}
