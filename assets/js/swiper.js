import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 24,

  breakpoints: {
    1400: {
      slidesPerView: 3
    }
  },

  // 滑鼠中鍵滾輪可滑動
  mousewheel: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
});