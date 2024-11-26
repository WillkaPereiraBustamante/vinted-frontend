import { Link, useNavigate } from "react-router-dom";
import logo from "../imgs/vinted-logo.png";

const Header = ({ token, handleConnexionStatus, title, setTitle }) => {
  const navigate = useNavigate();

  return (
    <header className="container">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>

      <div className="search">
        <input
          type="text"
          placeholder="  🔍  Recherche des articles"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <nav>
        {token ? (
          <button
            className="button-logout"
            onClick={() => {
              handleConnexionStatus(null);
              navigate("/");
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <>
            <Link to="/signup">
              <button className="button-login-signup">S'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="button-login-signup">Se connecter</button>
            </Link>
          </>
        )}
      </nav>
      <Link to={token ? "/publish" : "/login"}>
        <button className="button-sold">Vends tes articles</button>
      </Link>
    </header>
  );
};

export default Header;
