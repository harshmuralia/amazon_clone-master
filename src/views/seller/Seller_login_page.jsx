import { useValidation } from "react-simple-form-validator";
import AuthLogo from "@/assets/media/logo/auth-logo.png";
import { useGlobalContext } from "@/context/useContext";
import { Link, useNavigate } from "react-router-dom";
import AuthApp from "../user/AuthApp";
import { useState } from "react";
import { signInWithGoogleSeller } from "../../firebase";
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
import { NavLink } from "react-router-dom";

function Seller_login() {


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
  


  if (user.auth) {
    return <AuthApp path={"/"}></AuthApp>;
  } else {
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
                  <MDBBtn href="#" onClick={() => signInWithGoogleSeller()}>
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
}

export default Seller_login;
