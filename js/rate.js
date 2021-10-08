// rating stars

var options = {
    max_value: 5,
    step_size: 0.5,
    initial_value: 0,
    cursor: 'pointer',
    readonly: false,
    change_once: true,
    // ajax_method: 'POST',
    // url: 'http://localhost/test.php',
    additional_data: {} // Additional data to send to the server
  }
  $(".rating").rate(options);
  
  // Counting reviews
  $('.not-rated').on('click', function () {
    var rated = $(this).closest(".ratings").find(".rated");
    var rate_error_message = $(this).closest('.ratings').find('.rate_message');
    if (rated.attr('rated') != 'true') {
      $(this).attr('rated', true)
      rated.html(parseInt(rated.html()) + 1);
      $(this).removeClass('not-rated').addClass('rated');
      rate_error_message.show(500).html('Rated Succesfully!');
      rate_error_message.css({'top': '25px'});
      rate_error_message.fadeOut(900);
    } else {
      rate_error_message.html('Rated Already!');
      rate_error_message.css({'top': '25px', 'display': 'inline-block', 'color': 'red'});
      rate_error_message.fadeOut(900);
    }
  
  });
  