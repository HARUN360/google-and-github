// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATAScd4yFVutYM2zpd7ffbhVEHmNYq3kg",
  authDomain: "and-github-7ee6d.firebaseapp.com",
  projectId: "and-github-7ee6d",
  storageBucket: "and-github-7ee6d.appspot.com",
  messagingSenderId: "125900098497",
  appId: "1:125900098497:web:364d9ea96c07541fe47d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;