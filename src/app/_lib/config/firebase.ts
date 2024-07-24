// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5fixQkBwe0crp0rmX5sf_-Zp1Nk2jQwc",
  authDomain: "sync-750d4.firebaseapp.com",
  projectId: "sync-750d4",
  storageBucket: "sync-750d4.appspot.com",
  messagingSenderId: "1089390445794",
  appId: "1:1089390445794:web:f43c80d90bbd67e1444abb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };
