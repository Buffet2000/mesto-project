import { addCard, create } from './card.js';
import { buttonProfileEdit, popupProfileEdit, profileForm, profileName, profileOccupation, buttonAddCard, placeForm, popupPlaceAdd, inputPlaceName, inputPlaceLink, inputProfileName, inputProfileOccupation, cardContainer, popupList, buttonEditAvatar, inputEditAvatar, popupEditAvatar } from './utils.js';

const token = "bc504b10-b5b7-4e7d-a9e5-28f90b8280a5"; /*Мой токен*/

function getCards() {
  fetch("https://nomoreparties.co/v1/plus-cohort-14/cards", {
    method: "GET",
    headers: {
      authorization: `${token}`
    }
  })
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      data.forEach((element) => console.log(element));
      data.reverse().forEach((cardinfo) => {
        addCard(cardContainer, create(cardinfo.name, cardinfo.link, cardinfo.likes.length))
      });
    })

    .catch((error) => console.log(error));
}

export { getCards }