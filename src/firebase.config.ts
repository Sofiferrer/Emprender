import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk7NQXoy_jxe4c5t9wj8rvM82u-kTKHp8",
  authDomain: "emprender-82819.firebaseapp.com",
  projectId: "emprender-82819",
  storageBucket: "emprender-82819.appspot.com",
  messagingSenderId: "837901363865",
  appId: "1:837901363865:web:dcc8f63dcac2025adda608",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
