$(document).ready(function(){
	$("#contactForm").submit(function(e){
		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var msg = $("#message").val();
		
		var fromUS = $("#fromUS").val();

		var data = { Name: name, Email: email, Phone: phone, Msg: msg, FromUS: fromUS};
		
		if(!valid(name,email,phone,msg,fromUS)){
			$('.contact-title').html('Something is wrong!');
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			$.ajax({
				type:"POST",
				url:"form.php",
				data: data,
				async: false
			})
			.done(function(data) {
				$('#contactForm')[0].reset(); //To reset form fields
				$('.contact-title').html('Thank you!');
			})
			.fail(function() {
				$('#contactForm')[0].reset(); //To reset form fields
			    alert( "error" );
			});
		}
		e.preventDefault();
	});
});

function valid(name,email,phone,msg,fromUS){
/*	alert(test(/\b[A-Z.,_-]/,name) 
		+"  "+ test(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,email)
		+"  "+ test(/\d{3}-\d{3}-\d{4}|\d{10}|\d{3}-\d{7}/,phone)
		+"  "+ (name&&email&&phone&&msg));
*/
	$("#email").removeClass("has-error");
	$("#phone").removeClass("has-error");
	$("#name").removeClass("has-error");
	$("#message").removeClass("has-error");

	if(!name){
		$("#name").addClass("has-error");
	}
	
	if(!msg){
		$("#message").addClass("has-error");
	}
	
	if(!test(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,email)){
		$("#email").addClass("has-error");
	}
	
	if(!test(/\d{3}-\d{3}-\d{4}|\d{10}|\d{3}-\d{7}|\(\d{3}\)\d{7}/,phone) && fromUS){
		$("#phone").addClass("has-error");
	}
	
	if(fromUS){
		return  test(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,email)
			&& test(/\d{3}-\d{3}-\d{4}|\d{10}|\d{3}-\d{7}|\(\d{3}\)\d{7}/,phone)
			&& (name&&email&&phone&&msg);

	} else{
		return  test(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,email)
			&& (name&&email&&phone&&msg);
	}
}

function test(regex,subject){
	return regex.test(subject);
}
