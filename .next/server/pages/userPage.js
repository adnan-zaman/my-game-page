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
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", _objectSpread(_objectSpread({}, undraggable), {}, {
      children: props.gameName
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), props.isEditing && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", _objectSpread(_objectSpread({}, undraggable), {}, {
      onClick: () => props.onDelete(props.gameId),
      children: "Delete"
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ "./components/Game.js");


var _jsxFileName = "C:\\Users\\adnan\\web-dev\\my-game-page\\components\\GameSearchBox.js";


function GameSearchBox(props) {
  //search term in search bar
  const {
    0: searchTerm,
    1: setSearchTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""); //page of search results

  const {
    0: searchPage,
    1: setSearchPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined); //list of objects that will be retrieved from search api

  const {
    0: searchResults,
    1: setSearchResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); //used to determine whether its first render or not

  const firstRender = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);

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

  const displayedSearchResults = searchResults.map(game => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Game__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gameId: game.id,
    gameName: game.name,
    gameCoverUrl: game.coverurl,
    draggable: true,
    onDragStart: e => startDragGame(e, game),
    onDragOver: dragOver
  }, game.id, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this));

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (searchTerm === "") return;
    setPageNumber(0);
  }

  function setPageNumber(pageNumber) {
    if (pageNumber < 0) return;
    setSearchPage(pageNumber);
  }

  async function fetchAndPopulateSearchResults() {
    setLoading(true);
    const query = `http://localhost:3000/api/search/${searchTerm}/${searchPage}`;
    const response = await fetch(query);
    const results = await response.json();
    setSearchResults(results);
    setLoading(false);
  } //whenever page number changes, new search results are fetched
  //needs to be done in useEffect because useState doesnt change
  //values immediately, accessing searchPage after render ensures
  //we have new value


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //dont want fetchAndPopulateSearchResults() being
    //called on first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    fetchAndPopulateSearchResults();
  }, [searchPage]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: handleSearch,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "game-search-bar",
          children: "Name of Game:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "game-search-bar",
          value: searchTerm,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), searchPage >= 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            onClick: () => setPageNumber(searchPage - 1),
            children: "Prev"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "page-number",
            children: "Page:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            id: "page-number",
            disabled: true,
            value: searchPage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            onClick: () => setPageNumber(searchPage + 1),
            children: "Next"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "search-results",
      children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }, this), displayedSearchResults]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, this);
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Game */ "./components/Game.js");
/* harmony import */ var _components_GameSearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GameSearchBox */ "./components/GameSearchBox.js");


