export class FormValidator {
  constructor(confing, formElement) {
    this._confing = confing;
    this._formElement = formElement;
    this._inputSelector = formElement.inputSelector;
    this._submitButtonSelector = formElement.submitButtonSelector;
    this._inactiveButtonClass = formElement.inactiveButtonClass;
    this._inputErrorClass = formElement.inputErrorClass;
    this._errorClass = formElement.errorClass;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._confing.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  };
  
  _hideInputError(inputElement) {
    const errorElement = this._confing.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError (inputElement, inputElement.validationMessage);
    }
    else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListeners () {
    const inputList = Array.from(this._confing.querySelectorAll(this._inputSelector));
    const buttonElement = this._confing.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }
  
  _addValisElement() {
    this._confing.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }

  enableValidation = () => {
    this._addValisElement();
    this._setEventListeners(); 
  }

  _hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput (inputList)) {
      buttonElement.setAttribute('disabled', true); 
      buttonElement.classList.add(this._inactiveButtonClass);
    }
    else {
      buttonElement.removeAttribute('disabled'); 
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }
}

export const formClass = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}