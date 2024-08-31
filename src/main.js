import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import { setupPosts } from "./app/postList.js";

import "./app/signupForm.js";
import "./app/signinForm.js";
import "./app/googleLogin.js";
import "./app/facebookLogin.js";
import "./app/logout.js";

// Está monitoreando el estado de autenticación del usuario
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        setupPosts(querySnapshot.docs);        
    } else {
        setupPosts([]);        
    }
    loginCheck(user);
});