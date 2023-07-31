var firebaseConfig = {
    apiKey: "AIzaSyD9p_F8xa9biymdozJzqduMjqqAyAUShPw",
    authDomain: "kwitter-7c598.firebaseapp.com",
    databaseURL: "https://kwitter-7c598-default-rtdb.firebaseio.com",
    projectId: "kwitter-7c598",
    storageBucket: "kwitter-7c598.appspot.com",
    messagingSenderId: "384783585728",
    appId: "1:384783585728:web:66be25c0197f91f837f825"
  };
  firebase.initializeApp();
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
  }

  function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";snapshot.foreach(function (childSnapshot){
            childSnapshot.key;childData = childSnapshot.val();
            if (childKey != "purpose")
            {
                firebase_message_id = childkey;
                message_data = childData;
            }
        })
    })
  }
  getData();