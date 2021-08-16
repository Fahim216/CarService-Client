import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase/app";
import "firebase/auth";
import Navbar from "./../../Shared/Navbar/Navbar";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from "./../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
      let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


    const handleSignIn=()=>{
        var GoogleSignIn = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(GoogleSignIn)
  .then((result) => {
    const {displayName,email}=result.user;
    const signInUser={name:displayName,email:email};
    setLoggedInUser(signInUser)
    history.replace(from);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
  return (
    <div>
      <div className="shadow-lg p-1 mb-2 bg-white rounded">
        <Navbar></Navbar>
      </div>
        <div className="row">
            <div className="col-md-12 mt-5 pt-5 ps-5 d-flex justify-content-center">
                <h1 className="ms-5">
         
          Login With Gmail! Click below
        </h1> 
         </div>
         <div className="row">
             <div className='col-md-12 mt-2 ps-5 ms-5 d-flex justify-content-center'>
                 <button onClick={handleSignIn} className="btn btn-primary w-50"> GoogleSignIN <FontAwesomeIcon icon={faGooglePlusG}/></button>
             </div>

         </div>

        </div>
    </div>
  );
};

export default Login;
