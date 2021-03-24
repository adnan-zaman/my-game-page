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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/**
 *
 * A component representing a single game
 *
 * @param {object} props
 */

function Game(props) {
  function stopDrag(e) {
    e.preventDefault();
    e.stopPropagation();
  } //given to div's children so only the game-container
  //is draggable


  var undraggable = {
    draggable: "false",
    onDragStart: stopDrag,
    onDragOver: stopDrag,
    onDrop: stopDrag
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-container rounded mb-3",
    "data-index": props["data-index"],
    onDragStart: props.onDragStart,
    onDragOver: props.onDragOver,
    onDrop: props.onDrop,
    draggable: props.draggable
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-img col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", _extends({
    src: props.gameCoverUrl,
    alt: "Cover art for ".concat(props.gameName),
    height: 90,
    width: 90,
    className: "rounded d-inline-block m-auto"
  }, undraggable))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-name d-inline-block ".concat(props.isEditing ? "col-md-6" : "col-md-9")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", undraggable, props.gameName)), props.isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({}, undraggable, {
    onClick: function onClick() {
      return props.onDelete(props.gameId);
    },
    className: "col-md-3 btn btn-danger"
  }), "Delete"))));
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
      onDragOver: dragOver
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
              query = "http://localhost:3000/api/search/".concat(term, "/").concat(page);
              _context.next = 5;
              return fetch(query);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              data = _context.sent;

              if (response.ok) {
                setSearchResults(data.results);
                setHasNext(data.hasNext);
              } else {
                setErrorMessage(results.message);
              }

              setLoading(false);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchAndPopulateSearchResults.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-search-box d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-results game-list"
  }, errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, errorMessage), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading..."), displayedSearchResults), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button-bar"
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
    type: "submit"
  }, "Search"), searchPage >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, searchPage > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return changePage(searchPage - 1);
    }
  }, "Prev"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "page-number"
  }, "Page:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "page-number",
    disabled: true,
    value: searchPage + 1
  }), hasNext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return changePage(searchPage + 1);
    }
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
    e.dataTransfer.setData("text/plain", e.target.dataset.index);
  } //dragover handler is needed to make element
  //draggable


  function dragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "move";
  }
  /**
   * The dragged game will be swapped with the game
   * it's dropped on.
   *
   * @param {DragEvent} e
   */


  function dropGameOnGame(e) {
    e.preventDefault();
    e.stopPropagation();

    var newFaveGames = _toConsumableArray(displayedFavoriteGames);

    var newGame = e.dataTransfer.getData("application/json"); //index of game that was dropped on

    var dropTarget = Number(e.target.dataset.index); //dataTransfer will contain a js object if the game being dragged
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
        console.log(newFaveGames);
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
  } //get a list of Game components corresponding to favorite games
  //each is given a data-index attribute that corresponds to
  //what position in the list they are. this will be used during
  //editing favorite games.


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
              return fetch("http://localhost:3000/api/favorites/".concat(props.id), {
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
  console.log(props);
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
    className: "user-page-main ".concat(isEditing && "d-flex")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-page-games rounded-lg d-flex flex-column ".concat(isEditing ? "is-editing" : "m-auto")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "favorite-games-list game-list",
    onDrop: dropGameOnContainer,
    onDragOver: isEditing ? dragOver : undefined
  }, favoriteGamesList), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    className: "danger-text"
  }, errorMessage))), isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GameSearchBox__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybUZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYW1lU2VhcmNoQm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZHJlbiIsImNoaWxkIiwidmFsdWUiLCJmaWVsZFZhbHVlcyIsInNldEZpZWxkVmFsdWVzIiwiZmllbGRWYWxpZGF0b3JzIiwidXNlUmVmIiwiaW5kZXgiLCJjbG9uZUVsZW1lbnQiLCJhZGRWYWxpZGF0b3IiLCJ2YWxpZGF0b3IiLCJjdXJyZW50IiwicHVzaCIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwicGFyZW50SWQiLCJpZCIsImUiLCJuZXdGaWVsZFZhbHVlcyIsImkiLCJ0YXJnZXQiLCJ2YWxpZGF0ZUFsbEZpZWxkcyIsImVycm9ySW5mbyIsIm9uU3VibWl0IiwiYWN0aW9uIiwibWV0aG9kIiwiY2xhc3NOYW1lIiwic3VibWl0QnRuVGV4dCIsIkZvcm1GaWVsZFRlbXBsYXRlIiwidG9BcnJheSIsImNvbnRyb2wiLCJUZXh0RmllbGQiLCJpbnB1dElkIiwibGFiZWwiLCJtaW5MZW5ndGgiLCJtaW4iLCJtYXhMZW5ndGgiLCJtYXgiLCJ2YWxpZGF0b3JBZGRlZCIsImlucHV0RmllbGQiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0ZSIsImVsZW1lbnQiLCJ2YWxpZGl0eVN0YXRlIiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJtZXNzYWdlIiwidG9vU2hvcnQiLCJ0b29Mb25nIiwibmFtZSIsInJlcXVpcmVkIiwiRW1haWxGaWVsZCIsImxhYmVsTmFtZSIsInR5cGVNaXNtYXRjaCIsIlBhc3N3b3JkRmllbGQiLCJIaWRkZW5GaWVsZCIsIkdhbWUiLCJzdG9wRHJhZyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidW5kcmFnZ2FibGUiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJnYW1lQ292ZXJVcmwiLCJnYW1lTmFtZSIsImlzRWRpdGluZyIsIm9uRGVsZXRlIiwiZ2FtZUlkIiwiR2FtZVNlYXJjaEJveCIsImRpc3BsYXllZFNlYXJjaFRlcm0iLCJzZXREaXNwbGF5ZWRTZWFyY2hUZXJtIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hQYWdlIiwic2V0U2VhcmNoUGFnZSIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsImZpcnN0UmVuZGVyIiwic3RhcnREcmFnR2FtZSIsImdhbWUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImRyYWdPdmVyIiwiZHJvcEVmZmVjdCIsImRpc3BsYXllZFNlYXJjaFJlc3VsdHMiLCJjb3ZlcnVybCIsImhhbmRsZVNlYXJjaCIsImZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzIiwiY2hhbmdlUGFnZSIsInBhZ2VOdW1iZXIiLCJ0ZXJtIiwicGFnZSIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJyZXN1bHRzIiwiVGVzdCIsIm9uQ2xpY2siLCJUb29sYmFyIiwiaGFuZGxlU3VibWl0IiwidXNlcklkIiwicHJvZmlsZVBpYyIsIlVzZXJQYWdlIiwiZ2FtZXMiLCJmYXZvcml0ZUdhbWVzIiwic2V0RmF2b3JpdGVHYW1lcyIsImRpc3BsYXllZEZhdm9yaXRlR2FtZXMiLCJzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzIiwic2V0SXNFZGl0aW5nIiwiZGF0YXNldCIsImRyb3BHYW1lT25HYW1lIiwibmV3RmF2ZUdhbWVzIiwibmV3R2FtZSIsImdldERhdGEiLCJkcm9wVGFyZ2V0IiwiTnVtYmVyIiwibmV3R2FtZUFzT2JqZWN0IiwicGFyc2UiLCJsZW5ndGgiLCJob2xkZXIiLCJ0ZW1wIiwiZHJhZ2dlZEdhbWUiLCJkcm9wR2FtZU9uQ29udGFpbmVyIiwibmV3UG9zIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUdhbWUiLCJmaWx0ZXIiLCJyb2xsYmFja0NoYW5nZXMiLCJzYXZlQ2hhbmdlcyIsImZhdmVHYW1lSWRzIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiaGVhZGVycyIsImVycm9yIiwiZmF2b3JpdGVHYW1lc0xpc3QiLCJkaXNwbGF5TmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJsb2NhbHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixF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NUosU0FBSyxFQUFFK0YsSUFBSSxDQUFDd0MsS0FBTCxDQUFXeEMsSUFBSSxDQUFDQyxTQUFMLENBQWU0RCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBM0IsQ0FBWDtBQURGLEdBQVA7QUFHRCxDOzs7Ozs7Ozs7OztBQ2hRRCxrQyIsImZpbGUiOiJwYWdlcy91c2VyUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdXNlclBhZ2UuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEdlbmVyYWwgZm9ybSBjb21wb25lbnQgdGhhdCB2YWxpZGF0ZXMgYW5kIGNvbnRyb2xzIHRoZSBzdGF0ZVxyXG4gKiBvZiBhbGwgb2YgaXRzIGZpZWxkcy4gQ2hpbGRyZW4gb2YgRm9ybSBzaG91bGQgYmUgYSBsaXN0IG9mIEZvcm1FbGVtZW50cy5cclxuICpcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIGlkIHtzdHJpbmd9IGZvcm0gaHRtbEVsZW1lbnQncyBpZFxyXG4gKlxyXG4gKiAtIG9uU3VibWl0IHtmdW5jdGlvbihldmVudCwgb2JqZWN0KX0gY2FsbGJhY2sgZm9yIHdoZW4gZm9ybSBzdWJtaXRzLlxyXG4gKiAgIEZvcm0gd2lsbCBzZW5kIHR3byBhcmd1bWVudHMsIHRoZSBmaXJzdCBpcyB0aGUgZXZlbnQsIHRoZSBzZWNvbmRcclxuICogICBpcyB0aGUgZXJyb3IgaW5mbyBvYmplY3QuIElmIG9uZSBvZiB0aGUgRm9ybUZpZWxkcyB3aXRoaW4gdGhlIEZvcm1cclxuICogICB3ZXJlIG5vdCB2YWxpZCwgdGhlIHNlY29uZCBhcmd1bWVudCB3aWxsIGJlIGFuIG9iamVjdCBjb250YWluaW5nXHJcbiAqICAgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVycm9yLiBJZiBldmVyeXRoaW5nIHdhcyB2YWxpZCwgaXQgd2lsbCBiZSBudWxsLlxyXG4gKlxyXG4gKiAtIHN1Ym1pdEJ0blRleHQge3N0cmluZ30gdGhlIHRleHRDb250ZW50IGZvciB0aGUgc3VibWl0IGJ1dHRvblxyXG4gKlxyXG4gKiAtIGFjdGlvbj8ge3N0cmluZ30gdmFsdWUgZm9yIGZvcm0ncyBhY3Rpb24gYXR0cmlidXRlXHJcbiAqXHJcbiAqIC0gbWV0aG9kPyB7c3RyaW5nfSB2YWx1ZSBmb3IgZm9ybSdzIG1ldGhvZCBhdHRyaWJ1dGVcclxuICpcclxuICogLXByb3BzLmNoaWxkcmVuIHNob3VsZCBiZSBhIGxpc3Qgb2YgRm9ybUZpZWxkIGVsZW1lbnRzLiBFYWNoIEZvcm1GaWVsZFxyXG4gKiAgc2hvdWxkIGJlIGluaXRpYWxpemVkIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSBwcm9wLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybShwcm9wcykge1xyXG4gIC8vYXJyYXkgb2YgdmFsdWVzIGZvciBhbGwgY2hpbGRyZW4gKEZvcm1GaWVsZHMpXHJcbiAgLy9pbml0aWFsaXplcyBzdGF0ZSB0byBiZSBlcXVhbCB0byB0aGUgaW5pdGlhbCB2YWx1ZSBnaXZlbiBieVxyXG4gIC8vcGFyZW50IGNvbXBvbmVudFxyXG4gIGNvbnN0IFtmaWVsZFZhbHVlcywgc2V0RmllbGRWYWx1ZXNdID0gdXNlU3RhdGUoXHJcbiAgICBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCkgPT4gY2hpbGQucHJvcHMudmFsdWUpXHJcbiAgKTtcclxuXHJcbiAgLy9saXN0IG9mIHZhbGlkYXRvcnMgb2YgYWxsIG9mIHRoaXMgRm9ybSdzIEZvcm1GaWVsZHNcclxuICBjb25zdCBmaWVsZFZhbGlkYXRvcnMgPSB1c2VSZWYoW10pO1xyXG5cclxuICAvL3Rha2VzIGNvbnRyb2wgb2YgY2hpbGRyZW5zIHN0YXRlIGFuZCBwYXNzZXMgb3duIHByb3BzXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+XHJcbiAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgdmFsdWU6IGZpZWxkVmFsdWVzW2luZGV4XSxcclxuICAgICAgYWRkVmFsaWRhdG9yOiAodmFsaWRhdG9yKSA9PiBmaWVsZFZhbGlkYXRvcnMuY3VycmVudC5wdXNoKHZhbGlkYXRvciksXHJcbiAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgIHBhcmVudElkOiBwcm9wcy5pZCwgLy9hZGQgcGFyZW50IGlkIHRvIHNvIEZvcm1GaWVsZCBjYW4gbWFrZSB1bmlxdWUgaWRzIGZvciBpdHMgZWxlbWVudHNcclxuICAgICAgaW5kZXgsXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgdmFsdWUgY2hhbmdlcyBmb3IgYWxsIG9mIGEgRm9ybSdzIEZvcm1GaWVsZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IEZvcm1GaWVsZCdzIGluZGV4IHByb3BcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSwgaW5kZXgpIHtcclxuICAgIC8vdGhlIGluZGV4IHByb3Agb2YgZWFjaCBGb3JtRmllbGQgYW5kIGZpZWxkVmFsdWVzIGFyZSBwYXJhbGxlbFxyXG4gICAgLy9zbyBpZiBhIEZvcm1GaWVsZCBwYXNzZXMgaXQncyBwcm9wcy5pbmRleCwgd2UgY2FuIHNldFxyXG4gICAgLy90aGUgY29ycmVjdCBzdGF0ZVxyXG4gICAgY29uc3QgbmV3RmllbGRWYWx1ZXMgPSBmaWVsZFZhbHVlcy5tYXAoKHZhbHVlLCBpKSA9PlxyXG4gICAgICBpID09PSBpbmRleCA/IGUudGFyZ2V0LnZhbHVlIDogdmFsdWVcclxuICAgICk7XHJcblxyXG4gICAgc2V0RmllbGRWYWx1ZXMobmV3RmllbGRWYWx1ZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbHMgZXZlcnkgRm9ybUZpZWxkJ3MgdmFsaWRhdG9yIGZ1bmN0aW9uLiBJZiBhbnkgZmllbGRcclxuICAgKiBpcyBpbnZhbGlkLCB3aWxsIHNlbmQgdGhlIGVycm9yIGluZm8gb2JqZWN0IHRvIHBhcmVudCBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVBbGxGaWVsZHMoZSkge1xyXG4gICAgZm9yIChjb25zdCB2YWxpZGF0b3Igb2YgZmllbGRWYWxpZGF0b3JzLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgZXJyb3JJbmZvID0gdmFsaWRhdG9yKCk7XHJcbiAgICAgIGlmIChlcnJvckluZm8pIHJldHVybiBwcm9wcy5vblN1Ym1pdChlLCBlcnJvckluZm8pO1xyXG4gICAgfVxyXG4gICAgcHJvcHMub25TdWJtaXQoZSwgbnVsbCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICBvblN1Ym1pdD17dmFsaWRhdGVBbGxGaWVsZHN9XHJcbiAgICAgICAgbm9WYWxpZGF0ZT17dHJ1ZX1cclxuICAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cclxuICAgICAgICBtZXRob2Q9e3Byb3BzLm1ldGhvZH1cclxuICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICB7cHJvcHMuc3VibWl0QnRuVGV4dCB8fCBcIlN1Ym1pdFwifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBGb3JtRmllbGRzIGFyZSBtZWFudCB0byBiZSB1c2VkIHdpdGggdGhlIEZvcm0gY29tcG9uZW50LlxyXG4gKiBUaGV5IGFyZSBhIGNvbWJpbmF0aW9uIG9mIGEgbGFiZWwgYW5kIGEgY29ycmVzcG9uZGluZyBpbnB1dCBlbGVtZW50IG9mIHNvbWUga2luZC5cclxuICogVGhleSBtYWtlIHVwIHRoZSBmaWVsZHMgb2YgYSBGb3JtIGNvbXBvbmVudC4gRWFjaCBGb3JtRmllbGQgaGFzIGl0cyBvd25cclxuICogdmFsaWRhdG9yIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpdHMgaW5wdXQuIEZvcm1GaWVsZCB2YWxpZGF0b3JzXHJcbiAqIGFyZSBjYWxsZWQgYnkgaXRzIHBhcmVudCBGb3JtLiBGb3JtRmllbGRzIHNob3VsZCBiZSB0aGUgY2hpbGRyZW4gb2YgYSBGb3JtXHJcbiAqIGNvbXBvbmVudCBhbmQgc2hvdWxkIGJlIGluaXRpYWxpZWQgd2l0aCBhbiBpbml0aWFsIHZhbHVlIHByb3AuIEFmdGVyIGZpcnN0IHJlbmRlcixcclxuICogdGhlIEZvcm0gY29tcG9uZW50IHdpbGwgdGFrZSBjb250cm9sIG9mIHRoZSBGb3JtRmllbGQncyB2YWx1ZSBzdGF0ZS5cclxuICpcclxuICovXHJcblxyXG4vKipcclxuICogQ29tbW9uIGxheW91dCB0ZW1wbGF0ZSB0aGF0IEZvcm1GaWVsZHMgdXNlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBleHBlY3RlZCBwcm9wczpcclxuICogLSBGb3JtRmllbGQncyBsYWJlbCBzaG91bGQgYmUgZmlyc3QgY2hpbGRcclxuICogLSBGb3JtRmllbGQncyBjb250cm9sIHNob3VsZCBiZSBzZWNvbmQgY2hpbGRcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIEZvcm1GaWVsZFRlbXBsYXRlKHByb3BzKSB7XHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKTtcclxuICAvL3ByZXNlcnZlIGV4aXN0aW5nIGNzcyBjbGFzc2VzICsgYWRkIGJvb3RzdHJhcCBjbGFzc2VzXHJcbiAgY29uc3QgY29udHJvbCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlblswXSwge1xyXG4gICAgY2xhc3NOYW1lOiAoY2hpbGRyZW5bMF0uY2xhc3NOYW1lIHx8IFwiXCIpICsgXCIgZm9ybS1jb250cm9sIHctNzVcIixcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtLTNcIj57Y29udHJvbH08L2Rpdj47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmFsIHRleHQgaW5wdXQgZmllbGQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsIHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsXHJcbiAqIC0gbmFtZSB7c3RyaW5nfSBuYW1lIGZvciBpbnB1dCBlbGVtZW50XHJcbiAqIC0gcmVxdWlyZWQ/IHtib29sZWFufSB3aGV0aGVyIHRoaXMgRm9ybUZpZWxkIGlzIHJlcXVpcmVkIG9yIG5vdFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKiAtIG1heD8ge251bWJlcn0gbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRleHRGaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke3Byb3BzLmxhYmVsfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heDtcclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBpbnB1dEZpZWxkLmN1cnJlbnQ7XHJcbiAgICBjb25zdCB2YWxpZGl0eVN0YXRlID0gZWxlbWVudC52YWxpZGl0eTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS52YWx1ZU1pc3NpbmcpXHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGAke3Byb3BzLmxhYmVsfSBpcyByZXF1aXJlZC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29TaG9ydClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtwcm9wcy5sYWJlbH0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7cHJvcHMubGFiZWx9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1GaWVsZFRlbXBsYXRlPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD17aW5wdXRJZH1cclxuICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZSB8fCBcIlwifVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSwgcHJvcHMuaW5kZXgpfVxyXG4gICAgICAgIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMubGFiZWx9XHJcbiAgICAgICAgcmVmPXtpbnB1dEZpZWxkfVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSW5wdXQgZmllbGQgZm9yIGVtYWlscy5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWw/IHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChkZWZhdWx0IGxhYmVsIGlzIEVtYWlsKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIHJlcXVpcmVkPyB7Ym9vbGVhbn0gd2hldGhlciB0aGlzIEZvcm1GaWVsZCBpcyByZXF1aXJlZCBvciBub3RcclxuICogLSBtaW4/IHtudW1iZXJ9IG1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICogLSBtYXg/IHtudW1iZXJ9IG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFbWFpbEZpZWxkKHByb3BzKSB7XHJcbiAgY29uc3QgbGFiZWxOYW1lID0gcHJvcHMubGFiZWwgfHwgXCJFbWFpbFwiO1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke2xhYmVsTmFtZX0tJHtwcm9wcy5wYXJlbnRJZH1gO1xyXG4gIGNvbnN0IG1pbkxlbmd0aCA9IHByb3BzLm1pbjtcclxuICBjb25zdCBtYXhMZW5ndGggPSBwcm9wcy5tYXggfHwgNTA7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IGlmIGlucHV0IGlzIHZhbGlkLCByZXR1cm5zIG51bGwuIE90aGVyd2lzZSwgcmV0dXJucyBhbiBvYmplY3RcclxuICAgKiBjb250YWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXJyb3JcclxuICAgKiB7bWVzc2FnZTogZXJyb3IgbWVzc2FnZSwgZWxlbWVudDogcmVmZXJlbmNlIHRvIEh0bWxFbGVtZW50IHRoYXQgY29udGFpbnMgZXJyb3J9XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gaW5wdXRGaWVsZC5jdXJyZW50O1xyXG4gICAgY29uc3QgdmFsaWRpdHlTdGF0ZSA9IGVsZW1lbnQudmFsaWRpdHk7XHJcblxyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudmFsdWVNaXNzaW5nKVxyXG4gICAgICByZXR1cm4geyBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnR5cGVNaXNtYXRjaClcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGFuIGVtYWlsLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAke21heExlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtRmllbGRUZW1wbGF0ZT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9e2lucHV0SWR9XHJcbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uQ2hhbmdlKGUsIHByb3BzLmluZGV4KX1cclxuICAgICAgICByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgbWluTGVuZ3RoPXttaW5MZW5ndGh9XHJcbiAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e2xhYmVsTmFtZX1cclxuICAgICAgICByZWY9e2lucHV0RmllbGR9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm1GaWVsZFRlbXBsYXRlPlxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnB1dCBmaWVsZCBmb3IgcGFzc3dvcmRzLiBJbnB1dCBpcyBhbHdheXMgcmVxdWlyZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsPyB7c3RyaW5nfSBGb3JtRmllbGQncyBsYWJlbCAoZGVmYXVsdCBsYWJlbCBpcyBQYXNzd29yZClcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSBtaW4/IHtudW1iZXJ9IG1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXNzd29yZEZpZWxkKHByb3BzKSB7XHJcbiAgY29uc3QgbGFiZWxOYW1lID0gcHJvcHMubGFiZWwgfHwgXCJQYXNzd29yZFwiO1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke2xhYmVsTmFtZX0tJHtwcm9wcy5wYXJlbnRJZH1gO1xyXG4gIGNvbnN0IG1pbkxlbmd0aCA9IHByb3BzLm1pbjtcclxuICBjb25zdCBtYXhMZW5ndGggPSBwcm9wcy5tYXggfHwgNTA7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGlucHV0RmllbGQuY3VycmVudDtcclxuICAgIGNvbnN0IHZhbGlkaXR5U3RhdGUgPSBlbGVtZW50LnZhbGlkaXR5O1xyXG5cclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnZhbHVlTWlzc2luZylcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBpcyByZXF1aXJlZC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29TaG9ydClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IG11c3QgYmUgYXQgbGVhc3QgJHttaW5MZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29Mb25nKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uQ2hhbmdlKGUsIHByb3BzLmluZGV4KX1cclxuICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17bGFiZWxOYW1lfVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhpZGRlbiBpbnB1dCBmaWVsZFxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogLSBsYWJlbCB7c3RyaW5nfSBGb3JtRmllbGQncyBsYWJlbCAobm90IHZpc2libGUsIGp1c3QgZm9yIG5hbWluZyBwdXJwb3NlcylcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSB2YWx1ZSB7c3RyaW5nfSBpbnB1dCdzIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSGlkZGVuRmllbGQocHJvcHMpIHtcclxuICBjb25zdCBpbnB1dElkID0gYGZvcm0tZmllbGQtJHtwcm9wcy5sYWJlbH0tJHtwcm9wcy5wYXJlbnRJZH1gO1xyXG5cclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIC8vYWx3YXlzIHZhbGlkXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgIGhpZGRlbj17dHJ1ZX1cclxuICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICByZWY9e2lucHV0RmllbGR9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm1GaWVsZFRlbXBsYXRlPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEEgY29tcG9uZW50IHJlcHJlc2VudGluZyBhIHNpbmdsZSBnYW1lXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUocHJvcHMpIHtcclxuICBmdW5jdGlvbiBzdG9wRHJhZyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuICAvL2dpdmVuIHRvIGRpdidzIGNoaWxkcmVuIHNvIG9ubHkgdGhlIGdhbWUtY29udGFpbmVyXHJcbiAgLy9pcyBkcmFnZ2FibGVcclxuICBjb25zdCB1bmRyYWdnYWJsZSA9IHtcclxuICAgIGRyYWdnYWJsZTogXCJmYWxzZVwiLFxyXG4gICAgb25EcmFnU3RhcnQ6IHN0b3BEcmFnLFxyXG4gICAgb25EcmFnT3Zlcjogc3RvcERyYWcsXHJcbiAgICBvbkRyb3A6IHN0b3BEcmFnLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImdhbWUtY29udGFpbmVyIHJvdW5kZWQgbWItM1wiXHJcbiAgICAgIGRhdGEtaW5kZXg9e3Byb3BzW1wiZGF0YS1pbmRleFwiXX1cclxuICAgICAgb25EcmFnU3RhcnQ9e3Byb3BzLm9uRHJhZ1N0YXJ0fVxyXG4gICAgICBvbkRyYWdPdmVyPXtwcm9wcy5vbkRyYWdPdmVyfVxyXG4gICAgICBvbkRyb3A9e3Byb3BzLm9uRHJvcH1cclxuICAgICAgZHJhZ2dhYmxlPXtwcm9wcy5kcmFnZ2FibGV9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1pbWcgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17cHJvcHMuZ2FtZUNvdmVyVXJsfVxyXG4gICAgICAgICAgICAgIGFsdD17YENvdmVyIGFydCBmb3IgJHtwcm9wcy5nYW1lTmFtZX1gfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17OTB9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezkwfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgZC1pbmxpbmUtYmxvY2sgbS1hdXRvXCJcclxuICAgICAgICAgICAgICB7Li4udW5kcmFnZ2FibGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ2FtZS1uYW1lIGQtaW5saW5lLWJsb2NrICR7XHJcbiAgICAgICAgICAgICAgcHJvcHMuaXNFZGl0aW5nID8gXCJjb2wtbWQtNlwiIDogXCJjb2wtbWQtOVwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cCB7Li4udW5kcmFnZ2FibGV9Pntwcm9wcy5nYW1lTmFtZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7cHJvcHMuaXNFZGl0aW5nICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHsuLi51bmRyYWdnYWJsZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkRlbGV0ZShwcm9wcy5nYW1lSWQpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC0zIGJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVTZWFyY2hCb3gocHJvcHMpIHtcclxuICAvL3NlYXJjaCB0ZXJtIGluIHNlYXJjaCBiYXJcclxuICBjb25zdCBbZGlzcGxheWVkU2VhcmNoVGVybSwgc2V0RGlzcGxheWVkU2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvL3RoZSBhY3R1YWwgdW5kZXJseWluZyBzZWFyY2ggdGVybSByZWdhcmRsZXNzIG9mIHdoYXRzIHR5cGVkXHJcbiAgLy9jbGlja2luZyBuZXh0L3ByZXYgd2lsbCBjaGFuZ2UgcGFnZXMgZm9yIHRoaXMgdmFsdWVcclxuICAvL2NsaWNraW5nIHNlYXJjaCBidXR0b24gd2lsbCBjaGFuZ2UgdGhpcyB2YWx1ZVxyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKGRpc3BsYXllZFNlYXJjaFRlcm0pO1xyXG4gIC8vcGFnZSBvZiBzZWFyY2ggcmVzdWx0c1xyXG4gIGNvbnN0IFtzZWFyY2hQYWdlLCBzZXRTZWFyY2hQYWdlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgLy9saXN0IG9mIG9iamVjdHMgdGhhdCB3aWxsIGJlIHJldHJpZXZlZCBmcm9tIHNlYXJjaCBhcGlcclxuICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy93aGV0aGVyIG9yIG5vdCBzZWFyY2ggcmVzdWx0cyBhcmUgY3VycmVudGx5IGxvYWRpbmdcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy9lcnJvciBtZXNzYWdlXHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vd2hldGhlciBvciBub3QgdGhlcmUgaXMgYSBuZXh0IHBhZ2Ugb2Ygc2VhcmNoIHJlc3VsdHNcclxuICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy91c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGl0cyBmaXJzdCByZW5kZXIgb3Igbm90XHJcbiAgY29uc3QgZmlyc3RSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhZ0dhbWUoZSwgZ2FtZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIsIEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcclxuICB9XHJcblxyXG4gIC8vZHJhZ292ZXIgaGFuZGxlciBpcyBuZWVkZWQgdG8gbWFrZSBlbGVtZW50XHJcbiAgLy9kcmFnZ2FibGVcclxuICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzcGxheWVkU2VhcmNoUmVzdWx0cyA9IHNlYXJjaFJlc3VsdHMubWFwKChnYW1lKSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBkcmFnZ2FibGU9e3RydWV9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXsoZSkgPT4gc3RhcnREcmFnR2FtZShlLCBnYW1lKX1cclxuICAgICAgb25EcmFnT3Zlcj17ZHJhZ092ZXJ9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGRpc3BsYXllZCBzZWFyY2ggdGVybVxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgc2V0RGlzcGxheWVkU2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHNlYXJjaFRlcm0gdG8gZGlzcGxheWVkU2VhcmNoVGVybVxyXG4gICAqIGFuZCBmZXRjaGVzIHNlYXJjaCByZXN1bHRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZGlzcGxheWVkU2VhcmNoVGVybSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoVGVybShkaXNwbGF5ZWRTZWFyY2hUZXJtKTtcclxuICAgIHNldFNlYXJjaFBhZ2UoMCk7XHJcbiAgICBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyhkaXNwbGF5ZWRTZWFyY2hUZXJtLCAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgcGFnZSBudW1iZXIgZm9yIHNlYXJjaFRlcm1cclxuICAgKiAobm90IGRpc3BsYXllZFNlYXJjaFRlcm0pIGFuZCBmZXRjaGVzIHNlYXJjaFxyXG4gICAqIHJlc3VsdHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZU51bWJlciBuZXcgcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBmdW5jdGlvbiBjaGFuZ2VQYWdlKHBhZ2VOdW1iZXIpIHtcclxuICAgIGlmIChwYWdlTnVtYmVyIDwgMCkgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoUGFnZShwYWdlTnVtYmVyKTtcclxuICAgIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKHNlYXJjaFRlcm0sIHBhZ2VOdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2hlcyBhIHNlYXJjaCBmcm9tIHRoZSBBUEkgYW5kIHBvcHVsYXRlcyBwYWdlXHJcbiAgICogd2l0aCBzZWFyY2ggcmVzdWx0cy4gVGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSBjYWxsZWRcclxuICAgKiB3aXRoIGEgc2VhcmNoIHRlcm0gYW5kIHBhZ2UgbWFudWFsbHkgaW5zdGVhZCBvZiByZWx5aW5nIG9uXHJcbiAgICogY2hlY2tpbmcgc3RhdGUgYXMgcmVhZGluZyBzdGF0ZSBpbW1lZGlhdGVseSBhZnRlciBzZXR0aW5nIGl0XHJcbiAgICogd2lsbCByZXR1cm4gc3RhbGUgdmFsdWVzLiBTbywgd2UgZ2l2ZSBpdCB0aGUgZnJlc2ggdmFsdWVzIG1hbnVhbGx5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlcm0gc2VhcmNoIHRlcm1cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSBzZWFyY2ggcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyh0ZXJtLCBwYWdlKSB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgcXVlcnkgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZWFyY2gvJHt0ZXJtfS8ke3BhZ2V9YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnkpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRTZWFyY2hSZXN1bHRzKGRhdGEucmVzdWx0cyk7XHJcbiAgICAgIHNldEhhc05leHQoZGF0YS5oYXNOZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShyZXN1bHRzLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLXNlYXJjaC1ib3ggZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHMgZ2FtZS1saXN0XCI+XHJcbiAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cD57ZXJyb3JNZXNzYWdlfTwvcD59XHJcbiAgICAgICAge2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XHJcbiAgICAgICAge2Rpc3BsYXllZFNlYXJjaFJlc3VsdHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1iYXJcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FtZS1zZWFyY2gtYmFyXCIgY2xhc3NOYW1lPVwiZC1ub25lXCI+XHJcbiAgICAgICAgICAgIE5hbWUgb2YgR2FtZVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImdhbWUtc2VhcmNoLWJhclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkaXNwbGF5ZWRTZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWUgb2YgR2FtZS4uLlwiXHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAge3NlYXJjaFBhZ2UgPj0gMCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAge3NlYXJjaFBhZ2UgPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2Uoc2VhcmNoUGFnZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQcmV2XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFnZS1udW1iZXJcIj5QYWdlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBpZD1cInBhZ2UtbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFBhZ2UgKyAxfVxyXG4gICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgIHtoYXNOZXh0ICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2Uoc2VhcmNoUGFnZSArIDEpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIi4vRm9ybUZpZWxkc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdChwcm9wcykge1xyXG4gIHJldHVybiA8YnV0dG9uIGlkPXtwcm9wcy5pZH0gb25DbGljaz17cHJvcHMub25DbGlja30+PC9idXR0b24+O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCwgSGlkZGVuRmllbGQgfSBmcm9tIFwiLi9Gb3JtRmllbGRzXCI7XHJcbmltcG9ydCBUZXN0IGZyb20gXCIuL1Rlc3RcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgZXhwZWN0ZWQgcHJvcHM6XHJcbiAqIC0gdXNlcklkIHtudW1iZXJ9IHRoZSBsb2dnZWQgaW4gdXNlcidzIHVzZXIgaWRcclxuICogLSBwcm9maWxlUGljIHtzdHJpbmd9IHNyYyB1cmwgZm9yIHVzZXIncyBwcm9maWxlIHBpY3R1cmVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvb2xiYXIocHJvcHMpIHtcclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSwgZXJyb3JJbmZvKSB7XHJcbiAgICBpZiAoZXJyb3JJbmZvKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBpZD1cIlRvb2xiYXItRm9ybVwiXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICBzdWJtaXRCdG5UZXh0PVwiR28hXCJcclxuICAgICAgICBtZXRob2Q9XCJnZXRcIlxyXG4gICAgICAgIGFjdGlvbj1cIi9zZWFyY2hcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIlNlYXJjaFwiIG5hbWU9XCJxdWVyeVwiIHZhbHVlPVwiXCIgLz5cclxuICAgICAgICA8SGlkZGVuRmllbGQgbGFiZWw9XCJQYWdlXCIgbmFtZT1cInBhZ2VcIiB2YWx1ZT1cIjBcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxhIGhyZWY9e2AvdXNlci8ke3Byb3BzLnVzZXJJZH1gfT5cclxuICAgICAgICA8aW1nIHNyYz17cHJvcHMucHJvZmlsZVBpY30gYWx0PXtgWW91ciBwcm9maWxlIHBpY3R1cmVgfSAvPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVcIjtcclxuaW1wb3J0IEdhbWVTZWFyY2hCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FtZVNlYXJjaEJveFwiO1xyXG5cclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9vbGJhclwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIFRoZSBwYWdlIHRoYXQgaXMgZGlzcGxheWVkIHdoZW5cclxuICogdmlld2luZyBhIHVzZXIncyBwcm9maWxlXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQYWdlKHByb3BzKSB7XHJcbiAgLyogc2V0dGluZyBzdGF0ZSAqL1xyXG4gIC8vdGhlIHVzZXIncyBhY3R1YWwgZmF2b3JpdGUgZ2FtZXNcclxuICBjb25zdCBbZmF2b3JpdGVHYW1lcywgc2V0RmF2b3JpdGVHYW1lc10gPSB1c2VTdGF0ZShwcm9wcy5nYW1lcyk7XHJcbiAgLy90aGUgdXNlcidzIGZhdm9yaXRlIGdhbWUgYXMgY3VycmVudGx5IGRpc3BsYXllZC4gdGhlc2UgbWF5IGRpZmZlclxyXG4gIC8vZnJvbSBhY3R1YWwgZmF2b3JpdGUgZ2FtZXMgZHVyaW5nIGVkaXRpbmdcclxuICBjb25zdCBbZGlzcGxheWVkRmF2b3JpdGVHYW1lcywgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lc10gPSB1c2VTdGF0ZShcclxuICAgIGZhdm9yaXRlR2FtZXNcclxuICApO1xyXG4gIC8vd2hldGhlciBvciBub3QgdXNlciBpcyBlZGl0aW5nIGZhdm9yaXRlIGdhbWVzXHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBhIEdhbWUgaXMgZHJhZ2dlZC4gQWRkc1xyXG4gICAqIHRoZSBHYW1lJ3MgZGF0YS1pbmRleCBhdHRyaWJ1dGUgdG9cclxuICAgKiBEcmFnRXZlbnQuZGF0YVRyYW5zZmVyIHRvIGJlIHVzZWQgYnlcclxuICAgKiBkcm9wR2FtZSgpIGxhdGVyIG9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhZ0dhbWUoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLy9kcmFnb3ZlciBoYW5kbGVyIGlzIG5lZWRlZCB0byBtYWtlIGVsZW1lbnRcclxuICAvL2RyYWdnYWJsZVxyXG4gIGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHJhZ2dlZCBnYW1lIHdpbGwgYmUgc3dhcHBlZCB3aXRoIHRoZSBnYW1lXHJcbiAgICogaXQncyBkcm9wcGVkIG9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBkcm9wR2FtZU9uR2FtZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgbmV3RmF2ZUdhbWVzID0gWy4uLmRpc3BsYXllZEZhdm9yaXRlR2FtZXNdO1xyXG4gICAgY29uc3QgbmV3R2FtZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgLy9pbmRleCBvZiBnYW1lIHRoYXQgd2FzIGRyb3BwZWQgb25cclxuICAgIGNvbnN0IGRyb3BUYXJnZXQgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XHJcbiAgICAvL2RhdGFUcmFuc2ZlciB3aWxsIGNvbnRhaW4gYSBqcyBvYmplY3QgaWYgdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZFxyXG4gICAgLy9pcyBmcm9tIHNlYXJjaCByZXN1bHRzLCBtZWFuaW5nIGEgbmV3IGdhbWUgaXMgYmVpbmcgYWRkZWRcclxuICAgIC8vdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAgIGlmIChuZXdHYW1lKSB7XHJcbiAgICAgIGNvbnN0IG5ld0dhbWVBc09iamVjdCA9IEpTT04ucGFyc2UobmV3R2FtZSk7XHJcbiAgICAgIC8vd2UgcmVwbGFjZSBlbGVtZW50cyBhcyB3ZSBnbywgZXZlbnR1YWxseSB3ZSBhbiBlbGVtZW50IHRvIG5ld0ZhdmVHYW1lc1tuZXdGYXZlR2FtZXMubGVuZ3RoXVxyXG4gICAgICAvL3RoaXMgaW5jcmVhc2VzIHRoZSBsZW5ndGggYW5kIHRoZSBsb29wIGdvZXMgb24gZm9yZXZlclxyXG4gICAgICAvL3NvIHdlIGtlZXAgdGhlIGxlbmd0aCBvZiB0aGUgbGlzdCBiZWZvcmUgd2Ugc3RhcnRcclxuICAgICAgY29uc3QgbGVuZ3RoID0gbmV3RmF2ZUdhbWVzLmxlbmd0aDtcclxuICAgICAgLy9nYW1lIHRvIGJlIGFkZGVkIGluXHJcbiAgICAgIGxldCBob2xkZXIgPSBuZXdHYW1lQXNPYmplY3Q7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG5ld0ZhdmVHYW1lc1tpXSAmJiBuZXdGYXZlR2FtZXNbaV0uaWQgPT09IG5ld0dhbWVBc09iamVjdC5pZClcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3N0YXJ0IHN3YXBwaW5nIGZyb20gZHJvcFRhcmdldCBvbndhcmRzXHJcbiAgICAgICAgaWYgKGkgPj0gZHJvcFRhcmdldCkge1xyXG4gICAgICAgICAgLy9wdXQgaG9sZGVyIGludG8gdGhlIGxpc3QsIHRha2Ugd2hhdCB3YXMgdGhlcmUgYW5kIHB1dCBpbnRvIGhvbGRlclxyXG4gICAgICAgICAgY29uc3QgdGVtcCA9IG5ld0ZhdmVHYW1lc1tpXTtcclxuICAgICAgICAgIG5ld0ZhdmVHYW1lc1tpXSA9IGhvbGRlcjtcclxuICAgICAgICAgIGhvbGRlciA9IHRlbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2lmIHRoZXJlIGlzIG5vIGpzIG9iamVjdCwgdGhlbiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkIGlzIGFuIGFscmVhZHlcclxuICAgIC8vZXhpc3RpbmcgZ2FtZSBzbyB3ZSBqdXN0IHN3YXAgcGxhY2VzXHJcbiAgICBlbHNlIHtcclxuICAgICAgLy90aGUgZ2FtZSB0aGF0IHdhcyBiZWluZyBkcmFnZ2VkXHJcbiAgICAgIGNvbnN0IGRyYWdnZWRHYW1lID0gTnVtYmVyKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpKTtcclxuICAgICAgY29uc3QgdGVtcCA9IG5ld0ZhdmVHYW1lc1tkcm9wVGFyZ2V0XTtcclxuICAgICAgbmV3RmF2ZUdhbWVzW2Ryb3BUYXJnZXRdID0gbmV3RmF2ZUdhbWVzW2RyYWdnZWRHYW1lXTtcclxuICAgICAgbmV3RmF2ZUdhbWVzW2RyYWdnZWRHYW1lXSA9IHRlbXA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhuZXdGYXZlR2FtZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRyYWdnZWQgZ2FtZSB3aWxsIGJlIGFkZGVkIHRvIHRoZVxyXG4gICAqIGVuZCBvZiB0aGUgbGlzdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBkcm9wR2FtZU9uQ29udGFpbmVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgbmV3RmF2ZUdhbWVzID0gWy4uLmRpc3BsYXllZEZhdm9yaXRlR2FtZXNdO1xyXG4gICAgY29uc3QgbmV3R2FtZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgLy9kYXRhVHJhbnNmZXIgd2lsbCBjb250YWluIGEganMgb2JqZWN0IGlmIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWRcclxuICAgIC8vaXMgZnJvbSBzZWFyY2ggcmVzdWx0cywgbWVhbmluZyBhIG5ldyBnYW1lIGlzIGJlaW5nIGFkZGVkXHJcbiAgICAvL3RvIGZhdm9yaXRlIGdhbWVzXHJcbiAgICBpZiAobmV3R2FtZSkge1xyXG4gICAgICBuZXdGYXZlR2FtZXMucHVzaChKU09OLnBhcnNlKG5ld0dhbWUpKTtcclxuICAgIH1cclxuICAgIC8vaWYgdGhlcmUgaXMgbm8ganMgb2JqZWN0LCB0aGVuIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWQgaXMgYW4gYWxyZWFkeVxyXG4gICAgLy9leGlzdGluZyBnYW1lLiBkcmFnZ2VkIGdhbWUgaXMgYWRkZWQgdG8gdGhlIGVuZCBhbmQgcmVzdCBhcmUgc2hpZnRlZCB1cFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxldCBuZXdQb3MgPSBOdW1iZXIoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIikpO1xyXG4gICAgICBsZXQgZHJhZ2dlZEdhbWUgPSBuZXdGYXZlR2FtZXNbbmV3UG9zXTtcclxuICAgICAgLy9zaGlmdCBldmVyeXRoaW5nIHRvd2FyZHMgdGhlIGZyb250XHJcbiAgICAgIGZvciAoOyBuZXdQb3MgPCBuZXdGYXZlR2FtZXMubGVuZ3RoIC0gMTsgbmV3UG9zKyspXHJcbiAgICAgICAgbmV3RmF2ZUdhbWVzW25ld1Bvc10gPSBuZXdGYXZlR2FtZXNbbmV3UG9zICsgMV07XHJcblxyXG4gICAgICAvL2FkZCBkcmFnZ2VkR2FtZSBiYWNrIHRvIHRoZSBlbmRcclxuICAgICAgbmV3RmF2ZUdhbWVzW25ld1Bvc10gPSBkcmFnZ2VkR2FtZTtcclxuICAgICAgY29uc29sZS5sb2cobmV3RmF2ZUdhbWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKG5ld0ZhdmVHYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGVzIGEgZ2FtZSBmcm9tIGRpc3BsYXllZEZhdm9yaXRlR2FtZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZ2FtZUlkIHRoZSBpZCBvZiBnYW1lIHRvIGJlIGRlbGV0ZWRcclxuICAgKi9cclxuICBmdW5jdGlvbiBkZWxldGVHYW1lKGdhbWVJZCkge1xyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhcclxuICAgICAgZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5maWx0ZXIoKGdhbWUpID0+IGdhbWUuaWQgIT09IGdhbWVJZClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBlZGl0aW5nIGlzIGNhbmNlbGxlZC4gU2V0cyBkaXNwbGF5ZWQgZmF2b3JpdGUgZ2FtZXNcclxuICAgKiB0byBhY3R1YWwgZmF2b3JpdGUgZ2FtZXMuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcm9sbGJhY2tDaGFuZ2VzKCkge1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhmYXZvcml0ZUdhbWVzKTtcclxuICAgIHNldElzRWRpdGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzYXZlQ2hhbmdlcygpIHtcclxuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcclxuICAgIGNvbnN0IGZhdmVHYW1lSWRzID0gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5tYXAoKGdhbWUpID0+IGdhbWUuaWQpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Zhdm9yaXRlcy8ke3Byb3BzLmlkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmYXZlR2FtZUlkcyksXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7XHJcbiAgICAgIHNldEZhdm9yaXRlR2FtZXMoZGlzcGxheWVkRmF2b3JpdGVHYW1lcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9nZXQgYSBsaXN0IG9mIEdhbWUgY29tcG9uZW50cyBjb3JyZXNwb25kaW5nIHRvIGZhdm9yaXRlIGdhbWVzXHJcbiAgLy9lYWNoIGlzIGdpdmVuIGEgZGF0YS1pbmRleCBhdHRyaWJ1dGUgdGhhdCBjb3JyZXNwb25kcyB0b1xyXG4gIC8vd2hhdCBwb3NpdGlvbiBpbiB0aGUgbGlzdCB0aGV5IGFyZS4gdGhpcyB3aWxsIGJlIHVzZWQgZHVyaW5nXHJcbiAgLy9lZGl0aW5nIGZhdm9yaXRlIGdhbWVzLlxyXG4gIGNvbnN0IGZhdm9yaXRlR2FtZXNMaXN0ID0gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5tYXAoKGdhbWUsIGluZGV4KSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cclxuICAgICAgZGF0YS1pbmRleD17XCJcIiArIGluZGV4fVxyXG4gICAgICBkcmFnZ2FibGU9e2lzRWRpdGluZyArIFwiXCJ9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXtpc0VkaXRpbmcgPyBzdGFydERyYWdHYW1lIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRyYWdPdmVyPXtpc0VkaXRpbmcgPyBkcmFnT3ZlciA6IHVuZGVmaW5lZH1cclxuICAgICAgb25Ecm9wPXtpc0VkaXRpbmcgPyBkcm9wR2FtZU9uR2FtZSA6IHVuZGVmaW5lZH1cclxuICAgICAgb25EZWxldGU9e2RlbGV0ZUdhbWV9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUb29sYmFyIHVzZXJJZD17cHJvcHMuaWR9IHByb2ZpbGVQaWM9e3Byb3BzLnByb2ZpbGVQaWN9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wYWdlLWhlYWRlciBtYi0zXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtwcm9wcy5wcm9maWxlUGljfVxyXG4gICAgICAgICAgYWx0PXtgJHtwcm9wcy5kaXNwbGF5TmFtZX0ncyBwcm9maWxlIHBpY3R1cmVgfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1wcm9maWxlLXBpYyByb3VuZGVkLWNpcmNsZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0xIGQtaW5saW5lXCI+e3Byb3BzLmRpc3BsYXlOYW1lfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHVzZXItcGFnZS1tYWluICR7aXNFZGl0aW5nICYmIFwiZC1mbGV4XCJ9YH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdXNlci1wYWdlLWdhbWVzIHJvdW5kZWQtbGcgZC1mbGV4IGZsZXgtY29sdW1uICR7XHJcbiAgICAgICAgICAgIGlzRWRpdGluZyA/IFwiaXMtZWRpdGluZ1wiIDogXCJtLWF1dG9cIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmYXZvcml0ZS1nYW1lcy1saXN0IGdhbWUtbGlzdFwiXHJcbiAgICAgICAgICAgIG9uRHJvcD17ZHJvcEdhbWVPbkNvbnRhaW5lcn1cclxuICAgICAgICAgICAgb25EcmFnT3Zlcj17aXNFZGl0aW5nID8gZHJhZ092ZXIgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtmYXZvcml0ZUdhbWVzTGlzdH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tYmFyXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5pZCAmJlxyXG4gICAgICAgICAgICAgICghaXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyb2xsYmFja0NoYW5nZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVDaGFuZ2VzfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhbmdlci10ZXh0XCI+e2Vycm9yTWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNFZGl0aW5nICYmIDxHYW1lU2VhcmNoQm94IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb250ZXh0LnJlcy5sb2NhbHMpKSxcclxuICB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=