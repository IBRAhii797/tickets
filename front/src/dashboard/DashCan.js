import React, { useState } from "react";

const AddMatchForm = () => {
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
      } else {
        alert("Erreur lors de l'ajout du match !");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du match :", error);
    }
  };



  

  return (
    <div>
    <div className="ajouter">
      <h1>Ajouter un match</h1>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Équipes:</label>
          <input
            type="text"
            name="teams"
            value={formData.teams}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Heure:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Lieu:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Prix:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Ajouter le match</button>
      </form>
    </div>
    <div className="table">


    </div>
    </div>
  );
};

export default AddMatchForm;
