_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/userPage"],{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s2 = $RefreshSig$();

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
  _s2();

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

_s2(Form, "IGmCPaP0Nl8H0OpLITXuIJM9a/M=");

_c = Form;

var _c;

$RefreshReg$(_c, "Form");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/FormFields.js":
/*!**********************************!*\
  !*** ./components/FormFields.js ***!
  \**********************************/
/*! exports provided: TextField, EmailField, PasswordField, HiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailField", function() { return EmailField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordField", function() { return PasswordField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiddenField", function() { return HiddenField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();


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


_c = FormFieldTemplate;
function TextField(props) {
  _s();

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

_s(TextField, "eQG2hQMkdONxQmUA5JgMpWam8LM=");

_c2 = TextField;
function EmailField(props) {
  _s2();

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

_s2(EmailField, "eQG2hQMkdONxQmUA5JgMpWam8LM=");

_c3 = EmailField;
function PasswordField(props) {
  _s3();

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

_s3(PasswordField, "eQG2hQMkdONxQmUA5JgMpWam8LM=");

_c4 = PasswordField;
function HiddenField(props) {
  _s4();

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

_s4(HiddenField, "eQG2hQMkdONxQmUA5JgMpWam8LM=");

_c5 = HiddenField;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "FormFieldTemplate");
$RefreshReg$(_c2, "TextField");
$RefreshReg$(_c3, "EmailField");
$RefreshReg$(_c4, "PasswordField");
$RefreshReg$(_c5, "HiddenField");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Game.js":
/*!****************************!*\
  !*** ./components/Game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
_c = Game;

var _c;

$RefreshReg$(_c, "Game");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/GameSearchBox.js":
/*!*************************************!*\
  !*** ./components/GameSearchBox.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameSearchBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./components/Game.js");
var _s2 = $RefreshSig$();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function GameSearchBox(props) {
  _s2();

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

_s2(GameSearchBox, "XFnGOqU1uwGJSeu65AEijNx22RI=");

_c = GameSearchBox;

var _c;

$RefreshReg$(_c, "GameSearchBox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Test.js":
/*!****************************!*\
  !*** ./components/Test.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./components/Form.js");
/* harmony import */ var _FormFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormFields */ "./components/FormFields.js");



function Test(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: props.id,
    onClick: props.onClick
  });
}
_c = Test;

var _c;

$RefreshReg$(_c, "Test");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Toolbar.js":
/*!*******************************!*\
  !*** ./components/Toolbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./components/Form.js");
/* harmony import */ var _FormFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormFields */ "./components/FormFields.js");
/* harmony import */ var _Test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Test */ "./components/Test.js");
var _s2 = $RefreshSig$();

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
  _s2();

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

_s2(Toolbar, "/Fk0mfoaTkcfqmlHhjzD5FM1xJk=");

_c = Toolbar;

var _c;

$RefreshReg$(_c, "Toolbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FuserPage&absolutePagePath=C%3A%5CUsers%5Cadnan%5Cweb-dev%5Cmy-game-page%5Cpages%5CuserPage.js!./":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FuserPage&absolutePagePath=C%3A%5CUsers%5Cadnan%5Cweb-dev%5Cmy-game-page%5Cpages%5CuserPage.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/userPage",
        function () {
          return __webpack_require__(/*! ./pages/userPage.js */ "./pages/userPage.js");
        }
      ]);
    

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.9.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be converted to ReactError during
// build, and in production they will be minified.

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be converted to ReactError during
// build, and in production they will be minified.

function ReactError(error) {
  error.name = 'Invariant Violation';
  return error;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  (function () {
    if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
      {
        throw ReactError(Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.'));
      }
    }
  })();
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
          break;
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */

var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */


/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */
function jsxDEV(type, config, maybeKey, source, self) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;

  if (hasValidRef(config)) {
    ref = config.ref;
  }

  if (hasValidKey(config)) {
    key = '' + config.key;
  }

  // Remaining properties are added to a new props object
  for (propName in config) {
    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
      props[propName] = config[propName];
    }
  }

  // intentionally not checking if key was set above
  // this key is higher priority as it's static
  if (maybeKey !== undefined) {
    key = '' + maybeKey;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  if (key || ref) {
    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
    if (key) {
      defineKeyPropWarningGetter(props, displayName);
    }
    if (ref) {
      defineRefPropWarningGetter(props, displayName);
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  (function () {
    if (!!(element === null || element === undefined)) {
      {
        throw ReactError(Error('React.cloneElement(...): The argument must be a React element, but you passed ' + element + '.'));
      }
    }
  })();

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      (function () {
        {
          {
            throw ReactError(Error('Objects are not valid as a React child (found: ' + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ').' + addendum));
          }
        }
      })();
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  (function () {
    if (!isValidElement(children)) {
      {
        throw ReactError(Error('React.Children.only expected to receive a single React element child.'));
      }
    }
  })();
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  (function () {
    if (!(dispatcher !== null)) {
      {
        throw ReactError(Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.'));
      }
    }
  })();
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, unstable_observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}

function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var emptyObject$1 = {};

function useResponder(responder, listenerProps) {
  var dispatcher = resolveDispatcher();
  {
    if (responder == null || responder.$$typeof !== REACT_RESPONDER_TYPE) {
      warning$1(false, 'useResponder: invalid first argument. Expected an event responder, but instead got %s', responder);
      return;
    }
  }
  return dispatcher.useResponder(responder, listenerProps || emptyObject$1);
}

// Within the scope of the callback, mark all updates as being allowed to suspend.
function withSuspenseConfig(scope, config) {
  var previousConfig = ReactCurrentBatchConfig.suspense;
  ReactCurrentBatchConfig.suspense = config === undefined ? null : config;
  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.suspense = previousConfig;
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }
  var name = getComponentName(type);
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(source);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = jsxDEV(type, props, key, source, self);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    var children = props.children;
    if (children !== undefined) {
      if (isStaticChildren) {
        for (var i = 0; i < children.length; i++) {
          validateChildKeys(children[i], type);
        }
      } else {
        validateChildKeys(children, type);
      }
    }
  }

  if (props.key !== undefined) {
    warning$1(false, 'React.jsx: Spreading a key to JSX is a deprecated pattern. ' + 'Explicitly pass a key after spreading props in your JSX call. ' + 'E.g. <ComponentName {...props} key={key} />');
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

// These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.
function jsxWithValidationStatic(type, props, key) {
  return jsxWithValidation(type, props, key, true);
}

function jsxWithValidationDynamic(type, props, key) {
  return jsxWithValidation(type, props, key, false);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var hasBadMapPolyfill = void 0;

{
  hasBadMapPolyfill = false;
  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]);
    // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.
    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
    // TODO: Consider warning about bad polyfills
    hasBadMapPolyfill = true;
  }
}

function createFundamentalComponent(impl) {
  // We use responder as a Map key later on. When we have a bad
  // polyfill, then we can't use it as a key as the polyfill tries
  // to add a property to the object.
  if ( true && !hasBadMapPolyfill) {
    Object.freeze(impl);
  }
  var fundamantalComponent = {
    $$typeof: REACT_FUNDAMENTAL_TYPE,
    impl: impl
  };
  {
    Object.freeze(fundamantalComponent);
  }
  return fundamantalComponent;
}

function createEventResponder(displayName, responderConfig) {
  var getInitialState = responderConfig.getInitialState,
      onEvent = responderConfig.onEvent,
      onMount = responderConfig.onMount,
      onUnmount = responderConfig.onUnmount,
      onOwnershipChange = responderConfig.onOwnershipChange,
      onRootEvent = responderConfig.onRootEvent,
      rootEventTypes = responderConfig.rootEventTypes,
      targetEventTypes = responderConfig.targetEventTypes;

  var eventResponder = {
    $$typeof: REACT_RESPONDER_TYPE,
    displayName: displayName,
    getInitialState: getInitialState || null,
    onEvent: onEvent || null,
    onMount: onMount || null,
    onOwnershipChange: onOwnershipChange || null,
    onRootEvent: onRootEvent || null,
    onUnmount: onUnmount || null,
    rootEventTypes: rootEventTypes || null,
    targetEventTypes: targetEventTypes || null
  };
  // We use responder as a Map key later on. When we have a bad
  // polyfill, then we can't use it as a key as the polyfill tries
  // to add a property to the object.
  if ( true && !hasBadMapPolyfill) {
    Object.freeze(eventResponder);
  }
  return eventResponder;
}

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// Disable javascript: URL strings in href for XSS protection.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.




// See https://github.com/react-native-community/discussions-and-proposals/issues/72 for more information
// This is a flag so we can fix warnings in RN core before turning it on


// Experimental React Flare event system and event components support.
var enableFlareAPI = false;

// Experimental Host Component support.
var enableFundamentalAPI = false;

// New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107
var enableJSXTransformAPI = false;

// We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
// Till then, we warn about the missing mock, but still fallback to a sync mode compatible version

// Temporary flag to revert the fix in #15650


// For tests, we flush suspense fallbacks in an act scope;
// *except* in some of our own tests, where we test incremental loading states.


// Changes priority of some events like mousemove to user-blocking priority,
// but without making them discrete. The flag exists in case it causes
// starvation problems.


// Add a callback property to suspense to notify which promises are currently
// in the update queue. This allows reporting and tracing of what is causing
// the user to see a loading state.


// Part of the simplification of React.createElement so we can eventually move
// from React.createElement to React.jsx
// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,

  Fragment: REACT_FRAGMENT_TYPE,
  Profiler: REACT_PROFILER_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,
  unstable_SuspenseList: REACT_SUSPENSE_LIST_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_withSuspenseConfig: withSuspenseConfig,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

if (enableFlareAPI) {
  React.unstable_useResponder = useResponder;
  React.unstable_createResponder = createEventResponder;
}

if (enableFundamentalAPI) {
  React.unstable_createFundamental = createFundamentalComponent;
}

// Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.

if (enableJSXTransformAPI) {
  {
    React.jsxDEV = jsxWithValidation;
    React.jsx = jsxWithValidationDynamic;
    React.jsxs = jsxWithValidationStatic;
  }
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/userPage.js":
/*!***************************!*\
  !*** ./pages/userPage.js ***!
  \***************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Game */ "./components/Game.js");
/* harmony import */ var _components_GameSearchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GameSearchBox */ "./components/GameSearchBox.js");
/* harmony import */ var _components_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Toolbar */ "./components/Toolbar.js");
var _s2 = $RefreshSig$();

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

