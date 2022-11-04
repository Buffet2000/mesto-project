import { openPopup, openConfirmationPopup, closePopup } from "./modal.js";
import { popupBigImage, cardTemplate, bigImageImage, bigImageDescription, cardContainer, initialCards, deleteButton, buttonConfirm, popupConfirm, myId } from './utils.js';
import { deleteCard } from './api.js';

/*Добавление карточки*/
function addCard(container, element) {
	container.prepend(element);
}

/*Создание новой карточки (включая все кнопки и лайки)*/
function create(name, link, likes, cardOwner, cardId) {
	const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
	const cardImage = cardElement.querySelector('.element__image');

	cardElement.querySelector('.element__like-counter').textContent = likes;
	cardElement.querySelector('.element__title').textContent = name;
  cardImage.src = link;
	cardImage.alt = name;

	cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
		evt.target.classList.toggle('element__like_active');
	});

	const deleteButton = cardElement.querySelector('#delete-button');
	
	if (myId.id != cardOwner) {
    deleteButton.classList.remove('element__delete_active');
  }
	deleteButton.addEventListener('click', function () {
		openConfirmationPopup();
		buttonConfirm.onclick = function (evt) {
			evt.preventDefault();
			deleteCard(cardId);
			cardElement.remove();
			closePopup(popupConfirm);
		}
	});
	cardImage.addEventListener('click', function () {
		openPopup (popupBigImage);
		bigImageImage.src = link;
		bigImageImage.alt = name;
		bigImageDescription.textContent = name;
	});
	return cardElement;
}

export { addCard, create }