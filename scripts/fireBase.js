  var app_firebase = {};
  (function() {
 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBEGgFPYFUUskTcmlFjBXQC3l5SU1xBbw8",
    authDomain: "friendlyeats-dd13c.firebaseapp.com",
    databaseURL: "https://friendlyeats-dd13c.firebaseio.com",
    projectId: "friendlyeats-dd13c",
    storageBucket: "friendlyeats-dd13c.appspot.com",
    messagingSenderId: "1009115611963"
  };
  firebase.initializeApp(config);

  app_firebase = firebase;
  })()