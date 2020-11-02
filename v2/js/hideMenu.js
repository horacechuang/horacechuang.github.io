$(document).ready(function () {
     var navBar, 
         currentScrollTop = 0,
         navigation = $("nav"),
         footer = $("footer");
  
     $(window).scroll(function () {
        var topTomaxHeightDistance = $(window).scrollTop();
        var navBarHeight = navigation.height();
        currentScrollTop = topTomaxHeightDistance;
       
        if (navBar < currentScrollTop && topTomaxHeightDistance > navBarHeight) {
        navigation.addClass("invisibleNav");
        footer.addClass("invisibleFooter")

        } else if (navBar > currentScrollTop && !(topTomaxHeightDistance <= navBarHeight)) {
            navigation.removeClass("invisibleNav");
            footer.removeClass("invisibleFooter");
        }

        navBar = currentScrollTop;

    });
    
  });