import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Signup = ({ handleConnexionStatus }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    setErrorMessage(null);
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email,
          username,
          password,
          newsletter,
        }
      );
      console.log(response.data);

      handleConnexionStatus(response.data.token);

      navigate("/");
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("Cette adresse email est déjà utilisée :)");
      } else if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Veuillez remplir tous les champs");
      } else {
        setErrorMessage("Une erreur est survenue, veuillez réessayer !");
      }
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>S'inscrire</h2>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
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
        <div className="checkbox-container">
          <div>
            <input
              type="checkbox"
              checked={newsletter}
              onChange={() => {
                setNewsletter(!newsletter);
              }}
            />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button>S'inscrire</button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </div>
  );
};

export default Signup;
