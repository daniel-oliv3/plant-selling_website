/*Menu toggle*/
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}









