module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\adnan\\web-dev\\my-game-page\\components\\Form.js";

/**
 *
 * General form component that validates and controls the state
 * of all of its fields. Children of Form should be a list of FormElements.
 *
 *
 * @param {object} props Expected props:
 * - id {string} form htmlElement's id
 *
 * - onSubmit {function(event, object)} callback for when form submits.
 *   Form will send two arguments, the first is the event, the second
 *   is the error info object. If one of the FormFields within the Form
 *   were not valid, the second argument will be an object containing
 *   information about the error. If everything was valid, it will be null.
 *
 * - submitBtnText {string} the textContent for the submit button
 *
 * - action? {string} value for form's action attribute
 *
 * - method? {string} value for form's method attribute
 *
 * -props.children should be a list of FormField elements. Each FormField
 *  should be initialized with an initial value prop.
 *
 */

function Form(props) {
  //array of values for all children (FormFields)
  //initializes state to be equal to the initial value given by
  //parent component
  const {
    0: fieldValues,
    1: setFieldValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(props.children, child => child.props.value)); //list of validators of all of this Form's FormFields

  const fieldValidators = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([]); //takes control of childrens state and passes own props

  const children = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(props.children, (child, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child, {
    value: fieldValues[index],
    addValidator: validator => fieldValidators.current.push(validator),
    onChange: handleChange,
    parentId: props.id,
    //add parent id to so FormField can make unique ids for its elements
    index
  }));
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
    const newFieldValues = fieldValues.map((value, i) => i === index ? e.target.value : value);
    setFieldValues(newFieldValues);
  }
  /**
   * Calls every FormField's validator function. If any field
   * is invalid, will send the error info object to parent component.
   *
   * @param {event} e
   */


  function validateAllFields(e) {
    for (const validator of fieldValidators.current) {
      const errorInfo = validator();
      if (errorInfo) return props.onSubmit(e, errorInfo);
    }

    props.onSubmit(e, null);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    id: props.id,
    onSubmit: validateAllFields,
    noValidate: true,
    action: props.action,
    method: props.method,
    children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "submit",
      children: props.submitBtnText || "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/FormFields.js":
/*!**********************************!*\
  !*** ./components/FormFields.js ***!
  \**********************************/
/*! exports provided: TextField, EmailField, PasswordField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailField", function() { return EmailField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordField", function() { return PasswordField; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\adnan\\web-dev\\my-game-page\\components\\FormFields.js";

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
 * General text input field.
 *
 * @param {object} props
 * - label {string} FormField's label
 * - name {string} name for input element
 * - required? {boolean} whether this FormField is required or not
 * - min? {number} minimum number of characters
 * - max? {number} maximum number of characters
 */

function TextField(props) {
  const inputId = `form-field-${props.label}-${props.parentId}`;
  const minLength = props.min;
  const maxLength = props.max;
  const validatorAdded = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false); //to ensure validator only gets added to parent Form once

  if (!validatorAdded.current) {
    props.addValidator(validate);
    validatorAdded.current = true;
  }
  /**
   * Checks the validity of input
   */


  function validate() {
    const [element, validityState] = getElementAndValidityState(inputId);
    if (validityState.valueMissing) return {
      message: `${props.label} is required.`,
      element
    };
    if (validityState.tooShort) return {
      message: `${props.label} must be at least ${minLength} characters long.`,
      element
    };
    if (validityState.tooLong) return {
      message: `${props.label} must be less than or equal to ${maxLength} characters long.`,
      element
    };
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: inputId,
      children: [props.label, ": "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      id: inputId,
      name: props.name,
      value: props.value || "",
      onChange: e => props.onChange(e, props.index),
      required: props.required,
      minLength: minLength,
      maxLength: maxLength
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)]
  }, void 0, true);
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

