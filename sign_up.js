const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyB31h_2hLgpOk5hwlM7Mb0F5akBa51L8E4",
  authDomain: "sign-up-ab5c5.firebaseapp.com",
  databaseURL: "https://sign-up-ab5c5-default-rtdb.firebaseio.com",
  projectId: "sign-up-ab5c5",
  storageBucket: "sign-up-ab5c5.appspot.com",
  messagingSenderId: "962451753489",
  appId: "1:962451753489:web:fabbd3152c724a3ba03fb0"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
        window.location.href="test.html";
        alert("Signed in")
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
   }
const signIn=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
        window.location.href="test.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}