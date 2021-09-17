
const headerContactsBtn = document.querySelector('.header__contacts-btn')
const headerPhones = document.querySelector('.header__contacts-allphones')
const menuCloseBtn = document.querySelector('.close-btn')
const menuIcon = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
const menuList = document.querySelector('.menu__list')
const menuArrow = document.querySelectorAll('.menu__arrow')
const menuSubList = document.querySelectorAll('.menu__sub-list')

headerContactsBtn.addEventListener('click', () => {
    headerContactsBtn.classList.toggle('_active')
    headerPhones.classList.toggle('_active')
})


menuCloseBtn.addEventListener('click', () => {
    menuBody.classList.remove('_active')
    menuIcon.classList.remove('_active')
    document.body.classList.remove('_lock')
    document.body.style.paddingRight = '';
})

function showMenu(i) {
    menuSubList[i].classList.toggle('hide')
    menuArrow[i].classList.toggle('menu__link--active')
}

menuList.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;

    if (target && target.classList.contains('menu__arrow')) {
        menuArrow.forEach((item, i) => {
            if (target === item) {
                showMenu(i);
            }
        });
    }
});