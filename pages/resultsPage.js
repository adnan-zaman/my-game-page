import React, { useState } from "react";
import Form from "../components/Form";
import { EmailField, PasswordField } from "../components/FormFields";
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
  console.log(props.hasNext);
  return (
    <>
      <div>
        {searchResults.length > 0 ? (
          searchResults
        ) : (
          <p>There are no results..</p>
        )}
      </div>
      {props.page > 0 && (
        <a href={`/search?query=${props.searchQuery}&page=${props.page - 1}`}>
          <button>Prev</button>
        </a>
      )}
      {props.hasNext && (
        <a href={`/search?query=${props.searchQuery}&page=${props.page + 1}`}>
          <button>Next</button>
        </a>
      )}
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
