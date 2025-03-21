import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";


const AddMatchForm = () => {
  const navigate = useNavigate();
  const retour=()=>{
    navigate("/dashcan")
  } // Initialisation du navigate
  
  const [formData, setFormData] = useState({
    teams: "",
    date: "",
    time: "",
    location: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append("teams", formData.teams);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("time", formData.time);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("image", formData.image);

    try {
      const response = await fetch("http://localhost:5000/api/matches", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Match ajouté avec succès !");
        navigate("/dashcan"); // 🔥 Redirection vers la page d'accueil
      } else {
        alert("Erreur lors de l'ajout du match !");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du match :", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Ajouter un Match</h2>
      <button className="btn btn-secondary" onClick={retour}>
      <HiArrowLeftStartOnRectangle />
</button>
      <form onSubmit={handleSubmit} className="border rounded bg-light p-4">
        
        <div className="mb-3">
          <label className="form-label">Équipes :</label>
          <input
            type="text"
            name="teams"
            className="form-control"
            value={formData.teams}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date :</label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Heure :</label>
          <input
            type="time"
            name="time"
            className="form-control"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Lieu :</label>
          <input
            type="text"
            name="location"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Prix (en DH) :</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image :</label>
          <input
            type="file"
            name="image"
            className="form-control"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Ajouter le match
        </button>
      </form>
    </div>
  );
};

export default AddMatchForm;
