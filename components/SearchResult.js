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
 *
 */
export default function SearchResult(props) {
  return (
    <div>
      <a href={props.pageUrl}>
        <h2>{props.displayName}</h2>
      </a>
    </div>
  );
}
