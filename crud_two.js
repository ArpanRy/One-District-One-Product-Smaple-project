import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/Database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
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
    apiKey: "AIzaSyBX7BJGUtgeThdIe5xaIQu0jM5e97_3hfg",
    authDomain: "odopstatistics.firebaseapp.com",
    databaseURL: "https://odopstatistics-default-rtdb.firebaseio.com",
    projectId: "odopstatistics",
    storageBucket: "odopstatistics.appspot.com",
    messagingSenderId: "82404447520",
    appId: "1:82404447520:web:49aca7b8bb8f2888fd7345",
    measurementId: "G-C0E2P0JHL8"
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

console.log(app.name);


var NameV, emailV, phoneV, addressV, stateV, districtV, product_nameV, descriptionV, shop_nameV, uidV;
var product_imageV;

function readForm() {
    NameV = document.getElementById("nameff").value;
    emailV = document.getElementById("emailff").value;
    phoneV = document.getElementById("phoneff").value;
    addressV = document.getElementById("addressff").value;
    // stateV = document.getElementById("state").value;
    districtV = document.getElementById("product_districtff").value;
    shop_nameV = document.getElementById("shop_nameff").value;
    // descriptionV = document.getElementById("description").value;
    // product_nameV = document.getElementById("product_name").value;
    // product_imageV = document.getElementById("product_image").value;


    console.log(NameV, emailV, phoneV, addressV, districtV, shop_nameV);
}


document.getElementById("btnff").onclick = function() {
    readForm();
    const db = getDatabase();
    const postListRef = ref(db, "allProducts/" + emailV + "/" + districtV + "/" + "products/");
    //const newKey = push(postListRef).key();
    const newPostRef = push(postListRef);
    set(newPostRef, {
        email: emailV,
        district: districtV,
        price: priceV,
        address: addressV,
        shop_name: shop_nameV,
        // product_img: product_imageV,
        // product_img: "d_img/images/handloom.jpg",
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

    // document.getElementById("name").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("phone").value = "";
    // document.getElementById("address").value = "";
    // document.getElementById("state").value = "";
    // document.getElementById("district").value = "";
    // document.getElementById("product_name").value = "";
    // document.getElementById("product_image").value = "";
    // document.getElementById("description").value = "";
    // document.getElementById("price").value = "";

};