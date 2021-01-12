import { useState, useRef } from "react";
import Game from "../components/Game";

export default function UserPage(props) {
  //setting state
  const [favoriteGames, setFavoriteGames] = useState(props.games);
  const [currFavoriteGames, setCurrFavoriteGames] = useState(favoriteGames);
  const [isEditing, setIsEditing] = useState(false);

  const favoriteGamesList = favoriteGames.map((game) => (
    <Game
      key={game.id}
      gameId={game.id}
      gameName={game.name}
      gameCoverUrl={game.coverurl}
      isEditing={isEditing}
    />
  ));

  return (
    <>
      <h1>{props.displayName}</h1>
      <div>{favoriteGamesList}</div>
      {props.id && <button onClick={() => setIsEditing(true)}>Edit</button>}
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
