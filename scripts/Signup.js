var signupBtn = document.getElementById("signupBtn");
var gotoSignupBtn = document.getElementById("gotoSignupBtn");
const form = document.getElementById("add-user");



function submitClick() {
	console.log(form)
  var collection = firebase.firestore().collection('Users');
  console.log(document.getElementById("firstnamesignup").value)
  collection.add({
	b: "b",
    FirstName: form.firstnamesignup.value,
    LastName: form.lastnamesignup.value,
    UserName: form.usernamesignup.value,
	ZIP: Number(form.zipsignup.value),
	CookRating: 4,
	EatRating: 3,
	CookEventsN: 0,	
	EatEventsN: 0
});
  console.log(form.firstnamesignup.value)
}


function pullSignUp() {
  document.getElementById("signupBtn").style.visibility="visible";
  document.getElementById("gotoSignupBtn").style.visibility="hidden";
  document.getElementById("container_demo").style.visibility="visible";
  document.getElementById("ListUsers").style.visibility="hidden";
}