import IMask from 'imask';
import initModal from '../modal/modal';
const ready = require('../../js/utils/documentReady.js');


ready(function (){
  const openModalButton = document.querySelector('.form__item-btn');
  const firstName = document.getElementById('first-name');
  const secondName = document.getElementById('second-name');
  const middleName = document.getElementById('middle-name');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const textarea = document.getElementById('textarea');
  const regRu = /^[А-Яа-яЁё\s]+$/;
  const regPhone = /^\+?[\d() -]{17}$/;
  const regEmail = /^\w+([.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
  const regAll = /(.|\n)*/;
  const media = '(min-width: 660px)';
  // eslint-disable-next-line no-unused-vars
  const phoneMask = new IMask(
    phone, {
      mask: '+{7} (000) 000-00-00'
    }
  );

  function placeHolderChange() {
    if (window.matchMedia(media).matches) {
      phone.setAttribute('placeholder', '+7 XXX XXX-XX-XX');
      email.setAttribute('placeholder', 'Введите почту');
    }
    else {
      phone.setAttribute('placeholder', 'Номер, пожалуйста');
      email.setAttribute('placeholder', 'E-mail, пожалуйста');
    }
  }
  window.onload = placeHolderChange;
  window.onresize = placeHolderChange;


  function ValidateElem(el, reg) {
    this.validate = function () {
      if ((el.value).trim() === '' || !reg.test((el.value).trim())) {
        this.errors = true;
        el.classList.add('field-text__input--error');
      }else {
        this.errors = false;
        el.classList.remove('field-text__input--error');
      }
      return this.errors;
    };
  }

  const validateFirstName = new ValidateElem(firstName, regRu);
  const validateSecondName = new ValidateElem(secondName, regRu);
  const validateMiddleName = new ValidateElem(middleName, regRu);
  const validatePhone = new ValidateElem(phone, regPhone);
  const validateEmail = new ValidateElem(email, regEmail);
  const validateTextarea = new ValidateElem(textarea, regAll);

  firstName.onchange = (validateFirstName.validate);
  secondName.onchange = (validateSecondName.validate);
  middleName.onchange = (validateMiddleName.validate);
  phone.onchange = (validatePhone.validate);
  email.onchange = (validateEmail.validate);
  textarea.onchange = (validateTextarea.validate);

  openModalButton.addEventListener('click', e => {
    e.preventDefault();

    validateFirstName.validate();
    validateSecondName.validate();
    validateMiddleName.validate();
    validatePhone.validate();
    validateEmail.validate();
    validateTextarea.validate();

    if (!validateFirstName.validate() &&
        !validateSecondName.validate() &&
        !validateMiddleName.validate() &&
        !validatePhone.validate() &&
        !validateEmail.validate() &&
        !validateTextarea.validate()) {
      initModal('.modal--success');
      document.querySelector('.form').reset();
    }
    else {
      initModal('.modal--error');
    }
  });
});

