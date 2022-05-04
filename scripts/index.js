const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const popupProfileCloseButton = popupProfile.querySelector('.popup__close_profile');
const profileFullname = document.querySelector('.profile__fullname');
const profileAboutMe = document.querySelector('.profile__about-me');
const popupAddCardOpenButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddCardClose = popupAddCard.querySelector('.popup__close_add-card');
const popupImage = document.querySelector('.popup_fullimage');
const popupImageCloseButton = popupImage.querySelector('.popup__close_fullimage');
const listContainer = document.querySelector('.cards');
const template = document.querySelector('.create-card');
const popupActive = document.querySelector('.popup__active');

function render() {
  const htmlListContainer = initialCards.map(getElement);
  listContainer.prepend(...htmlListContainer);
}

render();

function removeCard(evt) {
  const element = evt.target.closest('.cards__item');
  console.log(element);
  element.remove();
}

function handleEscUp (evt) {
  evt.preventDefault();
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
  setSubmitButtonState(false);
}

function handleAddCardFormSubmit(event) {
  const cardValue = {
      name: inputCardName.value,
      link: inputCardLink.value
    };
  listContainer.prepend(getElement(cardValue));
  event.preventDefault();
  closePopup(popupAddCard);
  formCard.reset();
}

popupProfileOpenButton.addEventListener('click', openPopupProfile);
popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));
popupProfile.addEventListener('click', event => closePopup(event.target));

formProfile.addEventListener('submit', changeInformation);

popupAddCardOpenButton.addEventListener('click', () => openPopup(popupAddCard));
popupAddCardClose.addEventListener('click', () => closePopup(popupAddCard));
popupAddCard.addEventListener('click', event => closePopup(event.target));

formCard.addEventListener('submit', handleAddCardFormSubmit);

popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));
popupImage.addEventListener('click', event => closePopup(event.target));

