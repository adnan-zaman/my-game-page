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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/userPage.js");
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

/***/ "./components/Game.js":
/*!****************************!*\
  !*** ./components/Game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 *
 * A component representing a single game
 *
 * @param {object} props :
 *
 *  - data-index? {string}: index of game in the fave game list
 *
 *  - onAdd? {function}: callback for games in GameSearchBox to be added to favorite games list.
 *  Used in mobile view. Mandatory for Games in GameSearchBox.
 *
 *  - changePosition? {function(currPos: int, nextPos: int)}: callback for games in fave game list to change position.
 * Used in mobile view. Mandatory for Games in fave game list.
 */

function Game(props) {
  //I cast it to number so often maybe I should just save it hm
  var dataIndex = props["data-index"] && Number(props["data-index"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-container container rounded my-3 ",
    "data-index": props["data-index"],
    onDragStart: props.onDragStart,
    onDragOver: props.onDragOver,
    onDrop: props.onDrop,
    draggable: props.draggable
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "col-1 ".concat(props["data-index"] && "pos-".concat(dataIndex + 1))
  }, props["data-index"] && dataIndex + 1 + "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-img col-md-2 ".concat(props.isEditing ? "col-9" : "col-11")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.gameCoverUrl,
    alt: "Cover art for ".concat(props.gameName),
    height: 90,
    width: 90,
    className: "rounded d-inline-block m-auto"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "change-pos-buttons d-md-none ".concat(props.isEditing ? "col-2" : "d-none")
  }, props.isEditing && dataIndex > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "change-pos-up",
    onClick: function onClick() {
      return props.changePosition(dataIndex, dataIndex - 1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "bi-caret-up-fill"
  })), props.isEditing && !props.isLast && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "change-pos-down",
    onClick: function onClick() {
      return props.changePosition(dataIndex, dataIndex + 1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "bi-caret-down-fill"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-name d-inline-block ".concat(props.isEditing ? "col-md-6" : "col-md-9")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.gameName)), props.isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return props.onDelete(props.gameId);
    },
    className: "col-md-3 btn btn-danger"
  }, "Delete ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "bi-trash-fill mx-1"
  })), //add button should only appear on games in GameSearchBox
  //data-index prop is only given to games in the favorite game list
  //therefore if no data-index, its a GameSearchBox game
  !props["data-index"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.onAdd,
    className: "btn btn-success d-md-none w-100"
  }, "Add ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "bi-plus-circle-fill mx-1"
  }))));
}

/***/ }),

/***/ "./components/GameSearchBox.js":
/*!*************************************!*\
  !*** ./components/GameSearchBox.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameSearchBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./components/Game.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function GameSearchBox(props) {
  //search term in search bar
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      displayedSearchTerm = _useState2[0],
      setDisplayedSearchTerm = _useState2[1]; //the actual underlying search term regardless of whats typed
  //clicking next/prev will change pages for this value
  //clicking search button will change this value


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(displayedSearchTerm),
      _useState4 = _slicedToArray(_useState3, 2),
      searchTerm = _useState4[0],
      setSearchTerm = _useState4[1]; //page of search results


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      _useState6 = _slicedToArray(_useState5, 2),
      searchPage = _useState6[0],
      setSearchPage = _useState6[1]; //list of objects that will be retrieved from search api


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      searchResults = _useState8[0],
      setSearchResults = _useState8[1]; //whether or not search results are currently loading


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1]; //error message


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState12 = _slicedToArray(_useState11, 2),
      errorMessage = _useState12[0],
      setErrorMessage = _useState12[1]; //whether or not there is a next page of search results


  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState14 = _slicedToArray(_useState13, 2),
      hasNext = _useState14[0],
      setHasNext = _useState14[1]; //used to determine whether its first render or not


  var firstRender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);

  function startDragGame(e, game) {
    e.stopPropagation();
    e.dataTransfer.setData("application/json", JSON.stringify(game));
  } //dragover handler is needed to make element
  //draggable


  function dragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "move";
  }

  var displayedSearchResults = searchResults.map(function (game) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: game.id,
      gameId: game.id,
      gameName: game.name,
      gameCoverUrl: game.coverurl,
      draggable: true,
      onDragStart: function onDragStart(e) {
        return startDragGame(e, game);
      },
      onDragOver: dragOver,
      onAdd: function onAdd() {
        return props.onAdd(game);
      }
    });
  });
  /**
   * Updates displayed search term
   * @param {Event} e
   */

  function handleChange(e) {
    setDisplayedSearchTerm(e.target.value);
  }
  /**
   * Sets searchTerm to displayedSearchTerm
   * and fetches search results.
   *
   * @param {Event} e
   */


  function handleSearch(e) {
    e.preventDefault();
    if (displayedSearchTerm === "") return;
    setSearchTerm(displayedSearchTerm);
    setSearchPage(0);
    fetchAndPopulateSearchResults(displayedSearchTerm, 0);
  }
  /**
   * Changes page number for searchTerm
   * (not displayedSearchTerm) and fetches search
   * results.
   *
   * @param {number} pageNumber new page number
   */


  function changePage(pageNumber) {
    if (pageNumber < 0) return;
    setSearchPage(pageNumber);
    fetchAndPopulateSearchResults(searchTerm, pageNumber);
  }
  /**
   * Fetches a search from the API and populates page
   * with search results. This function needs to be called
   * with a search term and page manually instead of relying on
   * checking state as reading state immediately after setting it
   * will return stale values. So, we give it the fresh values manually.
   *
   * @param {string} term search term
   * @param {number} page search page number
   */


  function fetchAndPopulateSearchResults(_x, _x2) {
    return _fetchAndPopulateSearchResults.apply(this, arguments);
  }

  function _fetchAndPopulateSearchResults() {
    _fetchAndPopulateSearchResults = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(term, page) {
      var query, response, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setErrorMessage("");
              setLoading(true);
              _context.prev = 2;
              query = "/api/search/".concat(term, "/").concat(page);
              _context.next = 6;
              return fetch(query);

            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();

            case 9:
              data = _context.sent;

              if (response.ok) {
                setSearchResults(data.results);
                setHasNext(data.hasNext);
              } else {
                setErrorMessage(results.message);
              }

              setLoading(false);
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](2);
              setErrorMessage(_context.t0.message + "\n" + msg);
              setLoading(false);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 14]]);
    }));
    return _fetchAndPopulateSearchResults.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-search-box d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-results game-list order-2 order-md-1"
  }, errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, errorMessage), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading..."), displayedSearchResults), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button-bar order-1 order-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "game-search-bar",
    className: "d-none"
  }, "Name of Game"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "game-search-bar",
    value: displayedSearchTerm,
    onChange: handleChange,
    placeholder: "Name of Game..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "float-md-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return changePage(searchPage - 1);
    },
    className: "btn btn-secondary ".concat(searchPage > 0 ? "visible" : "invisible")
  }, "Prev"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "page-number",
    className: "d-none"
  }, "Page:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "page-number",
    className: searchPage >= 0 ? "visible" : "invisible",
    disabled: true,
    value: searchPage + 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return changePage(searchPage + 1);
    },
    className: "btn btn-secondary ".concat(searchPage >= 0 && hasNext ? "visible" : "invisible")
  }, "Next")))));
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/**
 *
 * @param {object} props expected props:
 * - userId {number} the logged in user's user id
 * - profilePic {string} src url for user's profile picture
 */

function Toolbar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showDropdown = _useState2[0],
      setShowDropdown = _useState2[1];

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
    className: "col-md-10 col-9",
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 col-3 pt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toolbar-options"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/user/".concat(props.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.profilePic,
    alt: "Your profile picture",
    className: "rounded-circle",
    height: "45",
    width: "45"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown d-inline-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setShowDropdown(!showDropdown);
    },
    className: "dropdown-button ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "bi bi-caret-down-fill"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-content ".concat(showDropdown ? "d-block" : "d-none")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/logout",
    className: "d-block"
  }, "Sign Out"))))));
}

/***/ }),

/***/ "./pages/userPage.js":
/*!***************************!*\
  !*** ./pages/userPage.js ***!
  \***************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Game */ "./components/Game.js");
/* harmony import */ var _components_GameSearchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GameSearchBox */ "./components/GameSearchBox.js");
/* harmony import */ var _components_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Toolbar */ "./components/Toolbar.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/**
 *
 * The page that is displayed when
 * viewing a user's profile
 *
 * @param {object} props
 */

