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
    speed: 500,

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

    // slidesPerView: auto,

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
    breakpoints: {
        260: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1.2,
            centeredSlides: true,
        },
        520: {
            centeredSlides: false,
            slidesPerView: 2,
        },
        740: {
            centeredSlides: false,
            slidesPerView: 2,
        },
        860: {
            slidesPerView: 3,
        },
        1080: {
            slidesPerView: 4,
        }
    },

});

const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    navigation: {
        nextEl: ".product__slider-arrow--next",
        prevEl: ".product__slider-arrow--prev",
    },
});
const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    
   
    thumbs: {
        swiper: swiper,
    },

    
});

// Модальное окно

const modalTrigger = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');

if (modal) {
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

}





