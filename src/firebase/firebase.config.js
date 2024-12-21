// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABorC3Sub780By1EfD0m_4egiq1TSy8aw",
  authDomain: "micro-jobs-auth.firebaseapp.com",
  projectId: "micro-jobs-auth",
  storageBucket: "micro-jobs-auth.firebasestorage.app",
  messagingSenderId: "201218394718",
  appId: "1:201218394718:web:1d26a164ff1a1c898ec2cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
