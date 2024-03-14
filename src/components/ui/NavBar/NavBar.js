// React
import { Link } from 'react-router-dom';
// UI
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
// Styles
import '../NavBar/NavBar.css';

function NavBar() {
    return (
        <div className='navigationBar'>
            <Logo />
            <Link to={"/emergency-help"}>Итна помош</Link>
            <Link to={"/mental-health"}>Ментално здравје</Link>
            <Link to={"/breathing"}>Техники за дишење</Link>
            <Link to={"/about-us"}>За нас</Link>
            <Link>FAQ</Link>
            <Button content={"Најава"} />
        </div>
    )
}

export default NavBar; 