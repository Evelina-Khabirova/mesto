import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js' 
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'

const listContainer = document.querySelector('.cards');

const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupAddCardOpenButton = document.querySelector('.profile__add-button');
const popupChangeAvatarOpenButton = document.querySelector('.profile__avatar');
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

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-43');

const profileInformation = new UserInfo('.profile__fullname', '.profile__about-me', '.profile__avatar');

api.identificationProfile()
.then((res) => {
  profileInformation.getUserInfoServer(res);
})
.catch((err) => console.log(err));

const changeInformation = new PopupWithForm('.popup_profile', 
    {submitButton: (inputValue) => {
      changeInformation.changeTextButton();
      api.editProfile(inputValue['fullname'], inputValue['about_me'])
      .then((res) => {
        profileInformation.setUserInfo(res.name, res.about);
        changeInformation.close();
      })
      .catch((err) => console.log(err))
    }
});

changeInformation.setEventListeners();

function openPopupProfile() {
  const popupUser = profileInformation.getUserInfo();
  inputFullname.value = popupUser.fullname;
  inputAboutMe.value = popupUser.aboutMe;
  changeInformation.open();
  formValidators['profile'].resetValidation();
}

popupProfileOpenButton.addEventListener('click', openPopupProfile);

const changeAvatar = new PopupWithForm('.popup_avatar', {
  submitButton: (inputValue) => {
    api.editAvatar(inputValue['linkAvatar'])
    .then((res) => {
      changeAvatar.changeTextButton();
      profileInformation.setUserAvatar(res);
      changeAvatar.close();
    })
    .catch((err) => console.log(err))
  }
});

changeAvatar.setEventListeners();

function openPopupAvatar() {
  changeAvatar.open();
  formValidators['avatar'].resetValidation();
}

popupChangeAvatarOpenButton.addEventListener('click', openPopupAvatar);

const cardSection = new Section({
  renderer:(item) => {
    const userId = profileInformation.checkUserId();
    const cardElement = createCard(item, userId);
    cardSection.setItem(cardElement);
  }
}, listContainer);

api.getInitialCards()
.then((res) => {
  cardSection.addItem(res);
})
.catch((err) => console.log(err));

const cardElement = new PopupWithImage('.popup_fullimage');

function handleCardClick(name, link) {
  cardElement.open(name, link);
  cardElement.setEventListeners();
}

const popupDelete = new PopupWithConfirmation('.popup_delete-card');

popupDelete.setEventListeners();

function createCard(item, userId) {
  const card = new Card(item, '.create-card', handleCardClick, userId, {
    handleLike: () => {
      api.addLike(item._id)
      .then((res) => {
        card.setLikeCounter(res);
      })
      .catch((err) => console.log(err));
    }}, {
    removeLike: () => {
      api.deleteLike(item._id)
      .then((res) => {
        card.removeLikeCounter(res);
      })
      .catch((err) => console.log(err));
    }}, {
      removeCard: () => {
        popupDelete.open();
        popupDelete.setDeleteCardInfo(() => {
          api.deleteCard(item._id)
          .then(() => {
            popupDelete.close();
            card.removeCardImage();
          })
          .catch((err) => console.log(err));
        });
      }
    });
  const cardElement = card.generateCard();
  return cardElement;
}

const addCardFormSubmit = new PopupWithForm('.popup_add-card',
  {submitButton: (inputValue) => {
    api.addCard(inputValue.name, inputValue.link)
      .then((res) => {
        addCardFormSubmit.changeTextButton();
        const userId = profileInformation.checkUserId();
        const cardElement = createCard(res, userId);
        cardSection.setItem(cardElement)})
      .catch((err) => console.log(err));
    formCard.reset();
  }
});

addCardFormSubmit.setEventListeners();

popupAddCardOpenButton.addEventListener('click', () => {
  addCardFormSubmit.open();
  formValidators['card'].resetValidation();
});