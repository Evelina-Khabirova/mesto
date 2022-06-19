import './index.css'
import { initialCards } from '../cards.js'
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js' 
import { UserInfo } from '../components/UserInfo.js'

const listContainer = document.querySelector('.cards');

const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupAddCardOpenButton = document.querySelector('.profile__add-button');
const formProfile = document.forms.profile;
const inputFullname = formProfile.elements.fullname;
const inputAboutMe = formProfile.elements.about_me;
const formCard = document.forms.card;

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
}
enableValidation(config);

const profileInformation = new UserInfo('.profile__fullname', '.profile__about-me');

function openPopupProfile() {
  const popupUser = profileInformation.getUserInfo();
  inputFullname.value = popupUser.fullname;
  inputAboutMe.value = popupUser.aboutMe
  const changeInformation = new PopupWithForm('.popup_profile', 
    {submitButton: (inputValue) => {
      profileInformation.setUserInfo(inputValue['fullname'], inputValue['about_me']);
    }
  });
  changeInformation.open();
  formValidators['profile'].resetValidation();
  changeInformation.setEventListeners();
}

popupProfileOpenButton.addEventListener('click', openPopupProfile);

function handleCardClick(name, link) {
  const cardElement = new PopupWithImage('.popup_fullimage');
  cardElement.open(name, link);
  cardElement.setEventListeners();
}

function createCard(item) {
  const card = new Card(item, '.create-card', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const addInitialCards = new Section({
  items: initialCards,
  renderer:(item) => {
    const cardElement = createCard(item);
    addInitialCards.setItem(cardElement);
  }
}, listContainer);

addInitialCards.addItem();

const handleAddCardFormSubmit = new PopupWithForm('.popup_add-card',
  {submitButton: (inputValue) => {
    const newCard = new Section({
      items: [inputValue],
      renderer:(item) => {
        const cardElement = createCard(item);
        newCard.setItem(cardElement);
      }
    }, listContainer);
    newCard.addItem();
    formCard.reset();
  }
});

handleAddCardFormSubmit.setEventListeners();

popupAddCardOpenButton.addEventListener('click', () => {
  handleAddCardFormSubmit.open();
  formValidators['card'].resetValidation();
});