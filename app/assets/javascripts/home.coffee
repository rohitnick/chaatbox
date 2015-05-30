# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on "page:change", ->
  $('.js-product').click (e) ->
    $(".details").slideUp()
    $("#line-items").show()
    $(".js-proceed").show()
    $(".please-select").hide()
    id = $(this).attr('data-id')
    if $(this).hasClass('js-product-selected')
      $('#line-items #'+id).remove()
      $(this).removeClass('js-product-selected')
    else
      name = $(this).find('.js-product-name').html() 
      price = $(this).find('.js-product-price').html()
      $('#line-item-container .line-item').attr('id', id)
      $('#line-item-container .line-item #line-item-inner').html(name)
      $('#line-item-container .line-item #price').html(price)
      $('#line-items').append($('#line-item-container').html())
      $(this).addClass('js-product-selected')
    return
  return
