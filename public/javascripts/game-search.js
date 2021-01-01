const searchDialogBox = document.getElementById("search-dialog");
const searchResultsContainer = document.getElementById("search-results");

let currQuery = "";
let currPage = 0;

document.getElementById("add-game").addEventListener("click", openSearch);
document.getElementById("search-form").addEventListener("submit", newSearch);
document.getElementById("change").addEventListener("click", changeFaveGames);

document.getElementById("search-prev").addEventListener("click", () => {
  currPage = Math.max(0, currPage - 1);
  callApiAndPopulate();
});

document.getElementById("search-next").addEventListener("click", () => {
  currPage++;
  callApiAndPopulate();
});

function openSearch(e) {
  e.preventDefault();
  searchDialogBox.style.display = "block";
}

function newSearch(e) {
  e.preventDefault();
  currQuery = e.target.elements[0].value;
  currpage = 0;
  console.log(currQuery);
  console.log(currPage);
  callApiAndPopulate();
}

async function callApiAndPopulate() {
  searchResultsContainer.textContent = "";
  console.log("calling api");
  const response = await fetch(
    `http://localhost:3000/api/search/${currQuery}/${currPage}`
  );
  console.log("lets convert");
  const searchResults = await response.json();
  console.log(searchResults);
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

async function changeFaveGames() {
  const newFaves = [98381, 1738, 143, 8730, 99012];
  try {
    const response = await fetch(`http://localhost:3000/api/favorites/${id}`, {
      method: "PUT",
      credentials: "same-origin",
      body: JSON.stringify(newFaves),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log("err");
  }
}
