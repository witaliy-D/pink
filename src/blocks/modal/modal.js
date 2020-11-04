// eslint-disable-next-line no-redeclare,no-unused-vars
/* global document */

// import {createFocusTrap}from 'focus-trap';


function initModal(className) {
  const body = document.querySelector('body');
  const modal = document.querySelector(className);
  const closeModalButton = modal.querySelector('.modal__btn-close');
  // const modalFocusTrap = createFocusTrap(className);

  function getBodyScrollTop() {
    return (
      self.pageYOffset ||
      (document.documentElement && document.documentElement.ScrollTop) ||
      (document.body && document.body.scrollTop)
    );
  }

  function existVerticalScroll() {
    return document.body.offsetHeight > window.innerHeight;
  }

  function openModal() {
    body.dataset.scrollY = getBodyScrollTop();
    modal.classList.add('modal--open');
    // modalFocusTrap.activate(); // новая строка. Активируем плагин

    if (existVerticalScroll()) {
      body.classList.add('body-lock');
      body.style.top = `-${body.dataset.scrollY}px`;
    }
  }

  openModal();

  function closeModal() {
    modal.classList.remove('modal--open');
    // modalFocusTrap.deactivate(); // новая строка. Отключаем плагин

    if (existVerticalScroll()) {
      body.classList.remove('body-lock');
      window.scrollTo(0, Number(body.dataset.scrollY));
    }
  }

  document.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });

  closeModalButton.addEventListener('click', e => {
    e.preventDefault();
    closeModal();
  });
}

export default initModal;


