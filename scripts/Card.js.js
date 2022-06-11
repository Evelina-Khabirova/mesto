export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._popupElement = document.querySelector('.popup_fullimage');
    this._popupImage = document.querySelector('.popup__image');
    this._popupText = document.querySelector('.popup__text');
    this._popupImageCloseButton = document.querySelector('.popup__close_fullimage');
    this._template = document.querySelector(this._cardSelector); 
  }

  _removeCard() {
    this._element.remove();
  }
  
  _handleLikeCard() {
    this._likeButton.classList.toggle('cards__like-button-active');
  }

  _getElement() {
    const cardElement = this._template.content.querySelector('.cards__item').cloneNode(true);
    return cardElement;
  }

  _handleEscUp(evt) {
    if(evt.key === 'Escape') {
      const activePopup = document.querySelector('.popup__active');
      this._handleClosePopup(activePopup);
    }
  }

  _handleOpenPopup() {
    document.addEventListener('keyup', (evt) => {this._handleEscUp(evt)});
    this._popupImage.src = this._link;
    this._popupText.textContent = this._name;
    this._popupElement.classList.add('popup__active');
  }

  _handleClosePopup() {
    document.removeEventListener('keyup', this._handleEscUp);
    this._popupImage.src = '';
    this._popupText.textContent = '';
    this._popupElement.classList.remove('popup__active');
  }

  _setEventListeners() {
    this._trashButton.addEventListener('click', () => {this._removeCard()});
    this._likeButton.addEventListener('click', () => {this._handleLikeCard()});
    this._image.addEventListener('click', () => {this._handleOpenPopup()});
    this._popupImageCloseButton.addEventListener('click', () => {this._handleClosePopup()});
  }

  generateCard() {
    this._element = this._getElement();
    this._image = this._element.querySelector('.cards__image');
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title = this._element.querySelector('.cards__title');
    this._title.textContent = this._name;
    this._trashButton = this._element.querySelector('.cards__trash');
    this._likeButton = this._element.querySelector('.cards__like-button');
    this._setEventListeners();
    return this._element;
  }

}
