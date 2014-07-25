$(document).ready(function(){
	$("#submit").click(function(){
		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var msg = $("#message").val();

		var data = { Name: name, Email: email, Phone: phone, Msg: msg};


		if(!valid(name,email,phone,msg)){
			alert("Insertion Failed!!");
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
				$('form').html('<h2>Thank you!</h2>');
			})
			.fail(function() {
			    alert( "error" );
			});

		}
	});
});

function valid(name,email,phone,msg){
//	alert(test(/\b[A-Z.,_-]/,name) 
		+"  "+ test(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,email)
		+"  "+ test(/\d{3}-\d{3}-\d{4}|\d{10}|\d{3}-\d{7}/,phone)
		+"  "+ (name&&email&&phone&&msg));

	return  test(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,email)
		&& test(/\d{3}-\d{3}-\d{4}|\d{10}|\d{3}-\d{7}/,phone)
		&& (name&&email&&phone&&msg);
}

function test(regex,subject){
	return regex.test(subject);
}
