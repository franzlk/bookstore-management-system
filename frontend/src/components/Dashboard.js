import React, { useState } from 'react';
import Navbar from './Navbar';
import QuickActions from './QuickActions';
import Feed from './Feed';
import Footer from './Footer';
import '../style/Dashboard.css';

const Dashboard = ({ setIsLoggedIn }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div>
            <Navbar setIsLoggedIn={setIsLoggedIn} onSearch={handleSearch} />

            <div className="grid-container">
                <QuickActions className="grid-quickActions" />
                <Feed className="grid-feed" searchTerm={searchTerm} />
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;
