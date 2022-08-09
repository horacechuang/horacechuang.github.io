$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("nav#nav .nav-container").addClass("addDeepshadow");
    } else {
        $("nav#nav .nav-container").removeClass("addDeepshadow");
    }
    
});