import { formClass, FormValidator } from './validate.js'

const formCard = document.forms.card;

export class CardForm {
  constructor (confing, formElement) {
    this._formElement = formElement;
    this._confing = confing;
    this._container = document.querySelector(confing);  
  }

  _submitHandler = (e) => {
    e.preventDefault();
    const input = {
      name: this._container.querySelector('.popup__input_type_card-name').value,
      link: this._container.querySelector('.popup__input_type_card-link').value
    }
    this._formElement(input);
  }

  init = () => {
    this._valid = new FormValidator(formCard, formClass);
    this._valid.enableValidation();
    this._container.addEventListener('submit', this._submitHandler);
  };
}