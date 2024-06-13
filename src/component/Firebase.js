// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe2_syIEmRYqoGXGgrfmkp9gWEF5yeUhY",
  authDomain: "food-7bbdb.firebaseapp.com",
  projectId: "food-7bbdb",
  storageBucket: "food-7bbdb.appspot.com",
  messagingSenderId: "500860103328",
  appId: "1:500860103328:web:77046a38c6d0af01d5b7c5",
  measurementId: "G-7PEY96Z4WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
