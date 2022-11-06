import '/src/index.css';
import { getCards, getProfile, patchAvatar, patchProfile, postCard } from './api.js';
import { addCard, create } from './card.js';
import { enableValidation, validationSettings } from './validate.js';
import { closePopup, openProfileEditPopup, openAddPhotoPopup, openAvatarEditPopup, updateProfile } from './modal.js';
import { buttonProfileEdit, popupProfileEdit, profileForm, buttonAddCard, placeForm, popupPlaceAdd, cardContainer, popupList, buttonEditAvatar, popupEditAvatar, createCard, saveProfile, saveAvatar } from './utils.js';

//Загрузить с сервера данные
getCardsFromServer();
getProfileFromServer();
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
  createCard.textContent = 'Сохранение...';
	postCard();
  setTimeout(() => {
    getCardsFromServer();
    //console.log("Delayed for 1 second.");
    closePopup (popupPlaceAdd);
    createCard.textContent = 'Создать'
  }, 1000)
});
/*Сохранить отредактированный профиль*/
profileForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
  saveProfile.textContent = 'Сохранение...';
	patchProfile();
  setTimeout(() => {
    getProfileFromServer();
    //console.log("Delayed for 1 second.");
    closePopup (popupProfileEdit);
    createCard.textContent = 'Сохранить'
  }, 1000)
});
//Сохранить аватар
popupEditAvatar.addEventListener('submit', function (evt) {
	evt.preventDefault();
  saveAvatar.textContent = 'Сохранение...';
  patchAvatar();
  setTimeout(() => {
    getProfileFromServer();
    //console.log("Delayed for 1 second.");
    closePopup (popupEditAvatar);
    saveAvatar.textContent = 'Сохранить'
  }, 1000)
});
/*Слушатели для кнопок*/
buttonAddCard.addEventListener('click', openAddPhotoPopup);
buttonProfileEdit.addEventListener('click', openProfileEditPopup);
buttonEditAvatar.addEventListener('click', openAvatarEditPopup);
/*Вызов валидации*/
enableValidation (validationSettings);