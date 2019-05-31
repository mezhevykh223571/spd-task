import jQuery from 'jquery'

(function ($) {
  $.fn.tabs = function () {
    let tabBtn = this.find('ul.tabs li')
    let tabContent = this.find('.tab-content')

    tabBtn.first().addClass('active')
    tabContent.first().addClass('active')

    tabBtn.on('click', function () {
      tabBtn.removeClass('active')
      tabContent.removeClass('active')

      let currentTabID = $(this).attr('data-tab')
      let getCurrentTab = $('#' + currentTabID)

      $(this).addClass('active')
      getCurrentTab.addClass('active')
    })
  }
})(jQuery)
