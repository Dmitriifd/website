

const langRu = document.querySelector('.menu__lang-ru')
const langEn = document.querySelector('.menu__lang-en')


langRu.addEventListener('click', () => {
    langRu.classList.add('_active');
    langEn.classList.remove('_active')
})
langEn.addEventListener('click', () => {
    langEn.classList.add('_active');
    langRu.classList.remove('_active')
})