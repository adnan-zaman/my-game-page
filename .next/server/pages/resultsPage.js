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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/resultsPage.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


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
 * - inline {boolean} whether this is an inline form or not
 *
 * -props.children should be a list of FormField elements. Each FormField
 *  should be initialized with an initial value prop.
 *
 */

function Form(props) {
  //array of values for all children (FormFields)
  //initializes state to be equal to the initial value given by
  //parent component
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child) {
    return child.props.value;
  })),
      _useState2 = _slicedToArray(_useState, 2),
      fieldValues = _useState2[0],
      setFieldValues = _useState2[1]; //list of validators of all of this Form's FormFields


  var fieldValidators = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]); //takes control of childrens state and passes own props

  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      value: fieldValues[index],
      addValidator: function addValidator(validator) {
        return fieldValidators.current.push(validator);
      },
      onChange: handleChange,
      parentId: props.id,
      //add parent id to so FormField can make unique ids for its elements
      index: index,
      inline: props.inline
    });
  });
  var submitBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary ".concat(props.btnClass),
    type: "submit"
  }, props.submitBtnText || "Submit"); //what to display inside the form
  //if its an inline form, put all children and button in one row
  //else display children as they are

  var innerForm = props.inline ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, children, submitBtn) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children, submitBtn);
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
    var newFieldValues = fieldValues.map(function (value, i) {
      return i === index ? e.target.value : value;
    });
    setFieldValues(newFieldValues);
  }
  /**
   * Calls every FormField's validator function. If any field
   * is invalid, will send the error info object to parent component.
   *
   * @param {event} e
   */


  function validateAllFields(e) {
    var _iterator = _createForOfIteratorHelper(fieldValidators.current),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var validator = _step.value;
        var errorInfo = validator();
        if (errorInfo) return props.onSubmit(e, errorInfo);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    props.onSubmit(e, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: props.id,
    onSubmit: validateAllFields,
    noValidate: true,
    action: props.action,
    method: props.method,
    className: props.className
  }, innerForm));
}

/***/ }),

/***/ "./components/FormFields.js":
/*!**********************************!*\
  !*** ./components/FormFields.js ***!
  \**********************************/
/*! exports provided: TextField, EmailField, PasswordField, HiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailField", function() { return EmailField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordField", function() { return PasswordField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiddenField", function() { return HiddenField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(props.children); //preserve existing css classes + add bootstrap classes

  var control = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children[0], {
    className: (children[0].className || "") + " form-control ".concat(props.inline ? "w-100" : "w-75")
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(props.inline ? "" : "form-group m-3", " ").concat(props.groupClass)
  }, control);
} //dont use the ado vacation/timeoff for holiday just dont put any time

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
  var inputId = "form-field-".concat(props.label, "-").concat(props.parentId);
  var minLength = props.min;
  var maxLength = props.max;
  var validatorAdded = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false); //reference to input html element

  var inputField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(undefined); //to ensure validator only gets added to parent Form once

  if (!validatorAdded.current) {
    props.addValidator(validate);
    validatorAdded.current = true;
  }
  /**
   * Checks the validity of input
   */


  function validate() {
    var element = inputField.current;
    var validityState = element.validity;
    if (validityState.valueMissing) return {
      message: "".concat(props.label, " is required."),
      element: element
    };
    if (validityState.tooShort) return {
      message: "".concat(props.label, " must be at least ").concat(minLength, " characters long."),
      element: element
    };
    if (validityState.tooLong) return {
      message: "".concat(props.label, " must be less than or equal to ").concat(maxLength, " characters long."),
      element: element
    };
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormFieldTemplate, {
    groupClass: props.groupClass,
    inline: props.inline
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: inputId,
    name: props.name,
    value: props.value || "",
    onChange: function onChange(e) {
      return props.onChange(e, props.index);
    },
    required: props.required,
    minLength: minLength,
    maxLength: maxLength,
    placeholder: props.label,
    ref: inputField
  }));
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
  var labelName = props.label || "Email";
  var inputId = "form-field-".concat(labelName, "-").concat(props.parentId);
  var minLength = props.min;
  var maxLength = props.max || 50;
  var validatorAdded = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false); //reference to input html element

  var inputField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(undefined); //to ensure validator only gets added to parent Form once

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
    var element = inputField.current;
    var validityState = element.validity;
    if (validityState.valueMissing) return {
      message: "".concat(labelName, " is required."),
      element: element
    };
    if (validityState.typeMismatch) return {
      message: "".concat(labelName, " must be an email."),
      element: element
    };
    if (validityState.tooShort) return {
      message: "".concat(labelName, " must be at least ").concat(minLength, " characters long."),
      element: element
    };
    if (validityState.tooLong) return {
      message: "".concat(labelName, " must be less than or equal to ").concat(maxLength, " characters long."),
      element: element
    };
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormFieldTemplate, {
    groupClass: props.groupClass,
    inline: props.inline
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: inputId,
    name: props.name,
    value: props.value,
    type: "email",
    onChange: function onChange(e) {
      return props.onChange(e, props.index);
    },
    required: props.required,
    minLength: minLength,
    maxLength: maxLength,
    placeholder: labelName,
    ref: inputField
  }));
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
  var labelName = props.label || "Password";
  var inputId = "form-field-".concat(labelName, "-").concat(props.parentId);
  var minLength = props.min;
  var maxLength = props.max || 50;
  var validatorAdded = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false); //reference to input html element

  var inputField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(undefined); //to ensure validator only gets added to parent Form once

  if (!validatorAdded.current) {
    props.addValidator(validate);
    validatorAdded.current = true;
  }
  /**
   * Checks the validity of input
   */


  function validate() {
    var element = inputField.current;
    var validityState = element.validity;
    if (validityState.valueMissing) return {
      message: "".concat(labelName, " is required."),
      element: element
    };
    if (validityState.tooShort) return {
      message: "".concat(labelName, " must be at least ").concat(minLength, " characters long."),
      element: element
    };
    if (validityState.tooLong) return {
      message: "".concat(labelName, " must be less than or equal to ").concat(maxLength, " characters long."),
      element: element
    };
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormFieldTemplate, {
    groupClass: props.groupClass,
    inline: props.inline
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: inputId,
    name: props.name,
    value: props.value || "",
    type: "password",
    onChange: function onChange(e) {
      return props.onChange(e, props.index);
    },
    required: true,
    minLength: minLength,
    maxLength: maxLength,
    placeholder: labelName,
    ref: inputField
  }));
}
/**
 * Hidden input field
 *
 * @param {object} props
 * - label {string} FormField's label (not visible, just for naming purposes)
 * - name {string} name for input element
 * - value {string} input's value
 */

