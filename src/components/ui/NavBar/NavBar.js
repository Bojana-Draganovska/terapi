// React
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
// UI
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
// Styles
import '../NavBar/NavBar.css';
import { auth } from '../../../config/firebase';
import { useFont } from '../../../context/FontContext';

function NavBar({user}) {
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState(null);
    const {fontSize, fontFamily} = useFont();
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
            <Link to="/emergency-help" style={{fontSize, fontFamily}} className={location.pathname === '/emergency-help' ? 'active' : ''}>Итна помош</Link>
            <Link to="/mental-health" style={{fontSize, fontFamily}} className={location.pathname === '/mental-health' ? 'active' : ''}>Ментално здравје</Link>
            <Link to="/breathing" style={{fontSize, fontFamily}} className={location.pathname === '/breathing' ? 'active' : ''}>Техники за дишење</Link>
            <Link to="/about-us" style={{fontSize, fontFamily}} className={location.pathname === '/about-us' ? 'active' : ''}>За нас</Link>
            <Link to="/faq" style={{fontSize, fontFamily}} className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link>
            {currentUser ? (
                <Link to="/my-profile">
                    <Button content={"Профил"} style={{fontSize, fontFamily}}/>
                </Link>
            ) : (
                <Link to={"/login"}>
                    <Button content={"Најава"} style={{fontSize, fontFamily}}/>
                </Link>
            )}
        </div>
    )
}

export default NavBar; 