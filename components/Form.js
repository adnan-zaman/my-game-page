import React, { useState, useRef, useEffect } from "react";

/**
 *
 * General form component that validates and controls the state
 * of all of its fields. Children of Form should be a list of FormElements.
 *
 *
 * @param {object} props Expected props:
 * - id {string} form htmlElement's id
 *
 * - onSubmit {function(event, object, object)} callback for when form submits.
 *   Form will send three arguments, the first is the event, the second
 *   is the error info object. If one of the FormFields within the Form
 *   were not valid, the second argument will be an object containing
 *   information about the error. If everything was valid, it will be null. Third object
 *   will be an object mapping field names to field values. If the Form is being used like a
 *   regular form (not calling rest apis) then you can just ignore the third argument.
 *
 * - submitBtnText {string} the textContent for the submit button
 *
 * - action? {string} value for form's action attribute
 *
 * - method? {string} value for form's method attribute
 *
 * - inline {boolean} whether this is an inline form or not
 *
 * - encType? {string} form's enctype
 *
 * - noMargin? {bool} sets all FormField's noMargin prop to true, which removes
 *   the margins that they normally have and force them on the left side like an unstyled form
 *
 * - buttonList {<Button>[]} a list of Buttons, these will be displayed instead of the default submit button.
 *   if the button's onClick handler returns a value, that value will set the list of FormField states
 *   for the Form. (needed when going back to a previous page)
 *
 * -props.children should be a list of FormField elements. Each FormField
 *  should be initialized with an initial value prop.
 *
 */
export default function Form(props) {
  //array of values for all children (FormFields)
  //initializes state to be equal to the initial value given by
  //parent component
  const [fieldValues, setFieldValues] = useState(
    React.Children.map(props.children, (child) => child.props.value)
  );

  //list of validators of all of this Form's FormFields
  const fieldValidators = useRef([]);

  //takes control of childrens state and passes own props
  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      value: fieldValues[index],
      addValidator: (validator) => {
        fieldValidators.current.push(validator);
      },
      onChange: handleChange,
      parentId: props.id, //add parent id to so FormField can make unique ids for its elements
      index,
      inline: props.inline,
      noMargin: props.noMargin,
    });
  });

  const buttonList = useRef(undefined);

  //this is so onClick is only overwritten the first time
  //a page is rendered in a Form
  if (!buttonList.current && props.buttonList) {
    buttonList.current = props.buttonList;
    for (let i = 0; i < buttonList.current.length; i++) {
      if (buttonList.current[i].props.onClick) {
        const origFunc = buttonList.current[i].props.onClick;
        //call the original onClick but also
        //1. prevent form submission
        //2. cleanup
        //3. and if applicable, set state
        buttonList.current[i] = React.cloneElement(buttonList.current[i], {
          onClick: (e) => {
            e.preventDefault();
            const states = origFunc();
            cleanup();
            if (states) setFieldValues(states);
          },
        });
      }
    }
  }

  const buttonBar = props.buttonList ? (
    <div>{props.buttonList}</div>
  ) : (
    <button className={`btn btn-primary ${props.btnClass}`} type="submit">
      {props.submitBtnText || "Submit"}
    </button>
  );

  //what to display inside the form
  //if its an inline form, put all children and button in one row
  //else display children as they are
  const innerForm = props.inline ? (
    <div className="row">
      {children}
      {buttonBar}
    </div>
  ) : (
    <>
      {children}
      {buttonBar}
    </>
  );

  /**
   * Handles value changes for all of a Form's FormFields.
   *
   * @param {Event} e
   * @param {Number} index FormField's index prop
   */
  function handleChange(e, index) {
    //the index prop of each FormField and fieldValues are parallel
    //so if a FormField passes it's props.index, we can set
    //the correct state
    const newFieldValues = fieldValues.map((value, i) =>
      i === index ? e.target.files || e.target.value : value
    );

    setFieldValues(newFieldValues);
  }

  /**
   * Cleans up state, fieldValidators and buttonList.
   * Should be called when switching between pages.
   */
  function cleanup() {
    setFieldValues([]);
    fieldValidators.current = [];
    buttonList.current = undefined;
  }

  /**
   * Calls every FormField's validator function. If any field
   * is invalid, will send the error info object to parent component.
   *
   * @param {event} e
   */
  function validateAllFields(e) {
    const values = {};

    React.Children.forEach(props.children, (child, i) => {
      values[child.props.name] = fieldValues[i];
    });

    for (const validator of fieldValidators.current) {
      const errorInfo = validator();
      if (errorInfo) return props.onSubmit(e, errorInfo, values);
    }

    cleanup();
    props.onSubmit(e, null, values);
  }
  return (
    <>
      <form
        id={props.id}
        onSubmit={validateAllFields}
        noValidate={true}
        action={props.action}
        method={props.method}
        className={props.className}
        encType={props.encType}
      >
        {innerForm}
      </form>
    </>
  );
}
