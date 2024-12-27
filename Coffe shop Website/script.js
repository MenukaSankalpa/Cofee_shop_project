/*let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick =()=>{
    search.classList.toggle('active');

}*/

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =()=>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick =()=>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

/*document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.querySelector('#menu-icon');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        search.classList.remove('active');
    });
});*/


let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrolly > 0);
});