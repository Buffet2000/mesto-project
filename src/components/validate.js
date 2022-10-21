const inputPlaceName = document.querySelector('.popup__input_place-name');

/*Сообщение ошибки*/
const showInputError = (inputSelector) => {
	inputSelector.classList.add('popup__input_error');
}

const hideInputError = (inputSelector) => {
	inputSelector.classList.remove('popup__input_error');
}

/*Проверка инпута названия новой карточки*/
function checkInputPlace(inputSelector) {
	inputSelector.value = inputSelector.value.replace(/[^A-Za-zА-Яа-яЁё\-\s]/g, '');
}

/*Сама функция валидации*/
export function enableValidation (targetForm, targetFormElements) {
	targetFormElements.forEach((inputSelector) => {
		const errorSpan = document.querySelector(`#${inputSelector.name}_error`);
		if (!inputSelector.validity.valid) {
			showInputError(inputSelector);
			errorSpan.textContent = inputSelector.validationMessage;
			if (checkInputPlace(inputPlaceName)) {
				showInputError(inputSelector);
				errorSpan.textContent = inputSelector.validationMessage;
			}
			if (inputSelector === inputPlaceName) {
				errorSpan.textContent = `${inputSelector.validationMessage} Текст должен быть не короче 2 симв. Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы`;
			}
		}
		else {
			hideInputError(inputSelector);
		if (errorSpan) errorSpan.textContent = '';
		}
	});

	const submitButton = targetForm.parentElement.querySelector('button');
	if (targetForm.checkValidity()) {
		console.log('valid');
		submitButton.classList.remove('popup__submit-button_disabled')
		submitButton.disabled = false;
	} else {
		console.log('invlid');
		submitButton.classList.add('popup__submit-button_disabled')
		submitButton.disabled = true;
	}
}
