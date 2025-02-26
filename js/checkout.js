
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");
	
	// Validate fields entered by the user: name, phone, password, and email
	[fName, fEmail, fAddress, fLastN, fPassword, fPhone].forEach(field => {
		field.classList.remove("is-invalid");
	});
	
	
	if(fName.value.length < 3 || !/^[A-Za-z]+$/.test(fName.value)){
		fName.classList.add("is-invalid");
		error++;
	}

	if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)){
		fEmail.classList.add("is-invalid");
		error++;
	}

	if(fAddress.value.length < 3){
		fAddress.classList.add("is-invalid");
		error++;
	}

	if(fLastN.value.length < 3 || !/^[A-Za-z]+$/.test(fLastN.value)){
		fLastN.classList.add("is-invalid");
		error++;
	}

	if(!/^(?=.*[A-Za-z])(?=.*\d).+$/.test(fPassword.value)){
		fPassword.classList.add("is-invalid");
		error++;
	}

	if(!/^\d+$/.test(fPhone.value)){
		fPhone.classList.add("is-invalid");
		error++;
	}


	if(error > 0){
		event.preventDefault();
		alert("Please fill all fields");
	}else{
		alert("Form processed successfully");
	}

}
