// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0--eLljfMhL8NtcvkjAtx9LbkzVv0Qs4",
  authDomain: "appfirebase-f10a2.firebaseapp.com",
  projectId: "appfirebase-f10a2",
  storageBucket: "appfirebase-f10a2.appspot.com",
  messagingSenderId: "380340169993",
  appId: "1:380340169993:web:609dd6242682884519b7d8",
  measurementId: "G-GFYWD147J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

