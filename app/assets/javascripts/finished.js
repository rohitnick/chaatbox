
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
}
});
});
