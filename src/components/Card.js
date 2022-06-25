export default class Card {
  constructor(data, cardSelector, handleCardClick, profileID, {handleLike}, {removeLike}, {removeCard}) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._template = document.querySelector(this._cardSelector); 
    this._profileID = profileID;
    this._handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this._removeLike = removeLike;
    this._removeCard = removeCard;
  }

  removeCardImage() {
    this._element.remove();
    this._element = null;
  }
  
  _checkLikeId() {
    this._likeCounter.textContent = this._data.likes.length;
    this._data.likes.forEach((elem) => {
      if(elem._id === this._profileID) {
        this._likeButton.classList.add('cards__like-button-active');
      }
    });
  }

  setLikeCounter(cardItem) {
    this._likeCounter.textContent = cardItem.likes.length;
    this._likeButton.classList.add('cards__like-button-active');
  }
  
  removeLikeCounter(cardItem) {
    this._likeCounter.textContent = cardItem.likes.length;
    this._likeButton.classList.remove('cards__like-button-active');
  }
  
  _toggleLikeCard() {
    if(!this._likeButton.classList.contains('cards__like-button-active')) {
      this._handleLike();
    }
    else {
      this._removeLike();
    }
  }

  _removeTrashButton() {
    this._trashButton.remove(); 
  }

  _getElement() {
    const cardElement = this._template.content.querySelector('.cards__item').cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    if (this._data.owner._id !== this._profileID) {
      this._removeTrashButton();
    }
    this._trashButton.addEventListener('click', () => {this._removeCard()});
    this._likeButton.addEventListener('click', () => {this._toggleLikeCard()});
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
