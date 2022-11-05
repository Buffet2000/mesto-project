import { openPopup, openConfirmationPopup, closePopup } from "./modal.js";
import { popupBigImage, cardTemplate, bigImageImage, bigImageDescription, cardContainer, initialCards, deleteButton, buttonConfirm, popupConfirm, myId } from './utils.js';
import { deleteCard, putLike, deleteLike, getCards } from './api.js';

/*Добавление карточки*/
function addCard(container, element) {
	container.prepend(element);
}
//Проверка наличия лайка
const likedByMe = (likes, Id) => {
  for (const like of likes) {
		like._id.includes(Id)
  }
}

//Создание новой карточки (включая все кнопки и лайки)
function create(name, link, likesLength, likes, cardOwner, cardId) {
	const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
	const cardImage = cardElement.querySelector('.element__image');
	const likeCounter = cardElement.querySelector('.element__like-counter').textContent = likesLength;
	
	cardElement.querySelector('.element__title').textContent = name;
  cardImage.src = link;
	cardImage.alt = name;

	if (likedByMe(likes, myId.id)) {
		cardElement.querySelector('#like-button').classList.add('element__like_active');
	}

	cardElement.querySelector('.element__like').addEventListener('mousedown', function () {
		cardElement.querySelector('#like-button').classList.toggle('element__like_active');
		console.log('putLike')
		putLike(cardId)
			.then((res) => {
				cardElement.querySelector('.element__like-counter').textContent = res.likes.length;
			});
		if (likedByMe(likes, myId.id)) {
			console.log('deleteLike')
			deleteLike(cardId)
				.then((res) => {
					cardElement.querySelector('.element__like-counter').textContent = res.likes.length;
				});
		}
	});
	
	const deleteButton = cardElement.querySelector('#delete-button');
	
	if (myId.id != cardOwner) {
    deleteButton.classList.remove('element__delete_active');
  }
	deleteButton.addEventListener('mousedown', function () {
		openConfirmationPopup();
		buttonConfirm.onclick = function (evt) {
			evt.preventDefault();
			deleteCard(cardId);
			cardElement.remove();
			closePopup(popupConfirm);
		}
	});
	cardImage.addEventListener('mousedown', function () {
		openPopup (popupBigImage);
		bigImageImage.src = link;
		bigImageImage.alt = name;
		bigImageDescription.textContent = name;
	});
	return cardElement;
}

export { addCard, create }