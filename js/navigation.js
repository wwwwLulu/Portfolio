const checkbox = document.getElementById('navi-toggle')

const nav_link = document.querySelectorAll('.navigation__item')

nav_link.forEach((link) => {
    link.addEventListener('click', () => {
        checkbox.checked = false
    })
})
