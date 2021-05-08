import React from "react";

/**
 *
 * A search result of a single user displayed when
 * searching for users.
 *
 * @param {object} props expected props:
 *
 * - displayName {string} display name to show
 * - pageUrl {string} url to user's page
 * - profilePic {string} src url of user's profile picture
 *
 */
export default function SearchResult(props) {
  return (
    <a href={props.pageUrl}>
      <div className="search-result row rounded m-3">
        <div className="col-3">
          <img
            height={100}
            width={100}
            src={props.profilePic}
            alt={`${props.displayName}'s profile picture`}
            className="rounded-circle border"
          />
        </div>
        <div className="col-9">
          <h2>{props.displayName}</h2>
        </div>
      </div>
    </a>
  );
}
