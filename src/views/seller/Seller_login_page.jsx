
import { useValidation } from "react-simple-form-validator";
import AuthLogo from "@/assets/media/logo/auth-logo.png";
import { useGlobalContext } from "@/context/useContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthApp from "../user/AuthApp";
import { useState } from "react";
// import { signInWithGoogleSeller } from "../../firebase";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";



export default function Seller_login({ setIsAuth }) {
    let navigate = useNavigate();

    const signInWithGoogleSeller = () => {
        signInWithPopup(auth, provider).then((result) => {
          console.log(result)
            navigate("/dashboard");
        });
    };

    return (
      <>
               <section className="login-container">
                 <div className="login-logo">
                   <Link to={"/"}>
                     <img src={AuthLogo} alt="Auth_Logo" />
                   </Link>
                 </div>
      
                 <div className="login-logo">
                   <h1>Seller Login</h1>
                 </div>
      
                 <MDBRow>
                   <MDBCol sm="20">
                     <MDBCard>
                       <MDBCardBody>
                         <MDBCardTitle>Amazon Seller Login</MDBCardTitle>
                         <MDBCardText>Login as Seller</MDBCardText>
                         <MDBBtn onClick={signInWithGoogleSeller}>
                           Sign in with Google
                         </MDBBtn>
                       </MDBCardBody>
                     </MDBCard>
                   </MDBCol>
                   <MDBCol sm="20">
                     <MDBCard>
                       <MDBCardBody>
                         <MDBCardText>User?</MDBCardText>
                         <MDBBtn>
                           <NavLink to="/login">Login as User</NavLink>
                         </MDBBtn>
                       </MDBCardBody>
                     </MDBCard>
                   </MDBCol>
                 </MDBRow>
               </section>
             </>
    );
}