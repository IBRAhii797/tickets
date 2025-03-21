import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"


const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/admin/verify", {
        email,
        password,
      });

      // Si l'admin est trouvé, rediriger vers la page dashboard
      if (response.data.message === "Admin found") {
        alert("Login successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Erreur : " + (error.response?.data?.error || "Problème de connexion"));
    }
  };

  return (
    <div>
      <h2>Login Admin</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default AdminLogin;
