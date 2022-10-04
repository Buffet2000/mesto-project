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

const InputProfileName = document.querySelector('.popup__input_type_name');
const InputProfileOccupation = document.querySelector('.popup__input_type_occupation');

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

const inputPopup = document.querySelector('.popup__input');
const inputPlaceName = document.querySelector('.popup__input_type_place-name');
const inputPlaceLink = document.querySelector('.popup__input_type_place-link');
/*const inputError = formElement.querySelector(`.${inputPopup.id}-error`);*/

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
	InputProfileName.value = profileName.textContent;
	InputProfileOccupation.value = profileOccupation.textContent;
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

/*Сообщение ошибки*/

const showError = (input, errorMessage) => {
  input.classList.add('form__input_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('form__input-error_active');
};

function checkInputValidity() {
	if (!inputPopup.validity.valid) {
		
	} else {
		console.log(e)
	}
}

/*Слушатели для кнопок*/
buttonAddCard.addEventListener('click', openAddPhotoPopup);
buttonProfileEdit.addEventListener('click', openProfileEditPopup);
buttonProfileClose.addEventListener('click', closeProfilePopup);
buttonNewPlaceClose.addEventListener('click', closePlacePopup);
buttonBigImageClose.addEventListener('click', closeBigImagePopup);
