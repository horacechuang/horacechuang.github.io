$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 125) {
        $("nav").addClass("addShadow");
    } else {
        $("nav").removeClass("addShadow");
    }
});