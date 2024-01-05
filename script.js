const btn1 = document.querySelector('.first-item');
const menu = document.querySelector('.first-item a');
const images1 = document.querySelector('.images1');
const images2 = document.querySelector('.images2');
const images3 = document.querySelector('.images3');
const images4 = document.querySelector('.images4');
const btn2 = document.querySelector('.second-item');
const menu2 = document.querySelector('.second-item a');
const list1 = document.querySelector('.list1');
const list2 = document.querySelector('.list2');
const close = document.querySelector('.close');
const menulist = document.querySelector('.menu-list');
const menubar = document.querySelector('.menubar');


btn1.addEventListener('click', () => {
    list1.classList.toggle('active');
    menu.classList.toggle('color');
    images1.classList.toggle('hide');
    images2.classList.toggle('show');
})

btn2.addEventListener('click', () => {
    list2.classList.toggle('active');
    menu2.classList.toggle('color');
    images3.classList.toggle('hide');
    images4.classList.toggle('show');
})

menubar.addEventListener('click', () => {
    menulist.style.display = 'grid';
    menulist.style.top = 0;
    close.style.display = 'flex';
})

close.addEventListener('click', () => {
    menulist.style.top = '-50vh';
})