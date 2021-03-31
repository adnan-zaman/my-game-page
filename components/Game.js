import React, { useState, useRef, useEffect } from "react";

/**
 *
 * A component representing a single game
 *
 * @param {object} props :
 *
 *  - data-index? {string}: index of game in the fave game list
 *
 *  - onAdd? {function}: callback for games in GameSearchBox to be added to favorite games list.
 *  Used in mobile view. Mandatory for Games in GameSearchBox.
 *
 *  - changePosition? {function(currPos: int, nextPos: int)}: callback for games in fave game list to change position.
 * Used in mobile view. Mandatory for Games in fave game list.
 */

export default function Game(props) {
  //I cast it to number so often maybe I should just save it hm
  const dataIndex = props["data-index"] && Number(props["data-index"]);
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
        <p className={`col-1 ${props["data-index"] && `pos-${dataIndex + 1}`}`}>
          {props["data-index"] && dataIndex + 1 + "."}
        </p>
        <div
          className={`game-img col-md-2 ${
            props.isEditing ? "col-9" : "col-11"
          }`}
        >
          <img
            src={props.gameCoverUrl}
            alt={`Cover art for ${props.gameName}`}
            height={90}
            width={90}
            className="rounded d-inline-block m-auto"
          />
        </div>
        <div
          className={`change-pos-buttons d-md-none ${
            props.isEditing ? "col-2" : "d-none"
          }`}
        >
          {props.isEditing && dataIndex > 0 && (
            <button
              className="change-pos-up"
              onClick={() => props.changePosition(dataIndex, dataIndex - 1)}
            >
              <i className="bi-caret-up-fill" />
            </button>
          )}
          {props.isEditing && !props.isLast && (
            <button
              className="change-pos-down"
              onClick={() => props.changePosition(dataIndex, dataIndex + 1)}
            >
              <i className="bi-caret-down-fill" />
            </button>
          )}
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
            Delete <i className="bi-trash-fill mx-1" />
          </button>
        )}

        {
          //add button should only appear on games in GameSearchBox
          //data-index prop is only given to games in the favorite game list
          //therefore if no data-index, its a GameSearchBox game
          !props["data-index"] && (
            <button
              onClick={props.onAdd}
              className="btn btn-success d-md-none w-100"
            >
              Add <i className="bi-plus-circle-fill mx-1" />
            </button>
          )
        }
      </div>
    </div>
  );
}
