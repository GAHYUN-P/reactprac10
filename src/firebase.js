// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ4M8-veVk1iBG1qR2j-kDFD2U6My61hg",
  authDomain: "bucketlist-39039.firebaseapp.com",
  projectId: "bucketlist-39039",
  storageBucket: "bucketlist-39039.appspot.com",
  messagingSenderId: "828790248013",
  appId: "1:828790248013:web:d6e3d8ad1e3434a8740204",
  measurementId: "G-GSWZ7FP9WN"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
