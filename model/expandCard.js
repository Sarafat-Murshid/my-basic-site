function expandCard(card) {
  const body = document.body;

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  body.appendChild(overlay);

  const expandedCardContainer = document.createElement("div");
  expandedCardContainer.classList.add("expanded-card-container");

  const expandedCard = document.createElement("div");
  expandedCard.classList.add("expanded-card");

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  closeBtn.textContent = "X";
  closeBtn.onclick = function () {
    expandedCardContainer.classList.add("closing");
    setTimeout(() => {
      body.removeChild(expandedCardContainer);
      body.removeChild(overlay);
      enableCardClicks();
    }, 300); 
  };

  const cardClone = expandedStyle(card);

  cardClone.classList.remove("card");
  cardClone.querySelector(".card-content").classList.remove("card-content");
  cardClone.querySelector(".card-img").classList.remove("card-img");
  expandedCard.appendChild(closeBtn);
  expandedCard.appendChild(cardClone);

  expandedCardContainer.appendChild(expandedCard);
  body.appendChild(expandedCardContainer);


  setTimeout(() => {
    expandedCardContainer.classList.add("opening");
  }, 10); 
}

function expandedStyle(card) {
  const cardClone = card.cloneNode(true);
  cardClone.style.width = "90%";
  cardClone.style.height = "80%";
  cardClone.style.display = "flex";
  cardClone.style.flexDirection = "column";
  cardClone.style.alignItems = "center";
  cardClone.style.justifyContent = "center";

  const cardImgClone = cardClone.querySelector(".card-img");
  if (cardImgClone) {
    cardImgClone.style.width = "300px";
    cardImgClone.style.height = "200px";
    cardImgClone.style.objectFit = "cover";
  }

  const cardContentClone = cardClone.querySelector(".card-content");
  if (cardContentClone) {
    cardContentClone.style.width = "100%";
    cardContentClone.style.textAlign = "center";
    cardContentClone.style.margin = "auto";
    cardContentClone.style.fontSize = "1.5rem";
  }

  const cardTitleClone = cardClone.querySelector(".card-title");
  if (cardTitleClone) {
    cardTitleClone.style.fontFamily =
      "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    cardTitleClone.style.fontSize = "2rem";
  }

  const cardDateClone = cardClone.querySelector(".card-date");
  if (cardDateClone) {
    cardDateClone.style.fontSize = "1.5rem";
  }

  const cardTimeClone = cardClone.querySelector(".card-time");
  if (cardTimeClone) {
    cardTimeClone.style.fontSize = "1.5rem";
  }

  const cardLocationClone = cardClone.querySelector(".card-location");
  if (cardLocationClone) {
    cardLocationClone.style.fontSize = "1.5rem";
  }

  const cardDescriptionClone = cardClone.querySelector(".card-description");
  if (cardDescriptionClone) {
    cardDescriptionClone.style.fontSize = "1.5rem";
  }

  const cardOrganizerClone = cardClone.querySelector(".card-organizer");
  if (cardOrganizerClone) {
    cardOrganizerClone.style.fontSize = "1.5rem";
  }

  return cardClone;
}
