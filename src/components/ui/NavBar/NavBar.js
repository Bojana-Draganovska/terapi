// React
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
// UI
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
// Styles
import '../NavBar/NavBar.css';
import { auth } from '../../../config/firebase';

function NavBar({user}) {
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState(null);

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
            <Link to="/emergency-help" className={location.pathname === '/emergency-help' ? 'active' : ''}>Итна помош</Link>
            <Link to="/mental-health" className={location.pathname === '/mental-health' ? 'active' : ''}>Ментално здравје</Link>
            <Link to="/breathing" className={location.pathname === '/breathing' ? 'active' : ''}>Техники за дишење</Link>
            <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>За нас</Link>
            <Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link>
            {currentUser ? (
                <Link to="/my-profile">
                    <Button content={"Профил"} />
                </Link>
            ) : (
                <Link to={"/login"}>
                    <Button content={"Најава"} />
                </Link>
            )}
        </div>
    )
}

export default NavBar; 