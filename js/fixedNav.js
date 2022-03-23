$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    //fixed-nav

    if (scroll >= $("section.fixnavStart").offset().top) {
        $("ul.sub-menu-container").addClass("fixed-nav");
    } else {
        $("ul.sub-menu-container").removeClass("fixed-nav");
    }

    if (scroll >= $("figure#fixnavEnd").offset().top) {
        $("ul.sub-menu-container").removeClass("fixed-nav"); 
        $("nav#sub-menu").addClass("fixed-bottom-nav");
        $("ul.sub-menu-container").addClass("sticky-nav"); 
    } else {
        $("nav#sub-menu").removeClass("fixed-bottom-nav");
        $("ul.sub-menu-container").removeClass("sticky-nav"); 
    }

});