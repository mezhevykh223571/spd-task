import jQuery from 'jquery'

(function ($) {
  $.fn.visible = function () {
    let elementTop = $(this).offset().top
    let elementBottom = elementTop + $(this).outerHeight()

    let viewportTop = $(window).scrollTop()
    let viewportBottom = viewportTop + $(window).height()

    return elementBottom > viewportTop && elementTop < viewportBottom
  }
})(jQuery)
