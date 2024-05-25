
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEYFB,
  authDomain: "software4-7a830.firebaseapp.com",
  projectId: "software4-7a830",
  storageBucket: "software4-7a830.appspot.com",
  messagingSenderId: "762566317605",
  appId: "1:762566317605:web:e2d69a7633c0585f3b51cc",
  measurementId: "G-76FNMXGDZ3"
};

// Initialize Firebase
 export const firebaseapp = initializeApp(firebaseConfig);



