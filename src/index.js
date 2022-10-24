import './index.css';
import { initialCards, addCard } from './components/card.js';
import { enableValidation } from './components/validate.js';
import { openPopup, closePopup } from './components/modal.js';
/*Переменная для template*/
const cardTemplate = document.querySelector('#element-template').content;
/*Кнопки/окна профиля*/
const buttonProfileEdit = document.querySelector('.profile__button-edit');
const popupProfileEdit = document.querySelector('#edit_profile');
const profileForm = document.querySelector('#popup_profile');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
/*Открытое фото/кнопки*/
const popupBigImage = document.querySelector('#big_image');
const bigImageImage = document.querySelector('.popup__big-image');
const bigImageDescription = document.querySelector('.popup__description');
/*Кнопки/окна фото*/
const buttonAddCard = document.querySelector('.profile__button-add');
const placeForm = document.querySelector('#popup_place');
const popupPlaceAdd = document.querySelector('#add_new_place');
/*Инпуты*/
const inputPlaceName = document.querySelector('.popup__input_place-name');
const inputPlaceLink = document.querySelector('.popup__input_place-link');
const inputProfileName = document.querySelector('.popup__input_name');
const inputProfileOccupation = document.querySelector('.popup__input_occupation');
/*Контейнет для всех фото-карточек*/
const cardContainer = document.querySelector('.elements');
/*Список всех окон (popup)*/
const popupList = document.querySelectorAll('.popup');

/*Открытие формы профиля*/
function openProfileEditPopup () {
	openPopup (popupProfileEdit);
	inputProfileName.value = profileName.textContent;
	inputProfileOccupation.value = profileOccupation.textContent;
	const saveProfile = document.querySelector('#save_profile');
	saveProfile.classList.add('popup__submit-button_disabled');
	saveProfile.disabled = true;
}

/*Открытие формы добавления фото*/
function openAddPhotoPopup () {
	openPopup (popupPlaceAdd);
	inputPlaceName.value = '';
	inputPlaceLink.value = '';
	const createCard = document.querySelector('#create')
	createCard.classList.add('popup__submit-button_disabled');
	createCard.disabled = true;
}

/*Закрытие попапов*/
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

/*Создание готовых карточек "из коробки"*/
initialCards.forEach((elem) => {
	addCard(cardContainer, create(elem.name, elem.link))
});

/*Создание новой карточки (включая все кнопки и лайки)*/
function create(name, link) {
	const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
	const cardImage = cardElement.querySelector('.element__image');

	cardElement.querySelector('.element__title').textContent = name;
  cardImage.src = link;
	cardImage.alt = name;

	cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
		evt.target.classList.toggle('element__like_active');
	});

	const deleteButton = cardElement.querySelector('.element__delete');
	deleteButton.addEventListener('click', function () {
		cardElement.remove();
	});

	cardImage.addEventListener('click', function () {
		openPopup (popupBigImage);
		bigImageImage.src = link;
		bigImageImage.alt = name;
		bigImageDescription.textContent = name;
	});
	return cardElement;
}

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

/*Слушатели с валидацией на input*/
const profileFormElements = Array.from(profileForm.elements);
const placeFormElements = Array.from(placeForm.elements);

profileForm.addEventListener('input', function (evt) {
	enableValidation(profileForm, profileFormElements);
});

placeForm.addEventListener('input', function (evt) {
	enableValidation(placeForm, placeFormElements);
});

/*Слушатели для кнопок*/
buttonAddCard.addEventListener('click', openAddPhotoPopup);
buttonProfileEdit.addEventListener('click', openProfileEditPopup);