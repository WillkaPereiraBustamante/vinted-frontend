import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ handleConnexionStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email,
          password,
        }
      );
      handleConnexionStatus(response.data.token);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Se connecter</h2>
      <form className="signup-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button>Se connecter</button>
      </form>
      <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
    </div>
  );
};

export default Login;
