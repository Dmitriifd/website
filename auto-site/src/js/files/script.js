// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

const menuIcon = document.querySelector('.menu__icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');

menuIcon.addEventListener('click', () => {
	hamburgerMenu.classList.toggle('active');
	if (hamburgerMenu.classList.contains('active')) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}
});

// Показать больше у карточек с отзывами

const cardText = document.querySelectorAll('.card-review__text');
const cardButton = document.querySelectorAll('.card-review__button');
const cardParent = document.querySelector('.review__wrapper');

function showMoreCard(i = 0) {
	cardText[i].classList.toggle('active');
}

cardParent.addEventListener('click', ({target}) => {
	if (target && target.classList.contains('card-review__button')) {
		cardText.forEach((item, i) => {
			if (target.previousElementSibling === item) {
				showMoreCard(i);
                cardButton[i].classList.toggle('active')
			}
		});
	}
});
