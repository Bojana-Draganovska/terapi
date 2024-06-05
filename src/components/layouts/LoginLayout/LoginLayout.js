// UI
import Input from '../../ui/Input/Input';
// Widgets
import RegistrationButtons from '../../widgets/RegistrationButtons/RegistrationButtons';
// Styles
import '../LoginLayout/LoginLayout.css';

function LoginLayout(props) {
return (
    <div className='login-layout'>
    <div className='form-container'>
    <form>
        <Input typename={'text'}  labelname={"Електорнска пошта"} placeholder={"Внеси ја твојата електронска пошта"}></Input>
        <Input typename={'text'}  labelname={"Лозинка"} placeholder={"Внеси ја твојата лозинка"}></Input>
        <Input typename={'submit'} value={"Најави се"} />
    </form>
    </div>
    <div className='haveaccount'>
        <span>Немате профил?</span>
        <Input typename={'submit'} value={"Регистрирај се"} />
    <img id="flower" src='assets/images/flower.png' />
    </div>
    </div>
)   
}


export default LoginLayout;