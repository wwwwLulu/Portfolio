const nav_theme = document.querySelectorAll('.navigation__theme')
const root = document.documentElement;
const curtain = document.querySelector(".curtain")

const themes = [
    //Black and Yellow
    {
        primary: '#ffe15f',
        secondary: "rgb(34, 34, 34)",
        secondaryT: "rgba(34,34,34,0.8)",
        background: 'url("../images/header_background1.png")'
    },
    //Blue and DarkBlue
    {
        primary: '#78a0d3',
        secondary: '#2b3a59',
        secondaryT: "#2b3a59b8",
        background: 'url("../images/header_background2.jpg")'
    },
    //Lain Windows
    {
        primary: '#feffee',
        secondary: '#212432',
        secondaryT: "#212432b8",
        background: 'url("../images/header_background3.png")'
    }
]

nav_theme.forEach(theme => {
    theme.addEventListener('click', (e) => {
        root.style.setProperty("--color-primary", themes[e.target.id].primary);
        root.style.setProperty("--color-secondary", themes[e.target.id].secondary);    
        root.style.setProperty("--background-img", themes[e.target.id].background);  
        curtain.classList.add('animate');
        setTimeout( () => {
            curtain.classList.remove('animate')
        },500)
    })
})
