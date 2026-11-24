// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKKXaLm9rsrX5DAPrUg2nnzCvPMQmbN9Y",
  authDomain: "summarist-react-f0597.firebaseapp.com",
  projectId: "summarist-react-f0597",
  storageBucket: "summarist-react-f0597.firebasestorage.app",
  messagingSenderId: "396923357863",
  appId: "1:396923357863:web:83484fe125cb2265b2a982",
  measurementId: "G-QPQVTXDNNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);