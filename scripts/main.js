"use strict";

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});