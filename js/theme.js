const nav_theme = document.querySelectorAll('.navigation__theme')
const root = document.documentElement
const curtain = document.querySelector('.curtain')

const themes = [
    //Black and Yellow
    {
        primary: '#ffe15f',
        secondary: 'rgb(34, 34, 34)',
        secondaryT: 'rgba(34,34,34,0.8)',
        background: 'url("../images/header_background1.png")',
    },
    //Main
    {
        primary: '#ACACB9',
        secondary: '#3B4C61',
        secondaryT: '#3B4C61b8',
        background: 'url("../images/header_background2.jpeg")',
    },
    //Lain Windows
    {
        primary: '#feffee',
        secondary: '#212432',
        secondaryT: '#212432b8',
        background: 'url("../images/header_background3.png")',
    },
]

nav_theme.forEach((theme) => {
    theme.addEventListener('click', (e) => {
        root.style.setProperty('--color-primary', themes[e.target.id].primary)
        root.style.setProperty(
            '--color-secondary',
            themes[e.target.id].secondary
        )
        root.style.setProperty(
            '--background-img',
            themes[e.target.id].background
        )
        root.style.setProperty(
            '--color-secondary-transparent',
            themes[e.target.id].secondaryT
        )
        curtain.classList.add('animate')
        setTimeout(() => {
            curtain.classList.remove('animate')
        }, 500)
    })
})
