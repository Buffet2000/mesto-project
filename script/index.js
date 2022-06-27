let editButton = document.querySelector('.profile__button-edit');
let popUp = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');

function edit() {
	popUp.classList.add('popup_opened');
}

function close() {
	popUp.classList.remove('popup_opened');
}

editButton.addEventListener ('click', edit);
closeButton.addEventListener ('click', close);