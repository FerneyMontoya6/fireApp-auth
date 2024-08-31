import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js";

const facebookButton = document.getElementById('facebookLogin');

facebookButton.addEventListener('click', async () => {
  const provider = new FacebookAuthProvider();

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