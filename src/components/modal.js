import { popupPlaceAdd, popupProfileEdit, inputProfileName, inputProfileOccupation, saveProfile, inputPlaceName, inputPlaceLink, profileName, profileOccupation, createCard, popupEditAvatar, saveAvatar, inputEditAvatar, avatarImage, popupConfirm, buttonConfirm, myId } from './utils.js';

/*Закрытие по esc*/
function closeByEscape (evt) {
  if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_opened');
    closePopup (openedPopup);
  }
}
/*Открывание/закрывание окон + слушатель*/
function openPopup (popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closeByEscape);
}
function closePopup (popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closeByEscape);
}
/*Открытие формы профиля*/
function openProfileEditPopup () {
	openPopup (popupProfileEdit);
	inputProfileName.value = profileName.textContent;
	inputProfileOccupation.value = profileOccupation.textContent;
	saveProfile.classList.add('popup__submit-button_disabled');
	saveProfile.disabled = true;
}
/*Открытие формы добавления фото*/
function openAddPhotoPopup () {
	openPopup (popupPlaceAdd);
	inputPlaceName.value = '';
	inputPlaceLink.value = '';
	createCard.classList.add('popup__submit-button_disabled');
	createCard.disabled = true;
}
//Открытие попапа для редактирования аватара
function openAvatarEditPopup () {
	openPopup (popupEditAvatar);
	saveAvatar.classList.add('popup__submit-button_disabled');
	saveAvatar.disabled = true;
	inputEditAvatar.value = '';
}
//Открытие окна подтверждения
function openConfirmationPopup () {
	openPopup(popupConfirm)
}
//Обновить профиль
function updateProfile (name, about, id, avatar) {//не уверен, что это правильное место для этой функции...
	myId.id = id;
	profileName.textContent = name;
  profileOccupation.textContent = about;
	avatarImage.src = avatar;
}
//Удалить карточку
/*function deleteMyCard {
	deleteCard(cardId)
}*/

export { openPopup, closePopup, openProfileEditPopup, openAddPhotoPopup, openAvatarEditPopup, updateProfile, openConfirmationPopup }