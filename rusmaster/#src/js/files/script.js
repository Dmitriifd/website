
const headerContactsBtn = document.querySelector('.header__contacts-btn')
const headerPhones = document.querySelector('.header__contacts-allphones')
const menuIcon = document.querySelector('.menu__icon')

headerContactsBtn.addEventListener('click', () => {
    headerContactsBtn.classList.toggle('_active')
    headerPhones.classList.toggle('_active')
})

