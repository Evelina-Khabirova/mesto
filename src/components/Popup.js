export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
  }

  _handleEscUp(evt) {
    if(evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup__active')) {
        this.close();
      }
      if (evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }

  open() {
    document.addEventListener('keyup', this._handleEscUp);
    this._popup.classList.add('popup__active');
  }

  close() {
    document.removeEventListener('keyup', this._handleEscUp);
    this._popup.classList.remove('popup__active');
  }
}