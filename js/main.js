$('.hamburger, .menu').click(function () {
    if ($('.menu').is(':hidden')) {
        $('.menu').show('slideToggle');
    } else {
        $('.menu').hide('slideToggle');
    }
});



var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
});

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})