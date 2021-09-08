const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

var nameSignup = document.getElementById('nameSignup');
var emailSignup = document.getElementById('emailSignup');
var passSignup = document.getElementById('passSignup');
var emailSignin = document.getElementById('emailSignin');
var passSignin = document.getElementById('passSignin');

var SignupBtn = document.getElementById('SignupBtn');
var SigninBtn = document.getElementById('SigninBtn');

var inputs = document.getElementsByClassName('input');
var flag = false;
var index = 0;
var users = [];
if (localSbookMark = JSON.parse(localStorage.getItem("usersList")) != null) {
	users = JSON.parse(localStorage.getItem("usersList"));
}

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

SignupBtn.addEventListener('click', function () {
	var user = {
		name: nameSignup.value,
		email: emailSignup.value,
		passWord: passSignup.value
	}
	users.push(user);
	localStorage.setItem("usersList", JSON.stringify(users));
	clrForm();
});

SigninBtn.addEventListener('click', function () {
	var email = emailSignin.value;
	var pass = passSignin.value;
	for (let i = 0; i < users.length && flag == false; ++i) {
		if (email == users[index].email && pass == users[index].passWord) {
			myWindow = window.open("file:///D:/certifications/route/Assigments/Assigment%209/HTML/Home.html");
			flag = true;
			clrForm();
			window.close();
			index = i;
		}
	}
	document.getElementById("personName").innerHTML = "Welcome " + users[i].name;
});
function clrForm() {
	for (var i = 0; i < inputs.length; ++i) {
		inputs[i].value = "";
	}
};


