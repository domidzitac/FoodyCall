var signupBtn = document.getElementById("signupBtn");
var gotoSignupBtn = document.getElementById("gotoSignupBtn");

function submitClick() {
  var collection = firebase.firestore().collection('restaurants');
  return collection.add({a: "a"});
}


function pullSignUp() {
  document.getElementById("signupBtn").style.visibility="visible";
  document.getElementById("gotoSignupBtn").style.visibility="hidden";
  document.getElementById("container_demo").style.visibility="visible";
  document.getElementById("ListUsers").style.visibility="hidden";
}