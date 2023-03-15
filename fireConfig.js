import { initializeApp } from "firebase/app";

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
const defaultProject = initializeApp(firebaseConfig);

console.log(defaultProject.name);  // "[DEFAULT]"