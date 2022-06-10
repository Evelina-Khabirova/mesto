import { CardItem } from './cardItem.js'
import { CardForm } from './cardForm.js'

const activePopup = document.querySelector('.popup_add-card');
const formCard = document.forms.card;
const saveButtonCard = formCard.elements.save_card;

export class CardList {

  constructor(container, formSelector, itemTemplate) {
    this._container = container;
    this._itemTemplate = itemTemplate;
    this._form = new CardForm(formSelector, this.addCard);
    this._form.init();
  }

  addCard = (input) => {
    const item = new CardItem(input, '.create-card');
    const domElement = item.generateCard();
    this._container.prepend(domElement);
    activePopup.classList.remove('popup__active');
    formCard.reset();
    saveButtonCard.setAttribute('disabled', true); 
    saveButtonCard.classList.add('popup__button_disabled');
  }
}