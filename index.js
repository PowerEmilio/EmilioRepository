let changeBtn = document.querySelector('.changeMode')
let primeraPantalla = document.querySelector('.marvelScreen')
let segundaPantalla = document.querySelector('.cuboRubikLogoScreen')

changeBtn.addEventListener('click', () => {
    primeraPantalla.classList.toggle('displayNone');
    primeraPantalla.classList.toggle('displayYes');

    segundaPantalla.classList.toggle('displayNone');
    segundaPantalla.classList.toggle('displayYes');
})