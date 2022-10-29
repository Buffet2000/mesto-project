import { addCard, create } from './card.js';
import { updateProfile, updateAvatar } from './modal.js';
import { buttonProfileEdit, popupProfileEdit, profileForm, profileName, profileOccupation, buttonAddCard, placeForm, popupPlaceAdd, inputPlaceName, inputPlaceLink, inputProfileName, inputProfileOccupation, cardContainer, popupList, buttonEditAvatar, inputEditAvatar, popupEditAvatar } from './utils.js';

const token = "bc504b10-b5b7-4e7d-a9e5-28f90b8280a5"; /*Мой токен*/
//Получить карточки
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
      //data.forEach((element) => console.log(element));
      data.reverse().forEach((cardinfo) => {
        addCard(cardContainer, create(cardinfo.name, cardinfo.link, cardinfo.likes.length))
      });
    })

    .catch((error) => console.log(error));
}
//Получить профиль
function getProfile() {
  fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me", {
    method: "GET",
    headers: {
      authorization: `${token}`
    }
  })
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      //console.log(data);
      updateProfile(data.name, data.about);
    })

    .catch((error) => console.log(error));
}
//Получить аватар
function getAvatar() {
  fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me", {
    method: "GET",
    headers: {
      authorization: `${token}`
    }
  })
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      //console.log(data);
      updateAvatar(data.avatar);
    })

    .catch((error) => console.log(error));
}
//обновить аватар профиля
function patchAvatar() {
  fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: inputEditAvatar.value
    })
  }); 
}
//Обновить профиль
function patchProfile() {
  fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me', {
    method: 'PATCH',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: inputProfileName.value,
      about: inputProfileOccupation.value
    })
  }); 
}
//Опубликовать карточку
function postCard() {
	fetch('https://nomoreparties.co/v1/plus-cohort-14/cards', {
  	method: 'POST',
  	headers: {
    	authorization: `${token}`,
    	'Content-Type': 'application/json'
  	},
  	body: JSON.stringify({
    	name: inputPlaceName.value,
    	link: inputPlaceLink.value
  	})
	}); 
}

export { getCards, getProfile, getAvatar, patchAvatar, patchProfile, postCard, token }