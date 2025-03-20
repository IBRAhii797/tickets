import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Can = () => {
  const [matches, setMatches] = useState([]); // Liste des matchs
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true); // Afficher le loading
      try {
        const response = await axios.get("http://localhost:5000/api/matches");
        setMatches(response.data.slice(0, 12)); // Limiter à 12 matchs seulement
        setLoading(false); // Fin du loading
      } catch (error) {
        console.error("Erreur lors de la récupération des matchs :", error);
        setLoading(false); // Fin du loading en cas d'erreur
      }
    };

    fetchMatches(); // Charger les matchs au premier rendu
  }, []); // Se lance une seule fois lors du premier rendu

  

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="can25-container">
      <h1 className="can25-title">Can 25</h1>
      <div className="can25-grid">
        {matches.map((match) => {
          return (
            <div className="match-card" key={match._id}>
              <img
              src={`http://localhost:5000/${match.image}`}// Si tu as des images
              className="match-image"
              
            />
              <div className="match-info">
                <div className="match-teams">{match.teams}</div>
                <div className="match-stadium">📆 {new Date(match.date).toLocaleDateString()}</div>
                <div className="match-teams">⏱️{match.time}</div>

                <div className="match-stadium">📍 {match.location}</div>
                

                

                <div className="match-price">
                  À partir de <span className="static-price">{match.price} MAD</span>
                </div>
              </div>
              <button className="buy-ticket-btn1
              ">Acheter</button>
            </div>
          );
        })}
      </div>
      <div className="voir-plus-container">
        <a href="/can-page" className="voir-plus-btn">
          Voir plus
        </a>
      </div>
    </div>
  );
};

export default Can;
