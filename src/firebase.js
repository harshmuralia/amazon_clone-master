
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useValidation } from "react-simple-form-validator";
import { useState } from "react";
import { useGlobalContext } from "@/context/useContext";
import { Link, useNavigate } from "react-router-dom";


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

export const db = getFirestore(app)
 export const auth = getAuth(app)
 export const provider = new GoogleAuthProvider()
 export const emailSignIn = new signInWithEmailAndPassword()


export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        console.log(result);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  export const signInWithGoogleSeller = () => {
    signInWithPopup(auth, provider)
      .then((result) => {

        const { login_seller, user } = useGlobalContext();
        const movePage = useNavigate();
        const [email, setEamil] = useState("");
        const [password, setPassword] = useState("");
        const { isFieldInError, getErrorsInField, isFormValid } = useValidation({
          fieldsRules: {
            email: { email: true, required: true },
            password: { required: true, minlength: 6},
          },
          state: { email, password },
        });




        const seller_name = result.user.displayName;
        const seller_email = result.user.email;
        console.log(result);
        // localStorage.setItem("name", name);
        // localStorage.setItem("email", email);
        login_seller({ seller_email, token: seller_name });
        setEamil("");
        setPassword("");
        movePage("/");

      })
      .catch((error) => {
        console.log(error);
      });
  };

