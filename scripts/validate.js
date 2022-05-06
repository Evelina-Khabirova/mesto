const showInputError = (formElement, inputElement, errorMessage, rest) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(rest.inputErrorClass);
  errorElement.classList.add(rest.errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, rest) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(rest.inputErrorClass);
  errorElement.classList.remove(rest.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, rest) => {
  if (!inputElement.validity.valid) {
    showInputError (formElement, inputElement, inputElement.validationMessage, rest);
  }
  else {
    hideInputError(formElement, inputElement, rest);
  }
};

const setEventListeners = (formElement, rest) => {
  const inputList = Array.from(formElement.querySelectorAll(rest.inputSelector));
  const buttonElement = formElement.querySelector(rest.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, rest);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity (formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement, rest);
    });
  });
};

const enableValidation = ({formSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, rest);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState (inputList, buttonElement, rest) {
  if (hasInvalidInput (inputList)) {
    buttonElement.setAttribute('disabled', true); 
    buttonElement.classList.add(rest.inactiveButtonClass);
  }
  else {
    buttonElement.removeAttribute('disabled'); 
    buttonElement.classList.remove(rest.inactiveButtonClass);
  }
}