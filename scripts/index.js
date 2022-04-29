const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];
const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const popupProfileCloseButton = popupProfile.querySelector('.popup_profile_close');
let profileFullname = document.querySelector('.profile__fullname');
let profileAboutMe = document.querySelector('.profile__about-me');
let fullname = popupProfile.querySelector('.popup__input_type_fullname');
let aboutMe = popupProfile.querySelector('.popup__input_type_about-me');
let profileFormElement = popupProfile.querySelector('.popup__form_profile');
const popupAddCardOpenButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddCardClose = popupAddCard.querySelector('.popup_add-card_close');
let cardName = popupAddCard.querySelector('.popup__input_type_card-name');
let cardLink = popupAddCard.querySelector('.popup__input_type_card-link');
let addCardFormElement = popupAddCard.querySelector('.popup__form_add-card');
const popupImage = document.querySelector('.popup_fullimage');
const popupImageCloseButton = popupImage.querySelector('.popup_fullimage_close');
const listContainer = document.querySelector('.cards');
const template = document.querySelector('.create-card');


function render() {
  const htmlListContainer = initialCards.map(getElement);
  listContainer.prepend(...htmlListContainer);
}

function removeCard(evt) {
  const element = evt.target.closest('.cards__item');
  element.remove();
}

function closePopupImage() {
  popupImage.classList.remove('popup__active');
}

function activeLike(evt) {
  const like = evt.target.closest('.cards__like-button');
  like.classList.add('cards__like-button-active');
}

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const title = getElementTemplate.querySelector('.cards__title');
  title.textContent = item.name;
  const image = getElementTemplate.querySelector('.cards__image');
  image.src = item.link;
  const removeButton = getElementTemplate.querySelector('.cards__trash');
  removeButton.addEventListener('click', removeCard);
  const popupImageOpenButton = getElementTemplate.querySelector('.cards__image');
  popupImageOpenButton.addEventListener('click', openPopupImage);
  popupImageCloseButton.addEventListener('click', closePopupImage);
  const likeButton = getElementTemplate.querySelector('.cards__like-button');
  likeButton.addEventListener('click', activeLike);
  return getElementTemplate;
}

render();

function openPopupProfile() {
  popupProfile.classList.add('popup__active');
  fullname.value = profileFullname.textContent;
  aboutMe.value = profileAboutMe.textContent;
}

function closePopupProfile() {
  popupProfile.classList.remove('popup__active');
}

function removeCard(evt) {
  const element = evt.target.closest('.cards__item');
  element.remove();
}

function openPopupImage(evt) {
  popupImage.classList.add('popup__active');
  const element = evt.target.closest('.cards__item');
  const link = element.querySelector('.cards__image');
  const imagePopup = document.querySelector('.popup__image');
  imagePopup.src = link.src;
  const text = element.querySelector('.cards__title');
  const popupText = document.querySelector('.popup__text');
  popupText.textContent = text.textContent;
}

function changeInformation(event) {
  profileFullname.textContent = fullname.value;
  profileAboutMe.textContent = aboutMe.value;
  event.preventDefault();
  closePopupProfile();
}

function openPopupAddCard() {
  popupAddCard.classList.add('popup__active');
}

function closePopupAddCard() {
  popupAddCard.classList.remove('popup__active');
}

function formReset() {
  cardName.value = '';
  cardLink.value = '';
}

function newCard(event) {
  const cardValue = [
    {
      name: cardName.value,
      link: cardLink.value
    }
  ];
  console.log(cardValue);
  const elemet = cardValue.map(getElement);
  listContainer.append(...elemet);
  event.preventDefault();
  closePopupAddCard();
  formReset();
}

popupProfileOpenButton.addEventListener('click', openPopupProfile);
popupProfileCloseButton.addEventListener('click', closePopupProfile);

profileFormElement.addEventListener('submit', changeInformation);

popupAddCardOpenButton.addEventListener('click', openPopupAddCard);
popupAddCardClose.addEventListener('click', closePopupAddCard);

addCardFormElement.addEventListener('submit', newCard);