var __N_SSP = true;
function UserPage(props) {
  _s2();

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

_s2(UserPage, "22CiGVluGG7G1b0clOaHSp1dmwc=");

_c = UserPage;

var _c;

$RefreshReg$(_c, "UserPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FuserPage&absolutePagePath=C%3A%5CUsers%5Cadnan%5Cweb-dev%5Cmy-game-page%5Cpages%5CuserPage.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm1GaWVsZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lU2VhcmNoQm94LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9vbGJhci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlclBhZ2UuanMiXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGRyZW4iLCJjaGlsZCIsInZhbHVlIiwiZmllbGRWYWx1ZXMiLCJzZXRGaWVsZFZhbHVlcyIsImZpZWxkVmFsaWRhdG9ycyIsInVzZVJlZiIsImluZGV4IiwiY2xvbmVFbGVtZW50IiwiYWRkVmFsaWRhdG9yIiwidmFsaWRhdG9yIiwiY3VycmVudCIsInB1c2giLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsInBhcmVudElkIiwiaWQiLCJpbmxpbmUiLCJzdWJtaXRCdG4iLCJidG5DbGFzcyIsInN1Ym1pdEJ0blRleHQiLCJpbm5lckZvcm0iLCJlIiwibmV3RmllbGRWYWx1ZXMiLCJpIiwidGFyZ2V0IiwidmFsaWRhdGVBbGxGaWVsZHMiLCJlcnJvckluZm8iLCJvblN1Ym1pdCIsImFjdGlvbiIsIm1ldGhvZCIsImNsYXNzTmFtZSIsIkZvcm1GaWVsZFRlbXBsYXRlIiwidG9BcnJheSIsImNvbnRyb2wiLCJncm91cENsYXNzIiwiVGV4dEZpZWxkIiwiaW5wdXRJZCIsImxhYmVsIiwibWluTGVuZ3RoIiwibWluIiwibWF4TGVuZ3RoIiwibWF4IiwidmFsaWRhdG9yQWRkZWQiLCJpbnB1dEZpZWxkIiwidW5kZWZpbmVkIiwidmFsaWRhdGUiLCJlbGVtZW50IiwidmFsaWRpdHlTdGF0ZSIsInZhbGlkaXR5IiwidmFsdWVNaXNzaW5nIiwibWVzc2FnZSIsInRvb1Nob3J0IiwidG9vTG9uZyIsIm5hbWUiLCJyZXF1aXJlZCIsIkVtYWlsRmllbGQiLCJsYWJlbE5hbWUiLCJ0eXBlTWlzbWF0Y2giLCJQYXNzd29yZEZpZWxkIiwiSGlkZGVuRmllbGQiLCJHYW1lIiwiZGF0YUluZGV4IiwiTnVtYmVyIiwib25EcmFnU3RhcnQiLCJvbkRyYWdPdmVyIiwib25Ecm9wIiwiZHJhZ2dhYmxlIiwiaXNFZGl0aW5nIiwiZ2FtZUNvdmVyVXJsIiwiZ2FtZU5hbWUiLCJjaGFuZ2VQb3NpdGlvbiIsImlzTGFzdCIsIm9uRGVsZXRlIiwiZ2FtZUlkIiwib25BZGQiLCJHYW1lU2VhcmNoQm94IiwiZGlzcGxheWVkU2VhcmNoVGVybSIsInNldERpc3BsYXllZFNlYXJjaFRlcm0iLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNlYXJjaFBhZ2UiLCJzZXRTZWFyY2hQYWdlIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhc05leHQiLCJzZXRIYXNOZXh0IiwiZmlyc3RSZW5kZXIiLCJzdGFydERyYWdHYW1lIiwiZ2FtZSIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZHJhZ092ZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BFZmZlY3QiLCJkaXNwbGF5ZWRTZWFyY2hSZXN1bHRzIiwiY292ZXJ1cmwiLCJoYW5kbGVTZWFyY2giLCJmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyIsImNoYW5nZVBhZ2UiLCJwYWdlTnVtYmVyIiwidGVybSIsInBhZ2UiLCJxdWVyeSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwicmVzdWx0cyIsIm1zZyIsIlRlc3QiLCJvbkNsaWNrIiwiVG9vbGJhciIsInNob3dEcm9wZG93biIsInNldFNob3dEcm9wZG93biIsImhhbmRsZVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySWQiLCJwcm9maWxlUGljIiwiVXNlclBhZ2UiLCJnYW1lcyIsImZhdm9yaXRlR2FtZXMiLCJzZXRGYXZvcml0ZUdhbWVzIiwiZGlzcGxheWVkRmF2b3JpdGVHYW1lcyIsInNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMiLCJzZXRJc0VkaXRpbmciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImRyb3BHYW1lT25HYW1lIiwibmV3RmF2ZUdhbWVzIiwibmV3R2FtZSIsImdldERhdGEiLCJkcm9wVGFyZ2V0IiwibmV3R2FtZUFzT2JqZWN0IiwicGFyc2UiLCJnYW1lQWxyZWFkeUV4aXN0cyIsImxlbmd0aCIsImhvbGRlciIsInRlbXAiLCJkcmFnZ2VkR2FtZSIsImRyb3BHYW1lT25Db250YWluZXIiLCJuZXdQb3MiLCJkZWxldGVHYW1lIiwiZmlsdGVyIiwicm9sbGJhY2tDaGFuZ2VzIiwic2F2ZUNoYW5nZXMiLCJmYXZlR2FtZUlkcyIsImNyZWRlbnRpYWxzIiwiYm9keSIsImhlYWRlcnMiLCJlcnJvciIsImN1cnJJbmRleCIsIm5leHRJbmRleCIsImciLCJmYXZvcml0ZUdhbWVzTGlzdCIsInRvb2xiYXJJZCIsInVzZXJQcm9maWxlUGljIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFDbEM7QUFDQTtBQUNBO0FBSGtDLGtCQUlJQyxzREFBUSxDQUM1Q0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxHQUFmLENBQW1CSixLQUFLLENBQUNLLFFBQXpCLEVBQW1DLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNOLEtBQU4sQ0FBWU8sS0FBdkI7QUFBQSxHQUFuQyxDQUQ0QyxDQUpaO0FBQUE7QUFBQSxNQUkzQkMsV0FKMkI7QUFBQSxNQUlkQyxjQUpjLGtCQVFsQzs7O0FBQ0EsTUFBTUMsZUFBZSxHQUFHQyxvREFBTSxDQUFDLEVBQUQsQ0FBOUIsQ0FUa0MsQ0FXbEM7O0FBQ0EsTUFBTU4sUUFBUSxHQUFHSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJKLEtBQUssQ0FBQ0ssUUFBekIsRUFBbUMsVUFBQ0MsS0FBRCxFQUFRTSxLQUFSO0FBQUEsd0JBQ2xEViw0Q0FBSyxDQUFDVyxZQUFOLENBQW1CUCxLQUFuQixFQUEwQjtBQUN4QkMsV0FBSyxFQUFFQyxXQUFXLENBQUNJLEtBQUQsQ0FETTtBQUV4QkUs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QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGLGFBQWE7QUFDbkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBLGtEQUFrRDs7O0FBR2xEOzs7QUFHQTs7O0FBR0E7QUFDQTs7QUFFQTs7O0FBR0E7OztBQUdBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOzs7OztBQUtBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDMXJFYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FB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Q0FUSCxDQURILGVBc0JFO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQStCbkUsWUFBL0IsQ0F0QkYsQ0FoQkYsQ0FERixFQTBDR25CLFNBQVMsaUJBQUksMkRBQUMsaUVBQUQ7QUFBZSxTQUFLLEVBQUVPO0FBQXRCLElBMUNoQixDQWZGLENBREY7QUE4REQ7O0lBOVJ1QnFELFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy91c2VyUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogR2VuZXJhbCBmb3JtIGNvbXBvbmVudCB0aGF0IHZhbGlkYXRlcyBhbmQgY29udHJvbHMgdGhlIHN0YXRlXHJcbiAqIG9mIGFsbCBvZiBpdHMgZmllbGRzLiBDaGlsZHJlbiBvZiBGb3JtIHNob3VsZCBiZSBhIGxpc3Qgb2YgRm9ybUVsZW1lbnRzLlxyXG4gKlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgRXhwZWN0ZWQgcHJvcHM6XHJcbiAqIC0gaWQge3N0cmluZ30gZm9ybSBodG1sRWxlbWVudCdzIGlkXHJcbiAqXHJcbiAqIC0gb25TdWJtaXQge2Z1bmN0aW9uKGV2ZW50LCBvYmplY3QpfSBjYWxsYmFjayBmb3Igd2hlbiBmb3JtIHN1Ym1pdHMuXHJcbiAqICAgRm9ybSB3aWxsIHNlbmQgdHdvIGFyZ3VtZW50cywgdGhlIGZpcnN0IGlzIHRoZSBldmVudCwgdGhlIHNlY29uZFxyXG4gKiAgIGlzIHRoZSBlcnJvciBpbmZvIG9iamVjdC4gSWYgb25lIG9mIHRoZSBGb3JtRmllbGRzIHdpdGhpbiB0aGUgRm9ybVxyXG4gKiAgIHdlcmUgbm90IHZhbGlkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IHdpbGwgYmUgYW4gb2JqZWN0IGNvbnRhaW5pbmdcclxuICogICBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXJyb3IuIElmIGV2ZXJ5dGhpbmcgd2FzIHZhbGlkLCBpdCB3aWxsIGJlIG51bGwuXHJcbiAqXHJcbiAqIC0gc3VibWl0QnRuVGV4dCB7c3RyaW5nfSB0aGUgdGV4dENvbnRlbnQgZm9yIHRoZSBzdWJtaXQgYnV0dG9uXHJcbiAqXHJcbiAqIC0gYWN0aW9uPyB7c3RyaW5nfSB2YWx1ZSBmb3IgZm9ybSdzIGFjdGlvbiBhdHRyaWJ1dGVcclxuICpcclxuICogLSBtZXRob2Q/IHtzdHJpbmd9IHZhbHVlIGZvciBmb3JtJ3MgbWV0aG9kIGF0dHJpYnV0ZVxyXG4gKlxyXG4gKiAtIGlubGluZSB7Ym9vbGVhbn0gd2hldGhlciB0aGlzIGlzIGFuIGlubGluZSBmb3JtIG9yIG5vdFxyXG4gKlxyXG4gKiAtcHJvcHMuY2hpbGRyZW4gc2hvdWxkIGJlIGEgbGlzdCBvZiBGb3JtRmllbGQgZWxlbWVudHMuIEVhY2ggRm9ybUZpZWxkXHJcbiAqICBzaG91bGQgYmUgaW5pdGlhbGl6ZWQgd2l0aCBhbiBpbml0aWFsIHZhbHVlIHByb3AuXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKHByb3BzKSB7XHJcbiAgLy9hcnJheSBvZiB2YWx1ZXMgZm9yIGFsbCBjaGlsZHJlbiAoRm9ybUZpZWxkcylcclxuICAvL2luaXRpYWxpemVzIHN0YXRlIHRvIGJlIGVxdWFsIHRvIHRoZSBpbml0aWFsIHZhbHVlIGdpdmVuIGJ5XHJcbiAgLy9wYXJlbnQgY29tcG9uZW50XHJcbiAgY29uc3QgW2ZpZWxkVmFsdWVzLCBzZXRGaWVsZFZhbHVlc10gPSB1c2VTdGF0ZShcclxuICAgIFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiBjaGlsZC5wcm9wcy52YWx1ZSlcclxuICApO1xyXG5cclxuICAvL2xpc3Qgb2YgdmFsaWRhdG9ycyBvZiBhbGwgb2YgdGhpcyBGb3JtJ3MgRm9ybUZpZWxkc1xyXG4gIGNvbnN0IGZpZWxkVmFsaWRhdG9ycyA9IHVzZVJlZihbXSk7XHJcblxyXG4gIC8vdGFrZXMgY29udHJvbCBvZiBjaGlsZHJlbnMgc3RhdGUgYW5kIHBhc3NlcyBvd24gcHJvcHNcclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT5cclxuICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICB2YWx1ZTogZmllbGRWYWx1ZXNbaW5kZXhdLFxyXG4gICAgICBhZGRWYWxpZGF0b3I6ICh2YWxpZGF0b3IpID0+IGZpZWxkVmFsaWRhdG9ycy5jdXJyZW50LnB1c2godmFsaWRhdG9yKSxcclxuICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcclxuICAgICAgcGFyZW50SWQ6IHByb3BzLmlkLCAvL2FkZCBwYXJlbnQgaWQgdG8gc28gRm9ybUZpZWxkIGNhbiBtYWtlIHVuaXF1ZSBpZHMgZm9yIGl0cyBlbGVtZW50c1xyXG4gICAgICBpbmRleCxcclxuICAgICAgaW5saW5lOiBwcm9wcy5pbmxpbmUsXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnRuIGJ0bi1wcmltYXJ5ICR7cHJvcHMuYnRuQ2xhc3N9YH0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICB7cHJvcHMuc3VibWl0QnRuVGV4dCB8fCBcIlN1Ym1pdFwifVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxuXHJcbiAgLy93aGF0IHRvIGRpc3BsYXkgaW5zaWRlIHRoZSBmb3JtXHJcbiAgLy9pZiBpdHMgYW4gaW5saW5lIGZvcm0sIHB1dCBhbGwgY2hpbGRyZW4gYW5kIGJ1dHRvbiBpbiBvbmUgcm93XHJcbiAgLy9lbHNlIGRpc3BsYXkgY2hpbGRyZW4gYXMgdGhleSBhcmVcclxuICBjb25zdCBpbm5lckZvcm0gPSBwcm9wcy5pbmxpbmUgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIHtzdWJtaXRCdG59XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPD5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7c3VibWl0QnRufVxyXG4gICAgPC8+XHJcbiAgKTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyB2YWx1ZSBjaGFuZ2VzIGZvciBhbGwgb2YgYSBGb3JtJ3MgRm9ybUZpZWxkcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggRm9ybUZpZWxkJ3MgaW5kZXggcHJvcFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlLCBpbmRleCkge1xyXG4gICAgLy90aGUgaW5kZXggcHJvcCBvZiBlYWNoIEZvcm1GaWVsZCBhbmQgZmllbGRWYWx1ZXMgYXJlIHBhcmFsbGVsXHJcbiAgICAvL3NvIGlmIGEgRm9ybUZpZWxkIHBhc3NlcyBpdCdzIHByb3BzLmluZGV4LCB3ZSBjYW4gc2V0XHJcbiAgICAvL3RoZSBjb3JyZWN0IHN0YXRlXHJcbiAgICBjb25zdCBuZXdGaWVsZFZhbHVlcyA9IGZpZWxkVmFsdWVzLm1hcCgodmFsdWUsIGkpID0+XHJcbiAgICAgIGkgPT09IGluZGV4ID8gZS50YXJnZXQudmFsdWUgOiB2YWx1ZVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlcyhuZXdGaWVsZFZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxscyBldmVyeSBGb3JtRmllbGQncyB2YWxpZGF0b3IgZnVuY3Rpb24uIElmIGFueSBmaWVsZFxyXG4gICAqIGlzIGludmFsaWQsIHdpbGwgc2VuZCB0aGUgZXJyb3IgaW5mbyBvYmplY3QgdG8gcGFyZW50IGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7ZXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUFsbEZpZWxkcyhlKSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbGlkYXRvciBvZiBmaWVsZFZhbGlkYXRvcnMuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBlcnJvckluZm8gPSB2YWxpZGF0b3IoKTtcclxuICAgICAgaWYgKGVycm9ySW5mbykgcmV0dXJuIHByb3BzLm9uU3VibWl0KGUsIGVycm9ySW5mbyk7XHJcbiAgICB9XHJcbiAgICBwcm9wcy5vblN1Ym1pdChlLCBudWxsKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgIG9uU3VibWl0PXt2YWxpZGF0ZUFsbEZpZWxkc31cclxuICAgICAgICBub1ZhbGlkYXRlPXt0cnVlfVxyXG4gICAgICAgIGFjdGlvbj17cHJvcHMuYWN0aW9ufVxyXG4gICAgICAgIG1ldGhvZD17cHJvcHMubWV0aG9kfVxyXG4gICAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lubmVyRm9ybX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKipcclxuICogRm9ybUZpZWxkcyBhcmUgbWVhbnQgdG8gYmUgdXNlZCB3aXRoIHRoZSBGb3JtIGNvbXBvbmVudC5cclxuICogVGhleSBhcmUgYSBjb21iaW5hdGlvbiBvZiBhIGxhYmVsIGFuZCBhIGNvcnJlc3BvbmRpbmcgaW5wdXQgZWxlbWVudCBvZiBzb21lIGtpbmQuXHJcbiAqIFRoZXkgbWFrZSB1cCB0aGUgZmllbGRzIG9mIGEgRm9ybSBjb21wb25lbnQuIEVhY2ggRm9ybUZpZWxkIGhhcyBpdHMgb3duXHJcbiAqIHZhbGlkYXRvciBmdW5jdGlvbiB0aGF0IGNoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaXRzIGlucHV0LiBGb3JtRmllbGQgdmFsaWRhdG9yc1xyXG4gKiBhcmUgY2FsbGVkIGJ5IGl0cyBwYXJlbnQgRm9ybS4gRm9ybUZpZWxkcyBzaG91bGQgYmUgdGhlIGNoaWxkcmVuIG9mIGEgRm9ybVxyXG4gKiBjb21wb25lbnQgYW5kIHNob3VsZCBiZSBpbml0aWFsaWVkIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSBwcm9wLiBBZnRlciBmaXJzdCByZW5kZXIsXHJcbiAqIHRoZSBGb3JtIGNvbXBvbmVudCB3aWxsIHRha2UgY29udHJvbCBvZiB0aGUgRm9ybUZpZWxkJ3MgdmFsdWUgc3RhdGUuXHJcbiAqXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIENvbW1vbiBsYXlvdXQgdGVtcGxhdGUgdGhhdCBGb3JtRmllbGRzIHVzZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgZXhwZWN0ZWQgcHJvcHM6XHJcbiAqIC0gZ3JvdXBDbGFzcyB7c3RyfSBjc3MgY2xhc3MgZm9yIHRoZSBmb3JtLWdyb3VwIGNvbnRhaW5pbmcgdGhlIGlucHV0XHJcbiAqIC0gY2hpbGRyZW46XHJcbiAqIC0gRm9ybUZpZWxkJ3MgY29udHJvbFxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gRm9ybUZpZWxkVGVtcGxhdGUocHJvcHMpIHtcclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pO1xyXG4gIC8vcHJlc2VydmUgZXhpc3RpbmcgY3NzIGNsYXNzZXMgKyBhZGQgYm9vdHN0cmFwIGNsYXNzZXNcclxuICBjb25zdCBjb250cm9sID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuWzBdLCB7XHJcbiAgICBjbGFzc05hbWU6XHJcbiAgICAgIChjaGlsZHJlblswXS5jbGFzc05hbWUgfHwgXCJcIikgK1xyXG4gICAgICBgIGZvcm0tY29udHJvbCAke3Byb3BzLmlubGluZSA/IFwidy0xMDBcIiA6IFwidy03NVwifWAsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7cHJvcHMuaW5saW5lID8gXCJcIiA6IFwiZm9ybS1ncm91cCBtLTNcIn0gJHtwcm9wcy5ncm91cENsYXNzfWB9XHJcbiAgICA+XHJcbiAgICAgIHtjb250cm9sfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLy9kb250IHVzZSB0aGUgYWRvIHZhY2F0aW9uL3RpbWVvZmYgZm9yIGhvbGlkYXkganVzdCBkb250IHB1dCBhbnkgdGltZVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYWwgdGV4dCBpbnB1dCBmaWVsZC5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWwge3N0cmluZ30gRm9ybUZpZWxkJ3MgbGFiZWxcclxuICogLSBuYW1lIHtzdHJpbmd9IG5hbWUgZm9yIGlucHV0IGVsZW1lbnRcclxuICogLSByZXF1aXJlZD8ge2Jvb2xlYW59IHdoZXRoZXIgdGhpcyBGb3JtRmllbGQgaXMgcmVxdWlyZWQgb3Igbm90XHJcbiAqIC0gbWluPyB7bnVtYmVyfSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqIC0gbWF4PyB7bnVtYmVyfSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGV4dEZpZWxkKHByb3BzKSB7XHJcbiAgY29uc3QgaW5wdXRJZCA9IGBmb3JtLWZpZWxkLSR7cHJvcHMubGFiZWx9LSR7cHJvcHMucGFyZW50SWR9YDtcclxuICBjb25zdCBtaW5MZW5ndGggPSBwcm9wcy5taW47XHJcbiAgY29uc3QgbWF4TGVuZ3RoID0gcHJvcHMubWF4O1xyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGlucHV0RmllbGQuY3VycmVudDtcclxuICAgIGNvbnN0IHZhbGlkaXR5U3RhdGUgPSBlbGVtZW50LnZhbGlkaXR5O1xyXG5cclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnZhbHVlTWlzc2luZylcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7cHJvcHMubGFiZWx9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke3Byb3BzLmxhYmVsfSBtdXN0IGJlIGF0IGxlYXN0ICR7bWluTGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudG9vTG9uZylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtwcm9wcy5sYWJlbH0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkVGVtcGxhdGUgZ3JvdXBDbGFzcz17cHJvcHMuZ3JvdXBDbGFzc30gaW5saW5lPXtwcm9wcy5pbmxpbmV9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD17aW5wdXRJZH1cclxuICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZSB8fCBcIlwifVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSwgcHJvcHMuaW5kZXgpfVxyXG4gICAgICAgIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMubGFiZWx9XHJcbiAgICAgICAgcmVmPXtpbnB1dEZpZWxkfVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSW5wdXQgZmllbGQgZm9yIGVtYWlscy5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIC0gbGFiZWw/IHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChkZWZhdWx0IGxhYmVsIGlzIEVtYWlsKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIHJlcXVpcmVkPyB7Ym9vbGVhbn0gd2hldGhlciB0aGlzIEZvcm1GaWVsZCBpcyByZXF1aXJlZCBvciBub3RcclxuICogLSBtaW4/IHtudW1iZXJ9IG1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICogLSBtYXg/IHtudW1iZXJ9IG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFbWFpbEZpZWxkKHByb3BzKSB7XHJcbiAgY29uc3QgbGFiZWxOYW1lID0gcHJvcHMubGFiZWwgfHwgXCJFbWFpbFwiO1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke2xhYmVsTmFtZX0tJHtwcm9wcy5wYXJlbnRJZH1gO1xyXG4gIGNvbnN0IG1pbkxlbmd0aCA9IHByb3BzLm1pbjtcclxuICBjb25zdCBtYXhMZW5ndGggPSBwcm9wcy5tYXggfHwgNTA7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IGlmIGlucHV0IGlzIHZhbGlkLCByZXR1cm5zIG51bGwuIE90aGVyd2lzZSwgcmV0dXJucyBhbiBvYmplY3RcclxuICAgKiBjb250YWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXJyb3JcclxuICAgKiB7bWVzc2FnZTogZXJyb3IgbWVzc2FnZSwgZWxlbWVudDogcmVmZXJlbmNlIHRvIEh0bWxFbGVtZW50IHRoYXQgY29udGFpbnMgZXJyb3J9XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gaW5wdXRGaWVsZC5jdXJyZW50O1xyXG4gICAgY29uc3QgdmFsaWRpdHlTdGF0ZSA9IGVsZW1lbnQudmFsaWRpdHk7XHJcblxyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudmFsdWVNaXNzaW5nKVxyXG4gICAgICByZXR1cm4geyBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IGlzIHJlcXVpcmVkLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnR5cGVNaXNtYXRjaClcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGFuIGVtYWlsLmAsIGVsZW1lbnQgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb1Nob3J0KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gbXVzdCBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnRvb0xvbmcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAke21heExlbmd0aH0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtRmllbGRUZW1wbGF0ZSBncm91cENsYXNzPXtwcm9wcy5ncm91cENsYXNzfSBpbmxpbmU9e3Byb3BzLmlubGluZX0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5vbkNoYW5nZShlLCBwcm9wcy5pbmRleCl9XHJcbiAgICAgICAgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfVxyXG4gICAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxyXG4gICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtsYWJlbE5hbWV9XHJcbiAgICAgICAgcmVmPXtpbnB1dEZpZWxkfVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSW5wdXQgZmllbGQgZm9yIHBhc3N3b3Jkcy4gSW5wdXQgaXMgYWx3YXlzIHJlcXVpcmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogLSBsYWJlbD8ge3N0cmluZ30gRm9ybUZpZWxkJ3MgbGFiZWwgKGRlZmF1bHQgbGFiZWwgaXMgUGFzc3dvcmQpXHJcbiAqIC0gbmFtZSB7c3RyaW5nfSBuYW1lIGZvciBpbnB1dCBlbGVtZW50XHJcbiAqIC0gbWluPyB7bnVtYmVyfSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUGFzc3dvcmRGaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGxhYmVsTmFtZSA9IHByb3BzLmxhYmVsIHx8IFwiUGFzc3dvcmRcIjtcclxuICBjb25zdCBpbnB1dElkID0gYGZvcm0tZmllbGQtJHtsYWJlbE5hbWV9LSR7cHJvcHMucGFyZW50SWR9YDtcclxuICBjb25zdCBtaW5MZW5ndGggPSBwcm9wcy5taW47XHJcbiAgY29uc3QgbWF4TGVuZ3RoID0gcHJvcHMubWF4IHx8IDUwO1xyXG5cclxuICBjb25zdCB2YWxpZGF0b3JBZGRlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgLy9yZWZlcmVuY2UgdG8gaW5wdXQgaHRtbCBlbGVtZW50XHJcbiAgY29uc3QgaW5wdXRGaWVsZCA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG5cclxuICAvL3RvIGVuc3VyZSB2YWxpZGF0b3Igb25seSBnZXRzIGFkZGVkIHRvIHBhcmVudCBGb3JtIG9uY2VcclxuICBpZiAoIXZhbGlkYXRvckFkZGVkLmN1cnJlbnQpIHtcclxuICAgIHByb3BzLmFkZFZhbGlkYXRvcih2YWxpZGF0ZSk7XHJcbiAgICB2YWxpZGF0b3JBZGRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaW5wdXRcclxuICAgKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBpbnB1dEZpZWxkLmN1cnJlbnQ7XHJcbiAgICBjb25zdCB2YWxpZGl0eVN0YXRlID0gZWxlbWVudC52YWxpZGl0eTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHlTdGF0ZS52YWx1ZU1pc3NpbmcpXHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGAke2xhYmVsTmFtZX0gaXMgcmVxdWlyZWQuYCwgZWxlbWVudCB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudG9vU2hvcnQpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogYCR7bGFiZWxOYW1lfSBtdXN0IGJlIGF0IGxlYXN0ICR7bWluTGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudG9vTG9uZylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgJHtsYWJlbE5hbWV9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9O1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1GaWVsZFRlbXBsYXRlIGdyb3VwQ2xhc3M9e3Byb3BzLmdyb3VwQ2xhc3N9IGlubGluZT17cHJvcHMuaW5saW5lfT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9e2lucHV0SWR9XHJcbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWUgfHwgXCJcIn1cclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSwgcHJvcHMuaW5kZXgpfVxyXG4gICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxyXG4gICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtsYWJlbE5hbWV9XHJcbiAgICAgICAgcmVmPXtpbnB1dEZpZWxkfVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSGlkZGVuIGlucHV0IGZpZWxkXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiAtIGxhYmVsIHtzdHJpbmd9IEZvcm1GaWVsZCdzIGxhYmVsIChub3QgdmlzaWJsZSwganVzdCBmb3IgbmFtaW5nIHB1cnBvc2VzKVxyXG4gKiAtIG5hbWUge3N0cmluZ30gbmFtZSBmb3IgaW5wdXQgZWxlbWVudFxyXG4gKiAtIHZhbHVlIHtzdHJpbmd9IGlucHV0J3MgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBIaWRkZW5GaWVsZChwcm9wcykge1xyXG4gIGNvbnN0IGlucHV0SWQgPSBgZm9ybS1maWVsZC0ke3Byb3BzLmxhYmVsfS0ke3Byb3BzLnBhcmVudElkfWA7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRvckFkZGVkID0gdXNlUmVmKGZhbHNlKTtcclxuICAvL3JlZmVyZW5jZSB0byBpbnB1dCBodG1sIGVsZW1lbnRcclxuICBjb25zdCBpbnB1dEZpZWxkID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vdG8gZW5zdXJlIHZhbGlkYXRvciBvbmx5IGdldHMgYWRkZWQgdG8gcGFyZW50IEZvcm0gb25jZVxyXG4gIGlmICghdmFsaWRhdG9yQWRkZWQuY3VycmVudCkge1xyXG4gICAgcHJvcHMuYWRkVmFsaWRhdG9yKHZhbGlkYXRlKTtcclxuICAgIHZhbGlkYXRvckFkZGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpbnB1dFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xyXG4gICAgLy9hbHdheXMgdmFsaWRcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtRmllbGRUZW1wbGF0ZSBncm91cENsYXNzPXtwcm9wcy5ncm91cENsYXNzfSBpbmxpbmU9e3Byb3BzLmlubGluZX0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpbnB1dElkfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgIGhpZGRlbj17dHJ1ZX1cclxuICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICByZWY9e2lucHV0RmllbGR9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm1GaWVsZFRlbXBsYXRlPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEEgY29tcG9uZW50IHJlcHJlc2VudGluZyBhIHNpbmdsZSBnYW1lXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyA6XHJcbiAqXHJcbiAqICAtIGRhdGEtaW5kZXg/IHtzdHJpbmd9OiBpbmRleCBvZiBnYW1lIGluIHRoZSBmYXZlIGdhbWUgbGlzdFxyXG4gKlxyXG4gKiAgLSBvbkFkZD8ge2Z1bmN0aW9ufTogY2FsbGJhY2sgZm9yIGdhbWVzIGluIEdhbWVTZWFyY2hCb3ggdG8gYmUgYWRkZWQgdG8gZmF2b3JpdGUgZ2FtZXMgbGlzdC5cclxuICogIFVzZWQgaW4gbW9iaWxlIHZpZXcuIE1hbmRhdG9yeSBmb3IgR2FtZXMgaW4gR2FtZVNlYXJjaEJveC5cclxuICpcclxuICogIC0gY2hhbmdlUG9zaXRpb24/IHtmdW5jdGlvbihjdXJyUG9zOiBpbnQsIG5leHRQb3M6IGludCl9OiBjYWxsYmFjayBmb3IgZ2FtZXMgaW4gZmF2ZSBnYW1lIGxpc3QgdG8gY2hhbmdlIHBvc2l0aW9uLlxyXG4gKiBVc2VkIGluIG1vYmlsZSB2aWV3LiBNYW5kYXRvcnkgZm9yIEdhbWVzIGluIGZhdmUgZ2FtZSBsaXN0LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUocHJvcHMpIHtcclxuICAvL0kgY2FzdCBpdCB0byBudW1iZXIgc28gb2Z0ZW4gbWF5YmUgSSBzaG91bGQganVzdCBzYXZlIGl0IGhtXHJcbiAgY29uc3QgZGF0YUluZGV4ID0gcHJvcHNbXCJkYXRhLWluZGV4XCJdICYmIE51bWJlcihwcm9wc1tcImRhdGEtaW5kZXhcIl0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImdhbWUtY29udGFpbmVyIGNvbnRhaW5lciByb3VuZGVkIG15LTMgXCJcclxuICAgICAgZGF0YS1pbmRleD17cHJvcHNbXCJkYXRhLWluZGV4XCJdfVxyXG4gICAgICBvbkRyYWdTdGFydD17cHJvcHMub25EcmFnU3RhcnR9XHJcbiAgICAgIG9uRHJhZ092ZXI9e3Byb3BzLm9uRHJhZ092ZXJ9XHJcbiAgICAgIG9uRHJvcD17cHJvcHMub25Ecm9wfVxyXG4gICAgICBkcmFnZ2FibGU9e3Byb3BzLmRyYWdnYWJsZX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e2Bjb2wtMSAke3Byb3BzW1wiZGF0YS1pbmRleFwiXSAmJiBgcG9zLSR7ZGF0YUluZGV4ICsgMX1gfWB9PlxyXG4gICAgICAgICAge3Byb3BzW1wiZGF0YS1pbmRleFwiXSAmJiBkYXRhSW5kZXggKyAxICsgXCIuXCJ9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGdhbWUtaW1nIGNvbC1tZC0yICR7XHJcbiAgICAgICAgICAgIHByb3BzLmlzRWRpdGluZyA/IFwiY29sLTlcIiA6IFwiY29sLTExXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtwcm9wcy5nYW1lQ292ZXJVcmx9XHJcbiAgICAgICAgICAgIGFsdD17YENvdmVyIGFydCBmb3IgJHtwcm9wcy5nYW1lTmFtZX1gfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezkwfVxyXG4gICAgICAgICAgICB3aWR0aD17OTB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgZC1pbmxpbmUtYmxvY2sgbS1hdXRvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgY2hhbmdlLXBvcy1idXR0b25zIGQtbWQtbm9uZSAke1xyXG4gICAgICAgICAgICBwcm9wcy5pc0VkaXRpbmcgPyBcImNvbC0yXCIgOiBcImQtbm9uZVwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cHJvcHMuaXNFZGl0aW5nICYmIGRhdGFJbmRleCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhbmdlLXBvcy11cFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlUG9zaXRpb24oZGF0YUluZGV4LCBkYXRhSW5kZXggLSAxKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpLWNhcmV0LXVwLWZpbGxcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7cHJvcHMuaXNFZGl0aW5nICYmICFwcm9wcy5pc0xhc3QgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhbmdlLXBvcy1kb3duXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGFuZ2VQb3NpdGlvbihkYXRhSW5kZXgsIGRhdGFJbmRleCArIDEpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmktY2FyZXQtZG93bi1maWxsXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGdhbWUtbmFtZSBkLWlubGluZS1ibG9jayAke1xyXG4gICAgICAgICAgICBwcm9wcy5pc0VkaXRpbmcgPyBcImNvbC1tZC02XCIgOiBcImNvbC1tZC05XCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwPntwcm9wcy5nYW1lTmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtwcm9wcy5pc0VkaXRpbmcgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkRlbGV0ZShwcm9wcy5nYW1lSWQpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMyBidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlbGV0ZSA8aSBjbGFzc05hbWU9XCJiaS10cmFzaC1maWxsIG14LTFcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy9hZGQgYnV0dG9uIHNob3VsZCBvbmx5IGFwcGVhciBvbiBnYW1lcyBpbiBHYW1lU2VhcmNoQm94XHJcbiAgICAgICAgICAvL2RhdGEtaW5kZXggcHJvcCBpcyBvbmx5IGdpdmVuIHRvIGdhbWVzIGluIHRoZSBmYXZvcml0ZSBnYW1lIGxpc3RcclxuICAgICAgICAgIC8vdGhlcmVmb3JlIGlmIG5vIGRhdGEtaW5kZXgsIGl0cyBhIEdhbWVTZWFyY2hCb3ggZ2FtZVxyXG4gICAgICAgICAgIXByb3BzW1wiZGF0YS1pbmRleFwiXSAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkFkZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgZC1tZC1ub25lIHctMTAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCA8aSBjbGFzc05hbWU9XCJiaS1wbHVzLWNpcmNsZS1maWxsIG14LTFcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVTZWFyY2hCb3gocHJvcHMpIHtcclxuICAvL3NlYXJjaCB0ZXJtIGluIHNlYXJjaCBiYXJcclxuICBjb25zdCBbZGlzcGxheWVkU2VhcmNoVGVybSwgc2V0RGlzcGxheWVkU2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvL3RoZSBhY3R1YWwgdW5kZXJseWluZyBzZWFyY2ggdGVybSByZWdhcmRsZXNzIG9mIHdoYXRzIHR5cGVkXHJcbiAgLy9jbGlja2luZyBuZXh0L3ByZXYgd2lsbCBjaGFuZ2UgcGFnZXMgZm9yIHRoaXMgdmFsdWVcclxuICAvL2NsaWNraW5nIHNlYXJjaCBidXR0b24gd2lsbCBjaGFuZ2UgdGhpcyB2YWx1ZVxyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKGRpc3BsYXllZFNlYXJjaFRlcm0pO1xyXG4gIC8vcGFnZSBvZiBzZWFyY2ggcmVzdWx0c1xyXG4gIGNvbnN0IFtzZWFyY2hQYWdlLCBzZXRTZWFyY2hQYWdlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgLy9saXN0IG9mIG9iamVjdHMgdGhhdCB3aWxsIGJlIHJldHJpZXZlZCBmcm9tIHNlYXJjaCBhcGlcclxuICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy93aGV0aGVyIG9yIG5vdCBzZWFyY2ggcmVzdWx0cyBhcmUgY3VycmVudGx5IGxvYWRpbmdcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy9lcnJvciBtZXNzYWdlXHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vd2hldGhlciBvciBub3QgdGhlcmUgaXMgYSBuZXh0IHBhZ2Ugb2Ygc2VhcmNoIHJlc3VsdHNcclxuICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy91c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGl0cyBmaXJzdCByZW5kZXIgb3Igbm90XHJcbiAgY29uc3QgZmlyc3RSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhZ0dhbWUoZSwgZ2FtZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIsIEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcclxuICB9XHJcblxyXG4gIC8vZHJhZ292ZXIgaGFuZGxlciBpcyBuZWVkZWQgdG8gbWFrZSBlbGVtZW50XHJcbiAgLy9kcmFnZ2FibGVcclxuICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzcGxheWVkU2VhcmNoUmVzdWx0cyA9IHNlYXJjaFJlc3VsdHMubWFwKChnYW1lKSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBkcmFnZ2FibGU9e3RydWV9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXsoZSkgPT4gc3RhcnREcmFnR2FtZShlLCBnYW1lKX1cclxuICAgICAgb25EcmFnT3Zlcj17ZHJhZ092ZXJ9XHJcbiAgICAgIG9uQWRkPXsoKSA9PiBwcm9wcy5vbkFkZChnYW1lKX1cclxuICAgIC8+XHJcbiAgKSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgZGlzcGxheWVkIHNlYXJjaCB0ZXJtXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBzZXREaXNwbGF5ZWRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgc2VhcmNoVGVybSB0byBkaXNwbGF5ZWRTZWFyY2hUZXJtXHJcbiAgICogYW5kIGZldGNoZXMgc2VhcmNoIHJlc3VsdHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChkaXNwbGF5ZWRTZWFyY2hUZXJtID09PSBcIlwiKSByZXR1cm47XHJcbiAgICBzZXRTZWFyY2hUZXJtKGRpc3BsYXllZFNlYXJjaFRlcm0pO1xyXG4gICAgc2V0U2VhcmNoUGFnZSgwKTtcclxuICAgIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKGRpc3BsYXllZFNlYXJjaFRlcm0sIDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyBwYWdlIG51bWJlciBmb3Igc2VhcmNoVGVybVxyXG4gICAqIChub3QgZGlzcGxheWVkU2VhcmNoVGVybSkgYW5kIGZldGNoZXMgc2VhcmNoXHJcbiAgICogcmVzdWx0cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlTnVtYmVyIG5ldyBwYWdlIG51bWJlclxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGNoYW5nZVBhZ2UocGFnZU51bWJlcikge1xyXG4gICAgaWYgKHBhZ2VOdW1iZXIgPCAwKSByZXR1cm47XHJcbiAgICBzZXRTZWFyY2hQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gICAgZmV0Y2hBbmRQb3B1bGF0ZVNlYXJjaFJlc3VsdHMoc2VhcmNoVGVybSwgcGFnZU51bWJlcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaGVzIGEgc2VhcmNoIGZyb20gdGhlIEFQSSBhbmQgcG9wdWxhdGVzIHBhZ2VcclxuICAgKiB3aXRoIHNlYXJjaCByZXN1bHRzLiBUaGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIGNhbGxlZFxyXG4gICAqIHdpdGggYSBzZWFyY2ggdGVybSBhbmQgcGFnZSBtYW51YWxseSBpbnN0ZWFkIG9mIHJlbHlpbmcgb25cclxuICAgKiBjaGVja2luZyBzdGF0ZSBhcyByZWFkaW5nIHN0YXRlIGltbWVkaWF0ZWx5IGFmdGVyIHNldHRpbmcgaXRcclxuICAgKiB3aWxsIHJldHVybiBzdGFsZSB2YWx1ZXMuIFNvLCB3ZSBnaXZlIGl0IHRoZSBmcmVzaCB2YWx1ZXMgbWFudWFsbHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVybSBzZWFyY2ggdGVybVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIHNlYXJjaCBwYWdlIG51bWJlclxyXG4gICAqL1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKHRlcm0sIHBhZ2UpIHtcclxuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcXVlcnkgPSBgL2FwaS9zZWFyY2gvJHt0ZXJtfS8ke3BhZ2V9YDtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChxdWVyeSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBzZXRTZWFyY2hSZXN1bHRzKGRhdGEucmVzdWx0cyk7XHJcbiAgICAgICAgc2V0SGFzTmV4dChkYXRhLmhhc05leHQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShyZXN1bHRzLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoZS5tZXNzYWdlICsgXCJcXG5cIiArIG1zZyk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1zZWFyY2gtYm94IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHRzIGdhbWUtbGlzdCBvcmRlci0yIG9yZGVyLW1kLTFcIj5cclxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIDxwPntlcnJvck1lc3NhZ2V9PC9wPn1cclxuICAgICAgICB7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cclxuICAgICAgICB7ZGlzcGxheWVkU2VhcmNoUmVzdWx0c31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWJhciBvcmRlci0xIG9yZGVyLW1kLTJcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FtZS1zZWFyY2gtYmFyXCIgY2xhc3NOYW1lPVwiZC1ub25lXCI+XHJcbiAgICAgICAgICAgIE5hbWUgb2YgR2FtZVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImdhbWUtc2VhcmNoLWJhclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkaXNwbGF5ZWRTZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWUgb2YgR2FtZS4uLlwiXHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbWQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2Uoc2VhcmNoUGFnZSAtIDEpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc2Vjb25kYXJ5ICR7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hQYWdlID4gMCA/IFwidmlzaWJsZVwiIDogXCJpbnZpc2libGVcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUHJldlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFnZS1udW1iZXJcIiBjbGFzc05hbWU9XCJkLW5vbmVcIj5cclxuICAgICAgICAgICAgICBQYWdlOlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cInBhZ2UtbnVtYmVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlYXJjaFBhZ2UgPj0gMCA/IFwidmlzaWJsZVwiIDogXCJpbnZpc2libGVcIn1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFnZSArIDF9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2Uoc2VhcmNoUGFnZSArIDEpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc2Vjb25kYXJ5ICR7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hQYWdlID49IDAgJiYgaGFzTmV4dCA/IFwidmlzaWJsZVwiIDogXCJpbnZpc2libGVcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCIuL0Zvcm1GaWVsZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QocHJvcHMpIHtcclxuICByZXR1cm4gPGJ1dHRvbiBpZD17cHJvcHMuaWR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PjwvYnV0dG9uPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQsIEhpZGRlbkZpZWxkIH0gZnJvbSBcIi4vRm9ybUZpZWxkc1wiO1xyXG5pbXBvcnQgVGVzdCBmcm9tIFwiLi9UZXN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIGV4cGVjdGVkIHByb3BzOlxyXG4gKiAtIHVzZXJJZCB7bnVtYmVyfSB0aGUgbG9nZ2VkIGluIHVzZXIncyB1c2VyIGlkXHJcbiAqIC0gcHJvZmlsZVBpYyB7c3RyaW5nfSBzcmMgdXJsIGZvciB1c2VyJ3MgcHJvZmlsZSBwaWN0dXJlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb29sYmFyKHByb3BzKSB7XHJcbiAgY29uc3QgW3Nob3dEcm9wZG93biwgc2V0U2hvd0Ryb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUsIGVycm9ySW5mbykge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3JJbmZvKTtcclxuICAgIGlmIChlcnJvckluZm8pIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0b29sYmFyIG0tMFwiPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGlkPVwiVG9vbGJhci1Gb3JtXCJcclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgIHN1Ym1pdEJ0blRleHQ9XCJHbyFcIlxyXG4gICAgICAgIG1ldGhvZD1cImdldFwiXHJcbiAgICAgICAgYWN0aW9uPVwiL3NlYXJjaFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC05XCJcclxuICAgICAgICBidG5DbGFzcz1cImNvbC1tZC0xIGNvbC0yIHB0LTFcIlxyXG4gICAgICAgIGlubGluZT17dHJ1ZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgIG5hbWU9XCJxdWVyeVwiXHJcbiAgICAgICAgICB2YWx1ZT1cIlwiXHJcbiAgICAgICAgICBncm91cENsYXNzPVwiY29sLTEwIGNvbC1tZC0xMSBwdC0xXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxIaWRkZW5GaWVsZCBsYWJlbD1cIlBhZ2VcIiBuYW1lPVwicGFnZVwiIHZhbHVlPVwiMFwiIGdyb3VwQ2xhc3M9XCJkLm5vbmVcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLTMgcHQtMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci1vcHRpb25zXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtgL3VzZXIvJHtwcm9wcy51c2VySWR9YH0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLnByb2ZpbGVQaWN9XHJcbiAgICAgICAgICAgICAgYWx0PXtgWW91ciBwcm9maWxlIHBpY3R1cmVgfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI0NVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RHJvcGRvd24oIXNob3dEcm9wZG93bil9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tYnV0dG9uIG1sLTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktY2FyZXQtZG93bi1maWxsXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1jb250ZW50ICR7XHJcbiAgICAgICAgICAgICAgICBzaG93RHJvcGRvd24gPyBcImQtYmxvY2tcIiA6IFwiZC1ub25lXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9nb3V0XCIgY2xhc3NOYW1lPVwiZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBPdXRcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCJcbiAgICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgICBcIi91c2VyUGFnZVwiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxhZG5hblxcXFx3ZWItZGV2XFxcXG15LWdhbWUtcGFnZVxcXFxwYWdlc1xcXFx1c2VyUGFnZS5qc1wiKTtcbiAgICAgICAgfVxuICAgICAgXSk7XG4gICAgIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi45LjBcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cblxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNi45LjAnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTtcbi8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcblxuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIERvIG5vdCByZXF1aXJlIHRoaXMgbW9kdWxlIGRpcmVjdGx5ISBVc2Ugbm9ybWFsIGBpbnZhcmlhbnRgIGNhbGxzIHdpdGhcbi8vIHRlbXBsYXRlIGxpdGVyYWwgc3RyaW5ncy4gVGhlIG1lc3NhZ2VzIHdpbGwgYmUgY29udmVydGVkIHRvIFJlYWN0RXJyb3IgZHVyaW5nXG4vLyBidWlsZCwgYW5kIGluIHByb2R1Y3Rpb24gdGhleSB3aWxsIGJlIG1pbmlmaWVkLlxuXG4vLyBEbyBub3QgcmVxdWlyZSB0aGlzIG1vZHVsZSBkaXJlY3RseSEgVXNlIG5vcm1hbCBgaW52YXJpYW50YCBjYWxscyB3aXRoXG4vLyB0ZW1wbGF0ZSBsaXRlcmFsIHN0cmluZ3MuIFRoZSBtZXNzYWdlcyB3aWxsIGJlIGNvbnZlcnRlZCB0byBSZWFjdEVycm9yIGR1cmluZ1xuLy8gYnVpbGQsIGFuZCBpbiBwcm9kdWN0aW9uIHRoZXkgd2lsbCBiZSBtaW5pZmllZC5cblxuZnVuY3Rpb24gUmVhY3RFcnJvcihlcnJvcikge1xuICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICByZXR1cm4gZXJyb3I7XG59XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB3YXJuaW5nV2l0aG91dFN0YWNrID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmdXaXRob3V0U3RhY2soY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDgpIHtcbiAgICAgIC8vIENoZWNrIGJlZm9yZSB0aGUgY29uZGl0aW9uIHRvIGNhdGNoIHZpb2xhdGlvbnMgZWFybHkuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dhcm5pbmdXaXRob3V0U3RhY2soKSBjdXJyZW50bHkgc3VwcG9ydHMgYXQgbW9zdCA4IGFyZ3VtZW50cy4nKTtcbiAgICB9XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgICAgfSk7XG4gICAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTtcblxuICAgICAgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUuZXJyb3IsIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2skMSA9IHdhcm5pbmdXaXRob3V0U3RhY2s7XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgJy4nICsgY2FsbGVyTmFtZTtcbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuXG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgUmVhY3RFcnJvcihFcnJvcignc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJykpO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG5cbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcblxuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDtcbi8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHN1c3BlbnNlOiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBCRUZPUkVfU0xBU0hfUkUgPSAvXiguKilbXFxcXFxcL10vO1xuXG52YXIgZGVzY3JpYmVDb21wb25lbnRGcmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuICBpZiAoc291cmNlKSB7XG4gICAgdmFyIHBhdGggPSBzb3VyY2UuZmlsZU5hbWU7XG4gICAgdmFyIGZpbGVOYW1lID0gcGF0aC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuICAgIHtcbiAgICAgIC8vIEluIERFViwgaW5jbHVkZSBjb2RlIGZvciBhIGNvbW1vbiBzcGVjaWFsIGNhc2U6XG4gICAgICAvLyBwcmVmZXIgXCJmb2xkZXIvaW5kZXguanNcIiBpbnN0ZWFkIG9mIGp1c3QgXCJpbmRleC5qc1wiLlxuICAgICAgaWYgKC9eaW5kZXhcXC4vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHBhdGgubWF0Y2goQkVGT1JFX1NMQVNIX1JFKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuICAgICAgICAgIGlmIChwYXRoQmVmb3JlU2xhc2gpIHtcbiAgICAgICAgICAgIHZhciBmb2xkZXJOYW1lID0gcGF0aEJlZm9yZVNsYXNoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAgICAgICAgICBmaWxlTmFtZSA9IGZvbGRlck5hbWUgKyAnLycgKyBmaWxlTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc291cmNlSW5mbyA9ICcgKGF0ICcgKyBmaWxlTmFtZSArICc6JyArIHNvdXJjZS5saW5lTnVtYmVyICsgJyknO1xuICB9IGVsc2UgaWYgKG93bmVyTmFtZSkge1xuICAgIHNvdXJjZUluZm8gPSAnIChjcmVhdGVkIGJ5ICcgKyBvd25lck5hbWUgKyAnKSc7XG4gIH1cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufTtcblxudmFyIFJlc29sdmVkID0gMTtcblxuXG5mdW5jdGlvbiByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQobGF6eUNvbXBvbmVudCkge1xuICByZXR1cm4gbGF6eUNvbXBvbmVudC5fc3RhdHVzID09PSBSZXNvbHZlZCA/IGxhenlDb21wb25lbnQuX3Jlc3VsdCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyAnKCcgKyBmdW5jdGlvbk5hbWUgKyAnKScgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuQ29uc3VtZXInO1xuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHRoZW5hYmxlID0gdHlwZTtcbiAgICAgICAgICB2YXIgcmVzb2x2ZWRUaGVuYWJsZSA9IHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudCh0aGVuYWJsZSk7XG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcblxudmFyIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7XG5cbiAgICAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQudHlwZSk7XG4gICAgICB2YXIgb3duZXIgPSBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fb3duZXI7XG4gICAgICBzdGFjayArPSBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9zb3VyY2UsIG93bmVyICYmIGdldENvbXBvbmVudE5hbWUob3duZXIudHlwZSkpO1xuICAgIH1cblxuICAgIC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cblxudmFyIElzU29tZVJlbmRlcmVyQWN0aW5nID0ge1xuICBjdXJyZW50OiBmYWxzZVxufTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgSXNTb21lUmVuZGVyZXJBY3Rpbmc6IElzU29tZVJlbmRlcmVyQWN0aW5nLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgX2Fzc2lnbihSZWFjdFNoYXJlZEludGVybmFscywge1xuICAgIC8vIFRoZXNlIHNob3VsZCBub3QgYmUgaW5jbHVkZWQgaW4gcHJvZHVjdGlvbi5cbiAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lOiBSZWFjdERlYnVnQ3VycmVudEZyYW1lLFxuICAgIC8vIFNoaW0gZm9yIFJlYWN0IERPTSAxNi4wLjAgd2hpY2ggc3RpbGwgZGVzdHJ1Y3R1cmVkIChidXQgbm90IHVzZWQpIHRoaXMuXG4gICAgLy8gVE9ETzogcmVtb3ZlIGluIFJlYWN0IDE3LjAuXG4gICAgUmVhY3RDb21wb25lbnRUcmVlSG9vazoge31cbiAgfSk7XG59XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gd2FybmluZ1dpdGhvdXRTdGFjayQxO1xuXG57XG4gIHdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvd2FybmluZy1hbmQtaW52YXJpYW50LWFyZ3NcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxLmFwcGx5KHVuZGVmaW5lZCwgW2ZhbHNlLCBmb3JtYXQgKyAnJXMnXS5jb25jYXQoYXJncywgW3N0YWNrXSkpO1xuICB9O1xufVxuXG52YXIgd2FybmluZyQxID0gd2FybmluZztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcblxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdm9pZCAwO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIG5vIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcblxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcblxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTtcblxuICAgIC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pO1xuICAgIC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTtcbiAgICAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuXG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAgdmFyIHByb3BOYW1lID0gdm9pZCAwO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIHByb3BzID0ge307XG5cbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuXG4gIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgcmVmID0gY29uZmlnLnJlZjtcbiAgfVxuXG4gIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICB9XG5cbiAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgfVxuICB9XG5cbiAgLy8gaW50ZW50aW9uYWxseSBub3QgY2hlY2tpbmcgaWYga2V5IHdhcyBzZXQgYWJvdmVcbiAgLy8gdGhpcyBrZXkgaXMgaGlnaGVyIHByaW9yaXR5IGFzIGl0J3Mgc3RhdGljXG4gIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgfVxuXG4gIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSB8fCByZWYpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG4gICAgaWYgKGtleSkge1xuICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gICAgaWYgKHJlZikge1xuICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZSA9IHZvaWQgMDtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBwcm9wcyA9IHt9O1xuXG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlO1xuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIFJlYWN0RWxlbWVudHMgb2YgYSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVmYWN0b3J5XG4gKi9cblxuXG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgUmVhY3RFcnJvcihFcnJvcignUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgJyArIGVsZW1lbnQgKyAnLicpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgdmFyIHByb3BOYW1lID0gdm9pZCAwO1xuXG4gIC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjtcbiAgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmO1xuICAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTtcblxuICAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdm9pZCAwO1xuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG5cbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuXG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuXG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xuXG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuICgnJyArIHRleHQpLnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cblxudmFyIFBPT0xfU0laRSA9IDEwO1xudmFyIHRyYXZlcnNlQ29udGV4dFBvb2wgPSBbXTtcbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGggPCBQT09MX1NJWkUpIHtcbiAgICB0cmF2ZXJzZUNvbnRleHRQb29sLnB1c2godHJhdmVyc2VDb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgbmFtZVNvRmFyLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sodHJhdmVyc2VDb250ZXh0LCBjaGlsZHJlbixcbiAgICAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkID0gdm9pZCAwO1xuICB2YXIgbmV4dE5hbWUgPSB2b2lkIDA7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICAhZGlkV2FybkFib3V0TWFwcyA/IHdhcm5pbmckMShmYWxzZSwgJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgdW5zdXBwb3J0ZWQgYW5kIHdpbGwgbGlrZWx5IHlpZWxkICcgKyAndW5leHBlY3RlZCByZXN1bHRzLiBDb252ZXJ0IGl0IHRvIGEgc2VxdWVuY2UvaXRlcmFibGUgb2Yga2V5ZWQgJyArICdSZWFjdEVsZW1lbnRzIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwID0gdm9pZCAwO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRocm93IFJlYWN0RXJyb3IoRXJyb3IoJ09iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogJyArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgJykuJyArIGFkZGVuZHVtKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQgIT09IG51bGwgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgfVxuICAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG4gIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChudWxsLCBudWxsLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoU2luZ2xlQ2hpbGQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dChib29rS2VlcGluZywgY2hpbGQsIGNoaWxkS2V5KSB7XG4gIHZhciByZXN1bHQgPSBib29rS2VlcGluZy5yZXN1bHQsXG4gICAgICBrZXlQcmVmaXggPSBib29rS2VlcGluZy5rZXlQcmVmaXgsXG4gICAgICBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG5cbiAgdmFyIG1hcHBlZENoaWxkID0gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCxcbiAgICAgIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgIGtleVByZWZpeCArIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQoYXJyYXksIGVzY2FwZWRQcmVmaXgsIGZ1bmMsIGNvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIG51bGwpO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgUmVhY3RFcnJvcihFcnJvcignUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuJykpO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgIShjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gbnVsbCB8fCB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09ICdmdW5jdGlvbicpID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG5cbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuXG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9O1xuICAgIC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcbiAgICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX2N0b3I6IGN0b3IsXG4gICAgLy8gUmVhY3QgdXNlcyB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBudWxsXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdm9pZCAwO1xuICAgIHZhciBwcm9wVHlwZXMgPSB2b2lkIDA7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7XG4gICAgICAgICAgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlcztcbiAgICAgICAgICAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICEoXG4gICAgICAvLyBEbyBub3Qgd2FybiBmb3IgMCBhcmd1bWVudHMgYmVjYXVzZSBpdCBjb3VsZCBiZSBkdWUgdG8gdXNhZ2Ugb2YgdGhlICdhcmd1bWVudHMnIG9iamVjdFxuICAgICAgcmVuZGVyLmxlbmd0aCA9PT0gMCB8fCByZW5kZXIubGVuZ3RoID09PSAyKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgICEocmVuZGVyLmRlZmF1bHRQcm9wcyA9PSBudWxsICYmIHJlbmRlci5wcm9wVHlwZXMgPT0gbnVsbCkgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUpO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgICAge1xuICAgICAgICB0aHJvdyBSZWFjdEVycm9yKEVycm9yKCdJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC1pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uJykpO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAge1xuICAgICEodW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSB1bmRlZmluZWQpID8gd2FybmluZyQxKGZhbHNlLCAndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJykgOiB2b2lkIDA7XG5cbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDtcbiAgICAgIC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuXG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuXG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuXG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG52YXIgZW1wdHlPYmplY3QkMSA9IHt9O1xuXG5mdW5jdGlvbiB1c2VSZXNwb25kZXIocmVzcG9uZGVyLCBsaXN0ZW5lclByb3BzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAge1xuICAgIGlmIChyZXNwb25kZXIgPT0gbnVsbCB8fCByZXNwb25kZXIuJCR0eXBlb2YgIT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFKSB7XG4gICAgICB3YXJuaW5nJDEoZmFsc2UsICd1c2VSZXNwb25kZXI6IGludmFsaWQgZmlyc3QgYXJndW1lbnQuIEV4cGVjdGVkIGFuIGV2ZW50IHJlc3BvbmRlciwgYnV0IGluc3RlYWQgZ290ICVzJywgcmVzcG9uZGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVzcG9uZGVyKHJlc3BvbmRlciwgbGlzdGVuZXJQcm9wcyB8fCBlbXB0eU9iamVjdCQxKTtcbn1cblxuLy8gV2l0aGluIHRoZSBzY29wZSBvZiB0aGUgY2FsbGJhY2ssIG1hcmsgYWxsIHVwZGF0ZXMgYXMgYmVpbmcgYWxsb3dlZCB0byBzdXNwZW5kLlxuZnVuY3Rpb24gd2l0aFN1c3BlbnNlQ29uZmlnKHNjb3BlLCBjb25maWcpIHtcbiAgdmFyIHByZXZpb3VzQ29uZmlnID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcuc3VzcGVuc2U7XG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnN1c3BlbnNlID0gY29uZmlnID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnO1xuICB0cnkge1xuICAgIHNjb3BlKCk7XG4gIH0gZmluYWxseSB7XG4gICAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcuc3VzcGVuc2UgPSBwcmV2aW91c0NvbmZpZztcbiAgfVxufVxuXG4vKipcbiAqIFJlYWN0RWxlbWVudFZhbGlkYXRvciBwcm92aWRlcyBhIHdyYXBwZXIgYXJvdW5kIGEgZWxlbWVudCBmYWN0b3J5XG4gKiB3aGljaCB2YWxpZGF0ZXMgdGhlIHByb3BzIHBhc3NlZCB0byB0aGUgZWxlbWVudC4gVGhpcyBpcyBpbnRlbmRlZCB0byBiZVxuICogdXNlZCBvbmx5IGluIERFViBhbmQgY291bGQgYmUgcmVwbGFjZWQgYnkgYSBzdGF0aWMgdHlwZSBjaGVja2VyIGZvciBsYW5ndWFnZXNcbiAqIHRoYXQgc3VwcG9ydCBpdC5cbiAqL1xuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSAnXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8JyArIHBhcmVudE5hbWUgKyAnPi4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5mbztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcblxuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTtcblxuICAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gJyBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSAnICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArICcuJztcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuICB7XG4gICAgd2FybmluZyQxKGZhbHNlLCAnRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG4gIH1cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG5cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXAgPSB2b2lkIDA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICB2YXIgcHJvcFR5cGVzID0gdm9pZCAwO1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHxcbiAgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvcFR5cGVzKSB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG4gICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZnJhZ21lbnQpO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7XG5cbiAgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nID0gdm9pZCAwO1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJzwnICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgJyAvPic7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpO1xuXG4gIC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb3BzLmtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgd2FybmluZyQxKGZhbHNlLCAnUmVhY3QuanN4OiBTcHJlYWRpbmcgYSBrZXkgdG8gSlNYIGlzIGEgZGVwcmVjYXRlZCBwYXR0ZXJuLiAnICsgJ0V4cGxpY2l0bHkgcGFzcyBhIGtleSBhZnRlciBzcHJlYWRpbmcgcHJvcHMgaW4geW91ciBKU1ggY2FsbC4gJyArICdFLmcuIDxDb21wb25lbnROYW1lIHsuLi5wcm9wc30ga2V5PXtrZXl9IC8+Jyk7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG4vLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcbi8vIGV2ZW4gd2l0aCB0aGUgcHJvZCB0cmFuc2Zvcm0uIFRoaXMgbWVhbnMgdGhhdCBqc3hERVYgaXMgcHVyZWx5XG4vLyBvcHQtaW4gYmVoYXZpb3IgZm9yIGJldHRlciBtZXNzYWdlcyBidXQgdGhhdCB3ZSB3b24ndCBzdG9wXG4vLyBnaXZpbmcgeW91IHdhcm5pbmdzIGlmIHlvdSB1c2UgcHJvZHVjdGlvbiBhcGlzLlxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25TdGF0aWModHlwZSwgcHJvcHMsIGtleSkge1xuICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTtcblxuICAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nID0gdm9pZCAwO1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJzwnICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgJyAvPic7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcbiAgLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuICB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxudmFyIGhhc0JhZE1hcFBvbHlmaWxsID0gdm9pZCAwO1xuXG57XG4gIGhhc0JhZE1hcFBvbHlmaWxsID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIHZhciB0ZXN0TWFwID0gbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICB2YXIgdGVzdFNldCA9IG5ldyBTZXQoW2Zyb3plbk9iamVjdF0pO1xuICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBSb2xsdXAgdG8gbm90IGNvbnNpZGVyIHRoZXNlIHVudXNlZC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3JvbGx1cC9pc3N1ZXMvMTc3MVxuICAgIC8vIFRPRE86IHdlIGNhbiByZW1vdmUgdGhlc2UgaWYgUm9sbHVwIGZpeGVzIHRoZSBidWcuXG4gICAgdGVzdE1hcC5zZXQoMCwgMCk7XG4gICAgdGVzdFNldC5hZGQoMCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBUT0RPOiBDb25zaWRlciB3YXJuaW5nIGFib3V0IGJhZCBwb2x5ZmlsbHNcbiAgICBoYXNCYWRNYXBQb2x5ZmlsbCA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnVuZGFtZW50YWxDb21wb25lbnQoaW1wbCkge1xuICAvLyBXZSB1c2UgcmVzcG9uZGVyIGFzIGEgTWFwIGtleSBsYXRlciBvbi4gV2hlbiB3ZSBoYXZlIGEgYmFkXG4gIC8vIHBvbHlmaWxsLCB0aGVuIHdlIGNhbid0IHVzZSBpdCBhcyBhIGtleSBhcyB0aGUgcG9seWZpbGwgdHJpZXNcbiAgLy8gdG8gYWRkIGEgcHJvcGVydHkgdG8gdGhlIG9iamVjdC5cbiAgaWYgKHRydWUgJiYgIWhhc0JhZE1hcFBvbHlmaWxsKSB7XG4gICAgT2JqZWN0LmZyZWV6ZShpbXBsKTtcbiAgfVxuICB2YXIgZnVuZGFtYW50YWxDb21wb25lbnQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUsXG4gICAgaW1wbDogaW1wbFxuICB9O1xuICB7XG4gICAgT2JqZWN0LmZyZWV6ZShmdW5kYW1hbnRhbENvbXBvbmVudCk7XG4gIH1cbiAgcmV0dXJuIGZ1bmRhbWFudGFsQ29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudFJlc3BvbmRlcihkaXNwbGF5TmFtZSwgcmVzcG9uZGVyQ29uZmlnKSB7XG4gIHZhciBnZXRJbml0aWFsU3RhdGUgPSByZXNwb25kZXJDb25maWcuZ2V0SW5pdGlhbFN0YXRlLFxuICAgICAgb25FdmVudCA9IHJlc3BvbmRlckNvbmZpZy5vbkV2ZW50LFxuICAgICAgb25Nb3VudCA9IHJlc3BvbmRlckNvbmZpZy5vbk1vdW50LFxuICAgICAgb25Vbm1vdW50ID0gcmVzcG9uZGVyQ29uZmlnLm9uVW5tb3VudCxcbiAgICAgIG9uT3duZXJzaGlwQ2hhbmdlID0gcmVzcG9uZGVyQ29uZmlnLm9uT3duZXJzaGlwQ2hhbmdlLFxuICAgICAgb25Sb290RXZlbnQgPSByZXNwb25kZXJDb25maWcub25Sb290RXZlbnQsXG4gICAgICByb290RXZlbnRUeXBlcyA9IHJlc3BvbmRlckNvbmZpZy5yb290RXZlbnRUeXBlcyxcbiAgICAgIHRhcmdldEV2ZW50VHlwZXMgPSByZXNwb25kZXJDb25maWcudGFyZ2V0RXZlbnRUeXBlcztcblxuICB2YXIgZXZlbnRSZXNwb25kZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1JFU1BPTkRFUl9UWVBFLFxuICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSxcbiAgICBnZXRJbml0aWFsU3RhdGU6IGdldEluaXRpYWxTdGF0ZSB8fCBudWxsLFxuICAgIG9uRXZlbnQ6IG9uRXZlbnQgfHwgbnVsbCxcbiAgICBvbk1vdW50OiBvbk1vdW50IHx8IG51bGwsXG4gICAgb25Pd25lcnNoaXBDaGFuZ2U6IG9uT3duZXJzaGlwQ2hhbmdlIHx8IG51bGwsXG4gICAgb25Sb290RXZlbnQ6IG9uUm9vdEV2ZW50IHx8IG51bGwsXG4gICAgb25Vbm1vdW50OiBvblVubW91bnQgfHwgbnVsbCxcbiAgICByb290RXZlbnRUeXBlczogcm9vdEV2ZW50VHlwZXMgfHwgbnVsbCxcbiAgICB0YXJnZXRFdmVudFR5cGVzOiB0YXJnZXRFdmVudFR5cGVzIHx8IG51bGxcbiAgfTtcbiAgLy8gV2UgdXNlIHJlc3BvbmRlciBhcyBhIE1hcCBrZXkgbGF0ZXIgb24uIFdoZW4gd2UgaGF2ZSBhIGJhZFxuICAvLyBwb2x5ZmlsbCwgdGhlbiB3ZSBjYW4ndCB1c2UgaXQgYXMgYSBrZXkgYXMgdGhlIHBvbHlmaWxsIHRyaWVzXG4gIC8vIHRvIGFkZCBhIHByb3BlcnR5IHRvIHRoZSBvYmplY3QuXG4gIGlmICh0cnVlICYmICFoYXNCYWRNYXBQb2x5ZmlsbCkge1xuICAgIE9iamVjdC5mcmVlemUoZXZlbnRSZXNwb25kZXIpO1xuICB9XG4gIHJldHVybiBldmVudFJlc3BvbmRlcjtcbn1cblxuLy8gSGVscHMgaWRlbnRpZnkgc2lkZSBlZmZlY3RzIGluIGJlZ2luLXBoYXNlIGxpZmVjeWNsZSBob29rcyBhbmQgc2V0U3RhdGUgcmVkdWNlcnM6XG5cblxuLy8gSW4gc29tZSBjYXNlcywgU3RyaWN0TW9kZSBzaG91bGQgYWxzbyBkb3VibGUtcmVuZGVyIGxpZmVjeWNsZXMuXG4vLyBUaGlzIGNhbiBiZSBjb25mdXNpbmcgZm9yIHRlc3RzIHRob3VnaCxcbi8vIEFuZCBpdCBjYW4gYmUgYmFkIGZvciBwZXJmb3JtYW5jZSBpbiBwcm9kdWN0aW9uLlxuLy8gVGhpcyBmZWF0dXJlIGZsYWcgY2FuIGJlIHVzZWQgdG8gY29udHJvbCB0aGUgYmVoYXZpb3I6XG5cblxuLy8gVG8gcHJlc2VydmUgdGhlIFwiUGF1c2Ugb24gY2F1Z2h0IGV4Y2VwdGlvbnNcIiBiZWhhdmlvciBvZiB0aGUgZGVidWdnZXIsIHdlXG4vLyByZXBsYXkgdGhlIGJlZ2luIHBoYXNlIG9mIGEgZmFpbGVkIGNvbXBvbmVudCBpbnNpZGUgaW52b2tlR3VhcmRlZENhbGxiYWNrLlxuXG5cbi8vIFdhcm4gYWJvdXQgZGVwcmVjYXRlZCwgYXN5bmMtdW5zYWZlIGxpZmVjeWNsZXM7IHJlbGF0ZXMgdG8gUkZDICM2OlxuXG5cbi8vIEdhdGhlciBhZHZhbmNlZCB0aW1pbmcgbWV0cmljcyBmb3IgUHJvZmlsZXIgc3VidHJlZXMuXG5cblxuLy8gVHJhY2Ugd2hpY2ggaW50ZXJhY3Rpb25zIHRyaWdnZXIgZWFjaCBjb21taXQuXG5cblxuLy8gT25seSB1c2VkIGluIHd3dyBidWlsZHMuXG4gLy8gVE9ETzogdHJ1ZT8gSGVyZSBpdCBtaWdodCBqdXN0IGJlIGZhbHNlLlxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBEaXNhYmxlIGphdmFzY3JpcHQ6IFVSTCBzdHJpbmdzIGluIGhyZWYgZm9yIFhTUyBwcm90ZWN0aW9uLlxuXG5cbi8vIFJlYWN0IEZpcmU6IHByZXZlbnQgdGhlIHZhbHVlIGFuZCBjaGVja2VkIGF0dHJpYnV0ZXMgZnJvbSBzeW5jaW5nXG4vLyB3aXRoIHRoZWlyIHJlbGF0ZWQgRE9NIHByb3BlcnRpZXNcblxuXG4vLyBUaGVzZSBBUElzIHdpbGwgbm8gbG9uZ2VyIGJlIFwidW5zdGFibGVcIiBpbiB0aGUgdXBjb21pbmcgMTYuNyByZWxlYXNlLFxuLy8gQ29udHJvbCB0aGlzIGJlaGF2aW9yIHdpdGggYSBmbGFnIHRvIHN1cHBvcnQgMTYuNiBtaW5vciByZWxlYXNlcyBpbiB0aGUgbWVhbndoaWxlLlxuXG5cblxuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LW5hdGl2ZS1jb21tdW5pdHkvZGlzY3Vzc2lvbnMtYW5kLXByb3Bvc2Fscy9pc3N1ZXMvNzIgZm9yIG1vcmUgaW5mb3JtYXRpb25cbi8vIFRoaXMgaXMgYSBmbGFnIHNvIHdlIGNhbiBmaXggd2FybmluZ3MgaW4gUk4gY29yZSBiZWZvcmUgdHVybmluZyBpdCBvblxuXG5cbi8vIEV4cGVyaW1lbnRhbCBSZWFjdCBGbGFyZSBldmVudCBzeXN0ZW0gYW5kIGV2ZW50IGNvbXBvbmVudHMgc3VwcG9ydC5cbnZhciBlbmFibGVGbGFyZUFQSSA9IGZhbHNlO1xuXG4vLyBFeHBlcmltZW50YWwgSG9zdCBDb21wb25lbnQgc3VwcG9ydC5cbnZhciBlbmFibGVGdW5kYW1lbnRhbEFQSSA9IGZhbHNlO1xuXG4vLyBOZXcgQVBJIGZvciBKU1ggdHJhbnNmb3JtcyB0byB0YXJnZXQgLSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG52YXIgZW5hYmxlSlNYVHJhbnNmb3JtQVBJID0gZmFsc2U7XG5cbi8vIFdlIHdpbGwgZW5mb3JjZSBtb2NraW5nIHNjaGVkdWxlciB3aXRoIHNjaGVkdWxlci91bnN0YWJsZV9tb2NrIGF0IHNvbWUgcG9pbnQuICh2MTc/KVxuLy8gVGlsbCB0aGVuLCB3ZSB3YXJuIGFib3V0IHRoZSBtaXNzaW5nIG1vY2ssIGJ1dCBzdGlsbCBmYWxsYmFjayB0byBhIHN5bmMgbW9kZSBjb21wYXRpYmxlIHZlcnNpb25cblxuLy8gVGVtcG9yYXJ5IGZsYWcgdG8gcmV2ZXJ0IHRoZSBmaXggaW4gIzE1NjUwXG5cblxuLy8gRm9yIHRlc3RzLCB3ZSBmbHVzaCBzdXNwZW5zZSBmYWxsYmFja3MgaW4gYW4gYWN0IHNjb3BlO1xuLy8gKmV4Y2VwdCogaW4gc29tZSBvZiBvdXIgb3duIHRlc3RzLCB3aGVyZSB3ZSB0ZXN0IGluY3JlbWVudGFsIGxvYWRpbmcgc3RhdGVzLlxuXG5cbi8vIENoYW5nZXMgcHJpb3JpdHkgb2Ygc29tZSBldmVudHMgbGlrZSBtb3VzZW1vdmUgdG8gdXNlci1ibG9ja2luZyBwcmlvcml0eSxcbi8vIGJ1dCB3aXRob3V0IG1ha2luZyB0aGVtIGRpc2NyZXRlLiBUaGUgZmxhZyBleGlzdHMgaW4gY2FzZSBpdCBjYXVzZXNcbi8vIHN0YXJ2YXRpb24gcHJvYmxlbXMuXG5cblxuLy8gQWRkIGEgY2FsbGJhY2sgcHJvcGVydHkgdG8gc3VzcGVuc2UgdG8gbm90aWZ5IHdoaWNoIHByb21pc2VzIGFyZSBjdXJyZW50bHlcbi8vIGluIHRoZSB1cGRhdGUgcXVldWUuIFRoaXMgYWxsb3dzIHJlcG9ydGluZyBhbmQgdHJhY2luZyBvZiB3aGF0IGlzIGNhdXNpbmdcbi8vIHRoZSB1c2VyIHRvIHNlZSBhIGxvYWRpbmcgc3RhdGUuXG5cblxuLy8gUGFydCBvZiB0aGUgc2ltcGxpZmljYXRpb24gb2YgUmVhY3QuY3JlYXRlRWxlbWVudCBzbyB3ZSBjYW4gZXZlbnR1YWxseSBtb3ZlXG4vLyBmcm9tIFJlYWN0LmNyZWF0ZUVsZW1lbnQgdG8gUmVhY3QuanN4XG4vLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL2Jsb2IvY3JlYXRlbGVtZW50LXJmYy90ZXh0LzAwMDAtY3JlYXRlLWVsZW1lbnQtY2hhbmdlcy5tZFxuXG52YXIgUmVhY3QgPSB7XG4gIENoaWxkcmVuOiB7XG4gICAgbWFwOiBtYXBDaGlsZHJlbixcbiAgICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gICAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gICAgdG9BcnJheTogdG9BcnJheSxcbiAgICBvbmx5OiBvbmx5Q2hpbGRcbiAgfSxcblxuICBjcmVhdGVSZWY6IGNyZWF0ZVJlZixcbiAgQ29tcG9uZW50OiBDb21wb25lbnQsXG4gIFB1cmVDb21wb25lbnQ6IFB1cmVDb21wb25lbnQsXG5cbiAgY3JlYXRlQ29udGV4dDogY3JlYXRlQ29udGV4dCxcbiAgZm9yd2FyZFJlZjogZm9yd2FyZFJlZixcbiAgbGF6eTogbGF6eSxcbiAgbWVtbzogbWVtbyxcblxuICB1c2VDYWxsYmFjazogdXNlQ2FsbGJhY2ssXG4gIHVzZUNvbnRleHQ6IHVzZUNvbnRleHQsXG4gIHVzZUVmZmVjdDogdXNlRWZmZWN0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlOiB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VEZWJ1Z1ZhbHVlOiB1c2VEZWJ1Z1ZhbHVlLFxuICB1c2VMYXlvdXRFZmZlY3Q6IHVzZUxheW91dEVmZmVjdCxcbiAgdXNlTWVtbzogdXNlTWVtbyxcbiAgdXNlUmVkdWNlcjogdXNlUmVkdWNlcixcbiAgdXNlUmVmOiB1c2VSZWYsXG4gIHVzZVN0YXRlOiB1c2VTdGF0ZSxcblxuICBGcmFnbWVudDogUkVBQ1RfRlJBR01FTlRfVFlQRSxcbiAgUHJvZmlsZXI6IFJFQUNUX1BST0ZJTEVSX1RZUEUsXG4gIFN0cmljdE1vZGU6IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUsXG4gIFN1c3BlbnNlOiBSRUFDVF9TVVNQRU5TRV9UWVBFLFxuICB1bnN0YWJsZV9TdXNwZW5zZUxpc3Q6IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSxcblxuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNsb25lRWxlbWVudDogY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNyZWF0ZUZhY3Rvcnk6IGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbixcbiAgaXNWYWxpZEVsZW1lbnQ6IGlzVmFsaWRFbGVtZW50LFxuXG4gIHZlcnNpb246IFJlYWN0VmVyc2lvbixcblxuICB1bnN0YWJsZV93aXRoU3VzcGVuc2VDb25maWc6IHdpdGhTdXNwZW5zZUNvbmZpZyxcblxuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDogUmVhY3RTaGFyZWRJbnRlcm5hbHNcbn07XG5cbmlmIChlbmFibGVGbGFyZUFQSSkge1xuICBSZWFjdC51bnN0YWJsZV91c2VSZXNwb25kZXIgPSB1c2VSZXNwb25kZXI7XG4gIFJlYWN0LnVuc3RhYmxlX2NyZWF0ZVJlc3BvbmRlciA9IGNyZWF0ZUV2ZW50UmVzcG9uZGVyO1xufVxuXG5pZiAoZW5hYmxlRnVuZGFtZW50YWxBUEkpIHtcbiAgUmVhY3QudW5zdGFibGVfY3JlYXRlRnVuZGFtZW50YWwgPSBjcmVhdGVGdW5kYW1lbnRhbENvbXBvbmVudDtcbn1cblxuLy8gTm90ZTogc29tZSBBUElzIGFyZSBhZGRlZCB3aXRoIGZlYXR1cmUgZmxhZ3MuXG4vLyBNYWtlIHN1cmUgdGhhdCBzdGFibGUgYnVpbGRzIGZvciBvcGVuIHNvdXJjZVxuLy8gZG9uJ3QgbW9kaWZ5IHRoZSBSZWFjdCBvYmplY3QgdG8gYXZvaWQgZGVvcHRzLlxuLy8gQWxzbyBsZXQncyBub3QgZXhwb3NlIHRoZWlyIG5hbWVzIGluIHN0YWJsZSBidWlsZHMuXG5cbmlmIChlbmFibGVKU1hUcmFuc2Zvcm1BUEkpIHtcbiAge1xuICAgIFJlYWN0LmpzeERFViA9IGpzeFdpdGhWYWxpZGF0aW9uO1xuICAgIFJlYWN0LmpzeCA9IGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYztcbiAgICBSZWFjdC5qc3hzID0ganN4V2l0aFZhbGlkYXRpb25TdGF0aWM7XG4gIH1cbn1cblxuXG5cbnZhciBSZWFjdCQyID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGRlZmF1bHQ6IFJlYWN0XG59KTtcblxudmFyIFJlYWN0JDMgPSAoIFJlYWN0JDIgJiYgUmVhY3QgKSB8fCBSZWFjdCQyO1xuXG4vLyBUT0RPOiBkZWNpZGUgb24gdGhlIHRvcC1sZXZlbCBleHBvcnQgZm9ybS5cbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdC5cbnZhciByZWFjdCA9IFJlYWN0JDMuZGVmYXVsdCB8fCBSZWFjdCQzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWN0O1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FtZVwiO1xyXG5pbXBvcnQgR2FtZVNlYXJjaEJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9HYW1lU2VhcmNoQm94XCI7XHJcblxyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub29sYmFyXCI7XHJcblxyXG4vKipcclxuICpcclxuICogVGhlIHBhZ2UgdGhhdCBpcyBkaXNwbGF5ZWQgd2hlblxyXG4gKiB2aWV3aW5nIGEgdXNlcidzIHByb2ZpbGVcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclBhZ2UocHJvcHMpIHtcclxuICAvKiBzZXR0aW5nIHN0YXRlICovXHJcbiAgLy90aGUgdXNlcidzIGFjdHVhbCBmYXZvcml0ZSBnYW1lc1xyXG4gIGNvbnN0IFtmYXZvcml0ZUdhbWVzLCBzZXRGYXZvcml0ZUdhbWVzXSA9IHVzZVN0YXRlKHByb3BzLmdhbWVzKTtcclxuICAvL3RoZSB1c2VyJ3MgZmF2b3JpdGUgZ2FtZSBhcyBjdXJyZW50bHkgZGlzcGxheWVkLiB0aGVzZSBtYXkgZGlmZmVyXHJcbiAgLy9mcm9tIGFjdHVhbCBmYXZvcml0ZSBnYW1lcyBkdXJpbmcgZWRpdGluZ1xyXG4gIGNvbnN0IFtkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLCBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXSA9IHVzZVN0YXRlKFxyXG4gICAgZmF2b3JpdGVHYW1lc1xyXG4gICk7XHJcbiAgLy93aGV0aGVyIG9yIG5vdCB1c2VyIGlzIGVkaXRpbmcgZmF2b3JpdGUgZ2FtZXNcclxuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIGEgR2FtZSBpcyBkcmFnZ2VkLiBBZGRzXHJcbiAgICogdGhlIEdhbWUncyBkYXRhLWluZGV4IGF0dHJpYnV0ZSB0b1xyXG4gICAqIERyYWdFdmVudC5kYXRhVHJhbnNmZXIgdG8gYmUgdXNlZCBieVxyXG4gICAqIGRyb3BHYW1lKCkgbGF0ZXIgb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gc3RhcnREcmFnR2FtZShlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLy9kcmFnb3ZlciBoYW5kbGVyIGlzIG5lZWRlZCB0byBtYWtlIGVsZW1lbnRcclxuICAvL2RyYWdnYWJsZVxyXG4gIGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRyYWdnZWQgZ2FtZSB3aWxsIGJlIHN3YXBwZWQgd2l0aCB0aGUgZ2FtZVxyXG4gICAqIGl0J3MgZHJvcHBlZCBvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZHJvcEdhbWVPbkdhbWUoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBuZXdGYXZlR2FtZXMgPSBbLi4uZGlzcGxheWVkRmF2b3JpdGVHYW1lc107XHJcbiAgICBjb25zdCBuZXdHYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAvL2luZGV4IG9mIGdhbWUgdGhhdCB3YXMgZHJvcHBlZCBvblxyXG4gICAgY29uc3QgZHJvcFRhcmdldCA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCk7XHJcbiAgICAvL2RhdGFUcmFuc2ZlciB3aWxsIGNvbnRhaW4gYSBqcyBvYmplY3QgaWYgdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZFxyXG4gICAgLy9pcyBmcm9tIHNlYXJjaCByZXN1bHRzLCBtZWFuaW5nIGEgbmV3IGdhbWUgaXMgYmVpbmcgYWRkZWRcclxuICAgIC8vdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAgIGlmIChuZXdHYW1lKSB7XHJcbiAgICAgIGNvbnN0IG5ld0dhbWVBc09iamVjdCA9IEpTT04ucGFyc2UobmV3R2FtZSk7XHJcbiAgICAgIGlmIChnYW1lQWxyZWFkeUV4aXN0cyhuZXdHYW1lQXNPYmplY3QpKSByZXR1cm47XHJcbiAgICAgIC8vd2UgcmVwbGFjZSBlbGVtZW50cyBhcyB3ZSBnbywgZXZlbnR1YWxseSB3ZSBhbiBlbGVtZW50IHRvIG5ld0ZhdmVHYW1lc1tuZXdGYXZlR2FtZXMubGVuZ3RoXVxyXG4gICAgICAvL3RoaXMgaW5jcmVhc2VzIHRoZSBsZW5ndGggYW5kIHRoZSBsb29wIGdvZXMgb24gZm9yZXZlclxyXG4gICAgICAvL3NvIHdlIGtlZXAgdGhlIGxlbmd0aCBvZiB0aGUgbGlzdCBiZWZvcmUgd2Ugc3RhcnRcclxuICAgICAgY29uc3QgbGVuZ3RoID0gbmV3RmF2ZUdhbWVzLmxlbmd0aDtcclxuICAgICAgLy9nYW1lIHRvIGJlIGFkZGVkIGluXHJcbiAgICAgIGxldCBob2xkZXIgPSBuZXdHYW1lQXNPYmplY3Q7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gaWYgKG5ld0ZhdmVHYW1lc1tpXSAmJiBuZXdGYXZlR2FtZXNbaV0uaWQgPT09IG5ld0dhbWVBc09iamVjdC5pZClcclxuICAgICAgICAvLyAgIHJldHVybjtcclxuICAgICAgICAvL3N0YXJ0IHN3YXBwaW5nIGZyb20gZHJvcFRhcmdldCBvbndhcmRzXHJcbiAgICAgICAgaWYgKGkgPj0gZHJvcFRhcmdldCkge1xyXG4gICAgICAgICAgLy9wdXQgaG9sZGVyIGludG8gdGhlIGxpc3QsIHRha2Ugd2hhdCB3YXMgdGhlcmUgYW5kIHB1dCBpbnRvIGhvbGRlclxyXG4gICAgICAgICAgY29uc3QgdGVtcCA9IG5ld0ZhdmVHYW1lc1tpXTtcclxuICAgICAgICAgIG5ld0ZhdmVHYW1lc1tpXSA9IGhvbGRlcjtcclxuICAgICAgICAgIGhvbGRlciA9IHRlbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2lmIHRoZXJlIGlzIG5vIGpzIG9iamVjdCwgdGhlbiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkIGlzIGFuIGFscmVhZHlcclxuICAgIC8vZXhpc3RpbmcgZ2FtZSBzbyB3ZSBqdXN0IHN3YXAgcGxhY2VzXHJcbiAgICBlbHNlIHtcclxuICAgICAgLy90aGUgZ2FtZSB0aGF0IHdhcyBiZWluZyBkcmFnZ2VkXHJcbiAgICAgIGNvbnN0IGRyYWdnZWRHYW1lID0gTnVtYmVyKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpKTtcclxuICAgICAgY29uc3QgdGVtcCA9IG5ld0ZhdmVHYW1lc1tkcm9wVGFyZ2V0XTtcclxuICAgICAgbmV3RmF2ZUdhbWVzW2Ryb3BUYXJnZXRdID0gbmV3RmF2ZUdhbWVzW2RyYWdnZWRHYW1lXTtcclxuICAgICAgbmV3RmF2ZUdhbWVzW2RyYWdnZWRHYW1lXSA9IHRlbXA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhuZXdGYXZlR2FtZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRyYWdnZWQgZ2FtZSB3aWxsIGJlIGFkZGVkIHRvIHRoZVxyXG4gICAqIGVuZCBvZiB0aGUgbGlzdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBkcm9wR2FtZU9uQ29udGFpbmVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgbmV3RmF2ZUdhbWVzID0gWy4uLmRpc3BsYXllZEZhdm9yaXRlR2FtZXNdO1xyXG4gICAgY29uc3QgbmV3R2FtZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgLy9kYXRhVHJhbnNmZXIgd2lsbCBjb250YWluIGEganMgb2JqZWN0IGlmIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWRcclxuICAgIC8vaXMgZnJvbSBzZWFyY2ggcmVzdWx0cywgbWVhbmluZyBhIG5ldyBnYW1lIGlzIGJlaW5nIGFkZGVkXHJcbiAgICAvL3RvIGZhdm9yaXRlIGdhbWVzXHJcbiAgICBpZiAobmV3R2FtZSkge1xyXG4gICAgICBjb25zdCBuZXdHYW1lQXNPYmplY3QgPSBKU09OLnBhcnNlKG5ld0dhbWUpO1xyXG4gICAgICBpZiAoZ2FtZUFscmVhZHlFeGlzdHMobmV3R2FtZUFzT2JqZWN0KSkgcmV0dXJuO1xyXG5cclxuICAgICAgbmV3RmF2ZUdhbWVzLnB1c2gobmV3R2FtZUFzT2JqZWN0KTtcclxuICAgIH1cclxuICAgIC8vaWYgdGhlcmUgaXMgbm8ganMgb2JqZWN0LCB0aGVuIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWQgaXMgYW4gYWxyZWFkeVxyXG4gICAgLy9leGlzdGluZyBnYW1lLiBkcmFnZ2VkIGdhbWUgaXMgYWRkZWQgdG8gdGhlIGVuZCBhbmQgcmVzdCBhcmUgc2hpZnRlZCB1cFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxldCBuZXdQb3MgPSBOdW1iZXIoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIikpO1xyXG4gICAgICBsZXQgZHJhZ2dlZEdhbWUgPSBuZXdGYXZlR2FtZXNbbmV3UG9zXTtcclxuICAgICAgLy9zaGlmdCBldmVyeXRoaW5nIHRvd2FyZHMgdGhlIGZyb250XHJcbiAgICAgIGZvciAoOyBuZXdQb3MgPCBuZXdGYXZlR2FtZXMubGVuZ3RoIC0gMTsgbmV3UG9zKyspXHJcbiAgICAgICAgbmV3RmF2ZUdhbWVzW25ld1Bvc10gPSBuZXdGYXZlR2FtZXNbbmV3UG9zICsgMV07XHJcblxyXG4gICAgICAvL2FkZCBkcmFnZ2VkR2FtZSBiYWNrIHRvIHRoZSBlbmRcclxuICAgICAgbmV3RmF2ZUdhbWVzW25ld1Bvc10gPSBkcmFnZ2VkR2FtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKG5ld0ZhdmVHYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGVzIGEgZ2FtZSBmcm9tIGRpc3BsYXllZEZhdm9yaXRlR2FtZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZ2FtZUlkIHRoZSBpZCBvZiBnYW1lIHRvIGJlIGRlbGV0ZWRcclxuICAgKi9cclxuICBmdW5jdGlvbiBkZWxldGVHYW1lKGdhbWVJZCkge1xyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhcclxuICAgICAgZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5maWx0ZXIoKGdhbWUpID0+IGdhbWUuaWQgIT09IGdhbWVJZClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBlZGl0aW5nIGlzIGNhbmNlbGxlZC4gU2V0cyBkaXNwbGF5ZWQgZmF2b3JpdGUgZ2FtZXNcclxuICAgKiB0byBhY3R1YWwgZmF2b3JpdGUgZ2FtZXMuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcm9sbGJhY2tDaGFuZ2VzKCkge1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhmYXZvcml0ZUdhbWVzKTtcclxuICAgIHNldElzRWRpdGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzYXZlQ2hhbmdlcygpIHtcclxuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcclxuICAgIGNvbnN0IGZhdmVHYW1lSWRzID0gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5tYXAoKGdhbWUpID0+IGdhbWUuaWQpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZmF2b3JpdGVzLyR7cHJvcHMuaWR9YCwge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZhdmVHYW1lSWRzKSxcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICAgICAgc2V0RmF2b3JpdGVHYW1lcyhkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGEgZ2FtZSB0byB0aGUgZW5kIG9mIGRpc3BsYXllZEZhdm9yaXRlR2FtZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gZ2FtZSBnYW1lIG9iamVjdFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIG9uQWRkKGdhbWUpIHtcclxuICAgIGlmIChnYW1lQWxyZWFkeUV4aXN0cyhnYW1lKSkgcmV0dXJuO1xyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhbLi4uZGlzcGxheWVkRmF2b3JpdGVHYW1lcywgZ2FtZV0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIGJ5IEdhbWVzIGluIG1vYmlsZSB2aWV3IHRvIGNoYW5nZSBwb3NpdGlvbnMgaW4gdGhlIGZhdmUgZ2FtZSBsaXN0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJJbmRleCB0aGUgaW5kZXggb2YgdGhlIGdhbWUgdGhhdCBpcyBjaGFuZ2luZyBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXh0SW5kZXggdGhlIGluZGV4IHRoZSBnYW1lIGlzIHRyeWluZyB0byBtb3ZlIHRvXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gY2hhbmdlUG9zaXRpb24oY3VyckluZGV4LCBuZXh0SW5kZXgpIHtcclxuICAgIGNvbnN0IG5ld0ZhdmVHYW1lcyA9IFsuLi5kaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXTtcclxuICAgIGNvbnN0IHRlbXAgPSBuZXdGYXZlR2FtZXNbbmV4dEluZGV4XTtcclxuICAgIG5ld0ZhdmVHYW1lc1tuZXh0SW5kZXhdID0gbmV3RmF2ZUdhbWVzW2N1cnJJbmRleF07XHJcbiAgICBuZXdGYXZlR2FtZXNbY3VyckluZGV4XSA9IHRlbXA7XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKG5ld0ZhdmVHYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgYSBnYW1lIGlzIGFscmVhZHkgaW4gZGlzcGxheWVkRmF2b3JpdGVHYW1lc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGxpc3RPZkdhbWVzIGdhbWUganNvbiBvYmplY3RcclxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGdhbWUgYWxyZWFkeSBleGlzdHMsIGZhbHNlIG90aGVyd2lzZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGdhbWVBbHJlYWR5RXhpc3RzKGdhbWUpIHtcclxuICAgIGZvciAoY29uc3QgZyBvZiBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAke2cuaWR9ICR7Z2FtZS5pZH1gKTtcclxuICAgICAgaWYgKGcuaWQgPT09IGdhbWUuaWQpIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy9nZXQgYSBsaXN0IG9mIEdhbWUgY29tcG9uZW50cyBjb3JyZXNwb25kaW5nIHRvIGZhdm9yaXRlIGdhbWVzXHJcbiAgLy9lYWNoIGlzIGdpdmVuIGEgZGF0YS1pbmRleCBhdHRyaWJ1dGUgdGhhdCBjb3JyZXNwb25kcyB0b1xyXG4gIC8vd2hhdCBwb3NpdGlvbiBpbiB0aGUgbGlzdCB0aGV5IGFyZS4gdGhpcyB3aWxsIGJlIHVzZWQgZHVyaW5nXHJcbiAgLy9lZGl0aW5nIGZhdm9yaXRlIGdhbWVzLlxyXG4gIGNvbnN0IGZhdm9yaXRlR2FtZXNMaXN0ID0gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5tYXAoKGdhbWUsIGluZGV4KSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cclxuICAgICAgZGF0YS1pbmRleD17XCJcIiArIGluZGV4fVxyXG4gICAgICBkcmFnZ2FibGU9e2lzRWRpdGluZyArIFwiXCJ9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXtpc0VkaXRpbmcgPyBzdGFydERyYWdHYW1lIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRyYWdPdmVyPXtpc0VkaXRpbmcgPyBkcmFnT3ZlciA6IHVuZGVmaW5lZH1cclxuICAgICAgb25Ecm9wPXtpc0VkaXRpbmcgPyBkcm9wR2FtZU9uR2FtZSA6IHVuZGVmaW5lZH1cclxuICAgICAgb25EZWxldGU9e2RlbGV0ZUdhbWV9XHJcbiAgICAgIGNoYW5nZVBvc2l0aW9uPXtjaGFuZ2VQb3NpdGlvbn1cclxuICAgICAgaXNMYXN0PXtpbmRleCA9PT0gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5sZW5ndGggLSAxfVxyXG4gICAgLz5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtcclxuICAgICAgICAvL29ubHkgZGlzcGxheSBUb29sYmFyIGlmIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgICAgICAgcHJvcHMudG9vbGJhcklkICYmIChcclxuICAgICAgICAgIDxUb29sYmFyIHVzZXJJZD17cHJvcHMudG9vbGJhcklkfSBwcm9maWxlUGljPXtwcm9wcy51c2VyUHJvZmlsZVBpY30gLz5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXBhZ2UtaGVhZGVyIG1iLTMgbXQtMlwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17cHJvcHMucHJvZmlsZVBpY31cclxuICAgICAgICAgIGFsdD17YCR7cHJvcHMuZGlzcGxheU5hbWV9J3MgcHJvZmlsZSBwaWN0dXJlYH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtcHJvZmlsZS1waWMgcm91bmRlZC1jaXJjbGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktMSBkLWlubGluZVwiPntwcm9wcy5kaXNwbGF5TmFtZX08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B1c2VyLXBhZ2UtbWFpbiAke2lzRWRpdGluZyAmJiBcImQtbWQtZmxleCByb3VuZGVkLWxnXCJ9YH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdXNlci1wYWdlLWdhbWVzIHJvdW5kZWQtbGcgZC1mbGV4IGZsZXgtY29sdW1uICR7XHJcbiAgICAgICAgICAgIGlzRWRpdGluZyA/IFwiaXMtZWRpdGluZ1wiIDogXCJtLWF1dG9cIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXZvcml0ZS1nYW1lcy1saXN0IGdhbWUtbGlzdFwiPlxyXG4gICAgICAgICAgICB7ZmF2b3JpdGVHYW1lc0xpc3R9XHJcbiAgICAgICAgICAgIHtpc0VkaXRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGlkPVwiZHJvcC1zcGFjZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS0zIG14LTJcIlxyXG4gICAgICAgICAgICAgICAgb25Ecm9wPXtkcm9wR2FtZU9uQ29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17ZHJhZ092ZXJ9XHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1iYXJcIj5cclxuICAgICAgICAgICAge3Byb3BzLmlkICYmXHJcbiAgICAgICAgICAgICAgKCFpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdGluZyh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JvbGxiYWNrQ2hhbmdlc31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZUNoYW5nZXN9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JNZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc0VkaXRpbmcgJiYgPEdhbWVTZWFyY2hCb3ggb25BZGQ9e29uQWRkfSAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGV4dC5yZXMubG9jYWxzKSksXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9