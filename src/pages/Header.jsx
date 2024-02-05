import React from "react";
import '../css/Header.css';
import logo from '../images/FBL-dots.png';
import logout from '../images/logout.png';
import { useSession } from '../pages/SessionContext';
import { createBrowserHistory } from 'history';
import { Link } from 'react-router-dom';
const Header = () => {
    const { activateSession, deactivateSession, isSessionActive } = useSession();
    const history = createBrowserHistory();
    const handleLogout = () => {
        // Simulate logout logic (replace with actual logout logic)
        localStorage.removeItem('isSessionActive'); // Remove session status from local storage
        deactivateSession();
        history.push('/');
      };
    
    return (
      <header>
        <div className="container">
        <nav>
            <a className="logo" href="/">
                <img src={logo} alt="FBL logo" title="FBL logo"/>
                </a>
            {isSessionActive && (
          <Link to="/" className="logout" onClick={handleLogout}>
            <img src={logout} alt="logout" title="logout"/>
          </Link>
        )}

        </nav>
        </div>
      </header>
    );
  };
  
  export default Header;