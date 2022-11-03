/*Кнопки/окна профиля*/
const buttonProfileEdit = document.querySelector('.profile__button-edit');
const popupProfileEdit = document.querySelector('#edit_profile');
const profileForm = document.querySelector('#popup_profile');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const saveProfile = document.querySelector('#save_profile');
const createCard = document.querySelector('#create')
/*Кнопки/окна фото*/
const buttonAddCard = document.querySelector('.profile__button-add');
const placeForm = document.querySelector('#popup_place');
const popupPlaceAdd = document.querySelector('#add_new_place');
/*Инпуты*/
const inputPlaceName = document.querySelector('.popup__input_place-name');
const inputPlaceLink = document.querySelector('.popup__input_place-link');
const inputProfileName = document.querySelector('.popup__input_name');
const inputProfileOccupation = document.querySelector('.popup__input_occupation');
/*Список всех окон (popup)*/
const popupList = document.querySelectorAll('.popup');
/*Контейнет для всех фото-карточек*/
const cardContainer = document.querySelector('.elements');
const deleteButton = document.querySelector('#delete-button');
/*Переменная для template*/
const cardTemplate = document.querySelector('#element-template').content;
/*Открытое фото/кнопки*/
const popupBigImage = document.querySelector('#big_image');
const bigImageImage = document.querySelector('.popup__big-image');
const bigImageDescription = document.querySelector('.popup__description');
//Кнопка и попап для редактирования аватара
const buttonEditAvatar = document.querySelector('#edit_avatar');
const popupEditAvatar = document.querySelector('#popup_avatar');
const saveAvatar = document.querySelector('#save_avatar');
const inputEditAvatar = document.querySelector('.popup__input_avatar');
const avatarImage = document.querySelector('.profile__avatar');
//Попап для потверждения
const popupConfirm = document.querySelector('#confirm_popup');
const buttonConfirm = document.querySelector('#confirm');
//карточка
const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
/*Готовые карточки*/
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

	const myId = {};

export { buttonProfileEdit, popupProfileEdit, profileForm, profileName, profileOccupation, saveProfile, createCard, buttonAddCard, placeForm, popupPlaceAdd, inputPlaceName, inputPlaceLink, inputProfileName, inputProfileOccupation, cardContainer, popupList, popupBigImage, cardTemplate, bigImageImage, bigImageDescription, initialCards, buttonEditAvatar, popupEditAvatar, saveAvatar, inputEditAvatar, avatarImage, popupConfirm, cardElement, deleteButton, buttonConfirm, myId }