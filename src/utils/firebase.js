// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiNSQiqNdAnIegcmI30P72vf5kUOwWpuM",
  authDomain: "netflixgpt-8c4d7.firebaseapp.com",
  projectId: "netflixgpt-8c4d7",
  storageBucket: "netflixgpt-8c4d7.appspot.com",
  messagingSenderId: "948671500258",
  appId: "1:948671500258:web:a7cd620bb255de871e33bb",
  measurementId: "G-7KL7RLYJ2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();