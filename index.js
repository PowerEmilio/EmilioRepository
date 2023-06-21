let botonLuz = document.querySelector('#botonLuz');
let infoContainer = document.querySelector('.infoContainer__content');
let card1 = document.querySelector('.parpadeoLento1');
let card2 = document.querySelector('.parpadeoLento2');

botonLuz.addEventListener('click', () => {
    infoContainer.classList.toggle('parpadeo');
    card2.classList.toggle('parpadeoLento2');
    card1.classList.toggle('parpadeoLento1');
})