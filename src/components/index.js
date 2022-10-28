import '/src/index.css';
import { addCard, create, readyCards } from './card.js';
import { enableValidation, validationSettings } from './validate.js';
import { closePopup, openProfileEditPopup, openAddPhotoPopup, openPopup, openAvatarEditPopup, updateAvatar, openConfirmationPopup } from './modal.js';
import { buttonProfileEdit, popupProfileEdit, profileForm, profileName, profileOccupation, buttonAddCard, placeForm, popupPlaceAdd, inputPlaceName, inputPlaceLink, inputProfileName, inputProfileOccupation, cardContainer, popupList, buttonEditAvatar, inputEditAvatar, popupEditAvatar, popupConfirm, saveAvatar, cardTemplate } from './utils.js';

/*import { cohortId, authorizationToken, apiConfig, getProfileInfo, getCards, patchProfile, checkIfLikedByMe, likedByCurrentUser } from './api.js';*/
/*Создаём готовые карточки*/
readyCards();
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
	const name = inputPlaceName.value;
	const link = inputPlaceLink.value;
	addCard(cardContainer, create(name, link));
	closePopup (popupPlaceAdd);
});
/*Сохранить отредактированный профиль*/
profileForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	profileName.textContent = inputProfileName.value;
	profileOccupation.textContent = inputProfileOccupation.value;
	closePopup (popupProfileEdit);
});
//Сохранить аватар
popupEditAvatar.addEventListener('submit', function (evt) {
	evt.preventDefault();
	const photoUrl = inputEditAvatar.value;
	updateAvatar(photoUrl);
	closePopup (popupEditAvatar);
});
//Подтвердить удаление карточки
/*popupConfirm.addEventListener('submit', function(evt) {
	evt.preventDefault();
	const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
	cardElement.remove();
	closePopup (popupConfirm);
});
let cards = document.querySelectorAll('.elements');
cards.forEach((elem)=>{
  elem.addEventListener('click',removeParent);
});
function removeParent(){
    let revDiv = this.parentElement;
    revDiv.remove();
}*/
/*Слушатели для кнопок*/
buttonAddCard.addEventListener('click', openAddPhotoPopup);
buttonProfileEdit.addEventListener('click', openProfileEditPopup);
buttonEditAvatar.addEventListener('click', openAvatarEditPopup);
/*Вызов валидации*/
enableValidation (validationSettings);