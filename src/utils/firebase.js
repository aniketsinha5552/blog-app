// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-9d31b.firebaseapp.com",
  projectId: "blog-app-9d31b",
  storageBucket: "blog-app-9d31b.appspot.com",
  messagingSenderId: "331303970233",
  appId: "1:331303970233:web:3a8f611b34705c2260c268"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);