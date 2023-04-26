// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXirEeK3adOPlCl0txN_0yOrT9z9IrG60",
  authDomain: "ecommerce-with-firebase-auth.firebaseapp.com",
  projectId: "ecommerce-with-firebase-auth",
  storageBucket: "ecommerce-with-firebase-auth.appspot.com",
  messagingSenderId: "805638266549",
  appId: "1:805638266549:web:e1c9af4cd3613b3c1968fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
