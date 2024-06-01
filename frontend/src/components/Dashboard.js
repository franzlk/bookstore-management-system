import React from 'react';
import Navbar from './Navbar';
import Feed from './Feed';
import Footer from './Footer';
import '../App.css';

const Dashboard = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <Feed />
      <Footer />
    </div>
  );
};

export default Dashboard;
