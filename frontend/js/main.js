$(document).ready(function(){

	$('.search-button').click(function(){
		$('.search-box').toggle('fast');
	});

	$('.quantity').keyup(function() {
	   var quantity = $(".quantity input").text();
	   var price = $(".price .value").val();

	   var total = quantity * price;

	   $(".price .value").html(total); // sets the total price input to the quantity * price
	});

});