// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYrrZlrqTG8a9cbCL1hX9583YRN7HwcMI",
  authDomain: "netflix-dc052.firebaseapp.com",
  projectId: "netflix-dc052",
  storageBucket: "netflix-dc052.appspot.com",
  messagingSenderId: "694361670753",
  appId: "1:694361670753:web:e3c70cb203f08b4dfbd620",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
