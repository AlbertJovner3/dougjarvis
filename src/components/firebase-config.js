import { initializeApp } from "firebase/app";
import {getFirestore } from "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDID9jtjdC-dTxiLONzup9q_dESdgVlfhU",
    authDomain: "dougjarvisbutchers.firebaseapp.com",
    projectId: "dougjarvisbutchers",
    storageBucket: "dougjarvisbutchers.appspot.com",
    messagingSenderId: "943376561668",
    appId: "1:943376561668:web:603cd82310949dfdeee751",
    measurementId: "G-Q4QP711E6K"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);