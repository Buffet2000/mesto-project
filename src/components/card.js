import { openPopup, openConfirmationPopup, closePopup } from "./modal.js";
import { popupBigImage, cardTemplate, bigImageImage, bigImageDescription, cardContainer, initialCards, deleteButton, buttonConfirm, popupConfirm, likeButton, myId } from './utils.js';
import { deleteCard, putLike } from './api.js';

/*Добавление карточки*/
function addCard(container, element) {
	container.prepend(element);
}
//Проверка наличия лайка
const likedByMe = (likes, Id) => {
  for (const like of likes) {
		//console.log(like._id)
    if (like._id.includes(Id)) {
      return true;
    }
  }
  return false;
}

//Создание новой карточки (включая все кнопки и лайки)
function create(name, link, likesLength, likes, cardOwner, cardId) {
	const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
	const cardImage = cardElement.querySelector('.element__image');

	cardElement.querySelector('.element__like-counter').textContent = likesLength;
	cardElement.querySelector('.element__title').textContent = name;
  cardImage.src = link;
	cardImage.alt = name;

	if (likedByMe(likes, myId.id)) {
		cardElement.querySelector('#like-button').classList.add('element__like_active');

	}

	cardElement.querySelector('.element__like').addEventListener('mousedown', function (evt) {
		putLike(cardId);
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