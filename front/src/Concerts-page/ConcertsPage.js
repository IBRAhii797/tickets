import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import FooterImage from "./img1.png"; // Assurez-vous que l'image est dans le bon dossier

import { FaHome, FaUser, FaShoppingCart, FaPhoneAlt, FaFutbol, FaMusic } from 'react-icons/fa';
import Login from '../Login/Login';  // Si tu es dans le dossier src/nav-bar


export default function ConcertsPage() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true); // Afficher la page de connexion
  };

  const handleCloseLogin = () => {
    setShowLogin(false); // Fermer la page de connexion
  };

  return (
    <div>
      <div className="P-NAV">
        <ul className="left-items">
          <li>
            <Link to="/" className="logo">WRI9A</Link>
          </li>
          
        </ul>

        <ul className="right-items">
          <li>
          <Link  onClick={handleLoginClick} className=""> 
              <FaUser /> SECONNECTER
            </Link>
          </li>
          <li>
            <Link to="/panier" className=""> 
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










<div>
    <br/>
    <br/>
    <br/>
    <h1>hna afficher lbody---------** music 2025 **</h1>
    <br/>
    <br/>
    <br/>
</div>




























<footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>À propos</h3>
          <p>Un site de billetterie nouvelle génération vous offrant la possibilité d’acheter en ligne des tickets pour les événements de votre choix...</p>
        </div>
        
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/concerts">Concerts</Link></li>
            <li><Link to="/matchs">Matchs</Link></li>
            <li><Link to="/contact">À propos</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email : <a href="mailto:support@billetterie.com">support@billetterie.com</a></p>
          <p>Téléphone : <a href="tel:+212600000000">+212 6 00 00 00 00</a></p>
        </div>
        
        {/* Nouvelle section pour afficher l'image */}
        <div className="footer-section footer-image no-bg">
          <img src={FooterImage}  className="footer-logo" />
        </div>
      </div>

      <p className="copyright">© 2025 Billetterie. Tous droits réservés.</p>
    </footer>
    </div>
  );
}
