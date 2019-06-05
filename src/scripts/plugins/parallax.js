import jQuery from 'jquery'
import './isVisible'

(function ($) {

  $.fn.parallax = function () {
    $(window).on('resize scroll', function () {
      let scrolledWindow = $(window).scrollTop()

      $('.own-parallax').each(function (i, el) {
        let offsetTop = $(this).offset().top
        let elHeight = $(this).height()
        let endOfElement = offsetTop + $(this).height()

        if (visible($(this))) {
          let diff = scrolledWindow - offsetTop
          let ratio = Math.round((diff / elHeight) * 100)

          $(this).css({
            'background-position': 'center ' + parseInt(-(ratio * 1.5)) + 'px'
          })
        }
      })
    })
  }
})(jQuery)