function UserPage(props) {
  /* setting state */
  //the user's actual favorite games
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.games),
      _useState2 = _slicedToArray(_useState, 2),
      favoriteGames = _useState2[0],
      setFavoriteGames = _useState2[1]; //the user's favorite game as currently displayed. these may differ
  //from actual favorite games during editing


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(favoriteGames),
      _useState4 = _slicedToArray(_useState3, 2),
      displayedFavoriteGames = _useState4[0],
      setDisplayedFavoriteGames = _useState4[1]; //whether or not user is editing favorite games


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isEditing = _useState6[0],
      setIsEditing = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      errorMessage = _useState8[0],
      setErrorMessage = _useState8[1];
  /**
   * Called when a Game is dragged. Adds
   * the Game's data-index attribute to
   * DragEvent.dataTransfer to be used by
   * dropGame() later on
   *
   * @param {DragEvent} e
   */


  function startDragGame(e) {
    e.stopPropagation();
    e.dataTransfer.setData("text/plain", e.currentTarget.dataset.index);
  } //dragover handler is needed to make element
  //draggable


  function dragOver(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }
  /**
   * The dragged game will be swapped with the game
   * it's dropped on.
   *
   * @param {DragEvent} e
   */


  function dropGameOnGame(e) {
    e.stopPropagation();
    e.preventDefault();

    var newFaveGames = _toConsumableArray(displayedFavoriteGames);

    var newGame = e.dataTransfer.getData("application/json"); //index of game that was dropped on

    var dropTarget = Number(e.currentTarget.dataset.index); //dataTransfer will contain a js object if the game being dragged
    //is from search results, meaning a new game is being added
    //to favorite games

    if (newGame) {
      var newGameAsObject = JSON.parse(newGame);
      if (gameAlreadyExists(newGameAsObject)) return; //we replace elements as we go, eventually we an element to newFaveGames[newFaveGames.length]
      //this increases the length and the loop goes on forever
      //so we keep the length of the list before we start

      var length = newFaveGames.length; //game to be added in

      var holder = newGameAsObject;

      for (var i = 0; i <= length; i++) {
        // if (newFaveGames[i] && newFaveGames[i].id === newGameAsObject.id)
        //   return;
        //start swapping from dropTarget onwards
        if (i >= dropTarget) {
          //put holder into the list, take what was there and put into holder
          var temp = newFaveGames[i];
          newFaveGames[i] = holder;
          holder = temp;
        }
      }
    } //if there is no js object, then the game being dragged is an already
    //existing game so we just swap places
    else {
        //the game that was being dragged
        var draggedGame = Number(e.dataTransfer.getData("text/plain"));
        var _temp = newFaveGames[dropTarget];
        newFaveGames[dropTarget] = newFaveGames[draggedGame];
        newFaveGames[draggedGame] = _temp;
      }

    setDisplayedFavoriteGames(newFaveGames);
  }
  /**
   * The dragged game will be added to the
   * end of the list
   *
   * @param {DragEvent} e
   */


  function dropGameOnContainer(e) {
    e.preventDefault();
    e.stopPropagation();

    var newFaveGames = _toConsumableArray(displayedFavoriteGames);

    var newGame = e.dataTransfer.getData("application/json"); //dataTransfer will contain a js object if the game being dragged
    //is from search results, meaning a new game is being added
    //to favorite games

    if (newGame) {
      var newGameAsObject = JSON.parse(newGame);
      if (gameAlreadyExists(newGameAsObject)) return;
      newFaveGames.push(newGameAsObject);
    } //if there is no js object, then the game being dragged is an already
    //existing game. dragged game is added to the end and rest are shifted up
    else {
        var newPos = Number(e.dataTransfer.getData("text/plain"));
        var draggedGame = newFaveGames[newPos]; //shift everything towards the front

        for (; newPos < newFaveGames.length - 1; newPos++) {
          newFaveGames[newPos] = newFaveGames[newPos + 1];
        } //add draggedGame back to the end


        newFaveGames[newPos] = draggedGame;
      }

    setDisplayedFavoriteGames(newFaveGames);
  }
  /**
   * Deletes a game from displayedFavoriteGames.
   *
   * @param {number} gameId the id of game to be deleted
   */


  function deleteGame(gameId) {
    setDisplayedFavoriteGames(displayedFavoriteGames.filter(function (game) {
      return game.id !== gameId;
    }));
  }
  /**
   * Called when editing is cancelled. Sets displayed favorite games
   * to actual favorite games.
   */


  function rollbackChanges() {
    setErrorMessage("");
    setDisplayedFavoriteGames(favoriteGames);
    setIsEditing(false);
  }

  function saveChanges() {
    return _saveChanges.apply(this, arguments);
  }
  /**
   * Adds a game to the end of displayedFavoriteGames.
   *
   * @param {object} game game object
   */


  function _saveChanges() {
    _saveChanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var faveGameIds, response, error;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setErrorMessage("");
              faveGameIds = displayedFavoriteGames.map(function (game) {
                return game.id;
              });
              _context.next = 4;
              return fetch("/api/favorites/".concat(props.id), {
                method: "PUT",
                credentials: "same-origin",
                body: JSON.stringify(faveGameIds),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 4:
              response = _context.sent;

              if (!response.ok) {
                _context.next = 10;
                break;
              }

              setIsEditing(false);
              setFavoriteGames(displayedFavoriteGames);
              _context.next = 14;
              break;

            case 10:
              _context.next = 12;
              return response.json();

            case 12:
              error = _context.sent;
              setErrorMessage(error.message);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _saveChanges.apply(this, arguments);
  }

  function onAdd(game) {
    if (gameAlreadyExists(game)) return;
    setDisplayedFavoriteGames([].concat(_toConsumableArray(displayedFavoriteGames), [game]));
  }
  /**
   * Called by Games in mobile view to change positions in the fave game list.
   *
   * @param {number} currIndex the index of the game that is changing position
   * @param {number} nextIndex the index the game is trying to move to
   */


  function changePosition(currIndex, nextIndex) {
    var newFaveGames = _toConsumableArray(displayedFavoriteGames);

    var temp = newFaveGames[nextIndex];
    newFaveGames[nextIndex] = newFaveGames[currIndex];
    newFaveGames[currIndex] = temp;
    setDisplayedFavoriteGames(newFaveGames);
  }
  /**
   * Checks if a game is already in displayedFavoriteGames
   *
   * @param {object} listOfGames game json object
   * @returns true if game already exists, false otherwise
   */


  function gameAlreadyExists(game) {
    var _iterator = _createForOfIteratorHelper(displayedFavoriteGames),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var g = _step.value;
        console.log("".concat(g.id, " ").concat(game.id));
        if (g.id === game.id) return true;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return false;
  } //get a list of Game components corresponding to favorite games
  //each is given a data-index attribute that corresponds to
  //what position in the list they are. this will be used during
  //editing favorite games.


  var favoriteGamesList = displayedFavoriteGames.map(function (game, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Game__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: game.id,
      gameId: game.id,
      gameName: game.name,
      gameCoverUrl: game.coverurl,
      isEditing: isEditing,
      "data-index": "" + index,
      draggable: isEditing + "",
      onDragStart: isEditing ? startDragGame : undefined,
      onDragOver: isEditing ? dragOver : undefined,
      onDrop: isEditing ? dropGameOnGame : undefined,
      onDelete: deleteGame,
      changePosition: changePosition,
      isLast: index === displayedFavoriteGames.length - 1
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, //only display Toolbar if user is logged in
  props.toolbarId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userId: props.toolbarId,
    profilePic: props.userProfilePic
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-page-header mb-3 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.profilePic,
    alt: "".concat(props.displayName, "'s profile picture"),
    className: "page-profile-pic rounded-circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "display-1 d-inline"
  }, props.displayName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-page-main ".concat(isEditing && "d-md-flex rounded-lg")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-page-games rounded-lg d-flex flex-column ".concat(isEditing ? "is-editing" : "m-auto")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "favorite-games-list game-list"
  }, favoriteGamesList, isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "drop-space",
    className: "my-3 mx-2",
    onDrop: dropGameOnContainer,
    onDragOver: dragOver
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button-bar"
  }, props.id && (!isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setIsEditing(true);
    },
    className: "btn btn-secondary"
  }, "Edit") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: rollbackChanges,
    className: "btn btn-secondary"
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: saveChanges,
    className: "btn btn-primary"
  }, "Save"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, errorMessage))), isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GameSearchBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onAdd: onAdd
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybUZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYW1lU2VhcmNoQm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZHJlbiIsImNoaWxkIiwidmFsdWUiLCJmaWVsZFZhbHVlcyIsInNldEZpZWxkVmFsdWVzIiwiZmllbGRWYWxpZGF0b3JzIiwidXNlUmVmIiwiaW5kZXgiLCJjbG9uZUVsZW1lbnQiLCJhZGRWYWxpZGF0b3IiLCJ2YWxpZGF0b3IiLCJjdXJyZW50IiwicHVzaCIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwicGFyZW50SWQiLCJpZCIsImlubGluZSIsInN1Ym1pdEJ0biIsImJ0bkNsYXNzIiwic3VibWl0QnRuVGV4dCIsImlubmVyRm9ybSIsImUiLCJuZXdGaWVsZFZhbHVlcyIsImkiLCJ0YXJnZXQiLCJ2YWxpZGF0ZUFsbEZpZWxkcyIsImVycm9ySW5mbyIsIm9uU3VibWl0IiwiYWN0aW9uIiwibWV0aG9kIiwiY2xhc3NOYW1lIiwiRm9ybUZpZWxkVGVtcGxhdGUiLCJ0b0FycmF5IiwiY29udHJvbCIsImdyb3VwQ2xhc3MiLCJUZXh0RmllbGQiLCJpbnB1dElkIiwibGFiZWwiLCJtaW5MZW5ndGgiLCJtaW4iLCJtYXhMZW5ndGgiLCJtYXgiLCJ2YWxpZGF0b3JBZGRlZCIsImlucHV0RmllbGQiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0ZSIsImVsZW1lbnQiLCJ2YWxpZGl0eVN0YXRlIiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJtZXNzYWdlIiwidG9vU2hvcnQiLCJ0b29Mb25nIiwibmFtZSIsInJlcXVpcmVkIiwiRW1haWxGaWVsZCIsImxhYmVsTmFtZSIsInR5cGVNaXNtYXRjaCIsIlBhc3N3b3JkRmllbGQiLCJIaWRkZW5GaWVsZCIsIkdhbWUiLCJkYXRhSW5kZXgiLCJOdW1iZXIiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJkcmFnZ2FibGUiLCJpc0VkaXRpbmciLCJnYW1lQ292ZXJVcmwiLCJnYW1lTmFtZSIsImNoYW5nZVBvc2l0aW9uIiwiaXNMYXN0Iiwib25EZWxldGUiLCJnYW1lSWQiLCJvbkFkZCIsIkdhbWVTZWFyY2hCb3giLCJkaXNwbGF5ZWRTZWFyY2hUZXJtIiwic2V0RGlzcGxheWVkU2VhcmNoVGVybSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VhcmNoUGFnZSIsInNldFNlYXJjaFBhZ2UiLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiaGFzTmV4dCIsInNldEhhc05leHQiLCJmaXJzdFJlbmRlciIsInN0YXJ0RHJhZ0dhbWUiLCJnYW1lIiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkcmFnT3ZlciIsInByZXZlbnREZWZhdWx0IiwiZHJvcEVmZmVjdCIsImRpc3BsYXllZFNlYXJjaFJlc3VsdHMiLCJjb3ZlcnVybCIsImhhbmRsZVNlYXJjaCIsImZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzIiwiY2hhbmdlUGFnZSIsInBhZ2VOdW1iZXIiLCJ0ZXJtIiwicGFnZSIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJyZXN1bHRzIiwibXNnIiwiVGVzdCIsIm9uQ2xpY2siLCJUb29sYmFyIiwic2hvd0Ryb3Bkb3duIiwic2V0U2hvd0Ryb3Bkb3duIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInVzZXJJZCIsInByb2ZpbGVQaWMiLCJVc2VyUGFnZSIsImdhbWVzIiwiZmF2b3JpdGVHYW1lcyIsInNldEZhdm9yaXRlR2FtZXMiLCJkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzIiwic2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyIsInNldElzRWRpdGluZyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZHJvcEdhbWVPbkdhbWUiLCJuZXdGYXZlR2FtZXMiLCJuZXdHYW1lIiwiZ2V0RGF0YSIsImRyb3BUYXJnZXQiLCJuZXdHYW1lQXNPYmplY3QiLCJwYXJzZSIsImdhbWVBbHJlYWR5RXhpc3RzIiwibGVuZ3RoIiwiaG9sZGVyIiwidGVtcCIsImRyYWdnZWRHYW1lIiwiZHJvcEdhbWVPbkNvbnRhaW5lciIsIm5ld1BvcyIsImRlbGV0ZUdhbWUiLCJmaWx0ZXIiLCJyb2xsYmFja0NoYW5nZXMiLCJzYXZlQ2hhbmdlcyIsImZhdmVHYW1lSWRzIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiaGVhZGVycyIsImVycm9yIiwiY3VyckluZGV4IiwibmV4dEluZGV4IiwiZyIsImZhdm9yaXRlR2FtZXNMaXN0IiwidG9vbGJhcklkIiwidXNlclByb2ZpbGVQaWMiLCJkaXNwbGF5TmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJsb2NhbHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUhrQyxrQkFJSUMsc0RBQVEsQ0FDNUNDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsR0FBZixDQUFtQkosS0FBSyxDQUFDSyxRQUF6QixFQUFtQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDTixLQUFOLENBQVlPLEtBQXZCO0FBQUEsR0FBbkMsQ0FENEMsQ0FKWjtBQUFBO0FBQUEsTUFJM0JDLFdBSjJCO0FBQUEsTUFJZEMsY0FKYyxrQkFRbEM7OztBQUNBLE1BQU1DLGVBQWUsR0FBR0Msb0RBQU0sQ0FBQyxFQUFELENBQTlCLENBVGtDLENBV2xDOztBQUNBLE1BQU1OLFFBQVEsR0FBR0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxHQUFmLENBQW1CSixLQUFLLENBQUNLLFFBQXpCLEVBQW1DLFVBQUNDLEtBQUQsRUFBUU0sS0FBUjtBQUFBLHdCQUNsRFYsNENBQUssQ0FBQ1csWUFBTixDQUFtQlAsS0FBbkIsRUFBMEI7QUFDeEJDLFdBQUssRUFBRUMsV0FBVyxDQUFDSSxLQUFELENBRE07QUFFeEJFLGtCQUFZLEVBQUUsc0JBQUNDLFNBQUQ7QUFBQSxlQUFlTCxlQUFlLENBQUNNLE9BQWhCLENBQXdCQyxJQUF4QixDQUE2QkYsU0FBN0IsQ0FBZjtBQUFBLE9BRlU7QUFHeEJHLGNBQVEsRUFBRUMsWUFIYztBQUl4QkMsY0FBUSxFQUFFcEIsS0FBSyxDQUFDcUIsRUFKUTtBQUlKO0FBQ3BCVCxXQUFLLEVBQUxBLEtBTHdCO0FBTXhCVSxZQUFNLEVBQUV0QixLQUFLLENBQUNzQjtBQU5VLEtBQTFCLENBRGtEO0FBQUEsR0FBbkMsQ0FBakI7QUFXQSxNQUFNQyxTQUFTLGdCQUNiO0FBQVEsYUFBUyw0QkFBcUJ2QixLQUFLLENBQUN3QixRQUEzQixDQUFqQjtBQUF3RCxRQUFJLEVBQUM7QUFBN0QsS0FDR3hCLEtBQUssQ0FBQ3lCLGFBQU4sSUFBdUIsUUFEMUIsQ0FERixDQXZCa0MsQ0E2QmxDO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxTQUFTLEdBQUcxQixLQUFLLENBQUNzQixNQUFOLGdCQUNoQjtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dqQixRQURILEVBRUdrQixTQUZILENBRGdCLGdCQU1oQix3SEFDR2xCLFFBREgsRUFFR2tCLFNBRkgsQ0FORjtBQVlBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxXQUFTSixZQUFULENBQXNCUSxDQUF0QixFQUF5QmYsS0FBekIsRUFBZ0M7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsUUFBTWdCLGNBQWMsR0FBR3BCLFdBQVcsQ0FBQ0osR0FBWixDQUFnQixVQUFDRyxLQUFELEVBQVFzQixDQUFSO0FBQUEsYUFDckNBLENBQUMsS0FBS2pCLEtBQU4sR0FBY2UsQ0FBQyxDQUFDRyxNQUFGLENBQVN2QixLQUF2QixHQUErQkEsS0FETTtBQUFBLEtBQWhCLENBQXZCO0FBSUFFLGtCQUFjLENBQUNtQixjQUFELENBQWQ7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU0csaUJBQVQsQ0FBMkJKLENBQTNCLEVBQThCO0FBQUEsK0NBQ0pqQixlQUFlLENBQUNNLE9BRFo7QUFBQTs7QUFBQTtBQUM1QiwwREFBaUQ7QUFBQSxZQUF0Q0QsU0FBc0M7QUFDL0MsWUFBTWlCLFNBQVMsR0FBR2pCLFNBQVMsRUFBM0I7QUFDQSxZQUFJaUIsU0FBSixFQUFlLE9BQU9oQyxLQUFLLENBQUNpQyxRQUFOLENBQWVOLENBQWYsRUFBa0JLLFNBQWxCLENBQVA7QUFDaEI7QUFKMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLNUJoQyxTQUFLLENBQUNpQyxRQUFOLENBQWVOLENBQWYsRUFBa0IsSUFBbEI7QUFDRDs7QUFDRCxzQkFDRSxxSUFDRTtBQUNFLE1BQUUsRUFBRTNCLEtBQUssQ0FBQ3FCLEVBRFo7QUFFRSxZQUFRLEVBQUVVLGlCQUZaO0FBR0UsY0FBVSxFQUFFLElBSGQ7QUFJRSxVQUFNLEVBQUUvQixLQUFLLENBQUNrQyxNQUpoQjtBQUtFLFVBQU0sRUFBRWxDLEtBQUssQ0FBQ21DLE1BTGhCO0FBTUUsYUFBUyxFQUFFbkMsS0FBSyxDQUFDb0M7QUFObkIsS0FRR1YsU0FSSCxDQURGLENBREY7QUFjRCxDOzs7Ozs7Ozs7Ozs7QUNySEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU1csaUJBQVQsQ0FBMkJyQyxLQUEzQixFQUFrQztBQUNoQyxNQUFNSyxRQUFRLEdBQUdILDRDQUFLLENBQUNDLFFBQU4sQ0FBZW1DLE9BQWYsQ0FBdUJ0QyxLQUFLLENBQUNLLFFBQTdCLENBQWpCLENBRGdDLENBRWhDOztBQUNBLE1BQU1rQyxPQUFPLGdCQUFHckMsNENBQUssQ0FBQ1csWUFBTixDQUFtQlIsUUFBUSxDQUFDLENBQUQsQ0FBM0IsRUFBZ0M7QUFDOUMrQixhQUFTLEVBQ1AsQ0FBQy9CLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWStCLFNBQVosSUFBeUIsRUFBMUIsNEJBQ2lCcEMsS0FBSyxDQUFDc0IsTUFBTixHQUFlLE9BQWYsR0FBeUIsTUFEMUM7QUFGNEMsR0FBaEMsQ0FBaEI7QUFNQSxzQkFDRTtBQUNFLGFBQVMsWUFBS3RCLEtBQUssQ0FBQ3NCLE1BQU4sR0FBZSxFQUFmLEdBQW9CLGdCQUF6QixjQUE2Q3RCLEtBQUssQ0FBQ3dDLFVBQW5EO0FBRFgsS0FHR0QsT0FISCxDQURGO0FBT0QsQyxDQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRSxTQUFULENBQW1CekMsS0FBbkIsRUFBMEI7QUFDL0IsTUFBTTBDLE9BQU8sd0JBQWlCMUMsS0FBSyxDQUFDMkMsS0FBdkIsY0FBZ0MzQyxLQUFLLENBQUNvQixRQUF0QyxDQUFiO0FBQ0EsTUFBTXdCLFNBQVMsR0FBRzVDLEtBQUssQ0FBQzZDLEdBQXhCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHOUMsS0FBSyxDQUFDK0MsR0FBeEI7QUFDQSxNQUFNQyxjQUFjLEdBQUdyQyxvREFBTSxDQUFDLEtBQUQsQ0FBN0IsQ0FKK0IsQ0FLL0I7O0FBQ0EsTUFBTXNDLFVBQVUsR0FBR3RDLG9EQUFNLENBQUN1QyxTQUFELENBQXpCLENBTitCLENBUS9COztBQUNBLE1BQUksQ0FBQ0YsY0FBYyxDQUFDaEMsT0FBcEIsRUFBNkI7QUFDM0JoQixTQUFLLENBQUNjLFlBQU4sQ0FBbUJxQyxRQUFuQjtBQUNBSCxrQkFBYyxDQUFDaEMsT0FBZixHQUF5QixJQUF6QjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTbUMsUUFBVCxHQUFvQjtBQUNsQixRQUFNQyxPQUFPLEdBQUdILFVBQVUsQ0FBQ2pDLE9BQTNCO0FBQ0EsUUFBTXFDLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxRQUE5QjtBQUVBLFFBQUlELGFBQWEsQ0FBQ0UsWUFBbEIsRUFDRSxPQUFPO0FBQUVDLGFBQU8sWUFBS3hELEtBQUssQ0FBQzJDLEtBQVgsa0JBQVQ7QUFBMENTLGFBQU8sRUFBUEE7QUFBMUMsS0FBUDtBQUNGLFFBQUlDLGFBQWEsQ0FBQ0ksUUFBbEIsRUFDRSxPQUFPO0FBQ0xELGFBQU8sWUFBS3hELEtBQUssQ0FBQzJDLEtBQVgsK0JBQXFDQyxTQUFyQyxzQkFERjtBQUVMUSxhQUFPLEVBQVBBO0FBRkssS0FBUDtBQUlGLFFBQUlDLGFBQWEsQ0FBQ0ssT0FBbEIsRUFDRSxPQUFPO0FBQ0xGLGFBQU8sWUFBS3hELEtBQUssQ0FBQzJDLEtBQVgsNENBQWtERyxTQUFsRCxzQkFERjtBQUVMTSxhQUFPLEVBQVBBO0FBRkssS0FBUDtBQUlGLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUNFLDJEQUFDLGlCQUFEO0FBQW1CLGNBQVUsRUFBRXBELEtBQUssQ0FBQ3dDLFVBQXJDO0FBQWlELFVBQU0sRUFBRXhDLEtBQUssQ0FBQ3NCO0FBQS9ELGtCQUNFO0FBQ0UsTUFBRSxFQUFFb0IsT0FETjtBQUVFLFFBQUksRUFBRTFDLEtBQUssQ0FBQzJELElBRmQ7QUFHRSxTQUFLLEVBQUUzRCxLQUFLLENBQUNPLEtBQU4sSUFBZSxFQUh4QjtBQUlFLFlBQVEsRUFBRSxrQkFBQ29CLENBQUQ7QUFBQSxhQUFPM0IsS0FBSyxDQUFDa0IsUUFBTixDQUFlUyxDQUFmLEVBQWtCM0IsS0FBSyxDQUFDWSxLQUF4QixDQUFQO0FBQUEsS0FKWjtBQUtFLFlBQVEsRUFBRVosS0FBSyxDQUFDNEQsUUFMbEI7QUFNRSxhQUFTLEVBQUVoQixTQU5iO0FBT0UsYUFBUyxFQUFFRSxTQVBiO0FBUUUsZUFBVyxFQUFFOUMsS0FBSyxDQUFDMkMsS0FSckI7QUFTRSxPQUFHLEVBQUVNO0FBVFAsSUFERixDQURGO0FBZUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTWSxVQUFULENBQW9CN0QsS0FBcEIsRUFBMkI7QUFDaEMsTUFBTThELFNBQVMsR0FBRzlELEtBQUssQ0FBQzJDLEtBQU4sSUFBZSxPQUFqQztBQUNBLE1BQU1ELE9BQU8sd0JBQWlCb0IsU0FBakIsY0FBOEI5RCxLQUFLLENBQUNvQixRQUFwQyxDQUFiO0FBQ0EsTUFBTXdCLFNBQVMsR0FBRzVDLEtBQUssQ0FBQzZDLEdBQXhCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHOUMsS0FBSyxDQUFDK0MsR0FBTixJQUFhLEVBQS9CO0FBRUEsTUFBTUMsY0FBYyxHQUFHckMsb0RBQU0sQ0FBQyxLQUFELENBQTdCLENBTmdDLENBT2hDOztBQUNBLE1BQU1zQyxVQUFVLEdBQUd0QyxvREFBTSxDQUFDdUMsU0FBRCxDQUF6QixDQVJnQyxDQVVoQzs7QUFDQSxNQUFJLENBQUNGLGNBQWMsQ0FBQ2hDLE9BQXBCLEVBQTZCO0FBQzNCaEIsU0FBSyxDQUFDYyxZQUFOLENBQW1CcUMsUUFBbkI7QUFDQUgsa0JBQWMsQ0FBQ2hDLE9BQWYsR0FBeUIsSUFBekI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTbUMsUUFBVCxHQUFvQjtBQUNsQixRQUFNQyxPQUFPLEdBQUdILFVBQVUsQ0FBQ2pDLE9BQTNCO0FBQ0EsUUFBTXFDLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxRQUE5QjtBQUVBLFFBQUlELGFBQWEsQ0FBQ0UsWUFBbEIsRUFDRSxPQUFPO0FBQUVDLGFBQU8sWUFBS00sU0FBTCxrQkFBVDtBQUF3Q1YsYUFBTyxFQUFQQTtBQUF4QyxLQUFQO0FBQ0YsUUFBSUMsYUFBYSxDQUFDVSxZQUFsQixFQUNFLE9BQU87QUFBRVAsYUFBTyxZQUFLTSxTQUFMLHVCQUFUO0FBQTZDVixhQUFPLEVBQVBBO0FBQTdDLEtBQVA7QUFDRixRQUFJQyxhQUFhLENBQUNJLFFBQWxCLEVBQ0UsT0FBTztBQUNMRCxhQUFPLFlBQUtNLFNBQUwsK0JBQW1DbEIsU0FBbkMsc0JBREY7QUFFTFEsYUFBTyxFQUFQQTtBQUZLLEtBQVA7QUFJRixRQUFJQyxhQUFhLENBQUNLLE9BQWxCLEVBQ0UsT0FBTztBQUNMRixhQUFPLFlBQUtNLFNBQUwsNENBQWdEaEIsU0FBaEQsc0JBREY7QUFFTE0sYUFBTyxFQUFQQTtBQUZLLEtBQVA7QUFJRixXQUFPLElBQVA7QUFDRDs7QUFFRCxzQkFDRSwyREFBQyxpQkFBRDtBQUFtQixjQUFVLEVBQUVwRCxLQUFLLENBQUN3QyxVQUFyQztBQUFpRCxVQUFNLEVBQUV4QyxLQUFLLENBQUNzQjtBQUEvRCxrQkFDRTtBQUNFLE1BQUUsRUFBRW9CLE9BRE47QUFFRSxRQUFJLEVBQUUxQyxLQUFLLENBQUMyRCxJQUZkO0FBR0UsU0FBSyxFQUFFM0QsS0FBSyxDQUFDTyxLQUhmO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxZQUFRLEVBQUUsa0JBQUNvQixDQUFEO0FBQUEsYUFBTzNCLEtBQUssQ0FBQ2tCLFFBQU4sQ0FBZVMsQ0FBZixFQUFrQjNCLEtBQUssQ0FBQ1ksS0FBeEIsQ0FBUDtBQUFBLEtBTFo7QUFNRSxZQUFRLEVBQUVaLEtBQUssQ0FBQzRELFFBTmxCO0FBT0UsYUFBUyxFQUFFaEIsU0FQYjtBQVFFLGFBQVMsRUFBRUUsU0FSYjtBQVNFLGVBQVcsRUFBRWdCLFNBVGY7QUFVRSxPQUFHLEVBQUViO0FBVlAsSUFERixDQURGO0FBZ0JEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTZSxhQUFULENBQXVCaEUsS0FBdkIsRUFBOEI7QUFDbkMsTUFBTThELFNBQVMsR0FBRzlELEtBQUssQ0FBQzJDLEtBQU4sSUFBZSxVQUFqQztBQUNBLE1BQU1ELE9BQU8sd0JBQWlCb0IsU0FBakIsY0FBOEI5RCxLQUFLLENBQUNvQixRQUFwQyxDQUFiO0FBQ0EsTUFBTXdCLFNBQVMsR0FBRzVDLEtBQUssQ0FBQzZDLEdBQXhCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHOUMsS0FBSyxDQUFDK0MsR0FBTixJQUFhLEVBQS9CO0FBRUEsTUFBTUMsY0FBYyxHQUFHckMsb0RBQU0sQ0FBQyxLQUFELENBQTdCLENBTm1DLENBT25DOztBQUNBLE1BQU1zQyxVQUFVLEdBQUd0QyxvREFBTSxDQUFDdUMsU0FBRCxDQUF6QixDQVJtQyxDQVVuQzs7QUFDQSxNQUFJLENBQUNGLGNBQWMsQ0FBQ2hDLE9BQXBCLEVBQTZCO0FBQzNCaEIsU0FBSyxDQUFDYyxZQUFOLENBQW1CcUMsUUFBbkI7QUFDQUgsa0JBQWMsQ0FBQ2hDLE9BQWYsR0FBeUIsSUFBekI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsV0FBU21DLFFBQVQsR0FBb0I7QUFDbEIsUUFBTUMsT0FBTyxHQUFHSCxVQUFVLENBQUNqQyxPQUEzQjtBQUNBLFFBQU1xQyxhQUFhLEdBQUdELE9BQU8sQ0FBQ0UsUUFBOUI7QUFFQSxRQUFJRCxhQUFhLENBQUNFLFlBQWxCLEVBQ0UsT0FBTztBQUFFQyxhQUFPLFlBQUtNLFNBQUwsa0JBQVQ7QUFBd0NWLGFBQU8sRUFBUEE7QUFBeEMsS0FBUDtBQUNGLFFBQUlDLGFBQWEsQ0FBQ0ksUUFBbEIsRUFDRSxPQUFPO0FBQ0xELGFBQU8sWUFBS00sU0FBTCwrQkFBbUNsQixTQUFuQyxzQkFERjtBQUVMUSxhQUFPLEVBQVBBO0FBRkssS0FBUDtBQUlGLFFBQUlDLGFBQWEsQ0FBQ0ssT0FBbEIsRUFDRSxPQUFPO0FBQ0xGLGFBQU8sWUFBS00sU0FBTCw0Q0FBZ0RoQixTQUFoRCxzQkFERjtBQUVMTSxhQUFPLEVBQVBBO0FBRkssS0FBUDtBQUlGLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUNFLDJEQUFDLGlCQUFEO0FBQW1CLGNBQVUsRUFBRXBELEtBQUssQ0FBQ3dDLFVBQXJDO0FBQWlELFVBQU0sRUFBRXhDLEtBQUssQ0FBQ3NCO0FBQS9ELGtCQUNFO0FBQ0UsTUFBRSxFQUFFb0IsT0FETjtBQUVFLFFBQUksRUFBRTFDLEtBQUssQ0FBQzJELElBRmQ7QUFHRSxTQUFLLEVBQUUzRCxLQUFLLENBQUNPLEtBQU4sSUFBZSxFQUh4QjtBQUlFLFFBQUksRUFBQyxVQUpQO0FBS0UsWUFBUSxFQUFFLGtCQUFDb0IsQ0FBRDtBQUFBLGFBQU8zQixLQUFLLENBQUNrQixRQUFOLENBQWVTLENBQWYsRUFBa0IzQixLQUFLLENBQUNZLEtBQXhCLENBQVA7QUFBQSxLQUxaO0FBTUUsWUFBUSxFQUFFLElBTlo7QUFPRSxhQUFTLEVBQUVnQyxTQVBiO0FBUUUsYUFBUyxFQUFFRSxTQVJiO0FBU0UsZUFBVyxFQUFFZ0IsU0FUZjtBQVVFLE9BQUcsRUFBRWI7QUFWUCxJQURGLENBREY7QUFnQkQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNnQixXQUFULENBQXFCakUsS0FBckIsRUFBNEI7QUFDakMsTUFBTTBDLE9BQU8sd0JBQWlCMUMsS0FBSyxDQUFDMkMsS0FBdkIsY0FBZ0MzQyxLQUFLLENBQUNvQixRQUF0QyxDQUFiO0FBRUEsTUFBTTRCLGNBQWMsR0FBR3JDLG9EQUFNLENBQUMsS0FBRCxDQUE3QixDQUhpQyxDQUlqQzs7QUFDQSxNQUFNc0MsVUFBVSxHQUFHdEMsb0RBQU0sQ0FBQ3VDLFNBQUQsQ0FBekIsQ0FMaUMsQ0FPakM7O0FBQ0EsTUFBSSxDQUFDRixjQUFjLENBQUNoQyxPQUFwQixFQUE2QjtBQUMzQmhCLFNBQUssQ0FBQ2MsWUFBTixDQUFtQnFDLFFBQW5CO0FBQ0FILGtCQUFjLENBQUNoQyxPQUFmLEdBQXlCLElBQXpCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFLFdBQVNtQyxRQUFULEdBQW9CO0FBQ2xCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsc0JBQ0UsMkRBQUMsaUJBQUQ7QUFBbUIsY0FBVSxFQUFFbkQsS0FBSyxDQUFDd0MsVUFBckM7QUFBaUQsVUFBTSxFQUFFeEMsS0FBSyxDQUFDc0I7QUFBL0Qsa0JBQ0U7QUFDRSxNQUFFLEVBQUVvQixPQUROO0FBRUUsUUFBSSxFQUFFMUMsS0FBSyxDQUFDMkQsSUFGZDtBQUdFLFNBQUssRUFBRTNELEtBQUssQ0FBQ08sS0FIZjtBQUlFLFVBQU0sRUFBRSxJQUpWO0FBS0UsWUFBUSxFQUFFLElBTFo7QUFNRSxPQUFHLEVBQUUwQztBQU5QLElBREYsQ0FERjtBQVlELEM7Ozs7Ozs7Ozs7OztBQ3pSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTaUIsSUFBVCxDQUFjbEUsS0FBZCxFQUFxQjtBQUNsQztBQUNBLE1BQU1tRSxTQUFTLEdBQUduRSxLQUFLLENBQUMsWUFBRCxDQUFMLElBQXVCb0UsTUFBTSxDQUFDcEUsS0FBSyxDQUFDLFlBQUQsQ0FBTixDQUEvQztBQUNBLHNCQUNFO0FBQ0UsYUFBUyxFQUFDLHdDQURaO0FBRUUsa0JBQVlBLEtBQUssQ0FBQyxZQUFELENBRm5CO0FBR0UsZUFBVyxFQUFFQSxLQUFLLENBQUNxRSxXQUhyQjtBQUlFLGNBQVUsRUFBRXJFLEtBQUssQ0FBQ3NFLFVBSnBCO0FBS0UsVUFBTSxFQUFFdEUsS0FBSyxDQUFDdUUsTUFMaEI7QUFNRSxhQUFTLEVBQUV2RSxLQUFLLENBQUN3RTtBQU5uQixrQkFRRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUcsYUFBUyxrQkFBV3hFLEtBQUssQ0FBQyxZQUFELENBQUwsa0JBQThCbUUsU0FBUyxHQUFHLENBQTFDLENBQVg7QUFBWixLQUNHbkUsS0FBSyxDQUFDLFlBQUQsQ0FBTCxJQUF1Qm1FLFNBQVMsR0FBRyxDQUFaLEdBQWdCLEdBRDFDLENBREYsZUFJRTtBQUNFLGFBQVMsOEJBQ1BuRSxLQUFLLENBQUN5RSxTQUFOLEdBQWtCLE9BQWxCLEdBQTRCLFFBRHJCO0FBRFgsa0JBS0U7QUFDRSxPQUFHLEVBQUV6RSxLQUFLLENBQUMwRSxZQURiO0FBRUUsT0FBRywwQkFBbUIxRSxLQUFLLENBQUMyRSxRQUF6QixDQUZMO0FBR0UsVUFBTSxFQUFFLEVBSFY7QUFJRSxTQUFLLEVBQUUsRUFKVDtBQUtFLGFBQVMsRUFBQztBQUxaLElBTEYsQ0FKRixlQWlCRTtBQUNFLGFBQVMseUNBQ1AzRSxLQUFLLENBQUN5RSxTQUFOLEdBQWtCLE9BQWxCLEdBQTRCLFFBRHJCO0FBRFgsS0FLR3pFLEtBQUssQ0FBQ3lFLFNBQU4sSUFBbUJOLFNBQVMsR0FBRyxDQUEvQixpQkFDQztBQUNFLGFBQVMsRUFBQyxlQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTW5FLEtBQUssQ0FBQzRFLGNBQU4sQ0FBcUJULFNBQXJCLEVBQWdDQSxTQUFTLEdBQUcsQ0FBNUMsQ0FBTjtBQUFBO0FBRlgsa0JBSUU7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUpGLENBTkosRUFhR25FLEtBQUssQ0FBQ3lFLFNBQU4sSUFBbUIsQ0FBQ3pFLEtBQUssQ0FBQzZFLE1BQTFCLGlCQUNDO0FBQ0UsYUFBUyxFQUFDLGlCQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTTdFLEtBQUssQ0FBQzRFLGNBQU4sQ0FBcUJULFNBQXJCLEVBQWdDQSxTQUFTLEdBQUcsQ0FBNUMsQ0FBTjtBQUFBO0FBRlgsa0JBSUU7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUpGLENBZEosQ0FqQkYsZUF1Q0U7QUFDRSxhQUFTLHFDQUNQbkUsS0FBSyxDQUFDeUUsU0FBTixHQUFrQixVQUFsQixHQUErQixVQUR4QjtBQURYLGtCQUtFLHNFQUFJekUsS0FBSyxDQUFDMkUsUUFBVixDQUxGLENBdkNGLEVBK0NHM0UsS0FBSyxDQUFDeUUsU0FBTixpQkFDQztBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU16RSxLQUFLLENBQUM4RSxRQUFOLENBQWU5RSxLQUFLLENBQUMrRSxNQUFyQixDQUFOO0FBQUEsS0FEWDtBQUVFLGFBQVMsRUFBQztBQUZaLDZCQUlTO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFKVCxDQWhESixFQXlESTtBQUNBO0FBQ0E7QUFDQSxHQUFDL0UsS0FBSyxDQUFDLFlBQUQsQ0FBTixpQkFDRTtBQUNFLFdBQU8sRUFBRUEsS0FBSyxDQUFDZ0YsS0FEakI7QUFFRSxhQUFTLEVBQUM7QUFGWiwwQkFJTTtBQUFHLGFBQVMsRUFBQztBQUFiLElBSk4sQ0E3RE4sQ0FSRixDQURGO0FBaUZELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHRDtBQUNBO0FBRWUsU0FBU0MsYUFBVCxDQUF1QmpGLEtBQXZCLEVBQThCO0FBQzNDO0FBRDJDLGtCQUVXQyxzREFBUSxDQUFDLEVBQUQsQ0FGbkI7QUFBQTtBQUFBLE1BRXBDaUYsbUJBRm9DO0FBQUEsTUFFZkMsc0JBRmUsa0JBRzNDO0FBQ0E7QUFDQTs7O0FBTDJDLG1CQU1QbEYsc0RBQVEsQ0FBQ2lGLG1CQUFELENBTkQ7QUFBQTtBQUFBLE1BTXBDRSxVQU5vQztBQUFBLE1BTXhCQyxhQU53QixrQkFPM0M7OztBQVAyQyxtQkFRUHBGLHNEQUFRLENBQUNpRCxTQUFELENBUkQ7QUFBQTtBQUFBLE1BUXBDb0MsVUFSb0M7QUFBQSxNQVF4QkMsYUFSd0Isa0JBUzNDOzs7QUFUMkMsbUJBVUR0RixzREFBUSxDQUFDLEVBQUQsQ0FWUDtBQUFBO0FBQUEsTUFVcEN1RixhQVZvQztBQUFBLE1BVXJCQyxnQkFWcUIsa0JBVzNDOzs7QUFYMkMsbUJBWWJ4RixzREFBUSxDQUFDLEtBQUQsQ0FaSztBQUFBO0FBQUEsTUFZcEN5RixPQVpvQztBQUFBLE1BWTNCQyxVQVoyQixtQkFhM0M7OztBQWIyQyxvQkFjSDFGLHNEQUFRLENBQUMsRUFBRCxDQWRMO0FBQUE7QUFBQSxNQWNwQzJGLFlBZG9DO0FBQUEsTUFjdEJDLGVBZHNCLG1CQWUzQzs7O0FBZjJDLG9CQWdCYjVGLHNEQUFRLENBQUMsSUFBRCxDQWhCSztBQUFBO0FBQUEsTUFnQnBDNkYsT0FoQm9DO0FBQUEsTUFnQjNCQyxVQWhCMkIsbUJBa0IzQzs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHckYsb0RBQU0sQ0FBQyxJQUFELENBQTFCOztBQUVBLFdBQVNzRixhQUFULENBQXVCdEUsQ0FBdkIsRUFBMEJ1RSxJQUExQixFQUFnQztBQUM5QnZFLEtBQUMsQ0FBQ3dFLGVBQUY7QUFDQXhFLEtBQUMsQ0FBQ3lFLFlBQUYsQ0FBZUMsT0FBZixDQUF1QixrQkFBdkIsRUFBMkNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxJQUFmLENBQTNDO0FBQ0QsR0F4QjBDLENBMEIzQztBQUNBOzs7QUFDQSxXQUFTTSxRQUFULENBQWtCN0UsQ0FBbEIsRUFBcUI7QUFDbkJBLEtBQUMsQ0FBQzhFLGNBQUY7QUFDQTlFLEtBQUMsQ0FBQ3dFLGVBQUY7QUFDQXhFLEtBQUMsQ0FBQ3lFLFlBQUYsQ0FBZU0sVUFBZixHQUE0QixNQUE1QjtBQUNEOztBQUVELE1BQU1DLHNCQUFzQixHQUFHbkIsYUFBYSxDQUFDcEYsR0FBZCxDQUFrQixVQUFDOEYsSUFBRDtBQUFBLHdCQUMvQywyREFBQyw2Q0FBRDtBQUNFLFNBQUcsRUFBRUEsSUFBSSxDQUFDN0UsRUFEWjtBQUVFLFlBQU0sRUFBRTZFLElBQUksQ0FBQzdFLEVBRmY7QUFHRSxjQUFRLEVBQUU2RSxJQUFJLENBQUN2QyxJQUhqQjtBQUlFLGtCQUFZLEVBQUV1QyxJQUFJLENBQUNVLFFBSnJCO0FBS0UsZUFBUyxFQUFFLElBTGI7QUFNRSxpQkFBVyxFQUFFLHFCQUFDakYsQ0FBRDtBQUFBLGVBQU9zRSxhQUFhLENBQUN0RSxDQUFELEVBQUl1RSxJQUFKLENBQXBCO0FBQUEsT0FOZjtBQU9FLGdCQUFVLEVBQUVNLFFBUGQ7QUFRRSxXQUFLLEVBQUU7QUFBQSxlQUFNeEcsS0FBSyxDQUFDZ0YsS0FBTixDQUFZa0IsSUFBWixDQUFOO0FBQUE7QUFSVCxNQUQrQztBQUFBLEdBQWxCLENBQS9CO0FBYUE7QUFDRjtBQUNBO0FBQ0E7O0FBQ0UsV0FBUy9FLFlBQVQsQ0FBc0JRLENBQXRCLEVBQXlCO0FBQ3ZCd0QsMEJBQXNCLENBQUN4RCxDQUFDLENBQUNHLE1BQUYsQ0FBU3ZCLEtBQVYsQ0FBdEI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU3NHLFlBQVQsQ0FBc0JsRixDQUF0QixFQUF5QjtBQUN2QkEsS0FBQyxDQUFDOEUsY0FBRjtBQUNBLFFBQUl2QixtQkFBbUIsS0FBSyxFQUE1QixFQUFnQztBQUNoQ0csaUJBQWEsQ0FBQ0gsbUJBQUQsQ0FBYjtBQUNBSyxpQkFBYSxDQUFDLENBQUQsQ0FBYjtBQUNBdUIsaUNBQTZCLENBQUM1QixtQkFBRCxFQUFzQixDQUF0QixDQUE3QjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVM2QixVQUFULENBQW9CQyxVQUFwQixFQUFnQztBQUM5QixRQUFJQSxVQUFVLEdBQUcsQ0FBakIsRUFBb0I7QUFDcEJ6QixpQkFBYSxDQUFDeUIsVUFBRCxDQUFiO0FBQ0FGLGlDQUE2QixDQUFDMUIsVUFBRCxFQUFhNEIsVUFBYixDQUE3QjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTNGNkMsV0E0RjVCRiw2QkE1RjRCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZGQTRGM0MsaUJBQTZDRyxJQUE3QyxFQUFtREMsSUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VyQiw2QkFBZSxDQUFDLEVBQUQsQ0FBZjtBQUNBRix3QkFBVSxDQUFDLElBQUQsQ0FBVjtBQUZGO0FBS1V3QixtQkFMVix5QkFLaUNGLElBTGpDLGNBS3lDQyxJQUx6QztBQUFBO0FBQUEscUJBTTJCRSxLQUFLLENBQUNELEtBQUQsQ0FOaEM7O0FBQUE7QUFNVUUsc0JBTlY7QUFBQTtBQUFBLHFCQU91QkEsUUFBUSxDQUFDQyxJQUFULEVBUHZCOztBQUFBO0FBT1VDLGtCQVBWOztBQVNJLGtCQUFJRixRQUFRLENBQUNHLEVBQWIsRUFBaUI7QUFDZi9CLGdDQUFnQixDQUFDOEIsSUFBSSxDQUFDRSxPQUFOLENBQWhCO0FBQ0ExQiwwQkFBVSxDQUFDd0IsSUFBSSxDQUFDekIsT0FBTixDQUFWO0FBQ0QsZUFIRCxNQUdPO0FBQ0xELCtCQUFlLENBQUM0QixPQUFPLENBQUNqRSxPQUFULENBQWY7QUFDRDs7QUFDRG1DLHdCQUFVLENBQUMsS0FBRCxDQUFWO0FBZko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFpQklFLDZCQUFlLENBQUMsWUFBRXJDLE9BQUYsR0FBWSxJQUFaLEdBQW1Ca0UsR0FBcEIsQ0FBZjtBQUNBL0Isd0JBQVUsQ0FBQyxLQUFELENBQVY7O0FBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBNUYyQztBQUFBO0FBQUE7O0FBa0gzQyxzQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0MsWUFBWSxpQkFBSSxzRUFBSUEsWUFBSixDQURuQixFQUVHRixPQUFPLGlCQUFJLG1GQUZkLEVBR0dpQixzQkFISCxDQURGLGVBTUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFNLFlBQVEsRUFBRUU7QUFBaEIsa0JBQ0U7QUFBTyxXQUFPLEVBQUMsaUJBQWY7QUFBaUMsYUFBUyxFQUFDO0FBQTNDLG9CQURGLGVBSUU7QUFDRSxNQUFFLEVBQUMsaUJBREw7QUFFRSxTQUFLLEVBQUUzQixtQkFGVDtBQUdFLFlBQVEsRUFBRS9ELFlBSFo7QUFJRSxlQUFXLEVBQUM7QUFKZCxJQUpGLGVBVUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUM7QUFBaEMsY0FWRixlQWNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU00RixVQUFVLENBQUN6QixVQUFVLEdBQUcsQ0FBZCxDQUFoQjtBQUFBLEtBRlg7QUFHRSxhQUFTLDhCQUNQQSxVQUFVLEdBQUcsQ0FBYixHQUFpQixTQUFqQixHQUE2QixXQUR0QjtBQUhYLFlBREYsZUFXRTtBQUFPLFdBQU8sRUFBQyxhQUFmO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxhQVhGLGVBY0U7QUFDRSxNQUFFLEVBQUMsYUFETDtBQUVFLGFBQVMsRUFBRUEsVUFBVSxJQUFJLENBQWQsR0FBa0IsU0FBbEIsR0FBOEIsV0FGM0M7QUFHRSxZQUFRLEVBQUUsSUFIWjtBQUlFLFNBQUssRUFBRUEsVUFBVSxHQUFHO0FBSnRCLElBZEYsZUFxQkU7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU15QixVQUFVLENBQUN6QixVQUFVLEdBQUcsQ0FBZCxDQUFoQjtBQUFBLEtBRlg7QUFHRSxhQUFTLDhCQUNQQSxVQUFVLElBQUksQ0FBZCxJQUFtQlEsT0FBbkIsR0FBNkIsU0FBN0IsR0FBeUMsV0FEbEM7QUFIWCxZQXJCRixDQWRGLENBREYsQ0FORixDQURGO0FBeURELEM7Ozs7Ozs7Ozs7OztBQzlLRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTNkIsSUFBVCxDQUFjM0gsS0FBZCxFQUFxQjtBQUNsQyxzQkFBTztBQUFRLE1BQUUsRUFBRUEsS0FBSyxDQUFDcUIsRUFBbEI7QUFBc0IsV0FBTyxFQUFFckIsS0FBSyxDQUFDNEg7QUFBckMsSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQyxPQUFULENBQWlCN0gsS0FBakIsRUFBd0I7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxLQUFELENBRFg7QUFBQTtBQUFBLE1BQzlCNkgsWUFEOEI7QUFBQSxNQUNoQkMsZUFEZ0I7O0FBR3JDLFdBQVNDLFlBQVQsQ0FBc0JyRyxDQUF0QixFQUF5QkssU0FBekIsRUFBb0M7QUFDbENpRyxXQUFPLENBQUNDLEdBQVIsQ0FBWWxHLFNBQVo7QUFDQSxRQUFJQSxTQUFKLEVBQWVMLENBQUMsQ0FBQzhFLGNBQUY7QUFDaEI7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSwyREFBQyw2Q0FBRDtBQUNFLE1BQUUsRUFBQyxjQURMO0FBRUUsWUFBUSxFQUFFdUIsWUFGWjtBQUdFLGlCQUFhLEVBQUMsS0FIaEI7QUFJRSxVQUFNLEVBQUMsS0FKVDtBQUtFLFVBQU0sRUFBQyxTQUxUO0FBTUUsYUFBUyxFQUFDLGlCQU5aO0FBT0UsWUFBUSxFQUFDLHFCQVBYO0FBUUUsVUFBTSxFQUFFO0FBUlYsa0JBVUUsMkRBQUMscURBQUQ7QUFDRSxTQUFLLEVBQUMsUUFEUjtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsU0FBSyxFQUFDLEVBSFI7QUFJRSxjQUFVLEVBQUM7QUFKYixJQVZGLGVBZ0JFLDJEQUFDLHVEQUFEO0FBQWEsU0FBSyxFQUFDLE1BQW5CO0FBQTBCLFFBQUksRUFBQyxNQUEvQjtBQUFzQyxTQUFLLEVBQUMsR0FBNUM7QUFBZ0QsY0FBVSxFQUFDO0FBQTNELElBaEJGLENBREYsZUFtQkU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUcsUUFBSSxrQkFBV2hJLEtBQUssQ0FBQ21JLE1BQWpCO0FBQVAsa0JBQ0U7QUFDRSxPQUFHLEVBQUVuSSxLQUFLLENBQUNvSSxVQURiO0FBRUUsT0FBRyx3QkFGTDtBQUdFLGFBQVMsRUFBQyxnQkFIWjtBQUlFLFVBQU0sRUFBQyxJQUpUO0FBS0UsU0FBSyxFQUFDO0FBTFIsSUFERixDQURGLGVBVUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1MLGVBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQXJCO0FBQUEsS0FEWDtBQUVFLGFBQVMsRUFBQztBQUZaLGtCQUlFO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFKRixDQURGLGVBT0U7QUFDRSxhQUFTLDZCQUNQQSxZQUFZLEdBQUcsU0FBSCxHQUFlLFFBRHBCO0FBRFgsa0JBS0U7QUFBRyxRQUFJLEVBQUMsU0FBUjtBQUFrQixhQUFTLEVBQUM7QUFBNUIsZ0JBTEYsQ0FQRixDQVZGLENBREYsQ0FuQkYsQ0FERjtBQW9ERCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVEO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU08sUUFBVCxDQUFrQnJJLEtBQWxCLEVBQXlCO0FBQ3RDO0FBQ0E7QUFGc0Msa0JBR0lDLHNEQUFRLENBQUNELEtBQUssQ0FBQ3NJLEtBQVAsQ0FIWjtBQUFBO0FBQUEsTUFHL0JDLGFBSCtCO0FBQUEsTUFHaEJDLGdCQUhnQixrQkFJdEM7QUFDQTs7O0FBTHNDLG1CQU1zQnZJLHNEQUFRLENBQ2xFc0ksYUFEa0UsQ0FOOUI7QUFBQTtBQUFBLE1BTS9CRSxzQkFOK0I7QUFBQSxNQU1QQyx5QkFOTyxrQkFTdEM7OztBQVRzQyxtQkFVSnpJLHNEQUFRLENBQUMsS0FBRCxDQVZKO0FBQUE7QUFBQSxNQVUvQndFLFNBVitCO0FBQUEsTUFVcEJrRSxZQVZvQjs7QUFBQSxtQkFZRTFJLHNEQUFRLENBQUMsRUFBRCxDQVpWO0FBQUE7QUFBQSxNQVkvQjJGLFlBWitCO0FBQUEsTUFZakJDLGVBWmlCO0FBY3RDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNJLGFBQVQsQ0FBdUJ0RSxDQUF2QixFQUEwQjtBQUN4QkEsS0FBQyxDQUFDd0UsZUFBRjtBQUNBeEUsS0FBQyxDQUFDeUUsWUFBRixDQUFlQyxPQUFmLENBQXVCLFlBQXZCLEVBQXFDMUUsQ0FBQyxDQUFDaUgsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JqSSxLQUE3RDtBQUNELEdBekJxQyxDQTJCdEM7QUFDQTs7O0FBQ0EsV0FBUzRGLFFBQVQsQ0FBa0I3RSxDQUFsQixFQUFxQjtBQUNuQkEsS0FBQyxDQUFDd0UsZUFBRjtBQUNBeEUsS0FBQyxDQUFDOEUsY0FBRjtBQUVBOUUsS0FBQyxDQUFDeUUsWUFBRixDQUFlTSxVQUFmLEdBQTRCLE1BQTVCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNvQyxjQUFULENBQXdCbkgsQ0FBeEIsRUFBMkI7QUFDekJBLEtBQUMsQ0FBQ3dFLGVBQUY7QUFDQXhFLEtBQUMsQ0FBQzhFLGNBQUY7O0FBRUEsUUFBTXNDLFlBQVksc0JBQU9OLHNCQUFQLENBQWxCOztBQUNBLFFBQU1PLE9BQU8sR0FBR3JILENBQUMsQ0FBQ3lFLFlBQUYsQ0FBZTZDLE9BQWYsQ0FBdUIsa0JBQXZCLENBQWhCLENBTHlCLENBTXpCOztBQUNBLFFBQU1DLFVBQVUsR0FBRzlFLE1BQU0sQ0FBQ3pDLENBQUMsQ0FBQ2lILGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCakksS0FBekIsQ0FBekIsQ0FQeUIsQ0FRekI7QUFDQTtBQUNBOztBQUNBLFFBQUlvSSxPQUFKLEVBQWE7QUFDWCxVQUFNRyxlQUFlLEdBQUc3QyxJQUFJLENBQUM4QyxLQUFMLENBQVdKLE9BQVgsQ0FBeEI7QUFDQSxVQUFJSyxpQkFBaUIsQ0FBQ0YsZUFBRCxDQUFyQixFQUF3QyxPQUY3QixDQUdYO0FBQ0E7QUFDQTs7QUFDQSxVQUFNRyxNQUFNLEdBQUdQLFlBQVksQ0FBQ08sTUFBNUIsQ0FOVyxDQU9YOztBQUNBLFVBQUlDLE1BQU0sR0FBR0osZUFBYjs7QUFDQSxXQUFLLElBQUl0SCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJeUgsTUFBckIsRUFBNkJ6SCxDQUFDLEVBQTlCLEVBQWtDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFlBQUlBLENBQUMsSUFBSXFILFVBQVQsRUFBcUI7QUFDbkI7QUFDQSxjQUFNTSxJQUFJLEdBQUdULFlBQVksQ0FBQ2xILENBQUQsQ0FBekI7QUFDQWtILHNCQUFZLENBQUNsSCxDQUFELENBQVosR0FBa0IwSCxNQUFsQjtBQUNBQSxnQkFBTSxHQUFHQyxJQUFUO0FBQ0Q7QUFDRjtBQUNGLEtBcEJELENBcUJBO0FBQ0E7QUF0QkEsU0F1Qks7QUFDSDtBQUNBLFlBQU1DLFdBQVcsR0FBR3JGLE1BQU0sQ0FBQ3pDLENBQUMsQ0FBQ3lFLFlBQUYsQ0FBZTZDLE9BQWYsQ0FBdUIsWUFBdkIsQ0FBRCxDQUExQjtBQUNBLFlBQU1PLEtBQUksR0FBR1QsWUFBWSxDQUFDRyxVQUFELENBQXpCO0FBQ0FILG9CQUFZLENBQUNHLFVBQUQsQ0FBWixHQUEyQkgsWUFBWSxDQUFDVSxXQUFELENBQXZDO0FBQ0FWLG9CQUFZLENBQUNVLFdBQUQsQ0FBWixHQUE0QkQsS0FBNUI7QUFDRDs7QUFFRGQsNkJBQXlCLENBQUNLLFlBQUQsQ0FBekI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU1csbUJBQVQsQ0FBNkIvSCxDQUE3QixFQUFnQztBQUM5QkEsS0FBQyxDQUFDOEUsY0FBRjtBQUNBOUUsS0FBQyxDQUFDd0UsZUFBRjs7QUFFQSxRQUFNNEMsWUFBWSxzQkFBT04sc0JBQVAsQ0FBbEI7O0FBQ0EsUUFBTU8sT0FBTyxHQUFHckgsQ0FBQyxDQUFDeUUsWUFBRixDQUFlNkMsT0FBZixDQUF1QixrQkFBdkIsQ0FBaEIsQ0FMOEIsQ0FNOUI7QUFDQTtBQUNBOztBQUNBLFFBQUlELE9BQUosRUFBYTtBQUNYLFVBQU1HLGVBQWUsR0FBRzdDLElBQUksQ0FBQzhDLEtBQUwsQ0FBV0osT0FBWCxDQUF4QjtBQUNBLFVBQUlLLGlCQUFpQixDQUFDRixlQUFELENBQXJCLEVBQXdDO0FBRXhDSixrQkFBWSxDQUFDOUgsSUFBYixDQUFrQmtJLGVBQWxCO0FBQ0QsS0FMRCxDQU1BO0FBQ0E7QUFQQSxTQVFLO0FBQ0gsWUFBSVEsTUFBTSxHQUFHdkYsTUFBTSxDQUFDekMsQ0FBQyxDQUFDeUUsWUFBRixDQUFlNkMsT0FBZixDQUF1QixZQUF2QixDQUFELENBQW5CO0FBQ0EsWUFBSVEsV0FBVyxHQUFHVixZQUFZLENBQUNZLE1BQUQsQ0FBOUIsQ0FGRyxDQUdIOztBQUNBLGVBQU9BLE1BQU0sR0FBR1osWUFBWSxDQUFDTyxNQUFiLEdBQXNCLENBQXRDLEVBQXlDSyxNQUFNLEVBQS9DO0FBQ0VaLHNCQUFZLENBQUNZLE1BQUQsQ0FBWixHQUF1QlosWUFBWSxDQUFDWSxNQUFNLEdBQUcsQ0FBVixDQUFuQztBQURGLFNBSkcsQ0FPSDs7O0FBQ0FaLG9CQUFZLENBQUNZLE1BQUQsQ0FBWixHQUF1QkYsV0FBdkI7QUFDRDs7QUFFRGYsNkJBQXlCLENBQUNLLFlBQUQsQ0FBekI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNhLFVBQVQsQ0FBb0I3RSxNQUFwQixFQUE0QjtBQUMxQjJELDZCQUF5QixDQUN2QkQsc0JBQXNCLENBQUNvQixNQUF2QixDQUE4QixVQUFDM0QsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQzdFLEVBQUwsS0FBWTBELE1BQXRCO0FBQUEsS0FBOUIsQ0FEdUIsQ0FBekI7QUFHRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTK0UsZUFBVCxHQUEyQjtBQUN6QmpFLG1CQUFlLENBQUMsRUFBRCxDQUFmO0FBQ0E2Qyw2QkFBeUIsQ0FBQ0gsYUFBRCxDQUF6QjtBQUNBSSxnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNEOztBQS9JcUMsV0FpSnZCb0IsV0FqSnVCO0FBQUE7QUFBQTtBQW9LdEM7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBeEt3QztBQUFBLDJFQWlKdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VsRSw2QkFBZSxDQUFDLEVBQUQsQ0FBZjtBQUNNbUUseUJBRlIsR0FFc0J2QixzQkFBc0IsQ0FBQ3JJLEdBQXZCLENBQTJCLFVBQUM4RixJQUFEO0FBQUEsdUJBQVVBLElBQUksQ0FBQzdFLEVBQWY7QUFBQSxlQUEzQixDQUZ0QjtBQUFBO0FBQUEscUJBSXlCK0YsS0FBSywwQkFBbUJwSCxLQUFLLENBQUNxQixFQUF6QixHQUErQjtBQUN6RGMsc0JBQU0sRUFBRSxLQURpRDtBQUV6RDhILDJCQUFXLEVBQUUsYUFGNEM7QUFHekRDLG9CQUFJLEVBQUU1RCxJQUFJLENBQUNDLFNBQUwsQ0FBZXlELFdBQWYsQ0FIbUQ7QUFJekRHLHVCQUFPLEVBQUU7QUFBRSxrQ0FBZ0I7QUFBbEI7QUFKZ0QsZUFBL0IsQ0FKOUI7O0FBQUE7QUFJUTlDLHNCQUpSOztBQUFBLG1CQVVNQSxRQUFRLENBQUNHLEVBVmY7QUFBQTtBQUFBO0FBQUE7O0FBV0ltQiwwQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBSCw4QkFBZ0IsQ0FBQ0Msc0JBQUQsQ0FBaEI7QUFaSjtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFjd0JwQixRQUFRLENBQUNDLElBQVQsRUFkeEI7O0FBQUE7QUFjVThDLG1CQWRWO0FBZUl2RSw2QkFBZSxDQUFDdUUsS0FBSyxDQUFDNUcsT0FBUCxDQUFmOztBQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBakpzQztBQUFBO0FBQUE7O0FBeUt0QyxXQUFTd0IsS0FBVCxDQUFla0IsSUFBZixFQUFxQjtBQUNuQixRQUFJbUQsaUJBQWlCLENBQUNuRCxJQUFELENBQXJCLEVBQTZCO0FBQzdCd0MsNkJBQXlCLDhCQUFLRCxzQkFBTCxJQUE2QnZDLElBQTdCLEdBQXpCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVN0QixjQUFULENBQXdCeUYsU0FBeEIsRUFBbUNDLFNBQW5DLEVBQThDO0FBQzVDLFFBQU12QixZQUFZLHNCQUFPTixzQkFBUCxDQUFsQjs7QUFDQSxRQUFNZSxJQUFJLEdBQUdULFlBQVksQ0FBQ3VCLFNBQUQsQ0FBekI7QUFDQXZCLGdCQUFZLENBQUN1QixTQUFELENBQVosR0FBMEJ2QixZQUFZLENBQUNzQixTQUFELENBQXRDO0FBQ0F0QixnQkFBWSxDQUFDc0IsU0FBRCxDQUFaLEdBQTBCYixJQUExQjtBQUNBZCw2QkFBeUIsQ0FBQ0ssWUFBRCxDQUF6QjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTTSxpQkFBVCxDQUEyQm5ELElBQTNCLEVBQWlDO0FBQUEsK0NBQ2Z1QyxzQkFEZTtBQUFBOztBQUFBO0FBQy9CLDBEQUF3QztBQUFBLFlBQTdCOEIsQ0FBNkI7QUFDdEN0QyxlQUFPLENBQUNDLEdBQVIsV0FBZXFDLENBQUMsQ0FBQ2xKLEVBQWpCLGNBQXVCNkUsSUFBSSxDQUFDN0UsRUFBNUI7QUFDQSxZQUFJa0osQ0FBQyxDQUFDbEosRUFBRixLQUFTNkUsSUFBSSxDQUFDN0UsRUFBbEIsRUFBc0IsT0FBTyxJQUFQO0FBQ3ZCO0FBSjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSy9CLFdBQU8sS0FBUDtBQUNELEdBeE1xQyxDQTBNdEM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1tSixpQkFBaUIsR0FBRy9CLHNCQUFzQixDQUFDckksR0FBdkIsQ0FBMkIsVUFBQzhGLElBQUQsRUFBT3RGLEtBQVA7QUFBQSx3QkFDbkQsMkRBQUMsd0RBQUQ7QUFDRSxTQUFHLEVBQUVzRixJQUFJLENBQUM3RSxFQURaO0FBRUUsWUFBTSxFQUFFNkUsSUFBSSxDQUFDN0UsRUFGZjtBQUdFLGNBQVEsRUFBRTZFLElBQUksQ0FBQ3ZDLElBSGpCO0FBSUUsa0JBQVksRUFBRXVDLElBQUksQ0FBQ1UsUUFKckI7QUFLRSxlQUFTLEVBQUVuQyxTQUxiO0FBTUUsb0JBQVksS0FBSzdELEtBTm5CO0FBT0UsZUFBUyxFQUFFNkQsU0FBUyxHQUFHLEVBUHpCO0FBUUUsaUJBQVcsRUFBRUEsU0FBUyxHQUFHd0IsYUFBSCxHQUFtQi9DLFNBUjNDO0FBU0UsZ0JBQVUsRUFBRXVCLFNBQVMsR0FBRytCLFFBQUgsR0FBY3RELFNBVHJDO0FBVUUsWUFBTSxFQUFFdUIsU0FBUyxHQUFHcUUsY0FBSCxHQUFvQjVGLFNBVnZDO0FBV0UsY0FBUSxFQUFFMEcsVUFYWjtBQVlFLG9CQUFjLEVBQUVoRixjQVpsQjtBQWFFLFlBQU0sRUFBRWhFLEtBQUssS0FBSzZILHNCQUFzQixDQUFDYSxNQUF2QixHQUFnQztBQWJwRCxNQURtRDtBQUFBLEdBQTNCLENBQTFCO0FBa0JBLHNCQUNFLHdIQUVJO0FBQ0F0SixPQUFLLENBQUN5SyxTQUFOLGlCQUNFLDJEQUFDLDJEQUFEO0FBQVMsVUFBTSxFQUFFekssS0FBSyxDQUFDeUssU0FBdkI7QUFBa0MsY0FBVSxFQUFFekssS0FBSyxDQUFDMEs7QUFBcEQsSUFKTixlQU9FO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFDRSxPQUFHLEVBQUUxSyxLQUFLLENBQUNvSSxVQURiO0FBRUUsT0FBRyxZQUFLcEksS0FBSyxDQUFDMkssV0FBWCx1QkFGTDtBQUdFLGFBQVMsRUFBQztBQUhaLElBREYsZUFNRTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQW9DM0ssS0FBSyxDQUFDMkssV0FBMUMsQ0FORixDQVBGLGVBZUU7QUFBSyxhQUFTLDJCQUFvQmxHLFNBQVMsSUFBSSxzQkFBakM7QUFBZCxrQkFDRTtBQUNFLGFBQVMsMERBQ1BBLFNBQVMsR0FBRyxZQUFILEdBQWtCLFFBRHBCO0FBRFgsa0JBS0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHK0YsaUJBREgsRUFFRy9GLFNBQVMsaUJBQ1I7QUFDRSxNQUFFLEVBQUMsWUFETDtBQUVFLGFBQVMsRUFBQyxXQUZaO0FBR0UsVUFBTSxFQUFFaUYsbUJBSFY7QUFJRSxjQUFVLEVBQUVsRDtBQUpkLElBSEosQ0FMRixlQWdCRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0d4RyxLQUFLLENBQUNxQixFQUFOLEtBQ0UsQ0FBQ29ELFNBQUQsZ0JBQ0M7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNa0UsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxLQURYO0FBRUUsYUFBUyxFQUFDO0FBRlosWUFERCxnQkFRQyxxSUFDRTtBQUNFLFdBQU8sRUFBRW1CLGVBRFg7QUFFRSxhQUFTLEVBQUM7QUFGWixjQURGLGVBT0U7QUFBUSxXQUFPLEVBQUVDLFdBQWpCO0FBQThCLGFBQVMsRUFBQztBQUF4QyxZQVBGLENBVEgsQ0FESCxlQXNCRTtBQUFNLGFBQVMsRUFBQztBQUFoQixLQUErQm5FLFlBQS9CLENBdEJGLENBaEJGLENBREYsRUEwQ0duQixTQUFTLGlCQUFJLDJEQUFDLGlFQUFEO0FBQWUsU0FBSyxFQUFFTztBQUF0QixJQTFDaEIsQ0FmRixDQURGO0FBOEREO0FBRU0sU0FBUzRGLGtCQUFULENBQTRCQyxPQUE1QixFQUFxQztBQUMxQyxTQUFPO0FBQ0w3SyxTQUFLLEVBQUVzRyxJQUFJLENBQUM4QyxLQUFMLENBQVc5QyxJQUFJLENBQUNDLFNBQUwsQ0FBZXNFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUEzQixDQUFYO0FBREYsR0FBUDtBQUdELEM7Ozs7Ozs7Ozs7O0FDbFRELGtDIiwiZmlsZSI6InBhZ2VzL3VzZXJQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91c2VyUGFnZS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogR2VuZXJhbCBmb3JtIGNvbXBvbmVudCB0aGF0IHZhbGlkYXRlcyBhbmQgY29udHJvbHMgdGhlIHN0YXRlXHJcbiAqIG9mIGFsbCBvZiBpdHMgZmllbGRzLiBDaGlsZHJlbiBvZiBGb3JtIHNob3VsZCBiZSBhIGxpc3Qgb2YgRm9ybUVsZW1lbnRzLlxyXG4gKlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgRXhwZWN0ZWQgcHJvcHM6XHJcbiAqIC0gaWQge3N0cmluZ30gZm9ybSBodG1sRWxlbWVudCdzIGlkXHJcbiAqXHJcbiAqIC0gb25TdWJtaXQge2Z1bmN0aW9uKGV2ZW50LCBvYmplY3QpfSBjYWxsYmFjayBmb3Igd2hlbiBmb3JtIHN1Ym1pdHMuXHJcbiAqICAgRm9ybSB3aWxsIHNlbmQgdHdvIGFyZ3VtZW50cywgdGhlIGZpcnN0IGlzIHRoZSBldmVudCwgdGhlIHNlY29uZFxyXG4gKiAgIGlzIHRoZSBlcnJvciBpbmZvIG9iamVjdC4gSWYgb25lIG9mIHRoZSBGb3JtRmllbGRzIHdpdGhpbiB0aGUgRm9ybVxyXG4gKiAgIHdlcmUgbm90IHZhbGlkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IHdpbGwgYmUgYW4gb2JqZWN0IGNvbnRhaW5pbmdcclxuICogICBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXJyb3IuIElmIGV2ZXJ5dGhpbmcgd2FzIHZhbGlkLCBpdCB3aWxsIGJlIG51bGwuXHJcbiAqXHJcbiAqIC0gc3VibWl0QnRuVGV4dCB7c3RyaW5nfSB0aGUgdGV4dENvbnRlbnQgZm9yIHRoZSBzdWJtaXQgYnV0dG9uXHJcbiAqXHJcbiAqIC0gYWN0aW9uPyB7c3RyaW5nfSB2YWx1ZSBmb3IgZm9ybSdzIGFjdGlvbiBhdHRyaWJ1dGVcclxuICpcclxuICogLSBtZXRob2Q/IHtzdHJpbmd9IHZhbHVlIGZvciBmb3JtJ3MgbWV0aG9kIGF0dHJpYnV0ZVxyXG4gKlxyXG4gKiAtIGlubGluZSB7Ym9vbGVhbn0gd2hldGhlciB0aGlzIGlzIGFuIGlubGluZSBmb3JtIG9yIG5vdFxyXG4gKlxyXG4gKiAtcHJvcHMuY2hpbGRyZW4gc2hvdWxkIGJlIGEgbGlzdCBvZiBGb3JtRmllbGQgZWxlbWVudHMuIEVhY2ggRm9ybUZpZWxkXHJcbiAqICBzaG91bGQgYmUgaW5pdGlhbGl6ZWQgd2l0aCBhbiBpbml0aWFsIHZhbHVlIHByb3AuXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKHByb3BzKSB7XHJcbiAgLy9hcnJheSBvZiB2YWx1ZXMgZm9yIGFsbCBjaGlsZHJlbiAoRm9ybUZpZWxkcylcclxuICAvL2luaXRpYWxpemVzIHN0YXRlIHRvIGJlIGVxdWFsIHRvIHRoZSBpbml0aWFsIHZhbHVlIGdpdmVuIGJ5XHJcbiAgLy9wYXJlbnQgY29tcG9uZW50XHJcbiAgY29uc3QgW2ZpZWxkVmFsdWVzLCBzZXRGaWVsZFZhbHVlc10gPSB1c2VTdGF0ZShcclxuICAgIFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiBjaGlsZC5wcm9wcy52YWx1ZSlcclxuICApO1xyXG5cclxuICAvL2xpc3Qgb2YgdmFsaWRhdG9ycyBvZiBhbGwgb2YgdGhpcyBGb3JtJ3MgRm9ybUZpZWxkc1xyXG4gIGNvbnN0IGZpZWxkVmFsaWRhdG9ycyA9IHVzZVJlZihbXSk7XHJcblxyXG4gIC8vdGFrZXMgY29udHJvbCBvZiBjaGlsZHJlbnMgc3RhdGUgYW5kIHBhc3NlcyBvd24gcHJvcHNcclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT5cclxuICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICB2YWx1ZTogZmllbGRWYWx1ZXNbaW5kZXhdLFxyXG4gICAgICBhZGRWYWxpZGF0b3I6ICh2YWxpZGF0b3IpID0+IGZpZWxkVmFsaWRhdG9ycy5jdXJyZW50LnB1c2godmFsaWRhdG9yKSxcclxuICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcclxuICAgICAgcGFyZW50SWQ6IHByb3BzLmlkLCAvL2FkZCBwYXJlbnQgaWQgdG8gc28gRm9ybUZpZWxkIGNhbiBtYWtlIHVuaXF1ZSBpZHMgZm9yIGl0cyBlbGVtZW50c1xyXG4gICAgICBpbmRleCxcclxuICAgICAgaW5saW5lOiBwcm9wcy5pbmxpbmUsXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnRuIGJ0bi1wcmltYXJ5ICR7cHJvcHMuYnRuQ2xhc3N9YH0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICB7cHJvcHMuc3VibWl0QnRuVGV4dCB8fCBcIlN1Ym1pdFwifVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxuXHJcbiAgLy93aGF0IHRvIGRpc3BsYXkgaW5zaWRlIHRoZSBmb3JtXHJcbiAgLy9pZiBpdHMgYW4gaW5saW5lIGZvcm0sIHB1dCBhbGwgY2hpbGRyZW4gYW5kIGJ1dHRvbiBpbiBvbmUgcm93XHJcbiAgLy9lbHNlIGRpc3BsYXkgY2hpbGRyZW4gYXMgdGhleSBhcmVcclxuICBjb25zdCBpbm5lckZvcm0gPSBwcm9wcy5pbmxpbmUgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIHtzdWJtaXRCdG59XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPD5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7c3VibWl0QnRufVxyXG4gICAgPC8+XHJcbiAgKTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyB2YWx1ZSBjaGFuZ2VzIGZvciBhbGwgb2YgYSBGb3JtJ3MgRm9ybUZpZWxkcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggRm9ybUZpZWxkJ3MgaW5kZXggcHJvcFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlLCBpbmRleCkge1xyXG4gICAgLy90aGUgaW5kZXggcHJvcCBvZiBlYWNoIEZvcm1GaWVsZCBhbmQgZmllbGRWYWx1ZXMgYXJlIHBhcmFsbGVsXHJcbiAgICAvL3NvIGlmIGEgRm9ybUZpZWxkIHBhc3NlcyBpdCdzIHByb3BzLmluZGV4LCB3ZSBjYW4gc2V0XHJcbiAgICAvL3RoZSBjb3JyZWN0IHN0YXRlXHJcbiAgICBjb25zdCBuZXdGaWVsZFZhbHVlcyA9IGZpZWxkVmFsdWVzLm1hcCgodmFsdWUsIGkpID0+XHJcbiAgICAgIGkgPT09IGluZGV4ID8gZS50YXJnZXQudmFsdWUgOiB2YWx1ZVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlcyhuZXdGaWVsZFZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxscyBldmVyeSBGb3JtRmllbGQncyB2YWxpZGF0b3IgZnVuY3Rpb24uIElmIGFueSBmaWVsZFxyXG4gICAqIGlzIGludmFsaWQsIHdpbGwgc2VuZCB0aGUgZXJyb3IgaW5mbyBvYmplY3QgdG8gcGFyZW50IGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7ZXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUFsbEZpZWxkcyhlKSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbGlkYXRvciBvZiBmaWVsZFZhbGlkYXRvcnMuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBlcnJvckluZm8gPSB2YWxpZGF0b3IoKTtcclxuICAgICAgaWYgKGVycm9ySW5mbykgcmV0dXJuIHByb3BzLm9uU3VibWl0KGUsIGVycm9ySW5mbyk7XHJcbiAgICB9XHJcbiAgICBwcm9wcy5vblN1Ym1pdChlLCBudWxsKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgIG9uU3VibWl0PXt2YWxpZGF0ZUFsbEZpZWxkc31cclxuICAgICAgICBub1ZhbGlkYXRlPXt0cnVlfVxyXG4gICAgICAgIGFjdGlvbj17cHJvcHMuYWN0aW9ufVxyXG4gICAgICAgIG1ldGhvZD17cHJvcHMubWV0aG9kfVxyXG4gICAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lubmVyRm9ybX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKipcclxuICogRm9ybUZpZWxkcyBhcmUgbWVhbnQgdG8gYmUgdXNlZCB3aXRoIHRoZSBGb3JtIGNvbXBvbmVudC5cclxuICogVGhleSBhcmUgYSBjb21iaW5hdGlvbiBvZiBhIGxhYmVsIGFuZCBhIGNvcnJlc3BvbmRpbmcgaW5wdXQgZWxlbWVudCBvZiBzb21lIGtpbmQuXHJcbiAqIFRoZXkgbWFrZSB1cCB0aGUgZmllbGRzIG9mIGEgRm9ybSBjb21wb25lbnQuIEVhY2ggRm9ybUZpZWxkIGhhcyBpdHMgb3duXHJcbiAqIHZhbGlkYXRvciBmdW5jdGlvbiB0aGF0IGNoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaXRzIGlucHV0LiBGb3JtRmllbGQgdmFsaWRhdG9yc1xyXG4gKiBhcmUgY2FsbGVkIGJ5IGl0cyBwYXJlbnQgRm9ybS4gRm9ybUZpZWxkcyBzaG91bGQgYmUgdGhlIGNoaWxkcmVuIG9mIGEgRm9ybVxyXG4gKiBjb21wb25lbnQgYW5kIHNob3VsZCBiZSBpbml0aWFsaWVkIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSBwcm9wLiBBZnRlciBmaXJzdCByZW5kZXIsXHJcbiAqIHRoZSBGb3JtIGNvbXBvbmVudCB3aWxsIHRha2UgY29udHJvbCBvZiB0aGUgRm9ybUZpZWxkJ3MgdmFsdWUgc3RhdGUuXHJcbiAqXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIENvbW1vbiBsYXlvdXQgdGVtcGxhdGUgdGhhdCBGb3JtRmllbGRzIHVzZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgZXhwZWN0ZWQgcHJvcHM6XHJcbiAqIC0gZ3JvdXBDbGFzcyB7c3RyfSBjc3MgY2xhc3MgZm9yIHRoZSBmb3JtLWdyb3VwIGNvbnRhaW5pbmcgdGhlIGlucHV0XHJcbiAqIC0gY2hpbGRyZW46XHJcbiAqIC0gRm9ybUZpZWxkJ3MgY29udHJvbFxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gRm9ybUZpZWxkVGVtcGxhdGUocHJvcHMpIHtcclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pO1xyXG4gIC8vcHJlc2VydmUgZXhpc3RpbmcgY3NzIGNsYXNzZXMgKyBhZGQgYm9vdHN0cmFwIGNsYXNzZXNcclxuICBjb25zdCBjb250cm9sID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuWzBdLCB7XHJcbiAgICBjbGFzc05hbWU6XHJcbiAgICAgIChjaGlsZHJlblswXS5jbGFzc05hbWUgfHwgXCJcIikgK1xyXG4gICAgICBgIGZvcm0tY29udHJvbCAke3Byb3BzLmlubGluZSA/IFwidy0xMDBcIiA6IFwidy03NVwifWAsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7cHJvcHMuaW5saW5lID8gXCJcIiA6IFwiZm9ybS1ncm91cCBtLTNcIn0gJHtwcm9wcy5ncm91cENsYXNzfWB9XHJcbiAgICA+XHJcbiAgICAgIHtjb250cm9sfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLy9kb250IHVzZSB0aGUgYWRvIHZhY2F0aW9uL3RpbWVvZmYgZm9yIGhvbGlkYXkganVzdCBkb250IHB1dCBhbnkgdGltZVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYWwgdGV4dCBpbnB1dCBmaWVsZC5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWwge3N0cmluZ30gRm9ybUZpZWxkJ3MgbGFiZWxcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSByZXF1aXJlZD8ge2Jvb2xlYW59IHdoZXRoZXIgdGhpcyBGb3JtRmllbGQgaXMgcmVxdWlyZWQgb3Igbm90XHJcbiAqIC0gbWluPyB7bnVtYmVyfSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqIC0gbWF4PyB7bnVtYmVyfSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGV4dEZpZWxkKHByb3BzKSB7XHJcbiAgY29uc3QgaW5wdXRJZCA9IGBmb3JtLWZpZWxkLSR7cHJvcHMubGFiZWx9LSR7cHJvcHMucGFyZW50SWR9YDtcclxuICBjb25zdCBtaW5MZW5ndGggPSBwcm9wcy5taW47XHJcbiAgY29uc3QgbWF4TGVuZ3RoID0gcHJvcHMubWF4O1xyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGlucHV0RmllbGQuY3VycmVudDtcclxuICAgIGNvbnN0IHZhbGlkaXR5U3RhdGUgPSBlbGVtZW50LnZhbGlkaXR5O1xyXG5cclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnZhbHVlTWlzc2luZylcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7cHJvcHMubGFiZWx9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke3Byb3BzLmxhYmVsfSBtdXN0IGJlIGF0IGxlYXN0ICR7bWluTGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudG9vTG9uZylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtwcm9wcy5sYWJlbH0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGUgZ3JvdXBDbGFzcz17cHJvcHMuZ3JvdXBDbGFzc30gaW5saW5lPXtwcm9wcy5pbmxpbmV9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD17aW5wdXRJZH1cclxuICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZSB8fCBcIlwifVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSwgcHJvcHMuaW5kZXgpfVxyXG4gICAgICAgIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMubGFiZWx9XHJcbiAgICAgICAgcmVmPXtpbnB1dEZpZWxkfVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSW5wdXQgZmllbGQgZm9yIGVtYWlscy5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWw/IHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChkZWZhdWx0IGxhYmVsIGlzIEVtYWlsKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIHJlcXVpcmVkPyB7Ym9vbGVhbn0gd2hldGhlciB0aGlzIEZvcm1GaWVsZCBpcyByZXF1aXJlZCBvciBub3RcclxuICogLSBtaW4/IHtudW1iZXJ9IG1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICogLSBtYXg/IHtudW1iZXJ9IG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFbWFpbEZpZWxkKHByb3BzKSB7XHJcbiAgY29uc3QgbGFiZWxOYW1lID0gcHJvcHMubGFiZWwgfHwgXCJFbWFpbFwiO1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke2xhYmVsTmFtZX0tJHtwcm9wcy5wYXJlbnRJZH1gO1xyXG4gIGNvbnN0IG1pbkxlbmd0aCA9IHByb3BzLm1pbjtcclxuICBjb25zdCBtYXhMZW5ndGggPSBwcm9wcy5tYXggfHwgNTA7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IGlmIGlucHV0IGlzIHZhbGlkLCByZXR1cm5zIG51bGwuIE90aGVyd2lzZSwgcmV0dXJucyBhbiBvYmplY3RcclxuICAgKiBjb250YWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXJyb3JcclxuICAgKiB7bWVzc2FnZTogZXJyb3IgbWVzc2FnZSwgZWxlbWVudDogcmVmZXJlbmNlIHRvIEh0bWxFbGVtZW50IHRoYXQgY29udGFpbnMgZXJyb3J9XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gaW5wdXRGaWVsZC5jdXJyZW50O1xyXG4gICAgY29uc3QgdmFsaWRpdHlTdGF0ZSA9IGVsZW1lbnQudmFsaWRpdHk7XHJcblxyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudmFsdWVNaXNzaW5nKVxyXG4gICAgICByZXR1cm4geyBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnR5cGVNaXNtYXRjaClcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGFuIGVtYWlsLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAke21heExlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtRmllbGRUZW1wbGF0ZSBncm91cENsYXNzPXtwcm9wcy5ncm91cENsYXNzfSBpbmxpbmU9e3Byb3BzLmlubGluZX0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5vbkNoYW5nZShlLCBwcm9wcy5pbmRleCl9XHJcbiAgICAgICAgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfVxyXG4gICAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxyXG4gICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtsYWJlbE5hbWV9XHJcbiAgICAgICAgcmVmPXtpbnB1dEZpZWxkfVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSW5wdXQgZmllbGQgZm9yIHBhc3N3b3Jkcy4gSW5wdXQgaXMgYWx3YXlzIHJlcXVpcmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogLSBsYWJlbD8ge3N0cmluZ30gRm9ybUZpZWxkJ3MgbGFiZWwgKGRlZmF1bHQgbGFiZWwgaXMgUGFzc3dvcmQpXHJcbiAqIC0gbmFtZSB7c3RyaW5nfSBuYW1lIGZvciBpbnB1dCBlbGVtZW50XHJcbiAqIC0gbWluPyB7bnVtYmVyfSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUGFzc3dvcmRGaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGxhYmVsTmFtZSA9IHByb3BzLmxhYmVsIHx8IFwiUGFzc3dvcmRcIjtcclxuICBjb25zdCBpbnB1dElkID0gYGZvcm0tZmllbGQtJHtsYWJlbE5hbWV9LSR7cHJvcHMucGFyZW50SWR9YDtcclxuICBjb25zdCBtaW5MZW5ndGggPSBwcm9wcy5taW47XHJcbiAgY29uc3QgbWF4TGVuZ3RoID0gcHJvcHMubWF4IHx8IDUwO1xyXG5cclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBpbnB1dEZpZWxkLmN1cnJlbnQ7XHJcbiAgICBjb25zdCB2YWxpZGl0eVN0YXRlID0gZWxlbWVudC52YWxpZGl0eTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS52YWx1ZU1pc3NpbmcpXHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gaXMgcmVxdWlyZWQuYCwgZWxlbWVudCB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudG9vU2hvcnQpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGF0IGxlYXN0ICR7bWluTGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudG9vTG9uZylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1GaWVsZFRlbXBsYXRlIGdyb3VwQ2xhc3M9e3Byb3BzLmdyb3VwQ2xhc3N9IGlubGluZT17cHJvcHMuaW5saW5lfT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9e2lucHV0SWR9XHJcbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWUgfHwgXCJcIn1cclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSwgcHJvcHMuaW5kZXgpfVxyXG4gICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxyXG4gICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtsYWJlbE5hbWV9XHJcbiAgICAgICAgcmVmPXtpbnB1dEZpZWxkfVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSGlkZGVuIGlucHV0IGZpZWxkXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsIHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChub3QgdmlzaWJsZSwganVzdCBmb3IgbmFtaW5nIHB1cnBvc2VzKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIHZhbHVlIHtzdHJpbmd9IGlucHV0J3MgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBIaWRkZW5GaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke3Byb3BzLmxhYmVsfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xyXG4gICAgLy9hbHdheXMgdmFsaWRcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtRmllbGRUZW1wbGF0ZSBncm91cENsYXNzPXtwcm9wcy5ncm91cENsYXNzfSBpbmxpbmU9e3Byb3BzLmlubGluZX0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgIGhpZGRlbj17dHJ1ZX1cclxuICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICByZWY9e2lucHV0RmllbGR9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm1GaWVsZFRlbXBsYXRlPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEEgY29tcG9uZW50IHJlcHJlc2VudGluZyBhIHNpbmdsZSBnYW1lXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyA6XHJcbiAqXHJcbiAqICAtIGRhdGEtaW5kZXg/IHtzdHJpbmd9OiBpbmRleCBvZiBnYW1lIGluIHRoZSBmYXZlIGdhbWUgbGlzdFxyXG4gKlxyXG4gKiAgLSBvbkFkZD8ge2Z1bmN0aW9ufTogY2FsbGJhY2sgZm9yIGdhbWVzIGluIEdhbWVTZWFyY2hCb3ggdG8gYmUgYWRkZWQgdG8gZmF2b3JpdGUgZ2FtZXMgbGlzdC5cclxuICogIFVzZWQgaW4gbW9iaWxlIHZpZXcuIE1hbmRhdG9yeSBmb3IgR2FtZXMgaW4gR2FtZVNlYXJjaEJveC5cclxuICpcclxuICogIC0gY2hhbmdlUG9zaXRpb24/IHtmdW5jdGlvbihjdXJyUG9zOiBpbnQsIG5leHRQb3M6IGludCl9OiBjYWxsYmFjayBmb3IgZ2FtZXMgaW4gZmF2ZSBnYW1lIGxpc3QgdG8gY2hhbmdlIHBvc2l0aW9uLlxyXG4gKiBVc2VkIGluIG1vYmlsZSB2aWV3LiBNYW5kYXRvcnkgZm9yIEdhbWVzIGluIGZhdmUgZ2FtZSBsaXN0LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUocHJvcHMpIHtcclxuICAvL0kgY2FzdCBpdCB0byBudW1iZXIgc28gb2Z0ZW4gbWF5YmUgSSBzaG91bGQganVzdCBzYXZlIGl0IGhtXHJcbiAgY29uc3QgZGF0YUluZGV4ID0gcHJvcHNbXCJkYXRhLWluZGV4XCJdICYmIE51bWJlcihwcm9wc1tcImRhdGEtaW5kZXhcIl0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImdhbWUtY29udGFpbmVyIGNvbnRhaW5lciByb3VuZGVkIG15LTMgXCJcclxuICAgICAgZGF0YS1pbmRleD17cHJvcHNbXCJkYXRhLWluZGV4XCJdfVxyXG4gICAgICBvbkRyYWdTdGFydD17cHJvcHMub25EcmFnU3RhcnR9XHJcbiAgICAgIG9uRHJhZ092ZXI9e3Byb3BzLm9uRHJhZ092ZXJ9XHJcbiAgICAgIG9uRHJvcD17cHJvcHMub25Ecm9wfVxyXG4gICAgICBkcmFnZ2FibGU9e3Byb3BzLmRyYWdnYWJsZX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e2Bjb2wtMSAke3Byb3BzW1wiZGF0YS1pbmRleFwiXSAmJiBgcG9zLSR7ZGF0YUluZGV4ICsgMX1gfWB9PlxyXG4gICAgICAgICAge3Byb3BzW1wiZGF0YS1pbmRleFwiXSAmJiBkYXRhSW5kZXggKyAxICsgXCIuXCJ9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGdhbWUtaW1nIGNvbC1tZC0yICR7XHJcbiAgICAgICAgICAgIHByb3BzLmlzRWRpdGluZyA/IFwiY29sLTlcIiA6IFwiY29sLTExXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtwcm9wcy5nYW1lQ292ZXJVcmx9XHJcbiAgICAgICAgICAgIGFsdD17YENvdmVyIGFydCBmb3IgJHtwcm9wcy5nYW1lTmFtZX1gfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezkwfVxyXG4gICAgICAgICAgICB3aWR0aD17OTB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgZC1pbmxpbmUtYmxvY2sgbS1hdXRvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgY2hhbmdlLXBvcy1idXR0b25zIGQtbWQtbm9uZSAke1xyXG4gICAgICAgICAgICBwcm9wcy5pc0VkaXRpbmcgPyBcImNvbC0yXCIgOiBcImQtbm9uZVwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cHJvcHMuaXNFZGl0aW5nICYmIGRhdGFJbmRleCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhbmdlLXBvcy11cFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlUG9zaXRpb24oZGF0YUluZGV4LCBkYXRhSW5kZXggLSAxKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpLWNhcmV0LXVwLWZpbGxcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7cHJvcHMuaXNFZGl0aW5nICYmICFwcm9wcy5pc0xhc3QgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhbmdlLXBvcy1kb3duXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGFuZ2VQb3NpdGlvbihkYXRhSW5kZXgsIGRhdGFJbmRleCArIDEpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmktY2FyZXQtZG93bi1maWxsXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGdhbWUtbmFtZSBkLWlubGluZS1ibG9jayAke1xyXG4gICAgICAgICAgICBwcm9wcy5pc0VkaXRpbmcgPyBcImNvbC1tZC02XCIgOiBcImNvbC1tZC05XCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwPntwcm9wcy5nYW1lTmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtwcm9wcy5pc0VkaXRpbmcgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkRlbGV0ZShwcm9wcy5nYW1lSWQpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMyBidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlbGV0ZSA8aSBjbGFzc05hbWU9XCJiaS10cmFzaC1maWxsIG14LTFcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy9hZGQgYnV0dG9uIHNob3VsZCBvbmx5IGFwcGVhciBvbiBnYW1lcyBpbiBHYW1lU2VhcmNoQm94XHJcbiAgICAgICAgICAvL2RhdGEtaW5kZXggcHJvcCBpcyBvbmx5IGdpdmVuIHRvIGdhbWVzIGluIHRoZSBmYXZvcml0ZSBnYW1lIGxpc3RcclxuICAgICAgICAgIC8vdGhlcmVmb3JlIGlmIG5vIGRhdGEtaW5kZXgsIGl0cyBhIEdhbWVTZWFyY2hCb3ggZ2FtZVxyXG4gICAgICAgICAgIXByb3BzW1wiZGF0YS1pbmRleFwiXSAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkFkZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgZC1tZC1ub25lIHctMTAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCA8aSBjbGFzc05hbWU9XCJiaS1wbHVzLWNpcmNsZS1maWxsIG14LTFcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVTZWFyY2hCb3gocHJvcHMpIHtcclxuICAvL3NlYXJjaCB0ZXJtIGluIHNlYXJjaCBiYXJcclxuICBjb25zdCBbZGlzcGxheWVkU2VhcmNoVGVybSwgc2V0RGlzcGxheWVkU2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvL3RoZSBhY3R1YWwgdW5kZXJseWluZyBzZWFyY2ggdGVybSByZWdhcmRsZXNzIG9mIHdoYXRzIHR5cGVkXHJcbiAgLy9jbGlja2luZyBuZXh0L3ByZXYgd2lsbCBjaGFuZ2UgcGFnZXMgZm9yIHRoaXMgdmFsdWVcclxuICAvL2NsaWNraW5nIHNlYXJjaCBidXR0b24gd2lsbCBjaGFuZ2UgdGhpcyB2YWx1ZVxyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKGRpc3BsYXllZFNlYXJjaFRlcm0pO1xyXG4gIC8vcGFnZSBvZiBzZWFyY2ggcmVzdWx0c1xyXG4gIGNvbnN0IFtzZWFyY2hQYWdlLCBzZXRTZWFyY2hQYWdlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgLy9saXN0IG9mIG9iamVjdHMgdGhhdCB3aWxsIGJlIHJldHJpZXZlZCBmcm9tIHNlYXJjaCBhcGlcclxuICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy93aGV0aGVyIG9yIG5vdCBzZWFyY2ggcmVzdWx0cyBhcmUgY3VycmVudGx5IGxvYWRpbmdcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy9lcnJvciBtZXNzYWdlXHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vd2hldGhlciBvciBub3QgdGhlcmUgaXMgYSBuZXh0IHBhZ2Ugb2Ygc2VhcmNoIHJlc3VsdHNcclxuICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy91c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGl0cyBmaXJzdCByZW5kZXIgb3Igbm90XHJcbiAgY29uc3QgZmlyc3RSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhZ0dhbWUoZSwgZ2FtZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIsIEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcclxuICB9XHJcblxyXG4gIC8vZHJhZ292ZXIgaGFuZGxlciBpcyBuZWVkZWQgdG8gbWFrZSBlbGVtZW50XHJcbiAgLy9kcmFnZ2FibGVcclxuICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzcGxheWVkU2VhcmNoUmVzdWx0cyA9IHNlYXJjaFJlc3VsdHMubWFwKChnYW1lKSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBkcmFnZ2FibGU9e3RydWV9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXsoZSkgPT4gc3RhcnREcmFnR2FtZShlLCBnYW1lKX1cclxuICAgICAgb25EcmFnT3Zlcj17ZHJhZ092ZXJ9XHJcbiAgICAgIG9uQWRkPXsoKSA9PiBwcm9wcy5vbkFkZChnYW1lKX1cclxuICAgIC8+XHJcbiAgKSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgZGlzcGxheWVkIHNlYXJjaCB0ZXJtXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBzZXREaXNwbGF5ZWRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgc2VhcmNoVGVybSB0byBkaXNwbGF5ZWRTZWFyY2hUZXJtXHJcbiAgICogYW5kIGZldGNoZXMgc2VhcmNoIHJlc3VsdHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChkaXNwbGF5ZWRTZWFyY2hUZXJtID09PSBcIlwiKSByZXR1cm47XHJcbiAgICBzZXRTZWFyY2hUZXJtKGRpc3BsYXllZFNlYXJjaFRlcm0pO1xyXG4gICAgc2V0U2VhcmNoUGFnZSgwKTtcclxuICAgIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKGRpc3BsYXllZFNlYXJjaFRlcm0sIDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyBwYWdlIG51bWJlciBmb3Igc2VhcmNoVGVybVxyXG4gICAqIChub3QgZGlzcGxheWVkU2VhcmNoVGVybSkgYW5kIGZldGNoZXMgc2VhcmNoXHJcbiAgICogcmVzdWx0cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlTnVtYmVyIG5ldyBwYWdlIG51bWJlclxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGNoYW5nZVBhZ2UocGFnZU51bWJlcikge1xyXG4gICAgaWYgKHBhZ2VOdW1iZXIgPCAwKSByZXR1cm47XHJcbiAgICBzZXRTZWFyY2hQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gICAgZmV0Y2hBbmRQb3B1bGF0ZVNlYXJjaFJlc3VsdHMoc2VhcmNoVGVybSwgcGFnZU51bWJlcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaGVzIGEgc2VhcmNoIGZyb20gdGhlIEFQSSBhbmQgcG9wdWxhdGVzIHBhZ2VcclxuICAgKiB3aXRoIHNlYXJjaCByZXN1bHRzLiBUaGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIGNhbGxlZFxyXG4gICAqIHdpdGggYSBzZWFyY2ggdGVybSBhbmQgcGFnZSBtYW51YWxseSBpbnN0ZWFkIG9mIHJlbHlpbmcgb25cclxuICAgKiBjaGVja2luZyBzdGF0ZSBhcyByZWFkaW5nIHN0YXRlIGltbWVkaWF0ZWx5IGFmdGVyIHNldHRpbmcgaXRcclxuICAgKiB3aWxsIHJldHVybiBzdGFsZSB2YWx1ZXMuIFNvLCB3ZSBnaXZlIGl0IHRoZSBmcmVzaCB2YWx1ZXMgbWFudWFsbHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVybSBzZWFyY2ggdGVybVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIHNlYXJjaCBwYWdlIG51bWJlclxyXG4gICAqL1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKHRlcm0sIHBhZ2UpIHtcclxuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcXVlcnkgPSBgL2FwaS9zZWFyY2gvJHt0ZXJtfS8ke3BhZ2V9YDtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChxdWVyeSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBzZXRTZWFyY2hSZXN1bHRzKGRhdGEucmVzdWx0cyk7XHJcbiAgICAgICAgc2V0SGFzTmV4dChkYXRhLmhhc05leHQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShyZXN1bHRzLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoZS5tZXNzYWdlICsgXCJcXG5cIiArIG1zZyk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1zZWFyY2gtYm94IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHRzIGdhbWUtbGlzdCBvcmRlci0yIG9yZGVyLW1kLTFcIj5cclxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIDxwPntlcnJvck1lc3NhZ2V9PC9wPn1cclxuICAgICAgICB7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cclxuICAgICAgICB7ZGlzcGxheWVkU2VhcmNoUmVzdWx0c31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWJhciBvcmRlci0xIG9yZGVyLW1kLTJcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FtZS1zZWFyY2gtYmFyXCIgY2xhc3NOYW1lPVwiZC1ub25lXCI+XHJcbiAgICAgICAgICAgIE5hbWUgb2YgR2FtZVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImdhbWUtc2VhcmNoLWJhclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkaXNwbGF5ZWRTZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWUgb2YgR2FtZS4uLlwiXHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbWQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2Uoc2VhcmNoUGFnZSAtIDEpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc2Vjb25kYXJ5ICR7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hQYWdlID4gMCA/IFwidmlzaWJsZVwiIDogXCJpbnZpc2libGVcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUHJldlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFnZS1udW1iZXJcIiBjbGFzc05hbWU9XCJkLW5vbmVcIj5cclxuICAgICAgICAgICAgICBQYWdlOlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cInBhZ2UtbnVtYmVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlYXJjaFBhZ2UgPj0gMCA/IFwidmlzaWJsZVwiIDogXCJpbnZpc2libGVcIn1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFnZSArIDF9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2Uoc2VhcmNoUGFnZSArIDEpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc2Vjb25kYXJ5ICR7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hQYWdlID49IDAgJiYgaGFzTmV4dCA/IFwidmlzaWJsZVwiIDogXCJpbnZpc2libGVcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCIuL0Zvcm1GaWVsZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QocHJvcHMpIHtcclxuICByZXR1cm4gPGJ1dHRvbiBpZD17cHJvcHMuaWR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PjwvYnV0dG9uPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQsIEhpZGRlbkZpZWxkIH0gZnJvbSBcIi4vRm9ybUZpZWxkc1wiO1xyXG5pbXBvcnQgVGVzdCBmcm9tIFwiLi9UZXN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIGV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIHVzZXJJZCB7bnVtYmVyfSB0aGUgbG9nZ2VkIGluIHVzZXIncyB1c2VyIGlkXHJcbiAqIC0gcHJvZmlsZVBpYyB7c3RyaW5nfSBzcmMgdXJsIGZvciB1c2VyJ3MgcHJvZmlsZSBwaWN0dXJlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb29sYmFyKHByb3BzKSB7XHJcbiAgY29uc3QgW3Nob3dEcm9wZG93biwgc2V0U2hvd0Ryb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUsIGVycm9ySW5mbykge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3JJbmZvKTtcclxuICAgIGlmIChlcnJvckluZm8pIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0b29sYmFyIG0tMFwiPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGlkPVwiVG9vbGJhci1Gb3JtXCJcclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgIHN1Ym1pdEJ0blRleHQ9XCJHbyFcIlxyXG4gICAgICAgIG1ldGhvZD1cImdldFwiXHJcbiAgICAgICAgYWN0aW9uPVwiL3NlYXJjaFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC05XCJcclxuICAgICAgICBidG5DbGFzcz1cImNvbC1tZC0xIGNvbC0yIHB0LTFcIlxyXG4gICAgICAgIGlubGluZT17dHJ1ZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgIG5hbWU9XCJxdWVyeVwiXHJcbiAgICAgICAgICB2YWx1ZT1cIlwiXHJcbiAgICAgICAgICBncm91cENsYXNzPVwiY29sLTEwIGNvbC1tZC0xMSBwdC0xXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxIaWRkZW5GaWVsZCBsYWJlbD1cIlBhZ2VcIiBuYW1lPVwicGFnZVwiIHZhbHVlPVwiMFwiIGdyb3VwQ2xhc3M9XCJkLm5vbmVcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLTMgcHQtMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci1vcHRpb25zXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtgL3VzZXIvJHtwcm9wcy51c2VySWR9YH0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLnByb2ZpbGVQaWN9XHJcbiAgICAgICAgICAgICAgYWx0PXtgWW91ciBwcm9maWxlIHBpY3R1cmVgfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI0NVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RHJvcGRvd24oIXNob3dEcm9wZG93bil9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tYnV0dG9uIG1sLTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktY2FyZXQtZG93bi1maWxsXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1jb250ZW50ICR7XHJcbiAgICAgICAgICAgICAgICBzaG93RHJvcGRvd24gPyBcImQtYmxvY2tcIiA6IFwiZC1ub25lXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9nb3V0XCIgY2xhc3NOYW1lPVwiZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBPdXRcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vY29tcG9uZW50cy9HYW1lXCI7XHJcbmltcG9ydCBHYW1lU2VhcmNoQm94IGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVTZWFyY2hCb3hcIjtcclxuXHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1Rvb2xiYXJcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBUaGUgcGFnZSB0aGF0IGlzIGRpc3BsYXllZCB3aGVuXHJcbiAqIHZpZXdpbmcgYSB1c2VyJ3MgcHJvZmlsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUGFnZShwcm9wcykge1xyXG4gIC8qIHNldHRpbmcgc3RhdGUgKi9cclxuICAvL3RoZSB1c2VyJ3MgYWN0dWFsIGZhdm9yaXRlIGdhbWVzXHJcbiAgY29uc3QgW2Zhdm9yaXRlR2FtZXMsIHNldEZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUocHJvcHMuZ2FtZXMpO1xyXG4gIC8vdGhlIHVzZXIncyBmYXZvcml0ZSBnYW1lIGFzIGN1cnJlbnRseSBkaXNwbGF5ZWQuIHRoZXNlIG1heSBkaWZmZXJcclxuICAvL2Zyb20gYWN0dWFsIGZhdm9yaXRlIGdhbWVzIGR1cmluZyBlZGl0aW5nXHJcbiAgY29uc3QgW2Rpc3BsYXllZEZhdm9yaXRlR2FtZXMsIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUoXHJcbiAgICBmYXZvcml0ZUdhbWVzXHJcbiAgKTtcclxuICAvL3doZXRoZXIgb3Igbm90IHVzZXIgaXMgZWRpdGluZyBmYXZvcml0ZSBnYW1lc1xyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gYSBHYW1lIGlzIGRyYWdnZWQuIEFkZHNcclxuICAgKiB0aGUgR2FtZSdzIGRhdGEtaW5kZXggYXR0cmlidXRlIHRvXHJcbiAgICogRHJhZ0V2ZW50LmRhdGFUcmFuc2ZlciB0byBiZSB1c2VkIGJ5XHJcbiAgICogZHJvcEdhbWUoKSBsYXRlciBvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBzdGFydERyYWdHYW1lKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCk7XHJcbiAgfVxyXG5cclxuICAvL2RyYWdvdmVyIGhhbmRsZXIgaXMgbmVlZGVkIHRvIG1ha2UgZWxlbWVudFxyXG4gIC8vZHJhZ2dhYmxlXHJcbiAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHJhZ2dlZCBnYW1lIHdpbGwgYmUgc3dhcHBlZCB3aXRoIHRoZSBnYW1lXHJcbiAgICogaXQncyBkcm9wcGVkIG9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBkcm9wR2FtZU9uR2FtZShlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IG5ld0ZhdmVHYW1lcyA9IFsuLi5kaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXTtcclxuICAgIGNvbnN0IG5ld0dhbWUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIC8vaW5kZXggb2YgZ2FtZSB0aGF0IHdhcyBkcm9wcGVkIG9uXHJcbiAgICBjb25zdCBkcm9wVGFyZ2V0ID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICAgIC8vZGF0YVRyYW5zZmVyIHdpbGwgY29udGFpbiBhIGpzIG9iamVjdCBpZiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkXHJcbiAgICAvL2lzIGZyb20gc2VhcmNoIHJlc3VsdHMsIG1lYW5pbmcgYSBuZXcgZ2FtZSBpcyBiZWluZyBhZGRlZFxyXG4gICAgLy90byBmYXZvcml0ZSBnYW1lc1xyXG4gICAgaWYgKG5ld0dhbWUpIHtcclxuICAgICAgY29uc3QgbmV3R2FtZUFzT2JqZWN0ID0gSlNPTi5wYXJzZShuZXdHYW1lKTtcclxuICAgICAgaWYgKGdhbWVBbHJlYWR5RXhpc3RzKG5ld0dhbWVBc09iamVjdCkpIHJldHVybjtcclxuICAgICAgLy93ZSByZXBsYWNlIGVsZW1lbnRzIGFzIHdlIGdvLCBldmVudHVhbGx5IHdlIGFuIGVsZW1lbnQgdG8gbmV3RmF2ZUdhbWVzW25ld0ZhdmVHYW1lcy5sZW5ndGhdXHJcbiAgICAgIC8vdGhpcyBpbmNyZWFzZXMgdGhlIGxlbmd0aCBhbmQgdGhlIGxvb3AgZ29lcyBvbiBmb3JldmVyXHJcbiAgICAgIC8vc28gd2Uga2VlcCB0aGUgbGVuZ3RoIG9mIHRoZSBsaXN0IGJlZm9yZSB3ZSBzdGFydFxyXG4gICAgICBjb25zdCBsZW5ndGggPSBuZXdGYXZlR2FtZXMubGVuZ3RoO1xyXG4gICAgICAvL2dhbWUgdG8gYmUgYWRkZWQgaW5cclxuICAgICAgbGV0IGhvbGRlciA9IG5ld0dhbWVBc09iamVjdDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyBpZiAobmV3RmF2ZUdhbWVzW2ldICYmIG5ld0ZhdmVHYW1lc1tpXS5pZCA9PT0gbmV3R2FtZUFzT2JqZWN0LmlkKVxyXG4gICAgICAgIC8vICAgcmV0dXJuO1xyXG4gICAgICAgIC8vc3RhcnQgc3dhcHBpbmcgZnJvbSBkcm9wVGFyZ2V0IG9ud2FyZHNcclxuICAgICAgICBpZiAoaSA+PSBkcm9wVGFyZ2V0KSB7XHJcbiAgICAgICAgICAvL3B1dCBob2xkZXIgaW50byB0aGUgbGlzdCwgdGFrZSB3aGF0IHdhcyB0aGVyZSBhbmQgcHV0IGludG8gaG9sZGVyXHJcbiAgICAgICAgICBjb25zdCB0ZW1wID0gbmV3RmF2ZUdhbWVzW2ldO1xyXG4gICAgICAgICAgbmV3RmF2ZUdhbWVzW2ldID0gaG9sZGVyO1xyXG4gICAgICAgICAgaG9sZGVyID0gdGVtcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vaWYgdGhlcmUgaXMgbm8ganMgb2JqZWN0LCB0aGVuIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWQgaXMgYW4gYWxyZWFkeVxyXG4gICAgLy9leGlzdGluZyBnYW1lIHNvIHdlIGp1c3Qgc3dhcCBwbGFjZXNcclxuICAgIGVsc2Uge1xyXG4gICAgICAvL3RoZSBnYW1lIHRoYXQgd2FzIGJlaW5nIGRyYWdnZWRcclxuICAgICAgY29uc3QgZHJhZ2dlZEdhbWUgPSBOdW1iZXIoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIikpO1xyXG4gICAgICBjb25zdCB0ZW1wID0gbmV3RmF2ZUdhbWVzW2Ryb3BUYXJnZXRdO1xyXG4gICAgICBuZXdGYXZlR2FtZXNbZHJvcFRhcmdldF0gPSBuZXdGYXZlR2FtZXNbZHJhZ2dlZEdhbWVdO1xyXG4gICAgICBuZXdGYXZlR2FtZXNbZHJhZ2dlZEdhbWVdID0gdGVtcDtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKG5ld0ZhdmVHYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHJhZ2dlZCBnYW1lIHdpbGwgYmUgYWRkZWQgdG8gdGhlXHJcbiAgICogZW5kIG9mIHRoZSBsaXN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRyb3BHYW1lT25Db250YWluZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBjb25zdCBuZXdGYXZlR2FtZXMgPSBbLi4uZGlzcGxheWVkRmF2b3JpdGVHYW1lc107XHJcbiAgICBjb25zdCBuZXdHYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAvL2RhdGFUcmFuc2ZlciB3aWxsIGNvbnRhaW4gYSBqcyBvYmplY3QgaWYgdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZFxyXG4gICAgLy9pcyBmcm9tIHNlYXJjaCByZXN1bHRzLCBtZWFuaW5nIGEgbmV3IGdhbWUgaXMgYmVpbmcgYWRkZWRcclxuICAgIC8vdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAgIGlmIChuZXdHYW1lKSB7XHJcbiAgICAgIGNvbnN0IG5ld0dhbWVBc09iamVjdCA9IEpTT04ucGFyc2UobmV3R2FtZSk7XHJcbiAgICAgIGlmIChnYW1lQWxyZWFkeUV4aXN0cyhuZXdHYW1lQXNPYmplY3QpKSByZXR1cm47XHJcblxyXG4gICAgICBuZXdGYXZlR2FtZXMucHVzaChuZXdHYW1lQXNPYmplY3QpO1xyXG4gICAgfVxyXG4gICAgLy9pZiB0aGVyZSBpcyBubyBqcyBvYmplY3QsIHRoZW4gdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZCBpcyBhbiBhbHJlYWR5XHJcbiAgICAvL2V4aXN0aW5nIGdhbWUuIGRyYWdnZWQgZ2FtZSBpcyBhZGRlZCB0byB0aGUgZW5kIGFuZCByZXN0IGFyZSBzaGlmdGVkIHVwXHJcbiAgICBlbHNlIHtcclxuICAgICAgbGV0IG5ld1BvcyA9IE51bWJlcihlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKSk7XHJcbiAgICAgIGxldCBkcmFnZ2VkR2FtZSA9IG5ld0ZhdmVHYW1lc1tuZXdQb3NdO1xyXG4gICAgICAvL3NoaWZ0IGV2ZXJ5dGhpbmcgdG93YXJkcyB0aGUgZnJvbnRcclxuICAgICAgZm9yICg7IG5ld1BvcyA8IG5ld0ZhdmVHYW1lcy5sZW5ndGggLSAxOyBuZXdQb3MrKylcclxuICAgICAgICBuZXdGYXZlR2FtZXNbbmV3UG9zXSA9IG5ld0ZhdmVHYW1lc1tuZXdQb3MgKyAxXTtcclxuXHJcbiAgICAgIC8vYWRkIGRyYWdnZWRHYW1lIGJhY2sgdG8gdGhlIGVuZFxyXG4gICAgICBuZXdGYXZlR2FtZXNbbmV3UG9zXSA9IGRyYWdnZWRHYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMobmV3RmF2ZUdhbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZXMgYSBnYW1lIGZyb20gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBnYW1lSWQgdGhlIGlkIG9mIGdhbWUgdG8gYmUgZGVsZXRlZFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRlbGV0ZUdhbWUoZ2FtZUlkKSB7XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKFxyXG4gICAgICBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLmZpbHRlcigoZ2FtZSkgPT4gZ2FtZS5pZCAhPT0gZ2FtZUlkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIGVkaXRpbmcgaXMgY2FuY2VsbGVkLiBTZXRzIGRpc3BsYXllZCBmYXZvcml0ZSBnYW1lc1xyXG4gICAqIHRvIGFjdHVhbCBmYXZvcml0ZSBnYW1lcy5cclxuICAgKi9cclxuICBmdW5jdGlvbiByb2xsYmFja0NoYW5nZXMoKSB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKGZhdm9yaXRlR2FtZXMpO1xyXG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNhdmVDaGFuZ2VzKCkge1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xyXG4gICAgY29uc3QgZmF2ZUdhbWVJZHMgPSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLm1hcCgoZ2FtZSkgPT4gZ2FtZS5pZCk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9mYXZvcml0ZXMvJHtwcm9wcy5pZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZmF2ZUdhbWVJZHMpLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRGYXZvcml0ZUdhbWVzKGRpc3BsYXllZEZhdm9yaXRlR2FtZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBnYW1lIHRvIHRoZSBlbmQgb2YgZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBnYW1lIGdhbWUgb2JqZWN0XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gb25BZGQoZ2FtZSkge1xyXG4gICAgaWYgKGdhbWVBbHJlYWR5RXhpc3RzKGdhbWUpKSByZXR1cm47XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKFsuLi5kaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLCBnYW1lXSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgYnkgR2FtZXMgaW4gbW9iaWxlIHZpZXcgdG8gY2hhbmdlIHBvc2l0aW9ucyBpbiB0aGUgZmF2ZSBnYW1lIGxpc3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY3VyckluZGV4IHRoZSBpbmRleCBvZiB0aGUgZ2FtZSB0aGF0IGlzIGNoYW5naW5nIHBvc2l0aW9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5leHRJbmRleCB0aGUgaW5kZXggdGhlIGdhbWUgaXMgdHJ5aW5nIHRvIG1vdmUgdG9cclxuICAgKi9cclxuICBmdW5jdGlvbiBjaGFuZ2VQb3NpdGlvbihjdXJySW5kZXgsIG5leHRJbmRleCkge1xyXG4gICAgY29uc3QgbmV3RmF2ZUdhbWVzID0gWy4uLmRpc3BsYXllZEZhdm9yaXRlR2FtZXNdO1xyXG4gICAgY29uc3QgdGVtcCA9IG5ld0ZhdmVHYW1lc1tuZXh0SW5kZXhdO1xyXG4gICAgbmV3RmF2ZUdhbWVzW25leHRJbmRleF0gPSBuZXdGYXZlR2FtZXNbY3VyckluZGV4XTtcclxuICAgIG5ld0ZhdmVHYW1lc1tjdXJySW5kZXhdID0gdGVtcDtcclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMobmV3RmF2ZUdhbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhIGdhbWUgaXMgYWxyZWFkeSBpbiBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gbGlzdE9mR2FtZXMgZ2FtZSBqc29uIG9iamVjdFxyXG4gICAqIEByZXR1cm5zIHRydWUgaWYgZ2FtZSBhbHJlYWR5IGV4aXN0cywgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZ2FtZUFscmVhZHlFeGlzdHMoZ2FtZSkge1xyXG4gICAgZm9yIChjb25zdCBnIG9mIGRpc3BsYXllZEZhdm9yaXRlR2FtZXMpIHtcclxuICAgICAgY29uc29sZS5sb2coYCR7Zy5pZH0gJHtnYW1lLmlkfWApO1xyXG4gICAgICBpZiAoZy5pZCA9PT0gZ2FtZS5pZCkgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvL2dldCBhIGxpc3Qgb2YgR2FtZSBjb21wb25lbnRzIGNvcnJlc3BvbmRpbmcgdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAvL2VhY2ggaXMgZ2l2ZW4gYSBkYXRhLWluZGV4IGF0dHJpYnV0ZSB0aGF0IGNvcnJlc3BvbmRzIHRvXHJcbiAgLy93aGF0IHBvc2l0aW9uIGluIHRoZSBsaXN0IHRoZXkgYXJlLiB0aGlzIHdpbGwgYmUgdXNlZCBkdXJpbmdcclxuICAvL2VkaXRpbmcgZmF2b3JpdGUgZ2FtZXMuXHJcbiAgY29uc3QgZmF2b3JpdGVHYW1lc0xpc3QgPSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLm1hcCgoZ2FtZSwgaW5kZXgpID0+IChcclxuICAgIDxHYW1lXHJcbiAgICAgIGtleT17Z2FtZS5pZH1cclxuICAgICAgZ2FtZUlkPXtnYW1lLmlkfVxyXG4gICAgICBnYW1lTmFtZT17Z2FtZS5uYW1lfVxyXG4gICAgICBnYW1lQ292ZXJVcmw9e2dhbWUuY292ZXJ1cmx9XHJcbiAgICAgIGlzRWRpdGluZz17aXNFZGl0aW5nfVxyXG4gICAgICBkYXRhLWluZGV4PXtcIlwiICsgaW5kZXh9XHJcbiAgICAgIGRyYWdnYWJsZT17aXNFZGl0aW5nICsgXCJcIn1cclxuICAgICAgb25EcmFnU3RhcnQ9e2lzRWRpdGluZyA/IHN0YXJ0RHJhZ0dhbWUgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uRHJhZ092ZXI9e2lzRWRpdGluZyA/IGRyYWdPdmVyIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRyb3A9e2lzRWRpdGluZyA/IGRyb3BHYW1lT25HYW1lIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRlbGV0ZT17ZGVsZXRlR2FtZX1cclxuICAgICAgY2hhbmdlUG9zaXRpb249e2NoYW5nZVBvc2l0aW9ufVxyXG4gICAgICBpc0xhc3Q9e2luZGV4ID09PSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLmxlbmd0aCAtIDF9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge1xyXG4gICAgICAgIC8vb25seSBkaXNwbGF5IFRvb2xiYXIgaWYgdXNlciBpcyBsb2dnZWQgaW5cclxuICAgICAgICBwcm9wcy50b29sYmFySWQgJiYgKFxyXG4gICAgICAgICAgPFRvb2xiYXIgdXNlcklkPXtwcm9wcy50b29sYmFySWR9IHByb2ZpbGVQaWM9e3Byb3BzLnVzZXJQcm9maWxlUGljfSAvPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcGFnZS1oZWFkZXIgbWItMyBtdC0yXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtwcm9wcy5wcm9maWxlUGljfVxyXG4gICAgICAgICAgYWx0PXtgJHtwcm9wcy5kaXNwbGF5TmFtZX0ncyBwcm9maWxlIHBpY3R1cmVgfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1wcm9maWxlLXBpYyByb3VuZGVkLWNpcmNsZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0xIGQtaW5saW5lXCI+e3Byb3BzLmRpc3BsYXlOYW1lfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHVzZXItcGFnZS1tYWluICR7aXNFZGl0aW5nICYmIFwiZC1tZC1mbGV4IHJvdW5kZWQtbGdcIn1gfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2B1c2VyLXBhZ2UtZ2FtZXMgcm91bmRlZC1sZyBkLWZsZXggZmxleC1jb2x1bW4gJHtcclxuICAgICAgICAgICAgaXNFZGl0aW5nID8gXCJpcy1lZGl0aW5nXCIgOiBcIm0tYXV0b1wiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlLWdhbWVzLWxpc3QgZ2FtZS1saXN0XCI+XHJcbiAgICAgICAgICAgIHtmYXZvcml0ZUdhbWVzTGlzdH1cclxuICAgICAgICAgICAge2lzRWRpdGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkcm9wLXNwYWNlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTMgbXgtMlwiXHJcbiAgICAgICAgICAgICAgICBvbkRyb3A9e2Ryb3BHYW1lT25Db250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXtkcmFnT3Zlcn1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWJhclwiPlxyXG4gICAgICAgICAgICB7cHJvcHMuaWQgJiZcclxuICAgICAgICAgICAgICAoIWlzRWRpdGluZyA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cm9sbGJhY2tDaGFuZ2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlQ2hhbmdlc30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvck1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2lzRWRpdGluZyAmJiA8R2FtZVNlYXJjaEJveCBvbkFkZD17b25BZGR9IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb250ZXh0LnJlcy5sb2NhbHMpKSxcclxuICB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=