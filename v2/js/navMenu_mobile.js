$(function() {
    $('.menuBtn').on('click', function() {
      $(this).toggleClass('btnActive');
      $(this).toggleClass('navOpen')
    });
  });