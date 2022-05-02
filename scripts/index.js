const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const popupProfileCloseButton = popupProfile.querySelector('.popup__close_profile');
const profileFullname = document.querySelector('.profile__fullname');
const profileAboutMe = document.querySelector('.profile__about-me');
const fullname = popupProfile.querySelector('.popup__input_type_fullname');
const aboutMe = popupProfile.querySelector('.popup__input_type_about-me');
const profileFormElement = popupProfile.querySelector('.popup__form_profile');
const popupAddCardOpenButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddCardClose = popupAddCard.querySelector('.popup__close_add-card');
const cardName = popupAddCard.querySelector('.popup__input_type_card-name');
const cardLink = popupAddCard.querySelector('.popup__input_type_card-link');
const addCardFormElement = popupAddCard.querySelector('.popup__form_add-card');
const popupImage = document.querySelector('.popup_fullimage');
const popupImageCloseButton = popupImage.querySelector('.popup__close_fullimage');
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

function openPopup(popup) {
  popup.classList.add('popup__active');
}

function closePopup(popup) {
  popup.classList.remove('popup__active');
}

function activeLike(evt) {
  const like = evt.target;
  like.classList.toggle('cards__like-button-active');
}

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const title = getElementTemplate.querySelector('.cards__title');
  title.textContent = item.name;
  const image = getElementTemplate.querySelector('.cards__image');
  image.src = item.link;
  image.alt = item.name;
  const removeButton = getElementTemplate.querySelector('.cards__trash');
  removeButton.addEventListener('click', removeCard);
  const popupImageOpenButton = getElementTemplate.querySelector('.cards__image');
  popupImageOpenButton.addEventListener('click', openPopupImage);
  const likeButton = getElementTemplate.querySelector('.cards__like-button');
  likeButton.addEventListener('click', activeLike);
  return getElementTemplate;
}

render();

function openPopupImage(evt) {
  openPopup(popupImage);
  const link = evt.target.src;
  const imagePopup = document.querySelector('.popup__image');
  imagePopup.src = link;
  const text = evt.target.alt;
  const popupText = document.querySelector('.popup__text');
  popupText.textContent = text;
  imagePopup.alt = text;
}

function changeInformation(event) {
  profileFullname.textContent = fullname.value;
  profileAboutMe.textContent = aboutMe.value;
  event.preventDefault();
  closePopup(popupProfile);
}

function handleAddCardFormSubmit(event) {
  const cardValue = {
      name: cardName.value,
      link: cardLink.value
    };
  listContainer.prepend(getElement(cardValue));
  event.preventDefault();
  closePopup(popupAddCard);
  addCardFormElement.reset();
}


popupProfileOpenButton.addEventListener('click', () => openPopup(popupProfile));
popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));

profileFormElement.addEventListener('submit', changeInformation);

popupAddCardOpenButton.addEventListener('click', () => openPopup(popupAddCard));
popupAddCardClose.addEventListener('click', () => closePopup(popupAddCard));

addCardFormElement.addEventListener('submit', handleAddCardFormSubmit);

popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));