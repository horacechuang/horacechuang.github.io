$(function() {
  
    $('.menuBtn').on('click', function() {
      $(this).toggleClass('btnActive');
      $(".nav-menu").toggleClass('collapse');
    })

    $('.btn-nav a').on('click', function() {
      $(".nav-menu").removeClass('collapse');
      $(".menuBtn").removeClass('btnActive');
    })

  });