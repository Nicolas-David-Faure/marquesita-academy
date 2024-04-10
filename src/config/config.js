// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7C1VcVE9qsNIe5cNDx6OTF_j2G2LXODc",
  authDomain: "marquesita-academy.firebaseapp.com",
  projectId: "marquesita-academy",
  storageBucket: "marquesita-academy.appspot.com",
  messagingSenderId: "474219371924",
  appId: "1:474219371924:web:761a0d5e9a9a6634a7c381",
  measurementId: "G-T70XTCD8J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;