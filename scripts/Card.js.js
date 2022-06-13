export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._template = document.querySelector(this._cardSelector); 
    this._handleCardClick = handleCardClick;
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

  _setEventListeners() {
    this._trashButton.addEventListener('click', () => {this._removeCard()});
    this._likeButton.addEventListener('click', () => {this._handleLikeCard()});
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
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
