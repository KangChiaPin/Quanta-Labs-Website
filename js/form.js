$(document).ready(function(){
	$("#submit").click(function(){
		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var msg = $("#message").val();

		var data = { Name: name, Email: email, Phone: phone, Msg: msg};


		if(name ==''|| email==''|| phone==''|| msg==''){
			alert("Insertion Failed Some Fields are Blank....!!");
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
