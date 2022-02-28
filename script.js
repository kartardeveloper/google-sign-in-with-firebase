import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

console.log('Good');

const firebaseConfig = {
  apiKey: "AIzaSyCRIpI8rsA_8KYJMnncIKzznkTjWzJeILo",
  authDomain: "new-project-abb9b.firebaseapp.com",
  projectId: "new-project-abb9b",
  storageBucket: "new-project-abb9b.appspot.com",
  messagingSenderId: "304106481214",
  appId: "1:304106481214:web:64a3924566ac391ca7536f"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

document.querySelector('#google-sign-in__btn').addEventListener('click', () => {
    signInWithPopup(auth, provider)
    .then(result => console.log(result.user))
    .catch(error => console.log(error.message));
});

document.querySelector('#google-sign-out__btn').addEventListener('click', () => {
    signOut(auth)
    .then(result => console.log(result.user))
    .catch(error => console.log(error.message));
});