const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const saveButton = popup.querySelector('.popup__save');
let profileFullname = document.querySelector('.profile__fullname');
let profileAboutMe = document.querySelector('.profile__about-me');
let fullname = popup.querySelector('.popup__form_fullname');
let aboutMe = popup.querySelector('.popup__form_about-me');
let formElement = popup.querySelector('.form');

fullname.value = profileFullname.textContent;
aboutMe.value = profileAboutMe.textContent;

function openClosePopup() {
  popup.classList.toggle('popup__active');
}

function changeInformation() {
  profileFullname.textContent = fullname.value;
  profileAboutMe.textContent = aboutMe.value;
  openClosePopup();
}

popupOpenButton.addEventListener('click', openClosePopup);
popupCloseButton.addEventListener('click', openClosePopup);

formElement.addEventListener('submit', changeInformation);