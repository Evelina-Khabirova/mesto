import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupText = this._popup.querySelector('.popup__text');
  }

  open(evt) {
    this._popupImage.src = evt.src;
    this._popupImage.alt = evt.alt;
    this._popupText.textContent = evt.alt;
    super.open();
  }
}