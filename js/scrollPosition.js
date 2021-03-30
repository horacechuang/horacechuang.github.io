$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("nav#nav").addClass("addShadow");
        $("footer").addClass("addShadow");
    } else {
        $("nav#nav").removeClass("addShadow");
        $("footer").removeClass("addShadow");
    }
    
});
