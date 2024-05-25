// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEYFB,
  authDomain: "software4firebs.firebaseapp.com",
  projectId: "software4firebs",
  storageBucket: "software4firebs.appspot.com",
  messagingSenderId: "244215546303",
  appId: "1:244215546303:web:b89d661775b8f45133a10a",
  measurementId: "G-7BEEV8TMYD"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
