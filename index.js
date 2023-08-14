import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const source = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
const name = "Rick Sanchez";
const status = "Alive";
const type = "";
const occurence = "51";

const rickSanchez = createCharacterCard(source, name, status, type, occurence);
cardContainer.append(rickSanchez);
