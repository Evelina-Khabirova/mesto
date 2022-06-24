export class Card {
  constructor(data, cardSelector, handleCardClick, profileInfo, {handleLike}) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._template = document.querySelector(this._cardSelector); 
    this._handleCardClick = handleCardClick;
    this._profileInfo = profileInfo;
    this._handleLike = handleLike;
  }

  _removeCard() {
    this._element.remove();
  }
  
  _checkLikeId() {
    this._data.likes.forEach((el) => {
      if(el._id === this._profileInfo) {
        this._likeButton.classList.add('cards__like-button-active');
      }
    });
  }

  setLikeCounter(cardItem) {
    console.log(cardItem.likes.length);
    this._likeCounter.textContent = cardItem.likes.length;
    this._likeButton.classList.add('cards__like-button-active');
  }
  /*
  removeLike(cardItem) {
    this._likeButton.classList.remove('cards__like-button-active');
  }
  */
  _handleLikeCard() {
    if(!this._likeButton.classList.contains('cards__like-button-active')) {
      this._handleLike(this._element);
    }
    else {
      console.log('remove');
    }
    //this._likeButton.classList.toggle('cards__like-button-active');
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
    this._likeCounter = this._element.querySelector('.cards__like-counter');
    this._setEventListeners();
    this._checkLikeId();
    return this._element;
  }

}
