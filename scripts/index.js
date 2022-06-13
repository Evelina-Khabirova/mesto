import { initialCards } from './cards.js'
import { Card } from './Card.js.js'
import { FormValidator } from './FormValidator.js'

const listContainer = document.querySelector('.cards');

const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const popupProfileCloseButton = popupProfile.querySelector('.popup__close_profile');
const profileFullname = document.querySelector('.profile__fullname');
const profileAboutMe = document.querySelector('.profile__about-me');
const popupAddCardOpenButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddCardClose = popupAddCard.querySelector('.popup__close_add-card');
const popups = document.querySelectorAll('.popup');
const formProfile = document.forms.profile;
const inputFullname = formProfile.elements.fullname;
const inputAboutMe = formProfile.elements.about_me;
const formCard = document.forms.card;
const inputCardName = formCard.elements.card_name;
const inputCardLink = formCard.elements.card_link;
const popupFullimage = document.querySelector('.popup_fullimage');
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');

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



function handleEscUp (evt) {
  if(evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup__active');
    closePopup(activePopup);
  }
}

export function openPopup(popup) {
  document.addEventListener('keyup', handleEscUp);
  popup.classList.add('popup__active');
}

function closePopup(popup) {
  document.removeEventListener('keyup', handleEscUp);
  popup.classList.remove('popup__active');
}

function openPopupProfile() {
  inputFullname.value = profileFullname.textContent;
  inputAboutMe.value = profileAboutMe.textContent;
  openPopup(popupProfile);
}

function changeInformation(event) {
  event.preventDefault();
  profileFullname.textContent = inputFullname.value;
  profileAboutMe.textContent = inputAboutMe.value;
  closePopup(popupProfile);
  formValidators['profile'].resetValidation();
}

popupProfileOpenButton.addEventListener('click', openPopupProfile);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup__active')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});

formProfile.addEventListener('submit', changeInformation);

function handleCardClick(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupText.textContent = name;
  openPopup(popupFullimage);
}

function createCard(item) {
  const card = new Card(item, '.create-card', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

initialCards.forEach((item) => {
  const cardElement = createCard(item);
  listContainer.prepend(cardElement);
});

function handleAddCardFormSubmit(event) {
  event.preventDefault();
  const input = {
    name: inputCardName.value,
    link: inputCardLink.value
  }
  const cardValue = createCard(input);
  listContainer.prepend(cardValue);
  event.preventDefault();
  closePopup(popupAddCard);
  formCard.reset();
  formValidators['card'].resetValidation();
}

formCard.addEventListener('submit', handleAddCardFormSubmit);
popupAddCardOpenButton.addEventListener('click', () => openPopup(popupAddCard));