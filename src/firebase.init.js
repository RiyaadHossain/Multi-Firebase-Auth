// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvDLnQQNaJKcqkQtTRXEv8RtVQ50CEYRA",
  authDomain: "multi-firebase-auth.firebaseapp.com",
  projectId: "multi-firebase-auth",
  storageBucket: "multi-firebase-auth.appspot.com",
  messagingSenderId: "893287026988",
  appId: "1:893287026988:web:9a1d18fdc445d83ae99c89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;