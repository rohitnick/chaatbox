# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on "page:change", ->
  $('.js-product').click (e) ->
    $(".details").slideUp()
    $("#line-items").show()
    $(".js-proceed").show()
    $(".please-select").hide()
    $('.subarea').slideUp()
    $("#minorder").hide();
    id = $(this).attr('id')
    if $(this).hasClass('js-product-selected')
      price = $(this).find('.js-product-price').html()
      quantity=$('#num'+id).val()
      $('.finish-message').slideUp()
      $('#total').html($('#total').html()-(quantity*price))
      $('#line-items #tag'+id).remove()
      $(this).removeClass('js-product-selected') 
      $(this).find('.js-product-details').removeClass('bg-green')
      $("#name-input").val("");
      $("#mobile-input").val("");
      $("#email-input").val("");
      $("#address-input").val("");
    else
      name = $(this).find('.js-product-name').html() 
      price = $(this).find('.js-product-price').html()
      $('#total').html($('#total').html()-(-price))
      $('#line-item-container .line-item').attr('id', "tag" + id)
      $('#line-item-container .line-item .prices').attr('id','prices' + id)
      $('#line-item-container .line-item .pricess').attr('id','pricess' + id)
      $('#line-item-container .line-item .input-group .minus').attr('onclick', 'minus' + id + '()')
      $('#line-item-container .line-item .input-group .plus').attr('onclick', 'plus' + id + '()')
      $('#line-item-container .line-item .cross').attr('onclick', 'cross' + id + '()')
      $('#line-item-container .line-item .input-group .num').attr('id','num' + id)
      $('#line-item-container .line-item #line-item-inner').html(name)
      $('#line-item-container .line-item .prices').html(price)
      $('#line-item-container .line-item .pricess').html(price)
      $('#line-items').append($('#line-item-container').html())
      $(this).addClass('js-product-selected')
      $(this).find('.js-product-details').addClass('bg-green')
      $('.finish-message').slideUp()
      $("#name-input").val("");
      $("#mobile-input").val("");
      $("#email-input").val("");
      $("#address-input").val("");    
      return
  return
