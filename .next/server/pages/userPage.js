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
    className: "game-container rounded my-3 mx-2",
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
  }, "Delete"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybUZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYW1lU2VhcmNoQm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZHJlbiIsImNoaWxkIiwidmFsdWUiLCJmaWVsZFZhbHVlcyIsInNldEZpZWxkVmFsdWVzIiwiZmllbGRWYWxpZGF0b3JzIiwidXNlUmVmIiwiaW5kZXgiLCJjbG9uZUVsZW1lbnQiLCJhZGRWYWxpZGF0b3IiLCJ2YWxpZGF0b3IiLCJjdXJyZW50IiwicHVzaCIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwicGFyZW50SWQiLCJpZCIsImUiLCJuZXdGaWVsZFZhbHVlcyIsImkiLCJ0YXJnZXQiLCJ2YWxpZGF0ZUFsbEZpZWxkcyIsImVycm9ySW5mbyIsIm9uU3VibWl0IiwiYWN0aW9uIiwibWV0aG9kIiwiY2xhc3NOYW1lIiwic3VibWl0QnRuVGV4dCIsIkZvcm1GaWVsZFRlbXBsYXRlIiwidG9BcnJheSIsImNvbnRyb2wiLCJUZXh0RmllbGQiLCJpbnB1dElkIiwibGFiZWwiLCJtaW5MZW5ndGgiLCJtaW4iLCJtYXhMZW5ndGgiLCJtYXgiLCJ2YWxpZGF0b3JBZGRlZCIsImlucHV0RmllbGQiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0ZSIsImVsZW1lbnQiLCJ2YWxpZGl0eVN0YXRlIiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJtZXNzYWdlIiwidG9vU2hvcnQiLCJ0b29Mb25nIiwibmFtZSIsInJlcXVpcmVkIiwiRW1haWxGaWVsZCIsImxhYmVsTmFtZSIsInR5cGVNaXNtYXRjaCIsIlBhc3N3b3JkRmllbGQiLCJIaWRkZW5GaWVsZCIsIkdhbWUiLCJzdG9wRHJhZyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidW5kcmFnZ2FibGUiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJnYW1lQ292ZXJVcmwiLCJnYW1lTmFtZSIsImlzRWRpdGluZyIsIm9uRGVsZXRlIiwiZ2FtZUlkIiwiR2FtZVNlYXJjaEJveCIsImRpc3BsYXllZFNlYXJjaFRlcm0iLCJzZXREaXNwbGF5ZWRTZWFyY2hUZXJtIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hQYWdlIiwic2V0U2VhcmNoUGFnZSIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsImZpcnN0UmVuZGVyIiwic3RhcnREcmFnR2FtZSIsImdhbWUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImRyYWdPdmVyIiwiZHJvcEVmZmVjdCIsImRpc3BsYXllZFNlYXJjaFJlc3VsdHMiLCJjb3ZlcnVybCIsImhhbmRsZVNlYXJjaCIsImZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzIiwiY2hhbmdlUGFnZSIsInBhZ2VOdW1iZXIiLCJ0ZXJtIiwicGFnZSIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJyZXN1bHRzIiwiVGVzdCIsIm9uQ2xpY2siLCJUb29sYmFyIiwiaGFuZGxlU3VibWl0IiwidXNlcklkIiwicHJvZmlsZVBpYyIsIlVzZXJQYWdlIiwiZ2FtZXMiLCJmYXZvcml0ZUdhbWVzIiwic2V0RmF2b3JpdGVHYW1lcyIsImRpc3BsYXllZEZhdm9yaXRlR2FtZXMiLCJzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzIiwic2V0SXNFZGl0aW5nIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJkcm9wR2FtZU9uR2FtZSIsIm5ld0ZhdmVHYW1lcyIsIm5ld0dhbWUiLCJnZXREYXRhIiwiZHJvcFRhcmdldCIsIk51bWJlciIsIm5ld0dhbWVBc09iamVjdCIsInBhcnNlIiwibGVuZ3RoIiwiaG9sZGVyIiwidGVtcCIsImRyYWdnZWRHYW1lIiwiZHJvcEdhbWVPbkNvbnRhaW5lciIsIm5ld1BvcyIsImRlbGV0ZUdhbWUiLCJmaWx0ZXIiLCJyb2xsYmFja0NoYW5nZXMiLCJzYXZlQ2hhbmdlcyIsImZhdmVHYW1lSWRzIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiaGVhZGVycyIsImVycm9yIiwiZmF2b3JpdGVHYW1lc0xpc3QiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheU5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwibG9jYWxzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFF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SSwyREFBQyxpRUFBRCxPQTFDaEIsQ0FWRixDQURGO0FBeUREO0FBRU0sU0FBU29GLGtCQUFULENBQTRCQyxPQUE1QixFQUFxQztBQUMxQyxTQUFPO0FBQ0w3SixTQUFLLEVBQUUrRixJQUFJLENBQUN5QyxLQUFMLENBQVd6QyxJQUFJLENBQUNDLFNBQUwsQ0FBZTZELE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUEzQixDQUFYO0FBREYsR0FBUDtBQUdELEM7Ozs7Ozs7Ozs7O0FDclFELGtDIiwiZmlsZSI6InBhZ2VzL3VzZXJQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91c2VyUGFnZS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogR2VuZXJhbCBmb3JtIGNvbXBvbmVudCB0aGF0IHZhbGlkYXRlcyBhbmQgY29udHJvbHMgdGhlIHN0YXRlXHJcbiAqIG9mIGFsbCBvZiBpdHMgZmllbGRzLiBDaGlsZHJlbiBvZiBGb3JtIHNob3VsZCBiZSBhIGxpc3Qgb2YgRm9ybUVsZW1lbnRzLlxyXG4gKlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgRXhwZWN0ZWQgcHJvcHM6XHJcbiAqIC0gaWQge3N0cmluZ30gZm9ybSBodG1sRWxlbWVudCdzIGlkXHJcbiAqXHJcbiAqIC0gb25TdWJtaXQge2Z1bmN0aW9uKGV2ZW50LCBvYmplY3QpfSBjYWxsYmFjayBmb3Igd2hlbiBmb3JtIHN1Ym1pdHMuXHJcbiAqICAgRm9ybSB3aWxsIHNlbmQgdHdvIGFyZ3VtZW50cywgdGhlIGZpcnN0IGlzIHRoZSBldmVudCwgdGhlIHNlY29uZFxyXG4gKiAgIGlzIHRoZSBlcnJvciBpbmZvIG9iamVjdC4gSWYgb25lIG9mIHRoZSBGb3JtRmllbGRzIHdpdGhpbiB0aGUgRm9ybVxyXG4gKiAgIHdlcmUgbm90IHZhbGlkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IHdpbGwgYmUgYW4gb2JqZWN0IGNvbnRhaW5pbmdcclxuICogICBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXJyb3IuIElmIGV2ZXJ5dGhpbmcgd2FzIHZhbGlkLCBpdCB3aWxsIGJlIG51bGwuXHJcbiAqXHJcbiAqIC0gc3VibWl0QnRuVGV4dCB7c3RyaW5nfSB0aGUgdGV4dENvbnRlbnQgZm9yIHRoZSBzdWJtaXQgYnV0dG9uXHJcbiAqXHJcbiAqIC0gYWN0aW9uPyB7c3RyaW5nfSB2YWx1ZSBmb3IgZm9ybSdzIGFjdGlvbiBhdHRyaWJ1dGVcclxuICpcclxuICogLSBtZXRob2Q/IHtzdHJpbmd9IHZhbHVlIGZvciBmb3JtJ3MgbWV0aG9kIGF0dHJpYnV0ZVxyXG4gKlxyXG4gKiAtcHJvcHMuY2hpbGRyZW4gc2hvdWxkIGJlIGEgbGlzdCBvZiBGb3JtRmllbGQgZWxlbWVudHMuIEVhY2ggRm9ybUZpZWxkXHJcbiAqICBzaG91bGQgYmUgaW5pdGlhbGl6ZWQgd2l0aCBhbiBpbml0aWFsIHZhbHVlIHByb3AuXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKHByb3BzKSB7XHJcbiAgLy9hcnJheSBvZiB2YWx1ZXMgZm9yIGFsbCBjaGlsZHJlbiAoRm9ybUZpZWxkcylcclxuICAvL2luaXRpYWxpemVzIHN0YXRlIHRvIGJlIGVxdWFsIHRvIHRoZSBpbml0aWFsIHZhbHVlIGdpdmVuIGJ5XHJcbiAgLy9wYXJlbnQgY29tcG9uZW50XHJcbiAgY29uc3QgW2ZpZWxkVmFsdWVzLCBzZXRGaWVsZFZhbHVlc10gPSB1c2VTdGF0ZShcclxuICAgIFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiBjaGlsZC5wcm9wcy52YWx1ZSlcclxuICApO1xyXG5cclxuICAvL2xpc3Qgb2YgdmFsaWRhdG9ycyBvZiBhbGwgb2YgdGhpcyBGb3JtJ3MgRm9ybUZpZWxkc1xyXG4gIGNvbnN0IGZpZWxkVmFsaWRhdG9ycyA9IHVzZVJlZihbXSk7XHJcblxyXG4gIC8vdGFrZXMgY29udHJvbCBvZiBjaGlsZHJlbnMgc3RhdGUgYW5kIHBhc3NlcyBvd24gcHJvcHNcclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT5cclxuICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICB2YWx1ZTogZmllbGRWYWx1ZXNbaW5kZXhdLFxyXG4gICAgICBhZGRWYWxpZGF0b3I6ICh2YWxpZGF0b3IpID0+IGZpZWxkVmFsaWRhdG9ycy5jdXJyZW50LnB1c2godmFsaWRhdG9yKSxcclxuICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcclxuICAgICAgcGFyZW50SWQ6IHByb3BzLmlkLCAvL2FkZCBwYXJlbnQgaWQgdG8gc28gRm9ybUZpZWxkIGNhbiBtYWtlIHVuaXF1ZSBpZHMgZm9yIGl0cyBlbGVtZW50c1xyXG4gICAgICBpbmRleCxcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyB2YWx1ZSBjaGFuZ2VzIGZvciBhbGwgb2YgYSBGb3JtJ3MgRm9ybUZpZWxkcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggRm9ybUZpZWxkJ3MgaW5kZXggcHJvcFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlLCBpbmRleCkge1xyXG4gICAgLy90aGUgaW5kZXggcHJvcCBvZiBlYWNoIEZvcm1GaWVsZCBhbmQgZmllbGRWYWx1ZXMgYXJlIHBhcmFsbGVsXHJcbiAgICAvL3NvIGlmIGEgRm9ybUZpZWxkIHBhc3NlcyBpdCdzIHByb3BzLmluZGV4LCB3ZSBjYW4gc2V0XHJcbiAgICAvL3RoZSBjb3JyZWN0IHN0YXRlXHJcbiAgICBjb25zdCBuZXdGaWVsZFZhbHVlcyA9IGZpZWxkVmFsdWVzLm1hcCgodmFsdWUsIGkpID0+XHJcbiAgICAgIGkgPT09IGluZGV4ID8gZS50YXJnZXQudmFsdWUgOiB2YWx1ZVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlcyhuZXdGaWVsZFZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxscyBldmVyeSBGb3JtRmllbGQncyB2YWxpZGF0b3IgZnVuY3Rpb24uIElmIGFueSBmaWVsZFxyXG4gICAqIGlzIGludmFsaWQsIHdpbGwgc2VuZCB0aGUgZXJyb3IgaW5mbyBvYmplY3QgdG8gcGFyZW50IGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7ZXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUFsbEZpZWxkcyhlKSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbGlkYXRvciBvZiBmaWVsZFZhbGlkYXRvcnMuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBlcnJvckluZm8gPSB2YWxpZGF0b3IoKTtcclxuICAgICAgaWYgKGVycm9ySW5mbykgcmV0dXJuIHByb3BzLm9uU3VibWl0KGUsIGVycm9ySW5mbyk7XHJcbiAgICB9XHJcbiAgICBwcm9wcy5vblN1Ym1pdChlLCBudWxsKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgIG9uU3VibWl0PXt2YWxpZGF0ZUFsbEZpZWxkc31cclxuICAgICAgICBub1ZhbGlkYXRlPXt0cnVlfVxyXG4gICAgICAgIGFjdGlvbj17cHJvcHMuYWN0aW9ufVxyXG4gICAgICAgIG1ldGhvZD17cHJvcHMubWV0aG9kfVxyXG4gICAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIHtwcm9wcy5zdWJtaXRCdG5UZXh0IHx8IFwiU3VibWl0XCJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEZvcm1GaWVsZHMgYXJlIG1lYW50IHRvIGJlIHVzZWQgd2l0aCB0aGUgRm9ybSBjb21wb25lbnQuXHJcbiAqIFRoZXkgYXJlIGEgY29tYmluYXRpb24gb2YgYSBsYWJlbCBhbmQgYSBjb3JyZXNwb25kaW5nIGlucHV0IGVsZW1lbnQgb2Ygc29tZSBraW5kLlxyXG4gKiBUaGV5IG1ha2UgdXAgdGhlIGZpZWxkcyBvZiBhIEZvcm0gY29tcG9uZW50LiBFYWNoIEZvcm1GaWVsZCBoYXMgaXRzIG93blxyXG4gKiB2YWxpZGF0b3IgZnVuY3Rpb24gdGhhdCBjaGVja3MgdGhlIHZhbGlkaXR5IG9mIGl0cyBpbnB1dC4gRm9ybUZpZWxkIHZhbGlkYXRvcnNcclxuICogYXJlIGNhbGxlZCBieSBpdHMgcGFyZW50IEZvcm0uIEZvcm1GaWVsZHMgc2hvdWxkIGJlIHRoZSBjaGlsZHJlbiBvZiBhIEZvcm1cclxuICogY29tcG9uZW50IGFuZCBzaG91bGQgYmUgaW5pdGlhbGllZCB3aXRoIGFuIGluaXRpYWwgdmFsdWUgcHJvcC4gQWZ0ZXIgZmlyc3QgcmVuZGVyLFxyXG4gKiB0aGUgRm9ybSBjb21wb25lbnQgd2lsbCB0YWtlIGNvbnRyb2wgb2YgdGhlIEZvcm1GaWVsZCdzIHZhbHVlIHN0YXRlLlxyXG4gKlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBDb21tb24gbGF5b3V0IHRlbXBsYXRlIHRoYXQgRm9ybUZpZWxkcyB1c2VcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIGV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIEZvcm1GaWVsZCdzIGxhYmVsIHNob3VsZCBiZSBmaXJzdCBjaGlsZFxyXG4gKiAtIEZvcm1GaWVsZCdzIGNvbnRyb2wgc2hvdWxkIGJlIHNlY29uZCBjaGlsZFxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gRm9ybUZpZWxkVGVtcGxhdGUocHJvcHMpIHtcclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pO1xyXG4gIC8vcHJlc2VydmUgZXhpc3RpbmcgY3NzIGNsYXNzZXMgKyBhZGQgYm9vdHN0cmFwIGNsYXNzZXNcclxuICBjb25zdCBjb250cm9sID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuWzBdLCB7XHJcbiAgICBjbGFzc05hbWU6IChjaGlsZHJlblswXS5jbGFzc05hbWUgfHwgXCJcIikgKyBcIiBmb3JtLWNvbnRyb2wgdy03NVwiLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG0tM1wiPntjb250cm9sfTwvZGl2PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYWwgdGV4dCBpbnB1dCBmaWVsZC5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWwge3N0cmluZ30gRm9ybUZpZWxkJ3MgbGFiZWxcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSByZXF1aXJlZD8ge2Jvb2xlYW59IHdoZXRoZXIgdGhpcyBGb3JtRmllbGQgaXMgcmVxdWlyZWQgb3Igbm90XHJcbiAqIC0gbWluPyB7bnVtYmVyfSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqIC0gbWF4PyB7bnVtYmVyfSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGV4dEZpZWxkKHByb3BzKSB7XHJcbiAgY29uc3QgaW5wdXRJZCA9IGBmb3JtLWZpZWxkLSR7cHJvcHMubGFiZWx9LSR7cHJvcHMucGFyZW50SWR9YDtcclxuICBjb25zdCBtaW5MZW5ndGggPSBwcm9wcy5taW47XHJcbiAgY29uc3QgbWF4TGVuZ3RoID0gcHJvcHMubWF4O1xyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGlucHV0RmllbGQuY3VycmVudDtcclxuICAgIGNvbnN0IHZhbGlkaXR5U3RhdGUgPSBlbGVtZW50LnZhbGlkaXR5O1xyXG5cclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnZhbHVlTWlzc2luZylcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7cHJvcHMubGFiZWx9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke3Byb3BzLmxhYmVsfSBtdXN0IGJlIGF0IGxlYXN0ICR7bWluTGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudG9vTG9uZylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtwcm9wcy5sYWJlbH0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5vbkNoYW5nZShlLCBwcm9wcy5pbmRleCl9XHJcbiAgICAgICAgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfVxyXG4gICAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxyXG4gICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5sYWJlbH1cclxuICAgICAgICByZWY9e2lucHV0RmllbGR9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm1GaWVsZFRlbXBsYXRlPlxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnB1dCBmaWVsZCBmb3IgZW1haWxzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogLSBsYWJlbD8ge3N0cmluZ30gRm9ybUZpZWxkJ3MgbGFiZWwgKGRlZmF1bHQgbGFiZWwgaXMgRW1haWwpXHJcbiAqIC0gbmFtZSB7c3RyaW5nfSBuYW1lIGZvciBpbnB1dCBlbGVtZW50XHJcbiAqIC0gcmVxdWlyZWQ/IHtib29sZWFufSB3aGV0aGVyIHRoaXMgRm9ybUZpZWxkIGlzIHJlcXVpcmVkIG9yIG5vdFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKiAtIG1heD8ge251bWJlcn0gbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEVtYWlsRmllbGQocHJvcHMpIHtcclxuICBjb25zdCBsYWJlbE5hbWUgPSBwcm9wcy5sYWJlbCB8fCBcIkVtYWlsXCI7XHJcbiAgY29uc3QgaW5wdXRJZCA9IGBmb3JtLWZpZWxkLSR7bGFiZWxOYW1lfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heCB8fCA1MDtcclxuXHJcbiAgY29uc3QgdmFsaWRhdG9yQWRkZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIC8vcmVmZXJlbmNlIHRvIGlucHV0IGh0bWwgZWxlbWVudFxyXG4gIGNvbnN0IGlucHV0RmllbGQgPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuXHJcbiAgLy90byBlbnN1cmUgdmFsaWRhdG9yIG9ubHkgZ2V0cyBhZGRlZCB0byBwYXJlbnQgRm9ybSBvbmNlXHJcbiAgaWYgKCF2YWxpZGF0b3JBZGRlZC5jdXJyZW50KSB7XHJcbiAgICBwcm9wcy5hZGRWYWxpZGF0b3IodmFsaWRhdGUpO1xyXG4gICAgdmFsaWRhdG9yQWRkZWQuY3VycmVudCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdGhlIHZhbGlkaXR5IG9mIGlucHV0LlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge29iamVjdH0gaWYgaW5wdXQgaXMgdmFsaWQsIHJldHVybnMgbnVsbC4gT3RoZXJ3aXNlLCByZXR1cm5zIGFuIG9iamVjdFxyXG4gICAqIGNvbnRhaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlcnJvclxyXG4gICAqIHttZXNzYWdlOiBlcnJvciBtZXNzYWdlLCBlbGVtZW50OiByZWZlcmVuY2UgdG8gSHRtbEVsZW1lbnQgdGhhdCBjb250YWlucyBlcnJvcn1cclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBpbnB1dEZpZWxkLmN1cnJlbnQ7XHJcbiAgICBjb25zdCB2YWxpZGl0eVN0YXRlID0gZWxlbWVudC52YWxpZGl0eTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS52YWx1ZU1pc3NpbmcpXHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gaXMgcmVxdWlyZWQuYCwgZWxlbWVudCB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudHlwZU1pc21hdGNoKVxyXG4gICAgICByZXR1cm4geyBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IG11c3QgYmUgYW4gZW1haWwuYCwgZWxlbWVudCB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudG9vU2hvcnQpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGF0IGxlYXN0ICR7bWluTGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudG9vTG9uZylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1GaWVsZFRlbXBsYXRlPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD17aW5wdXRJZH1cclxuICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSwgcHJvcHMuaW5kZXgpfVxyXG4gICAgICAgIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17bGFiZWxOYW1lfVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIElucHV0IGZpZWxkIGZvciBwYXNzd29yZHMuIElucHV0IGlzIGFsd2F5cyByZXF1aXJlZC5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWw/IHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChkZWZhdWx0IGxhYmVsIGlzIFBhc3N3b3JkKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFBhc3N3b3JkRmllbGQocHJvcHMpIHtcclxuICBjb25zdCBsYWJlbE5hbWUgPSBwcm9wcy5sYWJlbCB8fCBcIlBhc3N3b3JkXCI7XHJcbiAgY29uc3QgaW5wdXRJZCA9IGBmb3JtLWZpZWxkLSR7bGFiZWxOYW1lfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heCB8fCA1MDtcclxuXHJcbiAgY29uc3QgdmFsaWRhdG9yQWRkZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIC8vcmVmZXJlbmNlIHRvIGlucHV0IGh0bWwgZWxlbWVudFxyXG4gIGNvbnN0IGlucHV0RmllbGQgPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuXHJcbiAgLy90byBlbnN1cmUgdmFsaWRhdG9yIG9ubHkgZ2V0cyBhZGRlZCB0byBwYXJlbnQgRm9ybSBvbmNlXHJcbiAgaWYgKCF2YWxpZGF0b3JBZGRlZC5jdXJyZW50KSB7XHJcbiAgICBwcm9wcy5hZGRWYWxpZGF0b3IodmFsaWRhdGUpO1xyXG4gICAgdmFsaWRhdG9yQWRkZWQuY3VycmVudCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdGhlIHZhbGlkaXR5IG9mIGlucHV0XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gaW5wdXRGaWVsZC5jdXJyZW50O1xyXG4gICAgY29uc3QgdmFsaWRpdHlTdGF0ZSA9IGVsZW1lbnQudmFsaWRpdHk7XHJcblxyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudmFsdWVNaXNzaW5nKVxyXG4gICAgICByZXR1cm4geyBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAke21heExlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtRmllbGRUZW1wbGF0ZT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9e2lucHV0SWR9XHJcbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWUgfHwgXCJcIn1cclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSwgcHJvcHMuaW5kZXgpfVxyXG4gICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxyXG4gICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtsYWJlbE5hbWV9XHJcbiAgICAgICAgcmVmPXtpbnB1dEZpZWxkfVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSGlkZGVuIGlucHV0IGZpZWxkXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsIHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChub3QgdmlzaWJsZSwganVzdCBmb3IgbmFtaW5nIHB1cnBvc2VzKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIHZhbHVlIHtzdHJpbmd9IGlucHV0J3MgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBIaWRkZW5GaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke3Byb3BzLmxhYmVsfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xyXG4gICAgLy9hbHdheXMgdmFsaWRcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtRmllbGRUZW1wbGF0ZT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9e2lucHV0SWR9XHJcbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgaGlkZGVuPXt0cnVlfVxyXG4gICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogQSBjb21wb25lbnQgcmVwcmVzZW50aW5nIGEgc2luZ2xlIGdhbWVcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZShwcm9wcykge1xyXG4gIGZ1bmN0aW9uIHN0b3BEcmFnKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG4gIC8vZ2l2ZW4gdG8gZGl2J3MgY2hpbGRyZW4gc28gb25seSB0aGUgZ2FtZS1jb250YWluZXJcclxuICAvL2lzIGRyYWdnYWJsZVxyXG4gIGNvbnN0IHVuZHJhZ2dhYmxlID0ge1xyXG4gICAgZHJhZ2dhYmxlOiBcImZhbHNlXCIsXHJcbiAgICBvbkRyYWdTdGFydDogc3RvcERyYWcsXHJcbiAgICBvbkRyYWdPdmVyOiBzdG9wRHJhZyxcclxuICAgIG9uRHJvcDogc3RvcERyYWcsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiZ2FtZS1jb250YWluZXIgcm91bmRlZCBteS0zIG14LTJcIlxyXG4gICAgICBkYXRhLWluZGV4PXtwcm9wc1tcImRhdGEtaW5kZXhcIl19XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXtwcm9wcy5vbkRyYWdTdGFydH1cclxuICAgICAgb25EcmFnT3Zlcj17cHJvcHMub25EcmFnT3Zlcn1cclxuICAgICAgb25Ecm9wPXtwcm9wcy5vbkRyb3B9XHJcbiAgICAgIGRyYWdnYWJsZT17cHJvcHMuZHJhZ2dhYmxlfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtaW1nIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLmdhbWVDb3ZlclVybH1cclxuICAgICAgICAgICAgICBhbHQ9e2BDb3ZlciBhcnQgZm9yICR7cHJvcHMuZ2FtZU5hbWV9YH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezkwfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXs5MH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIGQtaW5saW5lLWJsb2NrIG0tYXV0b1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ2FtZS1uYW1lIGQtaW5saW5lLWJsb2NrICR7XHJcbiAgICAgICAgICAgICAgcHJvcHMuaXNFZGl0aW5nID8gXCJjb2wtbWQtNlwiIDogXCJjb2wtbWQtOVwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD57cHJvcHMuZ2FtZU5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge3Byb3BzLmlzRWRpdGluZyAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkRlbGV0ZShwcm9wcy5nYW1lSWQpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC0zIGJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVTZWFyY2hCb3gocHJvcHMpIHtcclxuICAvL3NlYXJjaCB0ZXJtIGluIHNlYXJjaCBiYXJcclxuICBjb25zdCBbZGlzcGxheWVkU2VhcmNoVGVybSwgc2V0RGlzcGxheWVkU2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvL3RoZSBhY3R1YWwgdW5kZXJseWluZyBzZWFyY2ggdGVybSByZWdhcmRsZXNzIG9mIHdoYXRzIHR5cGVkXHJcbiAgLy9jbGlja2luZyBuZXh0L3ByZXYgd2lsbCBjaGFuZ2UgcGFnZXMgZm9yIHRoaXMgdmFsdWVcclxuICAvL2NsaWNraW5nIHNlYXJjaCBidXR0b24gd2lsbCBjaGFuZ2UgdGhpcyB2YWx1ZVxyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKGRpc3BsYXllZFNlYXJjaFRlcm0pO1xyXG4gIC8vcGFnZSBvZiBzZWFyY2ggcmVzdWx0c1xyXG4gIGNvbnN0IFtzZWFyY2hQYWdlLCBzZXRTZWFyY2hQYWdlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgLy9saXN0IG9mIG9iamVjdHMgdGhhdCB3aWxsIGJlIHJldHJpZXZlZCBmcm9tIHNlYXJjaCBhcGlcclxuICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy93aGV0aGVyIG9yIG5vdCBzZWFyY2ggcmVzdWx0cyBhcmUgY3VycmVudGx5IGxvYWRpbmdcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy9lcnJvciBtZXNzYWdlXHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vd2hldGhlciBvciBub3QgdGhlcmUgaXMgYSBuZXh0IHBhZ2Ugb2Ygc2VhcmNoIHJlc3VsdHNcclxuICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy91c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGl0cyBmaXJzdCByZW5kZXIgb3Igbm90XHJcbiAgY29uc3QgZmlyc3RSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhZ0dhbWUoZSwgZ2FtZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIsIEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcclxuICB9XHJcblxyXG4gIC8vZHJhZ292ZXIgaGFuZGxlciBpcyBuZWVkZWQgdG8gbWFrZSBlbGVtZW50XHJcbiAgLy9kcmFnZ2FibGVcclxuICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzcGxheWVkU2VhcmNoUmVzdWx0cyA9IHNlYXJjaFJlc3VsdHMubWFwKChnYW1lKSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBkcmFnZ2FibGU9e3RydWV9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXsoZSkgPT4gc3RhcnREcmFnR2FtZShlLCBnYW1lKX1cclxuICAgICAgb25EcmFnT3Zlcj17ZHJhZ092ZXJ9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGRpc3BsYXllZCBzZWFyY2ggdGVybVxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgc2V0RGlzcGxheWVkU2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHNlYXJjaFRlcm0gdG8gZGlzcGxheWVkU2VhcmNoVGVybVxyXG4gICAqIGFuZCBmZXRjaGVzIHNlYXJjaCByZXN1bHRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZGlzcGxheWVkU2VhcmNoVGVybSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoVGVybShkaXNwbGF5ZWRTZWFyY2hUZXJtKTtcclxuICAgIHNldFNlYXJjaFBhZ2UoMCk7XHJcbiAgICBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyhkaXNwbGF5ZWRTZWFyY2hUZXJtLCAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgcGFnZSBudW1iZXIgZm9yIHNlYXJjaFRlcm1cclxuICAgKiAobm90IGRpc3BsYXllZFNlYXJjaFRlcm0pIGFuZCBmZXRjaGVzIHNlYXJjaFxyXG4gICAqIHJlc3VsdHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZU51bWJlciBuZXcgcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBmdW5jdGlvbiBjaGFuZ2VQYWdlKHBhZ2VOdW1iZXIpIHtcclxuICAgIGlmIChwYWdlTnVtYmVyIDwgMCkgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoUGFnZShwYWdlTnVtYmVyKTtcclxuICAgIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKHNlYXJjaFRlcm0sIHBhZ2VOdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2hlcyBhIHNlYXJjaCBmcm9tIHRoZSBBUEkgYW5kIHBvcHVsYXRlcyBwYWdlXHJcbiAgICogd2l0aCBzZWFyY2ggcmVzdWx0cy4gVGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSBjYWxsZWRcclxuICAgKiB3aXRoIGEgc2VhcmNoIHRlcm0gYW5kIHBhZ2UgbWFudWFsbHkgaW5zdGVhZCBvZiByZWx5aW5nIG9uXHJcbiAgICogY2hlY2tpbmcgc3RhdGUgYXMgcmVhZGluZyBzdGF0ZSBpbW1lZGlhdGVseSBhZnRlciBzZXR0aW5nIGl0XHJcbiAgICogd2lsbCByZXR1cm4gc3RhbGUgdmFsdWVzLiBTbywgd2UgZ2l2ZSBpdCB0aGUgZnJlc2ggdmFsdWVzIG1hbnVhbGx5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlcm0gc2VhcmNoIHRlcm1cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSBzZWFyY2ggcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyh0ZXJtLCBwYWdlKSB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgcXVlcnkgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZWFyY2gvJHt0ZXJtfS8ke3BhZ2V9YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnkpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRTZWFyY2hSZXN1bHRzKGRhdGEucmVzdWx0cyk7XHJcbiAgICAgIHNldEhhc05leHQoZGF0YS5oYXNOZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShyZXN1bHRzLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLXNlYXJjaC1ib3ggZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHMgZ2FtZS1saXN0XCI+XHJcbiAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cD57ZXJyb3JNZXNzYWdlfTwvcD59XHJcbiAgICAgICAge2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XHJcbiAgICAgICAge2Rpc3BsYXllZFNlYXJjaFJlc3VsdHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1iYXJcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FtZS1zZWFyY2gtYmFyXCIgY2xhc3NOYW1lPVwiZC1ub25lXCI+XHJcbiAgICAgICAgICAgIE5hbWUgb2YgR2FtZVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImdhbWUtc2VhcmNoLWJhclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkaXNwbGF5ZWRTZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWUgb2YgR2FtZS4uLlwiXHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAge3NlYXJjaFBhZ2UgPj0gMCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAge3NlYXJjaFBhZ2UgPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2Uoc2VhcmNoUGFnZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFByZXZcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYWdlLW51bWJlclwiIGNsYXNzTmFtZT1cImQtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgUGFnZTpcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYWdlLW51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYWdlICsgMX1cclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICB7aGFzTmV4dCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHNlYXJjaFBhZ2UgKyAxKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIi4vRm9ybUZpZWxkc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdChwcm9wcykge1xyXG4gIHJldHVybiA8YnV0dG9uIGlkPXtwcm9wcy5pZH0gb25DbGljaz17cHJvcHMub25DbGlja30+PC9idXR0b24+O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCwgSGlkZGVuRmllbGQgfSBmcm9tIFwiLi9Gb3JtRmllbGRzXCI7XHJcbmltcG9ydCBUZXN0IGZyb20gXCIuL1Rlc3RcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgZXhwZWN0ZWQgcHJvcHM6XHJcbiAqIC0gdXNlcklkIHtudW1iZXJ9IHRoZSBsb2dnZWQgaW4gdXNlcidzIHVzZXIgaWRcclxuICogLSBwcm9maWxlUGljIHtzdHJpbmd9IHNyYyB1cmwgZm9yIHVzZXIncyBwcm9maWxlIHBpY3R1cmVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvb2xiYXIocHJvcHMpIHtcclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSwgZXJyb3JJbmZvKSB7XHJcbiAgICBpZiAoZXJyb3JJbmZvKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBpZD1cIlRvb2xiYXItRm9ybVwiXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICBzdWJtaXRCdG5UZXh0PVwiR28hXCJcclxuICAgICAgICBtZXRob2Q9XCJnZXRcIlxyXG4gICAgICAgIGFjdGlvbj1cIi9zZWFyY2hcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIlNlYXJjaFwiIG5hbWU9XCJxdWVyeVwiIHZhbHVlPVwiXCIgLz5cclxuICAgICAgICA8SGlkZGVuRmllbGQgbGFiZWw9XCJQYWdlXCIgbmFtZT1cInBhZ2VcIiB2YWx1ZT1cIjBcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxhIGhyZWY9e2AvdXNlci8ke3Byb3BzLnVzZXJJZH1gfT5cclxuICAgICAgICA8aW1nIHNyYz17cHJvcHMucHJvZmlsZVBpY30gYWx0PXtgWW91ciBwcm9maWxlIHBpY3R1cmVgfSAvPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVcIjtcclxuaW1wb3J0IEdhbWVTZWFyY2hCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FtZVNlYXJjaEJveFwiO1xyXG5cclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9vbGJhclwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIFRoZSBwYWdlIHRoYXQgaXMgZGlzcGxheWVkIHdoZW5cclxuICogdmlld2luZyBhIHVzZXIncyBwcm9maWxlXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQYWdlKHByb3BzKSB7XHJcbiAgLyogc2V0dGluZyBzdGF0ZSAqL1xyXG4gIC8vdGhlIHVzZXIncyBhY3R1YWwgZmF2b3JpdGUgZ2FtZXNcclxuICBjb25zdCBbZmF2b3JpdGVHYW1lcywgc2V0RmF2b3JpdGVHYW1lc10gPSB1c2VTdGF0ZShwcm9wcy5nYW1lcyk7XHJcbiAgLy90aGUgdXNlcidzIGZhdm9yaXRlIGdhbWUgYXMgY3VycmVudGx5IGRpc3BsYXllZC4gdGhlc2UgbWF5IGRpZmZlclxyXG4gIC8vZnJvbSBhY3R1YWwgZmF2b3JpdGUgZ2FtZXMgZHVyaW5nIGVkaXRpbmdcclxuICBjb25zdCBbZGlzcGxheWVkRmF2b3JpdGVHYW1lcywgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lc10gPSB1c2VTdGF0ZShcclxuICAgIGZhdm9yaXRlR2FtZXNcclxuICApO1xyXG4gIC8vd2hldGhlciBvciBub3QgdXNlciBpcyBlZGl0aW5nIGZhdm9yaXRlIGdhbWVzXHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBhIEdhbWUgaXMgZHJhZ2dlZC4gQWRkc1xyXG4gICAqIHRoZSBHYW1lJ3MgZGF0YS1pbmRleCBhdHRyaWJ1dGUgdG9cclxuICAgKiBEcmFnRXZlbnQuZGF0YVRyYW5zZmVyIHRvIGJlIHVzZWQgYnlcclxuICAgKiBkcm9wR2FtZSgpIGxhdGVyIG9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhZ0dhbWUoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICB9XHJcblxyXG4gIC8vZHJhZ292ZXIgaGFuZGxlciBpcyBuZWVkZWQgdG8gbWFrZSBlbGVtZW50XHJcbiAgLy9kcmFnZ2FibGVcclxuICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkcmFnZ2VkIGdhbWUgd2lsbCBiZSBzd2FwcGVkIHdpdGggdGhlIGdhbWVcclxuICAgKiBpdCdzIGRyb3BwZWQgb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRyb3BHYW1lT25HYW1lKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgbmV3RmF2ZUdhbWVzID0gWy4uLmRpc3BsYXllZEZhdm9yaXRlR2FtZXNdO1xyXG4gICAgY29uc3QgbmV3R2FtZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgLy9pbmRleCBvZiBnYW1lIHRoYXQgd2FzIGRyb3BwZWQgb25cclxuICAgIGNvbnN0IGRyb3BUYXJnZXQgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgLy9kYXRhVHJhbnNmZXIgd2lsbCBjb250YWluIGEganMgb2JqZWN0IGlmIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWRcclxuICAgIC8vaXMgZnJvbSBzZWFyY2ggcmVzdWx0cywgbWVhbmluZyBhIG5ldyBnYW1lIGlzIGJlaW5nIGFkZGVkXHJcbiAgICAvL3RvIGZhdm9yaXRlIGdhbWVzXHJcbiAgICBpZiAobmV3R2FtZSkge1xyXG4gICAgICBjb25zdCBuZXdHYW1lQXNPYmplY3QgPSBKU09OLnBhcnNlKG5ld0dhbWUpO1xyXG4gICAgICAvL3dlIHJlcGxhY2UgZWxlbWVudHMgYXMgd2UgZ28sIGV2ZW50dWFsbHkgd2UgYW4gZWxlbWVudCB0byBuZXdGYXZlR2FtZXNbbmV3RmF2ZUdhbWVzLmxlbmd0aF1cclxuICAgICAgLy90aGlzIGluY3JlYXNlcyB0aGUgbGVuZ3RoIGFuZCB0aGUgbG9vcCBnb2VzIG9uIGZvcmV2ZXJcclxuICAgICAgLy9zbyB3ZSBrZWVwIHRoZSBsZW5ndGggb2YgdGhlIGxpc3QgYmVmb3JlIHdlIHN0YXJ0XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IG5ld0ZhdmVHYW1lcy5sZW5ndGg7XHJcbiAgICAgIC8vZ2FtZSB0byBiZSBhZGRlZCBpblxyXG4gICAgICBsZXQgaG9sZGVyID0gbmV3R2FtZUFzT2JqZWN0O1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChuZXdGYXZlR2FtZXNbaV0gJiYgbmV3RmF2ZUdhbWVzW2ldLmlkID09PSBuZXdHYW1lQXNPYmplY3QuaWQpXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy9zdGFydCBzd2FwcGluZyBmcm9tIGRyb3BUYXJnZXQgb253YXJkc1xyXG4gICAgICAgIGlmIChpID49IGRyb3BUYXJnZXQpIHtcclxuICAgICAgICAgIC8vcHV0IGhvbGRlciBpbnRvIHRoZSBsaXN0LCB0YWtlIHdoYXQgd2FzIHRoZXJlIGFuZCBwdXQgaW50byBob2xkZXJcclxuICAgICAgICAgIGNvbnN0IHRlbXAgPSBuZXdGYXZlR2FtZXNbaV07XHJcbiAgICAgICAgICBuZXdGYXZlR2FtZXNbaV0gPSBob2xkZXI7XHJcbiAgICAgICAgICBob2xkZXIgPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9pZiB0aGVyZSBpcyBubyBqcyBvYmplY3QsIHRoZW4gdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZCBpcyBhbiBhbHJlYWR5XHJcbiAgICAvL2V4aXN0aW5nIGdhbWUgc28gd2UganVzdCBzd2FwIHBsYWNlc1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vdGhlIGdhbWUgdGhhdCB3YXMgYmVpbmcgZHJhZ2dlZFxyXG4gICAgICBjb25zdCBkcmFnZ2VkR2FtZSA9IE51bWJlcihlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKSk7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSBuZXdGYXZlR2FtZXNbZHJvcFRhcmdldF07XHJcbiAgICAgIG5ld0ZhdmVHYW1lc1tkcm9wVGFyZ2V0XSA9IG5ld0ZhdmVHYW1lc1tkcmFnZ2VkR2FtZV07XHJcbiAgICAgIG5ld0ZhdmVHYW1lc1tkcmFnZ2VkR2FtZV0gPSB0ZW1wO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMobmV3RmF2ZUdhbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkcmFnZ2VkIGdhbWUgd2lsbCBiZSBhZGRlZCB0byB0aGVcclxuICAgKiBlbmQgb2YgdGhlIGxpc3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZHJvcEdhbWVPbkNvbnRhaW5lcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGNvbnN0IG5ld0ZhdmVHYW1lcyA9IFsuLi5kaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXTtcclxuICAgIGNvbnN0IG5ld0dhbWUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIC8vZGF0YVRyYW5zZmVyIHdpbGwgY29udGFpbiBhIGpzIG9iamVjdCBpZiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkXHJcbiAgICAvL2lzIGZyb20gc2VhcmNoIHJlc3VsdHMsIG1lYW5pbmcgYSBuZXcgZ2FtZSBpcyBiZWluZyBhZGRlZFxyXG4gICAgLy90byBmYXZvcml0ZSBnYW1lc1xyXG4gICAgaWYgKG5ld0dhbWUpIHtcclxuICAgICAgbmV3RmF2ZUdhbWVzLnB1c2goSlNPTi5wYXJzZShuZXdHYW1lKSk7XHJcbiAgICB9XHJcbiAgICAvL2lmIHRoZXJlIGlzIG5vIGpzIG9iamVjdCwgdGhlbiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkIGlzIGFuIGFscmVhZHlcclxuICAgIC8vZXhpc3RpbmcgZ2FtZS4gZHJhZ2dlZCBnYW1lIGlzIGFkZGVkIHRvIHRoZSBlbmQgYW5kIHJlc3QgYXJlIHNoaWZ0ZWQgdXBcclxuICAgIGVsc2Uge1xyXG4gICAgICBsZXQgbmV3UG9zID0gTnVtYmVyKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpKTtcclxuICAgICAgbGV0IGRyYWdnZWRHYW1lID0gbmV3RmF2ZUdhbWVzW25ld1Bvc107XHJcbiAgICAgIC8vc2hpZnQgZXZlcnl0aGluZyB0b3dhcmRzIHRoZSBmcm9udFxyXG4gICAgICBmb3IgKDsgbmV3UG9zIDwgbmV3RmF2ZUdhbWVzLmxlbmd0aCAtIDE7IG5ld1BvcysrKVxyXG4gICAgICAgIG5ld0ZhdmVHYW1lc1tuZXdQb3NdID0gbmV3RmF2ZUdhbWVzW25ld1BvcyArIDFdO1xyXG5cclxuICAgICAgLy9hZGQgZHJhZ2dlZEdhbWUgYmFjayB0byB0aGUgZW5kXHJcbiAgICAgIG5ld0ZhdmVHYW1lc1tuZXdQb3NdID0gZHJhZ2dlZEdhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhuZXdGYXZlR2FtZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlcyBhIGdhbWUgZnJvbSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGdhbWVJZCB0aGUgaWQgb2YgZ2FtZSB0byBiZSBkZWxldGVkXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZGVsZXRlR2FtZShnYW1lSWQpIHtcclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMoXHJcbiAgICAgIGRpc3BsYXllZEZhdm9yaXRlR2FtZXMuZmlsdGVyKChnYW1lKSA9PiBnYW1lLmlkICE9PSBnYW1lSWQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gZWRpdGluZyBpcyBjYW5jZWxsZWQuIFNldHMgZGlzcGxheWVkIGZhdm9yaXRlIGdhbWVzXHJcbiAgICogdG8gYWN0dWFsIGZhdm9yaXRlIGdhbWVzLlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHJvbGxiYWNrQ2hhbmdlcygpIHtcclxuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMoZmF2b3JpdGVHYW1lcyk7XHJcbiAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2F2ZUNoYW5nZXMoKSB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgICBjb25zdCBmYXZlR2FtZUlkcyA9IGRpc3BsYXllZEZhdm9yaXRlR2FtZXMubWFwKChnYW1lKSA9PiBnYW1lLmlkKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9mYXZvcml0ZXMvJHtwcm9wcy5pZH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZmF2ZUdhbWVJZHMpLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRGYXZvcml0ZUdhbWVzKGRpc3BsYXllZEZhdm9yaXRlR2FtZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vZ2V0IGEgbGlzdCBvZiBHYW1lIGNvbXBvbmVudHMgY29ycmVzcG9uZGluZyB0byBmYXZvcml0ZSBnYW1lc1xyXG4gIC8vZWFjaCBpcyBnaXZlbiBhIGRhdGEtaW5kZXggYXR0cmlidXRlIHRoYXQgY29ycmVzcG9uZHMgdG9cclxuICAvL3doYXQgcG9zaXRpb24gaW4gdGhlIGxpc3QgdGhleSBhcmUuIHRoaXMgd2lsbCBiZSB1c2VkIGR1cmluZ1xyXG4gIC8vZWRpdGluZyBmYXZvcml0ZSBnYW1lcy5cclxuICBjb25zdCBmYXZvcml0ZUdhbWVzTGlzdCA9IGRpc3BsYXllZEZhdm9yaXRlR2FtZXMubWFwKChnYW1lLCBpbmRleCkgPT4gKFxyXG4gICAgPEdhbWVcclxuICAgICAga2V5PXtnYW1lLmlkfVxyXG4gICAgICBnYW1lSWQ9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVOYW1lPXtnYW1lLm5hbWV9XHJcbiAgICAgIGdhbWVDb3ZlclVybD17Z2FtZS5jb3ZlcnVybH1cclxuICAgICAgaXNFZGl0aW5nPXtpc0VkaXRpbmd9XHJcbiAgICAgIGRhdGEtaW5kZXg9e1wiXCIgKyBpbmRleH1cclxuICAgICAgZHJhZ2dhYmxlPXtpc0VkaXRpbmcgKyBcIlwifVxyXG4gICAgICBvbkRyYWdTdGFydD17aXNFZGl0aW5nID8gc3RhcnREcmFnR2FtZSA6IHVuZGVmaW5lZH1cclxuICAgICAgb25EcmFnT3Zlcj17aXNFZGl0aW5nID8gZHJhZ092ZXIgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uRHJvcD17aXNFZGl0aW5nID8gZHJvcEdhbWVPbkdhbWUgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uRGVsZXRlPXtkZWxldGVHYW1lfVxyXG4gICAgLz5cclxuICApKTtcclxuXHJcbiAgY29uc29sZS5sb2cocHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VG9vbGJhciB1c2VySWQ9e3Byb3BzLmlkfSBwcm9maWxlUGljPXtwcm9wcy5wcm9maWxlUGljfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcGFnZS1oZWFkZXIgbWItM1wiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17cHJvcHMucHJvZmlsZVBpY31cclxuICAgICAgICAgIGFsdD17YCR7cHJvcHMuZGlzcGxheU5hbWV9J3MgcHJvZmlsZSBwaWN0dXJlYH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtcHJvZmlsZS1waWMgcm91bmRlZC1jaXJjbGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktMSBkLWlubGluZVwiPntwcm9wcy5kaXNwbGF5TmFtZX08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B1c2VyLXBhZ2UtbWFpbiAke2lzRWRpdGluZyAmJiBcImQtZmxleFwifWB9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHVzZXItcGFnZS1nYW1lcyByb3VuZGVkLWxnIGQtZmxleCBmbGV4LWNvbHVtbiAke1xyXG4gICAgICAgICAgICBpc0VkaXRpbmcgPyBcImlzLWVkaXRpbmdcIiA6IFwibS1hdXRvXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2b3JpdGUtZ2FtZXMtbGlzdCBnYW1lLWxpc3RcIj5cclxuICAgICAgICAgICAge2Zhdm9yaXRlR2FtZXNMaXN0fVxyXG4gICAgICAgICAgICB7aXNFZGl0aW5nICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBpZD1cImRyb3Atc3BhY2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMyBteC0yXCJcclxuICAgICAgICAgICAgICAgIG9uRHJvcD17ZHJvcEdhbWVPbkNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVyfVxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tYmFyXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5pZCAmJlxyXG4gICAgICAgICAgICAgICghaXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyb2xsYmFja0NoYW5nZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVDaGFuZ2VzfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9yTWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNFZGl0aW5nICYmIDxHYW1lU2VhcmNoQm94IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb250ZXh0LnJlcy5sb2NhbHMpKSxcclxuICB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=