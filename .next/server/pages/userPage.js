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

/***/ "./components/Game.js":
/*!****************************!*\
  !*** ./components/Game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\adnan\\web-dev\\my-game-page\\components\\Game.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function Game(props) {
  const {
    0: clicked,
    1: setClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: y,
    1: setY
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0); //   console.log(`i am ${props.gameName} and I am clicked: ${clicked}`);
  //   function moveFunc(e) {
  //     e.preventDefault();
  //     if (clicked) setY(y + e.movementY);
  //   }

  function stopDrag(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const undraggable = {
    draggable: "false",
    onDragStart: stopDrag,
    onDragOver: stopDrag,
    onDrop: stopDrag
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "game-container",
    "data-index": props["data-index"],
    onDragStart: props.onDragStart,
    onDragOver: props.onDragOver,
    onDrop: props.onDrop,
    draggable: props.draggable,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", _objectSpread({
      src: props.gameCoverUrl,
      alt: `Cover art for ${props.gameName}`
    }, undraggable), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", _objectSpread(_objectSpread({}, undraggable), {}, {
      children: props.gameName
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), props.isEditing && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", _objectSpread(_objectSpread({}, undraggable), {}, {
      children: "Delete"
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 27
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
} // onMouseDown={(e) => {
//     e.preventDefault();
//     setClicked(true);
//   }}
//   onMouseUp={() => setClicked(false)}
//   onMouseMove={moveFunc}
// style={{
//     position: "relative",
//     top: `${y}px`,
//     borderColor: clicked ? "red" : "black",
//   }}

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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Game */ "./components/Game.js");


var _jsxFileName = "C:\\Users\\adnan\\web-dev\\my-game-page\\pages\\userPage.js";


