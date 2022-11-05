import { addCard, create } from './card.js';
import { updateProfile } from './modal.js';
import { buttonProfileEdit, popupProfileEdit, profileForm, profileName, profileOccupation, buttonAddCard, placeForm, popupPlaceAdd, inputPlaceName, inputPlaceLink, inputProfileName, inputProfileOccupation, cardContainer, popupList, buttonEditAvatar, inputEditAvatar, popupEditAvatar } from './utils.js';

const token = "bc504b10-b5b7-4e7d-a9e5-28f90b8280a5"; /*Мой токен*/

//Проверить ответ запроса
function checkResponse(res) {
  if (res.ok) {
    //console.log(res);
    return res.json();
    
  } else {
    console.log('Отклонено');
    return Promise.reject(res.statusText);
  }
}
//Получить карточки
function getCards() {
  return fetch("https://nomoreparties.co/v1/plus-cohort-14/cards", {
    method: "GET",
    headers: {
      authorization: `${token}`
    }
  })
    .then(checkResponse)

    .catch((error) => console.log(error));
}
//Получить профиль
function getProfile() {
  return fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me", {
    method: "GET",
    headers: {
      authorization: `${token}`
    }
  })
    .then(checkResponse)

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
//Удалить карточку
function deleteCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-14/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json'
    }
  })
  .then(checkResponse)

  .catch((error) => console.log(error));
}
//Отправить лайк
function putLike(cardId) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-14/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json'
    }
  })
  .then(checkResponse)

  .catch((error) => console.log(error));
}
//Удалить лайк
function deleteLike(cardId) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-14/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json'
    }
  })
  .then(checkResponse)

  .catch((error) => console.log(error));
}

export { getCards, getProfile, patchAvatar, patchProfile, postCard, deleteCard, putLike, deleteLike, token }