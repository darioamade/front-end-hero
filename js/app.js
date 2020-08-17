const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const nav1 = document.querySelector('.nav1');

menuOpen.addEventListener('click', menuTog);
menuClose.addEventListener('click', menuTog);

function menuTog(e){
  nav1.classList.toggle('active')
};