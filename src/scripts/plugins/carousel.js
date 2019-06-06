import jQuery from 'jquery'

(function ($) {
  $.fn.carousel = function () {
    const carousel = $('.own-carousel')
    const slide = carousel.find('.slide')
    const slidesWidth = slide.outerWidth() * slide.length

    let count = 0
    let slidePerPage = 1

    if (window.matchMedia('(min-width: 768px)').matches) {
      slidePerPage = 2
    }

    if (window.matchMedia('(min-width: 992px)').matches) {
      slidePerPage = 3
    }

    let totalSlides = -(slide.length - slidePerPage)

    carousel.wrapInner('<div class="own-stage"></div>')
    carousel.append('<div class="button-wrapper"><button id="left-btn">Back</button><button id="right-btn">Next</button></div>')

    const stage = carousel.find('.own-stage')
    const btnLeft = carousel.find('#left-btn')
    const btnRight = carousel.find('#right-btn')

    stage.css({
      'width': slidesWidth + 'px',
      'left': 0
    })

    btnLeft.on('click', function () {
      slideDir('right')
    })

    btnRight.on('click', function () {
      slideDir('left')
    })

    function slideDir (dir) {
      dir === 'right' ? count++ : count--

      if (count > 0 && dir === 'right') {
        count = totalSlides

        // return false
      }

      if (count < totalSlides && dir === 'left') {
        count = 0

        // return false
      }

      stage.css({
        'left': count * slide.outerWidth() + 'px'
      })
    }
  }
})(jQuery)
