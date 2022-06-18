export class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  _handleEscUp(evt) {
    if(evt.key === 'Escape') {
      const activePopup = document.querySelector('.popup__active');
      this.close(activePopup);
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup__active')) {
        this.close(this._popup);
      }
      if (evt.target.classList.contains('popup__close')) {
        this.close(this._popup);
      }
    });
  }

  open() {
    document.addEventListener('keyup',(evt) => this._handleEscUp(evt));
    this._popup.classList.add('popup__active');
    this.setEventListeners();
  }

  close() {
    document.removeEventListener('keyup', this._handleEscUp);
    this._popup.classList.remove('popup__active');
  }
}