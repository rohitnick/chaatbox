
$(document).ready(function(){
$("#finish").click(function()
{
if(!$('#name-input').val())
{
$("#error1").html("please fill in the detail");
}
if($('#name-input').val())
{
$("#error1").hide();
}
if(!$('#mobile-input').val())
{
$("#error2").html("please fill in the detail");
}
if($('#mobile-input').val())
{
$("#error2").hide();
}
if(!$('#email-input').val())
{
$("#error3").html("please fill in the detail");
}
if($('#email-input').val())
{
$("#error3").hide();
}
if(!$('#address-input').val())
{
$("#error4").html("please fill in the detail");
}
if($('#address-input').val())
{
$("#error4").hide();
}
if($('#name-input').val() && $('#mobile-input').val() && $('#email-input').val() && $('#address-input').val())
{
$('.details').slideUp();
$('.finish-message').slideDown();
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



/*product1=y[0];
product2=y[1];
quantity1=z[0];
quantity2=z[1]
*/

$.ajax({
   type: "POST",
   url: 'create',
   dataType: 'json',
   data: $.param({details: {customers_name: n,customers_street_address: a,customers_telephone: m,customers_email_address: e,order_total: t,product: y,quantity: z}})
});
}
});
});