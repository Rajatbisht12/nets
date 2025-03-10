// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2q41buiWnHRDXCl3BFdRtXu-Ve2GclJQ",
  authDomain: "starstruck-connect.firebaseapp.com",
  projectId: "starstruck-connect",
  storageBucket: "starstruck-connect.firebasestorage.app",
  messagingSenderId: "55470943400",
  appId: "1:55470943400:web:534029042920380bb1669d",
  measurementId: "G-W9GBREE3NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };