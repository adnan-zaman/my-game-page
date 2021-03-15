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
    method: props.method
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-md mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary col-md-1",
    type: "submit"
  }, props.submitBtnText || "Submit")))));
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

  var label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children[0], {
    className: (children[0].className || "") + " col-form-label col-md-1"
  });
  var control = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children[1], {
    className: (children[1].className || "") + " form-control"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-md mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-11"
  }, control)));
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormFieldTemplate, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: inputId
  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: inputId,
    name: props.name,
    value: props.value || "",
    onChange: function onChange(e) {
      return props.onChange(e, props.index);
    },
    required: props.required,
    minLength: minLength,
    maxLength: maxLength,
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormFieldTemplate, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: inputId
  }, labelName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormFieldTemplate, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: inputId
  }, labelName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormFieldTemplate, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: inputId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
    className: "game-container",
    "data-index": props["data-index"],
    onDragStart: props.onDragStart,
    onDragOver: props.onDragOver,
    onDrop: props.onDrop,
    draggable: props.draggable
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", _extends({
    src: props.gameCoverUrl,
    alt: "Cover art for ".concat(props.gameName),
    height: 90,
    width: 90
  }, undraggable)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", undraggable, props.gameName), props.isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({}, undraggable, {
    onClick: function onClick() {
      return props.onDelete(props.gameId);
    }
  }), "Delete"));
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "game-search-bar"
  }, "Name of Game:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "game-search-bar",
    value: displayedSearchTerm,
    onChange: handleChange
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
  }, "Next")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-results"
  }, errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, errorMessage), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading..."), displayedSearchResults));
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.profilePic,
    alt: "".concat(props.displayName, "'s profile picture")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.displayName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "favorite-games-list",
    onDrop: dropGameOnContainer,
    onDragOver: isEditing ? dragOver : undefined
  }, favoriteGamesList), props.id && (!isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setIsEditing(true);
    }
  }, "Edit") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: rollbackChanges
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: saveChanges
  }, "Save"))), errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, errorMessage)), isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GameSearchBox__WEBPACK_IMPORTED_MODULE_2__["default"], null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybUZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYW1lU2VhcmNoQm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZHJlbiIsImNoaWxkIiwidmFsdWUiLCJmaWVsZFZhbHVlcyIsInNldEZpZWxkVmFsdWVzIiwiZmllbGRWYWxpZGF0b3JzIiwidXNlUmVmIiwiaW5kZXgiLCJjbG9uZUVsZW1lbnQiLCJhZGRWYWxpZGF0b3IiLCJ2YWxpZGF0b3IiLCJjdXJyZW50IiwicHVzaCIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwicGFyZW50SWQiLCJpZCIsImUiLCJuZXdGaWVsZFZhbHVlcyIsImkiLCJ0YXJnZXQiLCJ2YWxpZGF0ZUFsbEZpZWxkcyIsImVycm9ySW5mbyIsIm9uU3VibWl0IiwiYWN0aW9uIiwibWV0aG9kIiwic3VibWl0QnRuVGV4dCIsIkZvcm1GaWVsZFRlbXBsYXRlIiwidG9BcnJheSIsImxhYmVsIiwiY2xhc3NOYW1lIiwiY29udHJvbCIsIlRleHRGaWVsZCIsImlucHV0SWQiLCJtaW5MZW5ndGgiLCJtaW4iLCJtYXhMZW5ndGgiLCJtYXgiLCJ2YWxpZGF0b3JBZGRlZCIsImlucHV0RmllbGQiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0ZSIsImVsZW1lbnQiLCJ2YWxpZGl0eVN0YXRlIiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJtZXNzYWdlIiwidG9vU2hvcnQiLCJ0b29Mb25nIiwibmFtZSIsInJlcXVpcmVkIiwiRW1haWxGaWVsZCIsImxhYmVsTmFtZSIsInR5cGVNaXNtYXRjaCIsIlBhc3N3b3JkRmllbGQiLCJIaWRkZW5GaWVsZCIsIkdhbWUiLCJzdG9wRHJhZyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidW5kcmFnZ2FibGUiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJnYW1lQ292ZXJVcmwiLCJnYW1lTmFtZSIsImlzRWRpdGluZyIsIm9uRGVsZXRlIiwiZ2FtZUlkIiwiR2FtZVNlYXJjaEJveCIsImRpc3BsYXllZFNlYXJjaFRlcm0iLCJzZXREaXNwbGF5ZWRTZWFyY2hUZXJtIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hQYWdlIiwic2V0U2VhcmNoUGFnZSIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsImZpcnN0UmVuZGVyIiwic3RhcnREcmFnR2FtZSIsImdhbWUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImRyYWdPdmVyIiwiZHJvcEVmZmVjdCIsImRpc3BsYXllZFNlYXJjaFJlc3VsdHMiLCJjb3ZlcnVybCIsImhhbmRsZVNlYXJjaCIsImZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzIiwiY2hhbmdlUGFnZSIsInBhZ2VOdW1iZXIiLCJ0ZXJtIiwicGFnZSIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJyZXN1bHRzIiwiVGVzdCIsIm9uQ2xpY2siLCJUb29sYmFyIiwiaGFuZGxlU3VibWl0IiwiVXNlclBhZ2UiLCJnYW1lcyIsImZhdm9yaXRlR2FtZXMiLCJzZXRGYXZvcml0ZUdhbWVzIiwiZGlzcGxheWVkRmF2b3JpdGVHYW1lcyIsInNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMiLCJzZXRJc0VkaXRpbmciLCJkYXRhc2V0IiwiZHJvcEdhbWVPbkdhbWUiLCJuZXdGYXZlR2FtZXMiLCJuZXdHYW1lIiwiZ2V0RGF0YSIsImRyb3BUYXJnZXQiLCJOdW1iZXIiLCJuZXdHYW1lQXNPYmplY3QiLCJwYXJzZSIsImxlbmd0aCIsImhvbGRlciIsInRlbXAiLCJkcmFnZ2VkR2FtZSIsImRyb3BHYW1lT25Db250YWluZXIiLCJuZXdQb3MiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlR2FtZSIsImZpbHRlciIsInJvbGxiYWNrQ2hhbmdlcyIsInNhdmVDaGFuZ2VzIiwiZmF2ZUdhbWVJZHMiLCJjcmVkZW50aWFscyIsImJvZHkiLCJoZWFkZXJzIiwiZXJyb3IiLCJmYXZvcml0ZUdhbWVzTGlzdCIsInByb2ZpbGVQaWMiLCJkaXNwbGF5TmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJsb2NhbHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJ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LHFGQUNFO0FBQ0UsYUFBUyxFQUFDLHFCQURaO0FBRUUsVUFBTSxFQUFFZixtQkFGVjtBQUdFLGNBQVUsRUFBRWxFLFNBQVMsR0FBR3lCLFFBQUgsR0FBY3BEO0FBSHJDLEtBS0cwRyxpQkFMSCxDQURGLEVBUUd2SixLQUFLLENBQUNxQixFQUFOLEtBQ0UsQ0FBQ21ELFNBQUQsZ0JBQ0M7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNb0QsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQTtBQUFqQixZQURELGdCQUdDLHFJQUNFO0FBQVEsV0FBTyxFQUFFb0I7QUFBakIsY0FERixlQUVFO0FBQVEsV0FBTyxFQUFFQztBQUFqQixZQUZGLENBSkgsQ0FSSCxFQWlCRzNELFlBQVksaUJBQUkseUVBQU9BLFlBQVAsQ0FqQm5CLENBUEYsRUEwQkdkLFNBQVMsaUJBQUksMkRBQUMsaUVBQUQsT0ExQmhCLENBREY7QUE4QkQ7QUFFTSxTQUFTa0Ysa0JBQVQsQ0FBNEJDLE9BQTVCLEVBQXFDO0FBQzFDLFNBQU87QUFDTDNKLFNBQUssRUFBRStGLElBQUksQ0FBQ3NDLEtBQUwsQ0FBV3RDLElBQUksQ0FBQ0MsU0FBTCxDQUFlMkQsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQTNCLENBQVg7QUFERixHQUFQO0FBR0QsQzs7Ozs7Ozs7Ozs7QUN4T0Qsa0MiLCJmaWxlIjoicGFnZXMvdXNlclBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3VzZXJQYWdlLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBHZW5lcmFsIGZvcm0gY29tcG9uZW50IHRoYXQgdmFsaWRhdGVzIGFuZCBjb250cm9scyB0aGUgc3RhdGVcclxuICogb2YgYWxsIG9mIGl0cyBmaWVsZHMuIENoaWxkcmVuIG9mIEZvcm0gc2hvdWxkIGJlIGEgbGlzdCBvZiBGb3JtRWxlbWVudHMuXHJcbiAqXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBFeHBlY3RlZCBwcm9wczpcclxuICogLSBpZCB7c3RyaW5nfSBmb3JtIGh0bWxFbGVtZW50J3MgaWRcclxuICpcclxuICogLSBvblN1Ym1pdCB7ZnVuY3Rpb24oZXZlbnQsIG9iamVjdCl9IGNhbGxiYWNrIGZvciB3aGVuIGZvcm0gc3VibWl0cy5cclxuICogICBGb3JtIHdpbGwgc2VuZCB0d28gYXJndW1lbnRzLCB0aGUgZmlyc3QgaXMgdGhlIGV2ZW50LCB0aGUgc2Vjb25kXHJcbiAqICAgaXMgdGhlIGVycm9yIGluZm8gb2JqZWN0LiBJZiBvbmUgb2YgdGhlIEZvcm1GaWVsZHMgd2l0aGluIHRoZSBGb3JtXHJcbiAqICAgd2VyZSBub3QgdmFsaWQsIHRoZSBzZWNvbmQgYXJndW1lbnQgd2lsbCBiZSBhbiBvYmplY3QgY29udGFpbmluZ1xyXG4gKiAgIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlcnJvci4gSWYgZXZlcnl0aGluZyB3YXMgdmFsaWQsIGl0IHdpbGwgYmUgbnVsbC5cclxuICpcclxuICogLSBzdWJtaXRCdG5UZXh0IHtzdHJpbmd9IHRoZSB0ZXh0Q29udGVudCBmb3IgdGhlIHN1Ym1pdCBidXR0b25cclxuICpcclxuICogLSBhY3Rpb24/IHtzdHJpbmd9IHZhbHVlIGZvciBmb3JtJ3MgYWN0aW9uIGF0dHJpYnV0ZVxyXG4gKlxyXG4gKiAtIG1ldGhvZD8ge3N0cmluZ30gdmFsdWUgZm9yIGZvcm0ncyBtZXRob2QgYXR0cmlidXRlXHJcbiAqXHJcbiAqIC1wcm9wcy5jaGlsZHJlbiBzaG91bGQgYmUgYSBsaXN0IG9mIEZvcm1GaWVsZCBlbGVtZW50cy4gRWFjaCBGb3JtRmllbGRcclxuICogIHNob3VsZCBiZSBpbml0aWFsaXplZCB3aXRoIGFuIGluaXRpYWwgdmFsdWUgcHJvcC5cclxuICpcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcclxuICAvL2FycmF5IG9mIHZhbHVlcyBmb3IgYWxsIGNoaWxkcmVuIChGb3JtRmllbGRzKVxyXG4gIC8vaW5pdGlhbGl6ZXMgc3RhdGUgdG8gYmUgZXF1YWwgdG8gdGhlIGluaXRpYWwgdmFsdWUgZ2l2ZW4gYnlcclxuICAvL3BhcmVudCBjb21wb25lbnRcclxuICBjb25zdCBbZmllbGRWYWx1ZXMsIHNldEZpZWxkVmFsdWVzXSA9IHVzZVN0YXRlKFxyXG4gICAgUmVhY3QuQ2hpbGRyZW4ubWFwKHByb3BzLmNoaWxkcmVuLCAoY2hpbGQpID0+IGNoaWxkLnByb3BzLnZhbHVlKVxyXG4gICk7XHJcblxyXG4gIC8vbGlzdCBvZiB2YWxpZGF0b3JzIG9mIGFsbCBvZiB0aGlzIEZvcm0ncyBGb3JtRmllbGRzXHJcbiAgY29uc3QgZmllbGRWYWxpZGF0b3JzID0gdXNlUmVmKFtdKTtcclxuXHJcbiAgLy90YWtlcyBjb250cm9sIG9mIGNoaWxkcmVucyBzdGF0ZSBhbmQgcGFzc2VzIG93biBwcm9wc1xyXG4gIGNvbnN0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKHByb3BzLmNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PlxyXG4gICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgIHZhbHVlOiBmaWVsZFZhbHVlc1tpbmRleF0sXHJcbiAgICAgIGFkZFZhbGlkYXRvcjogKHZhbGlkYXRvcikgPT4gZmllbGRWYWxpZGF0b3JzLmN1cnJlbnQucHVzaCh2YWxpZGF0b3IpLFxyXG4gICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxyXG4gICAgICBwYXJlbnRJZDogcHJvcHMuaWQsIC8vYWRkIHBhcmVudCBpZCB0byBzbyBGb3JtRmllbGQgY2FuIG1ha2UgdW5pcXVlIGlkcyBmb3IgaXRzIGVsZW1lbnRzXHJcbiAgICAgIGluZGV4LFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIHZhbHVlIGNoYW5nZXMgZm9yIGFsbCBvZiBhIEZvcm0ncyBGb3JtRmllbGRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCBGb3JtRmllbGQncyBpbmRleCBwcm9wXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUsIGluZGV4KSB7XHJcbiAgICAvL3RoZSBpbmRleCBwcm9wIG9mIGVhY2ggRm9ybUZpZWxkIGFuZCBmaWVsZFZhbHVlcyBhcmUgcGFyYWxsZWxcclxuICAgIC8vc28gaWYgYSBGb3JtRmllbGQgcGFzc2VzIGl0J3MgcHJvcHMuaW5kZXgsIHdlIGNhbiBzZXRcclxuICAgIC8vdGhlIGNvcnJlY3Qgc3RhdGVcclxuICAgIGNvbnN0IG5ld0ZpZWxkVmFsdWVzID0gZmllbGRWYWx1ZXMubWFwKCh2YWx1ZSwgaSkgPT5cclxuICAgICAgaSA9PT0gaW5kZXggPyBlLnRhcmdldC52YWx1ZSA6IHZhbHVlXHJcbiAgICApO1xyXG5cclxuICAgIHNldEZpZWxkVmFsdWVzKG5ld0ZpZWxkVmFsdWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxzIGV2ZXJ5IEZvcm1GaWVsZCdzIHZhbGlkYXRvciBmdW5jdGlvbi4gSWYgYW55IGZpZWxkXHJcbiAgICogaXMgaW52YWxpZCwgd2lsbCBzZW5kIHRoZSBlcnJvciBpbmZvIG9iamVjdCB0byBwYXJlbnQgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtldmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlQWxsRmllbGRzKGUpIHtcclxuICAgIGZvciAoY29uc3QgdmFsaWRhdG9yIG9mIGZpZWxkVmFsaWRhdG9ycy5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IGVycm9ySW5mbyA9IHZhbGlkYXRvcigpO1xyXG4gICAgICBpZiAoZXJyb3JJbmZvKSByZXR1cm4gcHJvcHMub25TdWJtaXQoZSwgZXJyb3JJbmZvKTtcclxuICAgIH1cclxuICAgIHByb3BzLm9uU3VibWl0KGUsIG51bGwpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgb25TdWJtaXQ9e3ZhbGlkYXRlQWxsRmllbGRzfVxyXG4gICAgICAgIG5vVmFsaWRhdGU9e3RydWV9XHJcbiAgICAgICAgYWN0aW9uPXtwcm9wcy5hY3Rpb259XHJcbiAgICAgICAgbWV0aG9kPXtwcm9wcy5tZXRob2R9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbWQgbWItM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgY29sLW1kLTFcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAge3Byb3BzLnN1Ym1pdEJ0blRleHQgfHwgXCJTdWJtaXRcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKipcclxuICogRm9ybUZpZWxkcyBhcmUgbWVhbnQgdG8gYmUgdXNlZCB3aXRoIHRoZSBGb3JtIGNvbXBvbmVudC5cclxuICogVGhleSBhcmUgYSBjb21iaW5hdGlvbiBvZiBhIGxhYmVsIGFuZCBhIGNvcnJlc3BvbmRpbmcgaW5wdXQgZWxlbWVudCBvZiBzb21lIGtpbmQuXHJcbiAqIFRoZXkgbWFrZSB1cCB0aGUgZmllbGRzIG9mIGEgRm9ybSBjb21wb25lbnQuIEVhY2ggRm9ybUZpZWxkIGhhcyBpdHMgb3duXHJcbiAqIHZhbGlkYXRvciBmdW5jdGlvbiB0aGF0IGNoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaXRzIGlucHV0LiBGb3JtRmllbGQgdmFsaWRhdG9yc1xyXG4gKiBhcmUgY2FsbGVkIGJ5IGl0cyBwYXJlbnQgRm9ybS4gRm9ybUZpZWxkcyBzaG91bGQgYmUgdGhlIGNoaWxkcmVuIG9mIGEgRm9ybVxyXG4gKiBjb21wb25lbnQgYW5kIHNob3VsZCBiZSBpbml0aWFsaWVkIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSBwcm9wLiBBZnRlciBmaXJzdCByZW5kZXIsXHJcbiAqIHRoZSBGb3JtIGNvbXBvbmVudCB3aWxsIHRha2UgY29udHJvbCBvZiB0aGUgRm9ybUZpZWxkJ3MgdmFsdWUgc3RhdGUuXHJcbiAqXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIENvbW1vbiBsYXlvdXQgdGVtcGxhdGUgdGhhdCBGb3JtRmllbGRzIHVzZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgZXhwZWN0ZWQgcHJvcHM6XHJcbiAqIC0gRm9ybUZpZWxkJ3MgbGFiZWwgc2hvdWxkIGJlIGZpcnN0IGNoaWxkXHJcbiAqIC0gRm9ybUZpZWxkJ3MgY29udHJvbCBzaG91bGQgYmUgc2Vjb25kIGNoaWxkXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiBGb3JtRmllbGRUZW1wbGF0ZShwcm9wcykge1xyXG4gIGNvbnN0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShwcm9wcy5jaGlsZHJlbik7XHJcbiAgLy9wcmVzZXJ2ZSBleGlzdGluZyBjc3MgY2xhc3NlcyArIGFkZCBib290c3RyYXAgY2xhc3Nlc1xyXG4gIGNvbnN0IGxhYmVsID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuWzBdLCB7XHJcbiAgICBjbGFzc05hbWU6IChjaGlsZHJlblswXS5jbGFzc05hbWUgfHwgXCJcIikgKyBcIiBjb2wtZm9ybS1sYWJlbCBjb2wtbWQtMVwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNvbnRyb2wgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW5bMV0sIHtcclxuICAgIGNsYXNzTmFtZTogKGNoaWxkcmVuWzFdLmNsYXNzTmFtZSB8fCBcIlwiKSArIFwiIGZvcm0tY29udHJvbFwiLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbWQgbWItM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIHtsYWJlbH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMVwiPntjb250cm9sfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmFsIHRleHQgaW5wdXQgZmllbGQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsIHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsXHJcbiAqIC0gbmFtZSB7c3RyaW5nfSBuYW1lIGZvciBpbnB1dCBlbGVtZW50XHJcbiAqIC0gcmVxdWlyZWQ/IHtib29sZWFufSB3aGV0aGVyIHRoaXMgRm9ybUZpZWxkIGlzIHJlcXVpcmVkIG9yIG5vdFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKiAtIG1heD8ge251bWJlcn0gbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRleHRGaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke3Byb3BzLmxhYmVsfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heDtcclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBpbnB1dEZpZWxkLmN1cnJlbnQ7XHJcbiAgICBjb25zdCB2YWxpZGl0eVN0YXRlID0gZWxlbWVudC52YWxpZGl0eTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS52YWx1ZU1pc3NpbmcpXHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGAke3Byb3BzLmxhYmVsfSBpcyByZXF1aXJlZC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29TaG9ydClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtwcm9wcy5sYWJlbH0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7cHJvcHMubGFiZWx9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1GaWVsZFRlbXBsYXRlPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj17aW5wdXRJZH0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5vbkNoYW5nZShlLCBwcm9wcy5pbmRleCl9XHJcbiAgICAgICAgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfVxyXG4gICAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxyXG4gICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIElucHV0IGZpZWxkIGZvciBlbWFpbHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsPyB7c3RyaW5nfSBGb3JtRmllbGQncyBsYWJlbCAoZGVmYXVsdCBsYWJlbCBpcyBFbWFpbClcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSByZXF1aXJlZD8ge2Jvb2xlYW59IHdoZXRoZXIgdGhpcyBGb3JtRmllbGQgaXMgcmVxdWlyZWQgb3Igbm90XHJcbiAqIC0gbWluPyB7bnVtYmVyfSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqIC0gbWF4PyB7bnVtYmVyfSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRW1haWxGaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGxhYmVsTmFtZSA9IHByb3BzLmxhYmVsIHx8IFwiRW1haWxcIjtcclxuICBjb25zdCBpbnB1dElkID0gYGZvcm0tZmllbGQtJHtsYWJlbE5hbWV9LSR7cHJvcHMucGFyZW50SWR9YDtcclxuICBjb25zdCBtaW5MZW5ndGggPSBwcm9wcy5taW47XHJcbiAgY29uc3QgbWF4TGVuZ3RoID0gcHJvcHMubWF4IHx8IDUwO1xyXG5cclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBpZiBpbnB1dCBpcyB2YWxpZCwgcmV0dXJucyBudWxsLiBPdGhlcndpc2UsIHJldHVybnMgYW4gb2JqZWN0XHJcbiAgICogY29udGFpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVycm9yXHJcbiAgICoge21lc3NhZ2U6IGVycm9yIG1lc3NhZ2UsIGVsZW1lbnQ6IHJlZmVyZW5jZSB0byBIdG1sRWxlbWVudCB0aGF0IGNvbnRhaW5zIGVycm9yfVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGlucHV0RmllbGQuY3VycmVudDtcclxuICAgIGNvbnN0IHZhbGlkaXR5U3RhdGUgPSBlbGVtZW50LnZhbGlkaXR5O1xyXG5cclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnZhbHVlTWlzc2luZylcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBpcyByZXF1aXJlZC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50eXBlTWlzbWF0Y2gpXHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBhbiBlbWFpbC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29TaG9ydClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IG11c3QgYmUgYXQgbGVhc3QgJHttaW5MZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29Mb25nKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpbnB1dElkfT57bGFiZWxOYW1lfTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5vbkNoYW5nZShlLCBwcm9wcy5pbmRleCl9XHJcbiAgICAgICAgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfVxyXG4gICAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxyXG4gICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIElucHV0IGZpZWxkIGZvciBwYXNzd29yZHMuIElucHV0IGlzIGFsd2F5cyByZXF1aXJlZC5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWw/IHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChkZWZhdWx0IGxhYmVsIGlzIFBhc3N3b3JkKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFBhc3N3b3JkRmllbGQocHJvcHMpIHtcclxuICBjb25zdCBsYWJlbE5hbWUgPSBwcm9wcy5sYWJlbCB8fCBcIlBhc3N3b3JkXCI7XHJcbiAgY29uc3QgaW5wdXRJZCA9IGBmb3JtLWZpZWxkLSR7bGFiZWxOYW1lfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heCB8fCA1MDtcclxuXHJcbiAgY29uc3QgdmFsaWRhdG9yQWRkZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIC8vcmVmZXJlbmNlIHRvIGlucHV0IGh0bWwgZWxlbWVudFxyXG4gIGNvbnN0IGlucHV0RmllbGQgPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuXHJcbiAgLy90byBlbnN1cmUgdmFsaWRhdG9yIG9ubHkgZ2V0cyBhZGRlZCB0byBwYXJlbnQgRm9ybSBvbmNlXHJcbiAgaWYgKCF2YWxpZGF0b3JBZGRlZC5jdXJyZW50KSB7XHJcbiAgICBwcm9wcy5hZGRWYWxpZGF0b3IodmFsaWRhdGUpO1xyXG4gICAgdmFsaWRhdG9yQWRkZWQuY3VycmVudCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdGhlIHZhbGlkaXR5IG9mIGlucHV0XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gaW5wdXRGaWVsZC5jdXJyZW50O1xyXG4gICAgY29uc3QgdmFsaWRpdHlTdGF0ZSA9IGVsZW1lbnQudmFsaWRpdHk7XHJcblxyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudmFsdWVNaXNzaW5nKVxyXG4gICAgICByZXR1cm4geyBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAke21heExlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtRmllbGRUZW1wbGF0ZT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lucHV0SWR9PntsYWJlbE5hbWV9PC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9e2lucHV0SWR9XHJcbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWUgfHwgXCJcIn1cclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSwgcHJvcHMuaW5kZXgpfVxyXG4gICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxyXG4gICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhpZGRlbiBpbnB1dCBmaWVsZFxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogLSBsYWJlbCB7c3RyaW5nfSBGb3JtRmllbGQncyBsYWJlbCAobm90IHZpc2libGUsIGp1c3QgZm9yIG5hbWluZyBwdXJwb3NlcylcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSB2YWx1ZSB7c3RyaW5nfSBpbnB1dCdzIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSGlkZGVuRmllbGQocHJvcHMpIHtcclxuICBjb25zdCBpbnB1dElkID0gYGZvcm0tZmllbGQtJHtwcm9wcy5sYWJlbH0tJHtwcm9wcy5wYXJlbnRJZH1gO1xyXG5cclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIC8vYWx3YXlzIHZhbGlkXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpbnB1dElkfT48L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD17aW5wdXRJZH1cclxuICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICBoaWRkZW49e3RydWV9XHJcbiAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgcmVmPXtpbnB1dEZpZWxkfVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBBIGNvbXBvbmVudCByZXByZXNlbnRpbmcgYSBzaW5nbGUgZ2FtZVxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKHByb3BzKSB7XHJcbiAgZnVuY3Rpb24gc3RvcERyYWcoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcbiAgLy9naXZlbiB0byBkaXYncyBjaGlsZHJlbiBzbyBvbmx5IHRoZSBnYW1lLWNvbnRhaW5lclxyXG4gIC8vaXMgZHJhZ2dhYmxlXHJcbiAgY29uc3QgdW5kcmFnZ2FibGUgPSB7XHJcbiAgICBkcmFnZ2FibGU6IFwiZmFsc2VcIixcclxuICAgIG9uRHJhZ1N0YXJ0OiBzdG9wRHJhZyxcclxuICAgIG9uRHJhZ092ZXI6IHN0b3BEcmFnLFxyXG4gICAgb25Ecm9wOiBzdG9wRHJhZyxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJnYW1lLWNvbnRhaW5lclwiXHJcbiAgICAgIGRhdGEtaW5kZXg9e3Byb3BzW1wiZGF0YS1pbmRleFwiXX1cclxuICAgICAgb25EcmFnU3RhcnQ9e3Byb3BzLm9uRHJhZ1N0YXJ0fVxyXG4gICAgICBvbkRyYWdPdmVyPXtwcm9wcy5vbkRyYWdPdmVyfVxyXG4gICAgICBvbkRyb3A9e3Byb3BzLm9uRHJvcH1cclxuICAgICAgZHJhZ2dhYmxlPXtwcm9wcy5kcmFnZ2FibGV9XHJcbiAgICA+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3Byb3BzLmdhbWVDb3ZlclVybH1cclxuICAgICAgICBhbHQ9e2BDb3ZlciBhcnQgZm9yICR7cHJvcHMuZ2FtZU5hbWV9YH1cclxuICAgICAgICBoZWlnaHQ9ezkwfVxyXG4gICAgICAgIHdpZHRoPXs5MH1cclxuICAgICAgICB7Li4udW5kcmFnZ2FibGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwIHsuLi51bmRyYWdnYWJsZX0+e3Byb3BzLmdhbWVOYW1lfTwvcD5cclxuICAgICAge3Byb3BzLmlzRWRpdGluZyAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiB7Li4udW5kcmFnZ2FibGV9IG9uQ2xpY2s9eygpID0+IHByb3BzLm9uRGVsZXRlKHByb3BzLmdhbWVJZCl9PlxyXG4gICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZVNlYXJjaEJveChwcm9wcykge1xyXG4gIC8vc2VhcmNoIHRlcm0gaW4gc2VhcmNoIGJhclxyXG4gIGNvbnN0IFtkaXNwbGF5ZWRTZWFyY2hUZXJtLCBzZXREaXNwbGF5ZWRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vdGhlIGFjdHVhbCB1bmRlcmx5aW5nIHNlYXJjaCB0ZXJtIHJlZ2FyZGxlc3Mgb2Ygd2hhdHMgdHlwZWRcclxuICAvL2NsaWNraW5nIG5leHQvcHJldiB3aWxsIGNoYW5nZSBwYWdlcyBmb3IgdGhpcyB2YWx1ZVxyXG4gIC8vY2xpY2tpbmcgc2VhcmNoIGJ1dHRvbiB3aWxsIGNoYW5nZSB0aGlzIHZhbHVlXHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoZGlzcGxheWVkU2VhcmNoVGVybSk7XHJcbiAgLy9wYWdlIG9mIHNlYXJjaCByZXN1bHRzXHJcbiAgY29uc3QgW3NlYXJjaFBhZ2UsIHNldFNlYXJjaFBhZ2VdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAvL2xpc3Qgb2Ygb2JqZWN0cyB0aGF0IHdpbGwgYmUgcmV0cmlldmVkIGZyb20gc2VhcmNoIGFwaVxyXG4gIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvL3doZXRoZXIgb3Igbm90IHNlYXJjaCByZXN1bHRzIGFyZSBjdXJyZW50bHkgbG9hZGluZ1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvL2Vycm9yIG1lc3NhZ2VcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy93aGV0aGVyIG9yIG5vdCB0aGVyZSBpcyBhIG5leHQgcGFnZSBvZiBzZWFyY2ggcmVzdWx0c1xyXG4gIGNvbnN0IFtoYXNOZXh0LCBzZXRIYXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAvL3VzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgaXRzIGZpcnN0IHJlbmRlciBvciBub3RcclxuICBjb25zdCBmaXJzdFJlbmRlciA9IHVzZVJlZih0cnVlKTtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnREcmFnR2FtZShlLCBnYW1lKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImFwcGxpY2F0aW9uL2pzb25cIiwgSlNPTi5zdHJpbmdpZnkoZ2FtZSkpO1xyXG4gIH1cclxuXHJcbiAgLy9kcmFnb3ZlciBoYW5kbGVyIGlzIG5lZWRlZCB0byBtYWtlIGVsZW1lbnRcclxuICAvL2RyYWdnYWJsZVxyXG4gIGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkaXNwbGF5ZWRTZWFyY2hSZXN1bHRzID0gc2VhcmNoUmVzdWx0cy5tYXAoKGdhbWUpID0+IChcclxuICAgIDxHYW1lXHJcbiAgICAgIGtleT17Z2FtZS5pZH1cclxuICAgICAgZ2FtZUlkPXtnYW1lLmlkfVxyXG4gICAgICBnYW1lTmFtZT17Z2FtZS5uYW1lfVxyXG4gICAgICBnYW1lQ292ZXJVcmw9e2dhbWUuY292ZXJ1cmx9XHJcbiAgICAgIGRyYWdnYWJsZT17dHJ1ZX1cclxuICAgICAgb25EcmFnU3RhcnQ9eyhlKSA9PiBzdGFydERyYWdHYW1lKGUsIGdhbWUpfVxyXG4gICAgICBvbkRyYWdPdmVyPXtkcmFnT3Zlcn1cclxuICAgIC8+XHJcbiAgKSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgZGlzcGxheWVkIHNlYXJjaCB0ZXJtXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBzZXREaXNwbGF5ZWRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgc2VhcmNoVGVybSB0byBkaXNwbGF5ZWRTZWFyY2hUZXJtXHJcbiAgICogYW5kIGZldGNoZXMgc2VhcmNoIHJlc3VsdHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChkaXNwbGF5ZWRTZWFyY2hUZXJtID09PSBcIlwiKSByZXR1cm47XHJcbiAgICBzZXRTZWFyY2hUZXJtKGRpc3BsYXllZFNlYXJjaFRlcm0pO1xyXG4gICAgc2V0U2VhcmNoUGFnZSgwKTtcclxuICAgIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKGRpc3BsYXllZFNlYXJjaFRlcm0sIDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyBwYWdlIG51bWJlciBmb3Igc2VhcmNoVGVybVxyXG4gICAqIChub3QgZGlzcGxheWVkU2VhcmNoVGVybSkgYW5kIGZldGNoZXMgc2VhcmNoXHJcbiAgICogcmVzdWx0cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlTnVtYmVyIG5ldyBwYWdlIG51bWJlclxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGNoYW5nZVBhZ2UocGFnZU51bWJlcikge1xyXG4gICAgaWYgKHBhZ2VOdW1iZXIgPCAwKSByZXR1cm47XHJcbiAgICBzZXRTZWFyY2hQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gICAgZmV0Y2hBbmRQb3B1bGF0ZVNlYXJjaFJlc3VsdHMoc2VhcmNoVGVybSwgcGFnZU51bWJlcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaGVzIGEgc2VhcmNoIGZyb20gdGhlIEFQSSBhbmQgcG9wdWxhdGVzIHBhZ2VcclxuICAgKiB3aXRoIHNlYXJjaCByZXN1bHRzLiBUaGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIGNhbGxlZFxyXG4gICAqIHdpdGggYSBzZWFyY2ggdGVybSBhbmQgcGFnZSBtYW51YWxseSBpbnN0ZWFkIG9mIHJlbHlpbmcgb25cclxuICAgKiBjaGVja2luZyBzdGF0ZSBhcyByZWFkaW5nIHN0YXRlIGltbWVkaWF0ZWx5IGFmdGVyIHNldHRpbmcgaXRcclxuICAgKiB3aWxsIHJldHVybiBzdGFsZSB2YWx1ZXMuIFNvLCB3ZSBnaXZlIGl0IHRoZSBmcmVzaCB2YWx1ZXMgbWFudWFsbHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVybSBzZWFyY2ggdGVybVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIHNlYXJjaCBwYWdlIG51bWJlclxyXG4gICAqL1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKHRlcm0sIHBhZ2UpIHtcclxuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBxdWVyeSA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NlYXJjaC8ke3Rlcm19LyR7cGFnZX1gO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChxdWVyeSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldFNlYXJjaFJlc3VsdHMoZGF0YS5yZXN1bHRzKTtcclxuICAgICAgc2V0SGFzTmV4dChkYXRhLmhhc05leHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKHJlc3VsdHMubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYW1lLXNlYXJjaC1iYXJcIj5OYW1lIG9mIEdhbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImdhbWUtc2VhcmNoLWJhclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkaXNwbGF5ZWRTZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgIHtzZWFyY2hQYWdlID49IDAgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtzZWFyY2hQYWdlID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHNlYXJjaFBhZ2UgLSAxKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUHJldlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhZ2UtbnVtYmVyXCI+UGFnZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYWdlLW51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYWdlICsgMX1cclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICB7aGFzTmV4dCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHNlYXJjaFBhZ2UgKyAxKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHNcIj5cclxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIDxwPntlcnJvck1lc3NhZ2V9PC9wPn1cclxuICAgICAgICB7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cclxuICAgICAgICB7ZGlzcGxheWVkU2VhcmNoUmVzdWx0c31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCIuL0Zvcm1GaWVsZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QocHJvcHMpIHtcclxuICByZXR1cm4gPGJ1dHRvbiBpZD17cHJvcHMuaWR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PjwvYnV0dG9uPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQsIEhpZGRlbkZpZWxkIH0gZnJvbSBcIi4vRm9ybUZpZWxkc1wiO1xyXG5pbXBvcnQgVGVzdCBmcm9tIFwiLi9UZXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb29sYmFyKHByb3BzKSB7XHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUsIGVycm9ySW5mbykge1xyXG4gICAgaWYgKGVycm9ySW5mbykgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgaWQ9XCJUb29sYmFyLUZvcm1cIlxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgc3VibWl0QnRuVGV4dD1cIkdvIVwiXHJcbiAgICAgICAgbWV0aG9kPVwiZ2V0XCJcclxuICAgICAgICBhY3Rpb249XCIvc2VhcmNoXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJTZWFyY2hcIiBuYW1lPVwicXVlcnlcIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgPEhpZGRlbkZpZWxkIGxhYmVsPVwiUGFnZVwiIG5hbWU9XCJwYWdlXCIgdmFsdWU9XCIwXCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vY29tcG9uZW50cy9HYW1lXCI7XHJcbmltcG9ydCBHYW1lU2VhcmNoQm94IGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVTZWFyY2hCb3hcIjtcclxuXHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1Rvb2xiYXJcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBUaGUgcGFnZSB0aGF0IGlzIGRpc3BsYXllZCB3aGVuXHJcbiAqIHZpZXdpbmcgYSB1c2VyJ3MgcHJvZmlsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUGFnZShwcm9wcykge1xyXG4gIC8qIHNldHRpbmcgc3RhdGUgKi9cclxuICAvL3RoZSB1c2VyJ3MgYWN0dWFsIGZhdm9yaXRlIGdhbWVzXHJcbiAgY29uc3QgW2Zhdm9yaXRlR2FtZXMsIHNldEZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUocHJvcHMuZ2FtZXMpO1xyXG4gIC8vdGhlIHVzZXIncyBmYXZvcml0ZSBnYW1lIGFzIGN1cnJlbnRseSBkaXNwbGF5ZWQuIHRoZXNlIG1heSBkaWZmZXJcclxuICAvL2Zyb20gYWN0dWFsIGZhdm9yaXRlIGdhbWVzIGR1cmluZyBlZGl0aW5nXHJcbiAgY29uc3QgW2Rpc3BsYXllZEZhdm9yaXRlR2FtZXMsIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUoXHJcbiAgICBmYXZvcml0ZUdhbWVzXHJcbiAgKTtcclxuICAvL3doZXRoZXIgb3Igbm90IHVzZXIgaXMgZWRpdGluZyBmYXZvcml0ZSBnYW1lc1xyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gYSBHYW1lIGlzIGRyYWdnZWQuIEFkZHNcclxuICAgKiB0aGUgR2FtZSdzIGRhdGEtaW5kZXggYXR0cmlidXRlIHRvXHJcbiAgICogRHJhZ0V2ZW50LmRhdGFUcmFuc2ZlciB0byBiZSB1c2VkIGJ5XHJcbiAgICogZHJvcEdhbWUoKSBsYXRlciBvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBzdGFydERyYWdHYW1lKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICB9XHJcblxyXG4gIC8vZHJhZ292ZXIgaGFuZGxlciBpcyBuZWVkZWQgdG8gbWFrZSBlbGVtZW50XHJcbiAgLy9kcmFnZ2FibGVcclxuICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRyYWdnZWQgZ2FtZSB3aWxsIGJlIHN3YXBwZWQgd2l0aCB0aGUgZ2FtZVxyXG4gICAqIGl0J3MgZHJvcHBlZCBvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZHJvcEdhbWVPbkdhbWUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IG5ld0ZhdmVHYW1lcyA9IFsuLi5kaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXTtcclxuICAgIGNvbnN0IG5ld0dhbWUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIC8vaW5kZXggb2YgZ2FtZSB0aGF0IHdhcyBkcm9wcGVkIG9uXHJcbiAgICBjb25zdCBkcm9wVGFyZ2V0ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgLy9kYXRhVHJhbnNmZXIgd2lsbCBjb250YWluIGEganMgb2JqZWN0IGlmIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWRcclxuICAgIC8vaXMgZnJvbSBzZWFyY2ggcmVzdWx0cywgbWVhbmluZyBhIG5ldyBnYW1lIGlzIGJlaW5nIGFkZGVkXHJcbiAgICAvL3RvIGZhdm9yaXRlIGdhbWVzXHJcbiAgICBpZiAobmV3R2FtZSkge1xyXG4gICAgICBjb25zdCBuZXdHYW1lQXNPYmplY3QgPSBKU09OLnBhcnNlKG5ld0dhbWUpO1xyXG4gICAgICAvL3dlIHJlcGxhY2UgZWxlbWVudHMgYXMgd2UgZ28sIGV2ZW50dWFsbHkgd2UgYW4gZWxlbWVudCB0byBuZXdGYXZlR2FtZXNbbmV3RmF2ZUdhbWVzLmxlbmd0aF1cclxuICAgICAgLy90aGlzIGluY3JlYXNlcyB0aGUgbGVuZ3RoIGFuZCB0aGUgbG9vcCBnb2VzIG9uIGZvcmV2ZXJcclxuICAgICAgLy9zbyB3ZSBrZWVwIHRoZSBsZW5ndGggb2YgdGhlIGxpc3QgYmVmb3JlIHdlIHN0YXJ0XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IG5ld0ZhdmVHYW1lcy5sZW5ndGg7XHJcbiAgICAgIC8vZ2FtZSB0byBiZSBhZGRlZCBpblxyXG4gICAgICBsZXQgaG9sZGVyID0gbmV3R2FtZUFzT2JqZWN0O1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChuZXdGYXZlR2FtZXNbaV0gJiYgbmV3RmF2ZUdhbWVzW2ldLmlkID09PSBuZXdHYW1lQXNPYmplY3QuaWQpXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy9zdGFydCBzd2FwcGluZyBmcm9tIGRyb3BUYXJnZXQgb253YXJkc1xyXG4gICAgICAgIGlmIChpID49IGRyb3BUYXJnZXQpIHtcclxuICAgICAgICAgIC8vcHV0IGhvbGRlciBpbnRvIHRoZSBsaXN0LCB0YWtlIHdoYXQgd2FzIHRoZXJlIGFuZCBwdXQgaW50byBob2xkZXJcclxuICAgICAgICAgIGNvbnN0IHRlbXAgPSBuZXdGYXZlR2FtZXNbaV07XHJcbiAgICAgICAgICBuZXdGYXZlR2FtZXNbaV0gPSBob2xkZXI7XHJcbiAgICAgICAgICBob2xkZXIgPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9pZiB0aGVyZSBpcyBubyBqcyBvYmplY3QsIHRoZW4gdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZCBpcyBhbiBhbHJlYWR5XHJcbiAgICAvL2V4aXN0aW5nIGdhbWUgc28gd2UganVzdCBzd2FwIHBsYWNlc1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vdGhlIGdhbWUgdGhhdCB3YXMgYmVpbmcgZHJhZ2dlZFxyXG4gICAgICBjb25zdCBkcmFnZ2VkR2FtZSA9IE51bWJlcihlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKSk7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSBuZXdGYXZlR2FtZXNbZHJvcFRhcmdldF07XHJcbiAgICAgIG5ld0ZhdmVHYW1lc1tkcm9wVGFyZ2V0XSA9IG5ld0ZhdmVHYW1lc1tkcmFnZ2VkR2FtZV07XHJcbiAgICAgIG5ld0ZhdmVHYW1lc1tkcmFnZ2VkR2FtZV0gPSB0ZW1wO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMobmV3RmF2ZUdhbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkcmFnZ2VkIGdhbWUgd2lsbCBiZSBhZGRlZCB0byB0aGVcclxuICAgKiBlbmQgb2YgdGhlIGxpc3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZHJvcEdhbWVPbkNvbnRhaW5lcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGNvbnN0IG5ld0ZhdmVHYW1lcyA9IFsuLi5kaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXTtcclxuICAgIGNvbnN0IG5ld0dhbWUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIC8vZGF0YVRyYW5zZmVyIHdpbGwgY29udGFpbiBhIGpzIG9iamVjdCBpZiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkXHJcbiAgICAvL2lzIGZyb20gc2VhcmNoIHJlc3VsdHMsIG1lYW5pbmcgYSBuZXcgZ2FtZSBpcyBiZWluZyBhZGRlZFxyXG4gICAgLy90byBmYXZvcml0ZSBnYW1lc1xyXG4gICAgaWYgKG5ld0dhbWUpIHtcclxuICAgICAgbmV3RmF2ZUdhbWVzLnB1c2goSlNPTi5wYXJzZShuZXdHYW1lKSk7XHJcbiAgICB9XHJcbiAgICAvL2lmIHRoZXJlIGlzIG5vIGpzIG9iamVjdCwgdGhlbiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkIGlzIGFuIGFscmVhZHlcclxuICAgIC8vZXhpc3RpbmcgZ2FtZS4gZHJhZ2dlZCBnYW1lIGlzIGFkZGVkIHRvIHRoZSBlbmQgYW5kIHJlc3QgYXJlIHNoaWZ0ZWQgdXBcclxuICAgIGVsc2Uge1xyXG4gICAgICBsZXQgbmV3UG9zID0gTnVtYmVyKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpKTtcclxuICAgICAgbGV0IGRyYWdnZWRHYW1lID0gbmV3RmF2ZUdhbWVzW25ld1Bvc107XHJcbiAgICAgIC8vc2hpZnQgZXZlcnl0aGluZyB0b3dhcmRzIHRoZSBmcm9udFxyXG4gICAgICBmb3IgKDsgbmV3UG9zIDwgbmV3RmF2ZUdhbWVzLmxlbmd0aCAtIDE7IG5ld1BvcysrKVxyXG4gICAgICAgIG5ld0ZhdmVHYW1lc1tuZXdQb3NdID0gbmV3RmF2ZUdhbWVzW25ld1BvcyArIDFdO1xyXG5cclxuICAgICAgLy9hZGQgZHJhZ2dlZEdhbWUgYmFjayB0byB0aGUgZW5kXHJcbiAgICAgIG5ld0ZhdmVHYW1lc1tuZXdQb3NdID0gZHJhZ2dlZEdhbWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKG5ld0ZhdmVHYW1lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhuZXdGYXZlR2FtZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlcyBhIGdhbWUgZnJvbSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGdhbWVJZCB0aGUgaWQgb2YgZ2FtZSB0byBiZSBkZWxldGVkXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZGVsZXRlR2FtZShnYW1lSWQpIHtcclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMoXHJcbiAgICAgIGRpc3BsYXllZEZhdm9yaXRlR2FtZXMuZmlsdGVyKChnYW1lKSA9PiBnYW1lLmlkICE9PSBnYW1lSWQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gZWRpdGluZyBpcyBjYW5jZWxsZWQuIFNldHMgZGlzcGxheWVkIGZhdm9yaXRlIGdhbWVzXHJcbiAgICogdG8gYWN0dWFsIGZhdm9yaXRlIGdhbWVzLlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHJvbGxiYWNrQ2hhbmdlcygpIHtcclxuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMoZmF2b3JpdGVHYW1lcyk7XHJcbiAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2F2ZUNoYW5nZXMoKSB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgICBjb25zdCBmYXZlR2FtZUlkcyA9IGRpc3BsYXllZEZhdm9yaXRlR2FtZXMubWFwKChnYW1lKSA9PiBnYW1lLmlkKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9mYXZvcml0ZXMvJHtwcm9wcy5pZH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZmF2ZUdhbWVJZHMpLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRGYXZvcml0ZUdhbWVzKGRpc3BsYXllZEZhdm9yaXRlR2FtZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vZ2V0IGEgbGlzdCBvZiBHYW1lIGNvbXBvbmVudHMgY29ycmVzcG9uZGluZyB0byBmYXZvcml0ZSBnYW1lc1xyXG4gIC8vZWFjaCBpcyBnaXZlbiBhIGRhdGEtaW5kZXggYXR0cmlidXRlIHRoYXQgY29ycmVzcG9uZHMgdG9cclxuICAvL3doYXQgcG9zaXRpb24gaW4gdGhlIGxpc3QgdGhleSBhcmUuIHRoaXMgd2lsbCBiZSB1c2VkIGR1cmluZ1xyXG4gIC8vZWRpdGluZyBmYXZvcml0ZSBnYW1lcy5cclxuICBjb25zdCBmYXZvcml0ZUdhbWVzTGlzdCA9IGRpc3BsYXllZEZhdm9yaXRlR2FtZXMubWFwKChnYW1lLCBpbmRleCkgPT4gKFxyXG4gICAgPEdhbWVcclxuICAgICAga2V5PXtnYW1lLmlkfVxyXG4gICAgICBnYW1lSWQ9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVOYW1lPXtnYW1lLm5hbWV9XHJcbiAgICAgIGdhbWVDb3ZlclVybD17Z2FtZS5jb3ZlcnVybH1cclxuICAgICAgaXNFZGl0aW5nPXtpc0VkaXRpbmd9XHJcbiAgICAgIGRhdGEtaW5kZXg9e1wiXCIgKyBpbmRleH1cclxuICAgICAgZHJhZ2dhYmxlPXtpc0VkaXRpbmcgKyBcIlwifVxyXG4gICAgICBvbkRyYWdTdGFydD17aXNFZGl0aW5nID8gc3RhcnREcmFnR2FtZSA6IHVuZGVmaW5lZH1cclxuICAgICAgb25EcmFnT3Zlcj17aXNFZGl0aW5nID8gZHJhZ092ZXIgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uRHJvcD17aXNFZGl0aW5nID8gZHJvcEdhbWVPbkdhbWUgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uRGVsZXRlPXtkZWxldGVHYW1lfVxyXG4gICAgLz5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3Byb3BzLnByb2ZpbGVQaWN9XHJcbiAgICAgICAgYWx0PXtgJHtwcm9wcy5kaXNwbGF5TmFtZX0ncyBwcm9maWxlIHBpY3R1cmVgfVxyXG4gICAgICAvPlxyXG4gICAgICA8aDE+e3Byb3BzLmRpc3BsYXlOYW1lfTwvaDE+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmF2b3JpdGUtZ2FtZXMtbGlzdFwiXHJcbiAgICAgICAgICBvbkRyb3A9e2Ryb3BHYW1lT25Db250YWluZXJ9XHJcbiAgICAgICAgICBvbkRyYWdPdmVyPXtpc0VkaXRpbmcgPyBkcmFnT3ZlciA6IHVuZGVmaW5lZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZmF2b3JpdGVHYW1lc0xpc3R9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Byb3BzLmlkICYmXHJcbiAgICAgICAgICAoIWlzRWRpdGluZyA/IChcclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9PkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyb2xsYmFja0NoYW5nZXN9PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZUNoYW5nZXN9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIDxzcGFuPntlcnJvck1lc3NhZ2V9PC9zcGFuPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpc0VkaXRpbmcgJiYgPEdhbWVTZWFyY2hCb3ggLz59XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGV4dC5yZXMubG9jYWxzKSksXHJcbiAgfTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9