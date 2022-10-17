const menuHamburger = document.querySelector('#menuHamburger');
const navbarMenu = document.querySelector('#navbarMenu');

menuHamburger.addEventListener('click', () => {
  menuHamburger.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});