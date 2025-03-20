import React, { useEffect, useState } from "react";
import Navbar from "../nav-bar/Navbar";

const ConcertPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events from backend when component mounts
  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data); // Stocke l'data f events
        setLoading(false); // L7ajat jsmit fi loading
      })
      .catch((err) => {
        console.error('Error:', err);
        setLoading(false); // Idha kan chi error, ndirlo f loading false
      });
  }, []); // [] y3ni execute juste marra wa7da 3nd l'initialisation

  if (loading) {
    return <div>Chargement...</div>; // Display loading message
  }

  return (
    <div>
      <Navbar />
      <h1>Les événements</h1>
      <div className="event-list">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event._id} className="event-card">
              <h2>{event.name}</h2>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Price:</strong> {event.price} DH</p>
              {event.image && (
                <img 
                  src={`http://localhost:5000/${event.image}`} 
                  alt={event.name} 
                  width="300" 
                />
              
              )}
            <button className="buy-ticket-btn1">Acheter</button>


            </div>
          ))
        ) : (
          <p>Aucun événement trouvé</p> // Affichage si ya mouchkil
        )}
      </div>
    </div>
  );
};

export default ConcertPage;
