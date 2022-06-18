import '../pages/index.css'
import { initialCards } from './cards.js'
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import { Section } from './Section.js'
import { PopupWithImage } from './PopupWithImage.js'
import { PopupWithForm } from './PopupWithForm.js' 
import { Popup } from './Popup.js'
import { UserInfo } from './UserInfo.js'

const listContainer = document.querySelector('.cards');

const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const profileFullname = document.querySelector('.profile__fullname');
const profileAboutMe = document.querySelector('.profile__about-me');
const popupAddCardOpenButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add-card');
const formProfile = document.forms.profile;
const inputFullname = formProfile.elements.fullname;
const inputAboutMe = formProfile.elements.about_me;
const popupFullimage = document.querySelector('.popup_fullimage');

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

const profileInformation = new UserInfo(profileFullname, profileAboutMe);

function openPopupProfile() {
  const popupUser = profileInformation.getUserInfo();
  inputFullname.value = popupUser.fullname;
  inputAboutMe.value = popupUser.aboutMe
  const openPopup = new Popup(popupProfile);
  openPopup.open();
}

popupProfileOpenButton.addEventListener('click', openPopupProfile);

const changeInformation = new PopupWithForm(popupProfile, 
  {submitButton: (inputValue) => {
    profileInformation.setUserInfo(inputValue['fullname'], inputValue['about_me']);
    formValidators['profile'].resetValidation();
  }
});

changeInformation.setEventListeners();

function handleCardClick(evt) {
  const openPopup = new PopupWithImage(popupFullimage);
  openPopup.open(evt);
}

function createCard(item) {
  const card = new Card(item, '.create-card', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const addInitialCards = new Section({
  items: initialCards,
  renderer:(items) => {
    items.forEach((item) => {
      const cardElement = createCard(item);
      addInitialCards.setItem(cardElement);
    });
  }
}, listContainer);

addInitialCards.addItem();

const handleAddCardFormSubmit = new PopupWithForm(popupAddCard,
  {submitButton: (inputValue) => {
    const newCard = new Section({
      items: inputValue,
      renderer:(item) => {
        const cardElement = createCard(item);
        newCard.setItem(cardElement);
      }
    }, listContainer);
    newCard.addItem();
  }
});

handleAddCardFormSubmit.setEventListeners();

popupAddCardOpenButton.addEventListener('click', () => {
  const openPopup = new Popup(popupAddCard);
  openPopup.open();
});