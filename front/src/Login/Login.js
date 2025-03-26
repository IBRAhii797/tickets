import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Assurez-vous d'importer le fichier CSS pour le style

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Pour afficher/cacher le mot de passe
  const [errorMessage, setErrorMessage] = useState(""); // Pour afficher l'erreur
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Réinitialiser les erreurs à chaque soumission
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token); // Stocker le token
      alert(response.data.message); // Afficher un message d'alerte
      navigate("/"); // Redirection après la connexion
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Problème de connexion");
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="login-box">
          {/* Titre principal et sous-titre */}
          <h2 className="b1">Bienvenue</h2>
          <p className="sub-title">Connectez-vous pour accéder à votre compte</p>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleLogin}>
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                👁️
              </span>
            </div>
            <button type="submit">Se connecter</button>
          </form>

          {/* Lien Mot de passe oublié */}
          <p className="forget-password">
            <a href="/forgot-password" className="m1">Mot de passe oublié ?</a>
          </p>

          <p className="signup-link">
            Vous n'avez pas de compte ? <a href="/signup">S'inscrire</a>
          </p>
        </div>
      </div>
      <div className="image-container">
        
      </div>
    </div>
  );
};

export default Login;
