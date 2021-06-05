import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9O1AYI837syoXEnYQJEVvxrcTcreSuds",
    authDomain: "fir-aa338.firebaseapp.com",
    projectId: "fir-aa338",
    storageBucket: "fir-aa338.appspot.com",
    messagingSenderId: "240315165683",
    appId: "1:240315165683:web:520d174a0780ec95304086",
    measurementId: "G-TP1DBXQ5WD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};
