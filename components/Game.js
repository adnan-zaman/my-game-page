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
      className="game-container rounded mb-3"
      data-index={props["data-index"]}
      onDragStart={props.onDragStart}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
      draggable={props.draggable}
    >
      <div className="container">
        <div className="row">
          <div className="game-img col-md-3">
            <img
              src={props.gameCoverUrl}
              alt={`Cover art for ${props.gameName}`}
              height={90}
              width={90}
              className="rounded d-inline-block m-auto"
              {...undraggable}
            />
          </div>
          <div
            className={`game-name d-inline-block ${
              props.isEditing ? "col-md-6" : "col-md-9"
            }`}
          >
            <p {...undraggable}>{props.gameName}</p>
          </div>

          {props.isEditing && (
            <button
              {...undraggable}
              onClick={() => props.onDelete(props.gameId)}
              className="col-md-3 btn btn-danger"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
