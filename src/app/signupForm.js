import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "../app/showMessage.js";

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password);
    
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials); 

        // cerrar el modal
        const signupModal = document.querySelector('#signupModal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();

        showMessage('Welcome ' + userCredentials.user.email, 'success');

    } catch (error) {
        console.log(error.message, error.code);

        if (error.code === 'auth/invalid-email') {
            showMessage('El correo electrónico no es válido', 'error');
        } else if (error.code === 'auth/weak-password') {
            showMessage('La contraseña es muy débil', 'error');
        } else if (error.code === 'auth/email-already-in-use') {
            showMessage('El correo electrónico ya está en uso', 'error');
        } else {
            showMessage('Ocurrió un error al crear la cuenta', 'error');
        }
    }
    
});

