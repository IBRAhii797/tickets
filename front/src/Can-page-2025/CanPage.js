import React, { useState, useRef, useEffect } from "react";
import './CanPage.css';
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaSignOutAlt, FaUser, FaShoppingCart, FaPhoneAlt, FaFutbol, FaMusic } from 'react-icons/fa';
import Login from '../Login/Login';
import Footer from "../tooter/Footer";


export default function CanPage(){
  const [showLogin, setShowLogin] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompetition, setSelectedCompetition] = useState('');
  const [showCartMessage, setShowCartMessage] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();
  const cartRef = useRef(null);

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

  const handleCartClick = (e) => {
    e.stopPropagation();
    setShowCartMessage(!showCartMessage);
  };

  const handleHoverLogin = () => {
    setShowLoginOptions(true);
  };

  const handleMouseLeaveLogin = () => {
    setShowLoginOptions(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setShowCartMessage(false);
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


  //video
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      });
    }, { threshold: 0.5 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

 



  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch les matchs du backend
  useEffect(() => {
    fetch("http://localhost:5000/api/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data); // Stocke les données récupérées dans le state
        setLoading(false); // Fin du chargement
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des matchs :", error);
        setLoading(false); // Si erreur, fin du chargement
      });
  }, []);

  if (loading) {
    return <div>Chargement...</div>;  // Affiche un message pendant le chargement des données
  }

  return (
    <div>
      {/* Barre de navigation */}
      <div className="main-navbar">
        <ul className="left-links">
          <li>
            <Link to="/" className="logo">WRI9A</Link>
          </li>
          <li>
            <input type="search" value={searchQuery} onChange={handleSearchChange} placeholder="rechercher" />
          </li>
        </ul>

        <ul className="right-links">
          <li className="login-hover" onMouseEnter={handleHoverLogin} onMouseLeave={handleMouseLeaveLogin}>
            {isLoggedIn ? (
              <button onClick={handleLogout}><FaSignOutAlt /></button>
            ) : (
              <>
                <Link to=""> 
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
            <Link to="#" onClick={handleCartClick} ref={cartRef}>
              <FaShoppingCart /> PANIER
            </Link>
          </li>
        </ul>
      </div>

      <div className="secondary-navbar">
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

      {showCartMessage && (
        <div className="cart-message">
          <div className="cart-box">
            {cartItems.length === 0 ? (
              <div className="empty-message">
                <h3>Votre panier est vide.</h3>
                <p>Jetez un coup d'œil à nos événements / produits et trouvez l'inspiration !</p>
                <Link to="/products" className="view-products-button">Voir les produits</Link>
              </div>
            ) : (
              <div>
                <h3>Votre Panier</h3>
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>{item.name} - {item.price}€</li>
                  ))}
                </ul>
                <div className="total">Total: {cartItems.reduce((acc, item) => acc + item.price, 0)}€</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Section vidéo */}
      <div className="video-container" ref={sectionRef}>
        <video ref={videoRef} className="video-player" controls autoplay preload="metadata" poster="/images/video-poster.jpg">
          <source src="/video/can25.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Filtres */}
    
        

      <div>
      <div>
      <h1>Les Matchs</h1>
      <div className="match-list">
        {matches.map((match) => (
          <div key={match._id} className="match-card">
            <h2>{match.teams} </h2>
            <p><strong>Date:</strong> {new Date(match.date).toLocaleDateString()}</p>
            <p><strong>Heure:</strong> {match.time}</p>
            <p><strong>Lieu:</strong> {match.location}</p>
            <p><strong>Prix:</strong> {match.price} DH</p>
            <img
              src={`http://localhost:5000/${match.image}`}
              alt={`Image de ${match.team1} vs ${match.team2}`}
              width="300"
            />
            <button className="buy-ticket-btn1">Acheter</button>


          </div>
        ))}
      </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
}
