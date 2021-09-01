
const headerIcon = document.querySelector('.header__icon');
const headerIconClose = document.querySelector('.header__icon-close');
const headerIconOpen = document.querySelector('.header__icon-open');
const menuBody = document.querySelector('.menu__body');
const menuFooter = document.querySelector('.menu__footer');


headerIcon.addEventListener('click', (e) => {
    e.preventDefault();
    headerIcon.classList.toggle('_active');
    headerIconOpen.classList.toggle('_active');
    headerIconClose.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    menuFooter.classList.toggle('_active');

    if (headerIcon.classList.contains('_active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
})


