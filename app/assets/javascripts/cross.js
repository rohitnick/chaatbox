$(document).ready(function(){
$('#line-items').on('click','.cross',function(){
	var id=$(this).attr('id');
	id=id.substring(5);
	var x=$('#num' + id).val();
	var y=$('#prices' + id).html();
	$('#line-items #tag' + id).remove();
	$('#' + id).removeClass('js-product-selected');
	$('#' + id).find('.js-product-details').removeClass('bg-green');
	$('#total').html($('#total').html()-(x*y));
        $("#minorder").hide();
	$.ajax({
		type: "POST",
    url: 'remove_line_item_from_order',
    dataType: 'json',
    data: $.param({line_item: {product_id: id}})
	});
});

$('#line-items').on('click','.minus',function(e){
var id=$(this).attr('id');
id=id.substring(5);
var x=$('#num' + id).val();
var y=$('#prices' + id).html();
var total_order=$('#total').html();
if(x!=1)
{
z=x-1;
$('#num' + id).val(z);
$('#pricess' + id).html(z*y);
$('#total').html(total_order-y);
$("#minorder").hide();
$.ajax({
	      type: "POST",
	      url: 'update_line_item_for_order',
	      dataType: 'json',
	      data: $.param({update_line_item: {product_id: id,quantity: z}})
	    });
}
});

$('#line-items').on('click','.plus',function(e){
var id=$(this).attr('id');
id=id.substring(4);
var x=$('#num' + id).val();
$('#num' + id).val(x-(-1));
var y=$('#prices' + id).html();
$('#pricess' + id).html((x-(-1))*y);
var total_order=$('#total').html();
$('#total').html(total_order-(-y));
var new_quantity=x-(-1);
$("#minorder").hide();
$.ajax({
	      type: "POST",
	      url: 'update_line_item_for_order',
	      dataType: 'json',
	      data: $.param({update_line_item: {product_id: id,quantity: new_quantity}})
	    });

});
});

