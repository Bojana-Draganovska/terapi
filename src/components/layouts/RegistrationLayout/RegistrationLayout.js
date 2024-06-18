// UI
import Input from '../../ui/Input/Input';
// Widgets
import RegistrationButtons from '../../widgets/RegistrationButtons/RegistrationButtons';
// Styles
import '../RegistrationLayout/RegistrationLayout.css';
import {auth} from "../../../config/firebase"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationLayout(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, {displayName: `${name} ${surname}`});
      navigate('/my-profile');
      alert("User registered successfully!");
    } catch (error) {
      setError(error.message);
    }
  };
return (
    <div className='registration-layout'>
    <div className='form-container'>
    <form onSubmit={handleRegister}>
        <Input typename={'text'} labelname={"Име"} placeholder={"Внеси го твоето име"} onChange={(e) => setName(e.target.value)}></Input>
        <Input typename={'text'}  labelname={"Презиме"} placeholder={"Внеси го твоето презиме"} onChange={(e) => setSurname(e.target.value)}></Input>
        <Input typename={'email'}  labelname={"Електорнска пошта"} placeholder={"Внеси ја твојата електронска пошта"} onChange={(e) => setEmail(e.target.value)}></Input>
        <Input typename={'password'}  labelname={"Лозинка"} placeholder={"Внеси ја твојата лозинка"}  onChange={(e) => setPassword(e.target.value)}></Input>
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