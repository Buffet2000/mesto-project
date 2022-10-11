import './index.css';
import { initialCards } from './components/card.js';

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

/*Открывание/закрывание окон*/
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

/*Закрытие по esc*/
function closeByEscape (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup (openedPopup);
  }
}

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

function addCard(container, element) {
	container.prepend(element);
}

/*Добавить карточку на страницу*/
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

/*Сообщение ошибки*/
const showInputError = (inputVal) => {
	inputVal.classList.add('popup__input_error');
}

const hideInputError = (inputVal) => {
	inputVal.classList.remove('popup__input_error');
}

const profileFormElements = Array.from(profileForm.elements);
const placeFormElements = Array.from(placeForm.elements);

/*Валидауия инпутов*/
profileForm.addEventListener('input', function (evt) {
	validateForm(profileForm, profileFormElements);
});

placeForm.addEventListener('input', function (evt) {
	validateForm(placeForm, placeFormElements);
});

/*Сама функция валидации*/
function validateForm (targetForm, targetFormElements) {
	targetFormElements.forEach(element => {
		const errorSpan = targetForm.querySelector(`#${element.name}_error`);
		if (!element.validity.valid) {
			showInputError(element);
			errorSpan.textContent = element.validationMessage;
			if (checkInputPlace(inputPlaceName)) {
				showInputError(element);
				errorSpan.textContent = element.validationMessage;
			}
			if (element === inputPlaceName) {
				errorSpan.textContent = `${element.	validationMessage} Текст должен быть не короче 2 симв. Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы`;
			}
		}
		else {
			hideInputError(element);
			if (errorSpan) errorSpan.textContent = '';
		}
	});

	const submitButton = targetForm.parentElement.querySelector('button');
	if (targetForm.checkValidity()) {
		console.log('valid');
		submitButton.classList.remove('popup__submit-button_disabled')
		submitButton.disabled = false;
	} else {
		console.log('invlid');
		submitButton.classList.add('popup__submit-button_disabled')
		submitButton.disabled = true;
	}
}

/*Слушатели для кнопок*/
buttonAddCard.addEventListener('click', openAddPhotoPopup);
buttonProfileEdit.addEventListener('click', openProfileEditPopup);

/*Проверка инпута названия новой карточки*/
function checkInputPlace(input) {
	input.value = input.value.replace(/[^A-Za-zА-Яа-яЁё\-\s]/g, '');
};