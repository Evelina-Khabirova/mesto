const formProfile = document.forms.profile;
const inputFullname = formProfile.elements.fullname;
const inputAboutMe = formProfile.elements.about_me;
const saveButtonProfile = formProfile.elements.save_profile;
const formCard = document.forms.card;
const inputCardName = formCard.elements.card_name;
const inputCardLink = formCard.elements.card_link;
const saveButtonCard = formCard.elements.save_card;

function setSubmitButtonState (isFormValid, button, input) {
  console.log(isFormValid);
  if (isFormValid) {
    button.removeAttribute('disabled');
    button.classList.remove('popup__save_disabled');
  }
  else {
    button.setAttribute('disabled', true);
    button.classList.add('popup__save_disabled');
    const errorNode = document.querySelector(`#${input.id}-error`);
    errorNode.classList.add('popup__error_active');
    errorNode.textContent = 'Вы пропустили это поле.';
    input.classList.add('popup__input_error');
  }
}


function handleFormInput(event, button) {
  const input = event.target;
  const isValidInput = input.validity.valid;
  setSubmitButtonState(isValidInput, button, input);
}

formProfile.addEventListener('input', (event) => handleFormInput(event, saveButtonProfile));
formCard.addEventListener('input', (event) => handleFormInput(event, saveButtonCard));