// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

//services
import { searchUserById } from "./services/users/searchUserById";
import { addUserToDb } from "./services/users/addUserToDb";
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

const db = getFirestore(app);

const auth = getAuth(app);



async function getPrueba(db) {
  const pruebaCol = collection(db, 'prueba');
  const citySnapshot = await getDocs(pruebaCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}







export { db , getPrueba , auth , addUserToDb , searchUserById  };

