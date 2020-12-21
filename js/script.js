const header__burger = document.querySelector('.icon-menu');
const header_menu = document.querySelector('.menu_body');
const back = document.querySelector('body');
const header__list = document.querySelector('.menu_list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}

$(document).ready(function(){
    $('.slider').slick(
        {
     arrows: true,
     dots: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     speed:1000,
     easing: 'easy',
     centerMode: true,
     asNavFor: '.sliderbig'
   }
   )
})

