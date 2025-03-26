import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import "./EventsTable.css";
=======
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";

>>>>>>> 86a02ea7ce8badacfa846674d7f56320b151feca

const EventsTable = () => {
  const [events, setEvents] = useState([]);
  const navigate=useNavigate();
  const retour=()=>{
    navigate("/dashboard")
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Erreur:", err));
  }, []);

  // 🛑 Fonction pour supprimer un événement
  const deleteEvent = (id) => {
    if (window.confirm("Tu es sûr de vouloir supprimer cet événement ?")) {
      fetch(`http://localhost:5000/api/events/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          setEvents(events.filter((event) => event._id !== id));
        })
        .catch((err) => console.error("Erreur:", err));
    }
  };

  return (
<<<<<<< HEAD
    <div className="events-table-container">
      <h2 className="table-title">Liste des Événements</h2>
      <Link to="/addmusic" className="add-event-button">➕ Ajouter un Événement</Link>
=======
    <div className="container mt-4">
      <h2 className="mb-3">Liste des Événements</h2>
      <button className="btn btn-secondary" onClick={retour}>
      <HiArrowLeftStartOnRectangle />
</button> <br/>
<Link to="/addmusic" className="btn btn-success mb-3">➕ Ajouter un Événement</Link><br/>

>>>>>>> 86a02ea7ce8badacfa846674d7f56320b151feca

      <table className="events-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Nom</th>
            <th>Lieu</th>
            <th>Date</th>
            <th>Prix</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td>{event._id}</td>
              <td>
                <img
                  src={`http://localhost:5000/${event.image}`}
                  alt={event.name}
                  className="event-image"
                />
              </td>
              <td>{event.name}</td>
              <td>{event.location}</td>
              <td>{event.date}</td>
              <td>{event.price} DH</td>
              <td>
                <button className="delete-button" onClick={() => deleteEvent(event._id)}>
                  🗑 Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;
