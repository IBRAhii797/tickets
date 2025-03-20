import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const MatchesTable = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des matchs :", error);
        setLoading(false);
      });
  }, []);

  // Fonction pour supprimer un match
  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce match ?")) {
      fetch(`http://localhost:5000/api/matches/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          setMatches(matches.filter((match) => match._id !== id)); // Mise à jour de l'état
        })
        .catch((error) => console.error("Erreur lors de la suppression :", error));
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Liste des Matchs</h1>
      <Link to="/addmatch" className="btn btn-success mb-3">
        Ajouter un Match
      </Link>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>id match</th>
            <th>Image</th>
            <th>Équipes</th>
            <th>Date</th>
            <th>Heure</th>
            <th>Stade</th>
            <th>Prix (DH)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match._id}>
              <td>{match._id}</td>
              <td>
                <img
                  src={`http://localhost:5000/${match.image}`}
                  alt={`${match.teams}`}
                  width="100"
                  className="img-fluid"
                />
              </td>
              <td>{match.teams}</td>
              <td>{new Date(match.date).toLocaleDateString()}</td>
              <td>{match.time}</td>
              <td>{match.location}</td>
              <td>{match.price} DH</td>
              <td>
                <button
                  onClick={() => handleDelete(match._id)}
                  className="btn btn-danger"
                >
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

export default MatchesTable;
