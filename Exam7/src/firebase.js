import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAKaWI0RQL6_o1gusY-0I4acZJh68OaMM",
  authDomain: "exam-6e606.firebaseapp.com",
  projectId: "exam-6e606",
  storageBucket: "exam-6e606.firebasestorage.app",
  messagingSenderId: "1043992902747",
  appId: "1:1043992902747:web:798eee62638fec4b44d37e",
  measurementId: "G-FY0ZLMJNTJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };