import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import './CanPage.css';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import FooterImage from "./img1.png"; 
import { FaHome, FaUser, FaShoppingCart, FaPhoneAlt, FaFutbol, FaMusic, FaSearch } from 'react-icons/fa';
import Login from '../Login/Login';  
import matches from "./DataCan25"; 


export default function CanPage(){
    const [showLogin, setShowLogin] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedCompetition, setSelectedCompetition] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [match,setMatch]=useState(matches);

    
  
    // Gestion de la vidéo (lecture/pause au scroll)
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
  
    const handleLoginClick = () => setShowLogin(true);
    const handleCloseLogin = () => setShowLogin(false);
    
  
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
  
    // Filtrer les matchs selon les critères sélectionnés
    const filteredMatches = matches.filter(match => {
      return (
        (selectedTeam ? match.teams.toLowerCase().includes(selectedTeam.toLowerCase()) : true) &&
        (selectedCompetition ? match.groupe.toLowerCase().includes(selectedCompetition.toLowerCase()) : true) &&
        (selectedLocation ? match.stadium.toLowerCase().includes(selectedLocation.toLowerCase()) : true) &&
        (searchQuery ? match.teams.toLowerCase().includes(searchQuery.toLowerCase()) : true)
      );
    });

    return(
        <div>
  {/* Barre de navigation */}
  <div className="main-nav">
    <ul className="left-nav-items">
      <li>
        <Link to="/" className="site-logo">WRI9A</Link>
      </li>
    </ul>
    <ul>
      <li>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Rechercher..."
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </li>
    </ul>

    <ul className="right-nav-items">
      <li>
        <Link onClick={handleLoginClick}>
          <FaUser /> SECONNECTER
        </Link>
      </li>
      <li>
        <Link to="/panier">
          <FaShoppingCart /> PANIER
        </Link>
      </li>
    </ul>
  </div>

  {/* Navigation secondaire */}
  <div className="secondary-nav">
    <Link to="/"> <FaHome /> ACCEUIL</Link>
    <Link to="/can-page"> <FaFutbol /> CAN 25 </Link>
    <Link to="/concerts"> <FaMusic /> CONCERT ET FESTIVALS</Link>
    <Link to="/about"> <FaPhoneAlt /> ABOUT US</Link>
  </div>

  {/* Login Modal */}
  {showLogin && (
    <div className="login-modal-overlay">
      <div className="login-modal-box">
        <Login />
        <button className="close-modal-btn" onClick={handleCloseLogin}>X</button>
      </div>
    </div>
  )}

  {/* Section vidéo */}
  <div className="video-container" ref={sectionRef}>
    <video
      ref={videoRef}
      className="video-player"
      controls
      autoplay
      preload="metadata"
      poster="/images/video-poster.jpg"
    >
      <source src="/video/can25.mp4" type="video/mp4" />
    </video>
  </div>


   {/* Filtres */}
   <div className="filters">
        <div className="filter-item">
          <label htmlFor="team">Team</label>
          <select
            id="team"
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="filter-select"
          >
            <option value="">Tous Les Teams</option>
           <option value="Maroc">Maroc</option>
            <option value="Comores">Comores</option>
            <option value="Mali">Mali</option>
            <option value="Zambie">Zambie</option>
            <option value="Afrique du Sud">Afrique du Sud</option>
            <option value="Égypte">Égypte</option>
            <option value="Angola">Angola</option>
            <option value="Zimbabwe">Zimbabwe</option>
            <option value="République Démocratique du Congo">République Démocratique du Congo</option>
            <option value="Sénégal">Sénégal</option>
            <option value="Bénin">Bénin</option>
            <option value="Botswana">Botswana</option>
            <option value="Algérie">Algérie</option>
            <option value="Soudan">Soudan</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Guinée Équatoriale">Guinée Équatoriale</option>
            <option value="Cameroun">Cameroun</option>
            <option value="Gabon">Gabon</option>
            <option value="Côte d'Ivoire">Côte d'Ivoire</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Tanzanie">Tanzanie</option>
            <option value="Ouganda">Ouganda</option>
            {/* Ajoute d'autres options si nécessaire */}
          </select>
        </div>

        <div className="filter-item">
  <label htmlFor="groupe">Groupe</label>
  <select
    id="groupe"
    value={selectedCompetition}  // Ici, nous gardons la même variable d'état pour la gestion de la sélection
    onChange={(e) => setSelectedCompetition(e.target.value)}  // Nous utilisons setSelectedCompetition, mais tu peux aussi renommer pour plus de clarté
    className="filter-select"
  >
    <option value="">Tous les Groupes</option>
    <option value="A">Groupe A</option>
    <option value="B">Groupe B</option>
    <option value="C">Groupe C</option>
    <option value="D">Groupe D</option>
    <option value="E">Groupe E</option>
    <option value="F">Groupe F</option>
  </select>
</div>


        <div className="filter-item">
          <label htmlFor="location">Location</label>
          <select
            id="location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="filter-select"
          >
            <option value="">All Locations</option>
            <option value="Marrakech">Marrakech</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Rabat">Rabat</option>
            <option value="Fez">Tanger</option>

          </select>
        </div>
      </div>
         {/* Affichage des matchs filtrés */}
        
  {/* Affichage des matchs filtrés */}
<div className="can25-container">
  <h2 className="can25-title">Matches à venir</h2>
  <div className="can25-grid">
    {filteredMatches.map((match, index) => (  // Using filteredMatches instead of matches
      <div key={index} className="match-card">
        <img src={`/images/${match.img}`} alt={match.teams} className="match-image" />
        <div className="match-info">
          <div className="match-teams">{match.teams}</div>
          <div className="match-stadium">📍 {match.stadium}</div>
          <div className="countdown-timer">⏳ {match.date}</div>
          <div className="match-price">
            À partir de <span className="static-price">{match.prix}</span>
          </div>
        </div>
        <button className="buy-ticket-btn1">ACHETER</button>
      </div>
    ))}
  </div>
</div>

    );


            
        </div>


    )
}