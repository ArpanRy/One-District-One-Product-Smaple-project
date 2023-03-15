

// import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

// var firebaseConfig = {
//     apiKey: "AIzaSyC38Jj6ixNbj-qXqgcMJDJlvLgOmYi2gx0",
//     authDomain: "odopdb.firebaseapp.com",
//     databaseURL: "https://odopdb-default-rtdb.firebaseio.com",
//     projectId: "odopdb",
//     storageBucket: "odopdb.appspot.com",
//     messagingSenderId: "499960531172",
//     appId: "1:499960531172:web:e9dda967be057509cfc4f1"
// };

// const app = initializeApp(firebaseConfig);

// const db = getDatabase();

//not needed begins..
/*const reference = ref(db, "allProducts/" + "Punjab/" + "Chandigarh/" + "products/");
var index=0;

//getting data from firebase realtime db
onValue(reference, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    console.log(childKey+", "+JSON.stringify(childData));

    //try
    const product_grid = document.getElementById("top_products");
    var product_demo = document.getElementById("top_product_demo");
    const clone = product_demo.cloneNode(true);
    clone.id = "product_" + index++;
    clone.hidden = false;

    clone.getElementsByTagName("h4")[0].innerHTML = childData.product_nam;
    clone.getElementsByTagName("h6")[0].innerHTML = "<br></br>"+19000;//childData.price;
    clone.getElementsByTagName("p")[0].innerHTML = "childData.description" + "<br></br>" + "State : " + childData.state + " District : " + childData.district;
    clone.getElementsByTagName("img")[0].src = childData.product_img;
    product_grid.appendChild(clone);
  });
}, {
  onlyOnce: true
});*/

// not needed end

// var proname, emailid;



// const reference = ref(db, "allProducts/");
// var index = 0;
// //document.getElementById("myform").style.display="none";



// function setData(product_name, district, uid) {
//     document.getElementById("uid").value = uid;
//     document.getElementById("product_namef").value = product_name;
//     document.getElementById("product_districtf").value = district;
//     //document.getElementById("product_emailf").value = product_email;
//    // console.log(email+", "+);
// }

// //getting data from firebase realtime db
// onValue(reference, (snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//         const state = childSnapshot.key;
//         //const childData = childSnapshot.val();
//         console.log(state);

//         const ref2 = ref(db, "allProducts/" + state + "/");

//         onValue(ref2, (snap2) => {
//             snap2.forEach((childSnap2) => {
//                 const dist = childSnap2.key;

//                 const ref3 = ref(db, "allProducts/" + state + "/" + dist + "/" + "products/");

//                 onValue(ref3, (snap3) => {
//                     snap3.forEach((childSanp3) => {
//                         const childData = childSanp3.val();

//                         //try
//                         const product_grid = document.getElementById("top_products");
//                         var product_demo = document.getElementById("top_product_demo");

//                         const clone = product_demo.cloneNode(true);
//                         clone.id = "product_" + index++;
//                         clone.hidden = false;
//                         clone.getElementsByTagName("h4")[0].innerHTML = childData.product_name;
//                         clone.getElementsByTagName("h6")[0].innerHTML = "<br></br>" + "Rs " + childData.price;//childData.price;
//                         clone.getElementsByTagName("p")[0].innerHTML = childData.description + "<br></br>" + "State : " + childData.state + "<br></br>" + " District : " + childData.district;
//                         clone.getElementsByTagName("img")[0].src = childData.product_img;

//                         clone.getElementsByTagName("button")[0].value = childData.udi;
//                         //cheking on click data



//                         clone.getElementsByTagName("button")[0].addEventListener('click', function() {

//                             //make form visible all_products
//                             document.getElementById("myForm").style.display = "block";
//                             document.getElementById("all_products").style.display = "none";


                          
//                           //send data to the form
//                             setData(childData.product_name, childData.district, childData.udi);
            
//                         });


//                         product_grid.appendChild(clone);
//                     });
//                 });
//             });
//         });

//     });
// }, {
//     onlyOnce: true
// });


// function openForm() {
//     document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//     console.log("called closeform");
//     document.getElementById("myForm").style.display = "none";
// }



// // do {
// console.log("Koi");
// console.log(emailid);
// console.log(proname);
// // } while (f == 0);

// function sendEmail() {

//     console.log(emailid);
//     console.log(proname);
//     console.log('Ji hello')
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "royshashwat55@gmail.com",
//         Password: "Gmail@01",
//         To: 'shashwatroy.documents@gmail.com',
//         From: document.getElementById("emailf").value,
//         Subject: "Order form!!",
//         Body: "Name: " + document.getElementById("namef").value
//             + "<br> Email: " + document.getElementById("emailf").value +
//             "<br> Phone no: " + document.getElementById("phonef").value +
//             "<br> Address: " +
//             document.getElementById("addressf").value
//             + "<br> Product Name: " +
//             document.getElementById("product_namef").value
//             + "<br> Quantity : " + document.getElementById("quantityf").value
//     }).then(
//         message => alert(message)
//     );
// }

function showVideo(){
  document.getElementById('popup').style.display='block';
  document.getElementById('all_products').style.display='none';
  //document.getElementById('all_products').style.display='none';
}

document.getElementById('closebtn').addEventListener('click',()=>{
  document.getElementById('popup').style.display='none';
     document.getElementById('videopopup').style.display='none';//top_product_demo
  document.getElementById('all_products').style.display='block';
      return false;
});


window.onload = function() {
    const top_products = [];
    districts_products.states.forEach((state) => {
        state.districts.forEach((district) => {
            const prod_obj = JSON.parse(JSON.stringify(district.products[0]));
            prod_obj.district = district.district;
            prod_obj.state = state.state;
            top_products.push(prod_obj);
        });
    });
    const product_grid = document.getElementById("top_products");
    top_products.map((product, index) => {
        var product_demo = document.getElementById("top_product_demo");
        const clone = product_demo.cloneNode(true);
        clone.id = "product_" + index;
        clone.hidden = false;
        // if ((index + 1) % 5 == 0) {
        //   clone.className = clone.className + " dev";
        // }
        // else if ((index + 1) % 2 == 0) {
        //   clone.className = clone.className + " des";
        // }
        // else if ((index + 1) % 3 == 0) {
        //   clone.className = clone.className + " gra";
        // }
        clone.getElementsByTagName("h4")[0].innerHTML = product.name;
        clone.getElementsByTagName("h6")[0].innerHTML = product.price;
        clone.getElementsByTagName("p")[0].innerHTML = product.description + "<br></br>" + "State : " + product.state + "<br></br>"+" District : " + product.district;
        clone.getElementsByTagName("img")[0].src = product.img;
      clone.getElementsByTagName("button")[1].addEventListener('click', function() {
            showVideo();
            return false;
        });
        product_grid.appendChild(clone);
        return clone;
    });


   

        // document.getElementsByClassName('.popup-bg').on('click', function () {
        //     document.getElementsByClassName('.video-popup').slideUp('slow');
        //     return false;
        // });

        // document.getElementsByClassName('.close-btn').on('click', function () {
        //     document.getElementsByClassName('.video-popup').fadeOut('slow');
        //     return false;
        // });
  // const list = document.querySelector('.list');

  // // add a single listener on list item
  // list.addEventListener('click', clickHandler);

    return;
}

