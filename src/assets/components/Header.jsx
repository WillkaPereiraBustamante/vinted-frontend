import {
  Link,
  //  useLocation
} from "react-router-dom";

const Header = () => {
  //   const location = useLocation();
  return (
    <header className="container">
      <img className="logo" src="src/assets/imgs/vinted-logo.png" alt="" />

      <div className="search">
        <input type="text" placeholder=" 🔍  Recherche des articles" />
        <div>
          <span>Trier par prix : </span>
          <span></span>
          <span>Prix entre : </span>
          <div>⭕️-----⭕️---------------------------------------</div>
        </div>
      </div>
      <nav>
        <Link to="/">
          <button className="button-login-signup">S'inscrire</button>
        </Link>
        <Link to="/">
          <button className="button-login-signup">Se connecter</button>
        </Link>
      </nav>
      <Link to="/">
        <button className="button-sold">Vends tes articles</button>
      </Link>
    </header>
  );
};

export default Header;
