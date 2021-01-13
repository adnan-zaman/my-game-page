import { useState, useRef, useEffect } from "react";

export default function Game(props) {
  const [clicked, setClicked] = useState(false);
  const [y, setY] = useState(0);

  //   console.log(`i am ${props.gameName} and I am clicked: ${clicked}`);

  //   function moveFunc(e) {
  //     e.preventDefault();
  //     if (clicked) setY(y + e.movementY);
  //   }

  function stopDrag(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const undraggable = {
    draggable: "false",
    onDragStart: stopDrag,
    onDragOver: stopDrag,
    onDrop: stopDrag,
  };

  return (
    <div
      className="game-container"
      data-index={props["data-index"]}
      onDragStart={props.onDragStart}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
      draggable={props.draggable}
    >
      <img
        src={props.gameCoverUrl}
        alt={`Cover art for ${props.gameName}`}
        {...undraggable}
      />
      <p {...undraggable}>{props.gameName}</p>
      {props.isEditing && <button {...undraggable}>Delete</button>}
    </div>
  );
}

// onMouseDown={(e) => {
//     e.preventDefault();
//     setClicked(true);
//   }}
//   onMouseUp={() => setClicked(false)}
//   onMouseMove={moveFunc}
// style={{
//     position: "relative",
//     top: `${y}px`,
//     borderColor: clicked ? "red" : "black",
//   }}
