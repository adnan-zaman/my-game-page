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
      alt: `Cover art for ${props.gameName}`,
      height: 90,
      width: 90
    }, undraggable), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", _objectSpread(_objectSpread({}, undraggable), {}, {
      children: props.gameName
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), props.isEditing && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", _objectSpread(_objectSpread({}, undraggable), {}, {
      onClick: () => props.onDelete(props.gameId),
      children: "Delete"
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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

      const length = newFaveGames.length; //game to be added in

      let holder = newGameAsObject;

      for (let i = 0; i <= length; i++) {
        if (newFaveGames[i] && newFaveGames[i].id === newGameAsObject.id) return; //start swapping from dropTarget onwards

        if (i >= dropTarget) {
          //put holder into the list, take what was there and put into holder
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

  async function saveChanges() {
    const faveGameIds = displayedFavoriteGames.map(game => game.id);

    try {
      const response = await fetch(`http://localhost:3000/api/favorites/${props.id}`, {
        method: "PUT",
        credentials: "same-origin",
        body: JSON.stringify(faveGameIds),
        headers: {
          "Content-Type": "application/json"
        }
      });
      setIsEditing(false);
      setFavoriteGames(displayedFavoriteGames);
    } catch (e) {
      console.log(e);
    }
  } //get a list of Game components corresponding to favorite games
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
    lineNumber: 139,
    columnNumber: 5
  }, this));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.displayName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "favorite-games-list",
        children: favoriteGamesList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this), props.id && (!isEditing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: () => setIsEditing(true),
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: rollbackChanges,
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: saveChanges,
          children: "Save"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 15
        }, this)]
      }, void 0, true))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, this), isEditing && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_GameSearchBox__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYW1lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2FtZVNlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyUGFnZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkdhbWUiLCJwcm9wcyIsInN0b3BEcmFnIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidW5kcmFnZ2FibGUiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJnYW1lQ292ZXJVcmwiLCJnYW1lTmFtZSIsImlzRWRpdGluZyIsIm9uRGVsZXRlIiwiZ2FtZUlkIiwiR2FtZVNlYXJjaEJveCIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwidXNlU3RhdGUiLCJzZWFyY2hQYWdlIiwic2V0U2VhcmNoUGFnZSIsInVuZGVmaW5lZCIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmaXJzdFJlbmRlciIsInVzZVJlZiIsInN0YXJ0RHJhZ0dhbWUiLCJnYW1lIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkcmFnT3ZlciIsImRyb3BFZmZlY3QiLCJkaXNwbGF5ZWRTZWFyY2hSZXN1bHRzIiwibWFwIiwiaWQiLCJuYW1lIiwiY292ZXJ1cmwiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlYXJjaCIsInNldFBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyIiwiZmV0Y2hBbmRQb3B1bGF0ZVNlYXJjaFJlc3VsdHMiLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHRzIiwianNvbiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJVc2VyUGFnZSIsImZhdm9yaXRlR2FtZXMiLCJzZXRGYXZvcml0ZUdhbWVzIiwiZ2FtZXMiLCJkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzIiwic2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyIsInNldElzRWRpdGluZyIsImRhdGFzZXQiLCJpbmRleCIsImRyb3BHYW1lIiwibmV3RmF2ZUdhbWVzIiwibmV3R2FtZSIsImdldERhdGEiLCJkcm9wVGFyZ2V0IiwiTnVtYmVyIiwibmV3R2FtZUFzT2JqZWN0IiwicGFyc2UiLCJsZW5ndGgiLCJob2xkZXIiLCJpIiwidGVtcCIsImRyYWdnZWRHYW1lIiwiZGVsZXRlR2FtZSIsImZpbHRlciIsInJvbGxiYWNrQ2hhbmdlcyIsInNhdmVDaGFuZ2VzIiwiZmF2ZUdhbWVJZHMiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImJvZHkiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsImZhdm9yaXRlR2FtZXNMaXN0IiwiZGlzcGxheU5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwibG9jYWxzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxt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LFlBREYsZUFFRTtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLGtCQUFzQ0Q7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUd4RixLQUFLLENBQUNzQyxFQUFOLEtBQ0UsQ0FBQzFCLFNBQUQsZ0JBQ0M7QUFBUSxlQUFPLEVBQUUsTUFBTWlELFlBQVksQ0FBQyxJQUFELENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZ0JBR0M7QUFBQSxnQ0FDRTtBQUFRLGlCQUFPLEVBQUVrQixlQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQVEsaUJBQU8sRUFBRUMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQSxzQkFKSCxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBY0dwRSxTQUFTLGlCQUFJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkaEI7QUFBQSxrQkFERjtBQWtCRDtBQUVNLFNBQVM4RSxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUM7QUFDMUMsU0FBTztBQUNMM0YsU0FBSyxFQUFFZ0MsSUFBSSxDQUFDdUMsS0FBTCxDQUFXdkMsSUFBSSxDQUFDQyxTQUFMLENBQWUwRCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBM0IsQ0FBWDtBQURGLEdBQVA7QUFHRCxDOzs7Ozs7Ozs7OztBQ2pMRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy91c2VyUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdXNlclBhZ2UuanNcIik7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBBIGNvbXBvbmVudCByZXByZXNlbnRpbmcgYSBzaW5nbGUgZ2FtZVxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKHByb3BzKSB7XHJcbiAgZnVuY3Rpb24gc3RvcERyYWcoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcbiAgLy9naXZlbiB0byBkaXYncyBjaGlsZHJlbiBzbyBvbmx5IHRoZSBnYW1lLWNvbnRhaW5lclxyXG4gIC8vaXMgZHJhZ2dhYmxlXHJcbiAgY29uc3QgdW5kcmFnZ2FibGUgPSB7XHJcbiAgICBkcmFnZ2FibGU6IFwiZmFsc2VcIixcclxuICAgIG9uRHJhZ1N0YXJ0OiBzdG9wRHJhZyxcclxuICAgIG9uRHJhZ092ZXI6IHN0b3BEcmFnLFxyXG4gICAgb25Ecm9wOiBzdG9wRHJhZyxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJnYW1lLWNvbnRhaW5lclwiXHJcbiAgICAgIGRhdGEtaW5kZXg9e3Byb3BzW1wiZGF0YS1pbmRleFwiXX1cclxuICAgICAgb25EcmFnU3RhcnQ9e3Byb3BzLm9uRHJhZ1N0YXJ0fVxyXG4gICAgICBvbkRyYWdPdmVyPXtwcm9wcy5vbkRyYWdPdmVyfVxyXG4gICAgICBvbkRyb3A9e3Byb3BzLm9uRHJvcH1cclxuICAgICAgZHJhZ2dhYmxlPXtwcm9wcy5kcmFnZ2FibGV9XHJcbiAgICA+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3Byb3BzLmdhbWVDb3ZlclVybH1cclxuICAgICAgICBhbHQ9e2BDb3ZlciBhcnQgZm9yICR7cHJvcHMuZ2FtZU5hbWV9YH1cclxuICAgICAgICBoZWlnaHQ9ezkwfVxyXG4gICAgICAgIHdpZHRoPXs5MH1cclxuICAgICAgICB7Li4udW5kcmFnZ2FibGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwIHsuLi51bmRyYWdnYWJsZX0+e3Byb3BzLmdhbWVOYW1lfTwvcD5cclxuICAgICAge3Byb3BzLmlzRWRpdGluZyAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiB7Li4udW5kcmFnZ2FibGV9IG9uQ2xpY2s9eygpID0+IHByb3BzLm9uRGVsZXRlKHByb3BzLmdhbWVJZCl9PlxyXG4gICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lU2VhcmNoQm94KHByb3BzKSB7XHJcbiAgLy9zZWFyY2ggdGVybSBpbiBzZWFyY2ggYmFyXHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy9wYWdlIG9mIHNlYXJjaCByZXN1bHRzXHJcbiAgY29uc3QgW3NlYXJjaFBhZ2UsIHNldFNlYXJjaFBhZ2VdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAvL2xpc3Qgb2Ygb2JqZWN0cyB0aGF0IHdpbGwgYmUgcmV0cmlldmVkIGZyb20gc2VhcmNoIGFwaVxyXG4gIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciBpdHMgZmlyc3QgcmVuZGVyIG9yIG5vdFxyXG4gIGNvbnN0IGZpcnN0UmVuZGVyID0gdXNlUmVmKHRydWUpO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydERyYWdHYW1lKGUsIGdhbWUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiLCBKU09OLnN0cmluZ2lmeShnYW1lKSk7XHJcbiAgfVxyXG5cclxuICAvL2RyYWdvdmVyIGhhbmRsZXIgaXMgbmVlZGVkIHRvIG1ha2UgZWxlbWVudFxyXG4gIC8vZHJhZ2dhYmxlXHJcbiAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRpc3BsYXllZFNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzLm1hcCgoZ2FtZSkgPT4gKFxyXG4gICAgPEdhbWVcclxuICAgICAga2V5PXtnYW1lLmlkfVxyXG4gICAgICBnYW1lSWQ9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVOYW1lPXtnYW1lLm5hbWV9XHJcbiAgICAgIGdhbWVDb3ZlclVybD17Z2FtZS5jb3ZlcnVybH1cclxuICAgICAgZHJhZ2dhYmxlPXt0cnVlfVxyXG4gICAgICBvbkRyYWdTdGFydD17KGUpID0+IHN0YXJ0RHJhZ0dhbWUoZSwgZ2FtZSl9XHJcbiAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVyfVxyXG4gICAgLz5cclxuICApKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChzZWFyY2hUZXJtID09PSBcIlwiKSByZXR1cm47XHJcbiAgICBzZXRQYWdlTnVtYmVyKDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XHJcbiAgICBpZiAocGFnZU51bWJlciA8IDApIHJldHVybjtcclxuICAgIHNldFNlYXJjaFBhZ2UocGFnZU51bWJlcik7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cygpIHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBxdWVyeSA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NlYXJjaC8ke3NlYXJjaFRlcm19LyR7c2VhcmNoUGFnZX1gO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChxdWVyeSk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgc2V0U2VhcmNoUmVzdWx0cyhyZXN1bHRzKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLy93aGVuZXZlciBwYWdlIG51bWJlciBjaGFuZ2VzLCBuZXcgc2VhcmNoIHJlc3VsdHMgYXJlIGZldGNoZWRcclxuICAvL25lZWRzIHRvIGJlIGRvbmUgaW4gdXNlRWZmZWN0IGJlY2F1c2UgdXNlU3RhdGUgZG9lc250IGNoYW5nZVxyXG4gIC8vdmFsdWVzIGltbWVkaWF0ZWx5LCBhY2Nlc3Npbmcgc2VhcmNoUGFnZSBhZnRlciByZW5kZXIgZW5zdXJlc1xyXG4gIC8vd2UgaGF2ZSBuZXcgdmFsdWVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9kb250IHdhbnQgZmV0Y2hBbmRQb3B1bGF0ZVNlYXJjaFJlc3VsdHMoKSBiZWluZ1xyXG4gICAgLy9jYWxsZWQgb24gZmlyc3QgcmVuZGVyXHJcbiAgICBpZiAoZmlyc3RSZW5kZXIuY3VycmVudCkge1xyXG4gICAgICBmaXJzdFJlbmRlci5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKCk7XHJcbiAgfSwgW3NlYXJjaFBhZ2VdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhbWUtc2VhcmNoLWJhclwiPk5hbWUgb2YgR2FtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiZ2FtZS1zZWFyY2gtYmFyXCJcclxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAge3NlYXJjaFBhZ2UgPj0gMCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlTnVtYmVyKHNlYXJjaFBhZ2UgLSAxKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBQcmV2XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYWdlLW51bWJlclwiPlBhZ2U6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPVwicGFnZS1udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFnZX1cclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2VOdW1iZXIoc2VhcmNoUGFnZSArIDEpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHNcIj5cclxuICAgICAgICB7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cclxuICAgICAgICB7ZGlzcGxheWVkU2VhcmNoUmVzdWx0c31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FtZVwiO1xyXG5pbXBvcnQgR2FtZVNlYXJjaEJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9HYW1lU2VhcmNoQm94XCI7XHJcblxyXG4vKipcclxuICpcclxuICogVGhlIHBhZ2UgdGhhdCBpcyBkaXNwbGF5ZWQgd2hlblxyXG4gKiB2aWV3aW5nIGEgdXNlcidzIHByb2ZpbGVcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclBhZ2UocHJvcHMpIHtcclxuICAvKiBzZXR0aW5nIHN0YXRlICovXHJcbiAgLy90aGUgdXNlcidzIGFjdHVhbCBmYXZvcml0ZSBnYW1lc1xyXG4gIGNvbnN0IFtmYXZvcml0ZUdhbWVzLCBzZXRGYXZvcml0ZUdhbWVzXSA9IHVzZVN0YXRlKHByb3BzLmdhbWVzKTtcclxuICAvL3RoZSB1c2VyJ3MgZmF2b3JpdGUgZ2FtZSBhcyBjdXJyZW50bHkgZGlzcGxheWVkLiB0aGVzZSBtYXkgZGlmZmVyXHJcbiAgLy9mcm9tIGFjdHVhbCBmYXZvcml0ZSBnYW1lcyBkdXJpbmcgZWRpdGluZ1xyXG4gIGNvbnN0IFtkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLCBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXSA9IHVzZVN0YXRlKFxyXG4gICAgZmF2b3JpdGVHYW1lc1xyXG4gICk7XHJcbiAgLy93aGV0aGVyIG9yIG5vdCB1c2VyIGlzIGVkaXRpbmcgZmF2b3JpdGUgZ2FtZXNcclxuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBhIEdhbWUgaXMgZHJhZ2dlZC4gQWRkc1xyXG4gICAqIHRoZSBHYW1lJ3MgZGF0YS1pbmRleCBhdHRyaWJ1dGUgdG9cclxuICAgKiBEcmFnRXZlbnQuZGF0YVRyYW5zZmVyIHRvIGJlIHVzZWQgYnlcclxuICAgKiBkcm9wR2FtZSgpIGxhdGVyIG9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhZ0dhbWUoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLy9kcmFnb3ZlciBoYW5kbGVyIGlzIG5lZWRlZCB0byBtYWtlIGVsZW1lbnRcclxuICAvL2RyYWdnYWJsZVxyXG4gIGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHJhZ2dlZCBnYW1lIHdpbGwgYmUgc3dhcHBlZCB3aXRoIHRoZSBnYW1lXHJcbiAgICogaXQncyBkcm9wcGVkIG9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBkcm9wR2FtZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgbmV3RmF2ZUdhbWVzID0gWy4uLmRpc3BsYXllZEZhdm9yaXRlR2FtZXNdO1xyXG4gICAgY29uc3QgbmV3R2FtZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgLy9pbmRleCBvZiBnYW1lIHRoYXQgd2FzIGRyb3BwZWQgb25cclxuICAgIGNvbnN0IGRyb3BUYXJnZXQgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XHJcbiAgICAvL2RhdGFUcmFuc2ZlciB3aWxsIGNvbnRhaW4gYSBqcyBvYmplY3QgaWYgdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZFxyXG4gICAgLy9pcyBmcm9tIHNlYXJjaCByZXN1bHRzLCBtZWFuaW5nIGEgbmV3IGdhbWUgaXMgYmVpbmcgYWRkZWRcclxuICAgIC8vdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAgIGlmIChuZXdHYW1lKSB7XHJcbiAgICAgIGNvbnN0IG5ld0dhbWVBc09iamVjdCA9IEpTT04ucGFyc2UobmV3R2FtZSk7XHJcbiAgICAgIC8vd2UgcmVwbGFjZSBlbGVtZW50cyBhcyB3ZSBnbywgZXZlbnR1YWxseSB3ZSBhbiBlbGVtZW50IHRvIG5ld0ZhdmVHYW1lc1tuZXdGYXZlR2FtZXMubGVuZ3RoXVxyXG4gICAgICAvL3RoaXMgaW5jcmVhc2VzIHRoZSBsZW5ndGggYW5kIHRoZSBsb29wIGdvZXMgb24gZm9yZXZlclxyXG4gICAgICAvL3NvIHdlIGtlZXAgdGhlIGxlbmd0aCBvZiB0aGUgbGlzdCBiZWZvcmUgd2Ugc3RhcnRcclxuICAgICAgY29uc3QgbGVuZ3RoID0gbmV3RmF2ZUdhbWVzLmxlbmd0aDtcclxuICAgICAgLy9nYW1lIHRvIGJlIGFkZGVkIGluXHJcbiAgICAgIGxldCBob2xkZXIgPSBuZXdHYW1lQXNPYmplY3Q7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG5ld0ZhdmVHYW1lc1tpXSAmJiBuZXdGYXZlR2FtZXNbaV0uaWQgPT09IG5ld0dhbWVBc09iamVjdC5pZClcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3N0YXJ0IHN3YXBwaW5nIGZyb20gZHJvcFRhcmdldCBvbndhcmRzXHJcbiAgICAgICAgaWYgKGkgPj0gZHJvcFRhcmdldCkge1xyXG4gICAgICAgICAgLy9wdXQgaG9sZGVyIGludG8gdGhlIGxpc3QsIHRha2Ugd2hhdCB3YXMgdGhlcmUgYW5kIHB1dCBpbnRvIGhvbGRlclxyXG4gICAgICAgICAgY29uc3QgdGVtcCA9IG5ld0ZhdmVHYW1lc1tpXTtcclxuICAgICAgICAgIG5ld0ZhdmVHYW1lc1tpXSA9IGhvbGRlcjtcclxuICAgICAgICAgIGhvbGRlciA9IHRlbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2lmIHRoZXJlIGlzIG5vIGpzIG9iamVjdCwgdGhlbiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkIGlzIGFuIGFscmVhZHlcclxuICAgIC8vZXhpc3RpbmcgZ2FtZSBzbyB3ZSBqdXN0IHN3YXAgcGxhY2VzXHJcbiAgICBlbHNlIHtcclxuICAgICAgLy90aGUgZ2FtZSB0aGF0IHdhcyBiZWluZyBkcmFnZ2VkXHJcbiAgICAgIGNvbnN0IGRyYWdnZWRHYW1lID0gTnVtYmVyKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpKTtcclxuICAgICAgY29uc3QgdGVtcCA9IG5ld0ZhdmVHYW1lc1tkcm9wVGFyZ2V0XTtcclxuICAgICAgbmV3RmF2ZUdhbWVzW2Ryb3BUYXJnZXRdID0gbmV3RmF2ZUdhbWVzW2RyYWdnZWRHYW1lXTtcclxuICAgICAgbmV3RmF2ZUdhbWVzW2RyYWdnZWRHYW1lXSA9IHRlbXA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhuZXdGYXZlR2FtZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlcyBhIGdhbWUgZnJvbSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGdhbWVJZCB0aGUgaWQgb2YgZ2FtZSB0byBiZSBkZWxldGVkXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZGVsZXRlR2FtZShnYW1lSWQpIHtcclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMoXHJcbiAgICAgIGRpc3BsYXllZEZhdm9yaXRlR2FtZXMuZmlsdGVyKChnYW1lKSA9PiBnYW1lLmlkICE9PSBnYW1lSWQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gZWRpdGluZyBpcyBjYW5jZWxsZWQuIFNldHMgZGlzcGxheWVkIGZhdm9yaXRlIGdhbWVzXHJcbiAgICogdG8gYWN0dWFsIGZhdm9yaXRlIGdhbWVzLlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHJvbGxiYWNrQ2hhbmdlcygpIHtcclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMoZmF2b3JpdGVHYW1lcyk7XHJcbiAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2F2ZUNoYW5nZXMoKSB7XHJcbiAgICBjb25zdCBmYXZlR2FtZUlkcyA9IGRpc3BsYXllZEZhdm9yaXRlR2FtZXMubWFwKChnYW1lKSA9PiBnYW1lLmlkKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZmF2b3JpdGVzLyR7cHJvcHMuaWR9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZmF2ZUdhbWVJZHMpLFxyXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICAgICAgc2V0RmF2b3JpdGVHYW1lcyhkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL2dldCBhIGxpc3Qgb2YgR2FtZSBjb21wb25lbnRzIGNvcnJlc3BvbmRpbmcgdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAvL2VhY2ggaXMgZ2l2ZW4gYSBkYXRhLWluZGV4IGF0dHJpYnV0ZSB0aGF0IGNvcnJlc3BvbmRzIHRvXHJcbiAgLy93aGF0IHBvc2l0aW9uIGluIHRoZSBsaXN0IHRoZXkgYXJlLiB0aGlzIHdpbGwgYmUgdXNlZCBkdXJpbmdcclxuICAvL2VkaXRpbmcgZmF2b3JpdGUgZ2FtZXMuXHJcbiAgY29uc3QgZmF2b3JpdGVHYW1lc0xpc3QgPSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLm1hcCgoZ2FtZSwgaW5kZXgpID0+IChcclxuICAgIDxHYW1lXHJcbiAgICAgIGtleT17Z2FtZS5pZH1cclxuICAgICAgZ2FtZUlkPXtnYW1lLmlkfVxyXG4gICAgICBnYW1lTmFtZT17Z2FtZS5uYW1lfVxyXG4gICAgICBnYW1lQ292ZXJVcmw9e2dhbWUuY292ZXJ1cmx9XHJcbiAgICAgIGlzRWRpdGluZz17aXNFZGl0aW5nfVxyXG4gICAgICBkYXRhLWluZGV4PXtcIlwiICsgaW5kZXh9XHJcbiAgICAgIGRyYWdnYWJsZT17aXNFZGl0aW5nICsgXCJcIn1cclxuICAgICAgb25EcmFnU3RhcnQ9e2lzRWRpdGluZyA/IHN0YXJ0RHJhZ0dhbWUgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uRHJhZ092ZXI9e2lzRWRpdGluZyA/IGRyYWdPdmVyIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRyb3A9e2lzRWRpdGluZyA/IGRyb3BHYW1lIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRlbGV0ZT17ZGVsZXRlR2FtZX1cclxuICAgIC8+XHJcbiAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+e3Byb3BzLmRpc3BsYXlOYW1lfTwvaDE+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXZvcml0ZS1nYW1lcy1saXN0XCI+e2Zhdm9yaXRlR2FtZXNMaXN0fTwvZGl2PlxyXG4gICAgICAgIHtwcm9wcy5pZCAmJlxyXG4gICAgICAgICAgKCFpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKHRydWUpfT5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cm9sbGJhY2tDaGFuZ2VzfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVDaGFuZ2VzfT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNFZGl0aW5nICYmIDxHYW1lU2VhcmNoQm94IC8+fVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnRleHQucmVzLmxvY2FscykpLFxyXG4gIH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=