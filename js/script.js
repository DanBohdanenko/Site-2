'use strict'
//burger
let burger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
burger.addEventListener('click', function(event) {
    headerMenu.classList.toggle('_active');
    burger.classList.toggle('_active');
    document.body.classList.toggle('_lock');
})

//anchors
let navLink = document.querySelectorAll('.header__link');
let navMenuList = document.querySelector('.header__list');
navMenuList.addEventListener('click', function(event) {
    headerMenu.classList.toggle('_active');
});

//swiper
new Swiper('.portfolio-slider',{
    navigation: {
        enabled: false,
    },
    pagination: {
        enable: false,
    },
    autoHeight: true,
    spaceBetween: 30,
    loop: true, //бесконечность
    //чтобы бесконечность работала как надо, нужно добавить дублирующие слайды:
        loopedSlides: 3,
    slidesPerView: 1,
});