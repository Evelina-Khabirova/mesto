const popupElement = document.querySelector('.popup_fullimage');
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const popupImageCloseButton = document.querySelector('.popup__close_fullimage');

export class CardItem {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _removeCard() {
    this._element.remove();
  }
  
  _handleLikeCard() {
    this._like.classList.toggle('cards__like-button-active');
  }

  _getElement() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.cards__item').cloneNode(true);
    return cardElement;
  }

  _handleOpenPopup() {
    popupImage.src = this._link;
    popupText.textContent = this._name;
    popupElement.classList.add('popup__active');
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupElement.classList.remove('popup__active');
  }

  generateCard() {
    this._element = this._getElement();
    const image = this._element.querySelector('.cards__image');
    image.src = this._link;
    image.alt = this._name;
    this._element.querySelector('.cards__title').textContent = this._name;
    image.addEventListener('click', () => {this._handleOpenPopup()});
    popupImageCloseButton.addEventListener('click', () => {this._handleClosePopup()});
    const trash = this._element.querySelector('.cards__trash');
    trash.addEventListener('click', () => {this._removeCard()});
    this._like = this._element.querySelector('.cards__like-button');
    this._like.addEventListener('click', () => {this._handleLikeCard()});
    return this._element;
  }

}
