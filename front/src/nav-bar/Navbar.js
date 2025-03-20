import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaHome,FaSignOutAlt , FaUser, FaShoppingCart, FaPhoneAlt, FaFutbol, FaMusic } from 'react-icons/fa';
import Login from '../Login/Login';

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showPanierMessage, setShowPanierMessage] = useState(false);
  const [items, setItems] = useState([]);
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();
  const panierRef = useRef(null);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowLoginOptions(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Voulez-vous vraiment vous déconnecter ?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/");
    }
  };
  

  const handlePanierClick = (e) => {
    e.stopPropagation();
    setShowPanierMessage(!showPanierMessage);
  };

  const handleHoverLogin = () => {
    setShowLoginOptions(true);
  };

  const handleMouseLeaveLogin = () => {
    setShowLoginOptions(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panierRef.current && !panierRef.current.contains(e.target)) {
        setShowPanierMessage(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <div>
      <div className="P-NAV">
        <ul className="left-items">
          <li>
            <Link to="/" className="logo">WRI9A</Link>
          </li>
          <li>
            <input type="search" placeholder="rechercher" />
          </li>
        </ul>

        <ul className="right-items">
          <li className="login-hover" onMouseEnter={handleHoverLogin} onMouseLeave={handleMouseLeaveLogin}>
            {isLoggedIn ? (
              <button onClick={handleLogout} > <FaSignOutAlt /></button>
            ) : (
              <>
                <Link to="" className=""> 
                  <FaUser /> Compte
                </Link>
                {showLoginOptions && (
                  <div className="login-dropdown">
                    <Link to="/login" onClick={handleLoginClick}>Se connecter</Link>
                    <Link to="/newacc">Créer un compte</Link>
                    <Link to="/adminlogin">admin</Link>
                  </div>
                )}
              </>
            )}
          </li>
          <li>
            <Link to="#" onClick={handlePanierClick} className="" ref={panierRef}> 
              <FaShoppingCart /> PANIER
            </Link>
          </li>
        </ul>
      </div>

      <div className="D-NAV">
        <Link to="/"> <FaHome /> ACCEUIL</Link>
        <Link to="/can-page"> <FaFutbol /> CAN 25 </Link>
        <Link to="/concerts-page"> <FaMusic /> CONCERT ET FESTIVALS</Link>
        <Link to="/about"> <FaPhoneAlt /> ABOUT US</Link>
      </div>

      {showLogin && (
        <div className="login-overlay">
          <div className="login-box">
            <Login />
            <button className="close-btn" onClick={handleCloseLogin}>X</button>
          </div>
        </div>
      )}

      {showPanierMessage && (
        <div className="panier-message">
          <div className="panier-box">
            {items.length === 0 ? (
              <div className="empty-message">
                <h3>Votre panier est vide.</h3>
                <p>Jetez un coup d'œil à nos événements / produits et trouvez l'inspiration !</p>
                <Link to="/products" className="view-products-button">Voir les produits</Link>
              </div>
            ) : (
              <div>
                <h3>Votre Panier</h3>
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>{item.name} - {item.price}€</li>
                  ))}
                </ul>
                <div className="total">Total: {items.reduce((acc, item) => acc + item.price, 0)}€</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
