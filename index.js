import { createCharacterCard } from "./components/card/card.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;

    fetchCharacters();
  }
});

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  maxPage = data.info.pages;
  pagination.textContent = `${page}/${maxPage}`;
  const characters = data.results;
  characters.forEach((character) => {
    const characterCard = createCharacterCard(
      character.image,
      character.name,
      character.status,
      character.type,
      character.episode.length
    );
    cardContainer.append(characterCard);
  });
}

fetchCharacters();

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.query.value;
  fetchCharacters();
});
