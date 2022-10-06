import './index.css';
const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
	];

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
const submitButton = document.querySelector('.popup__submit-button');
const submitButtonsAll = document.querySelectorAll('.popup__submit-button');


/*Инпуты*/
const inputPlaceName = document.querySelector('.popup__input_place-name');
const inputPlaceLink = document.querySelector('.popup__input_place-link');
const inputProfileName = document.querySelector('.popup__input_name');
const inputProfileOccupation = document.querySelector('.popup__input_occupation');

/*Сообщения ошибок*/
const nameError = document.querySelector('#name_error');
const occupationError = document.querySelector('#occupation_error')
const placeNameError = document.querySelector('#place-name_error');
const placeLinkError = document.querySelector('#place-link_error');

/*Контейнет для всех фото-карточек*/
const cardContainer = document.querySelector('.elements');

/*Список всех окон (popup)*/
const popupList = document.querySelectorAll('.popup');

/*Открывание/закрывание окон*/
function openPopup (popupList) {
	popupList.classList.add('popup_opened');
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

/*Создание новой карточки (включая все кнопки)*/
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
	closePlacePopup ();
});


/*Сохранить отредактированный профиль*/
profileForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	
	profileName.textContent = InputProfileName.value;
	profileOccupation.textContent = InputProfileOccupation.value;

	closeProfilePopup();
});
/*ТУТ ВСЁ ПОКА В РАЗРАБОТКЕ! :) */
/*Сообщение ошибки*/

const showInputError = (inputVal) => {
	inputVal.classList.add('popup__input_error');
}

const hideInputError = (inputVal) => {
	inputVal.classList.remove('popup__input_error');
}

/*Проверка валидации*/
const profileFormElements = Array.from(profileForm.elements);


profileForm.addEventListener('input', function (evt) {
 profileFormElements.forEach(element => {
  const errorSpan = element.nextSibling.nextSibling;
  if (!element.validity.valid) {
   showInputError(element);
   errorSpan.textContent = element.validationMessage;
    }
    else {
   hideInputError(element);
   if (errorSpan) errorSpan.textContent = '';
    }
 });


const checkInputValidity = (valInput, errorName) => {
  if (!valInput.validity.valid) {
    showInputError(valInput);
		errorName.textContent = valInput.validationMessage;
  }
  else {
    hideInputError(valInput);
		errorName.textContent = '';
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
}

const allSubmit = Array.from(submitButtonsAll);
allSubmit.forEach((item) => {
	item.classList.add('popup_submit-button_disabled');
});

/*Слушатели для кнопок*/
buttonAddCard.addEventListener('click', openAddPhotoPopup);
buttonProfileEdit.addEventListener('click', openProfileEditPopup);
buttonProfileClose.addEventListener('click', closeProfilePopup);
buttonNewPlaceClose.addEventListener('click', closePlacePopup);
buttonBigImageClose.addEventListener('click', closeBigImagePopup);

/*Валидация форм*/
inputProfileName.addEventListener('input', function () {
checkInputValidity(inputProfileName, nameError);
});

inputProfileOccupation.addEventListener('input', function () {
  checkInputValidity(inputProfileOccupation, occupationError);
});

inputPlaceName.addEventListener('input', function () {
	checkInputValidity(inputPlaceName, placeNameError);
});

inputPlaceLink.addEventListener('input', function () {
	checkInputValidity(inputPlaceLink, placeLinkError);
}):