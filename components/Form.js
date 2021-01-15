import React, { useState } from "react";

export default function Form(props) {
  const [fieldValues, setFieldValues] = useState(
    React.Children.map(props.children, (child) => child.props.value)
  );

  const children = React.Children.map(props.children, (child, index) =>
    React.cloneElement(child, {
      value: fieldValues[index],
      onChange: handleChange,
      index,
    })
  );

  function handleChange(e, index) {
    const newFieldValues = fieldValues.map((value, i) =>
      i === index ? e.target.value : value
    );
    setFieldValues(newFieldValues);
  }

  function handleSubmit(e) {}
  return <form onSubmit={handleSubmit}>{children}</form>;
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
