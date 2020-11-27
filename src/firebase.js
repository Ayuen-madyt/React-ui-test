import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkm0cfAbdvqOFXE3OVVcBDOAMDUrP8b58",
    authDomain: "twitter-clone-d3fd0.firebaseapp.com",
    databaseURL: "https://twitter-clone-d3fd0.firebaseio.com",
    projectId: "twitter-clone-d3fd0",
    storageBucket: "twitter-clone-d3fd0.appspot.com",
    messagingSenderId: "303568078039",
    appId: "1:303568078039:web:9df64a51d3883e04a1dc92",
    measurementId: "G-N6NV7WC2EW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
