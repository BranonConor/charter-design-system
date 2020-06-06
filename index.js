const menuChanger = document.querySelector('.fa-chevron-circle-right');
const menu = document.querySelector('.side-nav');
const menuElements = document.querySelector('ul');
const logo = document.querySelector('.logo');

const hamburger = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobileMenu');

// Desktop Menu should be hidden or restored on click
menuChanger.addEventListener('click', () => {
    menu.classList.toggle('side-nav-clicked');
    menuChanger.classList.toggle('menu-changer-clicked');
    menuChanger.classList.toggle('menu-changer');
    logo.classList.toggle('slide-left');
});

hamburger.addEventListener('click', () => {
    menu.classList.toggle('extendMenuContainer');
    menu.classList.toggle('shrinkMenuContainer');
})