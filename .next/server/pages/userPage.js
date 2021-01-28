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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); //whether or not search results are currently loading

  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); //error message

  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""); //whether or not there is a next page of search results

  const {
    0: hasNext,
    1: setHasNext
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true); //used to determine whether its first render or not

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
    lineNumber: 39,
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
    const data = await response.json();

    if (response.ok) {
      setSearchResults(data.results);
      setHasNext(data.hasNext);
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
          lineNumber: 114,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "game-search-bar",
          value: displayedSearchTerm,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this), searchPage >= 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [searchPage > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            onClick: () => changePage(searchPage - 1),
            children: "Prev"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "page-number",
            children: "Page:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            id: "page-number",
            disabled: true,
            value: searchPage + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, this), hasNext && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            onClick: () => changePage(searchPage + 1),
            children: "Next"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 17
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "search-results",
      children: [errorMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 26
      }, this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 21
      }, this), displayedSearchResults]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYW1lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2FtZVNlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyUGFnZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkdhbWUiLCJwcm9wcyIsInN0b3BEcmFnIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidW5kcmFnZ2FibGUiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJnYW1lQ292ZXJVcmwiLCJnYW1lTmFtZSIsImlzRWRpdGluZyIsIm9uRGVsZXRlIiwiZ2FtZUlkIiwiR2FtZVNlYXJjaEJveCIsImRpc3BsYXllZFNlYXJjaFRlcm0iLCJzZXREaXNwbGF5ZWRTZWFyY2hUZXJtIiwidXNlU3RhdGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNlYXJjaFBhZ2UiLCJzZXRTZWFyY2hQYWdlIiwidW5kZWZpbmVkIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhc05leHQiLCJzZXRIYXNOZXh0IiwiZmlyc3RSZW5kZXIiLCJ1c2VSZWYiLCJzdGFydERyYWdHYW1lIiwiZ2FtZSIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZHJhZ092ZXIiLCJkcm9wRWZmZWN0IiwiZGlzcGxheWVkU2VhcmNoUmVzdWx0cyIsIm1hcCIsImlkIiwibmFtZSIsImNvdmVydXJsIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2giLCJmZXRjaEFuZFBvcHVsYXRlU2VhcmNoUmVzdWx0cyIsImNoYW5nZVBhZ2UiLCJwYWdlTnVtYmVyIiwidGVybSIsInBhZ2UiLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9rIiwicmVzdWx0cyIsIm1lc3NhZ2UiLCJVc2VyUGFnZSIsImZhdm9yaXRlR2FtZXMiLCJzZXRGYXZvcml0ZUdhbWVzIiwiZ2FtZXMiLCJkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzIiwic2V0RGlzcGxheWVkRmF2b3JpdGVHYW1lcyIsInNldElzRWRpdGluZyIsImRhdGFzZXQiLCJpbmRleCIsImRyb3BHYW1lT25HYW1lIiwibmV3RmF2ZUdhbWVzIiwibmV3R2FtZSIsImdldERhdGEiLCJkcm9wVGFyZ2V0IiwiTnVtYmVyIiwibmV3R2FtZUFzT2JqZWN0IiwicGFyc2UiLCJsZW5ndGgiLCJob2xkZXIiLCJpIiwidGVtcCIsImRyYWdnZWRHYW1lIiwiZHJvcEdhbWVPbkNvbnRhaW5lciIsInB1c2giLCJuZXdQb3MiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlR2FtZSIsImZpbHRlciIsInJvbGxiYWNrQ2hhbmdlcyIsInNhdmVDaGFuZ2VzIiwiZmF2ZUdhbWVJZHMiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImJvZHkiLCJoZWFkZXJzIiwiZXJyb3IiLCJmYXZvcml0ZUdhbWVzTGlzdCIsImRpc3BsYXlOYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcyIsImxvY2FscyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFn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QSw4QkFDRTtBQUNFLGlCQUFTLEVBQUMscUJBRFo7QUFFRSxjQUFNLEVBQUVoQixtQkFGVjtBQUdFLGtCQUFVLEVBQUUxRSxTQUFTLEdBQUc0QixRQUFILEdBQWNqQixTQUhyQztBQUFBLGtCQUtHOEU7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFRR3JHLEtBQUssQ0FBQzRDLEVBQU4sS0FDRSxDQUFDaEMsU0FBRCxnQkFDQztBQUFRLGVBQU8sRUFBRSxNQUFNMEQsWUFBWSxDQUFDLElBQUQsQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxnQkFHQztBQUFBLGdDQUNFO0FBQVEsaUJBQU8sRUFBRXVCLGVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBUSxpQkFBTyxFQUFFQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBLHNCQUpILENBUkgsRUFpQkdsRSxZQUFZLGlCQUFJO0FBQUEsa0JBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFxQkdoQixTQUFTLGlCQUFJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQmhCO0FBQUEsa0JBREY7QUF5QkQ7QUFFTSxTQUFTMkYsa0JBQVQsQ0FBNEJDLE9BQTVCLEVBQXFDO0FBQzFDLFNBQU87QUFDTHhHLFNBQUssRUFBRXNDLElBQUksQ0FBQzBDLEtBQUwsQ0FBVzFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlaUUsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQTNCLENBQVg7QUFERixHQUFQO0FBR0QsQzs7Ozs7Ozs7Ozs7QUNqT0Qsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvdXNlclBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3VzZXJQYWdlLmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogQSBjb21wb25lbnQgcmVwcmVzZW50aW5nIGEgc2luZ2xlIGdhbWVcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZShwcm9wcykge1xyXG4gIGZ1bmN0aW9uIHN0b3BEcmFnKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG4gIC8vZ2l2ZW4gdG8gZGl2J3MgY2hpbGRyZW4gc28gb25seSB0aGUgZ2FtZS1jb250YWluZXJcclxuICAvL2lzIGRyYWdnYWJsZVxyXG4gIGNvbnN0IHVuZHJhZ2dhYmxlID0ge1xyXG4gICAgZHJhZ2dhYmxlOiBcImZhbHNlXCIsXHJcbiAgICBvbkRyYWdTdGFydDogc3RvcERyYWcsXHJcbiAgICBvbkRyYWdPdmVyOiBzdG9wRHJhZyxcclxuICAgIG9uRHJvcDogc3RvcERyYWcsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiZ2FtZS1jb250YWluZXJcIlxyXG4gICAgICBkYXRhLWluZGV4PXtwcm9wc1tcImRhdGEtaW5kZXhcIl19XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXtwcm9wcy5vbkRyYWdTdGFydH1cclxuICAgICAgb25EcmFnT3Zlcj17cHJvcHMub25EcmFnT3Zlcn1cclxuICAgICAgb25Ecm9wPXtwcm9wcy5vbkRyb3B9XHJcbiAgICAgIGRyYWdnYWJsZT17cHJvcHMuZHJhZ2dhYmxlfVxyXG4gICAgPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPXtwcm9wcy5nYW1lQ292ZXJVcmx9XHJcbiAgICAgICAgYWx0PXtgQ292ZXIgYXJ0IGZvciAke3Byb3BzLmdhbWVOYW1lfWB9XHJcbiAgICAgICAgaGVpZ2h0PXs5MH1cclxuICAgICAgICB3aWR0aD17OTB9XHJcbiAgICAgICAgey4uLnVuZHJhZ2dhYmxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8cCB7Li4udW5kcmFnZ2FibGV9Pntwcm9wcy5nYW1lTmFtZX08L3A+XHJcbiAgICAgIHtwcm9wcy5pc0VkaXRpbmcgJiYgKFxyXG4gICAgICAgIDxidXR0b24gey4uLnVuZHJhZ2dhYmxlfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkRlbGV0ZShwcm9wcy5nYW1lSWQpfT5cclxuICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZVNlYXJjaEJveChwcm9wcykge1xyXG4gIC8vc2VhcmNoIHRlcm0gaW4gc2VhcmNoIGJhclxyXG4gIGNvbnN0IFtkaXNwbGF5ZWRTZWFyY2hUZXJtLCBzZXREaXNwbGF5ZWRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vdGhlIGFjdHVhbCB1bmRlcmx5aW5nIHNlYXJjaCB0ZXJtIHJlZ2FyZGxlc3Mgb2Ygd2hhdHMgdHlwZWRcclxuICAvL2NsaWNraW5nIG5leHQvcHJldiB3aWxsIGNoYW5nZSBwYWdlcyBmb3IgdGhpcyB2YWx1ZVxyXG4gIC8vY2xpY2tpbmcgc2VhcmNoIGJ1dHRvbiB3aWxsIGNoYW5nZSB0aGlzIHZhbHVlXHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoZGlzcGxheWVkU2VhcmNoVGVybSk7XHJcbiAgLy9wYWdlIG9mIHNlYXJjaCByZXN1bHRzXHJcbiAgY29uc3QgW3NlYXJjaFBhZ2UsIHNldFNlYXJjaFBhZ2VdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAvL2xpc3Qgb2Ygb2JqZWN0cyB0aGF0IHdpbGwgYmUgcmV0cmlldmVkIGZyb20gc2VhcmNoIGFwaVxyXG4gIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvL3doZXRoZXIgb3Igbm90IHNlYXJjaCByZXN1bHRzIGFyZSBjdXJyZW50bHkgbG9hZGluZ1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvL2Vycm9yIG1lc3NhZ2VcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy93aGV0aGVyIG9yIG5vdCB0aGVyZSBpcyBhIG5leHQgcGFnZSBvZiBzZWFyY2ggcmVzdWx0c1xyXG4gIGNvbnN0IFtoYXNOZXh0LCBzZXRIYXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAvL3VzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgaXRzIGZpcnN0IHJlbmRlciBvciBub3RcclxuICBjb25zdCBmaXJzdFJlbmRlciA9IHVzZVJlZih0cnVlKTtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnREcmFnR2FtZShlLCBnYW1lKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImFwcGxpY2F0aW9uL2pzb25cIiwgSlNPTi5zdHJpbmdpZnkoZ2FtZSkpO1xyXG4gIH1cclxuXHJcbiAgLy9kcmFnb3ZlciBoYW5kbGVyIGlzIG5lZWRlZCB0byBtYWtlIGVsZW1lbnRcclxuICAvL2RyYWdnYWJsZVxyXG4gIGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkaXNwbGF5ZWRTZWFyY2hSZXN1bHRzID0gc2VhcmNoUmVzdWx0cy5tYXAoKGdhbWUpID0+IChcclxuICAgIDxHYW1lXHJcbiAgICAgIGtleT17Z2FtZS5pZH1cclxuICAgICAgZ2FtZUlkPXtnYW1lLmlkfVxyXG4gICAgICBnYW1lTmFtZT17Z2FtZS5uYW1lfVxyXG4gICAgICBnYW1lQ292ZXJVcmw9e2dhbWUuY292ZXJ1cmx9XHJcbiAgICAgIGRyYWdnYWJsZT17dHJ1ZX1cclxuICAgICAgb25EcmFnU3RhcnQ9eyhlKSA9PiBzdGFydERyYWdHYW1lKGUsIGdhbWUpfVxyXG4gICAgICBvbkRyYWdPdmVyPXtkcmFnT3Zlcn1cclxuICAgIC8+XHJcbiAgKSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgZGlzcGxheWVkIHNlYXJjaCB0ZXJtXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBzZXREaXNwbGF5ZWRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgc2VhcmNoVGVybSB0byBkaXNwbGF5ZWRTZWFyY2hUZXJtXHJcbiAgICogYW5kIGZldGNoZXMgc2VhcmNoIHJlc3VsdHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChkaXNwbGF5ZWRTZWFyY2hUZXJtID09PSBcIlwiKSByZXR1cm47XHJcbiAgICBzZXRTZWFyY2hUZXJtKGRpc3BsYXllZFNlYXJjaFRlcm0pO1xyXG4gICAgc2V0U2VhcmNoUGFnZSgwKTtcclxuICAgIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKGRpc3BsYXllZFNlYXJjaFRlcm0sIDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyBwYWdlIG51bWJlciBmb3Igc2VhcmNoVGVybVxyXG4gICAqIChub3QgZGlzcGxheWVkU2VhcmNoVGVybSkgYW5kIGZldGNoZXMgc2VhcmNoXHJcbiAgICogcmVzdWx0cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlTnVtYmVyIG5ldyBwYWdlIG51bWJlclxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGNoYW5nZVBhZ2UocGFnZU51bWJlcikge1xyXG4gICAgaWYgKHBhZ2VOdW1iZXIgPCAwKSByZXR1cm47XHJcbiAgICBzZXRTZWFyY2hQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gICAgZmV0Y2hBbmRQb3B1bGF0ZVNlYXJjaFJlc3VsdHMoc2VhcmNoVGVybSwgcGFnZU51bWJlcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaGVzIGEgc2VhcmNoIGZyb20gdGhlIEFQSSBhbmQgcG9wdWxhdGVzIHBhZ2VcclxuICAgKiB3aXRoIHNlYXJjaCByZXN1bHRzLiBUaGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIGNhbGxlZFxyXG4gICAqIHdpdGggYSBzZWFyY2ggdGVybSBhbmQgcGFnZSBtYW51YWxseSBpbnN0ZWFkIG9mIHJlbHlpbmcgb25cclxuICAgKiBjaGVja2luZyBzdGF0ZSBhcyByZWFkaW5nIHN0YXRlIGltbWVkaWF0ZWx5IGFmdGVyIHNldHRpbmcgaXRcclxuICAgKiB3aWxsIHJldHVybiBzdGFsZSB2YWx1ZXMuIFNvLCB3ZSBnaXZlIGl0IHRoZSBmcmVzaCB2YWx1ZXMgbWFudWFsbHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVybSBzZWFyY2ggdGVybVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIHNlYXJjaCBwYWdlIG51bWJlclxyXG4gICAqL1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kUG9wdWxhdGVTZWFyY2hSZXN1bHRzKHRlcm0sIHBhZ2UpIHtcclxuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBxdWVyeSA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NlYXJjaC8ke3Rlcm19LyR7cGFnZX1gO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChxdWVyeSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldFNlYXJjaFJlc3VsdHMoZGF0YS5yZXN1bHRzKTtcclxuICAgICAgc2V0SGFzTmV4dChkYXRhLmhhc05leHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKHJlc3VsdHMubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYW1lLXNlYXJjaC1iYXJcIj5OYW1lIG9mIEdhbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImdhbWUtc2VhcmNoLWJhclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkaXNwbGF5ZWRTZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgIHtzZWFyY2hQYWdlID49IDAgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtzZWFyY2hQYWdlID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHNlYXJjaFBhZ2UgLSAxKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUHJldlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhZ2UtbnVtYmVyXCI+UGFnZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYWdlLW51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYWdlICsgMX1cclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICB7aGFzTmV4dCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHNlYXJjaFBhZ2UgKyAxKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHNcIj5cclxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIDxwPntlcnJvck1lc3NhZ2V9PC9wPn1cclxuICAgICAgICB7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cclxuICAgICAgICB7ZGlzcGxheWVkU2VhcmNoUmVzdWx0c31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FtZVwiO1xyXG5pbXBvcnQgR2FtZVNlYXJjaEJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9HYW1lU2VhcmNoQm94XCI7XHJcblxyXG4vKipcclxuICpcclxuICogVGhlIHBhZ2UgdGhhdCBpcyBkaXNwbGF5ZWQgd2hlblxyXG4gKiB2aWV3aW5nIGEgdXNlcidzIHByb2ZpbGVcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclBhZ2UocHJvcHMpIHtcclxuICAvKiBzZXR0aW5nIHN0YXRlICovXHJcbiAgLy90aGUgdXNlcidzIGFjdHVhbCBmYXZvcml0ZSBnYW1lc1xyXG4gIGNvbnN0IFtmYXZvcml0ZUdhbWVzLCBzZXRGYXZvcml0ZUdhbWVzXSA9IHVzZVN0YXRlKHByb3BzLmdhbWVzKTtcclxuICAvL3RoZSB1c2VyJ3MgZmF2b3JpdGUgZ2FtZSBhcyBjdXJyZW50bHkgZGlzcGxheWVkLiB0aGVzZSBtYXkgZGlmZmVyXHJcbiAgLy9mcm9tIGFjdHVhbCBmYXZvcml0ZSBnYW1lcyBkdXJpbmcgZWRpdGluZ1xyXG4gIGNvbnN0IFtkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLCBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzXSA9IHVzZVN0YXRlKFxyXG4gICAgZmF2b3JpdGVHYW1lc1xyXG4gICk7XHJcbiAgLy93aGV0aGVyIG9yIG5vdCB1c2VyIGlzIGVkaXRpbmcgZmF2b3JpdGUgZ2FtZXNcclxuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIGEgR2FtZSBpcyBkcmFnZ2VkLiBBZGRzXHJcbiAgICogdGhlIEdhbWUncyBkYXRhLWluZGV4IGF0dHJpYnV0ZSB0b1xyXG4gICAqIERyYWdFdmVudC5kYXRhVHJhbnNmZXIgdG8gYmUgdXNlZCBieVxyXG4gICAqIGRyb3BHYW1lKCkgbGF0ZXIgb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gc3RhcnREcmFnR2FtZShlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XHJcbiAgfVxyXG5cclxuICAvL2RyYWdvdmVyIGhhbmRsZXIgaXMgbmVlZGVkIHRvIG1ha2UgZWxlbWVudFxyXG4gIC8vZHJhZ2dhYmxlXHJcbiAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkcmFnZ2VkIGdhbWUgd2lsbCBiZSBzd2FwcGVkIHdpdGggdGhlIGdhbWVcclxuICAgKiBpdCdzIGRyb3BwZWQgb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRyb3BHYW1lT25HYW1lKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBuZXdGYXZlR2FtZXMgPSBbLi4uZGlzcGxheWVkRmF2b3JpdGVHYW1lc107XHJcbiAgICBjb25zdCBuZXdHYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAvL2luZGV4IG9mIGdhbWUgdGhhdCB3YXMgZHJvcHBlZCBvblxyXG4gICAgY29uc3QgZHJvcFRhcmdldCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICAgIC8vZGF0YVRyYW5zZmVyIHdpbGwgY29udGFpbiBhIGpzIG9iamVjdCBpZiB0aGUgZ2FtZSBiZWluZyBkcmFnZ2VkXHJcbiAgICAvL2lzIGZyb20gc2VhcmNoIHJlc3VsdHMsIG1lYW5pbmcgYSBuZXcgZ2FtZSBpcyBiZWluZyBhZGRlZFxyXG4gICAgLy90byBmYXZvcml0ZSBnYW1lc1xyXG4gICAgaWYgKG5ld0dhbWUpIHtcclxuICAgICAgY29uc3QgbmV3R2FtZUFzT2JqZWN0ID0gSlNPTi5wYXJzZShuZXdHYW1lKTtcclxuICAgICAgLy93ZSByZXBsYWNlIGVsZW1lbnRzIGFzIHdlIGdvLCBldmVudHVhbGx5IHdlIGFuIGVsZW1lbnQgdG8gbmV3RmF2ZUdhbWVzW25ld0ZhdmVHYW1lcy5sZW5ndGhdXHJcbiAgICAgIC8vdGhpcyBpbmNyZWFzZXMgdGhlIGxlbmd0aCBhbmQgdGhlIGxvb3AgZ29lcyBvbiBmb3JldmVyXHJcbiAgICAgIC8vc28gd2Uga2VlcCB0aGUgbGVuZ3RoIG9mIHRoZSBsaXN0IGJlZm9yZSB3ZSBzdGFydFxyXG4gICAgICBjb25zdCBsZW5ndGggPSBuZXdGYXZlR2FtZXMubGVuZ3RoO1xyXG4gICAgICAvL2dhbWUgdG8gYmUgYWRkZWQgaW5cclxuICAgICAgbGV0IGhvbGRlciA9IG5ld0dhbWVBc09iamVjdDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobmV3RmF2ZUdhbWVzW2ldICYmIG5ld0ZhdmVHYW1lc1tpXS5pZCA9PT0gbmV3R2FtZUFzT2JqZWN0LmlkKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vc3RhcnQgc3dhcHBpbmcgZnJvbSBkcm9wVGFyZ2V0IG9ud2FyZHNcclxuICAgICAgICBpZiAoaSA+PSBkcm9wVGFyZ2V0KSB7XHJcbiAgICAgICAgICAvL3B1dCBob2xkZXIgaW50byB0aGUgbGlzdCwgdGFrZSB3aGF0IHdhcyB0aGVyZSBhbmQgcHV0IGludG8gaG9sZGVyXHJcbiAgICAgICAgICBjb25zdCB0ZW1wID0gbmV3RmF2ZUdhbWVzW2ldO1xyXG4gICAgICAgICAgbmV3RmF2ZUdhbWVzW2ldID0gaG9sZGVyO1xyXG4gICAgICAgICAgaG9sZGVyID0gdGVtcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vaWYgdGhlcmUgaXMgbm8ganMgb2JqZWN0LCB0aGVuIHRoZSBnYW1lIGJlaW5nIGRyYWdnZWQgaXMgYW4gYWxyZWFkeVxyXG4gICAgLy9leGlzdGluZyBnYW1lIHNvIHdlIGp1c3Qgc3dhcCBwbGFjZXNcclxuICAgIGVsc2Uge1xyXG4gICAgICAvL3RoZSBnYW1lIHRoYXQgd2FzIGJlaW5nIGRyYWdnZWRcclxuICAgICAgY29uc3QgZHJhZ2dlZEdhbWUgPSBOdW1iZXIoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIikpO1xyXG4gICAgICBjb25zdCB0ZW1wID0gbmV3RmF2ZUdhbWVzW2Ryb3BUYXJnZXRdO1xyXG4gICAgICBuZXdGYXZlR2FtZXNbZHJvcFRhcmdldF0gPSBuZXdGYXZlR2FtZXNbZHJhZ2dlZEdhbWVdO1xyXG4gICAgICBuZXdGYXZlR2FtZXNbZHJhZ2dlZEdhbWVdID0gdGVtcDtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKG5ld0ZhdmVHYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHJhZ2dlZCBnYW1lIHdpbGwgYmUgYWRkZWQgdG8gdGhlXHJcbiAgICogZW5kIG9mIHRoZSBsaXN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRyb3BHYW1lT25Db250YWluZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBjb25zdCBuZXdGYXZlR2FtZXMgPSBbLi4uZGlzcGxheWVkRmF2b3JpdGVHYW1lc107XHJcbiAgICBjb25zdCBuZXdHYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAvL2RhdGFUcmFuc2ZlciB3aWxsIGNvbnRhaW4gYSBqcyBvYmplY3QgaWYgdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZFxyXG4gICAgLy9pcyBmcm9tIHNlYXJjaCByZXN1bHRzLCBtZWFuaW5nIGEgbmV3IGdhbWUgaXMgYmVpbmcgYWRkZWRcclxuICAgIC8vdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAgIGlmIChuZXdHYW1lKSB7XHJcbiAgICAgIG5ld0ZhdmVHYW1lcy5wdXNoKEpTT04ucGFyc2UobmV3R2FtZSkpO1xyXG4gICAgfVxyXG4gICAgLy9pZiB0aGVyZSBpcyBubyBqcyBvYmplY3QsIHRoZW4gdGhlIGdhbWUgYmVpbmcgZHJhZ2dlZCBpcyBhbiBhbHJlYWR5XHJcbiAgICAvL2V4aXN0aW5nIGdhbWUuIGRyYWdnZWQgZ2FtZSBpcyBhZGRlZCB0byB0aGUgZW5kIGFuZCByZXN0IGFyZSBzaGlmdGVkIHVwXHJcbiAgICBlbHNlIHtcclxuICAgICAgbGV0IG5ld1BvcyA9IE51bWJlcihlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKSk7XHJcbiAgICAgIGxldCBkcmFnZ2VkR2FtZSA9IG5ld0ZhdmVHYW1lc1tuZXdQb3NdO1xyXG4gICAgICAvL3NoaWZ0IGV2ZXJ5dGhpbmcgdG93YXJkcyB0aGUgZnJvbnRcclxuICAgICAgZm9yICg7IG5ld1BvcyA8IG5ld0ZhdmVHYW1lcy5sZW5ndGggLSAxOyBuZXdQb3MrKylcclxuICAgICAgICBuZXdGYXZlR2FtZXNbbmV3UG9zXSA9IG5ld0ZhdmVHYW1lc1tuZXdQb3MgKyAxXTtcclxuXHJcbiAgICAgIC8vYWRkIGRyYWdnZWRHYW1lIGJhY2sgdG8gdGhlIGVuZFxyXG4gICAgICBuZXdGYXZlR2FtZXNbbmV3UG9zXSA9IGRyYWdnZWRHYW1lO1xyXG4gICAgICBjb25zb2xlLmxvZyhuZXdGYXZlR2FtZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc3BsYXllZEZhdm9yaXRlR2FtZXMobmV3RmF2ZUdhbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZXMgYSBnYW1lIGZyb20gZGlzcGxheWVkRmF2b3JpdGVHYW1lcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBnYW1lSWQgdGhlIGlkIG9mIGdhbWUgdG8gYmUgZGVsZXRlZFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRlbGV0ZUdhbWUoZ2FtZUlkKSB7XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKFxyXG4gICAgICBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLmZpbHRlcigoZ2FtZSkgPT4gZ2FtZS5pZCAhPT0gZ2FtZUlkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIGVkaXRpbmcgaXMgY2FuY2VsbGVkLiBTZXRzIGRpc3BsYXllZCBmYXZvcml0ZSBnYW1lc1xyXG4gICAqIHRvIGFjdHVhbCBmYXZvcml0ZSBnYW1lcy5cclxuICAgKi9cclxuICBmdW5jdGlvbiByb2xsYmFja0NoYW5nZXMoKSB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXREaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKGZhdm9yaXRlR2FtZXMpO1xyXG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNhdmVDaGFuZ2VzKCkge1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xyXG4gICAgY29uc3QgZmF2ZUdhbWVJZHMgPSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLm1hcCgoZ2FtZSkgPT4gZ2FtZS5pZCk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZmF2b3JpdGVzLyR7cHJvcHMuaWR9YCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZhdmVHYW1lSWRzKSxcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICAgICAgc2V0RmF2b3JpdGVHYW1lcyhkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL2dldCBhIGxpc3Qgb2YgR2FtZSBjb21wb25lbnRzIGNvcnJlc3BvbmRpbmcgdG8gZmF2b3JpdGUgZ2FtZXNcclxuICAvL2VhY2ggaXMgZ2l2ZW4gYSBkYXRhLWluZGV4IGF0dHJpYnV0ZSB0aGF0IGNvcnJlc3BvbmRzIHRvXHJcbiAgLy93aGF0IHBvc2l0aW9uIGluIHRoZSBsaXN0IHRoZXkgYXJlLiB0aGlzIHdpbGwgYmUgdXNlZCBkdXJpbmdcclxuICAvL2VkaXRpbmcgZmF2b3JpdGUgZ2FtZXMuXHJcbiAgY29uc3QgZmF2b3JpdGVHYW1lc0xpc3QgPSBkaXNwbGF5ZWRGYXZvcml0ZUdhbWVzLm1hcCgoZ2FtZSwgaW5kZXgpID0+IChcclxuICAgIDxHYW1lXHJcbiAgICAgIGtleT17Z2FtZS5pZH1cclxuICAgICAgZ2FtZUlkPXtnYW1lLmlkfVxyXG4gICAgICBnYW1lTmFtZT17Z2FtZS5uYW1lfVxyXG4gICAgICBnYW1lQ292ZXJVcmw9e2dhbWUuY292ZXJ1cmx9XHJcbiAgICAgIGlzRWRpdGluZz17aXNFZGl0aW5nfVxyXG4gICAgICBkYXRhLWluZGV4PXtcIlwiICsgaW5kZXh9XHJcbiAgICAgIGRyYWdnYWJsZT17aXNFZGl0aW5nICsgXCJcIn1cclxuICAgICAgb25EcmFnU3RhcnQ9e2lzRWRpdGluZyA/IHN0YXJ0RHJhZ0dhbWUgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uRHJhZ092ZXI9e2lzRWRpdGluZyA/IGRyYWdPdmVyIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRyb3A9e2lzRWRpdGluZyA/IGRyb3BHYW1lT25HYW1lIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkRlbGV0ZT17ZGVsZXRlR2FtZX1cclxuICAgIC8+XHJcbiAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+e3Byb3BzLmRpc3BsYXlOYW1lfTwvaDE+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmF2b3JpdGUtZ2FtZXMtbGlzdFwiXHJcbiAgICAgICAgICBvbkRyb3A9e2Ryb3BHYW1lT25Db250YWluZXJ9XHJcbiAgICAgICAgICBvbkRyYWdPdmVyPXtpc0VkaXRpbmcgPyBkcmFnT3ZlciA6IHVuZGVmaW5lZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZmF2b3JpdGVHYW1lc0xpc3R9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Byb3BzLmlkICYmXHJcbiAgICAgICAgICAoIWlzRWRpdGluZyA/IChcclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9PkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyb2xsYmFja0NoYW5nZXN9PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZUNoYW5nZXN9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIDxzcGFuPntlcnJvck1lc3NhZ2V9PC9zcGFuPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpc0VkaXRpbmcgJiYgPEdhbWVTZWFyY2hCb3ggLz59XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGV4dC5yZXMubG9jYWxzKSksXHJcbiAgfTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==