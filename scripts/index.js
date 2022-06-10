import { initialCards } from './cards.js'
import { CardItem } from './cardItem.js'
import { CardList } from './cardList.js';
import { formClass, FormValidator } from './validate.js'

const listContainer = document.querySelector('.cards');
const createCard = document.querySelector('#create-card-template').content;

const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const popupProfileCloseButton = popupProfile.querySelector('.popup__close_profile');
const profileFullname = document.querySelector('.profile__fullname');
const profileAboutMe = document.querySelector('.profile__about-me');
const popupAddCardOpenButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddCardClose = popupAddCard.querySelector('.popup__close_add-card');

const formProfile = document.forms.profile;
const inputFullname = formProfile.elements.fullname;
const inputAboutMe = formProfile.elements.about_me;
const saveButtonProfile = formProfile.elements.save_profile;

function handleEscUp (evt) {
  if(evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup__active');
    closePopup(activePopup);
  }
}

function openPopup(popup) {
  document.addEventListener('keyup', handleEscUp);
  popup.classList.add('popup__active');
}

function closePopup(popup) {
  document.removeEventListener('keyup', handleEscUp);
  popup.classList.remove('popup__active');
}

function openPopupProfile() {
  const valid = new FormValidator(formProfile, formClass);
  valid.enableValidation();
  inputFullname.value = profileFullname.textContent;
  inputAboutMe.value = profileAboutMe.textContent;
  openPopup(popupProfile);
}

function changeInformation(event) {
  event.preventDefault();
  profileFullname.textContent = inputFullname.value;
  profileAboutMe.textContent = inputAboutMe.value;
  closePopup(popupProfile);
}

popupProfileOpenButton.addEventListener('click', openPopupProfile);
popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));
popupProfile.addEventListener('click', event => closePopup(event.target));

formProfile.addEventListener('submit', changeInformation);

popupAddCardOpenButton.addEventListener('click', () => openPopup(popupAddCard));
popupAddCardClose.addEventListener('click', () => closePopup(popupAddCard));
popupAddCard.addEventListener('click', event => closePopup(event.target));

initialCards.forEach((item) => {
  const card = new CardItem(item, '.create-card');
  const cardElement = card.generateCard();
  listContainer.prepend(cardElement);
});

const cardList = new CardList (
  listContainer,
  '.popup__form_add-card',
  createCard
);