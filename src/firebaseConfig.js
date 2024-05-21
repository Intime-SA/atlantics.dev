import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU0pYK9Yv4rs0VMLgfu4tuZclgWWu9gxs",
  authDomain: "tallernaval2.firebaseapp.com",
  projectId: "tallernaval2",
  storageBucket: "tallernaval2.appspot.com",
  messagingSenderId: "410705466887",
  appId: "1:410705466887:web:dc320cc5a02b1810c43ca2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export const onSingIn = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const logOut = () => {
  signOut(auth);
  console.log("Cerro Sesion");
};

export const forgotPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};
