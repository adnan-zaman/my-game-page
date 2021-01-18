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
    0: displayedSearchTerm,
    1: setDisplayedSearchTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""); //the actual underlying search term regardless of whats typed
  //clicking next/prev will change pages for this value
  //clicking search button will change this value

  const {
    0: searchTerm,
    1: setSearchTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(displayedSearchTerm); //page of search results

  const {
    0: searchPage,
    1: setSearchPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined); //list of objects that will be retrieved from search api

  const {
    0: searchResults,
    1: setSearchResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const startSearch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
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
    lineNumber: 35,
    columnNumber: 5
  }, this));
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


  async function fetchAndPopulateSearchResults(term, page) {
    setLoading(true);
    const query = `http://localhost:3000/api/search/${term}/${page}`;
    const response = await fetch(query);
    const results = await response.json();
    setSearchResults(results);
    setLoading(false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: handleSearch,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "game-search-bar",
          children: "Name of Game:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "game-search-bar",
          value: displayedSearchTerm,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this), searchPage >= 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            onClick: () => changePage(searchPage - 1),
            children: "Prev"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "page-number",
            children: "Page:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            id: "page-number",
            disabled: true,
            value: searchPage + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            onClick: () => changePage(searchPage + 1),
            children: "Next"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "search-results",
      children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      }, this), displayedSearchResults]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYW1lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2FtZVNlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyUGFnZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkdhbWUiLCJwcm9wcyIsInN0b3BEcmFnIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidW5kcmFnZ2FibGUiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJnYW1lQ292ZXJVcmwiLCJnYW1lTmFtZSIsImlzRWRpdGluZyIsIm9uRGVsZXRlIiwiZ2FtZUlkIiwiR2FtZVNlYXJjaEJveCIsImRpc3BsYXllZFNlYXJjaFRlcm0iLCJzZXREaXNwbGF5ZWRTZWFyY2hUZXJtIiwidXNlU3RhdGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNlYXJjaFBhZ2UiLCJzZXRTZWFyY2hQYWdlIiwidW5kZWZpbmVkIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJzdGFydFNlYXJjaCIsInVzZVJlZiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmlyc3RSZW5kZXIiLCJzdGFydERyYWdHYW1lIiwiZ2FtZSIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZHJhZ092ZXIiLCJkcm9wRWZmZWN0IiwiZGlzcGxheWVkU2VhcmNoUmVzdWx0cyIsIm1hcCIsImlkIiwibmFtZSIsImNvdmVydXJsIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2giLCJmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyIsImNoYW5nZVBhZ2UiLCJwYWdlTnVtYmVyIiwidGVybSIsInBhZ2UiLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHRzIiwianNvbiIsIlVzZXJQYWdlIiwiZmF2b3JpdGVHYW1lcyIsInNldEZhdm9yaXRlR2FtZXMiLCJnYW1lcyIsImRpc3BsYXllZEZhdm9yaXRlR2FtZXMiLCJzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzIiwic2V0SXNFZGl0aW5nIiwiZGF0YXNldCIsImluZGV4IiwiZHJvcEdhbWUiLCJuZXdGYXZlR2FtZXMiLCJuZXdHYW1lIiwiZ2V0RGF0YSIsImRyb3BUYXJnZXQiLCJOdW1iZXIiLCJuZXdHYW1lQXNPYmplY3QiLCJwYXJzZSIsImxlbmd0aCIsImhvbGRlciIsImkiLCJ0ZW1wIiwiZHJhZ2dlZEdhbWUiLCJkZWxldGVHYW1lIiwiZmlsdGVyIiwicm9sbGJhY2tDaGFuZ2VzIiwic2F2ZUNoYW5nZXMiLCJmYXZlR2FtZUlkcyIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiYm9keSIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiZmF2b3JpdGVHYW1lc0xpc3QiLCJkaXNwbGF5TmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJsb2NhbHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QyxNQUEzQixDQUFYO0FBREYsR0FBUDtBQUdELEM7Ozs7Ozs7Ozs7O0FDakxELGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3VzZXJQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91c2VyUGFnZS5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEEgY29tcG9uZW50IHJlcHJlc2VudGluZyBhIHNpbmdsZSBnYW1lXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUocHJvcHMpIHtcclxuICBmdW5jdGlvbiBzdG9wRHJhZyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuICAvL2dpdmVuIHRvIGRpdidzIGNoaWxkcmVuIHNvIG9ubHkgdGhlIGdhbWUtY29udGFpbmVyXHJcbiAgLy9pcyBkcmFnZ2FibGVcclxuICBjb25zdCB1bmRyYWdnYWJsZSA9IHtcclxuICAgIGRyYWdnYWJsZTogXCJmYWxzZVwiLFxyXG4gICAgb25EcmFnU3RhcnQ6IHN0b3BEcmFnLFxyXG4gICAgb25EcmFnT3Zlcjogc3RvcERyYWcsXHJcbiAgICBvbkRyb3A6IHN0b3BEcmFnLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImdhbWUtY29udGFpbmVyXCJcclxuICAgICAgZGF0YS1pbmRleD17cHJvcHNbXCJkYXRhLWluZGV4XCJdfVxyXG4gICAgICBvbkRyYWdTdGFydD17cHJvcHMub25EcmFnU3RhcnR9XHJcbiAgICAgIG9uRHJhZ092ZXI9e3Byb3BzLm9uRHJhZ092ZXJ9XHJcbiAgICAgIG9uRHJvcD17cHJvcHMub25Ecm9wfVxyXG4gICAgICBkcmFnZ2FibGU9e3Byb3BzLmRyYWdnYWJsZX1cclxuICAgID5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz17cHJvcHMuZ2FtZUNvdmVyVXJsfVxyXG4gICAgICAgIGFsdD17YENvdmVyIGFydCBmb3IgJHtwcm9wcy5nYW1lTmFtZX1gfVxyXG4gICAgICAgIGhlaWdodD17OTB9XHJcbiAgICAgICAgd2lkdGg9ezkwfVxyXG4gICAgICAgIHsuLi51bmRyYWdnYWJsZX1cclxuICAgICAgLz5cclxuICAgICAgPHAgey4uLnVuZHJhZ2dhYmxlfT57cHJvcHMuZ2FtZU5hbWV9PC9wPlxyXG4gICAgICB7cHJvcHMuaXNFZGl0aW5nICYmIChcclxuICAgICAgICA8YnV0dG9uIHsuLi51bmRyYWdnYWJsZX0gb25DbGljaz17KCkgPT4gcHJvcHMub25EZWxldGUocHJvcHMuZ2FtZUlkKX0+XHJcbiAgICAgICAgICBEZWxldGVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVTZWFyY2hCb3gocHJvcHMpIHtcclxuICAvL3NlYXJjaCB0ZXJtIGluIHNlYXJjaCBiYXJcclxuICBjb25zdCBbZGlzcGxheWVkU2VhcmNoVGVybSwgc2V0RGlzcGxheWVkU2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvL3RoZSBhY3R1YWwgdW5kZXJseWluZyBzZWFyY2ggdGVybSByZWdhcmRsZXNzIG9mIHdoYXRzIHR5cGVkXHJcbiAgLy9jbGlja2luZyBuZXh0L3ByZXYgd2lsbCBjaGFuZ2UgcGFnZXMgZm9yIHRoaXMgdmFsdWVcclxuICAvL2NsaWNraW5nIHNlYXJjaCBidXR0b24gd2lsbCBjaGFuZ2UgdGhpcyB2YWx1ZVxyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKGRpc3BsYXllZFNlYXJjaFRlcm0pO1xyXG4gIC8vcGFnZSBvZiBzZWFyY2ggcmVzdWx0c1xyXG4gIGNvbnN0IFtzZWFyY2hQYWdlLCBzZXRTZWFyY2hQYWdlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgLy9saXN0IG9mIG9iamVjdHMgdGhhdCB3aWxsIGJlIHJldHJpZXZlZCBmcm9tIHNlYXJjaCBhcGlcclxuICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgc3RhcnRTZWFyY2ggPSB1c2VSZWYoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy91c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGl0cyBmaXJzdCByZW5kZXIgb3Igbm90XHJcbiAgY29uc3QgZmlyc3RSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhZ0dhbWUoZSwgZ2FtZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIsIEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcclxuICB9XHJcblxyXG4gIC8vZHJhZ292ZXIgaGFuZGxlciBpcyBuZWVkZWQgdG8gbWFrZSBlbGVtZW50XHJcbiAgLy9kcmFnZ2FibGVcclxuICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzcGxheWVkU2VhcmNoUmVzdWx0cyA9IHNlYXJjaFJlc3VsdHMubWFwKChnYW1lKSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBkcmFnZ2FibGU9e3RydWV9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXsoZSkgPT4gc3RhcnREcmFnR2FtZShlLCBnYW1lKX1cclxuICAgICAgb25EcmFnT3Zlcj17ZHJhZ092ZXJ9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGRpc3BsYXllZCBzZWFyY2ggdGVybVxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgc2V0RGlzcGxheWVkU2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHNlYXJjaFRlcm0gdG8gZGlzcGxheWVkU2VhcmNoVGVybVxyXG4gICAqIGFuZCBmZXRjaGVzIHNlYXJjaCByZXN1bHRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZGlzcGxheWVkU2VhcmNoVGVybSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoVGVybShkaXNwbGF5ZWRTZWFyY2hUZXJtKTtcclxuICAgIHNldFNlYXJjaFBhZ2UoMCk7XHJcbiAgICBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyhkaXNwbGF5ZWRTZWFyY2hUZXJtLCAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgcGFnZSBudW1iZXIgZm9yIHNlYXJjaFRlcm1cclxuICAgKiAobm90IGRpc3BsYXllZFNlYXJjaFRlcm0pIGFuZCBmZXRjaGVzIHNlYXJjaFxyXG4gICAqIHJlc3VsdHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZU51bWJlciBuZXcgcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBmdW5jdGlvbiBjaGFuZ2VQYWdlKHBhZ2VOdW1iZXIpIHtcclxuICAgIGlmIChwYWdlTnVtYmVyIDwgMCkgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoUGFnZShwYWdlTnVtYmVyKTtcclxuICAgIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKHNlYXJjaFRlcm0sIHBhZ2VOdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2hlcyBhIHNlYXJjaCBmcm9tIHRoZSBBUEkgYW5kIHBvcHVsYXRlcyBwYWdlXHJcbiAgICogd2l0aCBzZWFyY2ggcmVzdWx0cy4gVGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSBjYWxsZWRcclxuICAgKiB3aXRoIGEgc2VhcmNoIHRlcm0gYW5kIHBhZ2UgbWFudWFsbHkgaW5zdGVhZCBvZiByZWx5aW5nIG9uXHJcbiAgICogY2hlY2tpbmcgc3RhdGUgYXMgcmVhZGluZyBzdGF0ZSBpbW1lZGlhdGVseSBhZnRlciBzZXR0aW5nIGl0XHJcbiAgICogd2lsbCByZXR1cm4gc3RhbGUgdmFsdWVzLiBTbywgd2UgZ2l2ZSBpdCB0aGUgZnJlc2ggdmFsdWVzIG1hbnVhbGx5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlcm0gc2VhcmNoIHRlcm1cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSBzZWFyY2ggcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyh0ZXJtLCBwYWdlKSB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgcXVlcnkgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZWFyY2gvJHt0ZXJtfS8ke3BhZ2V9YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnkpO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHNldFNlYXJjaFJlc3VsdHMocmVzdWx0cyk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYW1lLXNlYXJjaC1iYXJcIj5OYW1lIG9mIEdhbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImdhbWUtc2VhcmNoLWJhclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkaXNwbGF5ZWRTZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgIHtzZWFyY2hQYWdlID49IDAgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2Uoc2VhcmNoUGFnZSAtIDEpfT5cclxuICAgICAgICAgICAgICAgIFByZXZcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhZ2UtbnVtYmVyXCI+UGFnZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYWdlLW51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYWdlICsgMX1cclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHNlYXJjaFBhZ2UgKyAxKX0+XHJcbiAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHRzXCI+XHJcbiAgICAgICAge2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XHJcbiAgICAgICAge2Rpc3BsYXllZFNlYXJjaFJlc3VsdHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVcIjtcclxuaW1wb3J0IEdhbWVTZWFyY2hCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FtZVNlYXJjaEJveFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIFRoZSBwYWdlIHRoYXQgaXMgZGlzcGxheWVkIHdoZW5cclxuICogdmlld2luZyBhIHVzZXIncyBwcm9maWxlXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQYWdlKHByb3BzKSB7XHJcbiAgLyogc2V0dGluZyBzdGF0ZSAqL1xyXG4gIC8vdGhlIHVzZXIncyBhY3R1YWwgZmF2b3JpdGUgZ2FtZXNcclxuICBjb25zdCBbZmF2b3JpdGVHYW1lcywgc2V0RmF2b3JpdGVHYW1lc10gPSB1c2VTdGF0ZShwcm9wcy5nYW1lcyk7XHJcbiAgLy90aGUgdXNlcidzIGZhdm9yaXRlIGdhbWUgYXMgY3VycmVudGx5IGRpc3BsYXllZC4gdGhlc2UgbWF5IGRpZmZlclxyXG4gIC8vZnJvbSBhY3R1YWwgZmF2b3JpdGUgZ2FtZXMgZHVyaW5nIGVkaXRpbmdcclxuICBjb25zdCBbZGlzcGxheWVkRmF2b3JpdGVHYW1lcywgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lc10gPSB1c2VTdGF0ZShcclxuICAgIGZhdm9yaXRlR2FtZXNcclxuICApO1xyXG4gIC8vd2hldGhlciBvciBub3QgdXNlciBpcyBlZGl0aW5nIGZhdm9yaXRlIGdhbWVzXHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gYSBHYW1lIGlzIGRyYWdnZWQuIEFkZHNcclxuICAgKiB0aGUgR2FtZSdzIGRhdGEtaW5kZXggYXR0cmlidXRlIHRvXHJcbiAgICogRHJhZ0V2ZW50LmRhdGFUcmFuc2ZlciB0byBiZSB1c2VkIGJ5XHJcbiAgICogZHJvcEdhbWUoKSBsYXRlciBvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBzdGFydERyYWdHYW1lKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICB9XHJcblxyXG4gIC8vZHJhZ292ZXIgaGFuZGxlciBpcyBuZWVkZWQgdG8gbWFrZSBlbGVtZW50XHJcbiAgLy9kcmFnZ2FibGVcclxuICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRyYWdnZWQgZ2FtZSB3aWxsIGJlIHN3YXBwZWQgd2l0aCB0aGUgZ2FtZVxyXG4gICAqIGl0J3MgZHJvcHBlZCBvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZHJvcEdhbWUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IG5ld0ZhdmVHYW1lcyA9IFsuLi5kaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXTtcclxuICAgIGNvbnN0IG5ld0dhbWUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIC8vaW5kZXggb2YgZ2FtZSB0aGF0IHdhcyBkcm9wcGVkIG9uXHJcbiAgICBjb25zdCBkcm9wVGFyZ2V0ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgLy9kYXRhVHJhbnNmZXIgd2lsbCBjb250YWluIGEganMgb2JqZWN0IGlmIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWRcclxuICAgIC8vaXMgZnJvbSBzZWFyY2ggcmVzdWx0cywgbWVhbmluZyBhIG5ldyBnYW1lIGlzIGJlaW5nIGFkZGVkXHJcbiAgICAvL3RvIGZhdm9yaXRlIGdhbWVzXHJcbiAgICBpZiAobmV3R2FtZSkge1xyXG4gICAgICBjb25zdCBuZXdHYW1lQXNPYmplY3QgPSBKU09OLnBhcnNlKG5ld0dhbWUpO1xyXG4gICAgICAvL3dlIHJlcGxhY2UgZWxlbWVudHMgYXMgd2UgZ28sIGV2ZW50dWFsbHkgd2UgYW4gZWxlbWVudCB0byBuZXdGYXZlR2FtZXNbbmV3RmF2ZUdhbWVzLmxlbmd0aF1cclxuICAgICAgLy90aGlzIGluY3JlYXNlcyB0aGUgbGVuZ3RoIGFuZCB0aGUgbG9vcCBnb2VzIG9uIGZvcmV2ZXJcclxuICAgICAgLy9zbyB3ZSBrZWVwIHRoZSBsZW5ndGggb2YgdGhlIGxpc3QgYmVmb3JlIHdlIHN0YXJ0XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IG5ld0ZhdmVHYW1lcy5sZW5ndGg7XHJcbiAgICAgIC8vZ2FtZSB0byBiZSBhZGRlZCBpblxyXG4gICAgICBsZXQgaG9sZGVyID0gbmV3R2FtZUFzT2JqZWN0O1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChuZXdGYXZlR2FtZXNbaV0gJiYgbmV3RmF2ZUdhbWVzW2ldLmlkID09PSBuZXdHYW1lQXNPYmplY3QuaWQpXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy9zdGFydCBzd2FwcGluZyBmcm9tIGRyb3BUYXJnZXQgb253YXJkc1xyXG4gICAgICAgIGlmIChpID49IGRyb3BUYXJnZXQpIHtcclxuICAgICAgICAgIC8vcHV0IGhvbGRlciBpbnRvIHRoZSBsaXN0LCB0YWtlIHdoYXQgd2FzIHRoZXJlIGFuZCBwdXQgaW50byBob2xkZXJcclxuICAgICAgICAgIGNvbnN0IHRlbXAgPSBuZXdGYXZlR2FtZXNbaV07XHJcbiAgICAgICAgICBuZXdGYXZlR2FtZXNbaV0gPSBob2xkZXI7XHJcbiAgICAgICAgICBob2xkZXIgPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9pZiB0aGVyZSBpcyBubyBqcyBvYmplY3QsIHRoZW4gdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZCBpcyBhbiBhbHJlYWR5XHJcbiAgICAvL2V4aXN0aW5nIGdhbWUgc28gd2UganVzdCBzd2FwIHBsYWNlc1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vdGhlIGdhbWUgdGhhdCB3YXMgYmVpbmcgZHJhZ2dlZFxyXG4gICAgICBjb25zdCBkcmFnZ2VkR2FtZSA9IE51bWJlcihlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKSk7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSBuZXdGYXZlR2FtZXNbZHJvcFRhcmdldF07XHJcbiAgICAgIG5ld0ZhdmVHYW1lc1tkcm9wVGFyZ2V0XSA9IG5ld0ZhdmVHYW1lc1tkcmFnZ2VkR2FtZV07XHJcbiAgICAgIG5ld0ZhdmVHYW1lc1tkcmFnZ2VkR2FtZV0gPSB0ZW1wO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMobmV3RmF2ZUdhbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZXMgYSBnYW1lIGZyb20gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBnYW1lSWQgdGhlIGlkIG9mIGdhbWUgdG8gYmUgZGVsZXRlZFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRlbGV0ZUdhbWUoZ2FtZUlkKSB7XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKFxyXG4gICAgICBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLmZpbHRlcigoZ2FtZSkgPT4gZ2FtZS5pZCAhPT0gZ2FtZUlkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIGVkaXRpbmcgaXMgY2FuY2VsbGVkLiBTZXRzIGRpc3BsYXllZCBmYXZvcml0ZSBnYW1lc1xyXG4gICAqIHRvIGFjdHVhbCBmYXZvcml0ZSBnYW1lcy5cclxuICAgKi9cclxuICBmdW5jdGlvbiByb2xsYmFja0NoYW5nZXMoKSB7XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKGZhdm9yaXRlR2FtZXMpO1xyXG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNhdmVDaGFuZ2VzKCkge1xyXG4gICAgY29uc3QgZmF2ZUdhbWVJZHMgPSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLm1hcCgoZ2FtZSkgPT4gZ2FtZS5pZCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Zhdm9yaXRlcy8ke3Byb3BzLmlkfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZhdmVHYW1lSWRzKSxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7XHJcbiAgICAgIHNldEZhdm9yaXRlR2FtZXMoZGlzcGxheWVkRmF2b3JpdGVHYW1lcyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9nZXQgYSBsaXN0IG9mIEdhbWUgY29tcG9uZW50cyBjb3JyZXNwb25kaW5nIHRvIGZhdm9yaXRlIGdhbWVzXHJcbiAgLy9lYWNoIGlzIGdpdmVuIGEgZGF0YS1pbmRleCBhdHRyaWJ1dGUgdGhhdCBjb3JyZXNwb25kcyB0b1xyXG4gIC8vd2hhdCBwb3NpdGlvbiBpbiB0aGUgbGlzdCB0aGV5IGFyZS4gdGhpcyB3aWxsIGJlIHVzZWQgZHVyaW5nXHJcbiAgLy9lZGl0aW5nIGZhdm9yaXRlIGdhbWVzLlxyXG4gIGNvbnN0IGZhdm9yaXRlR2FtZXNMaXN0ID0gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5tYXAoKGdhbWUsIGluZGV4KSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cclxuICAgICAgZGF0YS1pbmRleD17XCJcIiArIGluZGV4fVxyXG4gICAgICBkcmFnZ2FibGU9e2lzRWRpdGluZyArIFwiXCJ9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXtpc0VkaXRpbmcgPyBzdGFydERyYWdHYW1lIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRyYWdPdmVyPXtpc0VkaXRpbmcgPyBkcmFnT3ZlciA6IHVuZGVmaW5lZH1cclxuICAgICAgb25Ecm9wPXtpc0VkaXRpbmcgPyBkcm9wR2FtZSA6IHVuZGVmaW5lZH1cclxuICAgICAgb25EZWxldGU9e2RlbGV0ZUdhbWV9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPntwcm9wcy5kaXNwbGF5TmFtZX08L2gxPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2b3JpdGUtZ2FtZXMtbGlzdFwiPntmYXZvcml0ZUdhbWVzTGlzdH08L2Rpdj5cclxuICAgICAgICB7cHJvcHMuaWQgJiZcclxuICAgICAgICAgICghaXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdGluZyh0cnVlKX0+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JvbGxiYWNrQ2hhbmdlc30+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlQ2hhbmdlc30+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzRWRpdGluZyAmJiA8R2FtZVNlYXJjaEJveCAvPn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb250ZXh0LnJlcy5sb2NhbHMpKSxcclxuICB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9