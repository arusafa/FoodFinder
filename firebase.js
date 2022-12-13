// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ-rJ5SpUs9P1jmVtcZxbwcvompEgH6o8",
  authDomain: "comp3074-371211.firebaseapp.com",
  projectId: "comp3074-371211",
  storageBucket: "comp3074-371211.appspot.com",
  messagingSenderId: "960085666425",
  appId: "1:960085666425:web:f56329a2be5513561642a8"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };