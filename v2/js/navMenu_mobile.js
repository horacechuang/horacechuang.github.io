$(function() {
    $('.menuBtn').on('click', function() {
      $(this).toggleClass('btnActive');
      $(".nav-menu").toggleClass('navOpen');
    })
  });