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
