// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuBJzNpSxl261c6EtBok5pIR5N1-608bM",
  authDomain: "golinbox-altschool-exam.firebaseapp.com",
  projectId: "golinbox-altschool-exam",
  storageBucket: "golinbox-altschool-exam.appspot.com",
  messagingSenderId: "338591330430",
  appId: "1:338591330430:web:b19fff95fa502a002f282f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//setup firebase provider
const provider = new GoogleAuthProvider();
const auth = getAuth();


export {
  app,
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
 };
