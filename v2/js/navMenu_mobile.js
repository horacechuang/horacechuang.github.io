$(function() {
    $('.menuBtn').on('click', function() {
      $(this).toggleClass('btnActive');
      $(".nav-menu").toggleClass('collapse');
      $('html').toggleClass('scrollHidden');
    })
    $('.btn-nav a').on('click', function() {
      $(".nav-menu").removeClass('collapse');
      $(".menuBtn").removeClass('btnActive');
      $('html').removeClass('scrollHidden');
    })
  });