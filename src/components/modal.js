import { popupList } from './utils.js';
/*Не увидел, что код разлетается в GitHub... Prettier стоял, но я не знал, как он работает)). Теперь автоматом форматирование на сохранении. Так код выглядил у меня всегда))! Я как-то не досмотрел прошу прощения! :( У вас наверное глаза на лоб вылезали))))*/

//Закрытие по esc
function closeByEscape (evt) {
  if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_opened');
    closePopup (openedPopup);
  }
}
//Открывание/закрывание окон + слушатель
function openPopup (popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closeByEscape);
}
function closePopup (popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closeByEscape);
}
//Закрытие попапов по пустому полю и кнопке
function closePopupByOverlay() {
	popupList.forEach((popup) => {
  	popup.addEventListener('mousedown', (evt) => {
    	if (evt.target.classList.contains('popup_opened')) {
      	closePopup(popup)
    	}
    	if (evt.target.classList.contains('popup__close-button')) {
      	closePopup(popup)
    	}
  	});
	});
}

export { openPopup, closePopup, closePopupByOverlay }