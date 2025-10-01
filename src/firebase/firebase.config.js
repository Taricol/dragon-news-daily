// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARxdEVGvHRsw1RDHwdK-fVyxM8xmKPnd4",
  authDomain: "dragon-news-breaking-43d4c.firebaseapp.com",
  projectId: "dragon-news-breaking-43d4c",
  storageBucket: "dragon-news-breaking-43d4c.firebasestorage.app",
  messagingSenderId: "428785430795",
  appId: "1:428785430795:web:0e3c5bfd3db513c11f720e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;