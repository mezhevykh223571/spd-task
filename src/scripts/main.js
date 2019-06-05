import jQuery from 'jquery'
import './plugins/tabs'
import './plugins/parallax'

window.$ = window.jQuery = jQuery

$('.features-tabs').tabs()

let mobileMenu = $('.mobile-menu')

$('button.mobile-icon').on('click', function () {
  mobileMenu.addClass('active')
})

$('button.close-mobile-menu').on('click', function () {
  mobileMenu.removeClass('active')
})

$('.own-parallax').parallax()
