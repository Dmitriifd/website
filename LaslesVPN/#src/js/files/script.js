const swiper = new Swiper('.reviews__slider', {
    // Optional parameters
    
    loop: true,

    // If we need pagination
    pagination: {
        el: '.reviews__slider-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.reviews__slider-button--next',
        prevEl: '.reviews__slider-button--prev',
    },

    // slidesPerView: 3,
    // freeMode: true,
    slidesPerView: 3,
    centeredSlides: true,
    // spaceBetween: 30,
    // initialSlide: 0,
   
});