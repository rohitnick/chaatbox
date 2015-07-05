$(document).ready(function(){

$("#couponbox").hide();
 $(".couponerror").hide();




var ckbox = $('#checkboxcoupon');
    $('#checkboxcoupon').on('click',function () {
var tot=$('#total').html();
        if (ckbox.is(':checked')) {
         if(tot<200)
{
 $(".couponerror").show();
}
else
{
$("#couponbox").show();
}
        }else
{
$("#couponbox").hide();
 $(".couponerror").hide();
}
});

});
