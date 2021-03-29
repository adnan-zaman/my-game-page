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
    className: "btn btn-success d-md-none"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybUZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYW1lU2VhcmNoQm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZHJlbiIsImNoaWxkIiwidmFsdWUiLCJmaWVsZFZhbHVlcyIsInNldEZpZWxkVmFsdWVzIiwiZmllbGRWYWxpZGF0b3JzIiwidXNlUmVmIiwiaW5kZXgiLCJjbG9uZUVsZW1lbnQiLCJhZGRWYWxpZGF0b3IiLCJ2YWxpZGF0b3IiLCJjdXJyZW50IiwicHVzaCIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwicGFyZW50SWQiLCJpZCIsImUiLCJuZXdGaWVsZFZhbHVlcyIsImkiLCJ0YXJnZXQiLCJ2YWxpZGF0ZUFsbEZpZWxkcyIsImVycm9ySW5mbyIsIm9uU3VibWl0IiwiYWN0aW9uIiwibWV0aG9kIiwiY2xhc3NOYW1lIiwic3VibWl0QnRuVGV4dCIsIkZvcm1GaWVsZFRlbXBsYXRlIiwidG9BcnJheSIsImNvbnRyb2wiLCJUZXh0RmllbGQiLCJpbnB1dElkIiwibGFiZWwiLCJtaW5MZW5ndGgiLCJtaW4iLCJtYXhMZW5ndGgiLCJtYXgiLCJ2YWxpZGF0b3JBZGRlZCIsImlucHV0RmllbGQiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0ZSIsImVsZW1lbnQiLCJ2YWxpZGl0eVN0YXRlIiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJtZXNzYWdlIiwidG9vU2hvcnQiLCJ0b29Mb25nIiwibmFtZSIsInJlcXVpcmVkIiwiRW1haWxGaWVsZCIsImxhYmVsTmFtZSIsInR5cGVNaXNtYXRjaCIsIlBhc3N3b3JkRmllbGQiLCJIaWRkZW5GaWVsZCIsIkdhbWUiLCJkYXRhSW5kZXgiLCJOdW1iZXIiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJkcmFnZ2FibGUiLCJpc0VkaXRpbmciLCJnYW1lQ292ZXJVcmwiLCJnYW1lTmFtZSIsImNoYW5nZVBvc2l0aW9uIiwiaXNMYXN0Iiwib25EZWxldGUiLCJnYW1lSWQiLCJvbkFkZCIsIkdhbWVTZWFyY2hCb3giLCJkaXNwbGF5ZWRTZWFyY2hUZXJtIiwic2V0RGlzcGxheWVkU2VhcmNoVGVybSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VhcmNoUGFnZSIsInNldFNlYXJjaFBhZ2UiLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiaGFzTmV4dCIsInNldEhhc05leHQiLCJmaXJzdFJlbmRlciIsInN0YXJ0RHJhZ0dhbWUiLCJnYW1lIiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkcmFnT3ZlciIsInByZXZlbnREZWZhdWx0IiwiZHJvcEVmZmVjdCIsImRpc3BsYXllZFNlYXJjaFJlc3VsdHMiLCJjb3ZlcnVybCIsImhhbmRsZVNlYXJjaCIsImZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzIiwiY2hhbmdlUGFnZSIsInBhZ2VOdW1iZXIiLCJ0ZXJtIiwicGFnZSIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJyZXN1bHRzIiwibXNnIiwiVGVzdCIsIm9uQ2xpY2siLCJUb29sYmFyIiwiaGFuZGxlU3VibWl0IiwidXNlcklkIiwicHJvZmlsZVBpYyIsIlVzZXJQYWdlIiwiZ2FtZXMiLCJmYXZvcml0ZUdhbWVzIiwic2V0RmF2b3JpdGVHYW1lcyIsImRpc3BsYXllZEZhdm9yaXRlR2FtZXMiLCJzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzIiwic2V0SXNFZGl0aW5nIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJkcm9wR2FtZU9uR2FtZSIsIm5ld0ZhdmVHYW1lcyIsIm5ld0dhbWUiLCJnZXREYXRhIiwiZHJvcFRhcmdldCIsIm5ld0dhbWVBc09iamVjdCIsInBhcnNlIiwiZ2FtZUFscmVhZHlFeGlzdHMiLCJsZW5ndGgiLCJob2xkZXIiLCJ0ZW1wIiwiZHJhZ2dlZEdhbWUiLCJkcm9wR2FtZU9uQ29udGFpbmVyIiwibmV3UG9zIiwiZGVsZXRlR2FtZSIsImZpbHRlciIsInJvbGxiYWNrQ2hhbmdlcyIsInNhdmVDaGFuZ2VzIiwiZmF2ZUdhbWVJZHMiLCJjcmVkZW50aWFscyIsImJvZHkiLCJoZWFkZXJzIiwiZXJyb3IiLCJjdXJySW5kZXgiLCJuZXh0SW5kZXgiLCJnIiwiY29uc29sZSIsImxvZyIsImZhdm9yaXRlR2FtZXNMaXN0IiwiZGlzcGxheU5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwibG9jYWxzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVB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ZUFzQkU7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FBK0IvRCxZQUEvQixDQXRCRixDQWhCRixDQURGLEVBMENHbkIsU0FBUyxpQkFBSSwyREFBQyxpRUFBRDtBQUFlLFNBQUssRUFBRU87QUFBdEIsSUExQ2hCLENBVkYsQ0FERjtBQXlERDtBQUVNLFNBQVN3RixrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUM7QUFDMUMsU0FBTztBQUNMcEssU0FBSyxFQUFFaUcsSUFBSSxDQUFDMEMsS0FBTCxDQUFXMUMsSUFBSSxDQUFDQyxTQUFMLENBQWVrRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBM0IsQ0FBWDtBQURGLEdBQVA7QUFHRCxDOzs7Ozs7Ozs7OztBQzdTRCxrQyIsImZpbGUiOiJwYWdlcy91c2VyUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdXNlclBhZ2UuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEdlbmVyYWwgZm9ybSBjb21wb25lbnQgdGhhdCB2YWxpZGF0ZXMgYW5kIGNvbnRyb2xzIHRoZSBzdGF0ZVxyXG4gKiBvZiBhbGwgb2YgaXRzIGZpZWxkcy4gQ2hpbGRyZW4gb2YgRm9ybSBzaG91bGQgYmUgYSBsaXN0IG9mIEZvcm1FbGVtZW50cy5cclxuICpcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIGlkIHtzdHJpbmd9IGZvcm0gaHRtbEVsZW1lbnQncyBpZFxyXG4gKlxyXG4gKiAtIG9uU3VibWl0IHtmdW5jdGlvbihldmVudCwgb2JqZWN0KX0gY2FsbGJhY2sgZm9yIHdoZW4gZm9ybSBzdWJtaXRzLlxyXG4gKiAgIEZvcm0gd2lsbCBzZW5kIHR3byBhcmd1bWVudHMsIHRoZSBmaXJzdCBpcyB0aGUgZXZlbnQsIHRoZSBzZWNvbmRcclxuICogICBpcyB0aGUgZXJyb3IgaW5mbyBvYmplY3QuIElmIG9uZSBvZiB0aGUgRm9ybUZpZWxkcyB3aXRoaW4gdGhlIEZvcm1cclxuICogICB3ZXJlIG5vdCB2YWxpZCwgdGhlIHNlY29uZCBhcmd1bWVudCB3aWxsIGJlIGFuIG9iamVjdCBjb250YWluaW5nXHJcbiAqICAgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVycm9yLiBJZiBldmVyeXRoaW5nIHdhcyB2YWxpZCwgaXQgd2lsbCBiZSBudWxsLlxyXG4gKlxyXG4gKiAtIHN1Ym1pdEJ0blRleHQge3N0cmluZ30gdGhlIHRleHRDb250ZW50IGZvciB0aGUgc3VibWl0IGJ1dHRvblxyXG4gKlxyXG4gKiAtIGFjdGlvbj8ge3N0cmluZ30gdmFsdWUgZm9yIGZvcm0ncyBhY3Rpb24gYXR0cmlidXRlXHJcbiAqXHJcbiAqIC0gbWV0aG9kPyB7c3RyaW5nfSB2YWx1ZSBmb3IgZm9ybSdzIG1ldGhvZCBhdHRyaWJ1dGVcclxuICpcclxuICogLXByb3BzLmNoaWxkcmVuIHNob3VsZCBiZSBhIGxpc3Qgb2YgRm9ybUZpZWxkIGVsZW1lbnRzLiBFYWNoIEZvcm1GaWVsZFxyXG4gKiAgc2hvdWxkIGJlIGluaXRpYWxpemVkIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSBwcm9wLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybShwcm9wcykge1xyXG4gIC8vYXJyYXkgb2YgdmFsdWVzIGZvciBhbGwgY2hpbGRyZW4gKEZvcm1GaWVsZHMpXHJcbiAgLy9pbml0aWFsaXplcyBzdGF0ZSB0byBiZSBlcXVhbCB0byB0aGUgaW5pdGlhbCB2YWx1ZSBnaXZlbiBieVxyXG4gIC8vcGFyZW50IGNvbXBvbmVudFxyXG4gIGNvbnN0IFtmaWVsZFZhbHVlcywgc2V0RmllbGRWYWx1ZXNdID0gdXNlU3RhdGUoXHJcbiAgICBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCkgPT4gY2hpbGQucHJvcHMudmFsdWUpXHJcbiAgKTtcclxuXHJcbiAgLy9saXN0IG9mIHZhbGlkYXRvcnMgb2YgYWxsIG9mIHRoaXMgRm9ybSdzIEZvcm1GaWVsZHNcclxuICBjb25zdCBmaWVsZFZhbGlkYXRvcnMgPSB1c2VSZWYoW10pO1xyXG5cclxuICAvL3Rha2VzIGNvbnRyb2wgb2YgY2hpbGRyZW5zIHN0YXRlIGFuZCBwYXNzZXMgb3duIHByb3BzXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+XHJcbiAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgdmFsdWU6IGZpZWxkVmFsdWVzW2luZGV4XSxcclxuICAgICAgYWRkVmFsaWRhdG9yOiAodmFsaWRhdG9yKSA9PiBmaWVsZFZhbGlkYXRvcnMuY3VycmVudC5wdXNoKHZhbGlkYXRvciksXHJcbiAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgIHBhcmVudElkOiBwcm9wcy5pZCwgLy9hZGQgcGFyZW50IGlkIHRvIHNvIEZvcm1GaWVsZCBjYW4gbWFrZSB1bmlxdWUgaWRzIGZvciBpdHMgZWxlbWVudHNcclxuICAgICAgaW5kZXgsXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgdmFsdWUgY2hhbmdlcyBmb3IgYWxsIG9mIGEgRm9ybSdzIEZvcm1GaWVsZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IEZvcm1GaWVsZCdzIGluZGV4IHByb3BcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSwgaW5kZXgpIHtcclxuICAgIC8vdGhlIGluZGV4IHByb3Agb2YgZWFjaCBGb3JtRmllbGQgYW5kIGZpZWxkVmFsdWVzIGFyZSBwYXJhbGxlbFxyXG4gICAgLy9zbyBpZiBhIEZvcm1GaWVsZCBwYXNzZXMgaXQncyBwcm9wcy5pbmRleCwgd2UgY2FuIHNldFxyXG4gICAgLy90aGUgY29ycmVjdCBzdGF0ZVxyXG4gICAgY29uc3QgbmV3RmllbGRWYWx1ZXMgPSBmaWVsZFZhbHVlcy5tYXAoKHZhbHVlLCBpKSA9PlxyXG4gICAgICBpID09PSBpbmRleCA/IGUudGFyZ2V0LnZhbHVlIDogdmFsdWVcclxuICAgICk7XHJcblxyXG4gICAgc2V0RmllbGRWYWx1ZXMobmV3RmllbGRWYWx1ZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbHMgZXZlcnkgRm9ybUZpZWxkJ3MgdmFsaWRhdG9yIGZ1bmN0aW9uLiBJZiBhbnkgZmllbGRcclxuICAgKiBpcyBpbnZhbGlkLCB3aWxsIHNlbmQgdGhlIGVycm9yIGluZm8gb2JqZWN0IHRvIHBhcmVudCBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVBbGxGaWVsZHMoZSkge1xyXG4gICAgZm9yIChjb25zdCB2YWxpZGF0b3Igb2YgZmllbGRWYWxpZGF0b3JzLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgZXJyb3JJbmZvID0gdmFsaWRhdG9yKCk7XHJcbiAgICAgIGlmIChlcnJvckluZm8pIHJldHVybiBwcm9wcy5vblN1Ym1pdChlLCBlcnJvckluZm8pO1xyXG4gICAgfVxyXG4gICAgcHJvcHMub25TdWJtaXQoZSwgbnVsbCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICBvblN1Ym1pdD17dmFsaWRhdGVBbGxGaWVsZHN9XHJcbiAgICAgICAgbm9WYWxpZGF0ZT17dHJ1ZX1cclxuICAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cclxuICAgICAgICBtZXRob2Q9e3Byb3BzLm1ldGhvZH1cclxuICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICB7cHJvcHMuc3VibWl0QnRuVGV4dCB8fCBcIlN1Ym1pdFwifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBGb3JtRmllbGRzIGFyZSBtZWFudCB0byBiZSB1c2VkIHdpdGggdGhlIEZvcm0gY29tcG9uZW50LlxyXG4gKiBUaGV5IGFyZSBhIGNvbWJpbmF0aW9uIG9mIGEgbGFiZWwgYW5kIGEgY29ycmVzcG9uZGluZyBpbnB1dCBlbGVtZW50IG9mIHNvbWUga2luZC5cclxuICogVGhleSBtYWtlIHVwIHRoZSBmaWVsZHMgb2YgYSBGb3JtIGNvbXBvbmVudC4gRWFjaCBGb3JtRmllbGQgaGFzIGl0cyBvd25cclxuICogdmFsaWRhdG9yIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpdHMgaW5wdXQuIEZvcm1GaWVsZCB2YWxpZGF0b3JzXHJcbiAqIGFyZSBjYWxsZWQgYnkgaXRzIHBhcmVudCBGb3JtLiBGb3JtRmllbGRzIHNob3VsZCBiZSB0aGUgY2hpbGRyZW4gb2YgYSBGb3JtXHJcbiAqIGNvbXBvbmVudCBhbmQgc2hvdWxkIGJlIGluaXRpYWxpZWQgd2l0aCBhbiBpbml0aWFsIHZhbHVlIHByb3AuIEFmdGVyIGZpcnN0IHJlbmRlcixcclxuICogdGhlIEZvcm0gY29tcG9uZW50IHdpbGwgdGFrZSBjb250cm9sIG9mIHRoZSBGb3JtRmllbGQncyB2YWx1ZSBzdGF0ZS5cclxuICpcclxuICovXHJcblxyXG4vKipcclxuICogQ29tbW9uIGxheW91dCB0ZW1wbGF0ZSB0aGF0IEZvcm1GaWVsZHMgdXNlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBleHBlY3RlZCBwcm9wczpcclxuICogLSBGb3JtRmllbGQncyBsYWJlbCBzaG91bGQgYmUgZmlyc3QgY2hpbGRcclxuICogLSBGb3JtRmllbGQncyBjb250cm9sIHNob3VsZCBiZSBzZWNvbmQgY2hpbGRcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIEZvcm1GaWVsZFRlbXBsYXRlKHByb3BzKSB7XHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKTtcclxuICAvL3ByZXNlcnZlIGV4aXN0aW5nIGNzcyBjbGFzc2VzICsgYWRkIGJvb3RzdHJhcCBjbGFzc2VzXHJcbiAgY29uc3QgY29udHJvbCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlblswXSwge1xyXG4gICAgY2xhc3NOYW1lOiAoY2hpbGRyZW5bMF0uY2xhc3NOYW1lIHx8IFwiXCIpICsgXCIgZm9ybS1jb250cm9sIHctNzVcIixcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtLTNcIj57Y29udHJvbH08L2Rpdj47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmFsIHRleHQgaW5wdXQgZmllbGQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsIHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsXHJcbiAqIC0gbmFtZSB7c3RyaW5nfSBuYW1lIGZvciBpbnB1dCBlbGVtZW50XHJcbiAqIC0gcmVxdWlyZWQ/IHtib29sZWFufSB3aGV0aGVyIHRoaXMgRm9ybUZpZWxkIGlzIHJlcXVpcmVkIG9yIG5vdFxyXG4gKiAtIG1pbj8ge251bWJlcn0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKiAtIG1heD8ge251bWJlcn0gbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRleHRGaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke3Byb3BzLmxhYmVsfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcbiAgY29uc3QgbWluTGVuZ3RoID0gcHJvcHMubWluO1xyXG4gIGNvbnN0IG1heExlbmd0aCA9IHByb3BzLm1heDtcclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBpbnB1dEZpZWxkLmN1cnJlbnQ7XHJcbiAgICBjb25zdCB2YWxpZGl0eVN0YXRlID0gZWxlbWVudC52YWxpZGl0eTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS52YWx1ZU1pc3NpbmcpXHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGAke3Byb3BzLmxhYmVsfSBpcyByZXF1aXJlZC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29TaG9ydClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtwcm9wcy5sYWJlbH0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7cHJvcHMubGFiZWx9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1GaWVsZFRlbXBsYXRlPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD17aW5wdXRJZH1cclxuICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZSB8fCBcIlwifVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSwgcHJvcHMuaW5kZXgpfVxyXG4gICAgICAgIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMubGFiZWx9XHJcbiAgICAgICAgcmVmPXtpbnB1dEZpZWxkfVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSW5wdXQgZmllbGQgZm9yIGVtYWlscy5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWw/IHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChkZWZhdWx0IGxhYmVsIGlzIEVtYWlsKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIHJlcXVpcmVkPyB7Ym9vbGVhbn0gd2hldGhlciB0aGlzIEZvcm1GaWVsZCBpcyByZXF1aXJlZCBvciBub3RcclxuICogLSBtaW4/IHtudW1iZXJ9IG1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICogLSBtYXg/IHtudW1iZXJ9IG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFbWFpbEZpZWxkKHByb3BzKSB7XHJcbiAgY29uc3QgbGFiZWxOYW1lID0gcHJvcHMubGFiZWwgfHwgXCJFbWFpbFwiO1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke2xhYmVsTmFtZX0tJHtwcm9wcy5wYXJlbnRJZH1gO1xyXG4gIGNvbnN0IG1pbkxlbmd0aCA9IHByb3BzLm1pbjtcclxuICBjb25zdCBtYXhMZW5ndGggPSBwcm9wcy5tYXggfHwgNTA7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IGlmIGlucHV0IGlzIHZhbGlkLCByZXR1cm5zIG51bGwuIE90aGVyd2lzZSwgcmV0dXJucyBhbiBvYmplY3RcclxuICAgKiBjb250YWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXJyb3JcclxuICAgKiB7bWVzc2FnZTogZXJyb3IgbWVzc2FnZSwgZWxlbWVudDogcmVmZXJlbmNlIHRvIEh0bWxFbGVtZW50IHRoYXQgY29udGFpbnMgZXJyb3J9XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gaW5wdXRGaWVsZC5jdXJyZW50O1xyXG4gICAgY29uc3QgdmFsaWRpdHlTdGF0ZSA9IGVsZW1lbnQudmFsaWRpdHk7XHJcblxyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudmFsdWVNaXNzaW5nKVxyXG4gICAgICByZXR1cm4geyBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnR5cGVNaXNtYXRjaClcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGFuIGVtYWlsLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAke21heExlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtRmllbGRUZW1wbGF0ZT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9e2lucHV0SWR9XHJcbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uQ2hhbmdlKGUsIHByb3BzLmluZGV4KX1cclxuICAgICAgICByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgbWluTGVuZ3RoPXttaW5MZW5ndGh9XHJcbiAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e2xhYmVsTmFtZX1cclxuICAgICAgICByZWY9e2lucHV0RmllbGR9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm1GaWVsZFRlbXBsYXRlPlxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnB1dCBmaWVsZCBmb3IgcGFzc3dvcmRzLiBJbnB1dCBpcyBhbHdheXMgcmVxdWlyZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsPyB7c3RyaW5nfSBGb3JtRmllbGQncyBsYWJlbCAoZGVmYXVsdCBsYWJlbCBpcyBQYXNzd29yZClcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSBtaW4/IHtudW1iZXJ9IG1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXNzd29yZEZpZWxkKHByb3BzKSB7XHJcbiAgY29uc3QgbGFiZWxOYW1lID0gcHJvcHMubGFiZWwgfHwgXCJQYXNzd29yZFwiO1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke2xhYmVsTmFtZX0tJHtwcm9wcy5wYXJlbnRJZH1gO1xyXG4gIGNvbnN0IG1pbkxlbmd0aCA9IHByb3BzLm1pbjtcclxuICBjb25zdCBtYXhMZW5ndGggPSBwcm9wcy5tYXggfHwgNTA7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGlucHV0RmllbGQuY3VycmVudDtcclxuICAgIGNvbnN0IHZhbGlkaXR5U3RhdGUgPSBlbGVtZW50LnZhbGlkaXR5O1xyXG5cclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnZhbHVlTWlzc2luZylcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBpcyByZXF1aXJlZC5gLCBlbGVtZW50IH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29TaG9ydClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IG11c3QgYmUgYXQgbGVhc3QgJHttaW5MZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50b29Mb25nKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uQ2hhbmdlKGUsIHByb3BzLmluZGV4KX1cclxuICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17bGFiZWxOYW1lfVxyXG4gICAgICAgIHJlZj17aW5wdXRGaWVsZH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhpZGRlbiBpbnB1dCBmaWVsZFxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogLSBsYWJlbCB7c3RyaW5nfSBGb3JtRmllbGQncyBsYWJlbCAobm90IHZpc2libGUsIGp1c3QgZm9yIG5hbWluZyBwdXJwb3NlcylcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSB2YWx1ZSB7c3RyaW5nfSBpbnB1dCdzIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSGlkZGVuRmllbGQocHJvcHMpIHtcclxuICBjb25zdCBpbnB1dElkID0gYGZvcm0tZmllbGQtJHtwcm9wcy5sYWJlbH0tJHtwcm9wcy5wYXJlbnRJZH1gO1xyXG5cclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIC8vYWx3YXlzIHZhbGlkXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGU+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgIGhpZGRlbj17dHJ1ZX1cclxuICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICByZWY9e2lucHV0RmllbGR9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm1GaWVsZFRlbXBsYXRlPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEEgY29tcG9uZW50IHJlcHJlc2VudGluZyBhIHNpbmdsZSBnYW1lXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyA6XHJcbiAqXHJcbiAqICAtIGRhdGEtaW5kZXg/IHtzdHJpbmd9OiBpbmRleCBvZiBnYW1lIGluIHRoZSBmYXZlIGdhbWUgbGlzdFxyXG4gKlxyXG4gKiAgLSBvbkFkZD8ge2Z1bmN0aW9ufTogY2FsbGJhY2sgZm9yIGdhbWVzIGluIEdhbWVTZWFyY2hCb3ggdG8gYmUgYWRkZWQgdG8gZmF2b3JpdGUgZ2FtZXMgbGlzdC5cclxuICogIFVzZWQgaW4gbW9iaWxlIHZpZXcuIE1hbmRhdG9yeSBmb3IgR2FtZXMgaW4gR2FtZVNlYXJjaEJveC5cclxuICpcclxuICogIC0gY2hhbmdlUG9zaXRpb24/IHtmdW5jdGlvbihjdXJyUG9zOiBpbnQsIG5leHRQb3M6IGludCl9OiBjYWxsYmFjayBmb3IgZ2FtZXMgaW4gZmF2ZSBnYW1lIGxpc3QgdG8gY2hhbmdlIHBvc2l0aW9uLlxyXG4gKiBVc2VkIGluIG1vYmlsZSB2aWV3LiBNYW5kYXRvcnkgZm9yIEdhbWVzIGluIGZhdmUgZ2FtZSBsaXN0LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUocHJvcHMpIHtcclxuICAvL0kgY2FzdCBpdCB0byBudW1iZXIgc28gb2Z0ZW4gbWF5YmUgSSBzaG91bGQganVzdCBzYXZlIGl0IGhtXHJcbiAgY29uc3QgZGF0YUluZGV4ID0gcHJvcHNbXCJkYXRhLWluZGV4XCJdICYmIE51bWJlcihwcm9wc1tcImRhdGEtaW5kZXhcIl0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImdhbWUtY29udGFpbmVyIGNvbnRhaW5lciByb3VuZGVkIG15LTMgXCJcclxuICAgICAgZGF0YS1pbmRleD17cHJvcHNbXCJkYXRhLWluZGV4XCJdfVxyXG4gICAgICBvbkRyYWdTdGFydD17cHJvcHMub25EcmFnU3RhcnR9XHJcbiAgICAgIG9uRHJhZ092ZXI9e3Byb3BzLm9uRHJhZ092ZXJ9XHJcbiAgICAgIG9uRHJvcD17cHJvcHMub25Ecm9wfVxyXG4gICAgICBkcmFnZ2FibGU9e3Byb3BzLmRyYWdnYWJsZX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e2Bjb2wtMSAke3Byb3BzW1wiZGF0YS1pbmRleFwiXSAmJiBgcG9zLSR7ZGF0YUluZGV4ICsgMX1gfWB9PlxyXG4gICAgICAgICAge3Byb3BzW1wiZGF0YS1pbmRleFwiXSAmJiBkYXRhSW5kZXggKyAxICsgXCIuXCJ9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGdhbWUtaW1nIGNvbC1tZC0yICR7XHJcbiAgICAgICAgICAgIHByb3BzLmlzRWRpdGluZyA/IFwiY29sLTlcIiA6IFwiY29sLTExXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtwcm9wcy5nYW1lQ292ZXJVcmx9XHJcbiAgICAgICAgICAgIGFsdD17YENvdmVyIGFydCBmb3IgJHtwcm9wcy5nYW1lTmFtZX1gfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezkwfVxyXG4gICAgICAgICAgICB3aWR0aD17OTB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgZC1pbmxpbmUtYmxvY2sgbS1hdXRvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgY2hhbmdlLXBvcy1idXR0b25zIGQtbWQtbm9uZSAke1xyXG4gICAgICAgICAgICBwcm9wcy5pc0VkaXRpbmcgPyBcImNvbC0yXCIgOiBcImQtbm9uZVwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cHJvcHMuaXNFZGl0aW5nICYmIGRhdGFJbmRleCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhbmdlLXBvcy11cFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlUG9zaXRpb24oZGF0YUluZGV4LCBkYXRhSW5kZXggLSAxKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpLWNhcmV0LXVwLWZpbGxcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7cHJvcHMuaXNFZGl0aW5nICYmICFwcm9wcy5pc0xhc3QgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhbmdlLXBvcy1kb3duXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGFuZ2VQb3NpdGlvbihkYXRhSW5kZXgsIGRhdGFJbmRleCArIDEpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmktY2FyZXQtZG93bi1maWxsXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGdhbWUtbmFtZSBkLWlubGluZS1ibG9jayAke1xyXG4gICAgICAgICAgICBwcm9wcy5pc0VkaXRpbmcgPyBcImNvbC1tZC02XCIgOiBcImNvbC1tZC05XCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwPntwcm9wcy5nYW1lTmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtwcm9wcy5pc0VkaXRpbmcgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkRlbGV0ZShwcm9wcy5nYW1lSWQpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMyBidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlbGV0ZSA8aSBjbGFzc05hbWU9XCJiaS10cmFzaC1maWxsIG14LTFcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy9hZGQgYnV0dG9uIHNob3VsZCBvbmx5IGFwcGVhciBvbiBnYW1lcyBpbiBHYW1lU2VhcmNoQm94XHJcbiAgICAgICAgICAvL2RhdGEtaW5kZXggcHJvcCBpcyBvbmx5IGdpdmVuIHRvIGdhbWVzIGluIHRoZSBmYXZvcml0ZSBnYW1lIGxpc3RcclxuICAgICAgICAgIC8vdGhlcmVmb3JlIGlmIG5vIGRhdGEtaW5kZXgsIGl0cyBhIEdhbWVTZWFyY2hCb3ggZ2FtZVxyXG4gICAgICAgICAgIXByb3BzW1wiZGF0YS1pbmRleFwiXSAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMub25BZGR9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBkLW1kLW5vbmVcIj5cclxuICAgICAgICAgICAgICBBZGQgPGkgY2xhc3NOYW1lPVwiYmktcGx1cy1jaXJjbGUtZmlsbCBteC0xXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lU2VhcmNoQm94KHByb3BzKSB7XHJcbiAgLy9zZWFyY2ggdGVybSBpbiBzZWFyY2ggYmFyXHJcbiAgY29uc3QgW2Rpc3BsYXllZFNlYXJjaFRlcm0sIHNldERpc3BsYXllZFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy90aGUgYWN0dWFsIHVuZGVybHlpbmcgc2VhcmNoIHRlcm0gcmVnYXJkbGVzcyBvZiB3aGF0cyB0eXBlZFxyXG4gIC8vY2xpY2tpbmcgbmV4dC9wcmV2IHdpbGwgY2hhbmdlIHBhZ2VzIGZvciB0aGlzIHZhbHVlXHJcbiAgLy9jbGlja2luZyBzZWFyY2ggYnV0dG9uIHdpbGwgY2hhbmdlIHRoaXMgdmFsdWVcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShkaXNwbGF5ZWRTZWFyY2hUZXJtKTtcclxuICAvL3BhZ2Ugb2Ygc2VhcmNoIHJlc3VsdHNcclxuICBjb25zdCBbc2VhcmNoUGFnZSwgc2V0U2VhcmNoUGFnZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIC8vbGlzdCBvZiBvYmplY3RzIHRoYXQgd2lsbCBiZSByZXRyaWV2ZWQgZnJvbSBzZWFyY2ggYXBpXHJcbiAgY29uc3QgW3NlYXJjaFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vd2hldGhlciBvciBub3Qgc2VhcmNoIHJlc3VsdHMgYXJlIGN1cnJlbnRseSBsb2FkaW5nXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vZXJyb3IgbWVzc2FnZVxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvL3doZXRoZXIgb3Igbm90IHRoZXJlIGlzIGEgbmV4dCBwYWdlIG9mIHNlYXJjaCByZXN1bHRzXHJcbiAgY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIC8vdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciBpdHMgZmlyc3QgcmVuZGVyIG9yIG5vdFxyXG4gIGNvbnN0IGZpcnN0UmVuZGVyID0gdXNlUmVmKHRydWUpO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydERyYWdHYW1lKGUsIGdhbWUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiLCBKU09OLnN0cmluZ2lmeShnYW1lKSk7XHJcbiAgfVxyXG5cclxuICAvL2RyYWdvdmVyIGhhbmRsZXIgaXMgbmVlZGVkIHRvIG1ha2UgZWxlbWVudFxyXG4gIC8vZHJhZ2dhYmxlXHJcbiAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRpc3BsYXllZFNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzLm1hcCgoZ2FtZSkgPT4gKFxyXG4gICAgPEdhbWVcclxuICAgICAga2V5PXtnYW1lLmlkfVxyXG4gICAgICBnYW1lSWQ9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVOYW1lPXtnYW1lLm5hbWV9XHJcbiAgICAgIGdhbWVDb3ZlclVybD17Z2FtZS5jb3ZlcnVybH1cclxuICAgICAgZHJhZ2dhYmxlPXt0cnVlfVxyXG4gICAgICBvbkRyYWdTdGFydD17KGUpID0+IHN0YXJ0RHJhZ0dhbWUoZSwgZ2FtZSl9XHJcbiAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVyfVxyXG4gICAgICBvbkFkZD17KCkgPT4gcHJvcHMub25BZGQoZ2FtZSl9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGRpc3BsYXllZCBzZWFyY2ggdGVybVxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgc2V0RGlzcGxheWVkU2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHNlYXJjaFRlcm0gdG8gZGlzcGxheWVkU2VhcmNoVGVybVxyXG4gICAqIGFuZCBmZXRjaGVzIHNlYXJjaCByZXN1bHRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZGlzcGxheWVkU2VhcmNoVGVybSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoVGVybShkaXNwbGF5ZWRTZWFyY2hUZXJtKTtcclxuICAgIHNldFNlYXJjaFBhZ2UoMCk7XHJcbiAgICBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyhkaXNwbGF5ZWRTZWFyY2hUZXJtLCAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgcGFnZSBudW1iZXIgZm9yIHNlYXJjaFRlcm1cclxuICAgKiAobm90IGRpc3BsYXllZFNlYXJjaFRlcm0pIGFuZCBmZXRjaGVzIHNlYXJjaFxyXG4gICAqIHJlc3VsdHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZU51bWJlciBuZXcgcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBmdW5jdGlvbiBjaGFuZ2VQYWdlKHBhZ2VOdW1iZXIpIHtcclxuICAgIGlmIChwYWdlTnVtYmVyIDwgMCkgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoUGFnZShwYWdlTnVtYmVyKTtcclxuICAgIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKHNlYXJjaFRlcm0sIHBhZ2VOdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2hlcyBhIHNlYXJjaCBmcm9tIHRoZSBBUEkgYW5kIHBvcHVsYXRlcyBwYWdlXHJcbiAgICogd2l0aCBzZWFyY2ggcmVzdWx0cy4gVGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSBjYWxsZWRcclxuICAgKiB3aXRoIGEgc2VhcmNoIHRlcm0gYW5kIHBhZ2UgbWFudWFsbHkgaW5zdGVhZCBvZiByZWx5aW5nIG9uXHJcbiAgICogY2hlY2tpbmcgc3RhdGUgYXMgcmVhZGluZyBzdGF0ZSBpbW1lZGlhdGVseSBhZnRlciBzZXR0aW5nIGl0XHJcbiAgICogd2lsbCByZXR1cm4gc3RhbGUgdmFsdWVzLiBTbywgd2UgZ2l2ZSBpdCB0aGUgZnJlc2ggdmFsdWVzIG1hbnVhbGx5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlcm0gc2VhcmNoIHRlcm1cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSBzZWFyY2ggcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyh0ZXJtLCBwYWdlKSB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYC9hcGkvc2VhcmNoLyR7dGVybX0vJHtwYWdlfWA7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnkpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhkYXRhLnJlc3VsdHMpO1xyXG4gICAgICAgIHNldEhhc05leHQoZGF0YS5oYXNOZXh0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UocmVzdWx0cy5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKGUubWVzc2FnZSArIFwiXFxuXCIgKyBtc2cpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtc2VhcmNoLWJveCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0cyBnYW1lLWxpc3Qgb3JkZXItMiBvcmRlci1tZC0xXCI+XHJcbiAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cD57ZXJyb3JNZXNzYWdlfTwvcD59XHJcbiAgICAgICAge2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XHJcbiAgICAgICAge2Rpc3BsYXllZFNlYXJjaFJlc3VsdHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1iYXIgb3JkZXItMSBvcmRlci1tZC0yXCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhbWUtc2VhcmNoLWJhclwiIGNsYXNzTmFtZT1cImQtbm9uZVwiPlxyXG4gICAgICAgICAgICBOYW1lIG9mIEdhbWVcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJnYW1lLXNlYXJjaC1iYXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZGlzcGxheWVkU2VhcmNoVGVybX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIG9mIEdhbWUuLi5cIlxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIHtzZWFyY2hQYWdlID49IDAgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtzZWFyY2hQYWdlID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHNlYXJjaFBhZ2UgLSAxKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQcmV2XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFnZS1udW1iZXJcIiBjbGFzc05hbWU9XCJkLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIFBhZ2U6XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPVwicGFnZS1udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFnZSArIDF9XHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAge2hhc05leHQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShzZWFyY2hQYWdlICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCIuL0Zvcm1GaWVsZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QocHJvcHMpIHtcclxuICByZXR1cm4gPGJ1dHRvbiBpZD17cHJvcHMuaWR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PjwvYnV0dG9uPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQsIEhpZGRlbkZpZWxkIH0gZnJvbSBcIi4vRm9ybUZpZWxkc1wiO1xyXG5pbXBvcnQgVGVzdCBmcm9tIFwiLi9UZXN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIGV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIHVzZXJJZCB7bnVtYmVyfSB0aGUgbG9nZ2VkIGluIHVzZXIncyB1c2VyIGlkXHJcbiAqIC0gcHJvZmlsZVBpYyB7c3RyaW5nfSBzcmMgdXJsIGZvciB1c2VyJ3MgcHJvZmlsZSBwaWN0dXJlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb29sYmFyKHByb3BzKSB7XHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUsIGVycm9ySW5mbykge1xyXG4gICAgaWYgKGVycm9ySW5mbykgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgaWQ9XCJUb29sYmFyLUZvcm1cIlxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgc3VibWl0QnRuVGV4dD1cIkdvIVwiXHJcbiAgICAgICAgbWV0aG9kPVwiZ2V0XCJcclxuICAgICAgICBhY3Rpb249XCIvc2VhcmNoXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJTZWFyY2hcIiBuYW1lPVwicXVlcnlcIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgPEhpZGRlbkZpZWxkIGxhYmVsPVwiUGFnZVwiIG5hbWU9XCJwYWdlXCIgdmFsdWU9XCIwXCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8YSBocmVmPXtgL3VzZXIvJHtwcm9wcy51c2VySWR9YH0+XHJcbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLnByb2ZpbGVQaWN9IGFsdD17YFlvdXIgcHJvZmlsZSBwaWN0dXJlYH0gLz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vY29tcG9uZW50cy9HYW1lXCI7XHJcbmltcG9ydCBHYW1lU2VhcmNoQm94IGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVTZWFyY2hCb3hcIjtcclxuXHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1Rvb2xiYXJcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBUaGUgcGFnZSB0aGF0IGlzIGRpc3BsYXllZCB3aGVuXHJcbiAqIHZpZXdpbmcgYSB1c2VyJ3MgcHJvZmlsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUGFnZShwcm9wcykge1xyXG4gIC8qIHNldHRpbmcgc3RhdGUgKi9cclxuICAvL3RoZSB1c2VyJ3MgYWN0dWFsIGZhdm9yaXRlIGdhbWVzXHJcbiAgY29uc3QgW2Zhdm9yaXRlR2FtZXMsIHNldEZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUocHJvcHMuZ2FtZXMpO1xyXG4gIC8vdGhlIHVzZXIncyBmYXZvcml0ZSBnYW1lIGFzIGN1cnJlbnRseSBkaXNwbGF5ZWQuIHRoZXNlIG1heSBkaWZmZXJcclxuICAvL2Zyb20gYWN0dWFsIGZhdm9yaXRlIGdhbWVzIGR1cmluZyBlZGl0aW5nXHJcbiAgY29uc3QgW2Rpc3BsYXllZEZhdm9yaXRlR2FtZXMsIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUoXHJcbiAgICBmYXZvcml0ZUdhbWVzXHJcbiAgKTtcclxuICAvL3doZXRoZXIgb3Igbm90IHVzZXIgaXMgZWRpdGluZyBmYXZvcml0ZSBnYW1lc1xyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gYSBHYW1lIGlzIGRyYWdnZWQuIEFkZHNcclxuICAgKiB0aGUgR2FtZSdzIGRhdGEtaW5kZXggYXR0cmlidXRlIHRvXHJcbiAgICogRHJhZ0V2ZW50LmRhdGFUcmFuc2ZlciB0byBiZSB1c2VkIGJ5XHJcbiAgICogZHJvcEdhbWUoKSBsYXRlciBvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBzdGFydERyYWdHYW1lKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCk7XHJcbiAgfVxyXG5cclxuICAvL2RyYWdvdmVyIGhhbmRsZXIgaXMgbmVlZGVkIHRvIG1ha2UgZWxlbWVudFxyXG4gIC8vZHJhZ2dhYmxlXHJcbiAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHJhZ2dlZCBnYW1lIHdpbGwgYmUgc3dhcHBlZCB3aXRoIHRoZSBnYW1lXHJcbiAgICogaXQncyBkcm9wcGVkIG9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBkcm9wR2FtZU9uR2FtZShlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IG5ld0ZhdmVHYW1lcyA9IFsuLi5kaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXTtcclxuICAgIGNvbnN0IG5ld0dhbWUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIC8vaW5kZXggb2YgZ2FtZSB0aGF0IHdhcyBkcm9wcGVkIG9uXHJcbiAgICBjb25zdCBkcm9wVGFyZ2V0ID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICAgIC8vZGF0YVRyYW5zZmVyIHdpbGwgY29udGFpbiBhIGpzIG9iamVjdCBpZiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkXHJcbiAgICAvL2lzIGZyb20gc2VhcmNoIHJlc3VsdHMsIG1lYW5pbmcgYSBuZXcgZ2FtZSBpcyBiZWluZyBhZGRlZFxyXG4gICAgLy90byBmYXZvcml0ZSBnYW1lc1xyXG4gICAgaWYgKG5ld0dhbWUpIHtcclxuICAgICAgY29uc3QgbmV3R2FtZUFzT2JqZWN0ID0gSlNPTi5wYXJzZShuZXdHYW1lKTtcclxuICAgICAgaWYgKGdhbWVBbHJlYWR5RXhpc3RzKG5ld0dhbWVBc09iamVjdCkpIHJldHVybjtcclxuICAgICAgLy93ZSByZXBsYWNlIGVsZW1lbnRzIGFzIHdlIGdvLCBldmVudHVhbGx5IHdlIGFuIGVsZW1lbnQgdG8gbmV3RmF2ZUdhbWVzW25ld0ZhdmVHYW1lcy5sZW5ndGhdXHJcbiAgICAgIC8vdGhpcyBpbmNyZWFzZXMgdGhlIGxlbmd0aCBhbmQgdGhlIGxvb3AgZ29lcyBvbiBmb3JldmVyXHJcbiAgICAgIC8vc28gd2Uga2VlcCB0aGUgbGVuZ3RoIG9mIHRoZSBsaXN0IGJlZm9yZSB3ZSBzdGFydFxyXG4gICAgICBjb25zdCBsZW5ndGggPSBuZXdGYXZlR2FtZXMubGVuZ3RoO1xyXG4gICAgICAvL2dhbWUgdG8gYmUgYWRkZWQgaW5cclxuICAgICAgbGV0IGhvbGRlciA9IG5ld0dhbWVBc09iamVjdDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyBpZiAobmV3RmF2ZUdhbWVzW2ldICYmIG5ld0ZhdmVHYW1lc1tpXS5pZCA9PT0gbmV3R2FtZUFzT2JqZWN0LmlkKVxyXG4gICAgICAgIC8vICAgcmV0dXJuO1xyXG4gICAgICAgIC8vc3RhcnQgc3dhcHBpbmcgZnJvbSBkcm9wVGFyZ2V0IG9ud2FyZHNcclxuICAgICAgICBpZiAoaSA+PSBkcm9wVGFyZ2V0KSB7XHJcbiAgICAgICAgICAvL3B1dCBob2xkZXIgaW50byB0aGUgbGlzdCwgdGFrZSB3aGF0IHdhcyB0aGVyZSBhbmQgcHV0IGludG8gaG9sZGVyXHJcbiAgICAgICAgICBjb25zdCB0ZW1wID0gbmV3RmF2ZUdhbWVzW2ldO1xyXG4gICAgICAgICAgbmV3RmF2ZUdhbWVzW2ldID0gaG9sZGVyO1xyXG4gICAgICAgICAgaG9sZGVyID0gdGVtcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vaWYgdGhlcmUgaXMgbm8ganMgb2JqZWN0LCB0aGVuIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWQgaXMgYW4gYWxyZWFkeVxyXG4gICAgLy9leGlzdGluZyBnYW1lIHNvIHdlIGp1c3Qgc3dhcCBwbGFjZXNcclxuICAgIGVsc2Uge1xyXG4gICAgICAvL3RoZSBnYW1lIHRoYXQgd2FzIGJlaW5nIGRyYWdnZWRcclxuICAgICAgY29uc3QgZHJhZ2dlZEdhbWUgPSBOdW1iZXIoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIikpO1xyXG4gICAgICBjb25zdCB0ZW1wID0gbmV3RmF2ZUdhbWVzW2Ryb3BUYXJnZXRdO1xyXG4gICAgICBuZXdGYXZlR2FtZXNbZHJvcFRhcmdldF0gPSBuZXdGYXZlR2FtZXNbZHJhZ2dlZEdhbWVdO1xyXG4gICAgICBuZXdGYXZlR2FtZXNbZHJhZ2dlZEdhbWVdID0gdGVtcDtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKG5ld0ZhdmVHYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHJhZ2dlZCBnYW1lIHdpbGwgYmUgYWRkZWQgdG8gdGhlXHJcbiAgICogZW5kIG9mIHRoZSBsaXN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRyb3BHYW1lT25Db250YWluZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBjb25zdCBuZXdGYXZlR2FtZXMgPSBbLi4uZGlzcGxheWVkRmF2b3JpdGVHYW1lc107XHJcbiAgICBjb25zdCBuZXdHYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAvL2RhdGFUcmFuc2ZlciB3aWxsIGNvbnRhaW4gYSBqcyBvYmplY3QgaWYgdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZFxyXG4gICAgLy9pcyBmcm9tIHNlYXJjaCByZXN1bHRzLCBtZWFuaW5nIGEgbmV3IGdhbWUgaXMgYmVpbmcgYWRkZWRcclxuICAgIC8vdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAgIGlmIChuZXdHYW1lKSB7XHJcbiAgICAgIGNvbnN0IG5ld0dhbWVBc09iamVjdCA9IEpTT04ucGFyc2UobmV3R2FtZSk7XHJcbiAgICAgIGlmIChnYW1lQWxyZWFkeUV4aXN0cyhuZXdHYW1lQXNPYmplY3QpKSByZXR1cm47XHJcblxyXG4gICAgICBuZXdGYXZlR2FtZXMucHVzaChuZXdHYW1lQXNPYmplY3QpO1xyXG4gICAgfVxyXG4gICAgLy9pZiB0aGVyZSBpcyBubyBqcyBvYmplY3QsIHRoZW4gdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZCBpcyBhbiBhbHJlYWR5XHJcbiAgICAvL2V4aXN0aW5nIGdhbWUuIGRyYWdnZWQgZ2FtZSBpcyBhZGRlZCB0byB0aGUgZW5kIGFuZCByZXN0IGFyZSBzaGlmdGVkIHVwXHJcbiAgICBlbHNlIHtcclxuICAgICAgbGV0IG5ld1BvcyA9IE51bWJlcihlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKSk7XHJcbiAgICAgIGxldCBkcmFnZ2VkR2FtZSA9IG5ld0ZhdmVHYW1lc1tuZXdQb3NdO1xyXG4gICAgICAvL3NoaWZ0IGV2ZXJ5dGhpbmcgdG93YXJkcyB0aGUgZnJvbnRcclxuICAgICAgZm9yICg7IG5ld1BvcyA8IG5ld0ZhdmVHYW1lcy5sZW5ndGggLSAxOyBuZXdQb3MrKylcclxuICAgICAgICBuZXdGYXZlR2FtZXNbbmV3UG9zXSA9IG5ld0ZhdmVHYW1lc1tuZXdQb3MgKyAxXTtcclxuXHJcbiAgICAgIC8vYWRkIGRyYWdnZWRHYW1lIGJhY2sgdG8gdGhlIGVuZFxyXG4gICAgICBuZXdGYXZlR2FtZXNbbmV3UG9zXSA9IGRyYWdnZWRHYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMobmV3RmF2ZUdhbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZXMgYSBnYW1lIGZyb20gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBnYW1lSWQgdGhlIGlkIG9mIGdhbWUgdG8gYmUgZGVsZXRlZFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRlbGV0ZUdhbWUoZ2FtZUlkKSB7XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKFxyXG4gICAgICBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLmZpbHRlcigoZ2FtZSkgPT4gZ2FtZS5pZCAhPT0gZ2FtZUlkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIGVkaXRpbmcgaXMgY2FuY2VsbGVkLiBTZXRzIGRpc3BsYXllZCBmYXZvcml0ZSBnYW1lc1xyXG4gICAqIHRvIGFjdHVhbCBmYXZvcml0ZSBnYW1lcy5cclxuICAgKi9cclxuICBmdW5jdGlvbiByb2xsYmFja0NoYW5nZXMoKSB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKGZhdm9yaXRlR2FtZXMpO1xyXG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNhdmVDaGFuZ2VzKCkge1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xyXG4gICAgY29uc3QgZmF2ZUdhbWVJZHMgPSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLm1hcCgoZ2FtZSkgPT4gZ2FtZS5pZCk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9mYXZvcml0ZXMvJHtwcm9wcy5pZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZmF2ZUdhbWVJZHMpLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRGYXZvcml0ZUdhbWVzKGRpc3BsYXllZEZhdm9yaXRlR2FtZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBnYW1lIHRvIHRoZSBlbmQgb2YgZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBnYW1lIGdhbWUgb2JqZWN0XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gb25BZGQoZ2FtZSkge1xyXG4gICAgaWYgKGdhbWVBbHJlYWR5RXhpc3RzKGdhbWUpKSByZXR1cm47XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKFsuLi5kaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLCBnYW1lXSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgYnkgR2FtZXMgaW4gbW9iaWxlIHZpZXcgdG8gY2hhbmdlIHBvc2l0aW9ucyBpbiB0aGUgZmF2ZSBnYW1lIGxpc3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY3VyckluZGV4IHRoZSBpbmRleCBvZiB0aGUgZ2FtZSB0aGF0IGlzIGNoYW5naW5nIHBvc2l0aW9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5leHRJbmRleCB0aGUgaW5kZXggdGhlIGdhbWUgaXMgdHJ5aW5nIHRvIG1vdmUgdG9cclxuICAgKi9cclxuICBmdW5jdGlvbiBjaGFuZ2VQb3NpdGlvbihjdXJySW5kZXgsIG5leHRJbmRleCkge1xyXG4gICAgY29uc3QgbmV3RmF2ZUdhbWVzID0gWy4uLmRpc3BsYXllZEZhdm9yaXRlR2FtZXNdO1xyXG4gICAgY29uc3QgdGVtcCA9IG5ld0ZhdmVHYW1lc1tuZXh0SW5kZXhdO1xyXG4gICAgbmV3RmF2ZUdhbWVzW25leHRJbmRleF0gPSBuZXdGYXZlR2FtZXNbY3VyckluZGV4XTtcclxuICAgIG5ld0ZhdmVHYW1lc1tjdXJySW5kZXhdID0gdGVtcDtcclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMobmV3RmF2ZUdhbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhIGdhbWUgaXMgYWxyZWFkeSBpbiBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gbGlzdE9mR2FtZXMgZ2FtZSBqc29uIG9iamVjdFxyXG4gICAqIEByZXR1cm5zIHRydWUgaWYgZ2FtZSBhbHJlYWR5IGV4aXN0cywgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZ2FtZUFscmVhZHlFeGlzdHMoZ2FtZSkge1xyXG4gICAgZm9yIChjb25zdCBnIG9mIGRpc3BsYXllZEZhdm9yaXRlR2FtZXMpIHtcclxuICAgICAgY29uc29sZS5sb2coYCR7Zy5pZH0gJHtnYW1lLmlkfWApO1xyXG4gICAgICBpZiAoZy5pZCA9PT0gZ2FtZS5pZCkgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvL2dldCBhIGxpc3Qgb2YgR2FtZSBjb21wb25lbnRzIGNvcnJlc3BvbmRpbmcgdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAvL2VhY2ggaXMgZ2l2ZW4gYSBkYXRhLWluZGV4IGF0dHJpYnV0ZSB0aGF0IGNvcnJlc3BvbmRzIHRvXHJcbiAgLy93aGF0IHBvc2l0aW9uIGluIHRoZSBsaXN0IHRoZXkgYXJlLiB0aGlzIHdpbGwgYmUgdXNlZCBkdXJpbmdcclxuICAvL2VkaXRpbmcgZmF2b3JpdGUgZ2FtZXMuXHJcbiAgY29uc3QgZmF2b3JpdGVHYW1lc0xpc3QgPSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLm1hcCgoZ2FtZSwgaW5kZXgpID0+IChcclxuICAgIDxHYW1lXHJcbiAgICAgIGtleT17Z2FtZS5pZH1cclxuICAgICAgZ2FtZUlkPXtnYW1lLmlkfVxyXG4gICAgICBnYW1lTmFtZT17Z2FtZS5uYW1lfVxyXG4gICAgICBnYW1lQ292ZXJVcmw9e2dhbWUuY292ZXJ1cmx9XHJcbiAgICAgIGlzRWRpdGluZz17aXNFZGl0aW5nfVxyXG4gICAgICBkYXRhLWluZGV4PXtcIlwiICsgaW5kZXh9XHJcbiAgICAgIGRyYWdnYWJsZT17aXNFZGl0aW5nICsgXCJcIn1cclxuICAgICAgb25EcmFnU3RhcnQ9e2lzRWRpdGluZyA/IHN0YXJ0RHJhZ0dhbWUgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uRHJhZ092ZXI9e2lzRWRpdGluZyA/IGRyYWdPdmVyIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRyb3A9e2lzRWRpdGluZyA/IGRyb3BHYW1lT25HYW1lIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRlbGV0ZT17ZGVsZXRlR2FtZX1cclxuICAgICAgY2hhbmdlUG9zaXRpb249e2NoYW5nZVBvc2l0aW9ufVxyXG4gICAgICBpc0xhc3Q9e2luZGV4ID09PSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLmxlbmd0aCAtIDF9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRvb2xiYXIgdXNlcklkPXtwcm9wcy5pZH0gcHJvZmlsZVBpYz17cHJvcHMucHJvZmlsZVBpY30gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXBhZ2UtaGVhZGVyIG1iLTNcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3Byb3BzLnByb2ZpbGVQaWN9XHJcbiAgICAgICAgICBhbHQ9e2Ake3Byb3BzLmRpc3BsYXlOYW1lfSdzIHByb2ZpbGUgcGljdHVyZWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLXByb2ZpbGUtcGljIHJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTEgZC1pbmxpbmVcIj57cHJvcHMuZGlzcGxheU5hbWV9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdXNlci1wYWdlLW1haW4gJHtpc0VkaXRpbmcgJiYgXCJkLW1kLWZsZXggcm91bmRlZC1sZ1wifWB9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHVzZXItcGFnZS1nYW1lcyByb3VuZGVkLWxnIGQtZmxleCBmbGV4LWNvbHVtbiAke1xyXG4gICAgICAgICAgICBpc0VkaXRpbmcgPyBcImlzLWVkaXRpbmdcIiA6IFwibS1hdXRvXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2b3JpdGUtZ2FtZXMtbGlzdCBnYW1lLWxpc3RcIj5cclxuICAgICAgICAgICAge2Zhdm9yaXRlR2FtZXNMaXN0fVxyXG4gICAgICAgICAgICB7aXNFZGl0aW5nICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBpZD1cImRyb3Atc3BhY2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMyBteC0yXCJcclxuICAgICAgICAgICAgICAgIG9uRHJvcD17ZHJvcEdhbWVPbkNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVyfVxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tYmFyXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5pZCAmJlxyXG4gICAgICAgICAgICAgICghaXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyb2xsYmFja0NoYW5nZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVDaGFuZ2VzfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9yTWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNFZGl0aW5nICYmIDxHYW1lU2VhcmNoQm94IG9uQWRkPXtvbkFkZH0gLz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnRleHQucmVzLmxvY2FscykpLFxyXG4gIH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==