// import { useValidation } from "react-simple-form-validator";
// import AuthLogo from "@/assets/media/logo/auth-logo.png";
// import { useGlobalContext } from "@/context/useContext";
// import { Link, useNavigate } from "react-router-dom";
// import AuthApp from "./AuthApp";
// import { useState } from "react";
// import { signInWithGoogle } from "../../firebase";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol,
//   MDBBtn,
// } from "mdb-react-ui-kit";
// import React from "react";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { NavLink } from "react-router-dom";

// function LoginApp() {
//   const user = useGlobalContext();

//   if (user.auth) {
//     return <AuthApp path={"/"}></AuthApp>;
//   } else {
//     return (
//       <>
//         <section className="login-container">
//           <div className="login-logo">
//             <Link to={"/"}>
//               <img src={AuthLogo} alt="Auth_Logo" />
//             </Link>
//           </div>
//         </section>

//         <MDBRow>
//           <MDBCard className="w-50">
//             <MDBCardBody>
//               <MDBCardTitle>User / Costumer Login</MDBCardTitle>
//               <MDBBtn href="#" onClick={() => signInWithGoogle()}>
//                 Sign in with Google
//               </MDBBtn>
//             </MDBCardBody>
//           </MDBCard>
//           <MDBCol sm="6">
//             <MDBCard className="w-50">
//               <MDBCardBody>
//                 <MDBCardTitle>Amazon Seller Login</MDBCardTitle>
//                 <MDBBtn>
//                   <NavLink to="/Seller_login">Login as Seller</NavLink>
//                 </MDBBtn>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </>
//     );
//   }
// }

// export default LoginApp;






// import { useValidation } from "react-simple-form-validator";
// import AuthLogo from "@/assets/media/logo/auth-logo.png";
// import { useGlobalContext } from "@/context/useContext";
// import { Link, useNavigate } from "react-router-dom";
// import AuthApp from "./AuthApp";
// import { useState } from "react";
// import { signInWithGoogle } from "../../firebase";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol,
//   MDBBtn,
// } from "mdb-react-ui-kit";
// import React from "react";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { NavLink } from "react-router-dom";

// function LoginApp() {
//   const user = useGlobalContext();

//   if (user.auth) {
//     return <AuthApp path={"/"}></AuthApp>;
//   } else {
//     return (
//       <>
//         <section className="login-container d-flex justify-content-center align-items-center">
//           <div className="login-logo">
//             <Link to={"/"}>
//               <img src={AuthLogo} alt="Auth_Logo" />
//             </Link>
//           </div>
//         </section>

//         <MDBRow className="d-flex justify-content-center align-items-center">
//           <MDBCol md="6" className="text-center">
//             <MDBCard>
//               <MDBCardBody>
//                 <MDBCardTitle>User / Customer Login</MDBCardTitle>
//                 <MDBBtn
//                   color="google"
//                   onClick={() => signInWithGoogle()}
//                   className="w-100"
//                 >
//                   <i className="fab fa-google me-2"></i> Sign in with Google
//                 </MDBBtn>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//           <MDBCol md="6" className="text-center">
//             <MDBCard>
//               <MDBCardBody>
//                 <MDBCardTitle>Amazon Seller Login</MDBCardTitle>
//                 <MDBBtn color="dark" className="w-100">
//                   <NavLink to="/Seller_login" className="text-white">
//                     Login as Seller
//                   </NavLink>
//                 </MDBBtn>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </>
//     );
//   }
// }

// export default LoginApp;










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






//   const user = useGlobalContext();

//   if (user.auth) {
//     return <AuthApp path={"/"}></AuthApp>;
//   } else {
//     return (
//       
//     );
//   }





export default function LoginApp({ setIsAuth }) {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
          console.log(result)
            navigate("/");
        });
    };
  if (auth.currentUser) { return <AuthApp path={"/"}></AuthApp>;} 
  else {
    return (
      <>
         <section className="login-container d-flex justify-content-center align-items-center">
           <div className="login-logo">
             <Link to={"/"}>
               <img src={AuthLogo} alt="Auth_Logo" />
             </Link>
           </div>
         </section>

         <MDBRow className="d-flex justify-content-center align-items-center">
           <MDBCol md="6" className="text-center">
             <MDBCard>
               <MDBCardBody>
                 <MDBCardTitle>User / Customer Login</MDBCardTitle>
                 <MDBBtn
                   color="google"
                   onClick={() => signInWithGoogle()}
                   className="w-100"
                 >
                   <i className="fab fa-google me-2"></i> Sign in with Google
                 </MDBBtn>
               </MDBCardBody>
             </MDBCard>
           </MDBCol>
           <MDBCol md="6" className="text-center">
             <MDBCard>
               <MDBCardBody>
                 <MDBCardTitle>Amazon Seller Login</MDBCardTitle>
                 <MDBBtn color="dark" className="w-100">
                   <NavLink to="/Seller_login" className="text-white">
                     Login as Seller
                   </NavLink>
                 </MDBBtn>
               </MDBCardBody>
             </MDBCard>
           </MDBCol>
         </MDBRow>
       </>
    );
}
}