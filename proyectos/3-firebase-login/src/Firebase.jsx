
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
 const firebaseConfig = {
  apiKey: "AIzaSyAst7vZA4Nr4jpLBI6a_UU94tY-NCmyiYQ",
  authDomain: "login-react-768d3.firebaseapp.com",
  projectId: "login-react-768d3",
  storageBucket: "login-react-768d3.firebasestorage.app",
  messagingSenderId: "908807709760",
  appId: "1:908807709760:web:781302a6e9e9cccc9feba5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};