import { useState, useEffect, useRef } from "react";
import Game from "./Game";

export default function GameSearchBox(props) {
  //search term in search bar
  const [searchTerm, setSearchTerm] = useState("");
  //page of search results
  const [searchPage, setSearchPage] = useState(undefined);
  //list of objects that will be retrieved from search api
  const [searchResults, setSearchResults] = useState([]);
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

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (searchTerm === "") return;
    setPageNumber(0);
  }

  function setPageNumber(pageNumber) {
    if (pageNumber < 0) return;
    setSearchPage(pageNumber);
  }

  async function fetchAndPopulateSearchResults() {
    setLoading(true);
    const query = `http://localhost:3000/api/search/${searchTerm}/${searchPage}`;
    const response = await fetch(query);
    const results = await response.json();
    setSearchResults(results);
    setLoading(false);
  }

  //whenever page number changes, new search results are fetched
  //needs to be done in useEffect because useState doesnt change
  //values immediately, accessing searchPage after render ensures
  //we have new value
  useEffect(() => {
    //dont want fetchAndPopulateSearchResults() being
    //called on first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    fetchAndPopulateSearchResults();
  }, [searchPage]);

  return (
    <div>
      <div>
        <form onSubmit={handleSearch}>
          <label htmlFor="game-search-bar">Name of Game:</label>
          <input
            id="game-search-bar"
            value={searchTerm}
            onChange={handleChange}
          ></input>
          <button type="submit">Search</button>
          {searchPage >= 0 && (
            <>
              <button
                type="button"
                onClick={() => setPageNumber(searchPage - 1)}
              >
                Prev
              </button>
              <label htmlFor="page-number">Page:</label>
              <input
                id="page-number"
                disabled={true}
                value={searchPage}
              ></input>
              <button
                type="button"
                onClick={() => setPageNumber(searchPage + 1)}
              >
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
