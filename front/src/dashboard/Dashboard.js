import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Welcome to Admin Page</h1>
      <div className="list-group">
        <Link to="/dashCan" className="list-group-item list-group-item-action">
          Can25
        </Link>
        <Link to="/dashmusic" className="list-group-item list-group-item-action">
          Concerts & Festivals
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
