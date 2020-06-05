const menuChanger = document.querySelector('.fa-chevron-circle-right');
const menu = document.querySelector('.side-nav');
const menuElements = document.querySelector('ul');
const logo = document.querySelector('.logo');

menuChanger.addEventListener('click', () => {
    menu.classList.toggle('side-nav-clicked');
    menuChanger.classList.toggle('menu-changer-clicked');
    menuChanger.classList.toggle('menu-changer');
    logo.classList.toggle('slide-left');
});