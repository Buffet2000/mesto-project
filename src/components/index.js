import '/src/index.css';
import { getCards, getProfile, patchAvatar, patchProfile, postCard, putLike, token } from './api.js';
import { addCard, create } from './card.js';
import { enableValidation, validationSettings } from './validate.js';
import { closePopup, openProfileEditPopup, openAddPhotoPopup, openAvatarEditPopup, updateProfile, avatarPatch } from './modal.js';
import { buttonProfileEdit, popupProfileEdit, profileForm, profileName, profileOccupation, buttonAddCard, placeForm, popupPlaceAdd, inputPlaceName, inputPlaceLink, inputProfileName, inputProfileOccupation, cardContainer, popupList, buttonEditAvatar, inputEditAvatar, popupEditAvatar, likeCounter } from './utils.js';

//Загрузить с сервера данные
getCardsFromServer();
getProfileFromServer();
//Поставить лайк
function likeCard(cardId) {
  putLike(cardId)
  .then((res) => {
    likeCounter.textContent = res['likes'].length;
    evt.target.classList.toggle('elements__like_active');
    likes = res['likes'];
  })
}
//Обновить данные в профиле
function getProfileFromServer() {
  getProfile()
  .then((data) => {
    //console.log(data);
    updateProfile(data.name, data.about, data._id, data.avatar);
  });
}
/*Создание готовых карточек "из коробки"*/
function getCardsFromServer() {
  getCards()
  .then((res) => {
    //res.forEach((element) => console.log(element));
    res.reverse().forEach((cardInfo) => {
      //console.log(cardInfo['owner']['_id']);
      addCard(cardContainer, create(cardInfo.name, cardInfo.link, cardInfo.likes.length, cardInfo.likes, cardInfo.owner._id, cardInfo._id))
    });
  });
}

/*Закрытие попапов по пустому полю и кнопке*/
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  });
});
/*Слушатель с добавлением карточки на страницу*/
placeForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	postCard();
	closePopup (popupPlaceAdd);
  setTimeout(getCardsFromServer, 500);
});
/*Сохранить отредактированный профиль*/
profileForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	patchProfile();
	closePopup (popupProfileEdit);
  setTimeout(getProfileFromServer, 500);
});
//Сохранить аватар
popupEditAvatar.addEventListener('submit', function (evt) {
	evt.preventDefault();
  patchAvatar();
	closePopup (popupEditAvatar);
  setTimeout(getProfileFromServer, 500);
});
/*Слушатели для кнопок*/
buttonAddCard.addEventListener('click', openAddPhotoPopup);
buttonProfileEdit.addEventListener('click', openProfileEditPopup);
buttonEditAvatar.addEventListener('click', openAvatarEditPopup);
/*Вызов валидации*/
enableValidation (validationSettings);