let popupOpenButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close');
let saveButton = popup.querySelector('.popup__save');
let profileFullname = document.querySelector('.profile__fullname');
let profileAboutMe = document.querySelector('.profile__about-me');

function openClosePopup() {
  popup.classList.toggle('popup__active');
}

function onOverlayClick(event) {
  if (event.target === event.currentTarget) {
    openClosePopup();
  }
}

function changeInformation() {
  let fullname = popup.querySelector('.popup__fullname');
  let aboutMe = popup.querySelector('.popup__about-me');
  profileFullname.innerHTML = `
    <p class="profile__fullname">${fullname.value}</p>
  `;
  profileAboutMe.innerHTML = `
    <p class="profile__about-me">${aboutMe.value}</p>
  `;
  openClosePopup();
}

popupOpenButton.addEventListener('click', openClosePopup);
popupCloseButton.addEventListener('click', openClosePopup);
popup.addEventListener('click', onOverlayClick);

saveButton.addEventListener('click', changeInformation);