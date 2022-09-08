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

function welcome(){
user_name = localStorage.getItem("user_name");
document.getElementById("welcome_message").innerHTML = "Welcome! " + user_name;
}


function add_room(){
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "add room name"
    });
    window.location = "chattery_chat_page.html";
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr style='width: 70%;'>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function logout(){
    window.location = "index.html";
}