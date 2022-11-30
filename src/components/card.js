import Popup from "./Popup.js";
import {
  popupBigImage,
  cardTemplate,
  bigImageImage,
  bigImageDescription,
  popupConfirm,
  buttonConfirm,
  myId,
} from "./utils.js";
import { deleteCard, putLike, deleteLike } from "./api.js";

//Добавление карточки
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
};
//Открытие окна подтверждения
function openConfirmationPopup() {
  openPopup(popupConfirm);
}
//Создание новой карточки (включая все кнопки и лайки)
function create(name, link, likesLength, likes, cardOwner, cardId) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");
  const likeCounter = cardElement.querySelector(".element__like-counter");
  const likeButton = cardElement.querySelector("#like-button");
  likeCounter.textContent = likesLength;
  cardElement.querySelector(".element__title").textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  //мой лайк
  if (likedByMe(likes, myId.id)) {
    likeButton.classList.add("element__like_active");
  }
  //лайки
  likeButton.addEventListener("mousedown", function (evt) {
    if (likedByMe(likes, myId.id)) {
      deleteLike(cardId)
        .then((res) => {
          likeCounter.textContent = res.likes.length;
          evt.target.classList.toggle("element__like_active");
          likes = res.likes;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      putLike(cardId)
        .then((res) => {
          likeCounter.textContent = res.likes.length;
          evt.target.classList.toggle("element__like_active");
          likes = res.likes;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  const deleteButton = cardElement.querySelector("#delete-button");
  deleteButton.addEventListener("click", function () {
    openConfirmationPopup();
    deletedCardId = cardId;
    deletedCardElement = cardElement;
  });

  if (myId.id != cardOwner) {
    deleteButton.classList.remove("element__delete_active");
  }
  cardImage.addEventListener("mousedown", function () {
    new Popup(popupBigImage).open();
    bigImageImage.src = link;
    bigImageImage.alt = name;
    bigImageDescription.textContent = name;
  });
  return cardElement;
}

let deletedCardId;
let deletedCardElement;

buttonConfirm.addEventListener("click", function (evt) {
  evt.preventDefault();
  deleteCard(deletedCardId)
    .then(() => {
      deletedCardElement.remove();
      closePopup(popupConfirm);
    })
    .catch((err) => {
      console.log(err);
    });
});

export { addCard, create };