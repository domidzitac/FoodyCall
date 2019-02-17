var mainApp = {};
var textBox = document.getElementById("userfield");
var collection = firebase.firestore().collection('Users');
var gotoSignupBtn = document.getElementById("gotoSignupBtn");

(function(){
  var firebase = app_firebase;
  var uid = null;

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    uid = user.uid;
    document.getElementById("userfield").innerHTML = "This is my token: ".concat(uid);
    console.log(uid)
    //console.log(user)
    //console.log(firebase.auth().AdditionalUserInfo().isNewUser)

    // Create a reference to the cities collection
    var UsersRef = firebase.firestore().collection("Users");

    var doc = UsersRef.doc(uid);
    doc.get().then((docData) => {
    if (docData.exists) {
      console.log('User already there')
    } else {
      console.log('User not there')
      // Create new User in the Firecloud database
      collection.doc(uid).set({
      UserID: uid,
      email: user.email,
      UserName: user.displayName
      });
      console.log('try new window')

      // stall
      //var i;
      //for (i = 0; i < 1000000; i++) { 
      //  var j = 2*i;
      //  console.log(j)
      //}
      // move user to thr sign-up menu, to input info
      window.location.replace("signup.html");
      return;
      console.log('in new window?')

    }
  }).catch((fail) => {
    // Either
    // 1. failed to read due to some reason such as permission denied ( online )
    // 2. failed because document does not exists on local storage ( offline )
  });

    

    
  }else{

  	window.location.replace("main.html")

  	uid = null;
  }
  });

  function logout(){
    firebase.auth().signOut();
  };
  

  mainApp.logout = logout;

})()


