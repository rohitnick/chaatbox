$(document).ready(function(){
$('#details').submit(function(e){
e.preventDefault();
$('#hmm').click();
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
z.splice(length,2);
var i;
for (i=0;i<y.length;i++)
{
$("#confirmname").append((i-(-1)) + "." + y[i] + "<br>");
$("#confirmquantity").append(z[i] + "<br>");
}

var n=document.getElementById("name-input").value;
var t=$('#total').html();
var m=document.getElementById("mobile-input").value;
var e=document.getElementById("email-input").value;
var a=document.getElementById("address-input").value;
$(".confirmtotal").html("Order Total : Rs" + t);
$(".confirmdetails").html("Name:&nbsp" + n + "<br><br>" +"Mobile:&nbsp" + m + "<br><br>" + "Email:&nbsp" +  e + "<br><br>" + "Address:&nbsp" +  a);







/*$('.details').slideUp();
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

$.ajax({
   type: "POST",
   url: 'create',
   dataType: 'json',
   data: $.param({details: {customers_name: n,customers_street_address: a,customers_telephone: m,customers_email_address: e,order_total: t,product: y,quantity: z}})
});*/
});
});