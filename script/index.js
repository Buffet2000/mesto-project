/*Кнопки окна профиля*/
const editButton = document.querySelector('.profile__button-edit');
const editProfile = document.querySelector('#edit_profile');
const closeProfile = document.querySelector('#close_profile');
const saveProfile = document.querySelector('#save_profile');

/*Кнопки добавления фото*/
const addButton = document.querySelector('.profile__button-add');
const addPlace = document.querySelector('#add_new_place');
const closePlace = document.querySelector('#close_new_place');
const createButton = document.querySelector('#create');

/*Кнопка Лайк*/
const likeButton = document.querySelector('#like-button');
const like2 = document.querySelector('.element__like');

const images = document.querySelector('.elements');
const profile = document.querySelector('.profile__name');
const occupation = document.querySelector('.profile__occupation');

/*Открывание/закрывание окон*/
function edit() {
	editProfile.classList.add('popup_opened');
}

function close_profile() {
	editProfile.classList.remove('popup_opened');
}

function add() {
	addPlace.classList.add('popup_opened');
}

function close_place() {
	addPlace.classList.remove('popup_opened');
}

function like_active() {
	like.classList.add('element__like_active');
}
/*События для кнопок*/
editButton.addEventListener('click', edit);
closeProfile.addEventListener('click', close_profile);
addButton.addEventListener('click', add);
closePlace.addEventListener('click', close_place);

/*/*Начальные карточки
function initialCards(placeValue, linkValue) {
	placeValue = initialCards.name;
	linkValue = initialCards.link;
}*/

/*Добавление фотографии*/
function addImage(placeValue, linkValue) {

  const cardTemplate = document.querySelector('#element-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__title').textContent = placeValue;
  cardElement.querySelector('.element__image').src = linkValue;

  images.prepend(cardElement);
};

/*Удаление фотографии*/
function deleteImage() {

}

/*Создать карточку с фото*/
createButton.addEventListener('click', function (evt) {
	evt.preventDefault();

	const imageTitle = document.querySelector('.popup__input_type_place-name');
  const imagelink = document.querySelector('.popup__input_type_place-link');

  addImage(imageTitle.value, imagelink.value);

  imageTitle.value = '';
  imagelink.value = '';

	close_place();
});
/******************************************************test */
const renderElements = (cardData) => {
	images.prepend(generateElementList(cardData));
};
initialCards.forEach((cardData) => {
	renderElements(cardData);
});
/************************************************************************test */
/*Редактировать профиль*/
saveProfile.addEventListener('click', function (evt) {
	evt.preventDefault();

	const profileName = document.querySelector('.popup__input_type_name');
	const profileOccupation = document.querySelector('.popup__input_type_occupation');

	profile.textContent = profileName.value;
	occupation.textContent = profileOccupation.value;

	close_profile();
});

/*Кнопка Лайк*/
/*let like = document.querySelector('.element__like');
like.addEventListener( 'click', () => 
like.classList.add('element__like_active') );

const likeHeart = (event) => {
  event.target.classList.toggle('element__like_active');
}
like.addEventListener("click", likeHeart);*/