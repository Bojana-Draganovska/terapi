// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx5foAc3VleI7XeBAMC9W0bh7nAN2udMs",
  authDomain: "terapi-d8f1d.firebaseapp.com",
  projectId: "terapi-d8f1d",
  storageBucket: "terapi-d8f1d.appspot.com",
  messagingSenderId: "253062758547",
  appId: "1:253062758547:web:df0346355f9296bb6b0d66",
  measurementId: "G-N424YHQGTF"
};

const logout = async () => {
  try {
    await signOut(auth);
    // Log out successful
  } catch (error) {
    console.error('Error signing out:', error.message);
    // Handle error
  }
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  display: "popup",
});

export { app, auth, signInWithEmailAndPassword, logout, googleProvider, facebookProvider };