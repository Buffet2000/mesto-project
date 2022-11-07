const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-14",
  headers: {
    authorization: "bc504b10-b5b7-4e7d-a9e5-28f90b8280a5",
    "Content-Type": "application/json",
  },
};
//Проверить ответ запроса
function checkResponse(res) {
  if (res.ok) {
    //console.log(res);
    return res.json();
  } else {
    console.log("Отклонено");
    return Promise.reject(res.statusText);
  }
}
//Получить карточки
function getCards() {
  return fetch("https://nomoreparties.co/v1/plus-cohort-14/cards", {
    method: "GET",
    headers: config.headers,
  }).then(checkResponse);
}
//Получить профиль
function getProfile() {
  return fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me", {
    method: "GET",
    headers: config.headers,
  }).then(checkResponse);
}
//обновить аватар профиля
function patchAvatar(avatar) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  }).then(checkResponse);
}
//Обновить профиль
function patchProfile(name, about) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(checkResponse);
}
//Опубликовать карточку
function postCard(name, link) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-14/cards", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(checkResponse);
}
//Удалить карточку
function deleteCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-14/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
}
//Отправить лайк
function putLike(cardId) {
  return fetch(
    `https://nomoreparties.co/v1/plus-cohort-14/cards/likes/${cardId}`,
    {
      method: "PUT",
      headers: config.headers,
    }
  ).then(checkResponse);
}
//Удалить лайк
function deleteLike(cardId) {
  return fetch(
    `https://nomoreparties.co/v1/plus-cohort-14/cards/likes/${cardId}`,
    {
      method: "DELETE",
      headers: config.headers,
    }
  ).then(checkResponse);
}

export { getCards, getProfile, patchAvatar, patchProfile, postCard, deleteCard, putLike, deleteLike };
