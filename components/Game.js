export default function Game(props) {
  console.log(`i am ${props.gameName} and editing is ${props.isEditing}`);
  return (
    <div className="game-container">
      <img src={props.gameCoverUrl} alt={`Cover art for ${props.gameName}`} />
      <p>{props.gameName}</p>
      {props.isEditing && <button>Delete</button>}
    </div>
  );
}
