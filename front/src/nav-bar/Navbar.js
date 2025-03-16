import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome, FaUser, FaShoppingCart, FaPhoneAlt, FaFutbol, FaMusic } from 'react-icons/fa';
import Login from '../Login/Login';  // Si tu es dans le dossier src/nav-bar

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showPanierMessage, setShowPanierMessage] = useState(false); // Etat pour gérer l'affichage du panier vide
  const [items, setItems] = useState([]); // Etat pour gérer les articles du panier
  const [showLoginOptions, setShowLoginOptions] = useState(false); // Etat pour afficher les options "Se connecter" et "Créer un compte"
  const panierRef = useRef(null); // Référence au panier pour gérer le clic en dehors

  const handleLoginClick = () => {
    setShowLogin(true); // Afficher la page de connexion
    setShowLoginOptions(false); // Masquer les options
  };

  const handleCloseLogin = () => {
    setShowLogin(false); // Fermer la page de connexion
  };

  const handlePanierClick = (e) => {
    e.stopPropagation(); // Empêcher la propagation du clic pour ne pas fermer le message si on clique sur le panier
    setShowPanierMessage(!showPanierMessage); // Afficher ou masquer le message du panier
  };

  const handleHoverLogin = () => {
    setShowLoginOptions(true); // Afficher les options de connexion au survol
  };

  const handleMouseLeaveLogin = () => {
    setShowLoginOptions(false); // Masquer les options de connexion lorsque la souris quitte
  };

  // Clic en dehors du panier pour fermer le message
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
            <Link to="#" className="" onClick={handleLoginClick}> 
              <FaUser /> SECONNECTER
            </Link>
            {showLoginOptions && (
              <div className="login-dropdown">
                <Link to="/create-account">Créer un compte</Link>
                <Link to="/login" onClick={handleLoginClick}>Se connecter</Link>
              </div>
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
            <button className="close-btn" onClick={handleCloseLogin}>X</button> {/* Bouton pour fermer */}
          </div>
        </div>
      )}
   {/* Partie du panier avec gestion du panier vide */}
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
