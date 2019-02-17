var mainApp = {};
var textBox = document.getElementById("userfield");
var collection = firebase.firestore().collection('Users');

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
      // Create new User in the Firecloud database
      collection.doc(uid).set({
      UserID: uid,
      email: user.email,
      UserName: user.displayName
      });
    }
  }).catch((fail) => {
    // Either
    // 1. failed to read due to some reason such as permission denied ( online )
    // 2. failed because document does not exists on local storage ( offline )
  });

    

    
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

