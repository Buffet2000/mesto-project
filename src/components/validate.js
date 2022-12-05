//Инпуты не прошедшие валидацию
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
//Показать ошибку инпута
const showInputError = (formElement, inputElement, validationMessage, validationSettings) => {
  const errorSpan = formElement.querySelector(`#${inputElement.name}_error`);
  inputElement.classList.add(validationSettings.inputErrorClass);
  errorSpan.textContent = validationMessage;
}
//Скрыть ошибку инпута
const hideInputError = (formElement, inputElement, validationSettings) => {
  const errorSpan = formElement.querySelector(`#${inputElement.name}_error`);
  inputElement.classList.remove(validationSettings.inputErrorClass);
  errorSpan.classList.remove(validationSettings.inputErrorActiveClass);
  errorSpan.textContent = "";
}
//Валидация пройдена
const isValid = (formElement, inputElement, validationSettings) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.error);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);
  } else {
    hideInputError(formElement, inputElement, validationSettings);
  }
}; 
//Включить/выключить кнопку Submit
const toggleButtonState = (inputList, submit, validationSettings) => {
  if (hasInvalidInput(inputList)) {
    submit.disabled = true;
    submit.classList.add(validationSettings.inactiveButtonClass);
  } else {
    submit.disabled = false;
    submit.classList.remove(validationSettings.inactiveButtonClass);
  }
}
//Сама функция валидации
const enableValidation = (validationSettings) => {
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));

  formList.forEach((inputSelector) => {
    setEventListeners(inputSelector, validationSettings);
  });
}
//Слушатели на input с ошибкой валидации
function setEventListeners(formElement, validationSettings) {
  const inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
  const submit = formElement.querySelector(validationSettings.submitButton);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, validationSettings);
      toggleButtonState(inputList, submit, validationSettings);
    });
  });
}

export { enableValidation }
/*export default class formValidator {
  constructor()
}*/