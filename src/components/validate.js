const inputPlaceName = document.querySelector('.popup__input_place-name');

/*Сообщение ошибки*/
const showInputError = (input) => {
	input.classList.add('popup__input_error');
}

const hideInputError = (input) => {
	input.classList.remove('popup__input_error');
}

/*Проверка инпута названия новой карточки*/
function checkInputPlace(input) {
	input.value = input.value.replace(/[^A-Za-zА-Яа-яЁё\-\s]/g, '');
}

/*Сама функция валидации*/
export function enableValidation (targetForm, inputSelector) {
	inputSelector.forEach(element => {
		const errorSpan = targetForm.querySelector(`#${element.name}_error`);
		if (!element.validity.valid) {
			showInputError(element);
			errorSpan.textContent = element.validationMessage;
			if (checkInputPlace(inputPlaceName)) {
				showInputError(element);
				errorSpan.textContent = element.validationMessage;
			}
			if (element === inputPlaceName) {
				errorSpan.textContent = `${element.validationMessage} Текст должен быть не короче 2 симв. Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы`;
			}
		}
		else {
			hideInputError(element);
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