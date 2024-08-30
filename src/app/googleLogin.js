import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js";

const googleButton = document.getElementById('googleLogin');

googleButton.addEventListener('click', async () => {
  const provider = new GoogleAuthProvider();

  try {
    const credential = await signInWithPopup(auth, provider);
    console.log(credential.user);

    const modal = bootstrap.Modal.getInstance(document.getElementById('signinModal'));
    modal.hide();

    showMessage('Welcome' + credential.user.displayName, 'success');
  } catch (error) {
    console.error(error);
  }
});