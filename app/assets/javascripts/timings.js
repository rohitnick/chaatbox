function timings()
{
var date=new Date();
var d=date.getHours();

if(d<11 || d>19)
{

$("#time").html("<b>Note:</b>Though we will recieve your order, we <br> deliver from 11 am to 8 pm. <br>We will call you as soon as we open again.");
}
}
