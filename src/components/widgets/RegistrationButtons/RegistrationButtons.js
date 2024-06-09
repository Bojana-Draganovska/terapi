// Styles
import { Link } from "react-router-dom";
import "../RegistrationButtons/RegistrationButtons.css";

function RegistrationButtons(props) {
  return (
    <div className="registrationBtns">
        <span id="login">или најави се со </span>
     <hr></hr>
     <div className="registration-icons">
      <Link to="https://www.facebook.com"><img src="assets/icons/facebook.png" className="icon1"></img></Link>
      <Link to="https://www.instagram.com"><img src="assets/icons/instagram.png" className="icon1"></img></Link>
      <Link to="https://www.gmail.com"><img src="assets/icons/mail.png" className="icon1"></img></Link>
      </div>
    </div>
  );
}

export default RegistrationButtons;
