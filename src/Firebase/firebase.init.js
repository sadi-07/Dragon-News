// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKzpjmM_xgJdPW09WHsppN7BgmTcUmFLM",
  authDomain: "dragon-news-auth-3d7aa.firebaseapp.com",
  projectId: "dragon-news-auth-3d7aa",
  storageBucket: "dragon-news-auth-3d7aa.firebasestorage.app",
  messagingSenderId: "1083642358123",
  appId: "1:1083642358123:web:aedd0d3a255c61864a842e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;