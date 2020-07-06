$(document).ready(function () {
    
     var c, currentScrollTop = 0,
         navigation = $('nav');
  
     $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navigation.height();
       
        currentScrollTop = a;
       
        if (c < currentScrollTop && a > b*2) {
          navigation.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
          navigation.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });
    
  });