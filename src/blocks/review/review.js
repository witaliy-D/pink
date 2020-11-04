const ready = require('../../js/utils/documentReady.js');
import {Navigation, Pagination, Swiper}from 'swiper';
Swiper.use([Navigation, Pagination]);

ready(function (){
// eslint-disable-next-line no-new
  new Swiper('.review', {
    loop: true,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});
