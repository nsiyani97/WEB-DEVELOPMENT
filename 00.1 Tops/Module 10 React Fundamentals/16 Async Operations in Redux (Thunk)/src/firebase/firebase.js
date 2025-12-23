import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBsQ6OaBKxIhb4ECeyKMuOekRhizCtJ5Q",
  authDomain: "async-operations-in-redux.firebaseapp.com",
  projectId: "async-operations-in-redux",
  storageBucket: "async-operations-in-redux.firebasestorage.app",
  messagingSenderId: "819771319150",
  appId: "1:819771319150:web:2cff1247991aab7798577f",
  measurementId: "G-R0FPYX0ZP5",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
