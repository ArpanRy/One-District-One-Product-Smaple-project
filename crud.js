import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, set, ref, push } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

// import { set, ref } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyC38Jj6ixNbj-qXqgcMJDJlvLgOmYi2gx0",
//     authDomain: "odopdb.firebaseapp.com",
//     databaseURL: "https://odopdb-default-rtdb.firebaseio.com",
//     projectId: "odopdb",
//     storageBucket: "odopdb.appspot.com",
//     messagingSenderId: "499960531172",
//     appId: "1:499960531172:web:e9dda967be057509cfc4f1"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

//import { initializeApp } from "firebase/app";

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

console.log(app.name);


var NameV, emailV, phoneV, addressV, stateV, districtV, product_nameV, descriptionV, priceV, uidV;
var product_imageV;

function readForm() {
    NameV = document.getElementById("name").value;
    emailV = document.getElementById("email").value;
    phoneV = document.getElementById("phone").value;
    addressV = document.getElementById("address").value;
    stateV = document.getElementById("state").value;
    districtV = document.getElementById("district").value;
    priceV = document.getElementById("price").value;
    descriptionV = document.getElementById("description").value;
    product_nameV = document.getElementById("product_name").value;
    product_imageV = document.getElementById("product_image").value;


    console.log(NameV, emailV, phoneV, addressV, stateV, districtV, product_nameV, product_imageV, priceV, descriptionV);
}


document.getElementById("insert").onclick = function() {
    readForm();
    const db = getDatabase();
    const postListRef = ref(db, "allProducts/" + stateV + "/" + districtV + "/" + "products/");
    //const newKey = push(postListRef).key();
    const newPostRef = push(postListRef);
    set(newPostRef, {
        state: stateV,
        udi: newPostRef.key,
        email: emailV,
        district: districtV,
        price: priceV,
        description: descriptionV,
        product_name: product_nameV,
        // product_img: product_imageV,
        product_img: "d_img/images/handloom.jpg",
    });

    /*getDatabase()
        .ref("states/" + stateV)
        .set({
            state: stateV,
            email: emailV,
            district: districtV,
            product_nam: product_nameV,
            product_img: product_imageV,
        });*/
    alert("Data Inserted");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("state").value = "";
    document.getElementById("district").value = "";
    document.getElementById("product_name").value = "";
    document.getElementById("product_image").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";

};