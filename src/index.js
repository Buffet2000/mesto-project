import './index.css';
import { initialCards } from './components/card.js';

/*Переменная для template*/
const cardTemplate = document.querySelector('#element-template').content;

/*Кнопки/окна профиля*/
const buttonProfileEdit = document.querySelector('.profile__button-edit');
const buttonProfileClose = document.querySelector('#close_profile');

const popupProfileEdit = document.querySelector('#edit_profile');

const profileForm = document.querySelector('#popup_profile');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

/*Открытое фото/кнопки*/
const buttonBigImageClose = document.querySelector('#popup_image_close');

const popupBigImage = document.querySelector('#big_image');

const bigImageImage = document.querySelector('.popup__big-image');
const bigImageDescription = document.querySelector('.popup__description');

/*Кнопки/окна фото*/
const buttonAddCard = document.querySelector('.profile__button-add');
const buttonNewPlaceClose = document.querySelector('#close_new_place');
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
const popupContainer = document.querySelector('.popup__container');

/*Открывание/закрывание окон*/
function openPopup (popup) {
	popup.classList.add('popup_opened');
}

function closePopup (popupList) {
	popupList.classList.remove('popup_opened');
}

/*Открытие формы профиля*/
function openProfileEditPopup () {
	openPopup (popupProfileEdit);
	inputProfileName.value = profileName.textContent;
	inputProfileOccupation.value = profileOccupation.textContent;
}

/*Открытие формы добавления фото*/
function openAddPhotoPopup () {
	openPopup (popupPlaceAdd);
	inputPlaceName.value = '';
	inputPlaceLink.value = '';
}

/*Закрытие окна профиля*/
function closeProfilePopup() {
	closePopup (popupProfileEdit);
}
	
/*Закрытия окна нового места*/
function closePlacePopup() {
	closePopup (popupPlaceAdd);
}

/*Закрытие окна большого изображения*/
function closeBigImagePopup () {
	closePopup (popupBigImage);
}

/*Создание готовых карточек "из коробки"*/
initialCards.forEach((elem) => {
	addCard(cardContainer, create(elem.name, elem.link))
});

/*Создание новой карточки (включая все кнопки и лайки)*/
function create(name, link) {
	const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
	const cardImage = cardElement.querySelector('.element__image');
	const cardLikes = document.querySelectorAll('.element__like');

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
	closePlacePopup ();
});


/*Сохранить отредактированный профиль*/
profileForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	
	profileName.textContent = inputProfileName.value;
	profileOccupation.textContent = inputProfileOccupation.value;

	closeProfilePopup();
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
			errorSpan.textContent = `${element.validationMessage} Текст должен быть не короче 2 симв. Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы`;
		}
		} else {
			hideInputError(element);
			if (errorSpan) errorSpan.textContent = '';
		}
	});

	const submitButton = targetForm.parentElement.querySelector('button');
	if (targetForm.checkValidity()) {
		console.log('valid');
		submitButton.classList.remove('popup__submit-button_disabled');
	} else {
		console.log('invlid');
		submitButton.classList.add('popup__submit-button_disabled');
	}
}


profileForm.addEventListener('input', function (evt) {
	validateForm(profileForm, profileFormElements);
});

placeForm.addEventListener('input', function (evt) {
	validateForm(placeForm, placeFormElements);
});

/*Слушатели для кнопок*/
buttonAddCard.addEventListener('click', openAddPhotoPopup);
buttonProfileEdit.addEventListener('click', openProfileEditPopup);
buttonProfileClose.addEventListener('click', closeProfilePopup);
buttonNewPlaceClose.addEventListener('click', closePlacePopup);
buttonBigImageClose.addEventListener('click', closeBigImagePopup);

/*Закрытие по клавише esc*/
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
		if (popupProfileEdit.classList.contains('popup_opened')) {
			closeProfilePopup ();
		}
		if (popupBigImage.classList.contains('popup_opened')) {
			closeBigImagePopup ();
		}
		if (popupPlaceAdd.classList.contains('popup_opened')) {
			closePlacePopup ();
		}
  }
	if(evt.keyCode === 13) {
		evt.preventDefault();
 	}
});

/*Закрытие форм по клику мышки*/
document.addEventListener('mousedown', function (evt) {
	if (evt.target.contains(popupProfileEdit)) {
    closeProfilePopup ();
	}
	if (evt.target.contains(popupBigImage)) {
		closeBigImagePopup ();
	}
	if (evt.target.contains(popupPlaceAdd)) {
		closePlacePopup ();
	}
});

function checkInputPlace(input) {
	input.value = input.value.replace(/[^A-Za-zА-Яа-яЁё\-\s]/g, '');
};