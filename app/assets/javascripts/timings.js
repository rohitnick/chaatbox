function timings()
{
var date=new Date();
var d=date.getHours();

if(d<12 || d>21)
{
$("#time").html("<b>Note: </b> Though we will recieve your order, we deliver from 12 am to 10 pm. <br>We will call you as soon as we open.");
}
}
