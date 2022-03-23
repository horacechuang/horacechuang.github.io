  $(function() {
    $("nav#nav .nav-btn").on('click', function() {
      $(this).toggleClass('btnActive');
      $("nav#nav .nav-container").toggleClass('collapse');
      $("nav#nav .nav-column").toggleClass('collapse');
      $("nav#nav .nav-item").toggleClass('collapse');
      $('html').toggleClass('scrollHidden');
    })

    $("nav#nav ul.container a").on('click', function() {
      $("nav#nav .nav-btn").removeClass('btnActive');
      $("nav#nav .nav-container").removeClass('collapse');
      $("nav#nav .nav-column").removeClass('collapse');
      $("nav#nav .nav-item").removeClass('collapse');
      $('html').removeClass('scrollHidden');
    })

  });