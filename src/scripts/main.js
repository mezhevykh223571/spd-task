import jQuery from 'jquery'
import './plugins/tabs'
import './plugins/carousel'

window.$ = window.jQuery = jQuery

$('.features-tabs').tabs()

$('.testimonials-container').carousel()

const mobileMenu = $('.mobile-menu')

$('button.hamburger-btn').on('click', function () {
  $(this).toggleClass('active')
  mobileMenu.toggleClass('active')
})
