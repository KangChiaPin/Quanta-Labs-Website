<<<<<<< HEAD:js/resize.js
var width = $(window).width();

if(width>769 && !navigator.userAgent.match(/iPad/i)){
	$(".img-container").mouseenter(function(){
		  $(this).find(".hover").fadeIn("200");
=======
$(".img-container").mouseenter(function(){
	  $(this).find(".hover").fadeIn("200");
>>>>>>> parent of 97fba51... add pics:js/animation.js
	});
	$(".img-container").mouseleave(function(){
	  $(this).find(".hover").fadeOut("200");
	});
	
var width = $(window).width();

if(width<769){
	$(".resize").removeClass("col-sm-offset-2");
	//$(".resize").addClass("col-sm-4");
	$(".resize").addClass("col-sm-offset-1");
	//$(".certificate").css("height","auto");
	//$(".certificate").css("width","300px");
}

if(width<569){	
	$(".certificate").css("height","auto");	
	$(".certificate").css("width","300px");
	//$(".resize").removeClass("col-sm-2");
	//$(".resize").addClass("col-sm-offset-3");
	$(".hide-sm-width").html("<a href=\"testService.html#consulting\"><h5 class=\"footer-title\">Papers We Published</h5></a>");
	$(".text-center-sm-size").css("text-align","center");

	$(".phone-area").html("<a href=\"tel:+14089880770\"></i> Call Us Now</a>");

}
