var A2LA = "<h4>A2LA Certified</h4><p>This certifies that the package testing facility listed below has met the requirements for Certified Laboratory status established by the International Safe Transit Association (ISTA).</p>";

var UL = "<h4>UL & Verizon Certified</h4><p>Underwriters Laboratories Inc., certified as an Independent Test Laboratory (ITL) under the Verizon Independent Testing Laboratories NEBS Testing Certification Program ( NEBS-TCP ), has assessed Quanta Laboratories and has found it to be in conformance with the program requirements for a UL Subcontractor Laboratory ( SCL ). Quanta Laboratories is qualified to perform Underwriters Laboratories' supervised NEBS testing in accordance with the Verizon NEBS Testing Certification Witnessing Program ( NEBS-TCWP ) Requirements.</p>";

var ISTA = "<h4>ISTA Certified</h4><p>This certifies that the package testing facility listed below has met the requirements for Certified Laboratory status established by the International Safe Transit Association (ISTA).</p>";

$(document).ready(function(){
	$(".img-container").mouseenter(function(){
		  $(this).find(".hover").fadeIn("200");
		});
		$(".img-container").mouseleave(function(){
		  $(this).find(".hover").fadeOut("200");
		});
		
	/*$("#A2LA").mouseover(function(){
		$("#content").html(A2LA);
		$("#A2LA").css("background-color","#eeeeee");
	});
	$("#A2LA").mouseleave(function(){
		$("#content").html("");
		$("#A2LA").css("background-color","white");
	});
	$("#UL").mouseover(function(){
		$("#content").html(UL);
		$("#UL").css("background-color","#eeeeee");
	});
	$("#UL").mouseleave(function(){
		$("#UL").css("background-color","white");
		$("#content").html("");
	});
	$("#ISTA").mouseover(function(){
		$("#ISTA").css("background-color","#eeeeee");
		$("#content").html(ISTA);
	});
	$("#ISTA").mouseleave(function(){
		$("#ISTA").css("background-color","white");
		$("#content").html("");
	});*/
});
