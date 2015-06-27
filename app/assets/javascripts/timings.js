function timings()
{
var date=new Date();
var d=date.getHours();

if(d<11 || d>21)
{
$("#time").html("<b>Note: </b> Though we have recieved your order, we deliver from 11 am to 10 pm. <br>We will call you as soon as we open.");
}
}
