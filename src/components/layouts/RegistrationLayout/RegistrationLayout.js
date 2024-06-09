// UI
import Input from '../../ui/Input/Input';
// Widgets
import RegistrationButtons from '../../widgets/RegistrationButtons/RegistrationButtons';
// Styles
import '../RegistrationLayout/RegistrationLayout.css';

function RegistrationLayout(props) {
return (
    <div className='registration-layout'>
    <div className='form-container'>
    <form>
        <Input typename={'text'} labelname={"Име"} placeholder={"Внеси го твоето име"}></Input>
        <Input typename={'text'}  labelname={"Презиме"} placeholder={"Внеси го твоето презиме"}></Input>
        <Input typename={'text'}  labelname={"Електорнска пошта"} placeholder={"Внеси ја твојата електронска пошта"}></Input>
        <Input typename={'text'}  labelname={"Лозинка"} placeholder={"Внеси ја твојата лозинка"}></Input>
        <Input className={'registriraj'} typename={'submit'} value={"Регистрирај се"} />
    </form>
    </div>
    <div className='registrationbtns'>
        <RegistrationButtons />
    <img className="flower" id="flower" src='assets/images/flower.png' />
    </div>
    </div>
)   
}


export default RegistrationLayout;