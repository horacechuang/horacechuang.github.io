$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= $("section.stickyNavStart").offset().top) {
        $("section#sub-navbar").addClass("appear");
    } else {
        $("section#sub-navbar").removeClass("appear");
    }

    if (scroll >= $("figure.stickyNavEnd").offset().top) {
        $("section#sub-navbar").addClass("disappear");
        $("section#sub-navbar").removeClass("appear");
    } else {
        $("section#sub-navbar").removeClass("disappear");
    }

});