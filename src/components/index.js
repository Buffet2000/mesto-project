import "/src/index.css";
import {
  getCards,
  getProfile,
  patchAvatar,
  patchProfile,
  postCard,
} from "./api.js";
import { addCard, create } from "./card.js";
import { enableValidation } from "./validate.js";
import Popup from "./Popup.js";
import {
  buttonProfileEdit,
  popupProfileEdit,
  profileForm,
  profileName,
  profileOccupation,
  saveProfile,
  createCard,
  buttonAddCard,
  placeForm,
  popupPlaceAdd,
  inputPlaceName,
  inputPlaceLink,
  inputProfileName,
  inputProfileOccupation,
  cardContainer,
  buttonEditAvatar,
  popupEditAvatar,
  saveAvatar,
  inputEditAvatar,
  avatarImage,
  myId,
  validationSettings,
  placeNameError,
  placeLinkError,
  popupList,
} from "./utils.js";

//Загрузить с сервера данные профиль/карточки
Promise.all([getCards(), getProfile()])
  .then(([initialCards, profileData]) => {
    updateProfile(
      profileData.name,
      profileData.about,
      profileData._id,
      profileData.avatar
    );
    initialCards.reverse().forEach((cardInfo) => {
      addCard(cardContainer,
        create(
          cardInfo.name,
          cardInfo.link,
          cardInfo.likes.length,
          cardInfo.likes,
          cardInfo.owner._id,
          cardInfo._id
        )
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
//Открытие формы профиля
function openProfileEditPopup() {
  new Popup(popupProfileEdit).open();
  inputProfileName.value = profileName.textContent;
  inputProfileOccupation.value = profileOccupation.textContent;
  saveProfile.classList.add("popup__submit-button_disabled");
  saveProfile.disabled = true;
}
//Открытие формы добавления фото
function openAddPhotoPopup() {
  new Popup(popupPlaceAdd).open();
  inputPlaceName.value = "";
  inputPlaceLink.value = "";
  createCard.classList.add("popup__submit-button_disabled");
  createCard.disabled = true;
  placeNameError.textContent = "";
  placeLinkError.textContent = "";
  inputPlaceName.classList.remove("popup__input_error");
  inputPlaceLink.classList.remove("popup__input_error");
}
//Открытие попапа для редактирования аватара
function openAvatarEditPopup() {
  new Popup(popupEditAvatar).open();
  saveAvatar.classList.add("popup__submit-button_disabled");
  saveAvatar.disabled = true;
  inputEditAvatar.value = "";
}
//Обновить профиль
function updateProfile(name, about, id, avatar) {
  myId.id = id;
  profileName.textContent = name;
  profileOccupation.textContent = about;
  avatarImage.src = avatar;
}
//Слушатель с добавлением карточки на страницу
placeForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  createCard.textContent = "Сохранение...";
  postCard(inputPlaceName.value, inputPlaceLink.value)
    .then((data) => {
      addCard(
        cardContainer,
        create(
          data.name,
          data.link,
          data.likes.length,
          data.likes,
          data.owner._id,
          data._id
        )
      );
      closePopup(popupPlaceAdd);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      createCard.textContent = "Создать";
    });
});
//Сохранить отредактированный профиль
profileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  saveProfile.textContent = "Сохранение...";
  patchProfile(inputProfileName.value, inputProfileOccupation.value)
    .then((data) => {
      updateProfile(data.name, data.about, data.id, data.avatar);
      closePopup(popupProfileEdit);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      saveProfile.textContent = "Сохранить";
    });
});
//Сохранить аватар
popupEditAvatar.addEventListener("submit", function (evt) {
  evt.preventDefault();
  saveAvatar.textContent = "Сохранение...";
  patchAvatar(inputEditAvatar.value)
    .then((data) => {
      updateProfile(data.name, data.about, data.id, data.avatar);
      closePopup(popupEditAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      saveAvatar.textContent = "Сохранить";
    });
});
//Слушатели для кнопок
buttonAddCard.addEventListener("click", openAddPhotoPopup);
buttonProfileEdit.addEventListener("click", openProfileEditPopup);
buttonEditAvatar.addEventListener("click", openAvatarEditPopup);
//Вызов валидации
enableValidation(validationSettings);
