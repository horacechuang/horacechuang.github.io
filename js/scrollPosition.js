$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("#nav").addClass("addShadow");
        $("footer").addClass("addShadow");
    } else {
        $("#nav").removeClass("addShadow");
        $("footer").removeClass("addShadow");
    }
});
  