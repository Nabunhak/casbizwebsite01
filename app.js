
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 1.2,
    slidesOffsetBefore: 20,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });