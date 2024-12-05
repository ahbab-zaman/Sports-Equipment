// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2-ODOq5RyvT2xs6VwAJwPXWuq85KXOcQ",
  authDomain: "simple-firebase-2cb6e.firebaseapp.com",
  projectId: "simple-firebase-2cb6e",
  storageBucket: "simple-firebase-2cb6e.firebasestorage.app",
  messagingSenderId: "1098965223875",
  appId: "1:1098965223875:web:515c5a7d4cdd7ff13e1576",
  measurementId: "G-D1CS36ZMNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);