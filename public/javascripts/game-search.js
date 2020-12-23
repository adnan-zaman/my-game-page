const searchDialogBox = document.getElementById("search-dialog");
document.getElementById("add-game").addEventListener("click", openSearch);
document.getElementById("search-form").addEventListener("submit", gameSearch);
const searchResultsContainer = document.getElementById("search-results");

function openSearch(e) {
  e.preventDefault();
  searchDialogBox.style.display = "block";
}

async function gameSearch(e) {
  e.preventDefault();
  //clear results
  searchResultsContainer.textContent = "";
  const query = e.target.elements[0].value;
  const response = await fetch(`http://localhost:3000/api/search/${query}/0`);
  const searchResults = await response.json();
  for (const game of searchResults) {
    const container = document.createElement("div");
    container.id = "game-" + game.id;

    const gameName = document.createElement("p");
    gameName.textContent = game.name;

    const gameImg = document.createElement("img");
    gameImg.src = game.coverurl;

    container.appendChild(gameName);
    container.appendChild(gameImg);

    searchResultsContainer.appendChild(container);
  }
}
