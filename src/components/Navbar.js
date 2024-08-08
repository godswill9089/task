import React, {useState} from 'react';
import './Navbar.css';
import icon2 from '../assets/Icon (1).png';
import searchicon from '../assets/search.png'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="navbar">
            <div className="search-container">
                <span className='search-icon'>
                    <img src={ searchicon } />
                </span>
                <input type="text" placeholder="Search Atlas..." className="search-input" />
            </div>
            <div className="navbar-links">
                <a href="#" className="api-docs">API Documentation <span className="external-link-icon"><img src={ icon2 } /></span></a>
                <div className={`toggle-container ${isActive ? 'active' : ''}`} onClick={handleToggle}>
                    <div className="toggle-button">
                        <span className="icon">{isActive ? '🌙' : '✨'}</span>
                    </div>
                </div>
                <div className="profile-initials">AE</div>
            </div>
        </div>
    );
};

export default Navbar;
