import React, { useState } from "react";
import Toolbar from "../components/Toolbar";
import SearchResult from "../components/SearchResult";

/**
 * Page that displays the results of a search.
 * Currently only used for user search, maybe used
 * in general for all searches throughout the site.
 *
 * @param {object} props expected props:
 *  - users: {object[]} -> object = {id: (num), displayName: {string}}
 *    all the users to be displayed
 *  - hasNext {boolean} whether or not there is a next page
 *  - searchQuery {string} the search query these results are for
 *  - page {number} the current search page
 *  - userId {number} logged in user's user id
 *  - profilePic {string} src url of user's profile picture
 */
export default function ResultsPage(props) {
  const searchResults = [];
  //create SearchResult for each user
  for (const user of props.users) {
    searchResults.push(
      <SearchResult
        key={user.id}
        displayName={user.displayName}
        pageUrl={`/user/${user.id}`}
        profilePic={user.profilePic}
      />
    );
  }

  return (
    <>
      <div className="full-page-flex-container d-flex flex-column">
        <Toolbar userId={props.userId} profilePic={props.profilePic} />
        <div className="search-results-container">
          {searchResults.length > 0 ? (
            searchResults
          ) : (
            <p>There are no results..</p>
          )}
        </div>
        <div className="search-results-container-nav-buttons">
          {props.page > 0 && (
            <a
              href={`/search?query=${props.searchQuery}&page=${props.page - 1}`}
            >
              <button className="btn btn-secondary">Prev</button>
            </a>
          )}
          {props.hasNext && (
            <a
              href={`/search?query=${props.searchQuery}&page=${props.page + 1}`}
            >
              <button className="btn btn-secondary">Next</button>
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
