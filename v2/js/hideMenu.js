$(document).ready(function () {
    
     var navBar, currentScrollTop = 0,
         navigation = $("nav");
  
     $(window).scroll(function () {
        var topTomaxHeightDistance = $(window).scrollTop();
        var navBarHeight = navigation.height();
        currentScrollTop = topTomaxHeightDistance;
       
        if (navBar < currentScrollTop && topTomaxHeightDistance > navBarHeight*2) {
        navigation.fadeOut();

        } else if (navBar > currentScrollTop && !(topTomaxHeightDistance <= navBarHeight)) {
            navigation.fadeIn();
        }

        navBar = currentScrollTop;
    });
    
  });
