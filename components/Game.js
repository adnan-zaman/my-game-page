import React, { useState, useRef, useEffect } from "react";

/**
 *
 * A component representing a single game
 *
 * @param {object} props
 *  - onAdd? {function} - callback for games in GameSearchBox to be added to favorite games list.
 *                        Used in mobile view.
 */

export default function Game(props) {
  return (
    <div
      className="game-container container rounded my-3 "
      data-index={props["data-index"]}
      onDragStart={props.onDragStart}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
      draggable={props.draggable}
    >
      <div className="row">
        <p
          className={`col-md-1 col-1 ${
            props["data-index"] && `pos-${Number(props["data-index"]) + 1}`
          }`}
        >
          {props["data-index"] && Number(props["data-index"]) + 1 + "."}
        </p>
        <div className="game-img col-md-2 col-11">
          <img
            src={props.gameCoverUrl}
            alt={`Cover art for ${props.gameName}`}
            height={90}
            width={90}
            className="rounded d-inline-block m-auto"
          />
        </div>
        <div
          className={`game-name d-inline-block ${
            props.isEditing ? "col-md-6" : "col-md-9"
          }`}
        >
          <p>{props.gameName}</p>
        </div>

        {props.isEditing && (
          <button
            onClick={() => props.onDelete(props.gameId)}
            className="col-md-3 btn btn-danger"
          >
            Delete
          </button>
        )}

        {
          //add button should only appear on games in GameSearchBox
          //data-index prop is only given to games in the favorite game list
          //therefore if no data-index, its a GameSearchBox game
          !props["data-index"] && (
            <button onClick={props.onAdd} className="btn btn-success d-md-none">
              Add
            </button>
          )
        }
      </div>
    </div>
  );
}
