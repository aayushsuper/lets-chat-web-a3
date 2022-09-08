var firebaseConfig = {
  apiKey: "AIzaSyBLiEjE52Vn5HnRbiVa46k6vEiif7xisLo",
  authDomain: "kwitter-83183.firebaseapp.com",
  databaseURL: "https://kwitter-83183-default-rtdb.firebaseio.com",
  projectId: "kwitter-83183",
  storageBucket: "kwitter-83183.appspot.com",
  messagingSenderId: "786716119809",
  appId: "1:786716119809:web:b2bf0e6e1817d25de2c100"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function add_user(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    console.log("user name" + user_name);
    window.location = "chattery_room.html";
}