function timings()
{
var date=new Date();
var d=date.getHours();
if(d<13 || d>21)
{
$("#time").html("<b>Note: </b> Though we will recieve your order, we deliver from 2 pm to 10 pm. <br>We will call you as soon as we open.");
}
}
