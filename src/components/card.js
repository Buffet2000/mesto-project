import { openPopup } from "./modal.js";
import { popupBigImage, cardTemplate, bigImageImage, bigImageDescription, cardContainer, initialCards } from './utils.js';

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
function create(name, link) {
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
		openPopup (popupBigImage);
		bigImageImage.src = link;
		bigImageImage.alt = name;
		bigImageDescription.textContent = name;
	});
	return cardElement;
}

export { addCard, create, readyCards }