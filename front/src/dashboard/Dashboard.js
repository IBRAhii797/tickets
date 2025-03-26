import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dash.css';

const Dashboard = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">wri9a</h2>
        <Link to="/dashCan" className="menu-item">Can25</Link>
        <Link to="/dashmusic" className="menu-item">Concerts & Festivals</Link>
        {/* Ajoutez d'autres liens de navigation ici */}
      </div>

      {/* Contenu principal */}
      <div className="main-content">
        <div className="header">
          <div className="header-title">
            <h1 className="welcome-title">Welcome to Admin Page</h1>
          </div>
          <div className="search-profile">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search..." 
            />
            <div className="user-info" onClick={() => setProfileOpen(!profileOpen)}>
              <div className="user-avatar">A</div>
              <div className="user-name">Admin</div>
              
              {/* Dropdown menu */}
              {profileOpen && (
                <div className="profile-dropdown">
                  <div className="dropdown-item">
                    <i className="fas fa-home"></i>
                    <span>Home</span>
                  </div>
                  <div className="dropdown-item">
                    <i className="fas fa-language"></i>
                    <span>French</span>
                  </div>
                  <div className="dropdown-item">
                    <i className="fas fa-user"></i>
                    <span>Profile</span>
                  </div>
                  <div className="dropdown-item">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                  </div>
                  <div className="dropdown-footer">
                    <span>admin1@example.com</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;