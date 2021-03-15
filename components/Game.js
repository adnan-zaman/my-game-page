import React, { useState, useRef, useEffect } from "react";

/**
 *
 * A component representing a single game
 *
 * @param {object} props
 */

export default function Game(props) {
  function stopDrag(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  //given to div's children so only the game-container
  //is draggable
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
        height={90}
        width={90}
        {...undraggable}
      />
      <p {...undraggable}>{props.gameName}</p>
      {props.isEditing && (
        <button {...undraggable} onClick={() => props.onDelete(props.gameId)}>
          Delete
        </button>
      )}
    </div>
  );
}
