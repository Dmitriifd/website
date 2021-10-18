/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.intro`)
sr.reveal(`.team__inner`, { origin: 'left' })
sr.reveal(`.team__cards`, { origin: 'right', interval: 200 })
sr.reveal(`.advantages__items`, { origin: 'top'})
sr.reveal(`.advantages__cards`)
sr.reveal(`.tariffs`)
sr.reveal(`.partners__header`)
sr.reveal(`.partners__items`, { origin: 'left' })
sr.reveal(`.steps__items`)
sr.reveal(`.forecasts`)
sr.reveal(`.supervisor-img`, { origin: 'left' })
sr.reveal(`.supervisor__info`, { origin: 'right' })
