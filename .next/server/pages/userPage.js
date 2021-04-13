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
  }, "Search"), searchPage >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, searchPage > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return changePage(searchPage - 1);
    },
    className: "btn btn-secondary"
  }, "Prev"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "page-number",
    className: "d-none"
  }, "Page:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "page-number",
    disabled: true,
    value: searchPage + 1
  }), hasNext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return changePage(searchPage + 1);
    },
    className: "btn btn-secondary"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybUZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYW1lU2VhcmNoQm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZHJlbiIsImNoaWxkIiwidmFsdWUiLCJmaWVsZFZhbHVlcyIsInNldEZpZWxkVmFsdWVzIiwiZmllbGRWYWxpZGF0b3JzIiwidXNlUmVmIiwiaW5kZXgiLCJjbG9uZUVsZW1lbnQiLCJhZGRWYWxpZGF0b3IiLCJ2YWxpZGF0b3IiLCJjdXJyZW50IiwicHVzaCIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwicGFyZW50SWQiLCJpZCIsImlubGluZSIsInN1Ym1pdEJ0biIsImJ0bkNsYXNzIiwic3VibWl0QnRuVGV4dCIsImlubmVyRm9ybSIsImUiLCJuZXdGaWVsZFZhbHVlcyIsImkiLCJ0YXJnZXQiLCJ2YWxpZGF0ZUFsbEZpZWxkcyIsImVycm9ySW5mbyIsIm9uU3VibWl0IiwiYWN0aW9uIiwibWV0aG9kIiwiY2xhc3NOYW1lIiwiRm9ybUZpZWxkVGVtcGxhdGUiLCJ0b0FycmF5IiwiY29udHJvbCIsImdyb3VwQ2xhc3MiLCJUZXh0RmllbGQiLCJpbnB1dElkIiwibGFiZWwiLCJtaW5MZW5ndGgiLCJtaW4iLCJtYXhMZW5ndGgiLCJtYXgiLCJ2YWxpZGF0b3JBZGRlZCIsImlucHV0RmllbGQiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0ZSIsImVsZW1lbnQiLCJ2YWxpZGl0eVN0YXRlIiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJtZXNzYWdlIiwidG9vU2hvcnQiLCJ0b29Mb25nIiwibmFtZSIsInJlcXVpcmVkIiwiRW1haWxGaWVsZCIsImxhYmVsTmFtZSIsInR5cGVNaXNtYXRjaCIsIlBhc3N3b3JkRmllbGQiLCJIaWRkZW5GaWVsZCIsIkdhbWUiLCJkYXRhSW5kZXgiLCJOdW1iZXIiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJkcmFnZ2FibGUiLCJpc0VkaXRpbmciLCJnYW1lQ292ZXJVcmwiLCJnYW1lTmFtZSIsImNoYW5nZVBvc2l0aW9uIiwiaXNMYXN0Iiwib25EZWxldGUiLCJnYW1lSWQiLCJvbkFkZCIsIkdhbWVTZWFyY2hCb3giLCJkaXNwbGF5ZWRTZWFyY2hUZXJtIiwic2V0RGlzcGxheWVkU2VhcmNoVGVybSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VhcmNoUGFnZSIsInNldFNlYXJjaFBhZ2UiLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiaGFzTmV4dCIsInNldEhhc05leHQiLCJmaXJzdFJlbmRlciIsInN0YXJ0RHJhZ0dhbWUiLCJnYW1lIiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkcmFnT3ZlciIsInByZXZlbnREZWZhdWx0IiwiZHJvcEVmZmVjdCIsImRpc3BsYXllZFNlYXJjaFJlc3VsdHMiLCJjb3ZlcnVybCIsImhhbmRsZVNlYXJjaCIsImZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzIiwiY2hhbmdlUGFnZSIsInBhZ2VOdW1iZXIiLCJ0ZXJtIiwicGFnZSIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJyZXN1bHRzIiwibXNnIiwiVGVzdCIsIm9uQ2xpY2siLCJUb29sYmFyIiwic2hvd0Ryb3Bkb3duIiwic2V0U2hvd0Ryb3Bkb3duIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInVzZXJJZCIsInByb2ZpbGVQaWMiLCJVc2VyUGFnZSIsImdhbWVzIiwiZmF2b3JpdGVHYW1lcyIsInNldEZhdm9yaXRlR2FtZXMiLCJkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzIiwic2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyIsInNldElzRWRpdGluZyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZHJvcEdhbWVPbkdhbWUiLCJuZXdGYXZlR2FtZXMiLCJuZXdHYW1lIiwiZ2V0RGF0YSIsImRyb3BUYXJnZXQiLCJuZXdHYW1lQXNPYmplY3QiLCJwYXJzZSIsImdhbWVBbHJlYWR5RXhpc3RzIiwibGVuZ3RoIiwiaG9sZGVyIiwidGVtcCIsImRyYWdnZWRHYW1lIiwiZHJvcEdhbWVPbkNvbnRhaW5lciIsIm5ld1BvcyIsImRlbGV0ZUdhbWUiLCJmaWx0ZXIiLCJyb2xsYmFja0NoYW5nZXMiLCJzYXZlQ2hhbmdlcyIsImZhdmVHYW1lSWRzIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiaGVhZGVycyIsImVycm9yIiwiY3VyckluZGV4IiwibmV4dEluZGV4IiwiZyIsImZhdm9yaXRlR2FtZXNMaXN0IiwidG9vbGJhcklkIiwidXNlclByb2ZpbGVQaWMiLCJkaXNwbGF5TmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJsb2NhbHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdXNlclBhZ2UuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEdlbmVyYWwgZm9ybSBjb21wb25lbnQgdGhhdCB2YWxpZGF0ZXMgYW5kIGNvbnRyb2xzIHRoZSBzdGF0ZVxyXG4gKiBvZiBhbGwgb2YgaXRzIGZpZWxkcy4gQ2hpbGRyZW4gb2YgRm9ybSBzaG91bGQgYmUgYSBsaXN0IG9mIEZvcm1FbGVtZW50cy5cclxuICpcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIGlkIHtzdHJpbmd9IGZvcm0gaHRtbEVsZW1lbnQncyBpZFxyXG4gKlxyXG4gKiAtIG9uU3VibWl0IHtmdW5jdGlvbihldmVudCwgb2JqZWN0KX0gY2FsbGJhY2sgZm9yIHdoZW4gZm9ybSBzdWJtaXRzLlxyXG4gKiAgIEZvcm0gd2lsbCBzZW5kIHR3byBhcmd1bWVudHMsIHRoZSBmaXJzdCBpcyB0aGUgZXZlbnQsIHRoZSBzZWNvbmRcclxuICogICBpcyB0aGUgZXJyb3IgaW5mbyBvYmplY3QuIElmIG9uZSBvZiB0aGUgRm9ybUZpZWxkcyB3aXRoaW4gdGhlIEZvcm1cclxuICogICB3ZXJlIG5vdCB2YWxpZCwgdGhlIHNlY29uZCBhcmd1bWVudCB3aWxsIGJlIGFuIG9iamVjdCBjb250YWluaW5nXHJcbiAqICAgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVycm9yLiBJZiBldmVyeXRoaW5nIHdhcyB2YWxpZCwgaXQgd2lsbCBiZSBudWxsLlxyXG4gKlxyXG4gKiAtIHN1Ym1pdEJ0blRleHQge3N0cmluZ30gdGhlIHRleHRDb250ZW50IGZvciB0aGUgc3VibWl0IGJ1dHRvblxyXG4gKlxyXG4gKiAtIGFjdGlvbj8ge3N0cmluZ30gdmFsdWUgZm9yIGZvcm0ncyBhY3Rpb24gYXR0cmlidXRlXHJcbiAqXHJcbiAqIC0gbWV0aG9kPyB7c3RyaW5nfSB2YWx1ZSBmb3IgZm9ybSdzIG1ldGhvZCBhdHRyaWJ1dGVcclxuICpcclxuICogLSBpbmxpbmUge2Jvb2xlYW59IHdoZXRoZXIgdGhpcyBpcyBhbiBpbmxpbmUgZm9ybSBvciBub3RcclxuICpcclxuICogLXByb3BzLmNoaWxkcmVuIHNob3VsZCBiZSBhIGxpc3Qgb2YgRm9ybUZpZWxkIGVsZW1lbnRzLiBFYWNoIEZvcm1GaWVsZFxyXG4gKiAgc2hvdWxkIGJlIGluaXRpYWxpemVkIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSBwcm9wLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybShwcm9wcykge1xyXG4gIC8vYXJyYXkgb2YgdmFsdWVzIGZvciBhbGwgY2hpbGRyZW4gKEZvcm1GaWVsZHMpXHJcbiAgLy9pbml0aWFsaXplcyBzdGF0ZSB0byBiZSBlcXVhbCB0byB0aGUgaW5pdGlhbCB2YWx1ZSBnaXZlbiBieVxyXG4gIC8vcGFyZW50IGNvbXBvbmVudFxyXG4gIGNvbnN0IFtmaWVsZFZhbHVlcywgc2V0RmllbGRWYWx1ZXNdID0gdXNlU3RhdGUoXHJcbiAgICBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCkgPT4gY2hpbGQucHJvcHMudmFsdWUpXHJcbiAgKTtcclxuXHJcbiAgLy9saXN0IG9mIHZhbGlkYXRvcnMgb2YgYWxsIG9mIHRoaXMgRm9ybSdzIEZvcm1GaWVsZHNcclxuICBjb25zdCBmaWVsZFZhbGlkYXRvcnMgPSB1c2VSZWYoW10pO1xyXG5cclxuICAvL3Rha2VzIGNvbnRyb2wgb2YgY2hpbGRyZW5zIHN0YXRlIGFuZCBwYXNzZXMgb3duIHByb3BzXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+XHJcbiAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgdmFsdWU6IGZpZWxkVmFsdWVzW2luZGV4XSxcclxuICAgICAgYWRkVmFsaWRhdG9yOiAodmFsaWRhdG9yKSA9PiBmaWVsZFZhbGlkYXRvcnMuY3VycmVudC5wdXNoKHZhbGlkYXRvciksXHJcbiAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgIHBhcmVudElkOiBwcm9wcy5pZCwgLy9hZGQgcGFyZW50IGlkIHRvIHNvIEZvcm1GaWVsZCBjYW4gbWFrZSB1bmlxdWUgaWRzIGZvciBpdHMgZWxlbWVudHNcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIGlubGluZTogcHJvcHMuaW5saW5lLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBjb25zdCBzdWJtaXRCdG4gPSAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ0biBidG4tcHJpbWFyeSAke3Byb3BzLmJ0bkNsYXNzfWB9IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAge3Byb3BzLnN1Ym1pdEJ0blRleHQgfHwgXCJTdWJtaXRcIn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcblxyXG4gIC8vd2hhdCB0byBkaXNwbGF5IGluc2lkZSB0aGUgZm9ybVxyXG4gIC8vaWYgaXRzIGFuIGlubGluZSBmb3JtLCBwdXQgYWxsIGNoaWxkcmVuIGFuZCBidXR0b24gaW4gb25lIHJvd1xyXG4gIC8vZWxzZSBkaXNwbGF5IGNoaWxkcmVuIGFzIHRoZXkgYXJlXHJcbiAgY29uc3QgaW5uZXJGb3JtID0gcHJvcHMuaW5saW5lID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7c3VibWl0QnRufVxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDw+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAge3N1Ym1pdEJ0bn1cclxuICAgIDwvPlxyXG4gICk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgdmFsdWUgY2hhbmdlcyBmb3IgYWxsIG9mIGEgRm9ybSdzIEZvcm1GaWVsZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IEZvcm1GaWVsZCdzIGluZGV4IHByb3BcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSwgaW5kZXgpIHtcclxuICAgIC8vdGhlIGluZGV4IHByb3Agb2YgZWFjaCBGb3JtRmllbGQgYW5kIGZpZWxkVmFsdWVzIGFyZSBwYXJhbGxlbFxyXG4gICAgLy9zbyBpZiBhIEZvcm1GaWVsZCBwYXNzZXMgaXQncyBwcm9wcy5pbmRleCwgd2UgY2FuIHNldFxyXG4gICAgLy90aGUgY29ycmVjdCBzdGF0ZVxyXG4gICAgY29uc3QgbmV3RmllbGRWYWx1ZXMgPSBmaWVsZFZhbHVlcy5tYXAoKHZhbHVlLCBpKSA9PlxyXG4gICAgICBpID09PSBpbmRleCA/IGUudGFyZ2V0LnZhbHVlIDogdmFsdWVcclxuICAgICk7XHJcblxyXG4gICAgc2V0RmllbGRWYWx1ZXMobmV3RmllbGRWYWx1ZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbHMgZXZlcnkgRm9ybUZpZWxkJ3MgdmFsaWRhdG9yIGZ1bmN0aW9uLiBJZiBhbnkgZmllbGRcclxuICAgKiBpcyBpbnZhbGlkLCB3aWxsIHNlbmQgdGhlIGVycm9yIGluZm8gb2JqZWN0IHRvIHBhcmVudCBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVBbGxGaWVsZHMoZSkge1xyXG4gICAgZm9yIChjb25zdCB2YWxpZGF0b3Igb2YgZmllbGRWYWxpZGF0b3JzLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgZXJyb3JJbmZvID0gdmFsaWRhdG9yKCk7XHJcbiAgICAgIGlmIChlcnJvckluZm8pIHJldHVybiBwcm9wcy5vblN1Ym1pdChlLCBlcnJvckluZm8pO1xyXG4gICAgfVxyXG4gICAgcHJvcHMub25TdWJtaXQoZSwgbnVsbCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICBvblN1Ym1pdD17dmFsaWRhdGVBbGxGaWVsZHN9XHJcbiAgICAgICAgbm9WYWxpZGF0ZT17dHJ1ZX1cclxuICAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cclxuICAgICAgICBtZXRob2Q9e3Byb3BzLm1ldGhvZH1cclxuICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpbm5lckZvcm19XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEZvcm1GaWVsZHMgYXJlIG1lYW50IHRvIGJlIHVzZWQgd2l0aCB0aGUgRm9ybSBjb21wb25lbnQuXHJcbiAqIFRoZXkgYXJlIGEgY29tYmluYXRpb24gb2YgYSBsYWJlbCBhbmQgYSBjb3JyZXNwb25kaW5nIGlucHV0IGVsZW1lbnQgb2Ygc29tZSBraW5kLlxyXG4gKiBUaGV5IG1ha2UgdXAgdGhlIGZpZWxkcyBvZiBhIEZvcm0gY29tcG9uZW50LiBFYWNoIEZvcm1GaWVsZCBoYXMgaXRzIG93blxyXG4gKiB2YWxpZGF0b3IgZnVuY3Rpb24gdGhhdCBjaGVja3MgdGhlIHZhbGlkaXR5IG9mIGl0cyBpbnB1dC4gRm9ybUZpZWxkIHZhbGlkYXRvcnNcclxuICogYXJlIGNhbGxlZCBieSBpdHMgcGFyZW50IEZvcm0uIEZvcm1GaWVsZHMgc2hvdWxkIGJlIHRoZSBjaGlsZHJlbiBvZiBhIEZvcm1cclxuICogY29tcG9uZW50IGFuZCBzaG91bGQgYmUgaW5pdGlhbGllZCB3aXRoIGFuIGluaXRpYWwgdmFsdWUgcHJvcC4gQWZ0ZXIgZmlyc3QgcmVuZGVyLFxyXG4gKiB0aGUgRm9ybSBjb21wb25lbnQgd2lsbCB0YWtlIGNvbnRyb2wgb2YgdGhlIEZvcm1GaWVsZCdzIHZhbHVlIHN0YXRlLlxyXG4gKlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBDb21tb24gbGF5b3V0IHRlbXBsYXRlIHRoYXQgRm9ybUZpZWxkcyB1c2VcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIGV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIGdyb3VwQ2xhc3Mge3N0cn0gY3NzIGNsYXNzIGZvciB0aGUgZm9ybS1ncm91cCBjb250YWluaW5nIHRoZSBpbnB1dFxyXG4gKiAtIGNoaWxkcmVuOlxyXG4gKiAtIEZvcm1GaWVsZCdzIGNvbnRyb2xcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIEZvcm1GaWVsZFRlbXBsYXRlKHByb3BzKSB7XHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKTtcclxuICAvL3ByZXNlcnZlIGV4aXN0aW5nIGNzcyBjbGFzc2VzICsgYWRkIGJvb3RzdHJhcCBjbGFzc2VzXHJcbiAgY29uc3QgY29udHJvbCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlblswXSwge1xyXG4gICAgY2xhc3NOYW1lOlxyXG4gICAgICAoY2hpbGRyZW5bMF0uY2xhc3NOYW1lIHx8IFwiXCIpICtcclxuICAgICAgYCBmb3JtLWNvbnRyb2wgJHtwcm9wcy5pbmxpbmUgPyBcInctMTAwXCIgOiBcInctNzVcIn1gLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Ake3Byb3BzLmlubGluZSA/IFwiXCIgOiBcImZvcm0tZ3JvdXAgbS0zXCJ9ICR7cHJvcHMuZ3JvdXBDbGFzc31gfVxyXG4gICAgPlxyXG4gICAgICB7Y29udHJvbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vZG9udCB1c2UgdGhlIGFkbyB2YWNhdGlvbi90aW1lb2ZmIGZvciBob2xpZGF5IGp1c3QgZG9udCBwdXQgYW55IHRpbWVcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmFsIHRleHQgaW5wdXQgZmllbGQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsIHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsXHJcbiAqIC0gbmFtZSB7c3RyaW5nfSBuYW1lIGZvciBpbnB1dCBlbGVtZW50XHJcbiAqIC0gcmVxdWlyZWQ/IHtib29sZWFufSB3aGV0aGVyIHRoaXMgRm9ybUZpZWxkIGlzIHJlcXVpcmVkIG9yIG5vdFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKiAtIG1heD8ge251bWJlcn0gbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRleHRGaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke3Byb3BzLmxhYmVsfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heDtcclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBpbnB1dEZpZWxkLmN1cnJlbnQ7XHJcbiAgICBjb25zdCB2YWxpZGl0eVN0YXRlID0gZWxlbWVudC52YWxpZGl0eTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS52YWx1ZU1pc3NpbmcpXHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGAke3Byb3BzLmxhYmVsfSBpcyByZXF1aXJlZC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29TaG9ydClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtwcm9wcy5sYWJlbH0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7cHJvcHMubGFiZWx9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1GaWVsZFRlbXBsYXRlIGdyb3VwQ2xhc3M9e3Byb3BzLmdyb3VwQ2xhc3N9IGlubGluZT17cHJvcHMuaW5saW5lfT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9e2lucHV0SWR9XHJcbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWUgfHwgXCJcIn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uQ2hhbmdlKGUsIHByb3BzLmluZGV4KX1cclxuICAgICAgICByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgbWluTGVuZ3RoPXttaW5MZW5ndGh9XHJcbiAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLmxhYmVsfVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIElucHV0IGZpZWxkIGZvciBlbWFpbHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsPyB7c3RyaW5nfSBGb3JtRmllbGQncyBsYWJlbCAoZGVmYXVsdCBsYWJlbCBpcyBFbWFpbClcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSByZXF1aXJlZD8ge2Jvb2xlYW59IHdoZXRoZXIgdGhpcyBGb3JtRmllbGQgaXMgcmVxdWlyZWQgb3Igbm90XHJcbiAqIC0gbWluPyB7bnVtYmVyfSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqIC0gbWF4PyB7bnVtYmVyfSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRW1haWxGaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGxhYmVsTmFtZSA9IHByb3BzLmxhYmVsIHx8IFwiRW1haWxcIjtcclxuICBjb25zdCBpbnB1dElkID0gYGZvcm0tZmllbGQtJHtsYWJlbE5hbWV9LSR7cHJvcHMucGFyZW50SWR9YDtcclxuICBjb25zdCBtaW5MZW5ndGggPSBwcm9wcy5taW47XHJcbiAgY29uc3QgbWF4TGVuZ3RoID0gcHJvcHMubWF4IHx8IDUwO1xyXG5cclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBpZiBpbnB1dCBpcyB2YWxpZCwgcmV0dXJucyBudWxsLiBPdGhlcndpc2UsIHJldHVybnMgYW4gb2JqZWN0XHJcbiAgICogY29udGFpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVycm9yXHJcbiAgICoge21lc3NhZ2U6IGVycm9yIG1lc3NhZ2UsIGVsZW1lbnQ6IHJlZmVyZW5jZSB0byBIdG1sRWxlbWVudCB0aGF0IGNvbnRhaW5zIGVycm9yfVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGlucHV0RmllbGQuY3VycmVudDtcclxuICAgIGNvbnN0IHZhbGlkaXR5U3RhdGUgPSBlbGVtZW50LnZhbGlkaXR5O1xyXG5cclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnZhbHVlTWlzc2luZylcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBpcyByZXF1aXJlZC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50eXBlTWlzbWF0Y2gpXHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBhbiBlbWFpbC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29TaG9ydClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IG11c3QgYmUgYXQgbGVhc3QgJHttaW5MZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29Mb25nKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGUgZ3JvdXBDbGFzcz17cHJvcHMuZ3JvdXBDbGFzc30gaW5saW5lPXtwcm9wcy5pbmxpbmV9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD17aW5wdXRJZH1cclxuICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSwgcHJvcHMuaW5kZXgpfVxyXG4gICAgICAgIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17bGFiZWxOYW1lfVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIElucHV0IGZpZWxkIGZvciBwYXNzd29yZHMuIElucHV0IGlzIGFsd2F5cyByZXF1aXJlZC5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWw/IHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChkZWZhdWx0IGxhYmVsIGlzIFBhc3N3b3JkKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFBhc3N3b3JkRmllbGQocHJvcHMpIHtcclxuICBjb25zdCBsYWJlbE5hbWUgPSBwcm9wcy5sYWJlbCB8fCBcIlBhc3N3b3JkXCI7XHJcbiAgY29uc3QgaW5wdXRJZCA9IGBmb3JtLWZpZWxkLSR7bGFiZWxOYW1lfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heCB8fCA1MDtcclxuXHJcbiAgY29uc3QgdmFsaWRhdG9yQWRkZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIC8vcmVmZXJlbmNlIHRvIGlucHV0IGh0bWwgZWxlbWVudFxyXG4gIGNvbnN0IGlucHV0RmllbGQgPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuXHJcbiAgLy90byBlbnN1cmUgdmFsaWRhdG9yIG9ubHkgZ2V0cyBhZGRlZCB0byBwYXJlbnQgRm9ybSBvbmNlXHJcbiAgaWYgKCF2YWxpZGF0b3JBZGRlZC5jdXJyZW50KSB7XHJcbiAgICBwcm9wcy5hZGRWYWxpZGF0b3IodmFsaWRhdGUpO1xyXG4gICAgdmFsaWRhdG9yQWRkZWQuY3VycmVudCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdGhlIHZhbGlkaXR5IG9mIGlucHV0XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gaW5wdXRGaWVsZC5jdXJyZW50O1xyXG4gICAgY29uc3QgdmFsaWRpdHlTdGF0ZSA9IGVsZW1lbnQudmFsaWRpdHk7XHJcblxyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudmFsdWVNaXNzaW5nKVxyXG4gICAgICByZXR1cm4geyBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAke21heExlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtRmllbGRUZW1wbGF0ZSBncm91cENsYXNzPXtwcm9wcy5ncm91cENsYXNzfSBpbmxpbmU9e3Byb3BzLmlubGluZX0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uQ2hhbmdlKGUsIHByb3BzLmluZGV4KX1cclxuICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17bGFiZWxOYW1lfVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhpZGRlbiBpbnB1dCBmaWVsZFxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogLSBsYWJlbCB7c3RyaW5nfSBGb3JtRmllbGQncyBsYWJlbCAobm90IHZpc2libGUsIGp1c3QgZm9yIG5hbWluZyBwdXJwb3NlcylcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSB2YWx1ZSB7c3RyaW5nfSBpbnB1dCdzIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSGlkZGVuRmllbGQocHJvcHMpIHtcclxuICBjb25zdCBpbnB1dElkID0gYGZvcm0tZmllbGQtJHtwcm9wcy5sYWJlbH0tJHtwcm9wcy5wYXJlbnRJZH1gO1xyXG5cclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIC8vYWx3YXlzIHZhbGlkXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGUgZ3JvdXBDbGFzcz17cHJvcHMuZ3JvdXBDbGFzc30gaW5saW5lPXtwcm9wcy5pbmxpbmV9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD17aW5wdXRJZH1cclxuICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICBoaWRkZW49e3RydWV9XHJcbiAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgcmVmPXtpbnB1dEZpZWxkfVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBBIGNvbXBvbmVudCByZXByZXNlbnRpbmcgYSBzaW5nbGUgZ2FtZVxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgOlxyXG4gKlxyXG4gKiAgLSBkYXRhLWluZGV4PyB7c3RyaW5nfTogaW5kZXggb2YgZ2FtZSBpbiB0aGUgZmF2ZSBnYW1lIGxpc3RcclxuICpcclxuICogIC0gb25BZGQ/IHtmdW5jdGlvbn06IGNhbGxiYWNrIGZvciBnYW1lcyBpbiBHYW1lU2VhcmNoQm94IHRvIGJlIGFkZGVkIHRvIGZhdm9yaXRlIGdhbWVzIGxpc3QuXHJcbiAqICBVc2VkIGluIG1vYmlsZSB2aWV3LiBNYW5kYXRvcnkgZm9yIEdhbWVzIGluIEdhbWVTZWFyY2hCb3guXHJcbiAqXHJcbiAqICAtIGNoYW5nZVBvc2l0aW9uPyB7ZnVuY3Rpb24oY3VyclBvczogaW50LCBuZXh0UG9zOiBpbnQpfTogY2FsbGJhY2sgZm9yIGdhbWVzIGluIGZhdmUgZ2FtZSBsaXN0IHRvIGNoYW5nZSBwb3NpdGlvbi5cclxuICogVXNlZCBpbiBtb2JpbGUgdmlldy4gTWFuZGF0b3J5IGZvciBHYW1lcyBpbiBmYXZlIGdhbWUgbGlzdC5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKHByb3BzKSB7XHJcbiAgLy9JIGNhc3QgaXQgdG8gbnVtYmVyIHNvIG9mdGVuIG1heWJlIEkgc2hvdWxkIGp1c3Qgc2F2ZSBpdCBobVxyXG4gIGNvbnN0IGRhdGFJbmRleCA9IHByb3BzW1wiZGF0YS1pbmRleFwiXSAmJiBOdW1iZXIocHJvcHNbXCJkYXRhLWluZGV4XCJdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJnYW1lLWNvbnRhaW5lciBjb250YWluZXIgcm91bmRlZCBteS0zIFwiXHJcbiAgICAgIGRhdGEtaW5kZXg9e3Byb3BzW1wiZGF0YS1pbmRleFwiXX1cclxuICAgICAgb25EcmFnU3RhcnQ9e3Byb3BzLm9uRHJhZ1N0YXJ0fVxyXG4gICAgICBvbkRyYWdPdmVyPXtwcm9wcy5vbkRyYWdPdmVyfVxyXG4gICAgICBvbkRyb3A9e3Byb3BzLm9uRHJvcH1cclxuICAgICAgZHJhZ2dhYmxlPXtwcm9wcy5kcmFnZ2FibGV9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtgY29sLTEgJHtwcm9wc1tcImRhdGEtaW5kZXhcIl0gJiYgYHBvcy0ke2RhdGFJbmRleCArIDF9YH1gfT5cclxuICAgICAgICAgIHtwcm9wc1tcImRhdGEtaW5kZXhcIl0gJiYgZGF0YUluZGV4ICsgMSArIFwiLlwifVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BnYW1lLWltZyBjb2wtbWQtMiAke1xyXG4gICAgICAgICAgICBwcm9wcy5pc0VkaXRpbmcgPyBcImNvbC05XCIgOiBcImNvbC0xMVwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17cHJvcHMuZ2FtZUNvdmVyVXJsfVxyXG4gICAgICAgICAgICBhbHQ9e2BDb3ZlciBhcnQgZm9yICR7cHJvcHMuZ2FtZU5hbWV9YH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs5MH1cclxuICAgICAgICAgICAgd2lkdGg9ezkwfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIGQtaW5saW5lLWJsb2NrIG0tYXV0b1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGNoYW5nZS1wb3MtYnV0dG9ucyBkLW1kLW5vbmUgJHtcclxuICAgICAgICAgICAgcHJvcHMuaXNFZGl0aW5nID8gXCJjb2wtMlwiIDogXCJkLW5vbmVcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Byb3BzLmlzRWRpdGluZyAmJiBkYXRhSW5kZXggPiAwICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYW5nZS1wb3MtdXBcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmNoYW5nZVBvc2l0aW9uKGRhdGFJbmRleCwgZGF0YUluZGV4IC0gMSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaS1jYXJldC11cC1maWxsXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3Byb3BzLmlzRWRpdGluZyAmJiAhcHJvcHMuaXNMYXN0ICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYW5nZS1wb3MtZG93blwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlUG9zaXRpb24oZGF0YUluZGV4LCBkYXRhSW5kZXggKyAxKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpLWNhcmV0LWRvd24tZmlsbFwiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BnYW1lLW5hbWUgZC1pbmxpbmUtYmxvY2sgJHtcclxuICAgICAgICAgICAgcHJvcHMuaXNFZGl0aW5nID8gXCJjb2wtbWQtNlwiIDogXCJjb2wtbWQtOVwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cD57cHJvcHMuZ2FtZU5hbWV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7cHJvcHMuaXNFZGl0aW5nICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25EZWxldGUocHJvcHMuZ2FtZUlkKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTMgYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWxldGUgPGkgY2xhc3NOYW1lPVwiYmktdHJhc2gtZmlsbCBteC0xXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vYWRkIGJ1dHRvbiBzaG91bGQgb25seSBhcHBlYXIgb24gZ2FtZXMgaW4gR2FtZVNlYXJjaEJveFxyXG4gICAgICAgICAgLy9kYXRhLWluZGV4IHByb3AgaXMgb25seSBnaXZlbiB0byBnYW1lcyBpbiB0aGUgZmF2b3JpdGUgZ2FtZSBsaXN0XHJcbiAgICAgICAgICAvL3RoZXJlZm9yZSBpZiBubyBkYXRhLWluZGV4LCBpdHMgYSBHYW1lU2VhcmNoQm94IGdhbWVcclxuICAgICAgICAgICFwcm9wc1tcImRhdGEtaW5kZXhcIl0gJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25BZGR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGQtbWQtbm9uZSB3LTEwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGQgPGkgY2xhc3NOYW1lPVwiYmktcGx1cy1jaXJjbGUtZmlsbCBteC0xXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lU2VhcmNoQm94KHByb3BzKSB7XHJcbiAgLy9zZWFyY2ggdGVybSBpbiBzZWFyY2ggYmFyXHJcbiAgY29uc3QgW2Rpc3BsYXllZFNlYXJjaFRlcm0sIHNldERpc3BsYXllZFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy90aGUgYWN0dWFsIHVuZGVybHlpbmcgc2VhcmNoIHRlcm0gcmVnYXJkbGVzcyBvZiB3aGF0cyB0eXBlZFxyXG4gIC8vY2xpY2tpbmcgbmV4dC9wcmV2IHdpbGwgY2hhbmdlIHBhZ2VzIGZvciB0aGlzIHZhbHVlXHJcbiAgLy9jbGlja2luZyBzZWFyY2ggYnV0dG9uIHdpbGwgY2hhbmdlIHRoaXMgdmFsdWVcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShkaXNwbGF5ZWRTZWFyY2hUZXJtKTtcclxuICAvL3BhZ2Ugb2Ygc2VhcmNoIHJlc3VsdHNcclxuICBjb25zdCBbc2VhcmNoUGFnZSwgc2V0U2VhcmNoUGFnZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIC8vbGlzdCBvZiBvYmplY3RzIHRoYXQgd2lsbCBiZSByZXRyaWV2ZWQgZnJvbSBzZWFyY2ggYXBpXHJcbiAgY29uc3QgW3NlYXJjaFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vd2hldGhlciBvciBub3Qgc2VhcmNoIHJlc3VsdHMgYXJlIGN1cnJlbnRseSBsb2FkaW5nXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vZXJyb3IgbWVzc2FnZVxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvL3doZXRoZXIgb3Igbm90IHRoZXJlIGlzIGEgbmV4dCBwYWdlIG9mIHNlYXJjaCByZXN1bHRzXHJcbiAgY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIC8vdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciBpdHMgZmlyc3QgcmVuZGVyIG9yIG5vdFxyXG4gIGNvbnN0IGZpcnN0UmVuZGVyID0gdXNlUmVmKHRydWUpO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydERyYWdHYW1lKGUsIGdhbWUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiLCBKU09OLnN0cmluZ2lmeShnYW1lKSk7XHJcbiAgfVxyXG5cclxuICAvL2RyYWdvdmVyIGhhbmRsZXIgaXMgbmVlZGVkIHRvIG1ha2UgZWxlbWVudFxyXG4gIC8vZHJhZ2dhYmxlXHJcbiAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRpc3BsYXllZFNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzLm1hcCgoZ2FtZSkgPT4gKFxyXG4gICAgPEdhbWVcclxuICAgICAga2V5PXtnYW1lLmlkfVxyXG4gICAgICBnYW1lSWQ9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVOYW1lPXtnYW1lLm5hbWV9XHJcbiAgICAgIGdhbWVDb3ZlclVybD17Z2FtZS5jb3ZlcnVybH1cclxuICAgICAgZHJhZ2dhYmxlPXt0cnVlfVxyXG4gICAgICBvbkRyYWdTdGFydD17KGUpID0+IHN0YXJ0RHJhZ0dhbWUoZSwgZ2FtZSl9XHJcbiAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVyfVxyXG4gICAgICBvbkFkZD17KCkgPT4gcHJvcHMub25BZGQoZ2FtZSl9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGRpc3BsYXllZCBzZWFyY2ggdGVybVxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgc2V0RGlzcGxheWVkU2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHNlYXJjaFRlcm0gdG8gZGlzcGxheWVkU2VhcmNoVGVybVxyXG4gICAqIGFuZCBmZXRjaGVzIHNlYXJjaCByZXN1bHRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZGlzcGxheWVkU2VhcmNoVGVybSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoVGVybShkaXNwbGF5ZWRTZWFyY2hUZXJtKTtcclxuICAgIHNldFNlYXJjaFBhZ2UoMCk7XHJcbiAgICBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyhkaXNwbGF5ZWRTZWFyY2hUZXJtLCAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgcGFnZSBudW1iZXIgZm9yIHNlYXJjaFRlcm1cclxuICAgKiAobm90IGRpc3BsYXllZFNlYXJjaFRlcm0pIGFuZCBmZXRjaGVzIHNlYXJjaFxyXG4gICAqIHJlc3VsdHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZU51bWJlciBuZXcgcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBmdW5jdGlvbiBjaGFuZ2VQYWdlKHBhZ2VOdW1iZXIpIHtcclxuICAgIGlmIChwYWdlTnVtYmVyIDwgMCkgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoUGFnZShwYWdlTnVtYmVyKTtcclxuICAgIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKHNlYXJjaFRlcm0sIHBhZ2VOdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2hlcyBhIHNlYXJjaCBmcm9tIHRoZSBBUEkgYW5kIHBvcHVsYXRlcyBwYWdlXHJcbiAgICogd2l0aCBzZWFyY2ggcmVzdWx0cy4gVGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSBjYWxsZWRcclxuICAgKiB3aXRoIGEgc2VhcmNoIHRlcm0gYW5kIHBhZ2UgbWFudWFsbHkgaW5zdGVhZCBvZiByZWx5aW5nIG9uXHJcbiAgICogY2hlY2tpbmcgc3RhdGUgYXMgcmVhZGluZyBzdGF0ZSBpbW1lZGlhdGVseSBhZnRlciBzZXR0aW5nIGl0XHJcbiAgICogd2lsbCByZXR1cm4gc3RhbGUgdmFsdWVzLiBTbywgd2UgZ2l2ZSBpdCB0aGUgZnJlc2ggdmFsdWVzIG1hbnVhbGx5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlcm0gc2VhcmNoIHRlcm1cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSBzZWFyY2ggcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyh0ZXJtLCBwYWdlKSB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYC9hcGkvc2VhcmNoLyR7dGVybX0vJHtwYWdlfWA7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnkpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhkYXRhLnJlc3VsdHMpO1xyXG4gICAgICAgIHNldEhhc05leHQoZGF0YS5oYXNOZXh0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UocmVzdWx0cy5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKGUubWVzc2FnZSArIFwiXFxuXCIgKyBtc2cpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtc2VhcmNoLWJveCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0cyBnYW1lLWxpc3Qgb3JkZXItMiBvcmRlci1tZC0xXCI+XHJcbiAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cD57ZXJyb3JNZXNzYWdlfTwvcD59XHJcbiAgICAgICAge2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XHJcbiAgICAgICAge2Rpc3BsYXllZFNlYXJjaFJlc3VsdHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1iYXIgb3JkZXItMSBvcmRlci1tZC0yXCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhbWUtc2VhcmNoLWJhclwiIGNsYXNzTmFtZT1cImQtbm9uZVwiPlxyXG4gICAgICAgICAgICBOYW1lIG9mIEdhbWVcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJnYW1lLXNlYXJjaC1iYXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZGlzcGxheWVkU2VhcmNoVGVybX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIG9mIEdhbWUuLi5cIlxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIHtzZWFyY2hQYWdlID49IDAgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtzZWFyY2hQYWdlID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHNlYXJjaFBhZ2UgLSAxKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQcmV2XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFnZS1udW1iZXJcIiBjbGFzc05hbWU9XCJkLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIFBhZ2U6XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPVwicGFnZS1udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFnZSArIDF9XHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAge2hhc05leHQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShzZWFyY2hQYWdlICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCIuL0Zvcm1GaWVsZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QocHJvcHMpIHtcclxuICByZXR1cm4gPGJ1dHRvbiBpZD17cHJvcHMuaWR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PjwvYnV0dG9uPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQsIEhpZGRlbkZpZWxkIH0gZnJvbSBcIi4vRm9ybUZpZWxkc1wiO1xyXG5pbXBvcnQgVGVzdCBmcm9tIFwiLi9UZXN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIGV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIHVzZXJJZCB7bnVtYmVyfSB0aGUgbG9nZ2VkIGluIHVzZXIncyB1c2VyIGlkXHJcbiAqIC0gcHJvZmlsZVBpYyB7c3RyaW5nfSBzcmMgdXJsIGZvciB1c2VyJ3MgcHJvZmlsZSBwaWN0dXJlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb29sYmFyKHByb3BzKSB7XHJcbiAgY29uc3QgW3Nob3dEcm9wZG93biwgc2V0U2hvd0Ryb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUsIGVycm9ySW5mbykge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3JJbmZvKTtcclxuICAgIGlmIChlcnJvckluZm8pIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0b29sYmFyIG0tMFwiPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGlkPVwiVG9vbGJhci1Gb3JtXCJcclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgIHN1Ym1pdEJ0blRleHQ9XCJHbyFcIlxyXG4gICAgICAgIG1ldGhvZD1cImdldFwiXHJcbiAgICAgICAgYWN0aW9uPVwiL3NlYXJjaFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC05XCJcclxuICAgICAgICBidG5DbGFzcz1cImNvbC1tZC0xIGNvbC0yIHB0LTFcIlxyXG4gICAgICAgIGlubGluZT17dHJ1ZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgIG5hbWU9XCJxdWVyeVwiXHJcbiAgICAgICAgICB2YWx1ZT1cIlwiXHJcbiAgICAgICAgICBncm91cENsYXNzPVwiY29sLTEwIGNvbC1tZC0xMSBwdC0xXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxIaWRkZW5GaWVsZCBsYWJlbD1cIlBhZ2VcIiBuYW1lPVwicGFnZVwiIHZhbHVlPVwiMFwiIGdyb3VwQ2xhc3M9XCJkLm5vbmVcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLTMgcHQtMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci1vcHRpb25zXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtgL3VzZXIvJHtwcm9wcy51c2VySWR9YH0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLnByb2ZpbGVQaWN9XHJcbiAgICAgICAgICAgICAgYWx0PXtgWW91ciBwcm9maWxlIHBpY3R1cmVgfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI0NVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RHJvcGRvd24oIXNob3dEcm9wZG93bil9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tYnV0dG9uIG1sLTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktY2FyZXQtZG93bi1maWxsXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1jb250ZW50ICR7XHJcbiAgICAgICAgICAgICAgICBzaG93RHJvcGRvd24gPyBcImQtYmxvY2tcIiA6IFwiZC1ub25lXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9nb3V0XCIgY2xhc3NOYW1lPVwiZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBPdXRcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vY29tcG9uZW50cy9HYW1lXCI7XHJcbmltcG9ydCBHYW1lU2VhcmNoQm94IGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVTZWFyY2hCb3hcIjtcclxuXHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1Rvb2xiYXJcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBUaGUgcGFnZSB0aGF0IGlzIGRpc3BsYXllZCB3aGVuXHJcbiAqIHZpZXdpbmcgYSB1c2VyJ3MgcHJvZmlsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUGFnZShwcm9wcykge1xyXG4gIC8qIHNldHRpbmcgc3RhdGUgKi9cclxuICAvL3RoZSB1c2VyJ3MgYWN0dWFsIGZhdm9yaXRlIGdhbWVzXHJcbiAgY29uc3QgW2Zhdm9yaXRlR2FtZXMsIHNldEZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUocHJvcHMuZ2FtZXMpO1xyXG4gIC8vdGhlIHVzZXIncyBmYXZvcml0ZSBnYW1lIGFzIGN1cnJlbnRseSBkaXNwbGF5ZWQuIHRoZXNlIG1heSBkaWZmZXJcclxuICAvL2Zyb20gYWN0dWFsIGZhdm9yaXRlIGdhbWVzIGR1cmluZyBlZGl0aW5nXHJcbiAgY29uc3QgW2Rpc3BsYXllZEZhdm9yaXRlR2FtZXMsIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUoXHJcbiAgICBmYXZvcml0ZUdhbWVzXHJcbiAgKTtcclxuICAvL3doZXRoZXIgb3Igbm90IHVzZXIgaXMgZWRpdGluZyBmYXZvcml0ZSBnYW1lc1xyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gYSBHYW1lIGlzIGRyYWdnZWQuIEFkZHNcclxuICAgKiB0aGUgR2FtZSdzIGRhdGEtaW5kZXggYXR0cmlidXRlIHRvXHJcbiAgICogRHJhZ0V2ZW50LmRhdGFUcmFuc2ZlciB0byBiZSB1c2VkIGJ5XHJcbiAgICogZHJvcEdhbWUoKSBsYXRlciBvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBzdGFydERyYWdHYW1lKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCk7XHJcbiAgfVxyXG5cclxuICAvL2RyYWdvdmVyIGhhbmRsZXIgaXMgbmVlZGVkIHRvIG1ha2UgZWxlbWVudFxyXG4gIC8vZHJhZ2dhYmxlXHJcbiAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHJhZ2dlZCBnYW1lIHdpbGwgYmUgc3dhcHBlZCB3aXRoIHRoZSBnYW1lXHJcbiAgICogaXQncyBkcm9wcGVkIG9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBkcm9wR2FtZU9uR2FtZShlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IG5ld0ZhdmVHYW1lcyA9IFsuLi5kaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXTtcclxuICAgIGNvbnN0IG5ld0dhbWUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIC8vaW5kZXggb2YgZ2FtZSB0aGF0IHdhcyBkcm9wcGVkIG9uXHJcbiAgICBjb25zdCBkcm9wVGFyZ2V0ID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICAgIC8vZGF0YVRyYW5zZmVyIHdpbGwgY29udGFpbiBhIGpzIG9iamVjdCBpZiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkXHJcbiAgICAvL2lzIGZyb20gc2VhcmNoIHJlc3VsdHMsIG1lYW5pbmcgYSBuZXcgZ2FtZSBpcyBiZWluZyBhZGRlZFxyXG4gICAgLy90byBmYXZvcml0ZSBnYW1lc1xyXG4gICAgaWYgKG5ld0dhbWUpIHtcclxuICAgICAgY29uc3QgbmV3R2FtZUFzT2JqZWN0ID0gSlNPTi5wYXJzZShuZXdHYW1lKTtcclxuICAgICAgaWYgKGdhbWVBbHJlYWR5RXhpc3RzKG5ld0dhbWVBc09iamVjdCkpIHJldHVybjtcclxuICAgICAgLy93ZSByZXBsYWNlIGVsZW1lbnRzIGFzIHdlIGdvLCBldmVudHVhbGx5IHdlIGFuIGVsZW1lbnQgdG8gbmV3RmF2ZUdhbWVzW25ld0ZhdmVHYW1lcy5sZW5ndGhdXHJcbiAgICAgIC8vdGhpcyBpbmNyZWFzZXMgdGhlIGxlbmd0aCBhbmQgdGhlIGxvb3AgZ29lcyBvbiBmb3JldmVyXHJcbiAgICAgIC8vc28gd2Uga2VlcCB0aGUgbGVuZ3RoIG9mIHRoZSBsaXN0IGJlZm9yZSB3ZSBzdGFydFxyXG4gICAgICBjb25zdCBsZW5ndGggPSBuZXdGYXZlR2FtZXMubGVuZ3RoO1xyXG4gICAgICAvL2dhbWUgdG8gYmUgYWRkZWQgaW5cclxuICAgICAgbGV0IGhvbGRlciA9IG5ld0dhbWVBc09iamVjdDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyBpZiAobmV3RmF2ZUdhbWVzW2ldICYmIG5ld0ZhdmVHYW1lc1tpXS5pZCA9PT0gbmV3R2FtZUFzT2JqZWN0LmlkKVxyXG4gICAgICAgIC8vICAgcmV0dXJuO1xyXG4gICAgICAgIC8vc3RhcnQgc3dhcHBpbmcgZnJvbSBkcm9wVGFyZ2V0IG9ud2FyZHNcclxuICAgICAgICBpZiAoaSA+PSBkcm9wVGFyZ2V0KSB7XHJcbiAgICAgICAgICAvL3B1dCBob2xkZXIgaW50byB0aGUgbGlzdCwgdGFrZSB3aGF0IHdhcyB0aGVyZSBhbmQgcHV0IGludG8gaG9sZGVyXHJcbiAgICAgICAgICBjb25zdCB0ZW1wID0gbmV3RmF2ZUdhbWVzW2ldO1xyXG4gICAgICAgICAgbmV3RmF2ZUdhbWVzW2ldID0gaG9sZGVyO1xyXG4gICAgICAgICAgaG9sZGVyID0gdGVtcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vaWYgdGhlcmUgaXMgbm8ganMgb2JqZWN0LCB0aGVuIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWQgaXMgYW4gYWxyZWFkeVxyXG4gICAgLy9leGlzdGluZyBnYW1lIHNvIHdlIGp1c3Qgc3dhcCBwbGFjZXNcclxuICAgIGVsc2Uge1xyXG4gICAgICAvL3RoZSBnYW1lIHRoYXQgd2FzIGJlaW5nIGRyYWdnZWRcclxuICAgICAgY29uc3QgZHJhZ2dlZEdhbWUgPSBOdW1iZXIoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIikpO1xyXG4gICAgICBjb25zdCB0ZW1wID0gbmV3RmF2ZUdhbWVzW2Ryb3BUYXJnZXRdO1xyXG4gICAgICBuZXdGYXZlR2FtZXNbZHJvcFRhcmdldF0gPSBuZXdGYXZlR2FtZXNbZHJhZ2dlZEdhbWVdO1xyXG4gICAgICBuZXdGYXZlR2FtZXNbZHJhZ2dlZEdhbWVdID0gdGVtcDtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKG5ld0ZhdmVHYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHJhZ2dlZCBnYW1lIHdpbGwgYmUgYWRkZWQgdG8gdGhlXHJcbiAgICogZW5kIG9mIHRoZSBsaXN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRyb3BHYW1lT25Db250YWluZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBjb25zdCBuZXdGYXZlR2FtZXMgPSBbLi4uZGlzcGxheWVkRmF2b3JpdGVHYW1lc107XHJcbiAgICBjb25zdCBuZXdHYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAvL2RhdGFUcmFuc2ZlciB3aWxsIGNvbnRhaW4gYSBqcyBvYmplY3QgaWYgdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZFxyXG4gICAgLy9pcyBmcm9tIHNlYXJjaCByZXN1bHRzLCBtZWFuaW5nIGEgbmV3IGdhbWUgaXMgYmVpbmcgYWRkZWRcclxuICAgIC8vdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAgIGlmIChuZXdHYW1lKSB7XHJcbiAgICAgIGNvbnN0IG5ld0dhbWVBc09iamVjdCA9IEpTT04ucGFyc2UobmV3R2FtZSk7XHJcbiAgICAgIGlmIChnYW1lQWxyZWFkeUV4aXN0cyhuZXdHYW1lQXNPYmplY3QpKSByZXR1cm47XHJcblxyXG4gICAgICBuZXdGYXZlR2FtZXMucHVzaChuZXdHYW1lQXNPYmplY3QpO1xyXG4gICAgfVxyXG4gICAgLy9pZiB0aGVyZSBpcyBubyBqcyBvYmplY3QsIHRoZW4gdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZCBpcyBhbiBhbHJlYWR5XHJcbiAgICAvL2V4aXN0aW5nIGdhbWUuIGRyYWdnZWQgZ2FtZSBpcyBhZGRlZCB0byB0aGUgZW5kIGFuZCByZXN0IGFyZSBzaGlmdGVkIHVwXHJcbiAgICBlbHNlIHtcclxuICAgICAgbGV0IG5ld1BvcyA9IE51bWJlcihlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKSk7XHJcbiAgICAgIGxldCBkcmFnZ2VkR2FtZSA9IG5ld0ZhdmVHYW1lc1tuZXdQb3NdO1xyXG4gICAgICAvL3NoaWZ0IGV2ZXJ5dGhpbmcgdG93YXJkcyB0aGUgZnJvbnRcclxuICAgICAgZm9yICg7IG5ld1BvcyA8IG5ld0ZhdmVHYW1lcy5sZW5ndGggLSAxOyBuZXdQb3MrKylcclxuICAgICAgICBuZXdGYXZlR2FtZXNbbmV3UG9zXSA9IG5ld0ZhdmVHYW1lc1tuZXdQb3MgKyAxXTtcclxuXHJcbiAgICAgIC8vYWRkIGRyYWdnZWRHYW1lIGJhY2sgdG8gdGhlIGVuZFxyXG4gICAgICBuZXdGYXZlR2FtZXNbbmV3UG9zXSA9IGRyYWdnZWRHYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMobmV3RmF2ZUdhbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZXMgYSBnYW1lIGZyb20gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBnYW1lSWQgdGhlIGlkIG9mIGdhbWUgdG8gYmUgZGVsZXRlZFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRlbGV0ZUdhbWUoZ2FtZUlkKSB7XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKFxyXG4gICAgICBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLmZpbHRlcigoZ2FtZSkgPT4gZ2FtZS5pZCAhPT0gZ2FtZUlkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIGVkaXRpbmcgaXMgY2FuY2VsbGVkLiBTZXRzIGRpc3BsYXllZCBmYXZvcml0ZSBnYW1lc1xyXG4gICAqIHRvIGFjdHVhbCBmYXZvcml0ZSBnYW1lcy5cclxuICAgKi9cclxuICBmdW5jdGlvbiByb2xsYmFja0NoYW5nZXMoKSB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKGZhdm9yaXRlR2FtZXMpO1xyXG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNhdmVDaGFuZ2VzKCkge1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xyXG4gICAgY29uc3QgZmF2ZUdhbWVJZHMgPSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLm1hcCgoZ2FtZSkgPT4gZ2FtZS5pZCk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9mYXZvcml0ZXMvJHtwcm9wcy5pZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZmF2ZUdhbWVJZHMpLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRGYXZvcml0ZUdhbWVzKGRpc3BsYXllZEZhdm9yaXRlR2FtZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBnYW1lIHRvIHRoZSBlbmQgb2YgZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBnYW1lIGdhbWUgb2JqZWN0XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gb25BZGQoZ2FtZSkge1xyXG4gICAgaWYgKGdhbWVBbHJlYWR5RXhpc3RzKGdhbWUpKSByZXR1cm47XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKFsuLi5kaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLCBnYW1lXSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgYnkgR2FtZXMgaW4gbW9iaWxlIHZpZXcgdG8gY2hhbmdlIHBvc2l0aW9ucyBpbiB0aGUgZmF2ZSBnYW1lIGxpc3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY3VyckluZGV4IHRoZSBpbmRleCBvZiB0aGUgZ2FtZSB0aGF0IGlzIGNoYW5naW5nIHBvc2l0aW9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5leHRJbmRleCB0aGUgaW5kZXggdGhlIGdhbWUgaXMgdHJ5aW5nIHRvIG1vdmUgdG9cclxuICAgKi9cclxuICBmdW5jdGlvbiBjaGFuZ2VQb3NpdGlvbihjdXJySW5kZXgsIG5leHRJbmRleCkge1xyXG4gICAgY29uc3QgbmV3RmF2ZUdhbWVzID0gWy4uLmRpc3BsYXllZEZhdm9yaXRlR2FtZXNdO1xyXG4gICAgY29uc3QgdGVtcCA9IG5ld0ZhdmVHYW1lc1tuZXh0SW5kZXhdO1xyXG4gICAgbmV3RmF2ZUdhbWVzW25leHRJbmRleF0gPSBuZXdGYXZlR2FtZXNbY3VyckluZGV4XTtcclxuICAgIG5ld0ZhdmVHYW1lc1tjdXJySW5kZXhdID0gdGVtcDtcclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMobmV3RmF2ZUdhbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhIGdhbWUgaXMgYWxyZWFkeSBpbiBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gbGlzdE9mR2FtZXMgZ2FtZSBqc29uIG9iamVjdFxyXG4gICAqIEByZXR1cm5zIHRydWUgaWYgZ2FtZSBhbHJlYWR5IGV4aXN0cywgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZ2FtZUFscmVhZHlFeGlzdHMoZ2FtZSkge1xyXG4gICAgZm9yIChjb25zdCBnIG9mIGRpc3BsYXllZEZhdm9yaXRlR2FtZXMpIHtcclxuICAgICAgY29uc29sZS5sb2coYCR7Zy5pZH0gJHtnYW1lLmlkfWApO1xyXG4gICAgICBpZiAoZy5pZCA9PT0gZ2FtZS5pZCkgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvL2dldCBhIGxpc3Qgb2YgR2FtZSBjb21wb25lbnRzIGNvcnJlc3BvbmRpbmcgdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAvL2VhY2ggaXMgZ2l2ZW4gYSBkYXRhLWluZGV4IGF0dHJpYnV0ZSB0aGF0IGNvcnJlc3BvbmRzIHRvXHJcbiAgLy93aGF0IHBvc2l0aW9uIGluIHRoZSBsaXN0IHRoZXkgYXJlLiB0aGlzIHdpbGwgYmUgdXNlZCBkdXJpbmdcclxuICAvL2VkaXRpbmcgZmF2b3JpdGUgZ2FtZXMuXHJcbiAgY29uc3QgZmF2b3JpdGVHYW1lc0xpc3QgPSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLm1hcCgoZ2FtZSwgaW5kZXgpID0+IChcclxuICAgIDxHYW1lXHJcbiAgICAgIGtleT17Z2FtZS5pZH1cclxuICAgICAgZ2FtZUlkPXtnYW1lLmlkfVxyXG4gICAgICBnYW1lTmFtZT17Z2FtZS5uYW1lfVxyXG4gICAgICBnYW1lQ292ZXJVcmw9e2dhbWUuY292ZXJ1cmx9XHJcbiAgICAgIGlzRWRpdGluZz17aXNFZGl0aW5nfVxyXG4gICAgICBkYXRhLWluZGV4PXtcIlwiICsgaW5kZXh9XHJcbiAgICAgIGRyYWdnYWJsZT17aXNFZGl0aW5nICsgXCJcIn1cclxuICAgICAgb25EcmFnU3RhcnQ9e2lzRWRpdGluZyA/IHN0YXJ0RHJhZ0dhbWUgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uRHJhZ092ZXI9e2lzRWRpdGluZyA/IGRyYWdPdmVyIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRyb3A9e2lzRWRpdGluZyA/IGRyb3BHYW1lT25HYW1lIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRlbGV0ZT17ZGVsZXRlR2FtZX1cclxuICAgICAgY2hhbmdlUG9zaXRpb249e2NoYW5nZVBvc2l0aW9ufVxyXG4gICAgICBpc0xhc3Q9e2luZGV4ID09PSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLmxlbmd0aCAtIDF9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge1xyXG4gICAgICAgIC8vb25seSBkaXNwbGF5IFRvb2xiYXIgaWYgdXNlciBpcyBsb2dnZWQgaW5cclxuICAgICAgICBwcm9wcy50b29sYmFySWQgJiYgKFxyXG4gICAgICAgICAgPFRvb2xiYXIgdXNlcklkPXtwcm9wcy50b29sYmFySWR9IHByb2ZpbGVQaWM9e3Byb3BzLnVzZXJQcm9maWxlUGljfSAvPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcGFnZS1oZWFkZXIgbWItMyBtdC0yXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtwcm9wcy5wcm9maWxlUGljfVxyXG4gICAgICAgICAgYWx0PXtgJHtwcm9wcy5kaXNwbGF5TmFtZX0ncyBwcm9maWxlIHBpY3R1cmVgfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1wcm9maWxlLXBpYyByb3VuZGVkLWNpcmNsZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0xIGQtaW5saW5lXCI+e3Byb3BzLmRpc3BsYXlOYW1lfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHVzZXItcGFnZS1tYWluICR7aXNFZGl0aW5nICYmIFwiZC1tZC1mbGV4IHJvdW5kZWQtbGdcIn1gfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2B1c2VyLXBhZ2UtZ2FtZXMgcm91bmRlZC1sZyBkLWZsZXggZmxleC1jb2x1bW4gJHtcclxuICAgICAgICAgICAgaXNFZGl0aW5nID8gXCJpcy1lZGl0aW5nXCIgOiBcIm0tYXV0b1wiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlLWdhbWVzLWxpc3QgZ2FtZS1saXN0XCI+XHJcbiAgICAgICAgICAgIHtmYXZvcml0ZUdhbWVzTGlzdH1cclxuICAgICAgICAgICAge2lzRWRpdGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkcm9wLXNwYWNlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTMgbXgtMlwiXHJcbiAgICAgICAgICAgICAgICBvbkRyb3A9e2Ryb3BHYW1lT25Db250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXtkcmFnT3Zlcn1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWJhclwiPlxyXG4gICAgICAgICAgICB7cHJvcHMuaWQgJiZcclxuICAgICAgICAgICAgICAoIWlzRWRpdGluZyA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cm9sbGJhY2tDaGFuZ2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlQ2hhbmdlc30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvck1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2lzRWRpdGluZyAmJiA8R2FtZVNlYXJjaEJveCBvbkFkZD17b25BZGR9IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb250ZXh0LnJlcy5sb2NhbHMpKSxcclxuICB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=