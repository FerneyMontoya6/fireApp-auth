// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtlQzsf-AKwFc6_E2ViXoW8LLGa6_pqFk",
  authDomain: "fir-app-auth-94092.firebaseapp.com",
  projectId: "fir-app-auth-94092",
  storageBucket: "fir-app-auth-94092.appspot.com",
  messagingSenderId: "470763309165",
  appId: "1:470763309165:web:c75f68b6ffd9be59295764"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// la app ahora tiene acceso a la autenticación
export const auth = getAuth(app);

export const db = getFirestore(app);
