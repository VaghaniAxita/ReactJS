// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAKaWI0RQL6_o1gusY-0I4acZJh68OaMM",
  authDomain: "exam-6e606.firebaseapp.com",
  projectId: "exam-6e606",
  storageBucket: "exam-6e606.firebasestorage.app",
  messagingSenderId: "1043992902747",
  appId: "1:1043992902747:web:798eee62638fec4b44d37e",
  measurementId: "G-FY0ZLMJNTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();  

export { auth, provider }; 