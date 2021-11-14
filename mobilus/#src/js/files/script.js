const heroSlider = new Swiper('.hero__slider', {
    // Бесконечный режим прокрутки слайдов
    loop: true,

    // Скорость прокрутки
    speed: 2000,

    // Переключение клавишами
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    // Стрелки
    navigation: {
        nextEl: '.hero__slider-button--next',
        prevEl: '.hero__slider-button--prev',
    },

    // Дотсы
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Количество слайдов
    slidesPerView: 1,

    // Автовысота
    autoHeight: true,

    // Автопрокрутка
    // autoplay: {
    //     // Пауза между прокруткой
    //     delay: 5000,
    //     // Закончить на последнем слайде
    //     stopOnLastSlide: false,
    //     // Отключить после ручного переключения
    //     disableOnInteraction: false
    // },

    // Брейк поинты (адаптив)
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 2,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //     }
    // },
    
})

const newSlider = new Swiper('.new__slider', {
    // Бесконечный режим прокрутки слайдов
    loop: true,

    // Скорость прокрутки
    speed: 2000,

    // Переключение клавишами
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    // Стрелки
    navigation: {
        nextEl: '.new__slider-button--next',
        prevEl: '.new__slider-button--prev',
    },

    // Дотсы
    pagination: {
        el: ".new__slider-pagination",
        clickable: true,
    },

    // Количество слайдов
    slidesPerView: 4,

    // Автовысота
    autoHeight: true,

    // Отступ между слайдами
    spaceBetween: 24,

    // Автопрокрутка
    // autoplay: {
    //     // Пауза между прокруткой
    //     delay: 5000,
    //     // Закончить на последнем слайде
    //     stopOnLastSlide: false,
    //     // Отключить после ручного переключения
    //     disableOnInteraction: false
    // },

    // Брейк поинты (адаптив)
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 2,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //     }
    // },

})