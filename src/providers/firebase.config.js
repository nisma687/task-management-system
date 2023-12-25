// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYmZpkY3v_SmRuMRxZdAKlDwYHSICQ4to",
  authDomain: "todotaskproject-5dc79.firebaseapp.com",
  projectId: "todotaskproject-5dc79",
  storageBucket: "todotaskproject-5dc79.appspot.com",
  messagingSenderId: "335819781103",
  appId: "1:335819781103:web:aeb91443463abca6b6bc1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;