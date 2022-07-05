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

/*Кнопки окна профиля*/
const editButton = document.querySelector('.profile__button-edit');
const editProfile = document.querySelector('#edit_profile');
const closeProfileButton = document.querySelector('#close_profile');
const formProfile = document.querySelector('#popup_profile');
const formPlace = document.querySelector('#popup_place');
const bigImagePopup = document.querySelector('#big_image');
const bigImageImage = document.querySelector('.popup__big-image');
const bigImageDescription = document.querySelector('.popup__description');
const bigImageCloseButton = document.querySelector('#popup_image_close');

/*Кнопки добавления/удаления фото*/
const addButton = document.querySelector('.profile__button-add');
const addPlace = document.querySelector('#add_new_place');
const closePlaceButton = document.querySelector('#close_new_place');
const createButton = document.querySelector('#create');


/*Кнопка Лайк*/
const likeButton = document.querySelector('#like-button');
const like = document.querySelector('.element__like');

const images = document.querySelector('.elements');
const profile = document.querySelector('.profile__name');
const occupation = document.querySelector('.profile__occupation');


const popupList = document.querySelectorAll('.popup');

const profileName = document.querySelector('.popup__input_type_name');
const profileOccupation = document.querySelector('.popup__input_type_occupation');

const placeName = document.querySelector('.popup__input_type_place-name');
const placeLink = document.querySelector('.popup__input_type_place-link');

/*Открывание/закрывание окон*/
function openPopup (popupList) {
	popupList.classList.add('popup_opened');
}

function closePopup (popupList) {
	popupList.classList.remove('popup_opened');
}

/*Открытие формы профиля*/
function editProfileOpenPopup () {
	openPopup (editProfile);
	profileName.value = profile.textContent;
	profileOccupation.value = occupation.textContent;
}

/*Открытие формы добавления фото*/
function addFotoOpenPopup () {
	openPopup (addPlace);
	placeName.value = '';
	placeLink.value = '';
}


function closeProfile() {
	closePopup (editProfile);
}
	

function closePlace() {
	closePopup (addPlace);
}


function closeBigImagePopup () {
	closePopup (bigImagePopup);
}

initialCards.forEach((elem) => {
	addCard(images, create(elem.name, elem.link))
});

/*Создание карточки*/
function create(name, link) {
	const cardTemplate = document.querySelector('#element-template').content;
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
		openPopup (bigImagePopup);
		bigImageImage.src = link;
		bigImageImage.alt = name;
		bigImageDescription.textContent = name;
	});

	return cardElement;
}

function addCard(container, element) {
	container.prepend(element);
}


/*Добавить карточку */
formPlace.addEventListener('submit', function (evt) {
	evt.preventDefault();
	const name = placeName.value;
	const link = placeLink.value;
	addCard(images, create(name, link));
	closePlace ();
});

/*popupAddPlace.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const name = placeName.value;
  const link = placeLink.value;

  addCard(cardsContainer, createCard(name, link));
  closeAddPlaceForm();
});*/

/*Редактировать профиль*/
formProfile.addEventListener('submit', function (evt) {
	evt.preventDefault();
	
	profile.textContent = profileName.value;
	occupation.textContent = profileOccupation.value;

	closeProfile();
	
});

addButton.addEventListener('click', addFotoOpenPopup);
editButton.addEventListener('click', editProfileOpenPopup);
closeProfileButton.addEventListener('click', closeProfile);
closePlaceButton.addEventListener('click', closePlace);
bigImageCloseButton.addEventListener('click', closeBigImagePopup);

/*Кнопка Лайк*/