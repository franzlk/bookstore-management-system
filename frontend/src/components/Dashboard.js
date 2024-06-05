import React from 'react';
import Navbar from './Navbar';
import QuickActions from './QuickActions';
import Feed from './Feed';
import Footer from './Footer';
import '../style/Dashboard.css';

const Dashboard = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />

      <div className="grid-container">
        <QuickActions className="grid-quickActions" />
        <Feed className="grid-feed" />
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
