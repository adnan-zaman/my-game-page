import React, { useState, useRef } from "react";
import Game from "../components/Game";
import GameSearchBox from "../components/GameSearchBox";

import Toolbar from "../components/Toolbar";

/**
 *
 * The page that is displayed when
 * viewing a user's profile
 *
 * @param {object} props
 */

export default function UserPage(props) {
  /* setting state */
  //the user's actual favorite games
  const [favoriteGames, setFavoriteGames] = useState(props.games);
  //the user's favorite game as currently displayed. these may differ
  //from actual favorite games during editing
  const [displayedFavoriteGames, setDisplayedFavoriteGames] = useState(
    favoriteGames
  );
  //whether or not user is editing favorite games
  const [isEditing, setIsEditing] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

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
  }

  //dragover handler is needed to make element
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

    const newFaveGames = [...displayedFavoriteGames];
    const newGame = e.dataTransfer.getData("application/json");
    //index of game that was dropped on
    const dropTarget = Number(e.currentTarget.dataset.index);
    //dataTransfer will contain a js object if the game being dragged
    //is from search results, meaning a new game is being added
    //to favorite games
    if (newGame) {
      const newGameAsObject = JSON.parse(newGame);
      if (gameAlreadyExists(newGameAsObject)) return;
      //we replace elements as we go, eventually we an element to newFaveGames[newFaveGames.length]
      //this increases the length and the loop goes on forever
      //so we keep the length of the list before we start
      const length = newFaveGames.length;
      //game to be added in
      let holder = newGameAsObject;
      for (let i = 0; i <= length; i++) {
        // if (newFaveGames[i] && newFaveGames[i].id === newGameAsObject.id)
        //   return;
        //start swapping from dropTarget onwards
        if (i >= dropTarget) {
          //put holder into the list, take what was there and put into holder
          const temp = newFaveGames[i];
          newFaveGames[i] = holder;
          holder = temp;
        }
      }
    }
    //if there is no js object, then the game being dragged is an already
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
    const newGame = e.dataTransfer.getData("application/json");
    //dataTransfer will contain a js object if the game being dragged
    //is from search results, meaning a new game is being added
    //to favorite games
    if (newGame) {
      const newGameAsObject = JSON.parse(newGame);
      if (gameAlreadyExists(newGameAsObject)) return;

      newFaveGames.push(newGameAsObject);
    }
    //if there is no js object, then the game being dragged is an already
    //existing game. dragged game is added to the end and rest are shifted up
    else {
      let newPos = Number(e.dataTransfer.getData("text/plain"));
      let draggedGame = newFaveGames[newPos];
      //shift everything towards the front
      for (; newPos < newFaveGames.length - 1; newPos++)
        newFaveGames[newPos] = newFaveGames[newPos + 1];

      //add draggedGame back to the end
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
    setDisplayedFavoriteGames(
      displayedFavoriteGames.filter((game) => game.id !== gameId)
    );
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
    const faveGameIds = displayedFavoriteGames.map((game) => game.id);

    const response = await fetch(`/api/favorites/${props.id}`, {
      method: "PUT",
      credentials: "same-origin",
      body: JSON.stringify(faveGameIds),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setIsEditing(false);
      setFavoriteGames(displayedFavoriteGames);
    } else {
      const error = await response.json();
      setErrorMessage(error.message);
    }
  }

  /**
   * Adds a game to the end of displayedFavoriteGames.
   *
   * @param {object} game game object
   */
  function onAdd(game) {
    if (gameAlreadyExists(game)) return;
    setDisplayedFavoriteGames([...displayedFavoriteGames, game]);
  }

  /**
   * Called by Games in mobile view to change positions in the fave game list.
   *
   * @param {number} currIndex the index of the game that is changing position
   * @param {number} nextIndex the index the game is trying to move to
   */
  function changePosition(currIndex, nextIndex) {
    const newFaveGames = [...displayedFavoriteGames];
    const temp = newFaveGames[nextIndex];
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
    for (const g of displayedFavoriteGames) {
      console.log(`${g.id} ${game.id}`);
      if (g.id === game.id) return true;
    }
    return false;
  }

  //get a list of Game components corresponding to favorite games
  //each is given a data-index attribute that corresponds to
  //what position in the list they are. this will be used during
  //editing favorite games.
  const favoriteGamesList = displayedFavoriteGames.map((game, index) => (
    <Game
      key={game.id}
      gameId={game.id}
      gameName={game.name}
      gameCoverUrl={game.coverurl}
      isEditing={isEditing}
      data-index={"" + index}
      draggable={isEditing + ""}
      onDragStart={isEditing ? startDragGame : undefined}
      onDragOver={isEditing ? dragOver : undefined}
      onDrop={isEditing ? dropGameOnGame : undefined}
      onDelete={deleteGame}
      changePosition={changePosition}
      isLast={index === displayedFavoriteGames.length - 1}
    />
  ));

  return (
    <>
      <Toolbar userId={props.id} profilePic={props.profilePic} />
      <div className="user-page-header mb-3">
        <img
          src={props.profilePic}
          alt={`${props.displayName}'s profile picture`}
          className="page-profile-pic rounded-circle"
        />
        <h1 className="display-1 d-inline">{props.displayName}</h1>
      </div>
      <div className={`user-page-main ${isEditing && "d-md-flex rounded-lg"}`}>
        <div
          className={`user-page-games rounded-lg d-flex flex-column ${
            isEditing ? "is-editing" : "m-auto"
          }`}
        >
          <div className="favorite-games-list game-list">
            {favoriteGamesList}
            {isEditing && (
              <div
                id="drop-space"
                className="my-3 mx-2"
                onDrop={dropGameOnContainer}
                onDragOver={dragOver}
              ></div>
            )}
          </div>
          <div className="button-bar">
            {props.id &&
              (!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-secondary"
                >
                  Edit
                </button>
              ) : (
                <>
                  <button
                    onClick={rollbackChanges}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button onClick={saveChanges} className="btn btn-primary">
                    Save
                  </button>
                </>
              ))}
            <span className="text-danger">{errorMessage}</span>
          </div>
        </div>
        {isEditing && <GameSearchBox onAdd={onAdd} />}
      </div>
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
