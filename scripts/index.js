const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
let profileFullname = document.querySelector('.profile__fullname');
let profileAboutMe = document.querySelector('.profile__about-me');
let fullname = popup.querySelector('.popup__input_type_fullname');
let aboutMe = popup.querySelector('.popup__input_type_about-me');
let formElement = popup.querySelector('.popup__form');

function openPopup() {
  popup.classList.add('popup__active');
  fullname.value = profileFullname.textContent;
  aboutMe.value = profileAboutMe.textContent;
}

function closePopup() {
  popup.classList.remove('popup__active');
}

function changeInformation(event) {
  profileFullname.textContent = fullname.value;
  profileAboutMe.textContent = aboutMe.value;
  event.preventDefault();
  closePopup();
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', changeInformation);