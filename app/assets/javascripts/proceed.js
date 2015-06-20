$(document).ready(function(){
  $(".js-proceed").click(function(){
var t=$("#total").html();
if(t>=60 || t==0)
{
$("#minorder").hide();
   if ($('.js-product-selected').length >=1)
    {
      $(".subarea").slideDown();
      $("#line-items").hide();
      $(this).hide();
    }
    else
    {
      $(".please-select").text("**Please Select Item**");
       $(".please-select").show();
    }
}
else
{
if($('.js-product-selected').length >=1)
$("#minorder").show();
}
  });
  $(".error").hide();  
  $("#delivery").click(function(){
     $(".subarea").slideUp();
      $(".details").slideDown();
   });
});



