$(document).ready(function(){
$(".proceed").click(function(){
if ($('.js-product-selected').length >=1)
{
$(".details").slideDown();
$("#line-items").hide();
$(this).hide();
}
else
{
$(".please-select").text("**Please Select Item**");
}
});
$(".error").hide();
});