function HiddenField(props) {
  var inputId = "form-field-".concat(props.label, "-").concat(props.parentId);
  var validatorAdded = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false); //reference to input html element

  var inputField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(undefined); //to ensure validator only gets added to parent Form once

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormFieldTemplate, {
    groupClass: props.groupClass,
    inline: props.inline
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: inputId,
    name: props.name,
    value: props.value,
    hidden: true,
    readOnly: true,
    ref: inputField
  }));
}

/***/ }),

/***/ "./components/SearchResult.js":
/*!************************************!*\
  !*** ./components/SearchResult.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchResult; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 *
 * A search result of a single user displayed when
 * searching for users.
 *
 * @param {object} props expected props:
 *
 * - displayName {string} display name to show
 * - pageUrl {string} url to user's page
 * - profilePic {string} src url of user's profile picture
 *
 */

function SearchResult(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.pageUrl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-result row rounded m-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.profilePic,
    alt: "".concat(props.displayName, "'s profile picture"),
    className: "rounded-circle border"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.displayName))));
}

/***/ }),

/***/ "./components/Test.js":
/*!****************************!*\
  !*** ./components/Test.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./components/Form.js");
/* harmony import */ var _FormFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormFields */ "./components/FormFields.js");



function Test(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: props.id,
    onClick: props.onClick
  });
}

/***/ }),

/***/ "./components/Toolbar.js":
/*!*******************************!*\
  !*** ./components/Toolbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./components/Form.js");
/* harmony import */ var _FormFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormFields */ "./components/FormFields.js");
/* harmony import */ var _Test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Test */ "./components/Test.js");




/**
 *
 * @param {object} props expected props:
 * - userId {number} the logged in user's user id
 * - profilePic {string} src url for user's profile picture
 */

function Toolbar(props) {
  function handleSubmit(e, errorInfo) {
    console.log(errorInfo);
    if (errorInfo) e.preventDefault();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row toolbar m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "Toolbar-Form",
    onSubmit: handleSubmit,
    submitBtnText: "Go!",
    method: "get",
    action: "/search",
    className: "col-md-11 col-10",
    btnClass: "col-md-1 col-2 pt-1",
    inline: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormFields__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: "Search",
    name: "query",
    value: "",
    groupClass: "col-10 col-md-11 pt-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormFields__WEBPACK_IMPORTED_MODULE_2__["HiddenField"], {
    label: "Page",
    name: "page",
    value: "0",
    groupClass: "d.none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/user/".concat(props.userId),
    className: "col-md-1 col-2 pt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.profilePic,
    alt: "Your profile picture",
    className: "rounded-circle",
    height: "45",
    width: "45"
  })));
}

/***/ }),

/***/ "./pages/resultsPage.js":
/*!******************************!*\
  !*** ./pages/resultsPage.js ***!
  \******************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Toolbar */ "./components/Toolbar.js");
/* harmony import */ var _components_SearchResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SearchResult */ "./components/SearchResult.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/**
 * Page that displays the results of a search.
 * Currently only used for user search, maybe used
 * in general for all searches throughout the site.
 *
 * @param {object} props expected props:
 *  - users: {object[]} -> object = {id: (num), displayName: {string}}
 *    all the users to be displayed
 *  - hasNext {boolean} whether or not there is a next page
 *  - searchQuery {string} the search query these results are for
 *  - page {number} the current search page
 *  - userId {number} logged in user's user id
 *  - profilePic {string} src url of user's profile picture
 */

