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
