$(document).ready(function(){
$('form').submit(function(e){
e.preventDefault();
var n=$("#name").val();
alert(n);
});
});
