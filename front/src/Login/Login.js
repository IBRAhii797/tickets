import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      
      localStorage.setItem("token", response.data.token); // Stocker le token
      alert(response.data.message);
      navigate("/"); // Redirection après login
    } catch (error) {
      alert("Erreur: " + (error.response?.data?.error || "Problème de connexion"));
    }
  };

  return (
    <div>
      <h2>Se connecter</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;


//hnaaa kont