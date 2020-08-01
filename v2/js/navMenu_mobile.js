$(function() {
    $('.menuBtn').on('click', function() {
      $(this).toggleClass('btnActive');
      $(".nav-menu").toggleClass('collapse');
      $('html,body').toggleClass('scrollHidden');
    })

    $('.btn-nav a').on('click', function() {
      $(".menuBtn").removeClass('btnActive');
      $(".nav-menu").removeClass('collapse');
      $('html,body').removeClass('scrollHidden');
    })
  });