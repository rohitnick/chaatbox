$(document).ready(function(){
  $('#details').submit(function(e){
    e.preventDefault();

    $(".details").slideUp();
    var date=new Date();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var time=hour + ":" + minute;
    var name=document.getElementById("name-input").value;
    var total=$('#total').html();
    var mobile=document.getElementById("mobile-input").value;
    var email=document.getElementById("email-input").value;
    var address=document.getElementById("address-input").value;
    var delivery_area = $('#area :selected').text();
    $(".confirmtotal").html("Your order Total is &#8377 " + total);
    $.ajax({

      type: "POST",
      url: 'create',
      dataType: 'json',
      data: $.param({details: {customers_name: name,customers_street_address: address,customers_telephone: mobile,
                     customers_email_address: email,order_total: total,deliveryarea: delivery_area,time: time}}),
      success: function ()
      {
        $('#confirmed').click();
      },
      error: function ()
      {
        $('#error_in_order').click();
      }
    });



    var slack_url =  $('#js-slack-url').html().trim();
    var post_data = "Name: "+n+"\\nAddress: "+a+"\\nPhone: "+m+"\\nEmail:"+e+"\\nTotal: "+t+"\\nArea: "+q+"\\nTime: "+time+"\\nProducts: "+products;

    $.ajax({
      type: "POST",
      url: slack_url,
      dataType: 'json',
      data: 'payload={"channel": "#new-orders", "username": "'+m+'", "text": "'+post_data+'", "icon_emoji": ":ghost:"}',
      success: function ()
      {
        alert('success');
      }
    });
  });
});
