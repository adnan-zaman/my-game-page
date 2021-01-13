import { useState, useRef } from "react";
import Game from "../components/Game";

export default function UserPage(props) {
  //setting state
  const [favoriteGames, setFavoriteGames] = useState(props.games);
  const [currFavoriteGames, setCurrFavoriteGames] = useState(favoriteGames);
  const [isEditing, setIsEditing] = useState(false);

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
    const j = Number(e.dataTransfer.getData("text/plain"));
    //console.log(e.target);
    console.log(`${i} ${j}`);
    const temp = newFaveGames[i];
    newFaveGames[i] = newFaveGames[j];
    newFaveGames[j] = temp;
    setFavoriteGames(newFaveGames);
  }

  const favoriteGamesList = favoriteGames.map((game, index) => (
    <Game
      key={game.id}
      gameId={game.id}
      gameName={game.name}
      gameCoverUrl={game.coverurl}
      isEditing={isEditing}
      data-index={"" + index}
      draggable="true"
      onDragStart={dragFunc}
      onDragOver={dragOver}
      onDrop={drop}
    />
  ));

  return (
    <>
      <h1>{props.displayName}</h1>
      <div className="favorite-games-list">{favoriteGamesList}</div>
      {props.id && <button onClick={() => setIsEditing(true)}>Edit</button>}
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
