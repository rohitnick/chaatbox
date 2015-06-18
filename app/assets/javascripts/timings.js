function timings()
{
var date=new Date();
var d=date.getHours();

if(d<11 && d>22)
{
$("#time").html("<b>Note:</b>Though we will recieve your order, we <br> deliver from 11 am to 10 pm. <br>WE will call you as soon as we open again.");
}
}
