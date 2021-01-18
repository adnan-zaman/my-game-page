import { useState, useEffect, useRef } from "react";
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
  const startSearch = useRef(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const query = `http://localhost:3000/api/search/${term}/${page}`;
    const response = await fetch(query);
    const results = await response.json();
    setSearchResults(results);
    setLoading(false);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSearch}>
          <label htmlFor="game-search-bar">Name of Game:</label>
          <input
            id="game-search-bar"
            value={displayedSearchTerm}
            onChange={handleChange}
          ></input>
          <button type="submit">Search</button>
          {searchPage >= 0 && (
            <>
              <button type="button" onClick={() => changePage(searchPage - 1)}>
                Prev
              </button>
              <label htmlFor="page-number">Page:</label>
              <input
                id="page-number"
                disabled={true}
                value={searchPage + 1}
              ></input>
              <button type="button" onClick={() => changePage(searchPage + 1)}>
                Next
              </button>
            </>
          )}
        </form>
      </div>
      <div className="search-results">
        {loading && <p>Loading...</p>}
        {displayedSearchResults}
      </div>
    </div>
  );
}
