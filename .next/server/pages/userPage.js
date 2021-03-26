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
      index: index
    });
  });
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
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    type: "submit"
  }, props.submitBtnText || "Submit")));
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
 * - FormField's label should be first child
 * - FormField's control should be second child
 *
 */

function FormFieldTemplate(props) {
  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(props.children); //preserve existing css classes + add bootstrap classes

  var control = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children[0], {
    className: (children[0].className || "") + " form-control w-75"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group m-3"
  }, control);
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormFieldTemplate, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormFieldTemplate, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormFieldTemplate, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormFieldTemplate, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
 * @param {object} props
 *  - onAdd? {function} - callback for games in GameSearchBox to be added to favorite games list.
 *                        Used in mobile view.
 */

function Game(props) {
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
    className: "col-md-1 col-1 ".concat(props["data-index"] && "pos-".concat(Number(props["data-index"]) + 1))
  }, props["data-index"] && Number(props["data-index"]) + 1 + "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-img col-md-2 col-11"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.gameCoverUrl,
    alt: "Cover art for ".concat(props.gameName),
    height: 90,
    width: 90,
    className: "rounded d-inline-block m-auto"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-name d-inline-block ".concat(props.isEditing ? "col-md-6" : "col-md-9")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.gameName)), props.isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return props.onDelete(props.gameId);
    },
    className: "col-md-3 btn btn-danger"
  }, "Delete"), //add button should only appear on games in GameSearchBox
  //data-index prop is only given to games in the favorite game list
  //therefore if no data-index, its a GameSearchBox game
  !props["data-index"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.onAdd,
    className: "btn btn-success d-md-none"
  }, "Add")));
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




/**
 *
 * @param {object} props expected props:
 * - userId {number} the logged in user's user id
 * - profilePic {string} src url for user's profile picture
 */

