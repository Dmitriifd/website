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

   
    slidesPerView: 3,
    // centeredSlides: true,

    breakpoints: {
        
        
        320: {
            slidesPerView: 1,

        },
        440: {
            slidesPerView: 1.3,

        },
        680: {
            slidesPerView: 2,
        },
        980: {
            slidesPerView: 3,
        },
       
      
    }
});