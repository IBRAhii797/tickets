import React, { useState } from 'react';
import axios from 'axios';


const MusicForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    formData.append('date', date);
    formData.append('price', price);
    formData.append('image', image);  // Ajouter l'image au formulaire

    // Envoie de la requête POST avec FormData
    axios.post('http://localhost:5000/api/events', formData)
      .then((response) => {
        console.log('Event added:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nom de l'événement" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Lieu" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Prix" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <input 
        type="file" 
        onChange={handleFileChange} 
      />
      <button type="submit">Ajouter l'événement</button>
    </form>
  );
};

export default MusicForm;
