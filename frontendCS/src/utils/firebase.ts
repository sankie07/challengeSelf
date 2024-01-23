import { initializeApp } from "firebase/app";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { Signin } from './components/Signin';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUyp8YPcJ8TZbluOqGyE5hSyjfBmkXXKg",
  authDomain: "challengeself-c768b.firebaseapp.com",
  projectId: "challengeself-c768b",
  storageBucket: "challengeself-c768b.appspot.com",
  messagingSenderId: "71379976197",
  appId: "1:71379976197:web:47e48756e98c533c8e9c6c",
  measurementId: "G-Q1FR4BTSPN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);