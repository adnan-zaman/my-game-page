import { useState, useRef } from "react";
import Game from "../components/Game";
import GameSearchBox from "../components/GameSearchBox";

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
  }

  //dragover handler is needed to make element
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
    const newGame = e.dataTransfer.getData("application/json");
    //index of game that was dropped on
    const dropTarget = Number(e.target.dataset.index);
    //dataTransfer will contain a js object if the game being dragged
    //is from search results, meaning a new game is being added
    //to favorite games
    if (newGame) {
      const newGameAsObject = JSON.parse(newGame);
      //we replace elements as we go, eventually we an element to newFaveGames[newFaveGames.length]
      //this increases the length and the loop goes on forever
      //so we keep the length of the list before we start
      const length = newFaveGames.length;
      //game to be added in
      let holder = newGameAsObject;
      for (let i = 0; i <= length; i++) {
        if (newFaveGames[i] && newFaveGames[i].id === newGameAsObject.id)
          return;
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
    setDisplayedFavoriteGames(favoriteGames);
    setIsEditing(false);
  }

  async function saveChanges() {
    const faveGameIds = displayedFavoriteGames.map((game) => game.id);
    try {
      const response = await fetch(
        `http://localhost:3000/api/favorites/${props.id}`,
        {
          method: "PUT",
          credentials: "same-origin",
          body: JSON.stringify(faveGameIds),
          headers: { "Content-Type": "application/json" },
        }
      );
      setIsEditing(false);
      setFavoriteGames(displayedFavoriteGames);
    } catch (e) {
      console.log(e);
    }
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
      onDrop={isEditing ? dropGame : undefined}
      onDelete={deleteGame}
    />
  ));

  return (
    <>
      <h1>{props.displayName}</h1>
      <div>
        <div className="favorite-games-list">{favoriteGamesList}</div>
        {props.id &&
          (!isEditing ? (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          ) : (
            <>
              <button onClick={rollbackChanges}>Cancel</button>
              <button onClick={saveChanges}>Save</button>
            </>
          ))}
      </div>
      {isEditing && <GameSearchBox />}
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
