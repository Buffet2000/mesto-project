import { openPopup, openConfirmationPopup, closePopup } from "./modal.js";
import { popupBigImage, cardTemplate, bigImageImage, bigImageDescription, buttonConfirm, popupConfirm, myId } from './utils.js';
import { deleteCard, putLike, deleteLike } from './api.js';

/*Добавление карточки*/
function addCard(container, element) {
	container.prepend(element);
}
//Проверка наличия лайка
const likedByMe = (likes, Id) => {
  for (const like of likes) {
    if (like._id === Id) {
      return true;
    }
  }
}

//Создание новой карточки (включая все кнопки и лайки)
function create(name, link, likesLength, likes, cardOwner, cardId) {
	const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
	const cardImage = cardElement.querySelector('.element__image');
	const likeCounter = cardElement.querySelector('.element__like-counter');
	const likeButton = cardElement.querySelector('#like-button');
	likeCounter.textContent = likesLength;
	
	cardElement.querySelector('.element__title').textContent = name;
  cardImage.src = link;
	cardImage.alt = name;

	if (likedByMe(likes, myId.id)) {
		likeButton.classList.add('element__like_active');
	}

	likeButton.addEventListener('mousedown', function (evt) {
		if (likedByMe(likes, myId.id)) {
			console.log('deleteLike')
			deleteLike(cardId)
				.then((res) => {
					console.log(res.likes.length)
					likeCounter.textContent = res.likes.length;
					evt.target.classList.toggle('element__like_active');
					likes = res.likes;
				});
		} else {
			console.log('putLike')
			putLike(cardId)
				.then((res) => {
					likeCounter.textContent = res.likes.length;
					evt.target.classList.toggle('element__like_active');
					likes = res.likes;
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