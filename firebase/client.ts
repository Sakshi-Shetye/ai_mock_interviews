// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps} from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUEmNW6ord5Lh8T2vP1DrqqgjjIIbmVhM",
  authDomain: "mockpilot-88158.firebaseapp.com",
  projectId: "mockpilot-88158",
  storageBucket: "mockpilot-88158.firebasestorage.app",
  messagingSenderId: "562248867269",
  appId: "1:562248867269:web:1b989c9a63f41545fe3fac",
  measurementId: "G-LHVS47GW10"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth= getAuth(app);
export const db= getFirestore(app);

// here we still have some permissions but they r much more limited that ones on the admin but we r giving access to both the admin n client to db n auth