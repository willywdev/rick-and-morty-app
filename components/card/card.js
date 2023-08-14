/* Character Card Component
For now you have only one hard coded character card for Rick Sanchez in your HTML. We want to create them dynamically in our JavaScript.

Write a function createCharacterCard inside the card.js file and export it.
You can use innerHTML to generate the HTML of the card. Cut the relevant HTML code of the card from the index.html and use it in your function.
The following elements of the card need to be dynamic and change for each character:
the src of the image
the name of the character
the status, type and occurrences values
HINT: go to the docs and look where you can find all the information in the character objects you will receive from the API.
Think about which input parameters this function will need.
The function finally returns the created li HTML element. */

{
  /* 
        <li class="card">
          <div class="card__image-container">
            <img
              class="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="Rick Sanchez"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">Rick Sanchez</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">Alive</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description"></dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">51</dd>
            </dl>
          </div>
        </li>
       */
}

export function createCharacterCard(source, name, status, type, occurence) {
  const listItem = document.createElement("li");
  listItem.classList.add("card");
  listItem.innerHTML = `
          <div class="card__image-container">
            <img
              class="card__image"
              src=${source}
              alt=${name}
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${occurence}</dd>
            </dl>
          </div>
  `;

  return listItem;
}
