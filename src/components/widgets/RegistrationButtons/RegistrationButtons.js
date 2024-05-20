// Styles
import "../RegistrationButtons/RegistrationButtons.css";

function RegistrationButtons(props) {
  return (
    <div className="registrationBtns">
        <span id="login">или најави се со </span>
     <hr></hr>
     <div className="registration-icons">
      <img src="assets/icons/facebook.png" className="icon1"></img>
      <img src="assets/icons/instagram.png" className="icon1"></img>
      <img src="assets/icons/mail.png" className="icon1"></img>
      </div>
    </div>
  );
}

export default RegistrationButtons;
