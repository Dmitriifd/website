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
