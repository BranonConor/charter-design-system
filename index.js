// Desktop menu elements
const menuChanger = document.querySelector('.fa-chevron-circle-right');
const menu = document.querySelector('.side-nav');
const menuElements = document.querySelector('ul');
const logo = document.querySelector('.logo');
//hamburger Menu elements
const hamburger = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobileMenu');
const burgerOne = document.querySelector('.burger1');
const burgerTwo = document.querySelector('.burger2');
const burgerThree = document.querySelector('.burger3');

// Desktop Menu should be hidden or restored on click
menuChanger.addEventListener('click', () => {
    menu.classList.toggle('side-nav-clicked');
    menuChanger.classList.toggle('menu-changer-clicked');
    menuChanger.classList.toggle('menu-changer');
    logo.classList.toggle('slide-left');
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-menu-flip');
    menu.classList.toggle('extendMenuContainer');
    menu.classList.toggle('shrinkMenuContainer');
    burgerOne.classList.toggle('burger1flip');
    burgerTwo.classList.toggle('burger2flip');
    burgerThree.classList.toggle('burger3flip');
})