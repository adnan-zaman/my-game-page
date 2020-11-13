/**
 * Adding this script to a page adds custom form validation to
 * all forms on a page. On form submission, each of the input elements
 * within the form will be checked for validity.
 * Forms are expected to contain a div.form-error element, which will be
 * populated with the error message if any of the form's inputs
 * are invalid.
 */

//add onsubmit event handler for all forms
document
  .querySelectorAll("form")
  .forEach((form) => form.addEventListener("submit", validateForm));

/**
 * Validates fields within a form.
 * If all fields are valid, form is submitted
 * otherwise, form-error div is filled with error message
 *
 * @param {Event} e the submit event
 */
function validateForm(e) {
  //all input elements within form
  const fields = e.target.querySelectorAll("input");
  for (const field of fields) {
    if (!validateField(field)) {
      document.querySelector(`#${e.target.id} .form-error`).textContent =
        field.validationMessage;
      e.preventDefault();
      return;
    }
  }
}

/**
 *
 * Validates an input element and sets its validation message
 * if it's invalid.
 *
 * @param {HTMLInputElement} field the input field to validate
 * @returns true if valid, false otherwise
 */
function validateField(field) {
  const validity = field.validity;
  //remove any previously set custom validity
  field.setCustomValidity("");
  if (validity.valid) return true;

  let error;
  if (validity.valueMissing) error = "is required.";
  else if (validity.typeMismatch) error = "is not a valid email address.";

  const label = document.querySelector(`label[for=${field.id}]`).textContent;
  const errMsg =
    label.charAt(0).toUpperCase() +
    (label.endsWith(":") ? label.slice(1, -1) : label.slice(1)) + //remove colon from label
    " " +
    error;

  field.setCustomValidity(errMsg);
  return false;
}
