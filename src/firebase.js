// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3uL-qPZyHmoFLfqct59mW203CtIXEpwI",
  authDomain: "signup-page-68d49.firebaseapp.com",
  projectId: "signup-page-68d49",
  storageBucket: "signup-page-68d49.appspot.com",
  messagingSenderId: "406973521650",
  appId: "1:406973521650:web:651bc29955b685011f7a6b",
  measurementId: "G-SWHJ2T2MSE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
