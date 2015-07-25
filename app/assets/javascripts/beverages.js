function pepsi()
{
var name="pepsi";
var price="50";
   $('#line-item-container .line-item .cross').attr('onclick', 'cross' + "pep1" + '()')
 $('#line-item-container .line-item #line-item-inner').html(name)
      $('#line-item-container .line-item .prices').html(price)
      $('#line-item-container .line-item .pricess').html(price)
      $('#line-items').append($('#line-item-container').html())
alert("afdd");

}
