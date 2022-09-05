const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

function open() {
    menu.classList.add('showMenu');
}

hamburger.addEventListener('click', open);
