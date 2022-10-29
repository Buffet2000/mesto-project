import { openPopup, openConfirmationPopup, closePopup } from "./modal.js";
import { popupBigImage, cardTemplate, bigImageImage, bigImageDescription, cardContainer, initialCards, deleteButton, buttonConfirm, popupConfirm } from './utils.js';

/*Создание готовых карточек "из коробки"*/
function readyCards () {
		initialCards.forEach((elem) => {
		addCard(cardContainer, create(elem.name, elem.link))
	});
}
/*Добавление карточки*/
function addCard(container, element) {
	container.prepend(element);
}
/*Создание новой карточки (включая все кнопки и лайки)*/
function create(name, link, likes) {
	const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
	const cardImage = cardElement.querySelector('.element__image');

	cardElement.querySelector('.element__like-counter').textContent = likes;

	cardElement.querySelector('.element__title').textContent = name;
  cardImage.src = link;
	cardImage.alt = name;

	cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
		evt.target.classList.toggle('element__like_active');
	});
	const deleteButton = cardElement.querySelector('.element__delete');
	deleteButton.addEventListener('click', function () {
		openConfirmationPopup();
		buttonConfirm.onclick = function (evt) {
			evt.preventDefault();
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

export { addCard, create, readyCards }