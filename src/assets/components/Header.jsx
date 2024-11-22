import { Link, useNavigate } from "react-router-dom";

import logo from "../imgs/vinted-logo.png";

const Header = ({ token, handleConnexionStatus }) => {
  //   const location = useLocation();

  const navigate = useNavigate();

  return (
    <header className="container">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>

      <div className="search">
        <input type="text" placeholder=" 🔍  Recherche des articles" />
        {/* <div>
          <span>Trier par prix : </span>
          <span></span>
          <span>Prix entre : </span>
          <div>⭕️-----⭕️---------------------------------------</div>
        </div> */}
      </div>
      <nav>
        {token ? (
          <button
            className="button-logout"
            onClick={() => {
              handleConnexionStatus(null);
              // Cookies.remove("vinted-token");
              // setToken(null);
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
      <Link to="/">
        <button className="button-sold">Vends tes articles</button>
      </Link>
    </header>
  );
};

export default Header;
