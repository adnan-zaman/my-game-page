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
  const [displayedFavoriteGames, setdisplayedFavoriteGames] = useState(
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
    const i = Number(e.target.dataset.index);
    const j = Number(e.dataTransfer.getData("text/plain"));
    const temp = newFaveGames[i];
    newFaveGames[i] = newFaveGames[j];
    newFaveGames[j] = temp;
    setdisplayedFavoriteGames(newFaveGames);
  }

  /**
   * Deletes a game from displayedFavoriteGames.
   *
   * @param {number} gameId the id of game to be deleted
   */
  function deleteGame(gameId) {
    setdisplayedFavoriteGames(
      displayedFavoriteGames.filter((game) => game.id !== gameId)
    );
  }

  /**
   * Called when editing is cancelled. Sets displayed favorite games
   * to actual favorite games.
   */
  function rollbackChanges() {
    setdisplayedFavoriteGames(favoriteGames);
    setIsEditing(false);
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
            isEditing && <button onClick={rollbackChanges}>Cancel</button>
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
