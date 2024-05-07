// hamburger Menu
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hlink = document.querySelectorAll('#hlink');
const fasolid = document.querySelector('.fa-solid');

hamburger.addEventListener("click", () => { 
    menu.classList.toggle('hidden');
    fasolid.classList.toggle('fa-xmark');
});