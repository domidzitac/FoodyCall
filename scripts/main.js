var mainApp = {};
(function(){
  var firebase = app_firebase;
  var uid = null;

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    uid = user.uid;
  }else{
  	window.location.replace("login.html")
  	uid = null;
  }
  });

  function logout(){
    firebase.auth().signOut();
  };
  

  mainApp.logout = logout;

})()

