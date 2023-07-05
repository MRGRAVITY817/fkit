// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOpNYeeW5LfqUSI3-N6er59mxUAkagA1E",
  authDomain: "fkit-2ff41.firebaseapp.com",
  projectId: "fkit-2ff41",
  storageBucket: "fkit-2ff41.appspot.com",
  messagingSenderId: "884337666228",
  appId: "1:884337666228:web:806247cb0048089eb44fe1",
  measurementId: "G-26VCB5LZGM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
