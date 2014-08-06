$(document).foundation();

(function($) {
  $(document).ready(function() {

    $('.milestone strong').appear(function() {
      $(this).countTo(100);
    });

    $(".members").each(function() {
      var members = $(this);
      $(this).find('.member').each(function() {
        $(this).click(function() {
          $(members).find('.member').removeClass('active');
          $(this).addClass('active');
          var target = $(this).attr('data-target');
          $(members).find('.member-intro').removeClass('active');
          $(target).addClass('active');
        });
      });
    });

    $("#portfolio-items").on("after-slide-change.fndtn.orbit", function(event, orbit) {
      var number = orbit.slide_number + 1;
      var target = $("#item-" + number);
      $("#portfolio-data").find('.item-intro').removeClass('active');
      $(target).addClass('active');
    });

    $('.fadeinleft, .fadeinright').appear(function() {
      $(this).addClass('appear');
    });

    $('ul#filter li a').click(function() {
      $('ul#filter li').removeClass('current');
      $(this).closest('li').addClass('current');
      var cat = $(this).attr('data-cat');
      var gallery = $('ul#filter').closest('.gallery-wrapper').find('ul.gallery');
      if (cat === 'all') {
        $('li', gallery).removeClass('hidden');
      } else {
        $('li', gallery).each(function() {
          if ($(this).hasClass(cat)) {
            $(this).removeClass('hidden');
          } else {
            $(this).addClass('hidden');
          }
        });
      }
      return false;
    });

  });
})(jQuery);
