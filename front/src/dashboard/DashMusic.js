import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const EventsTable = () => {
  const [events, setEvents] = useState([]);

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
    <div className="container mt-4">
      <h2 className="mb-3">Liste des Événements</h2>
      <Link to="/addmusic" className="btn btn-primary mb-3">➕ Ajouter un Événement</Link>

      <table className="table table-striped table-bordered text-center">
        <thead className="table-dark">
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
                  className="img-thumbnail"
                  width="80"
                />
              </td>
              <td>{event.name}</td>
              <td>{event.location}</td>
              <td>{event.date}</td>
              <td>{event.price} DH</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteEvent(event._id)}>
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
