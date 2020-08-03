$(document).ready(function () {
    
     var navBar, currentScrollTop = 0,
         navigation = $("nav");
  
     $(window).scroll(function () {
        var topTomaxHeightDistance = $(window).scrollTop();
        var navBarHeight = navigation.height();
        currentScrollTop = topTomaxHeightDistance;
       
        if (navBar < currentScrollTop && topTomaxHeightDistance > navBarHeight*2) {
        //   navigation.addClass("invisibleNav");
        navigation.addClass("invisibleNav");

        } else if (navBar > currentScrollTop && !(topTomaxHeightDistance <= navBarHeight)) {
        //   navigation.removeClass("invisibleNav");
            navigation.removeClass("invisibleNav");
        }

        navBar = currentScrollTop;
    });
    
  });
