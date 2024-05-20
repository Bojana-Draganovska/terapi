// UI
import NavBar from "../../components/ui/NavBar/NavBar";
// Layouts
import RegistrationLayout from '../../components/layouts/RegistrationLayout/RegistrationLayout';
// Styles
import '../Registration/Registration.css';
import Button from "../../components/ui/Button/Button";

function Registration(props) {
return (
    <>
    <NavBar />
    <RegistrationLayout />
    </>
)
}


export default Registration;