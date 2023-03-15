import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { firebase }  from "https://www.gstatic.com/firebasejs/9.9.3/firebase.js";

var firebaseConfig = {
    apiKey: "AIzaSyC38Jj6ixNbj-qXqgcMJDJlvLgOmYi2gx0",
    authDomain: "odopdb.firebaseapp.com",
    databaseURL: "https://odopdb-default-rtdb.firebaseio.com",
    projectId: "odopdb",
    storageBucket: "odopdb.appspot.com",
    messagingSenderId: "499960531172",
    appId: "1:499960531172:web:e9dda967be057509cfc4f1"
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    //var uid = user.uid;
    console.log("Signed in");
    // ...
  } else {
    // User is signed out
    console.log("Not Signed in");
    // ...
  }
});

