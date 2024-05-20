// UI
import NavBar from "../../components/ui/NavBar/NavBar";
// Layouts
import LoginLayout from "../../components/layouts/LoginLayout/LoginLayout";
// Styles
import "../Login/Login.css";
import Button from "../../components/ui/Button/Button";

function Login(props) {
  return (
    <>
      <NavBar />
      <LoginLayout />
    </>
  );
}

export default Login;
