import { openPopup, openConfirmationPopup, closePopup } from "./modal.js";
import { popupBigImage, cardTemplate, bigImageImage, bigImageDescription, cardContainer, initialCards, deleteButton, buttonConfirm, popupConfirm, myId } from './utils.js';

/*Добавление карточки*/
function addCard(container, element) {
	container.prepend(element);
}

/*Создание новой карточки (включая все кнопки и лайки)*/
function create(name, link, likes, cardOwner, userId) {
	const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
	const cardImage = cardElement.querySelector('.element__image');

	cardElement.querySelector('.element__like-counter').textContent = likes;

	cardElement.querySelector('.element__title').textContent = name;
  cardImage.src = link;
	cardImage.alt = name;
	userId = myId.id;

	cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
		evt.target.classList.toggle('element__like_active');
	});

	const deleteButton = cardElement.querySelector('.element__delete');
	if (userId != cardOwner) {
		//console.log('not same!')
    deleteButton.style.visibility = "hidden";
  }
	deleteButton.addEventListener('click', function () {
		openConfirmationPopup();
		buttonConfirm.onclick = function (evt) {
			evt.preventDefault();
			onDelete(cardId).cardElement.remove();
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