# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on "page:change", ->
  $('.js-product').click (e) ->
    $(".details").slideUp()
    $("#line-items").show()
    $(".proceed").show()
    $(".please-select").hide()
    id = $(this).attr('data-id')
    if $(this).hasClass('js-product-selected')
      $('#line-items #'+id).remove()
      $(this).removeClass('js-product-selected').addClass('bg-white').removeClass('bg-green')
    else
      name = $(this).find('.js-product-name').html() 
      price = $(this).find('.js-product-price').html()
      $('#line-item-container .line-item').attr('id', id)
      $('#line-item-container .line-item #line-item-inner').html(name)
      $('#line-item-container .line-item #price').html(price)
      $('#line-item-container .line-item #price1').html(price)
      $('#line-items').append($('#line-item-container').html())
      $(this).addClass('js-product-selected').removeClass('bg-white').addClass('bg-green')
    return
  return