/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.promo-slider')) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.promo-slider', {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,

			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			loop: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			// Скроллбар

			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// 	draggable: true,
			// },

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {},
		});
	}

	if (document.querySelector('.auto__slider')) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер

		new Swiper('.auto__slider', {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			
			slidesPerView: 3,
			// spaceBetween: 30,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				998: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1340: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},

			
		});
	}
	if (document.querySelector('.offer__slider')) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер

		new Swiper('.offer__slider', {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			slidesPerView: 3,
			spaceBetween: 30,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,

			navigation: {
				prevEl: '.offer__slider-prev',
				nextEl: '.offer__slider-next',
			},

			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.1,
					spaceBetween: 10,
				},
				440: {
					slidesPerView: 1.5,
					spaceBetween: 20,
				},
				650: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2.2,
					spaceBetween: 20,
				},
				998: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				1320: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}
	if (document.querySelector('.offer__slider-spec')) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер

		new Swiper('.offer__slider-spec', {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			navigation: {
				prevEl: '.spec__slider-prev',
				nextEl: '.spec__slider-next',
			},

			slidesPerView: 3,
			spaceBetween: 30,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1.1,
					spaceBetween: 10,
				},
				480: {
					slidesPerView: 1.1,
					// spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				998: {
					slidesPerView: 2.5,
				},
				1180: {
					slidesPerView: 3,
				},
			},
		});
	}
	if (document.querySelector('.partners__slider')) {

		new Swiper('.partners__slider', {
			modules: [Navigation],
			navigation: {
				prevEl: '.partners__slider-prev',
				nextEl: '.partners__slider-next',
			},

			slidesPerView: 4,
			spaceBetween: 30,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.1,
					spaceBetween: 10,
				},
				540: {
					slidesPerView: 1.5,
					spaceBetween: 10,
				},
				700: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				900: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				1080: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
		});
	}
	if (document.querySelector('.reviews-slider')) {
		new Swiper('.reviews-slider', {
			modules: [Navigation],
			navigation: {
				prevEl: '.reviews-slider__prev',
				nextEl: '.reviews-slider__next',
			},

			slidesPerView: 4,
			spaceBetween: 30,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.1,
					spaceBetween: 10,
				},
				540: {
					slidesPerView: 1.5,
					spaceBetween: 10,
				},
				700: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				900: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				1080: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
		});
	}
	if (document.querySelector('.blog__slider')) {
		new Swiper('.blog__slider', {
			modules: [Navigation],
			navigation: {
				prevEl: '.blog__slider-prev',
				nextEl: '.blog__slider-next',
			},

			slidesPerView: 4,
			spaceBetween: 30,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			breakpoints: {
				320: {
					slidesPerView: 1.1,
				},
				440: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				540: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				700: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				900: {
					slidesPerView: 4,
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
// function initSlidersScroll() {
// 	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
// 	if (sliderScrollItems.length > 0) {
// 		for (let index = 0; index < sliderScrollItems.length; index++) {
// 			const sliderScrollItem = sliderScrollItems[index];
// 			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 			const sliderScroll = new Swiper(sliderScrollItem, {
// 				observer: true,
// 				observeParents: true,
// 				direction: 'vertical',
// 				slidesPerView: 'auto',
// 				freeMode: {
// 					enabled: true,
// 				},
// 				scrollbar: {
// 					el: sliderScrollBar,
// 					draggable: true,
// 					snapOnRelease: false
// 				},
// 				mousewheel: {
// 					releaseOnEdges: true,
// 				},
// 			});
// 			sliderScroll.scrollbar.updateSize();
// 		}
// 	}
// }

window.addEventListener('load', function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});