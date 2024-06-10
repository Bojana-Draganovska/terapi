// UI
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../ui/Input/Input';
// Widgets
import RegistrationButtons from '../../widgets/RegistrationButtons/RegistrationButtons';
// Styles
import '../LoginLayout/LoginLayout.css';
import { auth, signInWithEmailAndPassword } from '../../../config/firebase';
import { useState } from 'react';

function LoginLayout(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/my-profile');
            console.log('User logged in successfully!');
        } catch (error) {
            setError(error.message);
        }
    };
return (
    <div className='login-layout'>
    <div className='form-container'>
    <form onSubmit={handleLogin}>
        <Input typename={'text'}  labelname={"Електорнска пошта"} placeholder={"Внеси ја твојата електронска пошта"} onChange={(e) => setEmail(e.target.value)}></Input>
        <Input typename={'text'}  labelname={"Лозинка"} placeholder={"Внеси ја твојата лозинка"}  onChange={(e) => setPassword(e.target.value)}></Input>
        <Input className={"button"} typename={'submit'} value={"Најави се"} />
        {error && <p className="error-message">{error}</p>}
    </form>
    </div>
    <div className='haveaccount'>
        <span>Немате профил?</span>
        <Link to={"/registration"}><Input typename={'submit'} value={"Регистрирај се"} /></Link>
    <img id="flower" src='assets/images/flower.png' />
    </div>
    </div>
)   
}


export default LoginLayout;