function UserPage(props) {
  //setting state
  const {
    0: favoriteGames,
    1: setFavoriteGames
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.games);
  const {
    0: currFavoriteGames,
    1: setCurrFavoriteGames
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(favoriteGames);
  const {
    0: isEditing,
    1: setIsEditing
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function dragFunc(e) {
    //e.preventDefault();
    e.stopPropagation();
    console.log("this is drag func");
    e.dataTransfer.setData("text/plain", e.target.dataset.index);
  }

  function dragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("this is dragover");
    e.dataTransfer.dropEffect = "move";
  }

  function drop(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("this is drop");
    const newFaveGames = [...favoriteGames];
    const i = Number(e.target.dataset.index);
    const j = Number(e.dataTransfer.getData("text/plain")); //console.log(e.target);

    console.log(`${i} ${j}`);
    const temp = newFaveGames[i];
    newFaveGames[i] = newFaveGames[j];
    newFaveGames[j] = temp;
    setFavoriteGames(newFaveGames);
  }

  const favoriteGamesList = favoriteGames.map((game, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Game__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gameId: game.id,
    gameName: game.name,
    gameCoverUrl: game.coverurl,
    isEditing: isEditing,
    "data-index": "" + index,
    draggable: "true",
    onDragStart: dragFunc,
    onDragOver: dragOver,
    onDrop: drop
  }, game.id, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.displayName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "favorite-games-list",
      children: favoriteGamesList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), props.id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: () => setIsEditing(true),
      children: "Edit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 20
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYW1lLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3VzZXJQYWdlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiR2FtZSIsInByb3BzIiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJ1c2VTdGF0ZSIsInkiLCJzZXRZIiwic3RvcERyYWciLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ1bmRyYWdnYWJsZSIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnT3ZlciIsIm9uRHJvcCIsImdhbWVDb3ZlclVybCIsImdhbWVOYW1lIiwiaXNFZGl0aW5nIiwiVXNlclBhZ2UiLCJmYXZvcml0ZUdhbWVzIiwic2V0RmF2b3JpdGVHYW1lcyIsImdhbWVzIiwiY3VyckZhdm9yaXRlR2FtZXMiLCJzZXRDdXJyRmF2b3JpdGVHYW1lcyIsInNldElzRWRpdGluZyIsImRyYWdGdW5jIiwiY29uc29sZSIsImxvZyIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJkcmFnT3ZlciIsImRyb3BFZmZlY3QiLCJkcm9wIiwibmV3RmF2ZUdhbWVzIiwiaSIsIk51bWJlciIsImoiLCJnZXREYXRhIiwidGVtcCIsImZhdm9yaXRlR2FtZXNMaXN0IiwibWFwIiwiZ2FtZSIsImlkIiwibmFtZSIsImNvdmVydXJsIiwiZGlzcGxheU5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwicmVzIiwibG9jYWxzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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ZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdXNlclBhZ2UuanNcIik7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUocHJvcHMpIHtcclxuICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ksIHNldFldID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIC8vICAgY29uc29sZS5sb2coYGkgYW0gJHtwcm9wcy5nYW1lTmFtZX0gYW5kIEkgYW0gY2xpY2tlZDogJHtjbGlja2VkfWApO1xyXG5cclxuICAvLyAgIGZ1bmN0aW9uIG1vdmVGdW5jKGUpIHtcclxuICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgICBpZiAoY2xpY2tlZCkgc2V0WSh5ICsgZS5tb3ZlbWVudFkpO1xyXG4gIC8vICAgfVxyXG5cclxuICBmdW5jdGlvbiBzdG9wRHJhZyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdW5kcmFnZ2FibGUgPSB7XHJcbiAgICBkcmFnZ2FibGU6IFwiZmFsc2VcIixcclxuICAgIG9uRHJhZ1N0YXJ0OiBzdG9wRHJhZyxcclxuICAgIG9uRHJhZ092ZXI6IHN0b3BEcmFnLFxyXG4gICAgb25Ecm9wOiBzdG9wRHJhZyxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJnYW1lLWNvbnRhaW5lclwiXHJcbiAgICAgIGRhdGEtaW5kZXg9e3Byb3BzW1wiZGF0YS1pbmRleFwiXX1cclxuICAgICAgb25EcmFnU3RhcnQ9e3Byb3BzLm9uRHJhZ1N0YXJ0fVxyXG4gICAgICBvbkRyYWdPdmVyPXtwcm9wcy5vbkRyYWdPdmVyfVxyXG4gICAgICBvbkRyb3A9e3Byb3BzLm9uRHJvcH1cclxuICAgICAgZHJhZ2dhYmxlPXtwcm9wcy5kcmFnZ2FibGV9XHJcbiAgICA+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3Byb3BzLmdhbWVDb3ZlclVybH1cclxuICAgICAgICBhbHQ9e2BDb3ZlciBhcnQgZm9yICR7cHJvcHMuZ2FtZU5hbWV9YH1cclxuICAgICAgICB7Li4udW5kcmFnZ2FibGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwIHsuLi51bmRyYWdnYWJsZX0+e3Byb3BzLmdhbWVOYW1lfTwvcD5cclxuICAgICAge3Byb3BzLmlzRWRpdGluZyAmJiA8YnV0dG9uIHsuLi51bmRyYWdnYWJsZX0+RGVsZXRlPC9idXR0b24+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gb25Nb3VzZURvd249eyhlKSA9PiB7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBzZXRDbGlja2VkKHRydWUpO1xyXG4vLyAgIH19XHJcbi8vICAgb25Nb3VzZVVwPXsoKSA9PiBzZXRDbGlja2VkKGZhbHNlKX1cclxuLy8gICBvbk1vdXNlTW92ZT17bW92ZUZ1bmN9XHJcbi8vIHN0eWxlPXt7XHJcbi8vICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4vLyAgICAgdG9wOiBgJHt5fXB4YCxcclxuLy8gICAgIGJvcmRlckNvbG9yOiBjbGlja2VkID8gXCJyZWRcIiA6IFwiYmxhY2tcIixcclxuLy8gICB9fVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQYWdlKHByb3BzKSB7XHJcbiAgLy9zZXR0aW5nIHN0YXRlXHJcbiAgY29uc3QgW2Zhdm9yaXRlR2FtZXMsIHNldEZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUocHJvcHMuZ2FtZXMpO1xyXG4gIGNvbnN0IFtjdXJyRmF2b3JpdGVHYW1lcywgc2V0Q3VyckZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUoZmF2b3JpdGVHYW1lcyk7XHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhZ0Z1bmMoZSkge1xyXG4gICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGRyYWcgZnVuY1wiKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBkcmFnb3ZlclwiKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyb3AoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBkcm9wXCIpO1xyXG4gICAgY29uc3QgbmV3RmF2ZUdhbWVzID0gWy4uLmZhdm9yaXRlR2FtZXNdO1xyXG4gICAgY29uc3QgaSA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICAgIGNvbnN0IGogPSBOdW1iZXIoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIikpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcbiAgICBjb25zb2xlLmxvZyhgJHtpfSAke2p9YCk7XHJcbiAgICBjb25zdCB0ZW1wID0gbmV3RmF2ZUdhbWVzW2ldO1xyXG4gICAgbmV3RmF2ZUdhbWVzW2ldID0gbmV3RmF2ZUdhbWVzW2pdO1xyXG4gICAgbmV3RmF2ZUdhbWVzW2pdID0gdGVtcDtcclxuICAgIHNldEZhdm9yaXRlR2FtZXMobmV3RmF2ZUdhbWVzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZhdm9yaXRlR2FtZXNMaXN0ID0gZmF2b3JpdGVHYW1lcy5tYXAoKGdhbWUsIGluZGV4KSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cclxuICAgICAgZGF0YS1pbmRleD17XCJcIiArIGluZGV4fVxyXG4gICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcclxuICAgICAgb25EcmFnU3RhcnQ9e2RyYWdGdW5jfVxyXG4gICAgICBvbkRyYWdPdmVyPXtkcmFnT3Zlcn1cclxuICAgICAgb25Ecm9wPXtkcm9wfVxyXG4gICAgLz5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT57cHJvcHMuZGlzcGxheU5hbWV9PC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXZvcml0ZS1nYW1lcy1saXN0XCI+e2Zhdm9yaXRlR2FtZXNMaXN0fTwvZGl2PlxyXG4gICAgICB7cHJvcHMuaWQgJiYgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9PkVkaXQ8L2J1dHRvbj59XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGV4dC5yZXMubG9jYWxzKSksXHJcbiAgfTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==