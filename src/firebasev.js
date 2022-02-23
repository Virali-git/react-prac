//import firebase from "firebase";

//import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChange } from "firebase/auth";
//import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBMGZZBE9DJNeaC63SP6DIhtoeOXApRQKc",
  authDomain: "wineitup-1997.firebaseapp.com",
  projectId: "wineitup-1997",
  storageBucket: "wineitup-1997.appspot.com",
  messagingSenderId: "371793494515",
  appId: "1:371793494515:web:c7bc91318a059579f49286",
  measurementId: "G-NBKD4SE0K2",
});

 const db = getFirestore(firebaseApp); //database
 const auth = getAuth(firebaseApp);  // get variable which is reponsible for sign In and authentication

// //const todoCol = collection(db, "todos");
// //const snapchat = await getDocs(todoCol);

 export { db, auth };


