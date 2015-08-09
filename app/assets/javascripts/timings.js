function timings()
{
var date=new Date();
var d=date.getHours();

if(d<17 || d>21)
{
$("#time").html("<b>Note: </b> Though we will recieve your order, we deliver from 5 pm to 10 pm. <br>We will call you as soon as we open.");
}
}
