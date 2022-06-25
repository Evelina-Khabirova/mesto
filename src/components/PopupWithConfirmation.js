import Popup from './Popup.js'

export default class PopupWithConfirmation extends Popup {
  constructor(popup) {
    super(popup);
    this._form = this._popup.querySelector('.popup__form');
  }

  setDeleteCardInfo(deleteFunc) {
    this._deleteFunc = deleteFunc;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._deleteFunc();
    });
  }
}