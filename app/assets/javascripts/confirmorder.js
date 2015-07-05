/*$(document).ready(function () {
$(".tomorrow").hide();
$("#hournull").hide();
$("#minnull").hide();
    var ckbox = $('#checkbox');

    $('input').on('click',function () {
        if (ckbox.is(':checked')) {
            $("#hour").hide();
             $("#minute").hide();
        } else
{
  $("#hour").show();
             $("#minute").show();
}
    });
$("#finish").show();

var d=new Date();
var hours=d.getHours();
var minutes=d.getMinutes();
if(hours>11 && hours<22)
{
$("#hour11").hide();
$("#hournull").hide();
}
if(hours>21)
{
$(".tomorrow").show();
$(".check").hide();
}
if(hours<11)
{
$(".check").hide();
}

if(hours>12 && hours<22)
{
$("#hour12").hide();
$("#hournull").hide();
}
if(hours>13 && hours<22)
{
$("#hour13").hide();
$("#hournull").hide();
}
if(hours>14 && hours<22)
{
$("#hour14").hide();
$("#hournull").hide();
}
if(hours>15 && hours<22)
{
$("#hour15").hide();
$("#hournull").hide();
}
if(hours>16 && hours<22)
{
$("#hour16").hide();
$("#hournull").hide();
}if(hours>17 && hours<22)
{
$("#hour17").hide();
$("#hournull").hide();
}if(hours>18 && hours<22)
{
$("#hour18").hide();
$("#hournull").hide();
}if(hours>19 && hours<22)
{
$("#hour19").hide();
$("#hournull").hide();
}if(hours>20 && hours<22)
{
$("#hour20").hide();
$("#hournull").hide();
}if(hours>21 && hours<22)
{
$("#hour21").hide();
$("#hournull").hide();
}
$("#errorfortime").hide();

var selectedhour=$('#hour :selected').text();
var selectedminute=$('#hour :selected').text();

var totalrecenttime=hours*60+minutes;
var selectedtotaltime=selectedhour*60+selectedminute;
if(totalrecenttime-selectedtotaltime<44)
{
$("#errorfortime").show();
$("#finish").hide();
}

if(selectedhour=="--")
{
$("#errorfortime").show();
$("#finish").hide();
}
});*/
