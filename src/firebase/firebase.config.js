// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLny-sJrT11WmVUHICvp0j3L8zciH8u5E",
  authDomain: "the-news-dragon-29ea1.firebaseapp.com",
  projectId: "the-news-dragon-29ea1",
  storageBucket: "the-news-dragon-29ea1.appspot.com",
  messagingSenderId: "586101539621",
  appId: "1:586101539621:web:fa22c736a26986cd5610cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;