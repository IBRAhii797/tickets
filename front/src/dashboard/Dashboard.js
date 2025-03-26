<<<<<<< HEAD
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
=======
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Dashboard = () => {
  const navigate = useNavigate();
  const deconnexion=()=>{
    const confirmed=window.confirm("vous voules deconnecter ?")
  if (confirmed){
    navigate("/adminlogin")
  }

  }
  

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Welcome to Admin Page</h1>

      <div className="list-group">
        <Link to="/dashCan" className="list-group-item list-group-item-action">
          Can25
        </Link>
        <Link to="/dashmusic" className="list-group-item list-group-item-action">
          Concerts & Festivals
        </Link>
>>>>>>> 86a02ea7ce8badacfa846674d7f56320b151feca
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-danger" onClick={deconnexion}>
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default Dashboard;