let editButton = document.querySelector('.profile__button-edit');
let editProfile = document.getElementById('edit_profile');
let closeProfile = document.getElementById('close_profile');

let addButton = document.querySelector('.profile__button-add');
let addPlace = document.getElementById('add_new_place');
let closePlace = document.getElementById('close_new_place');

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

editButton.addEventListener ('click', edit);
closeProfile.addEventListener ('click', close_profile);
addButton.addEventListener('click', add);
closePlace.addEventListener('click', close_place);