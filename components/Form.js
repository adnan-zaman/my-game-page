import React, { useState, useRef } from "react";

export default function Form(props) {
  //array of values for all children (FormFields)
  //initializes state to be equal to the initial value given by
  //parent component
  const [fieldValues, setFieldValues] = useState(
    React.Children.map(props.children, (child) => child.props.value)
  );

  const fieldValidators = useRef([]);

  //takes control of childrens state and passes own props
  const children = React.Children.map(props.children, (child, index) =>
    React.cloneElement(child, {
      value: fieldValues[index],
      addValidator: (validator) => fieldValidators.current.push(validator),
      onChange: handleChange,
      parentId: props.id,
      index,
    })
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
      i === index ? e.target.value : value
    );
    setFieldValues(newFieldValues);
  }

  function validateAllFields(e) {
    for (const validator of fieldValidators.current) {
      const errorInfo = validator();
      if (errorInfo) return props.onSubmit(e, errorInfo);
    }
    props.onSubmit(e, null);
  }
  return (
    <form id={props.id} onSubmit={validateAllFields} noValidate={true}>
      {children}
      <button type="submit">Submit</button>
    </form>
  );
}

/*

form is responsible for
-validating all its children
-sending response of validation to parent
-keeping state of children
*/

/*
FormField
 should be used as children to a Form
    -value= starting value, after that, form takes over


*/
