import '/src/index.css';
import { getCards, getProfile, getAvatar, patchAvatar, patchProfile, postCard, deleteCard, token } from './api.js';
import { addCard, create } from './card.js';
import { enableValidation, validationSettings } from './validate.js';
import { closePopup, openProfileEditPopup, openAddPhotoPopup, openAvatarEditPopup, updateProfile, updateAvatar, avatarPatch } from './modal.js';
import { buttonProfileEdit, popupProfileEdit, profileForm, profileName, profileOccupation, buttonAddCard, placeForm, popupPlaceAdd, inputPlaceName, inputPlaceLink, inputProfileName, inputProfileOccupation, cardContainer, popupList, buttonEditAvatar, inputEditAvatar, popupEditAvatar } from './utils.js';

//проба
//

getProfile();
getAvatar();


/*Создание готовых карточек "из коробки"*/
getCards()
  .then((res) => {
    res.forEach((element) => console.log(element));
    res.reverse().forEach((cardinfo) => {
      addCard(cardContainer, create(cardinfo.name, cardinfo.link, cardinfo.likes.length))
    });
  });
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
  setTimeout(getCards, 1000);
});
/*Сохранить отредактированный профиль*/
profileForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	patchProfile();
	closePopup (popupProfileEdit);
  setTimeout(getProfile, 1000);
});
//Сохранить аватар
popupEditAvatar.addEventListener('submit', function (evt) {
	evt.preventDefault();
  patchAvatar();
	closePopup (popupEditAvatar);
  setTimeout(getAvatar, 1000);
});
/*Слушатели для кнопок*/
buttonAddCard.addEventListener('click', openAddPhotoPopup);
buttonProfileEdit.addEventListener('click', openProfileEditPopup);
buttonEditAvatar.addEventListener('click', openAvatarEditPopup);
/*Вызов валидации*/
enableValidation (validationSettings);