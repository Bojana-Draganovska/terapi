// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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

const fetchUserPoints = async (userId) => {
  try {
    const userDoc = doc(db, "users", userId);
    const docSnap = await getDoc(userDoc);
    if (docSnap.exists()) {
      console.log('Fetched points:', docSnap.data().pointsCollected);
      return docSnap.data().pointsCollected;
    }
    console.log('No document found for user, returning default points:', 0);
    return 0; // Default if no data found
  } catch (error) {
    console.error('Error fetching points:', error.message);
    return 0;
  }
};

const saveUserPoints = async (userId, points) => {
  try {
    const userDoc = doc(db, "users", userId);
    await setDoc(userDoc, { pointsCollected: points }, { merge: true });
    console.log('Points saved successfully:', points);
  } catch (error) {
    console.error('Error saving points:', error.message);
  }
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  display: "popup",
});

export { app, auth, signInWithEmailAndPassword, logout, googleProvider, facebookProvider, doc, getDoc, setDoc, db, fetchUserPoints, saveUserPoints};