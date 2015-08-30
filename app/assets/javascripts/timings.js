function timings()
{
var date=new Date();
var d=date.getHours();

if(d<15 || d>21)
{
$("#time").html("<b>Note: </b> Though we will recieve your order, we will deliver today from 3 pm to 10 pm. <br>We will call you as soon as we open.");
}
}
