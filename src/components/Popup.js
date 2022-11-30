export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
    //Закрыть по Escape
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  //Закрыть на overlay
  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      this.close();
    }
  }
  //Закрыть по крестику
  _handleXClose = (evt) => {
    if (evt.target.classList.contains("popup__close-button")) {
      this.close();
    }
  }
  //Открыть попап
  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("click", this._handleOverlayClose);
    document.addEventListener("click", this._handleXClose);
  }
  //Закрыть попап
  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("click", this._handleOverlayClose);
    document.removeEventListener("click", this._handleXClose);
  }
}