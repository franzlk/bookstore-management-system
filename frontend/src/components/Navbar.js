import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        navigate('/');
    };

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <div className="left-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </div>
                <div className="right-links">
                    <input type="search" id="search" name="search" placeholder='Search Orders'/>
                    <li className="dropdown">
                        <a href="#settings">&#x2699;<i className="fa fa-caret-down"></i></a>
                        <div className="dropdown-content">
                            <button className="nav-link logout-button" onClick={handleLogout}>Sign Out</button>
                        </div>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
