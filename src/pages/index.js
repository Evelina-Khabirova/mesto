import './index.css'
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js' 
import { UserInfo } from '../components/UserInfo.js'
import { Api } from '../components/Api.js'

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

const apiCards = new Api('https://mesto.nomoreparties.co/v1/cohort-43/cards');
apiCards.getInitialCards()
  .then((initialCards) => {
    const cardSection = new Section({
      items: initialCards,
      renderer:(item) => {
        const cardElement = createCard(item);
        cardSection.setItem(cardElement);
      }
    }, listContainer);
    
    cardSection.addItem();
  })
  .catch((err) => {
    console.log(err);
  });

const apiEditProfile = new Api('https://mesto.nomoreparties.co/v1/cohort-43/users/me ');

const apiAddCard = new Api('https://mesto.nomoreparties.co/v1/cohort-43/cards ');

const profileInformation = new UserInfo('.profile__fullname', '.profile__about-me');

const changeInformation = new PopupWithForm('.popup_profile', 
    {submitButton: (inputValue) => {
      profileInformation.setUserInfo(inputValue['fullname'], inputValue['about_me']);
    }
});

changeInformation.setEventListeners();

function openPopupProfile() {
  const popupUser = profileInformation.getUserInfo();
  inputFullname.value = popupUser.fullname;
  inputAboutMe.value = popupUser.aboutMe
  changeInformation.open();
  formValidators['profile'].resetValidation();
}

popupProfileOpenButton.addEventListener('click', openPopupProfile);

const cardElement = new PopupWithImage('.popup_fullimage');

function handleCardClick(name, link) {
  cardElement.open(name, link);
  cardElement.setEventListeners();
}

function createCard(item) {
  const card = new Card(item, '.create-card', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const addCardFormSubmit = new PopupWithForm('.popup_add-card',
  {submitButton: (inputValue) => {
    apiAddCard.addCard(inputValue.name, inputValue.link)
      .then((res) => {
        const card = createCard(res);
        console.log(res);
        cardSection.setItem(card);
      })
      .catch((err) => console.log(err));
    formCard.reset();
  }
});

addCardFormSubmit.setEventListeners();

popupAddCardOpenButton.addEventListener('click', () => {
  addCardFormSubmit.open();
  formValidators['card'].resetValidation();
});