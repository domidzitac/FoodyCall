var signupBtn = document.getElementById("signupBtn");
const form = document.getElementById("add-user");



function submitClick() {
	console.log(form)
  var collection = firebase.firestore().collection('Users');
  console.log(document.getElementById("firstnamesignup").value)
  
  var user = firebase.auth().currentUser
  console.log('i am here')
  console.log(user)

 //  collection.add({
	// b: "b",
 //    FirstName: form.firstnamesignup.value,
 //    LastName: form.lastnamesignup.value,
 //    UserName: form.usernamesignup.value,
	// ZIP: Number(form.zipsignup.value),
	// CookRating: 4,
	// EatRating: 3,
	// CookEventsN: 0,	
	// EatEventsN: 0
 //  });


  // return collection.ref('/users/' + user.uid).once('value').then(function(snapshot) {
  // var email = (snapshot.val() && snapshot.val().email) || 'NoEmail';
  // var UserName = (snapshot.val() && snapshot.val().UserName) || 'NoUserName';
  // var uid = (snapshot.val() && snapshot.val().UserID) || 'NoID';
  // // ...
  // });

  collection.doc(user.uid).set({
      UserID: user.uid,
      email: user.email,
      UserName: user.displayName,

      Pipi : 100,
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

  // go to main
  window.location.replace("main.html")

}


