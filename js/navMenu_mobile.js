  $(function() {
    $(".menuBtn").on('click', function() {
      $(this).toggleClass('btnActive');
      $(".nav-menu").toggleClass('collapse');
      $('html').toggleClass('scrollHidden');
    })

    $(".nav-btn a").on('click', function() {
      $(".menuBtn").removeClass('btnActive');
      $(".nav-menu").removeClass('collapse');
      $('html').removeClass('scrollHidden');
    })

  });