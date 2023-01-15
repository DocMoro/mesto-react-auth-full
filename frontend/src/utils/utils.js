const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const buttonOpenPopupAvatar = document.querySelector('.profile__avatar');
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button'); 
const inputNamePopupEdit = document.querySelector('.popup__input_field_name'); 
const inputInfoPopupEdit = document.querySelector('.popup__input_field_about-me'); 
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');

const formSelector = '.popup__form';

const ESC = 27;
const BASE_URL = 'https://api.andreymorogin.mesto.nomoredomains.rocks';
const ORIGIN_URL = 'https://andreymorogin.mesto.nomoredomains.rocks';

export {
  config,
  formSelector,
  buttonOpenPopupAvatar,
  buttonOpenPopupEdit,
  inputNamePopupEdit,
  inputInfoPopupEdit,
  buttonOpenPopupAdd,
  ESC,
  BASE_URL,
  ORIGIN_URL
}