var _jsxFileName = "C:\\Users\\adnan\\web-dev\\my-game-page\\pages\\userPage.js";



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
  const {
    0: favoriteGames,
    1: setFavoriteGames
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.games); //the user's favorite game as currently displayed. these may differ
  //from actual favorite games during editing

  const {
    0: displayedFavoriteGames,
    1: setDisplayedFavoriteGames
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(favoriteGames); //whether or not user is editing favorite games

  const {
    0: isEditing,
    1: setIsEditing
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
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


  function dropGame(e) {
    e.preventDefault();
    e.stopPropagation();
    const newFaveGames = [...displayedFavoriteGames];
    const newGame = e.dataTransfer.getData("application/json"); //index of game that was dropped on

    const dropTarget = Number(e.target.dataset.index); //dataTransfer will contain a js object if the game being dragged
    //is from search results, meaning a new game is being added
    //to favorite games

    if (newGame) {
      const newGameAsObject = JSON.parse(newGame); //we replace elements as we go, eventually we an element to newFaveGames[newFaveGames.length]
      //this increases the length and the loop goes on forever
      //so we keep the length of the list before we start

      const length = newFaveGames.length;
      let holder = newGameAsObject;

      for (let i = 0; i <= length; i++) {
        if (newFaveGames[i] && newFaveGames[i].id === newGameAsObject.id) return;

        if (i >= dropTarget) {
          const temp = newFaveGames[i];
          newFaveGames[i] = holder;
          holder = temp;
        }
      }
    } //if there is no js object, then the game being dragged is an already
    //existing game so we just swap places
    else {
        //the game that was being dragged
        const draggedGame = Number(e.dataTransfer.getData("text/plain"));
        const temp = newFaveGames[dropTarget];
        newFaveGames[dropTarget] = newFaveGames[draggedGame];
        newFaveGames[draggedGame] = temp;
      }

    setDisplayedFavoriteGames(newFaveGames);
    console.log("set");
  }
  /**
   * Deletes a game from displayedFavoriteGames.
   *
   * @param {number} gameId the id of game to be deleted
   */


  function deleteGame(gameId) {
    setDisplayedFavoriteGames(displayedFavoriteGames.filter(game => game.id !== gameId));
  }
  /**
   * Called when editing is cancelled. Sets displayed favorite games
   * to actual favorite games.
   */


  function rollbackChanges() {
    setDisplayedFavoriteGames(favoriteGames);
    setIsEditing(false);
  }

  console.log(displayedFavoriteGames); //get a list of Game components corresponding to favorite games
  //each is given a data-index attribute that corresponds to
  //what position in the list they are. this will be used during
  //editing favorite games.

  const favoriteGamesList = displayedFavoriteGames.map((game, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Game__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gameId: game.id,
    gameName: game.name,
    gameCoverUrl: game.coverurl,
    isEditing: isEditing,
    "data-index": "" + index,
    draggable: isEditing + "",
    onDragStart: isEditing ? startDragGame : undefined,
    onDragOver: isEditing ? dragOver : undefined,
    onDrop: isEditing ? dropGame : undefined,
    onDelete: deleteGame
  }, game.id, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, this));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.displayName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "favorite-games-list",
        children: favoriteGamesList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this), props.id && (!isEditing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: () => setIsEditing(true),
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }, this) : isEditing && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: rollbackChanges,
        children: "Cancel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 26
      }, this))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, this), isEditing && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_GameSearchBox__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYW1lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2FtZVNlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyUGFnZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkdhbWUiLCJwcm9wcyIsInN0b3BEcmFnIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidW5kcmFnZ2FibGUiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJnYW1lQ292ZXJVcmwiLCJnYW1lTmFtZSIsImlzRWRpdGluZyIsIm9uRGVsZXRlIiwiZ2FtZUlkIiwiR2FtZVNlYXJjaEJveCIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwidXNlU3RhdGUiLCJzZWFyY2hQYWdlIiwic2V0U2VhcmNoUGFnZSIsInVuZGVmaW5lZCIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmaXJzdFJlbmRlciIsInVzZVJlZiIsInN0YXJ0RHJhZ0dhbWUiLCJnYW1lIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkcmFnT3ZlciIsImRyb3BFZmZlY3QiLCJkaXNwbGF5ZWRTZWFyY2hSZXN1bHRzIiwibWFwIiwiaWQiLCJuYW1lIiwiY292ZXJ1cmwiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlYXJjaCIsInNldFBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyIiwiZmV0Y2hBbmRQb3B1bGF0ZVNlYXJjaFJlc3VsdHMiLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHRzIiwianNvbiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJVc2VyUGFnZSIsImZhdm9yaXRlR2FtZXMiLCJzZXRGYXZvcml0ZUdhbWVzIiwiZ2FtZXMiLCJkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzIiwic2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyIsInNldElzRWRpdGluZyIsImRhdGFzZXQiLCJpbmRleCIsImRyb3BHYW1lIiwibmV3RmF2ZUdhbWVzIiwibmV3R2FtZSIsImdldERhdGEiLCJkcm9wVGFyZ2V0IiwiTnVtYmVyIiwibmV3R2FtZUFzT2JqZWN0IiwicGFyc2UiLCJsZW5ndGgiLCJob2xkZXIiLCJpIiwidGVtcCIsImRyYWdnZWRHYW1lIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUdhbWUiLCJmaWx0ZXIiLCJyb2xsYmFja0NoYW5nZXMiLCJmYXZvcml0ZUdhbWVzTGlzdCIsImRpc3BsYXlOYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcyIsImxvY2FscyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQs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R0FBUDtBQUdELEM7Ozs7Ozs7Ozs7O0FDM0pELGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3VzZXJQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91c2VyUGFnZS5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEEgY29tcG9uZW50IHJlcHJlc2VudGluZyBhIHNpbmdsZSBnYW1lXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUocHJvcHMpIHtcclxuICBmdW5jdGlvbiBzdG9wRHJhZyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuICAvL2dpdmVuIHRvIGRpdidzIGNoaWxkcmVuIHNvIG9ubHkgdGhlIGdhbWUtY29udGFpbmVyXHJcbiAgLy9pcyBkcmFnZ2FibGVcclxuICBjb25zdCB1bmRyYWdnYWJsZSA9IHtcclxuICAgIGRyYWdnYWJsZTogXCJmYWxzZVwiLFxyXG4gICAgb25EcmFnU3RhcnQ6IHN0b3BEcmFnLFxyXG4gICAgb25EcmFnT3Zlcjogc3RvcERyYWcsXHJcbiAgICBvbkRyb3A6IHN0b3BEcmFnLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImdhbWUtY29udGFpbmVyXCJcclxuICAgICAgZGF0YS1pbmRleD17cHJvcHNbXCJkYXRhLWluZGV4XCJdfVxyXG4gICAgICBvbkRyYWdTdGFydD17cHJvcHMub25EcmFnU3RhcnR9XHJcbiAgICAgIG9uRHJhZ092ZXI9e3Byb3BzLm9uRHJhZ092ZXJ9XHJcbiAgICAgIG9uRHJvcD17cHJvcHMub25Ecm9wfVxyXG4gICAgICBkcmFnZ2FibGU9e3Byb3BzLmRyYWdnYWJsZX1cclxuICAgID5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz17cHJvcHMuZ2FtZUNvdmVyVXJsfVxyXG4gICAgICAgIGFsdD17YENvdmVyIGFydCBmb3IgJHtwcm9wcy5nYW1lTmFtZX1gfVxyXG4gICAgICAgIHsuLi51bmRyYWdnYWJsZX1cclxuICAgICAgLz5cclxuICAgICAgPHAgey4uLnVuZHJhZ2dhYmxlfT57cHJvcHMuZ2FtZU5hbWV9PC9wPlxyXG4gICAgICB7cHJvcHMuaXNFZGl0aW5nICYmIChcclxuICAgICAgICA8YnV0dG9uIHsuLi51bmRyYWdnYWJsZX0gb25DbGljaz17KCkgPT4gcHJvcHMub25EZWxldGUocHJvcHMuZ2FtZUlkKX0+XHJcbiAgICAgICAgICBEZWxldGVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVTZWFyY2hCb3gocHJvcHMpIHtcclxuICAvL3NlYXJjaCB0ZXJtIGluIHNlYXJjaCBiYXJcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvL3BhZ2Ugb2Ygc2VhcmNoIHJlc3VsdHNcclxuICBjb25zdCBbc2VhcmNoUGFnZSwgc2V0U2VhcmNoUGFnZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIC8vbGlzdCBvZiBvYmplY3RzIHRoYXQgd2lsbCBiZSByZXRyaWV2ZWQgZnJvbSBzZWFyY2ggYXBpXHJcbiAgY29uc3QgW3NlYXJjaFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy91c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGl0cyBmaXJzdCByZW5kZXIgb3Igbm90XHJcbiAgY29uc3QgZmlyc3RSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhZ0dhbWUoZSwgZ2FtZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIsIEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcclxuICB9XHJcblxyXG4gIC8vZHJhZ292ZXIgaGFuZGxlciBpcyBuZWVkZWQgdG8gbWFrZSBlbGVtZW50XHJcbiAgLy9kcmFnZ2FibGVcclxuICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzcGxheWVkU2VhcmNoUmVzdWx0cyA9IHNlYXJjaFJlc3VsdHMubWFwKChnYW1lKSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBkcmFnZ2FibGU9e3RydWV9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXsoZSkgPT4gc3RhcnREcmFnR2FtZShlLCBnYW1lKX1cclxuICAgICAgb25EcmFnT3Zlcj17ZHJhZ092ZXJ9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTZWFyY2goZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHNlYXJjaFRlcm0gPT09IFwiXCIpIHJldHVybjtcclxuICAgIHNldFBhZ2VOdW1iZXIoMCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcclxuICAgIGlmIChwYWdlTnVtYmVyIDwgMCkgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoUGFnZShwYWdlTnVtYmVyKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKCkge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2VhcmNoLyR7c2VhcmNoVGVybX0vJHtzZWFyY2hQYWdlfWA7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHF1ZXJ5KTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBzZXRTZWFyY2hSZXN1bHRzKHJlc3VsdHMpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvL3doZW5ldmVyIHBhZ2UgbnVtYmVyIGNoYW5nZXMsIG5ldyBzZWFyY2ggcmVzdWx0cyBhcmUgZmV0Y2hlZFxyXG4gIC8vbmVlZHMgdG8gYmUgZG9uZSBpbiB1c2VFZmZlY3QgYmVjYXVzZSB1c2VTdGF0ZSBkb2VzbnQgY2hhbmdlXHJcbiAgLy92YWx1ZXMgaW1tZWRpYXRlbHksIGFjY2Vzc2luZyBzZWFyY2hQYWdlIGFmdGVyIHJlbmRlciBlbnN1cmVzXHJcbiAgLy93ZSBoYXZlIG5ldyB2YWx1ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL2RvbnQgd2FudCBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cygpIGJlaW5nXHJcbiAgICAvL2NhbGxlZCBvbiBmaXJzdCByZW5kZXJcclxuICAgIGlmIChmaXJzdFJlbmRlci5jdXJyZW50KSB7XHJcbiAgICAgIGZpcnN0UmVuZGVyLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZmV0Y2hBbmRQb3B1bGF0ZVNlYXJjaFJlc3VsdHMoKTtcclxuICB9LCBbc2VhcmNoUGFnZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FtZS1zZWFyY2gtYmFyXCI+TmFtZSBvZiBHYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJnYW1lLXNlYXJjaC1iYXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICB7c2VhcmNoUGFnZSA+PSAwICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2VOdW1iZXIoc2VhcmNoUGFnZSAtIDEpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFByZXZcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhZ2UtbnVtYmVyXCI+UGFnZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYWdlLW51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYWdlfVxyXG4gICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZU51bWJlcihzZWFyY2hQYWdlICsgMSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0c1wiPlxyXG4gICAgICAgIHtsb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fVxyXG4gICAgICAgIHtkaXNwbGF5ZWRTZWFyY2hSZXN1bHRzfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vY29tcG9uZW50cy9HYW1lXCI7XHJcbmltcG9ydCBHYW1lU2VhcmNoQm94IGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVTZWFyY2hCb3hcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBUaGUgcGFnZSB0aGF0IGlzIGRpc3BsYXllZCB3aGVuXHJcbiAqIHZpZXdpbmcgYSB1c2VyJ3MgcHJvZmlsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUGFnZShwcm9wcykge1xyXG4gIC8qIHNldHRpbmcgc3RhdGUgKi9cclxuICAvL3RoZSB1c2VyJ3MgYWN0dWFsIGZhdm9yaXRlIGdhbWVzXHJcbiAgY29uc3QgW2Zhdm9yaXRlR2FtZXMsIHNldEZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUocHJvcHMuZ2FtZXMpO1xyXG4gIC8vdGhlIHVzZXIncyBmYXZvcml0ZSBnYW1lIGFzIGN1cnJlbnRseSBkaXNwbGF5ZWQuIHRoZXNlIG1heSBkaWZmZXJcclxuICAvL2Zyb20gYWN0dWFsIGZhdm9yaXRlIGdhbWVzIGR1cmluZyBlZGl0aW5nXHJcbiAgY29uc3QgW2Rpc3BsYXllZEZhdm9yaXRlR2FtZXMsIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXNdID0gdXNlU3RhdGUoXHJcbiAgICBmYXZvcml0ZUdhbWVzXHJcbiAgKTtcclxuICAvL3doZXRoZXIgb3Igbm90IHVzZXIgaXMgZWRpdGluZyBmYXZvcml0ZSBnYW1lc1xyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIGEgR2FtZSBpcyBkcmFnZ2VkLiBBZGRzXHJcbiAgICogdGhlIEdhbWUncyBkYXRhLWluZGV4IGF0dHJpYnV0ZSB0b1xyXG4gICAqIERyYWdFdmVudC5kYXRhVHJhbnNmZXIgdG8gYmUgdXNlZCBieVxyXG4gICAqIGRyb3BHYW1lKCkgbGF0ZXIgb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gc3RhcnREcmFnR2FtZShlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XHJcbiAgfVxyXG5cclxuICAvL2RyYWdvdmVyIGhhbmRsZXIgaXMgbmVlZGVkIHRvIG1ha2UgZWxlbWVudFxyXG4gIC8vZHJhZ2dhYmxlXHJcbiAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkcmFnZ2VkIGdhbWUgd2lsbCBiZSBzd2FwcGVkIHdpdGggdGhlIGdhbWVcclxuICAgKiBpdCdzIGRyb3BwZWQgb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRyb3BHYW1lKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBuZXdGYXZlR2FtZXMgPSBbLi4uZGlzcGxheWVkRmF2b3JpdGVHYW1lc107XHJcbiAgICBjb25zdCBuZXdHYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAvL2luZGV4IG9mIGdhbWUgdGhhdCB3YXMgZHJvcHBlZCBvblxyXG4gICAgY29uc3QgZHJvcFRhcmdldCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICAgIC8vZGF0YVRyYW5zZmVyIHdpbGwgY29udGFpbiBhIGpzIG9iamVjdCBpZiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkXHJcbiAgICAvL2lzIGZyb20gc2VhcmNoIHJlc3VsdHMsIG1lYW5pbmcgYSBuZXcgZ2FtZSBpcyBiZWluZyBhZGRlZFxyXG4gICAgLy90byBmYXZvcml0ZSBnYW1lc1xyXG4gICAgaWYgKG5ld0dhbWUpIHtcclxuICAgICAgY29uc3QgbmV3R2FtZUFzT2JqZWN0ID0gSlNPTi5wYXJzZShuZXdHYW1lKTtcclxuICAgICAgLy93ZSByZXBsYWNlIGVsZW1lbnRzIGFzIHdlIGdvLCBldmVudHVhbGx5IHdlIGFuIGVsZW1lbnQgdG8gbmV3RmF2ZUdhbWVzW25ld0ZhdmVHYW1lcy5sZW5ndGhdXHJcbiAgICAgIC8vdGhpcyBpbmNyZWFzZXMgdGhlIGxlbmd0aCBhbmQgdGhlIGxvb3AgZ29lcyBvbiBmb3JldmVyXHJcbiAgICAgIC8vc28gd2Uga2VlcCB0aGUgbGVuZ3RoIG9mIHRoZSBsaXN0IGJlZm9yZSB3ZSBzdGFydFxyXG4gICAgICBjb25zdCBsZW5ndGggPSBuZXdGYXZlR2FtZXMubGVuZ3RoO1xyXG4gICAgICBsZXQgaG9sZGVyID0gbmV3R2FtZUFzT2JqZWN0O1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChuZXdGYXZlR2FtZXNbaV0gJiYgbmV3RmF2ZUdhbWVzW2ldLmlkID09PSBuZXdHYW1lQXNPYmplY3QuaWQpXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKGkgPj0gZHJvcFRhcmdldCkge1xyXG4gICAgICAgICAgY29uc3QgdGVtcCA9IG5ld0ZhdmVHYW1lc1tpXTtcclxuICAgICAgICAgIG5ld0ZhdmVHYW1lc1tpXSA9IGhvbGRlcjtcclxuICAgICAgICAgIGhvbGRlciA9IHRlbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2lmIHRoZXJlIGlzIG5vIGpzIG9iamVjdCwgdGhlbiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkIGlzIGFuIGFscmVhZHlcclxuICAgIC8vZXhpc3RpbmcgZ2FtZSBzbyB3ZSBqdXN0IHN3YXAgcGxhY2VzXHJcbiAgICBlbHNlIHtcclxuICAgICAgLy90aGUgZ2FtZSB0aGF0IHdhcyBiZWluZyBkcmFnZ2VkXHJcbiAgICAgIGNvbnN0IGRyYWdnZWRHYW1lID0gTnVtYmVyKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpKTtcclxuICAgICAgY29uc3QgdGVtcCA9IG5ld0ZhdmVHYW1lc1tkcm9wVGFyZ2V0XTtcclxuICAgICAgbmV3RmF2ZUdhbWVzW2Ryb3BUYXJnZXRdID0gbmV3RmF2ZUdhbWVzW2RyYWdnZWRHYW1lXTtcclxuICAgICAgbmV3RmF2ZUdhbWVzW2RyYWdnZWRHYW1lXSA9IHRlbXA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhuZXdGYXZlR2FtZXMpO1xyXG4gICAgY29uc29sZS5sb2coXCJzZXRcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGVzIGEgZ2FtZSBmcm9tIGRpc3BsYXllZEZhdm9yaXRlR2FtZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZ2FtZUlkIHRoZSBpZCBvZiBnYW1lIHRvIGJlIGRlbGV0ZWRcclxuICAgKi9cclxuICBmdW5jdGlvbiBkZWxldGVHYW1lKGdhbWVJZCkge1xyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhcclxuICAgICAgZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5maWx0ZXIoKGdhbWUpID0+IGdhbWUuaWQgIT09IGdhbWVJZClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBlZGl0aW5nIGlzIGNhbmNlbGxlZC4gU2V0cyBkaXNwbGF5ZWQgZmF2b3JpdGUgZ2FtZXNcclxuICAgKiB0byBhY3R1YWwgZmF2b3JpdGUgZ2FtZXMuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcm9sbGJhY2tDaGFuZ2VzKCkge1xyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhmYXZvcml0ZUdhbWVzKTtcclxuICAgIHNldElzRWRpdGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKTtcclxuXHJcbiAgLy9nZXQgYSBsaXN0IG9mIEdhbWUgY29tcG9uZW50cyBjb3JyZXNwb25kaW5nIHRvIGZhdm9yaXRlIGdhbWVzXHJcbiAgLy9lYWNoIGlzIGdpdmVuIGEgZGF0YS1pbmRleCBhdHRyaWJ1dGUgdGhhdCBjb3JyZXNwb25kcyB0b1xyXG4gIC8vd2hhdCBwb3NpdGlvbiBpbiB0aGUgbGlzdCB0aGV5IGFyZS4gdGhpcyB3aWxsIGJlIHVzZWQgZHVyaW5nXHJcbiAgLy9lZGl0aW5nIGZhdm9yaXRlIGdhbWVzLlxyXG4gIGNvbnN0IGZhdm9yaXRlR2FtZXNMaXN0ID0gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5tYXAoKGdhbWUsIGluZGV4KSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cclxuICAgICAgZGF0YS1pbmRleD17XCJcIiArIGluZGV4fVxyXG4gICAgICBkcmFnZ2FibGU9e2lzRWRpdGluZyArIFwiXCJ9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXtpc0VkaXRpbmcgPyBzdGFydERyYWdHYW1lIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRyYWdPdmVyPXtpc0VkaXRpbmcgPyBkcmFnT3ZlciA6IHVuZGVmaW5lZH1cclxuICAgICAgb25Ecm9wPXtpc0VkaXRpbmcgPyBkcm9wR2FtZSA6IHVuZGVmaW5lZH1cclxuICAgICAgb25EZWxldGU9e2RlbGV0ZUdhbWV9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPntwcm9wcy5kaXNwbGF5TmFtZX08L2gxPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2b3JpdGUtZ2FtZXMtbGlzdFwiPntmYXZvcml0ZUdhbWVzTGlzdH08L2Rpdj5cclxuICAgICAgICB7cHJvcHMuaWQgJiZcclxuICAgICAgICAgICghaXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdGluZyh0cnVlKX0+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgaXNFZGl0aW5nICYmIDxidXR0b24gb25DbGljaz17cm9sbGJhY2tDaGFuZ2VzfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzRWRpdGluZyAmJiA8R2FtZVNlYXJjaEJveCAvPn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb250ZXh0LnJlcy5sb2NhbHMpKSxcclxuICB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9