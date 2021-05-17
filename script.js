$(document).ready(function(){
	$(".plus").click(function(){
		$("p").slideToggle(1000);
		if ( $(".plus").html() == "+") 
		{
			$(".plus").html("-");
		}
		else{
			$(".plus").html("+");
		}
	});
});