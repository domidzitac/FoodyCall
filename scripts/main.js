var mainApp = {};
var textBox = document.getElementById("userfield");

(function(){
  var firebase = app_firebase;
  var uid = null;

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    uid = user.uid;
    document.getElementById("userfield").innerHTML = "This is my token: ".concat(uid);
    console.log(uid)
    console.log
    
  }else{
    console.log("2")
  	window.location.replace("index.html")
  	uid = null;
  }
  });

  function logout(){
    firebase.auth().signOut();
  };
  

  mainApp.logout = logout;

})()

