import React, { useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import "./MusicForm.css"; // Assurez-vous d'utiliser le bon chemin pour le fichier CSS
import { useNavigate } from "react-router-dom";
=======
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";

>>>>>>> 86a02ea7ce8badacfa846674d7f56320b151feca

const MusicForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  
  const navigate = useNavigate(); // Initialisation de useNavigate

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
const retour=()=>{
  navigate("/dashmusic")
}
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("date", date);
    formData.append("price", price);
    formData.append("image", image);

    axios
      .post("http://localhost:5000/api/events", formData)
      .then((response) => {
        console.log("Event added:", response.data);
        alert("Événement ajouté avec succès !");
        navigate("/dashmusic"); // Redirection vers la page d'accueil après l'ajout de l'événement
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
<<<<<<< HEAD
    <div className="music-form-container">
      <h2 className="form-title">Ajouter un Événement</h2>
      <form onSubmit={handleSubmit} className="music-form">
        <div className="form-group">
=======
    <div className="container mt-4">
      <h2 className="mb-3">Ajouter un Événement</h2>
      <button className="btn btn-secondary" onClick={retour}>
      <HiArrowLeftStartOnRectangle />
</button>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
>>>>>>> 86a02ea7ce8badacfa846674d7f56320b151feca
          <label className="form-label">Nom de l'événement</label>
          <input
            type="text"
            className="form-input"
            placeholder="Entrez le nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Lieu</label>
          <input
            type="text"
            className="form-input"
            placeholder="Entrez le lieu"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Date</label>
          <input
            type="text"
            className="form-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Prix (en DH)</label>
          <input
            type="number"
            className="form-input"
            placeholder="Entrez le prix"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Image</label>
          <input type="file" className="form-input" onChange={handleFileChange} required />
        </div>

        <button type="submit" className="form-button">
          Ajouter l'événement
        </button>
      </form>
    </div>
  );
};

export default MusicForm;
