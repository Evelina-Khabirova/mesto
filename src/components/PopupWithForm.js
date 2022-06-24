import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popup, {submitButton}) {
    super(popup);
    this._submitButton = submitButton;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._inputValue = {};
    this._inputList.forEach(input => {
      this._inputValue[input.name] = input.value;
    });
    return this._inputValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  changeText() {
    this._submitButton.textContent = 'Сохранение...';
  }

  addTextButton(textButton) {
    this._submitButton.textContent = textButton;
  }
}