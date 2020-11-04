// eslint-disable-next-line no-redeclare,no-unused-vars
/* global document */


const ready = require('../../js/utils/documentReady.js');

ready(function (){
  const editInput = document.querySelectorAll('.photo-edit__item input');
  const editItem = document.querySelectorAll('.photo-edit__item');

  for (let l = 0; l < editInput.length; l++) {
    editInput[l].addEventListener('focus', function () {
      const parent = this.parentNode;

      for (let n = 0; n < editItem.length; n++) {
        editItem[n].classList.remove('photo-edit__item--active');
      }
      parent.classList.add('photo-edit__item--active');
    });
  }
});
