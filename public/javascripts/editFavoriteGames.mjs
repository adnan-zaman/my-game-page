//get reference to dom elements
const editFavoriteGamesBtn = document.getElementById("edit-favorite-games-btn");
const cancelEditFavoriteGamesBtn = document.getElementById(
  "cancel-edit-favorite-games-btn"
);
const searchBox = document.getElementById("search-box");
const favoriteGamesList = document.getElementById("favorite-games-list");

//these elements will only be on the page if user is authorized
if (globals.id) {
  editFavoriteGamesBtn.addEventListener("click", initiateEditFavoriteGames);
}

//script-wide variables
let currentEditSession = null;

function initiateEditFavoriteGames() {
  currentEditSession = new EditSession();

  cancelEditFavoriteGamesBtn.style.display = "block";
  searchBox.style.display = "block";
  favoriteGamesList.childNodes.forEach((li) => {
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      currentEditSession.removeFavoriteGame(
        Number(li.firstChild.dataset["gameid"])
      );
    });

    li.firstChild.appendChild(removeBtn);
  });
  //console.log(currentEditSession);
}

class EditSession {
  //Favorite games during this edit session
  #currentFavoriteGames;

  constructor() {
    this.#currentFavoriteGames = [...globals.favoriteGames];
  }

  get currentFavoriteGames() {
    return [...this.#currentFavoriteGames];
  }

  removeFavoriteGame(gameId) {
    this.#currentFavoriteGames = this.#currentFavoriteGames.filter(
      (game) => game.id !== gameId
    );
  }
}
