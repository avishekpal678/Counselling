let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick =() => {
manu.classlist.toggle('bx-x');
navbar.classlist.toggle('active');
}

window.onscroll = () => {
menu.classList.remove('bx-x');
navbar.classList.remove('active');
}