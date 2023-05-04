import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArp0thtIpFXw5Adxsh8TKkf1u-XoGmFVc",
  authDomain: "clone-c4e38.firebaseapp.com",
  projectId: "clone-c4e38",
  storageBucket: "clone-c4e38.appspot.com",
  messagingSenderId: "437916884482",
  appId: "1:437916884482:web:2491a0bf62bebe19f3911b",
  measurementId: "G-2TX39BSEGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


export const logout = () => {
  return auth.signOut().then(() => {
    console.log("User signed out");
  });
};
