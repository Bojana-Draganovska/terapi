// Styles
import { Link } from "react-router-dom";
import "../RegistrationButtons/RegistrationButtons.css";
import {auth, googleProvider, facebookProvider} from "../../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function RegistrationButtons(props) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/my-profile');
      console.log("Google sign-in successful");
      setError(null);
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError(error.message);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate('/my-profile');
      console.log("Facebook sign-in successful");
      setError(null);
    } catch (error) {
      console.error("Facebook sign-in error:", error);
      setError(error.message);
    }
  };
  return (
    <div className="registrationBtns">
        <span id="login">или најави се со </span>
     <hr></hr>
     <div className="registration-icons">
      <img src="assets/icons/facebook.png" className="icon1" onClick={handleFacebookSignIn}></img>
      <Link to="https://www.instagram.com"><img src="assets/icons/instagram.png" className="icon1"></img></Link>
      <img src="assets/icons/mail.png" className="icon1" onClick={handleGoogleSignIn}></img>
      </div>
    </div>
  );
}

export default RegistrationButtons;
