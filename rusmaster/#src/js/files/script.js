
const headerContactsBtn = document.querySelector('.header__contacts-btn')
const headerPhones = document.querySelector('.header__contacts-allphones')
const menuCloseBtn = document.querySelector('.close-btn')
const menuIcon = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
const menuLink = document.querySelectorAll('.menu__link')
const menuSubList = document.querySelector('.menu__sub-list')

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

menuLink.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target == item) {
            menuSubList.classList.toggle('active')
            menuLink.forEach(item => {
                item.classList.toggle('active')
            })
        }

    })
})

