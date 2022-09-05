const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const xButton = Array.from(document.querySelectorAll('.menu li'));

console.log(xButton);
function open() {
    menu.classList.add('showMenu');
}

function close() {
  menu.classList.remove('showMenu');
}

hamburger.addEventListener('click', open);

xButton.forEach((item) => {
  item.addEventListener('click',close);
});
