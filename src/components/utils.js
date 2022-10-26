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
/*Переменная для template*/
const cardTemplate = document.querySelector('#element-template').content;
/*Открытое фото/кнопки*/
const popupBigImage = document.querySelector('#big_image');
const bigImageImage = document.querySelector('.popup__big-image');
const bigImageDescription = document.querySelector('.popup__description');

export { buttonProfileEdit, popupProfileEdit, profileForm, profileName, profileOccupation, saveProfile, createCard, buttonAddCard, placeForm, popupPlaceAdd, inputPlaceName, inputPlaceLink, inputProfileName, inputProfileOccupation, cardContainer, popupList, popupBigImage, cardTemplate, bigImageImage, bigImageDescription }