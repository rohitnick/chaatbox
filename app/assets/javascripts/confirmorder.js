$(document).ready(function(){
$('#confirmorder').click(function(e){
$('.details').slideUp();
$('.finish-message').slideDown();
$("#confirmname").empty();
$('#confirmquantity').empty();
$('.confirmtotal').empty();
var n=document.getElementById("name-input").value;
var t=$('#total').html();
var m=document.getElementById("mobile-input").value;
var e=document.getElementById("email-input").value;
var a=document.getElementById("address-input").value;
var x=''; var q='';
$('.line-item').each(function(i)
{
x=x+$(this).find('#line-item-inner').html() + '.';
q=q+$(this).find('.num').val() + '.';
});
var y=x.split('.');
var length=y.length-2;
y.splice(length,2);
var z=q.split('.');
var length=z.length-2;
z.splice(length,2)

$.ajax({
   type: "POST",
   url: 'create',
   dataType: 'json',
   data: $.param({details: {customers_name: n,customers_street_address: a,customers_telephone: m,customers_email_address: e,order_total: t,product: y,quantity: z}})
});
});

$("#back").click(function()
{
$('.details').slideUp();
$('#line-items').slideDown();
$('.js-proceed').show();
$("#name-input").val("");
$("#mobile-input").val("");
$("#email-input").val("");
$("#address-input").val("");
$("#confirmname").empty();
$('#confirmquantity').empty();
$('.confirmtotal').empty();
});
});