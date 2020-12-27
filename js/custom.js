$(document).ready(function() {
    $('.venobox').venobox();
});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(function() {
    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $(".navbar").addClass("bg");
        } else {
            $(".navbar").removeClass("bg");
        }
    });
    //animation scroll js

});