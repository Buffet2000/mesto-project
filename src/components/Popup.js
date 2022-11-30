import { popupList } from "./utils.js";

//Закрытие по esc
/*function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}
//Открывание/закрывание окон + слушатель
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}
//Закрытие попапов по пустому полю и кнопке
function closePopupByOverlay() {
  popupList.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        closePopup(popup);
      }
      if (evt.target.classList.contains("popup__close-button")) {
        closePopup(popup);
      }
    });
  });
}*/

//export { openPopup, closePopup, closePopupByOverlay };
export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
  openPopup(selector) {
    selector.classList.add("popup_opened");
  }
  closePopup(selector) {
    selector.classList.remove("popup_opened");
  }
  setEventListeners() {
    popupList.forEach((popup) => {
      popup.addEventListener("mousedown", (evt) => {
        if (evt.target.classList.contains("popup_opened")) {
          this.closePopup(popup);
        }
        if (evt.target.classList.contains("popup__close-button")) {
          this.closePopup(popup);
        }
      });
    });
    document.addEventListener("keydown", (evt) => {
      this.closeByEscape(evt)
    });
  }
  closeByEscape(evt) {
    const openedPopup = document.querySelector(".popup_opened");
    if (evt.key === "Escape") {
      this.closePopup(openedPopup)
    }
  }
}