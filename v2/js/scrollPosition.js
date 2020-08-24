$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("nav").addClass("addShadow");
    } else {
        $("nav").removeClass("addShadow");
    }
});