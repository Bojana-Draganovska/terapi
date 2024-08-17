// React
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
// UI
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
// Styles
import '../NavBar/NavBar.css';
import { auth } from '../../../config/firebase';
import { useFontSize } from '../../../context/FontSizeContext';

function NavBar({user}) {
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState(null);
    const {fontSize} = useFontSize();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            setCurrentUser(user);
          } else {
            setCurrentUser(null);
          }
        });
    
        return () => unsubscribe();
      }, []);

    return (
        <div className='navigationBar'>
            <Logo />
            <Link to="/emergency-help" style={{fontSize}} className={location.pathname === '/emergency-help' ? 'active' : ''}>Итна помош</Link>
            <Link to="/mental-health" style={{fontSize}} className={location.pathname === '/mental-health' ? 'active' : ''}>Ментално здравје</Link>
            <Link to="/breathing" style={{fontSize}} className={location.pathname === '/breathing' ? 'active' : ''}>Техники за дишење</Link>
            <Link to="/about-us" style={{fontSize}} className={location.pathname === '/about-us' ? 'active' : ''}>За нас</Link>
            <Link to="/faq" style={{fontSize}} className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link>
            {currentUser ? (
                <Link to="/my-profile">
                    <Button content={"Профил"} style={{fontSize}}/>
                </Link>
            ) : (
                <Link to={"/login"}>
                    <Button content={"Најава"} style={{fontSize}}/>
                </Link>
            )}
        </div>
    )
}

export default NavBar; 