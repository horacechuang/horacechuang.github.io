$(document).ready(function () {
     var navBar, 
         currentScrollTop = 0,
         navigation = $("nav#nav");
         mobileFooter = $("footer.mobile");
         itemNav = $("nav#sub-menu ul.sub-menu-container");
  
     $(window).scroll(function () {
        var topTomaxHeightDistance = $(window).scrollTop();
        var navBarHeight = navigation.height();
        currentScrollTop = topTomaxHeightDistance;
       
        if (navBar < currentScrollTop && topTomaxHeightDistance > navBarHeight) {
        navigation.addClass("invisibleNav");
        mobileFooter.addClass("invisibleFooter");
        itemNav.removeClass("invisibleSubmenu");

        } else if (navBar > currentScrollTop && !(topTomaxHeightDistance <= navBarHeight)) {
            navigation.removeClass("invisibleNav");
            mobileFooter.removeClass("invisibleFooter");
            itemNav.addClass("invisibleSubmenu");
        }

        navBar = currentScrollTop;

    });

});

// document.oncontextmenu = new Function("return false;");
document.onmousedown = new Function("return false;");
document.ondragstart = new Function("return false;");
document.onselectstart = new Function("return false;");
document.onselect = new Function("return false;");