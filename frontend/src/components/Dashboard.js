import React from 'react';
import Navbar from './Navbar';
import Feed from './Feed';
import Footer from './Footer';
import '../App.css';


const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Feed />
            <Footer />
        </div>
    );
};

export default Dashboard;