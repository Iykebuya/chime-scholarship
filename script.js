var mydropdown= document.getElementById('dropdown');
var mylogin= document.getElementById('login');
var message= document.getElementById('message');
var myform= document.forms.myForm;
var formemail= myform.Email;

myform.onsubmit= function(){
	if (formemail.value== "") {
		message.innerHTML= "Enter Your Email Address";
		return false;
	}else {
		message.innerHTML= "";
		return true;
	}
}


