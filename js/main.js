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