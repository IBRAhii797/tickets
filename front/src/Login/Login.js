import { useState } from "react";
import axios from "axios";
import "./Login.css"
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
 const navigate =useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error registering", error);
    }
    navigate('/')
  };
    return (
        <div className='login-container'>
           
            

            <div className='signup-box'>
                <h2>Nouveau compte</h2>
                <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required /> <br/>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required /> <br/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required /> <br/>
                <button type="submit">Register</button>
                </form>
                <p className='social-text'>Ou inscrivez-vous avec vos réseaux sociaux:</p>
                <div className='social-buttons'>
                    <a href='https://www.facebook.com'><button className='facebook-button'>Facebook</button></a>
                    <a href='https://accounts.google.com/signin'><button className='google-button'>Google+</button></a>
                </div>
            </div>
        </div>
    );
}

export default Register