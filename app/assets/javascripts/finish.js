/*$(document).ready(function() { 
$("#finish").click(function(){
var n=document.getElementById("name-input").value;
var t=$('#total').html();
var m=document.getElementById("mobile-input").value;
var e=document.getElementById("email-input").value;
var a=document.getElementById("address-input").value;
 alert(n+t+m+e+a);
var x='';
 $('.line-item').each(function(i)
{
x=x+$(this).find('#line-item-inner').html() + '.';
});
var y=x.split('.');
var length=y.length-2;
y.splice(length,2);
var z = JSON.stringify(y);
 
$.ajax({
   type: "POST",
   url: 'create',
   dataType: 'json',
   data: {details: z}
});
});
});*/