function Toolbar(props) {
  function handleSubmit(e, errorInfo) {
    if (errorInfo) e.preventDefault();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "Toolbar-Form",
    onSubmit: handleSubmit,
    submitBtnText: "Go!",
    method: "get",
    action: "/search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormFields__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: "Search",
    name: "query",
    value: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormFields__WEBPACK_IMPORTED_MODULE_2__["HiddenField"], {
    label: "Page",
    name: "page",
    value: "0"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/user/".concat(props.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.profilePic,
    alt: "Your profile picture"
  })));
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
      var newGameAsObject = JSON.parse(newGame); //we replace elements as we go, eventually we an element to newFaveGames[newFaveGames.length]
      //this increases the length and the loop goes on forever
      //so we keep the length of the list before we start

      var length = newFaveGames.length; //game to be added in

      var holder = newGameAsObject;

      for (var i = 0; i <= length; i++) {
        if (newFaveGames[i] && newFaveGames[i].id === newGameAsObject.id) return; //start swapping from dropTarget onwards

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
      newFaveGames.push(JSON.parse(newGame));
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
    setDisplayedFavoriteGames([].concat(_toConsumableArray(displayedFavoriteGames), [game]));
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
      onDelete: deleteGame
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userId: props.id,
    profilePic: props.profilePic
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-page-header mb-3"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybUZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYW1lU2VhcmNoQm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZHJlbiIsImNoaWxkIiwidmFsdWUiLCJmaWVsZFZhbHVlcyIsInNldEZpZWxkVmFsdWVzIiwiZmllbGRWYWxpZGF0b3JzIiwidXNlUmVmIiwiaW5kZXgiLCJjbG9uZUVsZW1lbnQiLCJhZGRWYWxpZGF0b3IiLCJ2YWxpZGF0b3IiLCJjdXJyZW50IiwicHVzaCIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwicGFyZW50SWQiLCJpZCIsImUiLCJuZXdGaWVsZFZhbHVlcyIsImkiLCJ0YXJnZXQiLCJ2YWxpZGF0ZUFsbEZpZWxkcyIsImVycm9ySW5mbyIsIm9uU3VibWl0IiwiYWN0aW9uIiwibWV0aG9kIiwiY2xhc3NOYW1lIiwic3VibWl0QnRuVGV4dCIsIkZvcm1GaWVsZFRlbXBsYXRlIiwidG9BcnJheSIsImNvbnRyb2wiLCJUZXh0RmllbGQiLCJpbnB1dElkIiwibGFiZWwiLCJtaW5MZW5ndGgiLCJtaW4iLCJtYXhMZW5ndGgiLCJtYXgiLCJ2YWxpZGF0b3JBZGRlZCIsImlucHV0RmllbGQiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0ZSIsImVsZW1lbnQiLCJ2YWxpZGl0eVN0YXRlIiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJtZXNzYWdlIiwidG9vU2hvcnQiLCJ0b29Mb25nIiwibmFtZSIsInJlcXVpcmVkIiwiRW1haWxGaWVsZCIsImxhYmVsTmFtZSIsInR5cGVNaXNtYXRjaCIsIlBhc3N3b3JkRmllbGQiLCJIaWRkZW5GaWVsZCIsIkdhbWUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJkcmFnZ2FibGUiLCJOdW1iZXIiLCJnYW1lQ292ZXJVcmwiLCJnYW1lTmFtZSIsImlzRWRpdGluZyIsIm9uRGVsZXRlIiwiZ2FtZUlkIiwib25BZGQiLCJHYW1lU2VhcmNoQm94IiwiZGlzcGxheWVkU2VhcmNoVGVybSIsInNldERpc3BsYXllZFNlYXJjaFRlcm0iLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNlYXJjaFBhZ2UiLCJzZXRTZWFyY2hQYWdlIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhc05leHQiLCJzZXRIYXNOZXh0IiwiZmlyc3RSZW5kZXIiLCJzdGFydERyYWdHYW1lIiwiZ2FtZSIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZHJhZ092ZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BFZmZlY3QiLCJkaXNwbGF5ZWRTZWFyY2hSZXN1bHRzIiwiY292ZXJ1cmwiLCJoYW5kbGVTZWFyY2giLCJmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyIsImNoYW5nZVBhZ2UiLCJwYWdlTnVtYmVyIiwidGVybSIsInBhZ2UiLCJxdWVyeSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwicmVzdWx0cyIsIm1zZyIsIlRlc3QiLCJvbkNsaWNrIiwiVG9vbGJhciIsImhhbmRsZVN1Ym1pdCIsInVzZXJJZCIsInByb2ZpbGVQaWMiLCJVc2VyUGFnZSIsImdhbWVzIiwiZmF2b3JpdGVHYW1lcyIsInNldEZhdm9yaXRlR2FtZXMiLCJkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzIiwic2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyIsInNldElzRWRpdGluZyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZHJvcEdhbWVPbkdhbWUiLCJuZXdGYXZlR2FtZXMiLCJuZXdHYW1lIiwiZ2V0RGF0YSIsImRyb3BUYXJnZXQiLCJuZXdHYW1lQXNPYmplY3QiLCJwYXJzZSIsImxlbmd0aCIsImhvbGRlciIsInRlbXAiLCJkcmFnZ2VkR2FtZSIsImRyb3BHYW1lT25Db250YWluZXIiLCJuZXdQb3MiLCJkZWxldGVHYW1lIiwiZmlsdGVyIiwicm9sbGJhY2tDaGFuZ2VzIiwic2F2ZUNoYW5nZXMiLCJmYXZlR2FtZUlkcyIsImNyZWRlbnRpYWxzIiwiYm9keSIsImhlYWRlcnMiLCJlcnJvciIsImZhdm9yaXRlR2FtZXNMaXN0IiwiZGlzcGxheU5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwibG9jYWxzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtR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SyxhQUFTLEVBQUM7QUFBZixLQUNHaEcsS0FBSyxDQUFDcUIsRUFBTixLQUNFLENBQUNnRCxTQUFELGdCQUNDO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTTBELFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsS0FEWDtBQUVFLGFBQVMsRUFBQztBQUZaLFlBREQsZ0JBUUMscUlBQ0U7QUFDRSxXQUFPLEVBQUVrQixlQURYO0FBRUUsYUFBUyxFQUFDO0FBRlosY0FERixlQU9FO0FBQVEsV0FBTyxFQUFFQyxXQUFqQjtBQUE4QixhQUFTLEVBQUM7QUFBeEMsWUFQRixDQVRILENBREgsZUFzQkU7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FBK0I5RCxZQUEvQixDQXRCRixDQWhCRixDQURGLEVBMENHZixTQUFTLGlCQUFJLDJEQUFDLGlFQUFEO0FBQWUsU0FBSyxFQUFFRztBQUF0QixJQTFDaEIsQ0FWRixDQURGO0FBeUREO0FBRU0sU0FBU2tGLGtCQUFULENBQTRCQyxPQUE1QixFQUFxQztBQUMxQyxTQUFPO0FBQ0wzSixTQUFLLEVBQUU4RixJQUFJLENBQUMwQyxLQUFMLENBQVcxQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTRELE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUEzQixDQUFYO0FBREYsR0FBUDtBQUdELEM7Ozs7Ozs7Ozs7O0FDMVFELGtDIiwiZmlsZSI6InBhZ2VzL3VzZXJQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91c2VyUGFnZS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogR2VuZXJhbCBmb3JtIGNvbXBvbmVudCB0aGF0IHZhbGlkYXRlcyBhbmQgY29udHJvbHMgdGhlIHN0YXRlXHJcbiAqIG9mIGFsbCBvZiBpdHMgZmllbGRzLiBDaGlsZHJlbiBvZiBGb3JtIHNob3VsZCBiZSBhIGxpc3Qgb2YgRm9ybUVsZW1lbnRzLlxyXG4gKlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgRXhwZWN0ZWQgcHJvcHM6XHJcbiAqIC0gaWQge3N0cmluZ30gZm9ybSBodG1sRWxlbWVudCdzIGlkXHJcbiAqXHJcbiAqIC0gb25TdWJtaXQge2Z1bmN0aW9uKGV2ZW50LCBvYmplY3QpfSBjYWxsYmFjayBmb3Igd2hlbiBmb3JtIHN1Ym1pdHMuXHJcbiAqICAgRm9ybSB3aWxsIHNlbmQgdHdvIGFyZ3VtZW50cywgdGhlIGZpcnN0IGlzIHRoZSBldmVudCwgdGhlIHNlY29uZFxyXG4gKiAgIGlzIHRoZSBlcnJvciBpbmZvIG9iamVjdC4gSWYgb25lIG9mIHRoZSBGb3JtRmllbGRzIHdpdGhpbiB0aGUgRm9ybVxyXG4gKiAgIHdlcmUgbm90IHZhbGlkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IHdpbGwgYmUgYW4gb2JqZWN0IGNvbnRhaW5pbmdcclxuICogICBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXJyb3IuIElmIGV2ZXJ5dGhpbmcgd2FzIHZhbGlkLCBpdCB3aWxsIGJlIG51bGwuXHJcbiAqXHJcbiAqIC0gc3VibWl0QnRuVGV4dCB7c3RyaW5nfSB0aGUgdGV4dENvbnRlbnQgZm9yIHRoZSBzdWJtaXQgYnV0dG9uXHJcbiAqXHJcbiAqIC0gYWN0aW9uPyB7c3RyaW5nfSB2YWx1ZSBmb3IgZm9ybSdzIGFjdGlvbiBhdHRyaWJ1dGVcclxuICpcclxuICogLSBtZXRob2Q/IHtzdHJpbmd9IHZhbHVlIGZvciBmb3JtJ3MgbWV0aG9kIGF0dHJpYnV0ZVxyXG4gKlxyXG4gKiAtcHJvcHMuY2hpbGRyZW4gc2hvdWxkIGJlIGEgbGlzdCBvZiBGb3JtRmllbGQgZWxlbWVudHMuIEVhY2ggRm9ybUZpZWxkXHJcbiAqICBzaG91bGQgYmUgaW5pdGlhbGl6ZWQgd2l0aCBhbiBpbml0aWFsIHZhbHVlIHByb3AuXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKHByb3BzKSB7XHJcbiAgLy9hcnJheSBvZiB2YWx1ZXMgZm9yIGFsbCBjaGlsZHJlbiAoRm9ybUZpZWxkcylcclxuICAvL2luaXRpYWxpemVzIHN0YXRlIHRvIGJlIGVxdWFsIHRvIHRoZSBpbml0aWFsIHZhbHVlIGdpdmVuIGJ5XHJcbiAgLy9wYXJlbnQgY29tcG9uZW50XHJcbiAgY29uc3QgW2ZpZWxkVmFsdWVzLCBzZXRGaWVsZFZhbHVlc10gPSB1c2VTdGF0ZShcclxuICAgIFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiBjaGlsZC5wcm9wcy52YWx1ZSlcclxuICApO1xyXG5cclxuICAvL2xpc3Qgb2YgdmFsaWRhdG9ycyBvZiBhbGwgb2YgdGhpcyBGb3JtJ3MgRm9ybUZpZWxkc1xyXG4gIGNvbnN0IGZpZWxkVmFsaWRhdG9ycyA9IHVzZVJlZihbXSk7XHJcblxyXG4gIC8vdGFrZXMgY29udHJvbCBvZiBjaGlsZHJlbnMgc3RhdGUgYW5kIHBhc3NlcyBvd24gcHJvcHNcclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT5cclxuICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICB2YWx1ZTogZmllbGRWYWx1ZXNbaW5kZXhdLFxyXG4gICAgICBhZGRWYWxpZGF0b3I6ICh2YWxpZGF0b3IpID0+IGZpZWxkVmFsaWRhdG9ycy5jdXJyZW50LnB1c2godmFsaWRhdG9yKSxcclxuICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcclxuICAgICAgcGFyZW50SWQ6IHByb3BzLmlkLCAvL2FkZCBwYXJlbnQgaWQgdG8gc28gRm9ybUZpZWxkIGNhbiBtYWtlIHVuaXF1ZSBpZHMgZm9yIGl0cyBlbGVtZW50c1xyXG4gICAgICBpbmRleCxcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyB2YWx1ZSBjaGFuZ2VzIGZvciBhbGwgb2YgYSBGb3JtJ3MgRm9ybUZpZWxkcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggRm9ybUZpZWxkJ3MgaW5kZXggcHJvcFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlLCBpbmRleCkge1xyXG4gICAgLy90aGUgaW5kZXggcHJvcCBvZiBlYWNoIEZvcm1GaWVsZCBhbmQgZmllbGRWYWx1ZXMgYXJlIHBhcmFsbGVsXHJcbiAgICAvL3NvIGlmIGEgRm9ybUZpZWxkIHBhc3NlcyBpdCdzIHByb3BzLmluZGV4LCB3ZSBjYW4gc2V0XHJcbiAgICAvL3RoZSBjb3JyZWN0IHN0YXRlXHJcbiAgICBjb25zdCBuZXdGaWVsZFZhbHVlcyA9IGZpZWxkVmFsdWVzLm1hcCgodmFsdWUsIGkpID0+XHJcbiAgICAgIGkgPT09IGluZGV4ID8gZS50YXJnZXQudmFsdWUgOiB2YWx1ZVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlcyhuZXdGaWVsZFZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxscyBldmVyeSBGb3JtRmllbGQncyB2YWxpZGF0b3IgZnVuY3Rpb24uIElmIGFueSBmaWVsZFxyXG4gICAqIGlzIGludmFsaWQsIHdpbGwgc2VuZCB0aGUgZXJyb3IgaW5mbyBvYmplY3QgdG8gcGFyZW50IGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7ZXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUFsbEZpZWxkcyhlKSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbGlkYXRvciBvZiBmaWVsZFZhbGlkYXRvcnMuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBlcnJvckluZm8gPSB2YWxpZGF0b3IoKTtcclxuICAgICAgaWYgKGVycm9ySW5mbykgcmV0dXJuIHByb3BzLm9uU3VibWl0KGUsIGVycm9ySW5mbyk7XHJcbiAgICB9XHJcbiAgICBwcm9wcy5vblN1Ym1pdChlLCBudWxsKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgIG9uU3VibWl0PXt2YWxpZGF0ZUFsbEZpZWxkc31cclxuICAgICAgICBub1ZhbGlkYXRlPXt0cnVlfVxyXG4gICAgICAgIGFjdGlvbj17cHJvcHMuYWN0aW9ufVxyXG4gICAgICAgIG1ldGhvZD17cHJvcHMubWV0aG9kfVxyXG4gICAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIHtwcm9wcy5zdWJtaXRCdG5UZXh0IHx8IFwiU3VibWl0XCJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEZvcm1GaWVsZHMgYXJlIG1lYW50IHRvIGJlIHVzZWQgd2l0aCB0aGUgRm9ybSBjb21wb25lbnQuXHJcbiAqIFRoZXkgYXJlIGEgY29tYmluYXRpb24gb2YgYSBsYWJlbCBhbmQgYSBjb3JyZXNwb25kaW5nIGlucHV0IGVsZW1lbnQgb2Ygc29tZSBraW5kLlxyXG4gKiBUaGV5IG1ha2UgdXAgdGhlIGZpZWxkcyBvZiBhIEZvcm0gY29tcG9uZW50LiBFYWNoIEZvcm1GaWVsZCBoYXMgaXRzIG93blxyXG4gKiB2YWxpZGF0b3IgZnVuY3Rpb24gdGhhdCBjaGVja3MgdGhlIHZhbGlkaXR5IG9mIGl0cyBpbnB1dC4gRm9ybUZpZWxkIHZhbGlkYXRvcnNcclxuICogYXJlIGNhbGxlZCBieSBpdHMgcGFyZW50IEZvcm0uIEZvcm1GaWVsZHMgc2hvdWxkIGJlIHRoZSBjaGlsZHJlbiBvZiBhIEZvcm1cclxuICogY29tcG9uZW50IGFuZCBzaG91bGQgYmUgaW5pdGlhbGllZCB3aXRoIGFuIGluaXRpYWwgdmFsdWUgcHJvcC4gQWZ0ZXIgZmlyc3QgcmVuZGVyLFxyXG4gKiB0aGUgRm9ybSBjb21wb25lbnQgd2lsbCB0YWtlIGNvbnRyb2wgb2YgdGhlIEZvcm1GaWVsZCdzIHZhbHVlIHN0YXRlLlxyXG4gKlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBDb21tb24gbGF5b3V0IHRlbXBsYXRlIHRoYXQgRm9ybUZpZWxkcyB1c2VcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIGV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIEZvcm1GaWVsZCdzIGxhYmVsIHNob3VsZCBiZSBmaXJzdCBjaGlsZFxyXG4gKiAtIEZvcm1GaWVsZCdzIGNvbnRyb2wgc2hvdWxkIGJlIHNlY29uZCBjaGlsZFxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gRm9ybUZpZWxkVGVtcGxhdGUocHJvcHMpIHtcclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pO1xyXG4gIC8vcHJlc2VydmUgZXhpc3RpbmcgY3NzIGNsYXNzZXMgKyBhZGQgYm9vdHN0cmFwIGNsYXNzZXNcclxuICBjb25zdCBjb250cm9sID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuWzBdLCB7XHJcbiAgICBjbGFzc05hbWU6IChjaGlsZHJlblswXS5jbGFzc05hbWUgfHwgXCJcIikgKyBcIiBmb3JtLWNvbnRyb2wgdy03NVwiLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG0tM1wiPntjb250cm9sfTwvZGl2PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYWwgdGV4dCBpbnB1dCBmaWVsZC5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWwge3N0cmluZ30gRm9ybUZpZWxkJ3MgbGFiZWxcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSByZXF1aXJlZD8ge2Jvb2xlYW59IHdoZXRoZXIgdGhpcyBGb3JtRmllbGQgaXMgcmVxdWlyZWQgb3Igbm90XHJcbiAqIC0gbWluPyB7bnVtYmVyfSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqIC0gbWF4PyB7bnVtYmVyfSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGV4dEZpZWxkKHByb3BzKSB7XHJcbiAgY29uc3QgaW5wdXRJZCA9IGBmb3JtLWZpZWxkLSR7cHJvcHMubGFiZWx9LSR7cHJvcHMucGFyZW50SWR9YDtcclxuICBjb25zdCBtaW5MZW5ndGggPSBwcm9wcy5taW47XHJcbiAgY29uc3QgbWF4TGVuZ3RoID0gcHJvcHMubWF4O1xyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGlucHV0RmllbGQuY3VycmVudDtcclxuICAgIGNvbnN0IHZhbGlkaXR5U3RhdGUgPSBlbGVtZW50LnZhbGlkaXR5O1xyXG5cclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnZhbHVlTWlzc2luZylcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7cHJvcHMubGFiZWx9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke3Byb3BzLmxhYmVsfSBtdXN0IGJlIGF0IGxlYXN0ICR7bWluTGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudG9vTG9uZylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtwcm9wcy5sYWJlbH0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5vbkNoYW5nZShlLCBwcm9wcy5pbmRleCl9XHJcbiAgICAgICAgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfVxyXG4gICAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxyXG4gICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5sYWJlbH1cclxuICAgICAgICByZWY9e2lucHV0RmllbGR9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm1GaWVsZFRlbXBsYXRlPlxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnB1dCBmaWVsZCBmb3IgZW1haWxzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogLSBsYWJlbD8ge3N0cmluZ30gRm9ybUZpZWxkJ3MgbGFiZWwgKGRlZmF1bHQgbGFiZWwgaXMgRW1haWwpXHJcbiAqIC0gbmFtZSB7c3RyaW5nfSBuYW1lIGZvciBpbnB1dCBlbGVtZW50XHJcbiAqIC0gcmVxdWlyZWQ/IHtib29sZWFufSB3aGV0aGVyIHRoaXMgRm9ybUZpZWxkIGlzIHJlcXVpcmVkIG9yIG5vdFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKiAtIG1heD8ge251bWJlcn0gbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEVtYWlsRmllbGQocHJvcHMpIHtcclxuICBjb25zdCBsYWJlbE5hbWUgPSBwcm9wcy5sYWJlbCB8fCBcIkVtYWlsXCI7XHJcbiAgY29uc3QgaW5wdXRJZCA9IGBmb3JtLWZpZWxkLSR7bGFiZWxOYW1lfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heCB8fCA1MDtcclxuXHJcbiAgY29uc3QgdmFsaWRhdG9yQWRkZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIC8vcmVmZXJlbmNlIHRvIGlucHV0IGh0bWwgZWxlbWVudFxyXG4gIGNvbnN0IGlucHV0RmllbGQgPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuXHJcbiAgLy90byBlbnN1cmUgdmFsaWRhdG9yIG9ubHkgZ2V0cyBhZGRlZCB0byBwYXJlbnQgRm9ybSBvbmNlXHJcbiAgaWYgKCF2YWxpZGF0b3JBZGRlZC5jdXJyZW50KSB7XHJcbiAgICBwcm9wcy5hZGRWYWxpZGF0b3IodmFsaWRhdGUpO1xyXG4gICAgdmFsaWRhdG9yQWRkZWQuY3VycmVudCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdGhlIHZhbGlkaXR5IG9mIGlucHV0LlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge29iamVjdH0gaWYgaW5wdXQgaXMgdmFsaWQsIHJldHVybnMgbnVsbC4gT3RoZXJ3aXNlLCByZXR1cm5zIGFuIG9iamVjdFxyXG4gICAqIGNvbnRhaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlcnJvclxyXG4gICAqIHttZXNzYWdlOiBlcnJvciBtZXNzYWdlLCBlbGVtZW50OiByZWZlcmVuY2UgdG8gSHRtbEVsZW1lbnQgdGhhdCBjb250YWlucyBlcnJvcn1cclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBpbnB1dEZpZWxkLmN1cnJlbnQ7XHJcbiAgICBjb25zdCB2YWxpZGl0eVN0YXRlID0gZWxlbWVudC52YWxpZGl0eTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS52YWx1ZU1pc3NpbmcpXHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gaXMgcmVxdWlyZWQuYCwgZWxlbWVudCB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudHlwZU1pc21hdGNoKVxyXG4gICAgICByZXR1cm4geyBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IG11c3QgYmUgYW4gZW1haWwuYCwgZWxlbWVudCB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudG9vU2hvcnQpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGF0IGxlYXN0ICR7bWluTGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudG9vTG9uZylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1GaWVsZFRlbXBsYXRlPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD17aW5wdXRJZH1cclxuICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSwgcHJvcHMuaW5kZXgpfVxyXG4gICAgICAgIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17bGFiZWxOYW1lfVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIElucHV0IGZpZWxkIGZvciBwYXNzd29yZHMuIElucHV0IGlzIGFsd2F5cyByZXF1aXJlZC5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWw/IHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChkZWZhdWx0IGxhYmVsIGlzIFBhc3N3b3JkKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFBhc3N3b3JkRmllbGQocHJvcHMpIHtcclxuICBjb25zdCBsYWJlbE5hbWUgPSBwcm9wcy5sYWJlbCB8fCBcIlBhc3N3b3JkXCI7XHJcbiAgY29uc3QgaW5wdXRJZCA9IGBmb3JtLWZpZWxkLSR7bGFiZWxOYW1lfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heCB8fCA1MDtcclxuXHJcbiAgY29uc3QgdmFsaWRhdG9yQWRkZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIC8vcmVmZXJlbmNlIHRvIGlucHV0IGh0bWwgZWxlbWVudFxyXG4gIGNvbnN0IGlucHV0RmllbGQgPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuXHJcbiAgLy90byBlbnN1cmUgdmFsaWRhdG9yIG9ubHkgZ2V0cyBhZGRlZCB0byBwYXJlbnQgRm9ybSBvbmNlXHJcbiAgaWYgKCF2YWxpZGF0b3JBZGRlZC5jdXJyZW50KSB7XHJcbiAgICBwcm9wcy5hZGRWYWxpZGF0b3IodmFsaWRhdGUpO1xyXG4gICAgdmFsaWRhdG9yQWRkZWQuY3VycmVudCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdGhlIHZhbGlkaXR5IG9mIGlucHV0XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gaW5wdXRGaWVsZC5jdXJyZW50O1xyXG4gICAgY29uc3QgdmFsaWRpdHlTdGF0ZSA9IGVsZW1lbnQudmFsaWRpdHk7XHJcblxyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudmFsdWVNaXNzaW5nKVxyXG4gICAgICByZXR1cm4geyBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAke21heExlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtRmllbGRUZW1wbGF0ZT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9e2lucHV0SWR9XHJcbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWUgfHwgXCJcIn1cclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSwgcHJvcHMuaW5kZXgpfVxyXG4gICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxyXG4gICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtsYWJlbE5hbWV9XHJcbiAgICAgICAgcmVmPXtpbnB1dEZpZWxkfVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSGlkZGVuIGlucHV0IGZpZWxkXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsIHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChub3QgdmlzaWJsZSwganVzdCBmb3IgbmFtaW5nIHB1cnBvc2VzKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIHZhbHVlIHtzdHJpbmd9IGlucHV0J3MgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBIaWRkZW5GaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke3Byb3BzLmxhYmVsfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xyXG4gICAgLy9hbHdheXMgdmFsaWRcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtRmllbGRUZW1wbGF0ZT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9e2lucHV0SWR9XHJcbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgaGlkZGVuPXt0cnVlfVxyXG4gICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogQSBjb21wb25lbnQgcmVwcmVzZW50aW5nIGEgc2luZ2xlIGdhbWVcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqICAtIG9uQWRkPyB7ZnVuY3Rpb259IC0gY2FsbGJhY2sgZm9yIGdhbWVzIGluIEdhbWVTZWFyY2hCb3ggdG8gYmUgYWRkZWQgdG8gZmF2b3JpdGUgZ2FtZXMgbGlzdC5cclxuICogICAgICAgICAgICAgICAgICAgICAgICBVc2VkIGluIG1vYmlsZSB2aWV3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJnYW1lLWNvbnRhaW5lciBjb250YWluZXIgcm91bmRlZCBteS0zIFwiXHJcbiAgICAgIGRhdGEtaW5kZXg9e3Byb3BzW1wiZGF0YS1pbmRleFwiXX1cclxuICAgICAgb25EcmFnU3RhcnQ9e3Byb3BzLm9uRHJhZ1N0YXJ0fVxyXG4gICAgICBvbkRyYWdPdmVyPXtwcm9wcy5vbkRyYWdPdmVyfVxyXG4gICAgICBvbkRyb3A9e3Byb3BzLm9uRHJvcH1cclxuICAgICAgZHJhZ2dhYmxlPXtwcm9wcy5kcmFnZ2FibGV9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGNvbC1tZC0xIGNvbC0xICR7XHJcbiAgICAgICAgICAgIHByb3BzW1wiZGF0YS1pbmRleFwiXSAmJiBgcG9zLSR7TnVtYmVyKHByb3BzW1wiZGF0YS1pbmRleFwiXSkgKyAxfWBcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wc1tcImRhdGEtaW5kZXhcIl0gJiYgTnVtYmVyKHByb3BzW1wiZGF0YS1pbmRleFwiXSkgKyAxICsgXCIuXCJ9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1pbWcgY29sLW1kLTIgY29sLTExXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17cHJvcHMuZ2FtZUNvdmVyVXJsfVxyXG4gICAgICAgICAgICBhbHQ9e2BDb3ZlciBhcnQgZm9yICR7cHJvcHMuZ2FtZU5hbWV9YH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs5MH1cclxuICAgICAgICAgICAgd2lkdGg9ezkwfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIGQtaW5saW5lLWJsb2NrIG0tYXV0b1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGdhbWUtbmFtZSBkLWlubGluZS1ibG9jayAke1xyXG4gICAgICAgICAgICBwcm9wcy5pc0VkaXRpbmcgPyBcImNvbC1tZC02XCIgOiBcImNvbC1tZC05XCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwPntwcm9wcy5nYW1lTmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtwcm9wcy5pc0VkaXRpbmcgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkRlbGV0ZShwcm9wcy5nYW1lSWQpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMyBidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy9hZGQgYnV0dG9uIHNob3VsZCBvbmx5IGFwcGVhciBvbiBnYW1lcyBpbiBHYW1lU2VhcmNoQm94XHJcbiAgICAgICAgICAvL2RhdGEtaW5kZXggcHJvcCBpcyBvbmx5IGdpdmVuIHRvIGdhbWVzIGluIHRoZSBmYXZvcml0ZSBnYW1lIGxpc3RcclxuICAgICAgICAgIC8vdGhlcmVmb3JlIGlmIG5vIGRhdGEtaW5kZXgsIGl0cyBhIEdhbWVTZWFyY2hCb3ggZ2FtZVxyXG4gICAgICAgICAgIXByb3BzW1wiZGF0YS1pbmRleFwiXSAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMub25BZGR9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBkLW1kLW5vbmVcIj5cclxuICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lU2VhcmNoQm94KHByb3BzKSB7XHJcbiAgLy9zZWFyY2ggdGVybSBpbiBzZWFyY2ggYmFyXHJcbiAgY29uc3QgW2Rpc3BsYXllZFNlYXJjaFRlcm0sIHNldERpc3BsYXllZFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy90aGUgYWN0dWFsIHVuZGVybHlpbmcgc2VhcmNoIHRlcm0gcmVnYXJkbGVzcyBvZiB3aGF0cyB0eXBlZFxyXG4gIC8vY2xpY2tpbmcgbmV4dC9wcmV2IHdpbGwgY2hhbmdlIHBhZ2VzIGZvciB0aGlzIHZhbHVlXHJcbiAgLy9jbGlja2luZyBzZWFyY2ggYnV0dG9uIHdpbGwgY2hhbmdlIHRoaXMgdmFsdWVcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShkaXNwbGF5ZWRTZWFyY2hUZXJtKTtcclxuICAvL3BhZ2Ugb2Ygc2VhcmNoIHJlc3VsdHNcclxuICBjb25zdCBbc2VhcmNoUGFnZSwgc2V0U2VhcmNoUGFnZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIC8vbGlzdCBvZiBvYmplY3RzIHRoYXQgd2lsbCBiZSByZXRyaWV2ZWQgZnJvbSBzZWFyY2ggYXBpXHJcbiAgY29uc3QgW3NlYXJjaFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vd2hldGhlciBvciBub3Qgc2VhcmNoIHJlc3VsdHMgYXJlIGN1cnJlbnRseSBsb2FkaW5nXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vZXJyb3IgbWVzc2FnZVxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvL3doZXRoZXIgb3Igbm90IHRoZXJlIGlzIGEgbmV4dCBwYWdlIG9mIHNlYXJjaCByZXN1bHRzXHJcbiAgY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIC8vdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciBpdHMgZmlyc3QgcmVuZGVyIG9yIG5vdFxyXG4gIGNvbnN0IGZpcnN0UmVuZGVyID0gdXNlUmVmKHRydWUpO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydERyYWdHYW1lKGUsIGdhbWUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiLCBKU09OLnN0cmluZ2lmeShnYW1lKSk7XHJcbiAgfVxyXG5cclxuICAvL2RyYWdvdmVyIGhhbmRsZXIgaXMgbmVlZGVkIHRvIG1ha2UgZWxlbWVudFxyXG4gIC8vZHJhZ2dhYmxlXHJcbiAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRpc3BsYXllZFNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzLm1hcCgoZ2FtZSkgPT4gKFxyXG4gICAgPEdhbWVcclxuICAgICAga2V5PXtnYW1lLmlkfVxyXG4gICAgICBnYW1lSWQ9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVOYW1lPXtnYW1lLm5hbWV9XHJcbiAgICAgIGdhbWVDb3ZlclVybD17Z2FtZS5jb3ZlcnVybH1cclxuICAgICAgZHJhZ2dhYmxlPXt0cnVlfVxyXG4gICAgICBvbkRyYWdTdGFydD17KGUpID0+IHN0YXJ0RHJhZ0dhbWUoZSwgZ2FtZSl9XHJcbiAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVyfVxyXG4gICAgICBvbkFkZD17KCkgPT4gcHJvcHMub25BZGQoZ2FtZSl9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGRpc3BsYXllZCBzZWFyY2ggdGVybVxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgc2V0RGlzcGxheWVkU2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHNlYXJjaFRlcm0gdG8gZGlzcGxheWVkU2VhcmNoVGVybVxyXG4gICAqIGFuZCBmZXRjaGVzIHNlYXJjaCByZXN1bHRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZGlzcGxheWVkU2VhcmNoVGVybSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoVGVybShkaXNwbGF5ZWRTZWFyY2hUZXJtKTtcclxuICAgIHNldFNlYXJjaFBhZ2UoMCk7XHJcbiAgICBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyhkaXNwbGF5ZWRTZWFyY2hUZXJtLCAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgcGFnZSBudW1iZXIgZm9yIHNlYXJjaFRlcm1cclxuICAgKiAobm90IGRpc3BsYXllZFNlYXJjaFRlcm0pIGFuZCBmZXRjaGVzIHNlYXJjaFxyXG4gICAqIHJlc3VsdHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZU51bWJlciBuZXcgcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBmdW5jdGlvbiBjaGFuZ2VQYWdlKHBhZ2VOdW1iZXIpIHtcclxuICAgIGlmIChwYWdlTnVtYmVyIDwgMCkgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoUGFnZShwYWdlTnVtYmVyKTtcclxuICAgIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKHNlYXJjaFRlcm0sIHBhZ2VOdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2hlcyBhIHNlYXJjaCBmcm9tIHRoZSBBUEkgYW5kIHBvcHVsYXRlcyBwYWdlXHJcbiAgICogd2l0aCBzZWFyY2ggcmVzdWx0cy4gVGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSBjYWxsZWRcclxuICAgKiB3aXRoIGEgc2VhcmNoIHRlcm0gYW5kIHBhZ2UgbWFudWFsbHkgaW5zdGVhZCBvZiByZWx5aW5nIG9uXHJcbiAgICogY2hlY2tpbmcgc3RhdGUgYXMgcmVhZGluZyBzdGF0ZSBpbW1lZGlhdGVseSBhZnRlciBzZXR0aW5nIGl0XHJcbiAgICogd2lsbCByZXR1cm4gc3RhbGUgdmFsdWVzLiBTbywgd2UgZ2l2ZSBpdCB0aGUgZnJlc2ggdmFsdWVzIG1hbnVhbGx5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlcm0gc2VhcmNoIHRlcm1cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSBzZWFyY2ggcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyh0ZXJtLCBwYWdlKSB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYC9hcGkvc2VhcmNoLyR7dGVybX0vJHtwYWdlfWA7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnkpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhkYXRhLnJlc3VsdHMpO1xyXG4gICAgICAgIHNldEhhc05leHQoZGF0YS5oYXNOZXh0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UocmVzdWx0cy5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKGUubWVzc2FnZSArIFwiXFxuXCIgKyBtc2cpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtc2VhcmNoLWJveCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0cyBnYW1lLWxpc3Qgb3JkZXItMiBvcmRlci1tZC0xXCI+XHJcbiAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cD57ZXJyb3JNZXNzYWdlfTwvcD59XHJcbiAgICAgICAge2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XHJcbiAgICAgICAge2Rpc3BsYXllZFNlYXJjaFJlc3VsdHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1iYXIgb3JkZXItMSBvcmRlci1tZC0yXCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhbWUtc2VhcmNoLWJhclwiIGNsYXNzTmFtZT1cImQtbm9uZVwiPlxyXG4gICAgICAgICAgICBOYW1lIG9mIEdhbWVcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJnYW1lLXNlYXJjaC1iYXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZGlzcGxheWVkU2VhcmNoVGVybX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIG9mIEdhbWUuLi5cIlxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIHtzZWFyY2hQYWdlID49IDAgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtzZWFyY2hQYWdlID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHNlYXJjaFBhZ2UgLSAxKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQcmV2XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFnZS1udW1iZXJcIiBjbGFzc05hbWU9XCJkLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIFBhZ2U6XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPVwicGFnZS1udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFnZSArIDF9XHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAge2hhc05leHQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShzZWFyY2hQYWdlICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCIuL0Zvcm1GaWVsZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QocHJvcHMpIHtcclxuICByZXR1cm4gPGJ1dHRvbiBpZD17cHJvcHMuaWR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PjwvYnV0dG9uPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQsIEhpZGRlbkZpZWxkIH0gZnJvbSBcIi4vRm9ybUZpZWxkc1wiO1xyXG5pbXBvcnQgVGVzdCBmcm9tIFwiLi9UZXN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIGV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIHVzZXJJZCB7bnVtYmVyfSB0aGUgbG9nZ2VkIGluIHVzZXIncyB1c2VyIGlkXHJcbiAqIC0gcHJvZmlsZVBpYyB7c3RyaW5nfSBzcmMgdXJsIGZvciB1c2VyJ3MgcHJvZmlsZSBwaWN0dXJlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb29sYmFyKHByb3BzKSB7XHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUsIGVycm9ySW5mbykge1xyXG4gICAgaWYgKGVycm9ySW5mbykgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgaWQ9XCJUb29sYmFyLUZvcm1cIlxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgc3VibWl0QnRuVGV4dD1cIkdvIVwiXHJcbiAgICAgICAgbWV0aG9kPVwiZ2V0XCJcclxuICAgICAgICBhY3Rpb249XCIvc2VhcmNoXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJTZWFyY2hcIiBuYW1lPVwicXVlcnlcIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgPEhpZGRlbkZpZWxkIGxhYmVsPVwiUGFnZVwiIG5hbWU9XCJwYWdlXCIgdmFsdWU9XCIwXCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8YSBocmVmPXtgL3VzZXIvJHtwcm9wcy51c2VySWR9YH0+XHJcbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLnByb2ZpbGVQaWN9IGFsdD17YFlvdXIgcHJvZmlsZSBwaWN0dXJlYH0gLz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vY29tcG9uZW50cy9HYW1lXCI7XHJcbmltcG9ydCBHYW1lU2VhcmNoQm94IGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVTZWFyY2hCb3hcIjtcclxuXHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1Rvb2xiYXJcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBUaGUgcGFnZSB0aGF0IGlzIGRpc3BsYXllZCB3aGVuXHJcbiAqIHZpZXdpbmcgYSB1c2VyJ3MgcHJvZmlsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUGFnZShwcm9wcykge1xyXG4gIC8qIHNldHRpbmcgc3RhdGUgKi9cclxuICAvL3RoZSB1c2VyJ3MgYWN0dWFsIGZhdm9yaXRlIGdhbWVzXHJcbiAgY29uc3QgW2Zhdm9yaXRlR2FtZXMsIHNldEZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUocHJvcHMuZ2FtZXMpO1xyXG4gIC8vdGhlIHVzZXIncyBmYXZvcml0ZSBnYW1lIGFzIGN1cnJlbnRseSBkaXNwbGF5ZWQuIHRoZXNlIG1heSBkaWZmZXJcclxuICAvL2Zyb20gYWN0dWFsIGZhdm9yaXRlIGdhbWVzIGR1cmluZyBlZGl0aW5nXHJcbiAgY29uc3QgW2Rpc3BsYXllZEZhdm9yaXRlR2FtZXMsIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUoXHJcbiAgICBmYXZvcml0ZUdhbWVzXHJcbiAgKTtcclxuICAvL3doZXRoZXIgb3Igbm90IHVzZXIgaXMgZWRpdGluZyBmYXZvcml0ZSBnYW1lc1xyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gYSBHYW1lIGlzIGRyYWdnZWQuIEFkZHNcclxuICAgKiB0aGUgR2FtZSdzIGRhdGEtaW5kZXggYXR0cmlidXRlIHRvXHJcbiAgICogRHJhZ0V2ZW50LmRhdGFUcmFuc2ZlciB0byBiZSB1c2VkIGJ5XHJcbiAgICogZHJvcEdhbWUoKSBsYXRlciBvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBzdGFydERyYWdHYW1lKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCk7XHJcbiAgfVxyXG5cclxuICAvL2RyYWdvdmVyIGhhbmRsZXIgaXMgbmVlZGVkIHRvIG1ha2UgZWxlbWVudFxyXG4gIC8vZHJhZ2dhYmxlXHJcbiAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHJhZ2dlZCBnYW1lIHdpbGwgYmUgc3dhcHBlZCB3aXRoIHRoZSBnYW1lXHJcbiAgICogaXQncyBkcm9wcGVkIG9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBkcm9wR2FtZU9uR2FtZShlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IG5ld0ZhdmVHYW1lcyA9IFsuLi5kaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXTtcclxuICAgIGNvbnN0IG5ld0dhbWUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIC8vaW5kZXggb2YgZ2FtZSB0aGF0IHdhcyBkcm9wcGVkIG9uXHJcbiAgICBjb25zdCBkcm9wVGFyZ2V0ID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICAgIC8vZGF0YVRyYW5zZmVyIHdpbGwgY29udGFpbiBhIGpzIG9iamVjdCBpZiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkXHJcbiAgICAvL2lzIGZyb20gc2VhcmNoIHJlc3VsdHMsIG1lYW5pbmcgYSBuZXcgZ2FtZSBpcyBiZWluZyBhZGRlZFxyXG4gICAgLy90byBmYXZvcml0ZSBnYW1lc1xyXG4gICAgaWYgKG5ld0dhbWUpIHtcclxuICAgICAgY29uc3QgbmV3R2FtZUFzT2JqZWN0ID0gSlNPTi5wYXJzZShuZXdHYW1lKTtcclxuICAgICAgLy93ZSByZXBsYWNlIGVsZW1lbnRzIGFzIHdlIGdvLCBldmVudHVhbGx5IHdlIGFuIGVsZW1lbnQgdG8gbmV3RmF2ZUdhbWVzW25ld0ZhdmVHYW1lcy5sZW5ndGhdXHJcbiAgICAgIC8vdGhpcyBpbmNyZWFzZXMgdGhlIGxlbmd0aCBhbmQgdGhlIGxvb3AgZ29lcyBvbiBmb3JldmVyXHJcbiAgICAgIC8vc28gd2Uga2VlcCB0aGUgbGVuZ3RoIG9mIHRoZSBsaXN0IGJlZm9yZSB3ZSBzdGFydFxyXG4gICAgICBjb25zdCBsZW5ndGggPSBuZXdGYXZlR2FtZXMubGVuZ3RoO1xyXG4gICAgICAvL2dhbWUgdG8gYmUgYWRkZWQgaW5cclxuICAgICAgbGV0IGhvbGRlciA9IG5ld0dhbWVBc09iamVjdDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobmV3RmF2ZUdhbWVzW2ldICYmIG5ld0ZhdmVHYW1lc1tpXS5pZCA9PT0gbmV3R2FtZUFzT2JqZWN0LmlkKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vc3RhcnQgc3dhcHBpbmcgZnJvbSBkcm9wVGFyZ2V0IG9ud2FyZHNcclxuICAgICAgICBpZiAoaSA+PSBkcm9wVGFyZ2V0KSB7XHJcbiAgICAgICAgICAvL3B1dCBob2xkZXIgaW50byB0aGUgbGlzdCwgdGFrZSB3aGF0IHdhcyB0aGVyZSBhbmQgcHV0IGludG8gaG9sZGVyXHJcbiAgICAgICAgICBjb25zdCB0ZW1wID0gbmV3RmF2ZUdhbWVzW2ldO1xyXG4gICAgICAgICAgbmV3RmF2ZUdhbWVzW2ldID0gaG9sZGVyO1xyXG4gICAgICAgICAgaG9sZGVyID0gdGVtcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vaWYgdGhlcmUgaXMgbm8ganMgb2JqZWN0LCB0aGVuIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWQgaXMgYW4gYWxyZWFkeVxyXG4gICAgLy9leGlzdGluZyBnYW1lIHNvIHdlIGp1c3Qgc3dhcCBwbGFjZXNcclxuICAgIGVsc2Uge1xyXG4gICAgICAvL3RoZSBnYW1lIHRoYXQgd2FzIGJlaW5nIGRyYWdnZWRcclxuICAgICAgY29uc3QgZHJhZ2dlZEdhbWUgPSBOdW1iZXIoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIikpO1xyXG4gICAgICBjb25zdCB0ZW1wID0gbmV3RmF2ZUdhbWVzW2Ryb3BUYXJnZXRdO1xyXG4gICAgICBuZXdGYXZlR2FtZXNbZHJvcFRhcmdldF0gPSBuZXdGYXZlR2FtZXNbZHJhZ2dlZEdhbWVdO1xyXG4gICAgICBuZXdGYXZlR2FtZXNbZHJhZ2dlZEdhbWVdID0gdGVtcDtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKG5ld0ZhdmVHYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHJhZ2dlZCBnYW1lIHdpbGwgYmUgYWRkZWQgdG8gdGhlXHJcbiAgICogZW5kIG9mIHRoZSBsaXN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRyb3BHYW1lT25Db250YWluZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBjb25zdCBuZXdGYXZlR2FtZXMgPSBbLi4uZGlzcGxheWVkRmF2b3JpdGVHYW1lc107XHJcbiAgICBjb25zdCBuZXdHYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAvL2RhdGFUcmFuc2ZlciB3aWxsIGNvbnRhaW4gYSBqcyBvYmplY3QgaWYgdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZFxyXG4gICAgLy9pcyBmcm9tIHNlYXJjaCByZXN1bHRzLCBtZWFuaW5nIGEgbmV3IGdhbWUgaXMgYmVpbmcgYWRkZWRcclxuICAgIC8vdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAgIGlmIChuZXdHYW1lKSB7XHJcbiAgICAgIG5ld0ZhdmVHYW1lcy5wdXNoKEpTT04ucGFyc2UobmV3R2FtZSkpO1xyXG4gICAgfVxyXG4gICAgLy9pZiB0aGVyZSBpcyBubyBqcyBvYmplY3QsIHRoZW4gdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZCBpcyBhbiBhbHJlYWR5XHJcbiAgICAvL2V4aXN0aW5nIGdhbWUuIGRyYWdnZWQgZ2FtZSBpcyBhZGRlZCB0byB0aGUgZW5kIGFuZCByZXN0IGFyZSBzaGlmdGVkIHVwXHJcbiAgICBlbHNlIHtcclxuICAgICAgbGV0IG5ld1BvcyA9IE51bWJlcihlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKSk7XHJcbiAgICAgIGxldCBkcmFnZ2VkR2FtZSA9IG5ld0ZhdmVHYW1lc1tuZXdQb3NdO1xyXG4gICAgICAvL3NoaWZ0IGV2ZXJ5dGhpbmcgdG93YXJkcyB0aGUgZnJvbnRcclxuICAgICAgZm9yICg7IG5ld1BvcyA8IG5ld0ZhdmVHYW1lcy5sZW5ndGggLSAxOyBuZXdQb3MrKylcclxuICAgICAgICBuZXdGYXZlR2FtZXNbbmV3UG9zXSA9IG5ld0ZhdmVHYW1lc1tuZXdQb3MgKyAxXTtcclxuXHJcbiAgICAgIC8vYWRkIGRyYWdnZWRHYW1lIGJhY2sgdG8gdGhlIGVuZFxyXG4gICAgICBuZXdGYXZlR2FtZXNbbmV3UG9zXSA9IGRyYWdnZWRHYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMobmV3RmF2ZUdhbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZXMgYSBnYW1lIGZyb20gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBnYW1lSWQgdGhlIGlkIG9mIGdhbWUgdG8gYmUgZGVsZXRlZFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRlbGV0ZUdhbWUoZ2FtZUlkKSB7XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKFxyXG4gICAgICBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLmZpbHRlcigoZ2FtZSkgPT4gZ2FtZS5pZCAhPT0gZ2FtZUlkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIGVkaXRpbmcgaXMgY2FuY2VsbGVkLiBTZXRzIGRpc3BsYXllZCBmYXZvcml0ZSBnYW1lc1xyXG4gICAqIHRvIGFjdHVhbCBmYXZvcml0ZSBnYW1lcy5cclxuICAgKi9cclxuICBmdW5jdGlvbiByb2xsYmFja0NoYW5nZXMoKSB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKGZhdm9yaXRlR2FtZXMpO1xyXG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNhdmVDaGFuZ2VzKCkge1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xyXG4gICAgY29uc3QgZmF2ZUdhbWVJZHMgPSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLm1hcCgoZ2FtZSkgPT4gZ2FtZS5pZCk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9mYXZvcml0ZXMvJHtwcm9wcy5pZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZmF2ZUdhbWVJZHMpLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRGYXZvcml0ZUdhbWVzKGRpc3BsYXllZEZhdm9yaXRlR2FtZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBnYW1lIHRvIHRoZSBlbmQgb2YgZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBnYW1lIGdhbWUgb2JqZWN0XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gb25BZGQoZ2FtZSkge1xyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhbLi4uZGlzcGxheWVkRmF2b3JpdGVHYW1lcywgZ2FtZV0pO1xyXG4gIH1cclxuXHJcbiAgLy9nZXQgYSBsaXN0IG9mIEdhbWUgY29tcG9uZW50cyBjb3JyZXNwb25kaW5nIHRvIGZhdm9yaXRlIGdhbWVzXHJcbiAgLy9lYWNoIGlzIGdpdmVuIGEgZGF0YS1pbmRleCBhdHRyaWJ1dGUgdGhhdCBjb3JyZXNwb25kcyB0b1xyXG4gIC8vd2hhdCBwb3NpdGlvbiBpbiB0aGUgbGlzdCB0aGV5IGFyZS4gdGhpcyB3aWxsIGJlIHVzZWQgZHVyaW5nXHJcbiAgLy9lZGl0aW5nIGZhdm9yaXRlIGdhbWVzLlxyXG4gIGNvbnN0IGZhdm9yaXRlR2FtZXNMaXN0ID0gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5tYXAoKGdhbWUsIGluZGV4KSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cclxuICAgICAgZGF0YS1pbmRleD17XCJcIiArIGluZGV4fVxyXG4gICAgICBkcmFnZ2FibGU9e2lzRWRpdGluZyArIFwiXCJ9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXtpc0VkaXRpbmcgPyBzdGFydERyYWdHYW1lIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRyYWdPdmVyPXtpc0VkaXRpbmcgPyBkcmFnT3ZlciA6IHVuZGVmaW5lZH1cclxuICAgICAgb25Ecm9wPXtpc0VkaXRpbmcgPyBkcm9wR2FtZU9uR2FtZSA6IHVuZGVmaW5lZH1cclxuICAgICAgb25EZWxldGU9e2RlbGV0ZUdhbWV9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRvb2xiYXIgdXNlcklkPXtwcm9wcy5pZH0gcHJvZmlsZVBpYz17cHJvcHMucHJvZmlsZVBpY30gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXBhZ2UtaGVhZGVyIG1iLTNcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3Byb3BzLnByb2ZpbGVQaWN9XHJcbiAgICAgICAgICBhbHQ9e2Ake3Byb3BzLmRpc3BsYXlOYW1lfSdzIHByb2ZpbGUgcGljdHVyZWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLXByb2ZpbGUtcGljIHJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTEgZC1pbmxpbmVcIj57cHJvcHMuZGlzcGxheU5hbWV9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdXNlci1wYWdlLW1haW4gJHtpc0VkaXRpbmcgJiYgXCJkLW1kLWZsZXggcm91bmRlZC1sZ1wifWB9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHVzZXItcGFnZS1nYW1lcyByb3VuZGVkLWxnIGQtZmxleCBmbGV4LWNvbHVtbiAke1xyXG4gICAgICAgICAgICBpc0VkaXRpbmcgPyBcImlzLWVkaXRpbmdcIiA6IFwibS1hdXRvXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2b3JpdGUtZ2FtZXMtbGlzdCBnYW1lLWxpc3RcIj5cclxuICAgICAgICAgICAge2Zhdm9yaXRlR2FtZXNMaXN0fVxyXG4gICAgICAgICAgICB7aXNFZGl0aW5nICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBpZD1cImRyb3Atc3BhY2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMyBteC0yXCJcclxuICAgICAgICAgICAgICAgIG9uRHJvcD17ZHJvcEdhbWVPbkNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVyfVxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tYmFyXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5pZCAmJlxyXG4gICAgICAgICAgICAgICghaXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyb2xsYmFja0NoYW5nZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVDaGFuZ2VzfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9yTWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNFZGl0aW5nICYmIDxHYW1lU2VhcmNoQm94IG9uQWRkPXtvbkFkZH0gLz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnRleHQucmVzLmxvY2FscykpLFxyXG4gIH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==