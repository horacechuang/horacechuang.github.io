$(document).ready(function () {
     var navBar, 
         currentScrollTop = 0,
         navigation = $("nav");
         mobileFooter = $(".mobile-footer");
  
     $(window).scroll(function () {
        var topTomaxHeightDistance = $(window).scrollTop();
        var navBarHeight = navigation.height();
        currentScrollTop = topTomaxHeightDistance;
       
        if (navBar < currentScrollTop && topTomaxHeightDistance > navBarHeight) {
        navigation.addClass("invisibleNav");
        mobileFooter.addClass("invisibleFooter");

        } else if (navBar > currentScrollTop && !(topTomaxHeightDistance <= navBarHeight)) {
            navigation.removeClass("invisibleNav");
            mobileFooter.removeClass("invisibleFooter");
        }

        navBar = currentScrollTop;

    });

});

//document.oncontextmenu = new Function("return false;");
document.onmousedown = new Function("return false;");
document.ondragstart = new Function("return false;");
document.onselectstart = new Function("return false;");
document.onselect = new Function("return false;");