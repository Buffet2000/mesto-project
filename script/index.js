const editButton = document.querySelector('.profile__button-edit');
const editProfile = document.getElementById('edit_profile');
const closeProfile = document.getElementById('close_profile');

const addButton = document.querySelector('.profile__button-add');
const addPlace = document.getElementById('add_new_place');
const closePlace = document.getElementById('close_new_place');

const images = document.querySelector('.elements');
const createButton = document.getElementById('create');

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

editButton.addEventListener('click', edit);
closeProfile.addEventListener('click', close_profile);
addButton.addEventListener('click', add);
closePlace.addEventListener('click', close_place);

/*Добавление фотографии*/
function addImage(placeValue, linkValue) {

  const cardTemplate = document.querySelector('#element-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__title').textContent = placeValue;
  cardElement.querySelector('.element__image').src = linkValue;

  images.append(cardElement);
};

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