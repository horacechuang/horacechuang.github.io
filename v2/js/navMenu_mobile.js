$(function() {
    $('.menuBtn').on('click', function() {
      $(this).toggleClass('btnActive');
      $(".nav-menu").toggleClass('collapse');
      $('body').toggleClass('scrollHidden');
    })

    $('.btn-nav a').on('click', function() {
      $(".menuBtn").removeClass('btnActive');
      $(".nav-menu").removeClass('collapse');
      $('body').removeClass('scrollHidden');
    })
  });