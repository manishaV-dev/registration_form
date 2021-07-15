
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit' , (event) => {
	event.preventDefault(); //by default click krne pr ? na aaye mtlb  submit na ho isliye use krenge

	validate();
})

const sendData = (usernameVal, sRate, count) =>{
	if(sRate === count){
		// alert('Registration Successful.');
		swal("Welcome ", "Registration Successful!", "success");

		location.href = `reg.html?username=${usernameVal}`
	}
}

const successMsg = (usernameVal) =>{
	let formCon = document.getElementsByClassName('form-control');
	var count = formCon.length - 1;
	
	for(var i=0  ; i<formCon.length; i++){
		if(formCon[i].className === "form-control success"){
			var sRate = 0 + i;
			sendData(usernameVal, sRate, count);
		}
		else{
			return false;
		}
	}
}

const isEmail = (emailVal) => {
	var atSymbol = emailVal.indexOf("@");
	if(atSymbol < 1) return false;
	var dot = emailVal.lastIndexOf(".");
	if(dot <= atSymbol + 2) return false;   //means @ k baad atleat 2 value chahiye tbhi . use kr skte h
	if(dot === emailVal.length -1) return false;
	return true;
}

// define the validate function

const validate = () =>{
	//trim function is used to delete or remove the white space from starting and ending
	const usernameVal = username.value.trim();
	const emailVal = email.value.trim();
	const phoneVal = phone.value.trim();
	const passwordVal = password.value.trim();
	const cpasswordVal = cpassword.value.trim();

	// validate username

	//if username id blank

	if(usernameVal === ""){
		setErrorMsg(username, 'username cannot be blank');
	}
	else if(usernameVal.length <=2){
		setErrorMsg(username, 'username should be containe atleast 3 character');
	}
	else{
		setSuccessMsg(username);
	}


	//validate email
		
	if(emailVal === ""){
		setErrorMsg(email, 'email cannot be blank');
	}
	else if(!isEmail(emailVal)){
		setErrorMsg(email, 'Not a valid email');
	}
	else{
		setSuccessMsg(email);
	}

	//validate phone

	if(phoneVal === ""){
		setErrorMsg(phone, 'phone number cannot be blank');
	}
	else if(phoneVal.length!=10){
		setErrorMsg(phone, 'Not a valid phone number');
	}
	else{
		setSuccessMsg(phone);
	}

	//validate password

	if(passwordVal === ""){
		setErrorMsg(password, 'password cannot be blank');
	}
	else if(passwordVal <= 5){
		setErrorMsg(password, 'password should be atleast 6 character long.');
	}
	else{
		setSuccessMsg(password);
	}


	if(cpasswordVal === ""){
		setErrorMsg(cpassword, 'confirm password cannot be blank');
	}
	else if(passwordVal != cpasswordVal){
		setErrorMsg(cpassword, 'password does not matched.');
	}
	else{
		setSuccessMsg(cpassword);
	}

	successMsg(usernameVal);


}

function setErrorMsg(input, errormsgs){
	const formControl = input.parentElement;  //to know which input we clicked on.
	const small = formControl.querySelector('small');
	//to add class error in div which class is form-contrl
	formControl.className = "form-control error";
	small.innerText = errormsgs;
}
 //input isliye lenge qki pta nnhi h kis input me successmsg show krwana h mtlb sb input tag aa jayega jo 
 //successfully data input hoga usme show krega. 


function setSuccessMsg(input){
	const formControl = input.parentElement;
	formControl.className = "form-control success";

}

