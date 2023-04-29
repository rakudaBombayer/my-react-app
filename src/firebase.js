import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWnDuSoyvUlVY6Pa9F6u7IYUdZFyVnaXM",
  authDomain: "chat-18889.firebaseapp.com",
  projectId: "chat-18889",
  storageBucket: "chat-18889.appspot.com",
  messagingSenderId: "1056401673346",
  appId: "1:1056401673346:web:2e16d80fa38cbf4a52389b"
});

const db =firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};