import { initialCards } from './cards.js'
import { Card } from './Card.js.js'
import { formClass, FormValidator } from './FormValidator.js'

const listContainer = document.querySelector('.cards');

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
const formCard = document.forms.card;
const inputCardName = formCard.elements.card_name;
const inputCardLink = formCard.elements.card_link;
const saveButtonCard = formCard.elements.save_card;
const popupImage = document.querySelector('.popup_fullimage');

function handleEscUp (evt) {
  evt.preventDefault();
  if(evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup__active');
    if (activePopup === null) {
      return 0;
    }
    else {
      closePopup(activePopup);
    }
  }
}

document.addEventListener('keyup', handleEscUp);

function openPopup(popup) {
  popup.classList.add('popup__active');
}

function closePopup(popup) {
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
}

const validProfile = new FormValidator(formProfile, formClass);
validProfile.enableValidation();
const validCard = new FormValidator(formCard, formClass);
validCard.enableValidation();

popupProfileOpenButton.addEventListener('click', openPopupProfile);
popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));
popupProfile.addEventListener('click', event => closePopup(event.target));

formProfile.addEventListener('submit', changeInformation);

initialCards.forEach((item) => {
  const card = new Card(item, '.create-card');
  const cardElement = card.generateCard();
  listContainer.prepend(cardElement);
});

function handleAddCardFormSubmit(event) {
  event.preventDefault();
  const input = {
    name: inputCardName.value,
    link: inputCardLink.value
  }
  const card = new Card(input, '.create-card');
  const cardValue = card.generateCard();
  listContainer.prepend(cardValue);
  event.preventDefault();
  closePopup(popupAddCard);
  formCard.reset();
  saveButtonCard.classList.add('popup__save_disabled');
  saveButtonCard.classList.add('popup__button_disabled');
}

formCard.addEventListener('submit', handleAddCardFormSubmit);
popupAddCardOpenButton.addEventListener('click', () => openPopup(popupAddCard));
popupAddCardClose.addEventListener('click', () => closePopup(popupAddCard));
popupAddCard.addEventListener('click', event => closePopup(event.target));
popupImage.addEventListener('click', event => closePopup(event.target));
