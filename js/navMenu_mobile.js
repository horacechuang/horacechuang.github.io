  $(function() {
    $("nav#nav .mobileBtn").on('click', function() {
      $(this).toggleClass('btnActive');
      $("nav#nav .item").toggleClass('collapse');
      $('html').toggleClass('scrollHidden');
    })

    $("nav#nav ul.container a").on('click', function() {
      $("nav#nav .mobileBtn").removeClass('btnActive');
      $("nav#nav .item").removeClass('collapse');
      $('html').removeClass('scrollHidden');
    })

  });