function EmailField(props) {
  const labelName = props.label || "Email";
  const inputId = `form-field-${labelName}-${props.parentId}`;
  const minLength = props.min;
  const maxLength = props.max || 50;
  const validatorAdded = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false); //to ensure validator only gets added to parent Form once

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
    const [element, validityState] = getElementAndValidityState(inputId);
    if (validityState.valueMissing) return {
      message: `${labelName} is required.`,
      element
    };
    if (validityState.typeMismatch) return {
      message: `${labelName} must be an email.`,
      element
    };
    if (validityState.tooShort) return {
      message: `${labelName} must be at least ${minLength} characters long.`,
      element
    };
    if (validityState.tooLong) return {
      message: `${labelName} must be less than or equal to ${maxLength} characters long.`,
      element
    };
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: inputId,
      children: [labelName, ": "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      id: inputId,
      name: props.name,
      value: props.value,
      type: "email",
      onChange: e => props.onChange(e, props.index),
      required: props.required,
      minLength: minLength,
      maxLength: maxLength
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
/**
 * Input field for passwords. Input is always required.
 *
 * @param {object} props
 * - label? {string} FormField's label (default label is Password)
 * - name {string} name for input element
 * - min? {number} minimum number of characters
 */

function PasswordField(props) {
  const labelName = props.label || "Password";
  const inputId = `form-field-${labelName}-${props.parentId}`;
  const minLength = props.min;
  const maxLength = props.max || 50;
  const validatorAdded = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false); //to ensure validator only gets added to parent Form once

  if (!validatorAdded.current) {
    props.addValidator(validate);
    validatorAdded.current = true;
  }
  /**
   * Checks the validity of input
   */


  function validate() {
    const [element, validityState] = getElementAndValidityState(inputId);
    if (validityState.valueMissing) return {
      message: `${labelName} is required.`,
      element
    };
    if (validityState.tooShort) return {
      message: `${labelName} must be at least ${minLength} characters long.`,
      element
    };
    if (validityState.tooLong) return {
      message: `${labelName} must be less than or equal to ${maxLength} characters long.`,
      element
    };
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: inputId,
      children: [labelName, ": "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      id: inputId,
      name: props.name,
      value: props.value || "",
      type: "password",
      onChange: e => props.onChange(e, props.index),
      required: true,
      minLength: minLength,
      maxLength: maxLength
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
/**
 * Convenience function that returns an HtmlElement and its ValidityState
 * object given an id.
 *
 * @param {string} elementId id of FormField's HtmlElement to validate
 * @returns {array} [HtmlElement, validityState]
 */

function getElementAndValidityState(elementId) {
  const element = document.querySelector(`#${elementId}`);
  const validityState = element.validity;
  return [element, validityState];
}

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Form */ "./components/Form.js");
/* harmony import */ var _components_FormFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormFields */ "./components/FormFields.js");


var _jsxFileName = "C:\\Users\\adnan\\web-dev\\my-game-page\\pages\\login.js";



function Login(props) {
  console.log(props);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.error && (props.error.message || props.error.msg));

  function handleSubmit(e, errorInfo) {
    if (errorInfo) {
      setErrorMessage(errorInfo.message);
      e.preventDefault();
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Welcome to My Game Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "login-form",
      onSubmit: handleSubmit,
      method: "post",
      action: "/",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FormFields__WEBPACK_IMPORTED_MODULE_3__["EmailField"], {
        name: "email",
        required: true,
        value: props.email_value || ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FormFields__WEBPACK_IMPORTED_MODULE_3__["PasswordField"], {
        name: "password",
        required: true,
        value: props.password_value || ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), errorMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: errorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 24
    }, this)]
  }, void 0, true);
}
function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals))
  };
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybUZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsImZpZWxkVmFsdWVzIiwic2V0RmllbGRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZHJlbiIsImNoaWxkIiwidmFsdWUiLCJmaWVsZFZhbGlkYXRvcnMiLCJ1c2VSZWYiLCJpbmRleCIsImNsb25lRWxlbWVudCIsImFkZFZhbGlkYXRvciIsInZhbGlkYXRvciIsImN1cnJlbnQiLCJwdXNoIiwib25DaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJwYXJlbnRJZCIsImlkIiwiZSIsIm5ld0ZpZWxkVmFsdWVzIiwiaSIsInRhcmdldCIsInZhbGlkYXRlQWxsRmllbGRzIiwiZXJyb3JJbmZvIiwib25TdWJtaXQiLCJhY3Rpb24iLCJtZXRob2QiLCJzdWJtaXRCdG5UZXh0IiwiVGV4dEZpZWxkIiwiaW5wdXRJZCIsImxhYmVsIiwibWluTGVuZ3RoIiwibWluIiwibWF4TGVuZ3RoIiwibWF4IiwidmFsaWRhdG9yQWRkZWQiLCJ2YWxpZGF0ZSIsImVsZW1lbnQiLCJ2YWxpZGl0eVN0YXRlIiwiZ2V0RWxlbWVudEFuZFZhbGlkaXR5U3RhdGUiLCJ2YWx1ZU1pc3NpbmciLCJtZXNzYWdlIiwidG9vU2hvcnQiLCJ0b29Mb25nIiwibmFtZSIsInJlcXVpcmVkIiwiRW1haWxGaWVsZCIsImxhYmVsTmFtZSIsInR5cGVNaXNtYXRjaCIsIlBhc3N3b3JkRmllbGQiLCJlbGVtZW50SWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWxpZGl0eSIsIkxvZ2luIiwiY29uc29sZSIsImxvZyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImVycm9yIiwibXNnIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJlbWFpbF92YWx1ZSIsInBhc3N3b3JkX3ZhbHVlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInJlcyIsImxvY2FscyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLHdEQUFEO0FBQU0sUUFBRSxFQUFDLFlBQVQ7QUFBc0IsY0FBUSxFQUFFRCxZQUFoQztBQUE4QyxZQUFNLEVBQUMsTUFBckQ7QUFBNEQsWUFBTSxFQUFDLEdBQW5FO0FBQUEsOEJBQ0UscUVBQUMsaUVBQUQ7QUFDRSxZQUFJLEVBQUMsT0FEUDtBQUVFLGdCQUFRLEVBQUUsSUFGWjtBQUdFLGFBQUssRUFBRWpFLEtBQUssQ0FBQ21FLFdBQU4sSUFBcUI7QUFIOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUUscUVBQUMsb0VBQUQ7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGdCQUFRLEVBQUUsSUFGWjtBQUdFLGFBQUssRUFBRW5FLEtBQUssQ0FBQ29FLGNBQU4sSUFBd0I7QUFIakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLEVBZUdQLFlBQVksaUJBQUk7QUFBQSxnQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZm5CO0FBQUEsa0JBREY7QUFtQkQ7QUFFTSxTQUFTUSxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUM7QUFDMUMsU0FBTztBQUNMdEUsU0FBSyxFQUFFdUUsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSCxPQUFPLENBQUNJLEdBQVIsQ0FBWUMsTUFBM0IsQ0FBWDtBQURGLEdBQVA7QUFHRCxDOzs7Ozs7Ozs7OztBQzFDRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbG9naW4uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEdlbmVyYWwgZm9ybSBjb21wb25lbnQgdGhhdCB2YWxpZGF0ZXMgYW5kIGNvbnRyb2xzIHRoZSBzdGF0ZVxyXG4gKiBvZiBhbGwgb2YgaXRzIGZpZWxkcy4gQ2hpbGRyZW4gb2YgRm9ybSBzaG91bGQgYmUgYSBsaXN0IG9mIEZvcm1FbGVtZW50cy5cclxuICpcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIGlkIHtzdHJpbmd9IGZvcm0gaHRtbEVsZW1lbnQncyBpZFxyXG4gKlxyXG4gKiAtIG9uU3VibWl0IHtmdW5jdGlvbihldmVudCwgb2JqZWN0KX0gY2FsbGJhY2sgZm9yIHdoZW4gZm9ybSBzdWJtaXRzLlxyXG4gKiAgIEZvcm0gd2lsbCBzZW5kIHR3byBhcmd1bWVudHMsIHRoZSBmaXJzdCBpcyB0aGUgZXZlbnQsIHRoZSBzZWNvbmRcclxuICogICBpcyB0aGUgZXJyb3IgaW5mbyBvYmplY3QuIElmIG9uZSBvZiB0aGUgRm9ybUZpZWxkcyB3aXRoaW4gdGhlIEZvcm1cclxuICogICB3ZXJlIG5vdCB2YWxpZCwgdGhlIHNlY29uZCBhcmd1bWVudCB3aWxsIGJlIGFuIG9iamVjdCBjb250YWluaW5nXHJcbiAqICAgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVycm9yLiBJZiBldmVyeXRoaW5nIHdhcyB2YWxpZCwgaXQgd2lsbCBiZSBudWxsLlxyXG4gKlxyXG4gKiAtIHN1Ym1pdEJ0blRleHQge3N0cmluZ30gdGhlIHRleHRDb250ZW50IGZvciB0aGUgc3VibWl0IGJ1dHRvblxyXG4gKlxyXG4gKiAtIGFjdGlvbj8ge3N0cmluZ30gdmFsdWUgZm9yIGZvcm0ncyBhY3Rpb24gYXR0cmlidXRlXHJcbiAqXHJcbiAqIC0gbWV0aG9kPyB7c3RyaW5nfSB2YWx1ZSBmb3IgZm9ybSdzIG1ldGhvZCBhdHRyaWJ1dGVcclxuICpcclxuICogLXByb3BzLmNoaWxkcmVuIHNob3VsZCBiZSBhIGxpc3Qgb2YgRm9ybUZpZWxkIGVsZW1lbnRzLiBFYWNoIEZvcm1GaWVsZFxyXG4gKiAgc2hvdWxkIGJlIGluaXRpYWxpemVkIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSBwcm9wLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybShwcm9wcykge1xyXG4gIC8vYXJyYXkgb2YgdmFsdWVzIGZvciBhbGwgY2hpbGRyZW4gKEZvcm1GaWVsZHMpXHJcbiAgLy9pbml0aWFsaXplcyBzdGF0ZSB0byBiZSBlcXVhbCB0byB0aGUgaW5pdGlhbCB2YWx1ZSBnaXZlbiBieVxyXG4gIC8vcGFyZW50IGNvbXBvbmVudFxyXG4gIGNvbnN0IFtmaWVsZFZhbHVlcywgc2V0RmllbGRWYWx1ZXNdID0gdXNlU3RhdGUoXHJcbiAgICBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCkgPT4gY2hpbGQucHJvcHMudmFsdWUpXHJcbiAgKTtcclxuXHJcbiAgLy9saXN0IG9mIHZhbGlkYXRvcnMgb2YgYWxsIG9mIHRoaXMgRm9ybSdzIEZvcm1GaWVsZHNcclxuICBjb25zdCBmaWVsZFZhbGlkYXRvcnMgPSB1c2VSZWYoW10pO1xyXG5cclxuICAvL3Rha2VzIGNvbnRyb2wgb2YgY2hpbGRyZW5zIHN0YXRlIGFuZCBwYXNzZXMgb3duIHByb3BzXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+XHJcbiAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgdmFsdWU6IGZpZWxkVmFsdWVzW2luZGV4XSxcclxuICAgICAgYWRkVmFsaWRhdG9yOiAodmFsaWRhdG9yKSA9PiBmaWVsZFZhbGlkYXRvcnMuY3VycmVudC5wdXNoKHZhbGlkYXRvciksXHJcbiAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgIHBhcmVudElkOiBwcm9wcy5pZCwgLy9hZGQgcGFyZW50IGlkIHRvIHNvIEZvcm1GaWVsZCBjYW4gbWFrZSB1bmlxdWUgaWRzIGZvciBpdHMgZWxlbWVudHNcclxuICAgICAgaW5kZXgsXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgdmFsdWUgY2hhbmdlcyBmb3IgYWxsIG9mIGEgRm9ybSdzIEZvcm1GaWVsZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IEZvcm1GaWVsZCdzIGluZGV4IHByb3BcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSwgaW5kZXgpIHtcclxuICAgIC8vdGhlIGluZGV4IHByb3Agb2YgZWFjaCBGb3JtRmllbGQgYW5kIGZpZWxkVmFsdWVzIGFyZSBwYXJhbGxlbFxyXG4gICAgLy9zbyBpZiBhIEZvcm1GaWVsZCBwYXNzZXMgaXQncyBwcm9wcy5pbmRleCwgd2UgY2FuIHNldFxyXG4gICAgLy90aGUgY29ycmVjdCBzdGF0ZVxyXG4gICAgY29uc3QgbmV3RmllbGRWYWx1ZXMgPSBmaWVsZFZhbHVlcy5tYXAoKHZhbHVlLCBpKSA9PlxyXG4gICAgICBpID09PSBpbmRleCA/IGUudGFyZ2V0LnZhbHVlIDogdmFsdWVcclxuICAgICk7XHJcbiAgICBzZXRGaWVsZFZhbHVlcyhuZXdGaWVsZFZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxscyBldmVyeSBGb3JtRmllbGQncyB2YWxpZGF0b3IgZnVuY3Rpb24uIElmIGFueSBmaWVsZFxyXG4gICAqIGlzIGludmFsaWQsIHdpbGwgc2VuZCB0aGUgZXJyb3IgaW5mbyBvYmplY3QgdG8gcGFyZW50IGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7ZXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUFsbEZpZWxkcyhlKSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbGlkYXRvciBvZiBmaWVsZFZhbGlkYXRvcnMuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBlcnJvckluZm8gPSB2YWxpZGF0b3IoKTtcclxuICAgICAgaWYgKGVycm9ySW5mbykgcmV0dXJuIHByb3BzLm9uU3VibWl0KGUsIGVycm9ySW5mbyk7XHJcbiAgICB9XHJcbiAgICBwcm9wcy5vblN1Ym1pdChlLCBudWxsKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgb25TdWJtaXQ9e3ZhbGlkYXRlQWxsRmllbGRzfVxyXG4gICAgICBub1ZhbGlkYXRlPXt0cnVlfVxyXG4gICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cclxuICAgICAgbWV0aG9kPXtwcm9wcy5tZXRob2R9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+e3Byb3BzLnN1Ym1pdEJ0blRleHQgfHwgXCJTdWJtaXRcIn08L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEZvcm1GaWVsZHMgYXJlIG1lYW50IHRvIGJlIHVzZWQgd2l0aCB0aGUgRm9ybSBjb21wb25lbnQuXHJcbiAqIFRoZXkgYXJlIGEgY29tYmluYXRpb24gb2YgYSBsYWJlbCBhbmQgYSBjb3JyZXNwb25kaW5nIGlucHV0IGVsZW1lbnQgb2Ygc29tZSBraW5kLlxyXG4gKiBUaGV5IG1ha2UgdXAgdGhlIGZpZWxkcyBvZiBhIEZvcm0gY29tcG9uZW50LiBFYWNoIEZvcm1GaWVsZCBoYXMgaXRzIG93blxyXG4gKiB2YWxpZGF0b3IgZnVuY3Rpb24gdGhhdCBjaGVja3MgdGhlIHZhbGlkaXR5IG9mIGl0cyBpbnB1dC4gRm9ybUZpZWxkIHZhbGlkYXRvcnNcclxuICogYXJlIGNhbGxlZCBieSBpdHMgcGFyZW50IEZvcm0uIEZvcm1GaWVsZHMgc2hvdWxkIGJlIHRoZSBjaGlsZHJlbiBvZiBhIEZvcm1cclxuICogY29tcG9uZW50IGFuZCBzaG91bGQgYmUgaW5pdGlhbGllZCB3aXRoIGFuIGluaXRpYWwgdmFsdWUgcHJvcC4gQWZ0ZXIgZmlyc3QgcmVuZGVyLFxyXG4gKiB0aGUgRm9ybSBjb21wb25lbnQgd2lsbCB0YWtlIGNvbnRyb2wgb2YgdGhlIEZvcm1GaWVsZCdzIHZhbHVlIHN0YXRlLlxyXG4gKlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmFsIHRleHQgaW5wdXQgZmllbGQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsIHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsXHJcbiAqIC0gbmFtZSB7c3RyaW5nfSBuYW1lIGZvciBpbnB1dCBlbGVtZW50XHJcbiAqIC0gcmVxdWlyZWQ/IHtib29sZWFufSB3aGV0aGVyIHRoaXMgRm9ybUZpZWxkIGlzIHJlcXVpcmVkIG9yIG5vdFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKiAtIG1heD8ge251bWJlcn0gbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRleHRGaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke3Byb3BzLmxhYmVsfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heDtcclxuXHJcbiAgY29uc3QgdmFsaWRhdG9yQWRkZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IFtlbGVtZW50LCB2YWxpZGl0eVN0YXRlXSA9IGdldEVsZW1lbnRBbmRWYWxpZGl0eVN0YXRlKGlucHV0SWQpO1xyXG5cclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnZhbHVlTWlzc2luZylcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7cHJvcHMubGFiZWx9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke3Byb3BzLmxhYmVsfSBtdXN0IGJlIGF0IGxlYXN0ICR7bWluTGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudG9vTG9uZylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtwcm9wcy5sYWJlbH0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj17aW5wdXRJZH0+e3Byb3BzLmxhYmVsfTogPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9e2lucHV0SWR9XHJcbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWUgfHwgXCJcIn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uQ2hhbmdlKGUsIHByb3BzLmluZGV4KX1cclxuICAgICAgICByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgbWluTGVuZ3RoPXttaW5MZW5ndGh9XHJcbiAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSW5wdXQgZmllbGQgZm9yIGVtYWlscy5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWw/IHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChkZWZhdWx0IGxhYmVsIGlzIEVtYWlsKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIHJlcXVpcmVkPyB7Ym9vbGVhbn0gd2hldGhlciB0aGlzIEZvcm1GaWVsZCBpcyByZXF1aXJlZCBvciBub3RcclxuICogLSBtaW4/IHtudW1iZXJ9IG1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICogLSBtYXg/IHtudW1iZXJ9IG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFbWFpbEZpZWxkKHByb3BzKSB7XHJcbiAgY29uc3QgbGFiZWxOYW1lID0gcHJvcHMubGFiZWwgfHwgXCJFbWFpbFwiO1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke2xhYmVsTmFtZX0tJHtwcm9wcy5wYXJlbnRJZH1gO1xyXG4gIGNvbnN0IG1pbkxlbmd0aCA9IHByb3BzLm1pbjtcclxuICBjb25zdCBtYXhMZW5ndGggPSBwcm9wcy5tYXggfHwgNTA7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuXHJcbiAgLy90byBlbnN1cmUgdmFsaWRhdG9yIG9ubHkgZ2V0cyBhZGRlZCB0byBwYXJlbnQgRm9ybSBvbmNlXHJcbiAgaWYgKCF2YWxpZGF0b3JBZGRlZC5jdXJyZW50KSB7XHJcbiAgICBwcm9wcy5hZGRWYWxpZGF0b3IodmFsaWRhdGUpO1xyXG4gICAgdmFsaWRhdG9yQWRkZWQuY3VycmVudCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdGhlIHZhbGlkaXR5IG9mIGlucHV0LlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge29iamVjdH0gaWYgaW5wdXQgaXMgdmFsaWQsIHJldHVybnMgbnVsbC4gT3RoZXJ3aXNlLCByZXR1cm5zIGFuIG9iamVjdFxyXG4gICAqIGNvbnRhaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlcnJvclxyXG4gICAqIHttZXNzYWdlOiBlcnJvciBtZXNzYWdlLCBlbGVtZW50OiByZWZlcmVuY2UgdG8gSHRtbEVsZW1lbnQgdGhhdCBjb250YWlucyBlcnJvcn1cclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IFtlbGVtZW50LCB2YWxpZGl0eVN0YXRlXSA9IGdldEVsZW1lbnRBbmRWYWxpZGl0eVN0YXRlKGlucHV0SWQpO1xyXG5cclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnZhbHVlTWlzc2luZylcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBpcyByZXF1aXJlZC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50eXBlTWlzbWF0Y2gpXHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBhbiBlbWFpbC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29TaG9ydClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IG11c3QgYmUgYXQgbGVhc3QgJHttaW5MZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29Mb25nKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj17aW5wdXRJZH0+e2xhYmVsTmFtZX06IDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5vbkNoYW5nZShlLCBwcm9wcy5pbmRleCl9XHJcbiAgICAgICAgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfVxyXG4gICAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxyXG4gICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIElucHV0IGZpZWxkIGZvciBwYXNzd29yZHMuIElucHV0IGlzIGFsd2F5cyByZXF1aXJlZC5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWw/IHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChkZWZhdWx0IGxhYmVsIGlzIFBhc3N3b3JkKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFBhc3N3b3JkRmllbGQocHJvcHMpIHtcclxuICBjb25zdCBsYWJlbE5hbWUgPSBwcm9wcy5sYWJlbCB8fCBcIlBhc3N3b3JkXCI7XHJcbiAgY29uc3QgaW5wdXRJZCA9IGBmb3JtLWZpZWxkLSR7bGFiZWxOYW1lfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heCB8fCA1MDtcclxuXHJcbiAgY29uc3QgdmFsaWRhdG9yQWRkZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IFtlbGVtZW50LCB2YWxpZGl0eVN0YXRlXSA9IGdldEVsZW1lbnRBbmRWYWxpZGl0eVN0YXRlKGlucHV0SWQpO1xyXG5cclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnZhbHVlTWlzc2luZylcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBpcyByZXF1aXJlZC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29TaG9ydClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IG11c3QgYmUgYXQgbGVhc3QgJHttaW5MZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29Mb25nKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj17aW5wdXRJZH0+e2xhYmVsTmFtZX06IDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uQ2hhbmdlKGUsIHByb3BzLmluZGV4KX1cclxuICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gSHRtbEVsZW1lbnQgYW5kIGl0cyBWYWxpZGl0eVN0YXRlXHJcbiAqIG9iamVjdCBnaXZlbiBhbiBpZC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBpZCBvZiBGb3JtRmllbGQncyBIdG1sRWxlbWVudCB0byB2YWxpZGF0ZVxyXG4gKiBAcmV0dXJucyB7YXJyYXl9IFtIdG1sRWxlbWVudCwgdmFsaWRpdHlTdGF0ZV1cclxuICovXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnRBbmRWYWxpZGl0eVN0YXRlKGVsZW1lbnRJZCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlbGVtZW50SWR9YCk7XHJcbiAgY29uc3QgdmFsaWRpdHlTdGF0ZSA9IGVsZW1lbnQudmFsaWRpdHk7XHJcbiAgcmV0dXJuIFtlbGVtZW50LCB2YWxpZGl0eVN0YXRlXTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVwiO1xyXG5pbXBvcnQgeyBFbWFpbEZpZWxkLCBQYXNzd29yZEZpZWxkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybUZpZWxkc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFxyXG4gICAgcHJvcHMuZXJyb3IgJiYgKHByb3BzLmVycm9yLm1lc3NhZ2UgfHwgcHJvcHMuZXJyb3IubXNnKVxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlLCBlcnJvckluZm8pIHtcclxuICAgIGlmIChlcnJvckluZm8pIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9ySW5mby5tZXNzYWdlKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT5XZWxjb21lIHRvIE15IEdhbWUgUGFnZTwvaDE+XHJcbiAgICAgIDxoMj5Mb2dpbjwvaDI+XHJcbiAgICAgIDxGb3JtIGlkPVwibG9naW4tZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCIvXCI+XHJcbiAgICAgICAgPEVtYWlsRmllbGRcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5lbWFpbF92YWx1ZSB8fCBcIlwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFBhc3N3b3JkRmllbGRcclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5wYXNzd29yZF92YWx1ZSB8fCBcIlwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cD57ZXJyb3JNZXNzYWdlfTwvcD59XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGV4dC5yZXMubG9jYWxzKSksXHJcbiAgfTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==