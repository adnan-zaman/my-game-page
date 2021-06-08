import React, { useState, useEffect, useRef } from "react";
import Game from "./Game";

export default function GameSearchBox(props) {
  //search term in search bar
  const [displayedSearchTerm, setDisplayedSearchTerm] = useState("");
  //the actual underlying search term regardless of whats typed
  //clicking next/prev will change pages for this value
  //clicking search button will change this value
  const [searchTerm, setSearchTerm] = useState(displayedSearchTerm);
  //page of search results
  const [searchPage, setSearchPage] = useState(undefined);
  //list of objects that will be retrieved from search api
  const [searchResults, setSearchResults] = useState([]);
  //whether or not search results are currently loading
  const [loading, setLoading] = useState(false);
  //error message
  const [errorMessage, setErrorMessage] = useState("");
  //whether or not there is a next page of search results
  const [hasNext, setHasNext] = useState(true);

  //used to determine whether its first render or not
  const firstRender = useRef(true);

  function startDragGame(e, game) {
    e.stopPropagation();
    e.dataTransfer.setData("application/json", JSON.stringify(game));
  }

  //dragover handler is needed to make element
  //draggable
  function dragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "move";
  }

  const displayedSearchResults = searchResults.map((game) => (
    <Game
      key={game.id}
      gameId={game.id}
      gameName={game.name}
      gameCoverUrl={game.coverurl}
      draggable={true}
      onDragStart={(e) => startDragGame(e, game)}
      onDragOver={dragOver}
      onAdd={() => props.onAdd(game)}
    />
  ));

  /**
   * Updates displayed search term
   * @param {Event} e
   */
  function handleChange(e) {
    setDisplayedSearchTerm(e.target.value);
  }

  /**
   * Sets searchTerm to displayedSearchTerm
   * and fetches search results.
   *
   * @param {Event} e
   */
  function handleSearch(e) {
    e.preventDefault();
    if (displayedSearchTerm === "") return;
    setSearchTerm(displayedSearchTerm);
    setSearchPage(0);
    fetchAndPopulateSearchResults(displayedSearchTerm, 0);
  }

  /**
   * Changes page number for searchTerm
   * (not displayedSearchTerm) and fetches search
   * results.
   *
   * @param {number} pageNumber new page number
   */
  function changePage(pageNumber) {
    if (pageNumber < 0) return;
    setSearchPage(pageNumber);
    fetchAndPopulateSearchResults(searchTerm, pageNumber);
  }

  /**
   * Fetches a search from the API and populates page
   * with search results. This function needs to be called
   * with a search term and page manually instead of relying on
   * checking state as reading state immediately after setting it
   * will return stale values. So, we give it the fresh values manually.
   *
   * @param {string} term search term
   * @param {number} page search page number
   */
  async function fetchAndPopulateSearchResults(term, page) {
    setErrorMessage("");
    setLoading(true);

    try {
      const query = `/api/search/${term}/${page}`;
      const response = await fetch(query);
      const data = await response.json();

      if (response.ok) {
        setSearchResults(data.results);
        setHasNext(data.hasNext);
      } else {
        setErrorMessage(results.message);
      }
      setLoading(false);
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  return (
    <div className="game-search-box d-flex flex-column">
      {loading && (
        <div className="load-container">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">loading...</span>
          </div>
        </div>
      )}

      <div
        className={`search-results game-list order-2 order-md-1 ${
          loading ? "loading-opacity" : ""
        }`}
      >
        {errorMessage && <p>{errorMessage}</p>}

        {displayedSearchResults}
      </div>
      <div className="button-bar order-1 order-md-2">
        <form onSubmit={handleSearch}>
          <label htmlFor="game-search-bar" className="d-none">
            Name of Game
          </label>
          <input
            id="game-search-bar"
            value={displayedSearchTerm}
            onChange={handleChange}
            placeholder="Name of Game..."
          ></input>
          <button type="submit" className="btn btn-primary">
            Search
          </button>

          <div className="float-md-right">
            <button
              type="button"
              onClick={() => changePage(searchPage - 1)}
              className={`btn btn-secondary ${
                searchPage > 0 ? "visible" : "invisible"
              }`}
              disabled={loading}
            >
              Prev
            </button>

            <label htmlFor="page-number" className="d-none">
              Page:
            </label>
            <input
              id="page-number"
              className={searchPage >= 0 ? "visible" : "invisible"}
              disabled={true}
              value={searchPage + 1}
            ></input>

            <button
              type="button"
              onClick={() => changePage(searchPage + 1)}
              className={`btn btn-secondary ${
                searchPage >= 0 && hasNext ? "visible" : "invisible"
              }`}
              disabled={loading}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
