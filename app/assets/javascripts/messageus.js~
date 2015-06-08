$(document).ready(function(){
$('#messageus').submit(function(e){
e.preventDefault();
var n=document.getElementById("name").value;
var t=$('#total').html();
var m=document.getElementById("mobile").value;
var e=document.getElementById("email").value;
var a=document.getElementById("message").value;
alert(a+m+e+n);
$.ajax({
   type: "POST",
   url: 'message',
   dataType: 'json',
   data: $.param({contacts: {name: n,email: e,mobile: m,message: a}})
});
});
});
