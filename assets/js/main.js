var $ = jQuery.noConflict()

$(document).ready(function () {
  $('.bar').each(function () {
    $(this)
      .find('.bar-fill')
      .animate({
        width: $(this).attr('data-percentage'),
      })
  })
})
