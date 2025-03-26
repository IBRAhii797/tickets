import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Importer useNavigate
import axios from "axios";
import "./Login.css";

const Newacc = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 👈 Initialiser navigate

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        username,
        email,
        password,
      });
      alert(response.data.message); // ✅ Afficher message de succès

      navigate("/login"); // 👈 Rediriger vers la page de connexion
    } catch (error) {
      alert("Erreur: " + (error.response?.data?.error || "Problème serveur"));
    }
  };

  return (
    <div className="newacc-container">
      <div className="newacc-form">
        <h2>Créer un compte</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Nom"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default Newacc;
