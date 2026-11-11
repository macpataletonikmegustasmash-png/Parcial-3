const boton = document.querySelector('.menu-boton')
const menu = document.querySelector('#menu-principal')

boton.addEventListener('click', () => {
    const abierto = boton.getAttribute('aria-expanded') === 'true'
    boton.setAttribute('aria-expanded', String(!abierto))
    menu.classList.toggle('menu--abierto', !abierto)
})

const paginaActual = location.pathname.split('/').pop() || 'index.html'

for (const enlace of menu.querySelectorAll('a')) {
    if (enlace.getAttribute('href') === paginaActual) {
        enlace.setAttribute('aria-current', 'page')
    }
}