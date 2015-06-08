$(document).ready(function(){
$('.js-product').mouseenter(function(e){
$(this).addClass('bg-green');
});
$('.js-product').mouseleave(function(e){
$(this).removeClass('bg-green');
});
});
