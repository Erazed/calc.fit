$('nav').find('li').on('click', 'a', function() {
  $('.navbar-collapse.show').collapse('hide');
});

$('input').keyup(function(event) {
    if (event.which === 13) {
      $(this).blur();
    }
});
