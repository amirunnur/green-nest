// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7bJRO6CGIoTOh9oP6Pnf3HjrG37ClOAM",
  authDomain: "green-nest-c76b3.firebaseapp.com",
  projectId: "green-nest-c76b3",
  storageBucket: "green-nest-c76b3.firebasestorage.app",
  messagingSenderId: "910261043381",
  appId: "1:910261043381:web:78e48ecdb5c742399f3efc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;