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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""); //used to determine whether its first render or not

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
    lineNumber: 36,
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
    setErrorMessage("");
    setLoading(true);
    const query = `http://localhost:3000/api/search/${term}/${page}`;
    const response = await fetch(query);
    const results = await response.json();

    if (response.ok) {
      setSearchResults(results);
    } else {
      setErrorMessage(results.message);
    }

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
          lineNumber: 110,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "game-search-bar",
          value: displayedSearchTerm,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this), searchPage >= 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            onClick: () => changePage(searchPage - 1),
            children: "Prev"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "page-number",
            children: "Page:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            id: "page-number",
            disabled: true,
            value: searchPage + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            onClick: () => changePage(searchPage + 1),
            children: "Next"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "search-results",
      children: [errorMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 26
      }, this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 21
      }, this), displayedSearchResults]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
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
   * The dragged game will be added to the
   * end of the list
   *
   * @param {DragEvent} e
   */


  function dropGameOnContainer(e) {
    e.preventDefault();
    e.stopPropagation();
    const newFaveGames = [...displayedFavoriteGames];
    const newGame = e.dataTransfer.getData("application/json"); //dataTransfer will contain a js object if the game being dragged
    //is from search results, meaning a new game is being added
    //to favorite games

    if (newGame) {
      newFaveGames.push(JSON.parse(newGame));
    } //if there is no js object, then the game being dragged is an already
    //existing game. dragged game is added to the end and rest are shifted up
    else {
        let newPos = Number(e.dataTransfer.getData("text/plain"));
        let draggedGame = newFaveGames[newPos]; //shift everything towards the front

        for (; newPos < newFaveGames.length - 1; newPos++) newFaveGames[newPos] = newFaveGames[newPos + 1]; //add draggedGame back to the end


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
    setDisplayedFavoriteGames(displayedFavoriteGames.filter(game => game.id !== gameId));
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

  async function saveChanges() {
    setErrorMessage("");
    const faveGameIds = displayedFavoriteGames.map(game => game.id);
    const response = await fetch(`http://localhost:3000/api/favorites/${props.id}`, {
      method: "PUT",
      credentials: "same-origin",
      body: JSON.stringify(faveGameIds),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      setIsEditing(false);
      setFavoriteGames(displayedFavoriteGames);
    } else {
      const error = await response.json();
      setErrorMessage(error.message);
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
    onDrop: isEditing ? dropGameOnGame : undefined,
    onDelete: deleteGame
  }, game.id, false, {
    fileName: _jsxFileName,
    lineNumber: 180,
    columnNumber: 5
  }, this));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.displayName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "favorite-games-list",
        onDrop: dropGameOnContainer,
        onDragOver: isEditing ? dragOver : undefined,
        children: favoriteGamesList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this), props.id && (!isEditing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: () => setIsEditing(true),
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: rollbackChanges,
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: saveChanges,
          children: "Save"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 15
        }, this)]
      }, void 0, true)), errorMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 26
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }, this), isEditing && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_GameSearchBox__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYW1lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2FtZVNlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyUGFnZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkdhbWUiLCJwcm9wcyIsInN0b3BEcmFnIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidW5kcmFnZ2FibGUiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJnYW1lQ292ZXJVcmwiLCJnYW1lTmFtZSIsImlzRWRpdGluZyIsIm9uRGVsZXRlIiwiZ2FtZUlkIiwiR2FtZVNlYXJjaEJveCIsImRpc3BsYXllZFNlYXJjaFRlcm0iLCJzZXREaXNwbGF5ZWRTZWFyY2hUZXJtIiwidXNlU3RhdGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNlYXJjaFBhZ2UiLCJzZXRTZWFyY2hQYWdlIiwidW5kZWZpbmVkIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJzdGFydFNlYXJjaCIsInVzZVJlZiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiZmlyc3RSZW5kZXIiLCJzdGFydERyYWdHYW1lIiwiZ2FtZSIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZHJhZ092ZXIiLCJkcm9wRWZmZWN0IiwiZGlzcGxheWVkU2VhcmNoUmVzdWx0cyIsIm1hcCIsImlkIiwibmFtZSIsImNvdmVydXJsIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2giLCJmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyIsImNoYW5nZVBhZ2UiLCJwYWdlTnVtYmVyIiwidGVybSIsInBhZ2UiLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHRzIiwianNvbiIsIm9rIiwibWVzc2FnZSIsIlVzZXJQYWdlIiwiZmF2b3JpdGVHYW1lcyIsInNldEZhdm9yaXRlR2FtZXMiLCJnYW1lcyIsImRpc3BsYXllZEZhdm9yaXRlR2FtZXMiLCJzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzIiwic2V0SXNFZGl0aW5nIiwiZGF0YXNldCIsImluZGV4IiwiZHJvcEdhbWVPbkdhbWUiLCJuZXdGYXZlR2FtZXMiLCJuZXdHYW1lIiwiZ2V0RGF0YSIsImRyb3BUYXJnZXQiLCJOdW1iZXIiLCJuZXdHYW1lQXNPYmplY3QiLCJwYXJzZSIsImxlbmd0aCIsImhvbGRlciIsImkiLCJ0ZW1wIiwiZHJhZ2dlZEdhbWUiLCJkcm9wR2FtZU9uQ29udGFpbmVyIiwicHVzaCIsIm5ld1BvcyIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVHYW1lIiwiZmlsdGVyIiwicm9sbGJhY2tDaGFuZ2VzIiwic2F2ZUNoYW5nZXMiLCJmYXZlR2FtZUlkcyIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiYm9keSIsImhlYWRlcnMiLCJlcnJvciIsImZhdm9yaXRlR2FtZXNMaXN0IiwiZGlzcGxheU5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwibG9jYWxzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FB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RSxDQUFDL0IsU0FBRCxnQkFDQztBQUFRLGVBQU8sRUFBRSxNQUFNd0QsWUFBWSxDQUFDLElBQUQsQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxnQkFHQztBQUFBLGdDQUNFO0FBQVEsaUJBQU8sRUFBRXVCLGVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBUSxpQkFBTyxFQUFFQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBLHNCQUpILENBUkgsRUFpQkc5RCxZQUFZLGlCQUFJO0FBQUEsa0JBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFxQkdsQixTQUFTLGlCQUFJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQmhCO0FBQUEsa0JBREY7QUF5QkQ7QUFFTSxTQUFTeUYsa0JBQVQsQ0FBNEJDLE9BQTVCLEVBQXFDO0FBQzFDLFNBQU87QUFDTHRHLFNBQUssRUFBRXFDLElBQUksQ0FBQ3lDLEtBQUwsQ0FBV3pDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZ0UsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQTNCLENBQVg7QUFERixHQUFQO0FBR0QsQzs7Ozs7Ozs7Ozs7QUNqT0Qsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvdXNlclBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3VzZXJQYWdlLmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogQSBjb21wb25lbnQgcmVwcmVzZW50aW5nIGEgc2luZ2xlIGdhbWVcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZShwcm9wcykge1xyXG4gIGZ1bmN0aW9uIHN0b3BEcmFnKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG4gIC8vZ2l2ZW4gdG8gZGl2J3MgY2hpbGRyZW4gc28gb25seSB0aGUgZ2FtZS1jb250YWluZXJcclxuICAvL2lzIGRyYWdnYWJsZVxyXG4gIGNvbnN0IHVuZHJhZ2dhYmxlID0ge1xyXG4gICAgZHJhZ2dhYmxlOiBcImZhbHNlXCIsXHJcbiAgICBvbkRyYWdTdGFydDogc3RvcERyYWcsXHJcbiAgICBvbkRyYWdPdmVyOiBzdG9wRHJhZyxcclxuICAgIG9uRHJvcDogc3RvcERyYWcsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiZ2FtZS1jb250YWluZXJcIlxyXG4gICAgICBkYXRhLWluZGV4PXtwcm9wc1tcImRhdGEtaW5kZXhcIl19XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXtwcm9wcy5vbkRyYWdTdGFydH1cclxuICAgICAgb25EcmFnT3Zlcj17cHJvcHMub25EcmFnT3Zlcn1cclxuICAgICAgb25Ecm9wPXtwcm9wcy5vbkRyb3B9XHJcbiAgICAgIGRyYWdnYWJsZT17cHJvcHMuZHJhZ2dhYmxlfVxyXG4gICAgPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPXtwcm9wcy5nYW1lQ292ZXJVcmx9XHJcbiAgICAgICAgYWx0PXtgQ292ZXIgYXJ0IGZvciAke3Byb3BzLmdhbWVOYW1lfWB9XHJcbiAgICAgICAgaGVpZ2h0PXs5MH1cclxuICAgICAgICB3aWR0aD17OTB9XHJcbiAgICAgICAgey4uLnVuZHJhZ2dhYmxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8cCB7Li4udW5kcmFnZ2FibGV9Pntwcm9wcy5nYW1lTmFtZX08L3A+XHJcbiAgICAgIHtwcm9wcy5pc0VkaXRpbmcgJiYgKFxyXG4gICAgICAgIDxidXR0b24gey4uLnVuZHJhZ2dhYmxlfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkRlbGV0ZShwcm9wcy5nYW1lSWQpfT5cclxuICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZVNlYXJjaEJveChwcm9wcykge1xyXG4gIC8vc2VhcmNoIHRlcm0gaW4gc2VhcmNoIGJhclxyXG4gIGNvbnN0IFtkaXNwbGF5ZWRTZWFyY2hUZXJtLCBzZXREaXNwbGF5ZWRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vdGhlIGFjdHVhbCB1bmRlcmx5aW5nIHNlYXJjaCB0ZXJtIHJlZ2FyZGxlc3Mgb2Ygd2hhdHMgdHlwZWRcclxuICAvL2NsaWNraW5nIG5leHQvcHJldiB3aWxsIGNoYW5nZSBwYWdlcyBmb3IgdGhpcyB2YWx1ZVxyXG4gIC8vY2xpY2tpbmcgc2VhcmNoIGJ1dHRvbiB3aWxsIGNoYW5nZSB0aGlzIHZhbHVlXHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoZGlzcGxheWVkU2VhcmNoVGVybSk7XHJcbiAgLy9wYWdlIG9mIHNlYXJjaCByZXN1bHRzXHJcbiAgY29uc3QgW3NlYXJjaFBhZ2UsIHNldFNlYXJjaFBhZ2VdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAvL2xpc3Qgb2Ygb2JqZWN0cyB0aGF0IHdpbGwgYmUgcmV0cmlldmVkIGZyb20gc2VhcmNoIGFwaVxyXG4gIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBzdGFydFNlYXJjaCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy91c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGl0cyBmaXJzdCByZW5kZXIgb3Igbm90XHJcbiAgY29uc3QgZmlyc3RSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhZ0dhbWUoZSwgZ2FtZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIsIEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcclxuICB9XHJcblxyXG4gIC8vZHJhZ292ZXIgaGFuZGxlciBpcyBuZWVkZWQgdG8gbWFrZSBlbGVtZW50XHJcbiAgLy9kcmFnZ2FibGVcclxuICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzcGxheWVkU2VhcmNoUmVzdWx0cyA9IHNlYXJjaFJlc3VsdHMubWFwKChnYW1lKSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBkcmFnZ2FibGU9e3RydWV9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXsoZSkgPT4gc3RhcnREcmFnR2FtZShlLCBnYW1lKX1cclxuICAgICAgb25EcmFnT3Zlcj17ZHJhZ092ZXJ9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGRpc3BsYXllZCBzZWFyY2ggdGVybVxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgc2V0RGlzcGxheWVkU2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHNlYXJjaFRlcm0gdG8gZGlzcGxheWVkU2VhcmNoVGVybVxyXG4gICAqIGFuZCBmZXRjaGVzIHNlYXJjaCByZXN1bHRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZGlzcGxheWVkU2VhcmNoVGVybSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoVGVybShkaXNwbGF5ZWRTZWFyY2hUZXJtKTtcclxuICAgIHNldFNlYXJjaFBhZ2UoMCk7XHJcbiAgICBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyhkaXNwbGF5ZWRTZWFyY2hUZXJtLCAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgcGFnZSBudW1iZXIgZm9yIHNlYXJjaFRlcm1cclxuICAgKiAobm90IGRpc3BsYXllZFNlYXJjaFRlcm0pIGFuZCBmZXRjaGVzIHNlYXJjaFxyXG4gICAqIHJlc3VsdHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZU51bWJlciBuZXcgcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBmdW5jdGlvbiBjaGFuZ2VQYWdlKHBhZ2VOdW1iZXIpIHtcclxuICAgIGlmIChwYWdlTnVtYmVyIDwgMCkgcmV0dXJuO1xyXG4gICAgc2V0U2VhcmNoUGFnZShwYWdlTnVtYmVyKTtcclxuICAgIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKHNlYXJjaFRlcm0sIHBhZ2VOdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2hlcyBhIHNlYXJjaCBmcm9tIHRoZSBBUEkgYW5kIHBvcHVsYXRlcyBwYWdlXHJcbiAgICogd2l0aCBzZWFyY2ggcmVzdWx0cy4gVGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSBjYWxsZWRcclxuICAgKiB3aXRoIGEgc2VhcmNoIHRlcm0gYW5kIHBhZ2UgbWFudWFsbHkgaW5zdGVhZCBvZiByZWx5aW5nIG9uXHJcbiAgICogY2hlY2tpbmcgc3RhdGUgYXMgcmVhZGluZyBzdGF0ZSBpbW1lZGlhdGVseSBhZnRlciBzZXR0aW5nIGl0XHJcbiAgICogd2lsbCByZXR1cm4gc3RhbGUgdmFsdWVzLiBTbywgd2UgZ2l2ZSBpdCB0aGUgZnJlc2ggdmFsdWVzIG1hbnVhbGx5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlcm0gc2VhcmNoIHRlcm1cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSBzZWFyY2ggcGFnZSBudW1iZXJcclxuICAgKi9cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyh0ZXJtLCBwYWdlKSB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgcXVlcnkgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZWFyY2gvJHt0ZXJtfS8ke3BhZ2V9YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnkpO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRTZWFyY2hSZXN1bHRzKHJlc3VsdHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKHJlc3VsdHMubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYW1lLXNlYXJjaC1iYXJcIj5OYW1lIG9mIEdhbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImdhbWUtc2VhcmNoLWJhclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkaXNwbGF5ZWRTZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgIHtzZWFyY2hQYWdlID49IDAgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2Uoc2VhcmNoUGFnZSAtIDEpfT5cclxuICAgICAgICAgICAgICAgIFByZXZcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhZ2UtbnVtYmVyXCI+UGFnZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYWdlLW51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYWdlICsgMX1cclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHNlYXJjaFBhZ2UgKyAxKX0+XHJcbiAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHRzXCI+XHJcbiAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cD57ZXJyb3JNZXNzYWdlfTwvcD59XHJcbiAgICAgICAge2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XHJcbiAgICAgICAge2Rpc3BsYXllZFNlYXJjaFJlc3VsdHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVcIjtcclxuaW1wb3J0IEdhbWVTZWFyY2hCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FtZVNlYXJjaEJveFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIFRoZSBwYWdlIHRoYXQgaXMgZGlzcGxheWVkIHdoZW5cclxuICogdmlld2luZyBhIHVzZXIncyBwcm9maWxlXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQYWdlKHByb3BzKSB7XHJcbiAgLyogc2V0dGluZyBzdGF0ZSAqL1xyXG4gIC8vdGhlIHVzZXIncyBhY3R1YWwgZmF2b3JpdGUgZ2FtZXNcclxuICBjb25zdCBbZmF2b3JpdGVHYW1lcywgc2V0RmF2b3JpdGVHYW1lc10gPSB1c2VTdGF0ZShwcm9wcy5nYW1lcyk7XHJcbiAgLy90aGUgdXNlcidzIGZhdm9yaXRlIGdhbWUgYXMgY3VycmVudGx5IGRpc3BsYXllZC4gdGhlc2UgbWF5IGRpZmZlclxyXG4gIC8vZnJvbSBhY3R1YWwgZmF2b3JpdGUgZ2FtZXMgZHVyaW5nIGVkaXRpbmdcclxuICBjb25zdCBbZGlzcGxheWVkRmF2b3JpdGVHYW1lcywgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lc10gPSB1c2VTdGF0ZShcclxuICAgIGZhdm9yaXRlR2FtZXNcclxuICApO1xyXG4gIC8vd2hldGhlciBvciBub3QgdXNlciBpcyBlZGl0aW5nIGZhdm9yaXRlIGdhbWVzXHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBhIEdhbWUgaXMgZHJhZ2dlZC4gQWRkc1xyXG4gICAqIHRoZSBHYW1lJ3MgZGF0YS1pbmRleCBhdHRyaWJ1dGUgdG9cclxuICAgKiBEcmFnRXZlbnQuZGF0YVRyYW5zZmVyIHRvIGJlIHVzZWQgYnlcclxuICAgKiBkcm9wR2FtZSgpIGxhdGVyIG9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhZ0dhbWUoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLy9kcmFnb3ZlciBoYW5kbGVyIGlzIG5lZWRlZCB0byBtYWtlIGVsZW1lbnRcclxuICAvL2RyYWdnYWJsZVxyXG4gIGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHJhZ2dlZCBnYW1lIHdpbGwgYmUgc3dhcHBlZCB3aXRoIHRoZSBnYW1lXHJcbiAgICogaXQncyBkcm9wcGVkIG9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBkcm9wR2FtZU9uR2FtZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgbmV3RmF2ZUdhbWVzID0gWy4uLmRpc3BsYXllZEZhdm9yaXRlR2FtZXNdO1xyXG4gICAgY29uc3QgbmV3R2FtZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgLy9pbmRleCBvZiBnYW1lIHRoYXQgd2FzIGRyb3BwZWQgb25cclxuICAgIGNvbnN0IGRyb3BUYXJnZXQgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XHJcbiAgICAvL2RhdGFUcmFuc2ZlciB3aWxsIGNvbnRhaW4gYSBqcyBvYmplY3QgaWYgdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZFxyXG4gICAgLy9pcyBmcm9tIHNlYXJjaCByZXN1bHRzLCBtZWFuaW5nIGEgbmV3IGdhbWUgaXMgYmVpbmcgYWRkZWRcclxuICAgIC8vdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAgIGlmIChuZXdHYW1lKSB7XHJcbiAgICAgIGNvbnN0IG5ld0dhbWVBc09iamVjdCA9IEpTT04ucGFyc2UobmV3R2FtZSk7XHJcbiAgICAgIC8vd2UgcmVwbGFjZSBlbGVtZW50cyBhcyB3ZSBnbywgZXZlbnR1YWxseSB3ZSBhbiBlbGVtZW50IHRvIG5ld0ZhdmVHYW1lc1tuZXdGYXZlR2FtZXMubGVuZ3RoXVxyXG4gICAgICAvL3RoaXMgaW5jcmVhc2VzIHRoZSBsZW5ndGggYW5kIHRoZSBsb29wIGdvZXMgb24gZm9yZXZlclxyXG4gICAgICAvL3NvIHdlIGtlZXAgdGhlIGxlbmd0aCBvZiB0aGUgbGlzdCBiZWZvcmUgd2Ugc3RhcnRcclxuICAgICAgY29uc3QgbGVuZ3RoID0gbmV3RmF2ZUdhbWVzLmxlbmd0aDtcclxuICAgICAgLy9nYW1lIHRvIGJlIGFkZGVkIGluXHJcbiAgICAgIGxldCBob2xkZXIgPSBuZXdHYW1lQXNPYmplY3Q7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG5ld0ZhdmVHYW1lc1tpXSAmJiBuZXdGYXZlR2FtZXNbaV0uaWQgPT09IG5ld0dhbWVBc09iamVjdC5pZClcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3N0YXJ0IHN3YXBwaW5nIGZyb20gZHJvcFRhcmdldCBvbndhcmRzXHJcbiAgICAgICAgaWYgKGkgPj0gZHJvcFRhcmdldCkge1xyXG4gICAgICAgICAgLy9wdXQgaG9sZGVyIGludG8gdGhlIGxpc3QsIHRha2Ugd2hhdCB3YXMgdGhlcmUgYW5kIHB1dCBpbnRvIGhvbGRlclxyXG4gICAgICAgICAgY29uc3QgdGVtcCA9IG5ld0ZhdmVHYW1lc1tpXTtcclxuICAgICAgICAgIG5ld0ZhdmVHYW1lc1tpXSA9IGhvbGRlcjtcclxuICAgICAgICAgIGhvbGRlciA9IHRlbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2lmIHRoZXJlIGlzIG5vIGpzIG9iamVjdCwgdGhlbiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkIGlzIGFuIGFscmVhZHlcclxuICAgIC8vZXhpc3RpbmcgZ2FtZSBzbyB3ZSBqdXN0IHN3YXAgcGxhY2VzXHJcbiAgICBlbHNlIHtcclxuICAgICAgLy90aGUgZ2FtZSB0aGF0IHdhcyBiZWluZyBkcmFnZ2VkXHJcbiAgICAgIGNvbnN0IGRyYWdnZWRHYW1lID0gTnVtYmVyKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpKTtcclxuICAgICAgY29uc3QgdGVtcCA9IG5ld0ZhdmVHYW1lc1tkcm9wVGFyZ2V0XTtcclxuICAgICAgbmV3RmF2ZUdhbWVzW2Ryb3BUYXJnZXRdID0gbmV3RmF2ZUdhbWVzW2RyYWdnZWRHYW1lXTtcclxuICAgICAgbmV3RmF2ZUdhbWVzW2RyYWdnZWRHYW1lXSA9IHRlbXA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhuZXdGYXZlR2FtZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRyYWdnZWQgZ2FtZSB3aWxsIGJlIGFkZGVkIHRvIHRoZVxyXG4gICAqIGVuZCBvZiB0aGUgbGlzdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGVcclxuICAgKi9cclxuICBmdW5jdGlvbiBkcm9wR2FtZU9uQ29udGFpbmVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgbmV3RmF2ZUdhbWVzID0gWy4uLmRpc3BsYXllZEZhdm9yaXRlR2FtZXNdO1xyXG4gICAgY29uc3QgbmV3R2FtZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgLy9kYXRhVHJhbnNmZXIgd2lsbCBjb250YWluIGEganMgb2JqZWN0IGlmIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWRcclxuICAgIC8vaXMgZnJvbSBzZWFyY2ggcmVzdWx0cywgbWVhbmluZyBhIG5ldyBnYW1lIGlzIGJlaW5nIGFkZGVkXHJcbiAgICAvL3RvIGZhdm9yaXRlIGdhbWVzXHJcbiAgICBpZiAobmV3R2FtZSkge1xyXG4gICAgICBuZXdGYXZlR2FtZXMucHVzaChKU09OLnBhcnNlKG5ld0dhbWUpKTtcclxuICAgIH1cclxuICAgIC8vaWYgdGhlcmUgaXMgbm8ganMgb2JqZWN0LCB0aGVuIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWQgaXMgYW4gYWxyZWFkeVxyXG4gICAgLy9leGlzdGluZyBnYW1lLiBkcmFnZ2VkIGdhbWUgaXMgYWRkZWQgdG8gdGhlIGVuZCBhbmQgcmVzdCBhcmUgc2hpZnRlZCB1cFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxldCBuZXdQb3MgPSBOdW1iZXIoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIikpO1xyXG4gICAgICBsZXQgZHJhZ2dlZEdhbWUgPSBuZXdGYXZlR2FtZXNbbmV3UG9zXTtcclxuICAgICAgLy9zaGlmdCBldmVyeXRoaW5nIHRvd2FyZHMgdGhlIGZyb250XHJcbiAgICAgIGZvciAoOyBuZXdQb3MgPCBuZXdGYXZlR2FtZXMubGVuZ3RoIC0gMTsgbmV3UG9zKyspXHJcbiAgICAgICAgbmV3RmF2ZUdhbWVzW25ld1Bvc10gPSBuZXdGYXZlR2FtZXNbbmV3UG9zICsgMV07XHJcblxyXG4gICAgICAvL2FkZCBkcmFnZ2VkR2FtZSBiYWNrIHRvIHRoZSBlbmRcclxuICAgICAgbmV3RmF2ZUdhbWVzW25ld1Bvc10gPSBkcmFnZ2VkR2FtZTtcclxuICAgICAgY29uc29sZS5sb2cobmV3RmF2ZUdhbWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKG5ld0ZhdmVHYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGVzIGEgZ2FtZSBmcm9tIGRpc3BsYXllZEZhdm9yaXRlR2FtZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZ2FtZUlkIHRoZSBpZCBvZiBnYW1lIHRvIGJlIGRlbGV0ZWRcclxuICAgKi9cclxuICBmdW5jdGlvbiBkZWxldGVHYW1lKGdhbWVJZCkge1xyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhcclxuICAgICAgZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5maWx0ZXIoKGdhbWUpID0+IGdhbWUuaWQgIT09IGdhbWVJZClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBlZGl0aW5nIGlzIGNhbmNlbGxlZC4gU2V0cyBkaXNwbGF5ZWQgZmF2b3JpdGUgZ2FtZXNcclxuICAgKiB0byBhY3R1YWwgZmF2b3JpdGUgZ2FtZXMuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcm9sbGJhY2tDaGFuZ2VzKCkge1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xyXG4gICAgc2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyhmYXZvcml0ZUdhbWVzKTtcclxuICAgIHNldElzRWRpdGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzYXZlQ2hhbmdlcygpIHtcclxuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcclxuICAgIGNvbnN0IGZhdmVHYW1lSWRzID0gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5tYXAoKGdhbWUpID0+IGdhbWUuaWQpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Zhdm9yaXRlcy8ke3Byb3BzLmlkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmYXZlR2FtZUlkcyksXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7XHJcbiAgICAgIHNldEZhdm9yaXRlR2FtZXMoZGlzcGxheWVkRmF2b3JpdGVHYW1lcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9nZXQgYSBsaXN0IG9mIEdhbWUgY29tcG9uZW50cyBjb3JyZXNwb25kaW5nIHRvIGZhdm9yaXRlIGdhbWVzXHJcbiAgLy9lYWNoIGlzIGdpdmVuIGEgZGF0YS1pbmRleCBhdHRyaWJ1dGUgdGhhdCBjb3JyZXNwb25kcyB0b1xyXG4gIC8vd2hhdCBwb3NpdGlvbiBpbiB0aGUgbGlzdCB0aGV5IGFyZS4gdGhpcyB3aWxsIGJlIHVzZWQgZHVyaW5nXHJcbiAgLy9lZGl0aW5nIGZhdm9yaXRlIGdhbWVzLlxyXG4gIGNvbnN0IGZhdm9yaXRlR2FtZXNMaXN0ID0gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5tYXAoKGdhbWUsIGluZGV4KSA9PiAoXHJcbiAgICA8R2FtZVxyXG4gICAgICBrZXk9e2dhbWUuaWR9XHJcbiAgICAgIGdhbWVJZD17Z2FtZS5pZH1cclxuICAgICAgZ2FtZU5hbWU9e2dhbWUubmFtZX1cclxuICAgICAgZ2FtZUNvdmVyVXJsPXtnYW1lLmNvdmVydXJsfVxyXG4gICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cclxuICAgICAgZGF0YS1pbmRleD17XCJcIiArIGluZGV4fVxyXG4gICAgICBkcmFnZ2FibGU9e2lzRWRpdGluZyArIFwiXCJ9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXtpc0VkaXRpbmcgPyBzdGFydERyYWdHYW1lIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRyYWdPdmVyPXtpc0VkaXRpbmcgPyBkcmFnT3ZlciA6IHVuZGVmaW5lZH1cclxuICAgICAgb25Ecm9wPXtpc0VkaXRpbmcgPyBkcm9wR2FtZU9uR2FtZSA6IHVuZGVmaW5lZH1cclxuICAgICAgb25EZWxldGU9e2RlbGV0ZUdhbWV9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPntwcm9wcy5kaXNwbGF5TmFtZX08L2gxPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZhdm9yaXRlLWdhbWVzLWxpc3RcIlxyXG4gICAgICAgICAgb25Ecm9wPXtkcm9wR2FtZU9uQ29udGFpbmVyfVxyXG4gICAgICAgICAgb25EcmFnT3Zlcj17aXNFZGl0aW5nID8gZHJhZ092ZXIgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Zhdm9yaXRlR2FtZXNMaXN0fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtwcm9wcy5pZCAmJlxyXG4gICAgICAgICAgKCFpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKHRydWUpfT5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cm9sbGJhY2tDaGFuZ2VzfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVDaGFuZ2VzfT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8c3Bhbj57ZXJyb3JNZXNzYWdlfTwvc3Bhbj59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNFZGl0aW5nICYmIDxHYW1lU2VhcmNoQm94IC8+fVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnRleHQucmVzLmxvY2FscykpLFxyXG4gIH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=