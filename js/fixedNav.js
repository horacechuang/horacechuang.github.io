$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    //fixed-nav

    if (scroll >= $("section#problem").offset().top) {
        $("ul.sub-menu").addClass("fixed-nav");
    } else {
        $("ul.sub-menu").removeClass("fixed-nav");
    }

    if (scroll >= $("figure#end").offset().top) {
        $("ul.sub-menu").removeClass("fixed-nav"); 
        $("nav#longpage-sub-menu").addClass("fixed-bottom-nav");
        $("ul.sub-menu").addClass("sticky-nav"); 
    } else {
        $("nav#longpage-sub-menu").removeClass("fixed-bottom-nav");
        $("ul.sub-menu").removeClass("sticky-nav"); 
    }

});
