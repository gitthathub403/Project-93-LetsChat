
const firebaseConfig = {
      apiKey: "AIzaSyCGLFagpRae4TFoF94WQQsie3wp3iJ95-0",
      authDomain: "kwitter-a58bc.firebaseapp.com",
      databaseURL: "https://kwitter-a58bc-default-rtdb.firebaseio.com",
      projectId: "kwitter-a58bc",
      storageBucket: "kwitter-a58bc.appspot.com",
      messagingSenderId: "658770512408",
      appId: "1:658770512408:web:d9a912ffbee899de38d16d",
      
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!!";
function addRoom(){
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
} 


function getData() {firebase.database().ref("/").on('value', 
function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_names - " + Room_names);
      row= "<div class='room_name' id=" +Room_names+ " onclick='redirectToRoomName(this.id)' >#" + Room_names+ "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName() {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}



