$(document).ready(function(){
  $('#details').submit(function(e){
    e.preventDefault();
   
    $(".details").slideUp();
    var x=''; var q='';
    $('.line-item').each(function(i)
    {
      x=x+$(this).find('#line-item-inner').html() + '.';
      q=q+$(this).find('.num').val() + '.';
    });
    var y=x.split('.');
    var length=y.length-2;
    y.splice(length,2);
    var z=q.split('.');
    var length=z.length-2;
    z.splice(length,2);

   
    var i;
    for (i=0;i<y.length;i++)
    {
      $("#confirmname").append((i-(-1)) + "." + y[i] + "<br>");
      $("#confirmquantity").append(z[i] + "<br>");
    }
    var date=new Date();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var time=hour + ":" + minute;
    var n=document.getElementById("name-input").value;
    var t=$('#total').html();
    var t1=(($('#total').html())-($('#total').html())/10);
    t1=Math.round(t1);
    var t2=(($('#total').html())-($('#total').html())/5);
    t2=Math.round(t2);
    var m=document.getElementById("mobile-input").value;
    var e=document.getElementById("email-input").value;
    var a=document.getElementById("address-input").value;
    var coup=document.getElementById("couponbox").value;
        coup=coup.toUpperCase();
 var payable=t;
    /*if(t>=200 && coup=="CBW20")
     {
    $(".discounttotal").html("You have to pay  &#8377 " + t2 + "" + "&nbsp after 20% discount.");
    var payable=t2;
     }*/
    var q = $('#area :selected').text();
    $(".confirmtotal").html("Your order Total is &#8377 " + t);
/*if(t >= 200 && coup!="CBW20")
{
    $(".discounttotal").html("You have to pay  &#8377 " + t1 + "" + "&nbsp after 10% discount.");
     var payable=t1;
}*/ 

    $.ajax({
      type: "POST",
      url: 'create',
      dataType: 'json',
      data: $.param({details: {customers_name: n,customers_street_address: a,customers_telephone: m,
                     customers_email_address: e,order_total: t,deliveryarea: q,time: time,payableamount: payable,product: y,quantity: z}}),
      success: function ()
{
 $('#hmm').click();
},
      error: function ()
{
 $('#errorss').click();
}
    });
  });
});