function ResultsPage(props) {
  var searchResults = []; //create SearchResult for each user

  var _iterator = _createForOfIteratorHelper(props.users),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var user = _step.value;
      searchResults.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchResult__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: user.id,
        displayName: user.displayName,
        pageUrl: "/user/".concat(user.id),
        profilePic: user.profilePic
      }));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "full-page-flex-container d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Toolbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    userId: props.userId,
    profilePic: props.profilePic
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-results-container"
  }, searchResults.length > 0 ? searchResults : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "There are no results..")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-results-container-nav-buttons"
  }, props.page > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/search?query=".concat(props.searchQuery, "&page=").concat(props.page - 1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-secondary"
  }, "Prev")), props.hasNext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/search?query=".concat(props.searchQuery, "&page=").concat(props.page + 1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-secondary"
  }, "Next")))));
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybUZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub29sYmFyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Jlc3VsdHNQYWdlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGRyZW4iLCJjaGlsZCIsInZhbHVlIiwiZmllbGRWYWx1ZXMiLCJzZXRGaWVsZFZhbHVlcyIsImZpZWxkVmFsaWRhdG9ycyIsInVzZVJlZiIsImluZGV4IiwiY2xvbmVFbGVtZW50IiwiYWRkVmFsaWRhdG9yIiwidmFsaWRhdG9yIiwiY3VycmVudCIsInB1c2giLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsInBhcmVudElkIiwiaWQiLCJpbmxpbmUiLCJzdWJtaXRCdG4iLCJidG5DbGFzcyIsInN1Ym1pdEJ0blRleHQiLCJpbm5lckZvcm0iLCJlIiwibmV3RmllbGRWYWx1ZXMiLCJpIiwidGFyZ2V0IiwidmFsaWRhdGVBbGxGaWVsZHMiLCJlcnJvckluZm8iLCJvblN1Ym1pdCIsImFjdGlvbiIsIm1ldGhvZCIsImNsYXNzTmFtZSIsIkZvcm1GaWVsZFRlbXBsYXRlIiwidG9BcnJheSIsImNvbnRyb2wiLCJncm91cENsYXNzIiwiVGV4dEZpZWxkIiwiaW5wdXRJZCIsImxhYmVsIiwibWluTGVuZ3RoIiwibWluIiwibWF4TGVuZ3RoIiwibWF4IiwidmFsaWRhdG9yQWRkZWQiLCJpbnB1dEZpZWxkIiwidW5kZWZpbmVkIiwidmFsaWRhdGUiLCJlbGVtZW50IiwidmFsaWRpdHlTdGF0ZSIsInZhbGlkaXR5IiwidmFsdWVNaXNzaW5nIiwibWVzc2FnZSIsInRvb1Nob3J0IiwidG9vTG9uZyIsIm5hbWUiLCJyZXF1aXJlZCIsIkVtYWlsRmllbGQiLCJsYWJlbE5hbWUiLCJ0eXBlTWlzbWF0Y2giLCJQYXNzd29yZEZpZWxkIiwiSGlkZGVuRmllbGQiLCJTZWFyY2hSZXN1bHQiLCJwYWdlVXJsIiwicHJvZmlsZVBpYyIsImRpc3BsYXlOYW1lIiwiVGVzdCIsIm9uQ2xpY2siLCJUb29sYmFyIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwidXNlcklkIiwiUmVzdWx0c1BhZ2UiLCJzZWFyY2hSZXN1bHRzIiwidXNlcnMiLCJ1c2VyIiwibGVuZ3RoIiwicGFnZSIsInNlYXJjaFF1ZXJ5IiwiaGFzTmV4dCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJyZXMiLCJsb2NhbHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJC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QUFad0M7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjekMsc0JBQ0UscUlBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSwyREFBQywyREFBRDtBQUFTLFVBQU0sRUFBRXBFLEtBQUssQ0FBQzZFLE1BQXZCO0FBQStCLGNBQVUsRUFBRTdFLEtBQUssQ0FBQ29FO0FBQWpELElBREYsZUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dXLGFBQWEsQ0FBQ0csTUFBZCxHQUF1QixDQUF2QixHQUNDSCxhQURELGdCQUdDLCtGQUpKLENBRkYsZUFTRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0cvRSxLQUFLLENBQUNtRixJQUFOLEdBQWEsQ0FBYixpQkFDQztBQUNFLFFBQUksMEJBQW1CbkYsS0FBSyxDQUFDb0YsV0FBekIsbUJBQTZDcEYsS0FBSyxDQUFDbUYsSUFBTixHQUFhLENBQTFEO0FBRE4sa0JBR0U7QUFBUSxhQUFTLEVBQUM7QUFBbEIsWUFIRixDQUZKLEVBUUduRixLQUFLLENBQUNxRixPQUFOLGlCQUNDO0FBQ0UsUUFBSSwwQkFBbUJyRixLQUFLLENBQUNvRixXQUF6QixtQkFBNkNwRixLQUFLLENBQUNtRixJQUFOLEdBQWEsQ0FBMUQ7QUFETixrQkFHRTtBQUFRLGFBQVMsRUFBQztBQUFsQixZQUhGLENBVEosQ0FURixDQURGLENBREY7QUE4QkQ7QUFFTSxTQUFTRyxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUM7QUFDMUMsU0FBTztBQUNMdkYsU0FBSyxFQUFFd0YsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSCxPQUFPLENBQUNJLEdBQVIsQ0FBWUMsTUFBM0IsQ0FBWDtBQURGLEdBQVA7QUFHRCxDOzs7Ozs7Ozs7OztBQ3BFRCxrQyIsImZpbGUiOiJwYWdlcy9yZXN1bHRzUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcmVzdWx0c1BhZ2UuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEdlbmVyYWwgZm9ybSBjb21wb25lbnQgdGhhdCB2YWxpZGF0ZXMgYW5kIGNvbnRyb2xzIHRoZSBzdGF0ZVxyXG4gKiBvZiBhbGwgb2YgaXRzIGZpZWxkcy4gQ2hpbGRyZW4gb2YgRm9ybSBzaG91bGQgYmUgYSBsaXN0IG9mIEZvcm1FbGVtZW50cy5cclxuICpcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIGlkIHtzdHJpbmd9IGZvcm0gaHRtbEVsZW1lbnQncyBpZFxyXG4gKlxyXG4gKiAtIG9uU3VibWl0IHtmdW5jdGlvbihldmVudCwgb2JqZWN0KX0gY2FsbGJhY2sgZm9yIHdoZW4gZm9ybSBzdWJtaXRzLlxyXG4gKiAgIEZvcm0gd2lsbCBzZW5kIHR3byBhcmd1bWVudHMsIHRoZSBmaXJzdCBpcyB0aGUgZXZlbnQsIHRoZSBzZWNvbmRcclxuICogICBpcyB0aGUgZXJyb3IgaW5mbyBvYmplY3QuIElmIG9uZSBvZiB0aGUgRm9ybUZpZWxkcyB3aXRoaW4gdGhlIEZvcm1cclxuICogICB3ZXJlIG5vdCB2YWxpZCwgdGhlIHNlY29uZCBhcmd1bWVudCB3aWxsIGJlIGFuIG9iamVjdCBjb250YWluaW5nXHJcbiAqICAgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVycm9yLiBJZiBldmVyeXRoaW5nIHdhcyB2YWxpZCwgaXQgd2lsbCBiZSBudWxsLlxyXG4gKlxyXG4gKiAtIHN1Ym1pdEJ0blRleHQge3N0cmluZ30gdGhlIHRleHRDb250ZW50IGZvciB0aGUgc3VibWl0IGJ1dHRvblxyXG4gKlxyXG4gKiAtIGFjdGlvbj8ge3N0cmluZ30gdmFsdWUgZm9yIGZvcm0ncyBhY3Rpb24gYXR0cmlidXRlXHJcbiAqXHJcbiAqIC0gbWV0aG9kPyB7c3RyaW5nfSB2YWx1ZSBmb3IgZm9ybSdzIG1ldGhvZCBhdHRyaWJ1dGVcclxuICpcclxuICogLSBpbmxpbmUge2Jvb2xlYW59IHdoZXRoZXIgdGhpcyBpcyBhbiBpbmxpbmUgZm9ybSBvciBub3RcclxuICpcclxuICogLXByb3BzLmNoaWxkcmVuIHNob3VsZCBiZSBhIGxpc3Qgb2YgRm9ybUZpZWxkIGVsZW1lbnRzLiBFYWNoIEZvcm1GaWVsZFxyXG4gKiAgc2hvdWxkIGJlIGluaXRpYWxpemVkIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSBwcm9wLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybShwcm9wcykge1xyXG4gIC8vYXJyYXkgb2YgdmFsdWVzIGZvciBhbGwgY2hpbGRyZW4gKEZvcm1GaWVsZHMpXHJcbiAgLy9pbml0aWFsaXplcyBzdGF0ZSB0byBiZSBlcXVhbCB0byB0aGUgaW5pdGlhbCB2YWx1ZSBnaXZlbiBieVxyXG4gIC8vcGFyZW50IGNvbXBvbmVudFxyXG4gIGNvbnN0IFtmaWVsZFZhbHVlcywgc2V0RmllbGRWYWx1ZXNdID0gdXNlU3RhdGUoXHJcbiAgICBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCkgPT4gY2hpbGQucHJvcHMudmFsdWUpXHJcbiAgKTtcclxuXHJcbiAgLy9saXN0IG9mIHZhbGlkYXRvcnMgb2YgYWxsIG9mIHRoaXMgRm9ybSdzIEZvcm1GaWVsZHNcclxuICBjb25zdCBmaWVsZFZhbGlkYXRvcnMgPSB1c2VSZWYoW10pO1xyXG5cclxuICAvL3Rha2VzIGNvbnRyb2wgb2YgY2hpbGRyZW5zIHN0YXRlIGFuZCBwYXNzZXMgb3duIHByb3BzXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+XHJcbiAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgdmFsdWU6IGZpZWxkVmFsdWVzW2luZGV4XSxcclxuICAgICAgYWRkVmFsaWRhdG9yOiAodmFsaWRhdG9yKSA9PiBmaWVsZFZhbGlkYXRvcnMuY3VycmVudC5wdXNoKHZhbGlkYXRvciksXHJcbiAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgIHBhcmVudElkOiBwcm9wcy5pZCwgLy9hZGQgcGFyZW50IGlkIHRvIHNvIEZvcm1GaWVsZCBjYW4gbWFrZSB1bmlxdWUgaWRzIGZvciBpdHMgZWxlbWVudHNcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIGlubGluZTogcHJvcHMuaW5saW5lLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBjb25zdCBzdWJtaXRCdG4gPSAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ0biBidG4tcHJpbWFyeSAke3Byb3BzLmJ0bkNsYXNzfWB9IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAge3Byb3BzLnN1Ym1pdEJ0blRleHQgfHwgXCJTdWJtaXRcIn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcblxyXG4gIC8vd2hhdCB0byBkaXNwbGF5IGluc2lkZSB0aGUgZm9ybVxyXG4gIC8vaWYgaXRzIGFuIGlubGluZSBmb3JtLCBwdXQgYWxsIGNoaWxkcmVuIGFuZCBidXR0b24gaW4gb25lIHJvd1xyXG4gIC8vZWxzZSBkaXNwbGF5IGNoaWxkcmVuIGFzIHRoZXkgYXJlXHJcbiAgY29uc3QgaW5uZXJGb3JtID0gcHJvcHMuaW5saW5lID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7c3VibWl0QnRufVxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDw+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAge3N1Ym1pdEJ0bn1cclxuICAgIDwvPlxyXG4gICk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgdmFsdWUgY2hhbmdlcyBmb3IgYWxsIG9mIGEgRm9ybSdzIEZvcm1GaWVsZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IEZvcm1GaWVsZCdzIGluZGV4IHByb3BcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSwgaW5kZXgpIHtcclxuICAgIC8vdGhlIGluZGV4IHByb3Agb2YgZWFjaCBGb3JtRmllbGQgYW5kIGZpZWxkVmFsdWVzIGFyZSBwYXJhbGxlbFxyXG4gICAgLy9zbyBpZiBhIEZvcm1GaWVsZCBwYXNzZXMgaXQncyBwcm9wcy5pbmRleCwgd2UgY2FuIHNldFxyXG4gICAgLy90aGUgY29ycmVjdCBzdGF0ZVxyXG4gICAgY29uc3QgbmV3RmllbGRWYWx1ZXMgPSBmaWVsZFZhbHVlcy5tYXAoKHZhbHVlLCBpKSA9PlxyXG4gICAgICBpID09PSBpbmRleCA/IGUudGFyZ2V0LnZhbHVlIDogdmFsdWVcclxuICAgICk7XHJcblxyXG4gICAgc2V0RmllbGRWYWx1ZXMobmV3RmllbGRWYWx1ZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbHMgZXZlcnkgRm9ybUZpZWxkJ3MgdmFsaWRhdG9yIGZ1bmN0aW9uLiBJZiBhbnkgZmllbGRcclxuICAgKiBpcyBpbnZhbGlkLCB3aWxsIHNlbmQgdGhlIGVycm9yIGluZm8gb2JqZWN0IHRvIHBhcmVudCBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVBbGxGaWVsZHMoZSkge1xyXG4gICAgZm9yIChjb25zdCB2YWxpZGF0b3Igb2YgZmllbGRWYWxpZGF0b3JzLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgZXJyb3JJbmZvID0gdmFsaWRhdG9yKCk7XHJcbiAgICAgIGlmIChlcnJvckluZm8pIHJldHVybiBwcm9wcy5vblN1Ym1pdChlLCBlcnJvckluZm8pO1xyXG4gICAgfVxyXG4gICAgcHJvcHMub25TdWJtaXQoZSwgbnVsbCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICBvblN1Ym1pdD17dmFsaWRhdGVBbGxGaWVsZHN9XHJcbiAgICAgICAgbm9WYWxpZGF0ZT17dHJ1ZX1cclxuICAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cclxuICAgICAgICBtZXRob2Q9e3Byb3BzLm1ldGhvZH1cclxuICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpbm5lckZvcm19XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEZvcm1GaWVsZHMgYXJlIG1lYW50IHRvIGJlIHVzZWQgd2l0aCB0aGUgRm9ybSBjb21wb25lbnQuXHJcbiAqIFRoZXkgYXJlIGEgY29tYmluYXRpb24gb2YgYSBsYWJlbCBhbmQgYSBjb3JyZXNwb25kaW5nIGlucHV0IGVsZW1lbnQgb2Ygc29tZSBraW5kLlxyXG4gKiBUaGV5IG1ha2UgdXAgdGhlIGZpZWxkcyBvZiBhIEZvcm0gY29tcG9uZW50LiBFYWNoIEZvcm1GaWVsZCBoYXMgaXRzIG93blxyXG4gKiB2YWxpZGF0b3IgZnVuY3Rpb24gdGhhdCBjaGVja3MgdGhlIHZhbGlkaXR5IG9mIGl0cyBpbnB1dC4gRm9ybUZpZWxkIHZhbGlkYXRvcnNcclxuICogYXJlIGNhbGxlZCBieSBpdHMgcGFyZW50IEZvcm0uIEZvcm1GaWVsZHMgc2hvdWxkIGJlIHRoZSBjaGlsZHJlbiBvZiBhIEZvcm1cclxuICogY29tcG9uZW50IGFuZCBzaG91bGQgYmUgaW5pdGlhbGllZCB3aXRoIGFuIGluaXRpYWwgdmFsdWUgcHJvcC4gQWZ0ZXIgZmlyc3QgcmVuZGVyLFxyXG4gKiB0aGUgRm9ybSBjb21wb25lbnQgd2lsbCB0YWtlIGNvbnRyb2wgb2YgdGhlIEZvcm1GaWVsZCdzIHZhbHVlIHN0YXRlLlxyXG4gKlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBDb21tb24gbGF5b3V0IHRlbXBsYXRlIHRoYXQgRm9ybUZpZWxkcyB1c2VcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIGV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIGdyb3VwQ2xhc3Mge3N0cn0gY3NzIGNsYXNzIGZvciB0aGUgZm9ybS1ncm91cCBjb250YWluaW5nIHRoZSBpbnB1dFxyXG4gKiAtIGNoaWxkcmVuOlxyXG4gKiAtIEZvcm1GaWVsZCdzIGNvbnRyb2xcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIEZvcm1GaWVsZFRlbXBsYXRlKHByb3BzKSB7XHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKTtcclxuICAvL3ByZXNlcnZlIGV4aXN0aW5nIGNzcyBjbGFzc2VzICsgYWRkIGJvb3RzdHJhcCBjbGFzc2VzXHJcbiAgY29uc3QgY29udHJvbCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlblswXSwge1xyXG4gICAgY2xhc3NOYW1lOlxyXG4gICAgICAoY2hpbGRyZW5bMF0uY2xhc3NOYW1lIHx8IFwiXCIpICtcclxuICAgICAgYCBmb3JtLWNvbnRyb2wgJHtwcm9wcy5pbmxpbmUgPyBcInctMTAwXCIgOiBcInctNzVcIn1gLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Ake3Byb3BzLmlubGluZSA/IFwiXCIgOiBcImZvcm0tZ3JvdXAgbS0zXCJ9ICR7cHJvcHMuZ3JvdXBDbGFzc31gfVxyXG4gICAgPlxyXG4gICAgICB7Y29udHJvbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vZG9udCB1c2UgdGhlIGFkbyB2YWNhdGlvbi90aW1lb2ZmIGZvciBob2xpZGF5IGp1c3QgZG9udCBwdXQgYW55IHRpbWVcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmFsIHRleHQgaW5wdXQgZmllbGQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsIHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsXHJcbiAqIC0gbmFtZSB7c3RyaW5nfSBuYW1lIGZvciBpbnB1dCBlbGVtZW50XHJcbiAqIC0gcmVxdWlyZWQ/IHtib29sZWFufSB3aGV0aGVyIHRoaXMgRm9ybUZpZWxkIGlzIHJlcXVpcmVkIG9yIG5vdFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKiAtIG1heD8ge251bWJlcn0gbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRleHRGaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke3Byb3BzLmxhYmVsfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heDtcclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBpbnB1dEZpZWxkLmN1cnJlbnQ7XHJcbiAgICBjb25zdCB2YWxpZGl0eVN0YXRlID0gZWxlbWVudC52YWxpZGl0eTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS52YWx1ZU1pc3NpbmcpXHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGAke3Byb3BzLmxhYmVsfSBpcyByZXF1aXJlZC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29TaG9ydClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtwcm9wcy5sYWJlbH0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7cHJvcHMubGFiZWx9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1GaWVsZFRlbXBsYXRlIGdyb3VwQ2xhc3M9e3Byb3BzLmdyb3VwQ2xhc3N9IGlubGluZT17cHJvcHMuaW5saW5lfT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9e2lucHV0SWR9XHJcbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWUgfHwgXCJcIn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uQ2hhbmdlKGUsIHByb3BzLmluZGV4KX1cclxuICAgICAgICByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgbWluTGVuZ3RoPXttaW5MZW5ndGh9XHJcbiAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLmxhYmVsfVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIElucHV0IGZpZWxkIGZvciBlbWFpbHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsPyB7c3RyaW5nfSBGb3JtRmllbGQncyBsYWJlbCAoZGVmYXVsdCBsYWJlbCBpcyBFbWFpbClcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSByZXF1aXJlZD8ge2Jvb2xlYW59IHdoZXRoZXIgdGhpcyBGb3JtRmllbGQgaXMgcmVxdWlyZWQgb3Igbm90XHJcbiAqIC0gbWluPyB7bnVtYmVyfSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqIC0gbWF4PyB7bnVtYmVyfSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRW1haWxGaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGxhYmVsTmFtZSA9IHByb3BzLmxhYmVsIHx8IFwiRW1haWxcIjtcclxuICBjb25zdCBpbnB1dElkID0gYGZvcm0tZmllbGQtJHtsYWJlbE5hbWV9LSR7cHJvcHMucGFyZW50SWR9YDtcclxuICBjb25zdCBtaW5MZW5ndGggPSBwcm9wcy5taW47XHJcbiAgY29uc3QgbWF4TGVuZ3RoID0gcHJvcHMubWF4IHx8IDUwO1xyXG5cclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBpZiBpbnB1dCBpcyB2YWxpZCwgcmV0dXJucyBudWxsLiBPdGhlcndpc2UsIHJldHVybnMgYW4gb2JqZWN0XHJcbiAgICogY29udGFpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVycm9yXHJcbiAgICoge21lc3NhZ2U6IGVycm9yIG1lc3NhZ2UsIGVsZW1lbnQ6IHJlZmVyZW5jZSB0byBIdG1sRWxlbWVudCB0aGF0IGNvbnRhaW5zIGVycm9yfVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGlucHV0RmllbGQuY3VycmVudDtcclxuICAgIGNvbnN0IHZhbGlkaXR5U3RhdGUgPSBlbGVtZW50LnZhbGlkaXR5O1xyXG5cclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnZhbHVlTWlzc2luZylcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBpcyByZXF1aXJlZC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50eXBlTWlzbWF0Y2gpXHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBhbiBlbWFpbC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29TaG9ydClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IG11c3QgYmUgYXQgbGVhc3QgJHttaW5MZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29Mb25nKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGUgZ3JvdXBDbGFzcz17cHJvcHMuZ3JvdXBDbGFzc30gaW5saW5lPXtwcm9wcy5pbmxpbmV9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD17aW5wdXRJZH1cclxuICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSwgcHJvcHMuaW5kZXgpfVxyXG4gICAgICAgIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17bGFiZWxOYW1lfVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIElucHV0IGZpZWxkIGZvciBwYXNzd29yZHMuIElucHV0IGlzIGFsd2F5cyByZXF1aXJlZC5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWw/IHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChkZWZhdWx0IGxhYmVsIGlzIFBhc3N3b3JkKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFBhc3N3b3JkRmllbGQocHJvcHMpIHtcclxuICBjb25zdCBsYWJlbE5hbWUgPSBwcm9wcy5sYWJlbCB8fCBcIlBhc3N3b3JkXCI7XHJcbiAgY29uc3QgaW5wdXRJZCA9IGBmb3JtLWZpZWxkLSR7bGFiZWxOYW1lfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heCB8fCA1MDtcclxuXHJcbiAgY29uc3QgdmFsaWRhdG9yQWRkZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIC8vcmVmZXJlbmNlIHRvIGlucHV0IGh0bWwgZWxlbWVudFxyXG4gIGNvbnN0IGlucHV0RmllbGQgPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuXHJcbiAgLy90byBlbnN1cmUgdmFsaWRhdG9yIG9ubHkgZ2V0cyBhZGRlZCB0byBwYXJlbnQgRm9ybSBvbmNlXHJcbiAgaWYgKCF2YWxpZGF0b3JBZGRlZC5jdXJyZW50KSB7XHJcbiAgICBwcm9wcy5hZGRWYWxpZGF0b3IodmFsaWRhdGUpO1xyXG4gICAgdmFsaWRhdG9yQWRkZWQuY3VycmVudCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdGhlIHZhbGlkaXR5IG9mIGlucHV0XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gaW5wdXRGaWVsZC5jdXJyZW50O1xyXG4gICAgY29uc3QgdmFsaWRpdHlTdGF0ZSA9IGVsZW1lbnQudmFsaWRpdHk7XHJcblxyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudmFsdWVNaXNzaW5nKVxyXG4gICAgICByZXR1cm4geyBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAke21heExlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtRmllbGRUZW1wbGF0ZSBncm91cENsYXNzPXtwcm9wcy5ncm91cENsYXNzfSBpbmxpbmU9e3Byb3BzLmlubGluZX0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uQ2hhbmdlKGUsIHByb3BzLmluZGV4KX1cclxuICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17bGFiZWxOYW1lfVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhpZGRlbiBpbnB1dCBmaWVsZFxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogLSBsYWJlbCB7c3RyaW5nfSBGb3JtRmllbGQncyBsYWJlbCAobm90IHZpc2libGUsIGp1c3QgZm9yIG5hbWluZyBwdXJwb3NlcylcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSB2YWx1ZSB7c3RyaW5nfSBpbnB1dCdzIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSGlkZGVuRmllbGQocHJvcHMpIHtcclxuICBjb25zdCBpbnB1dElkID0gYGZvcm0tZmllbGQtJHtwcm9wcy5sYWJlbH0tJHtwcm9wcy5wYXJlbnRJZH1gO1xyXG5cclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIC8vYWx3YXlzIHZhbGlkXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGUgZ3JvdXBDbGFzcz17cHJvcHMuZ3JvdXBDbGFzc30gaW5saW5lPXtwcm9wcy5pbmxpbmV9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD17aW5wdXRJZH1cclxuICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICBoaWRkZW49e3RydWV9XHJcbiAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgcmVmPXtpbnB1dEZpZWxkfVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBBIHNlYXJjaCByZXN1bHQgb2YgYSBzaW5nbGUgdXNlciBkaXNwbGF5ZWQgd2hlblxyXG4gKiBzZWFyY2hpbmcgZm9yIHVzZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgZXhwZWN0ZWQgcHJvcHM6XHJcbiAqXHJcbiAqIC0gZGlzcGxheU5hbWUge3N0cmluZ30gZGlzcGxheSBuYW1lIHRvIHNob3dcclxuICogLSBwYWdlVXJsIHtzdHJpbmd9IHVybCB0byB1c2VyJ3MgcGFnZVxyXG4gKiAtIHByb2ZpbGVQaWMge3N0cmluZ30gc3JjIHVybCBvZiB1c2VyJ3MgcHJvZmlsZSBwaWN0dXJlXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hSZXN1bHQocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj17cHJvcHMucGFnZVVybH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdCByb3cgcm91bmRlZCBtLTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17cHJvcHMucHJvZmlsZVBpY31cclxuICAgICAgICAgICAgYWx0PXtgJHtwcm9wcy5kaXNwbGF5TmFtZX0ncyBwcm9maWxlIHBpY3R1cmVgfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZSBib3JkZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC05XCI+XHJcbiAgICAgICAgICA8aDI+e3Byb3BzLmRpc3BsYXlOYW1lfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIi4vRm9ybUZpZWxkc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdChwcm9wcykge1xyXG4gIHJldHVybiA8YnV0dG9uIGlkPXtwcm9wcy5pZH0gb25DbGljaz17cHJvcHMub25DbGlja30+PC9idXR0b24+O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCwgSGlkZGVuRmllbGQgfSBmcm9tIFwiLi9Gb3JtRmllbGRzXCI7XHJcbmltcG9ydCBUZXN0IGZyb20gXCIuL1Rlc3RcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgZXhwZWN0ZWQgcHJvcHM6XHJcbiAqIC0gdXNlcklkIHtudW1iZXJ9IHRoZSBsb2dnZWQgaW4gdXNlcidzIHVzZXIgaWRcclxuICogLSBwcm9maWxlUGljIHtzdHJpbmd9IHNyYyB1cmwgZm9yIHVzZXIncyBwcm9maWxlIHBpY3R1cmVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvb2xiYXIocHJvcHMpIHtcclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSwgZXJyb3JJbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvckluZm8pO1xyXG4gICAgaWYgKGVycm9ySW5mbykgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRvb2xiYXIgbS0wXCI+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgaWQ9XCJUb29sYmFyLUZvcm1cIlxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgc3VibWl0QnRuVGV4dD1cIkdvIVwiXHJcbiAgICAgICAgbWV0aG9kPVwiZ2V0XCJcclxuICAgICAgICBhY3Rpb249XCIvc2VhcmNoXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMTEgY29sLTEwXCJcclxuICAgICAgICBidG5DbGFzcz1cImNvbC1tZC0xIGNvbC0yIHB0LTFcIlxyXG4gICAgICAgIGlubGluZT17dHJ1ZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgIG5hbWU9XCJxdWVyeVwiXHJcbiAgICAgICAgICB2YWx1ZT1cIlwiXHJcbiAgICAgICAgICBncm91cENsYXNzPVwiY29sLTEwIGNvbC1tZC0xMSBwdC0xXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxIaWRkZW5GaWVsZCBsYWJlbD1cIlBhZ2VcIiBuYW1lPVwicGFnZVwiIHZhbHVlPVwiMFwiIGdyb3VwQ2xhc3M9XCJkLm5vbmVcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxhIGhyZWY9e2AvdXNlci8ke3Byb3BzLnVzZXJJZH1gfSBjbGFzc05hbWU9XCJjb2wtbWQtMSBjb2wtMiBwdC0xXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtwcm9wcy5wcm9maWxlUGljfVxyXG4gICAgICAgICAgYWx0PXtgWW91ciBwcm9maWxlIHBpY3R1cmVgfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiNDVcIlxyXG4gICAgICAgICAgd2lkdGg9XCI0NVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9vbGJhclwiO1xyXG5pbXBvcnQgU2VhcmNoUmVzdWx0IGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdFwiO1xyXG5cclxuLyoqXHJcbiAqIFBhZ2UgdGhhdCBkaXNwbGF5cyB0aGUgcmVzdWx0cyBvZiBhIHNlYXJjaC5cclxuICogQ3VycmVudGx5IG9ubHkgdXNlZCBmb3IgdXNlciBzZWFyY2gsIG1heWJlIHVzZWRcclxuICogaW4gZ2VuZXJhbCBmb3IgYWxsIHNlYXJjaGVzIHRocm91Z2hvdXQgdGhlIHNpdGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBleHBlY3RlZCBwcm9wczpcclxuICogIC0gdXNlcnM6IHtvYmplY3RbXX0gLT4gb2JqZWN0ID0ge2lkOiAobnVtKSwgZGlzcGxheU5hbWU6IHtzdHJpbmd9fVxyXG4gKiAgICBhbGwgdGhlIHVzZXJzIHRvIGJlIGRpc3BsYXllZFxyXG4gKiAgLSBoYXNOZXh0IHtib29sZWFufSB3aGV0aGVyIG9yIG5vdCB0aGVyZSBpcyBhIG5leHQgcGFnZVxyXG4gKiAgLSBzZWFyY2hRdWVyeSB7c3RyaW5nfSB0aGUgc2VhcmNoIHF1ZXJ5IHRoZXNlIHJlc3VsdHMgYXJlIGZvclxyXG4gKiAgLSBwYWdlIHtudW1iZXJ9IHRoZSBjdXJyZW50IHNlYXJjaCBwYWdlXHJcbiAqICAtIHVzZXJJZCB7bnVtYmVyfSBsb2dnZWQgaW4gdXNlcidzIHVzZXIgaWRcclxuICogIC0gcHJvZmlsZVBpYyB7c3RyaW5nfSBzcmMgdXJsIG9mIHVzZXIncyBwcm9maWxlIHBpY3R1cmVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdHNQYWdlKHByb3BzKSB7XHJcbiAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IFtdO1xyXG4gIC8vY3JlYXRlIFNlYXJjaFJlc3VsdCBmb3IgZWFjaCB1c2VyXHJcbiAgZm9yIChjb25zdCB1c2VyIG9mIHByb3BzLnVzZXJzKSB7XHJcbiAgICBzZWFyY2hSZXN1bHRzLnB1c2goXHJcbiAgICAgIDxTZWFyY2hSZXN1bHRcclxuICAgICAgICBrZXk9e3VzZXIuaWR9XHJcbiAgICAgICAgZGlzcGxheU5hbWU9e3VzZXIuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgcGFnZVVybD17YC91c2VyLyR7dXNlci5pZH1gfVxyXG4gICAgICAgIHByb2ZpbGVQaWM9e3VzZXIucHJvZmlsZVBpY31cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsLXBhZ2UtZmxleC1jb250YWluZXIgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgPFRvb2xiYXIgdXNlcklkPXtwcm9wcy51c2VySWR9IHByb2ZpbGVQaWM9e3Byb3BzLnByb2ZpbGVQaWN9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0cy1jb250YWluZXJcIj5cclxuICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHNcclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxwPlRoZXJlIGFyZSBubyByZXN1bHRzLi48L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHMtY29udGFpbmVyLW5hdi1idXR0b25zXCI+XHJcbiAgICAgICAgICB7cHJvcHMucGFnZSA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9e2Avc2VhcmNoP3F1ZXJ5PSR7cHJvcHMuc2VhcmNoUXVlcnl9JnBhZ2U9JHtwcm9wcy5wYWdlIC0gMX1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPlByZXY8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtwcm9wcy5oYXNOZXh0ICYmIChcclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPXtgL3NlYXJjaD9xdWVyeT0ke3Byb3BzLnNlYXJjaFF1ZXJ5fSZwYWdlPSR7cHJvcHMucGFnZSArIDF9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnRleHQucmVzLmxvY2FscykpLFxyXG4gIH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==