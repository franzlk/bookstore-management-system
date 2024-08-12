import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = ({ setIsLoggedIn, onSearch }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleLogout = () => {
        if (setIsLoggedIn) {
            setIsLoggedIn(false);
            localStorage.removeItem('isLoggedIn');
            navigate('/');
        } else {
            console.error("setIsLoggedIn is not provided");
        }
    };

    const handleSearch = async (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        onSearch(term); // Pass the search term to the parent component
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
                    <input
                        type="search"
                        id="search"
                        name="search"
                        placeholder='Search by Customer'
                        value={searchTerm}
                        onChange={handleSearch}
                    />
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
