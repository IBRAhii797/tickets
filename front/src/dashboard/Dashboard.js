import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  

  return (
    <div>
      <h1>welcome to admin page </h1>
      <Link to="/dashCan">Can25</Link><br/>
      <Link to="/dashmusic">concerts & festivals </Link>

    </div>
  );
};

export default Dashboard;
