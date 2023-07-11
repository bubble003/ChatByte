import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEoXAKFpsTx-RHmykUdcddPsfX8gzRNu4",
  authDomain: "verbx-ddfe8.firebaseapp.com",
  projectId: "verbx-ddfe8",
  storageBucket: "verbx-ddfe8.appspot.com",
  messagingSenderId: "674086394348",
  appId: "1:674086394348:web:ead21853c8ad73ba3908c9",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
