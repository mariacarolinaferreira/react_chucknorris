import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        src="https://cataas.com/cat"
        alt="Avatar Gato"
        className="avatar"
      />

      <nav>
        <Link to="/">Navegador</Link>
        <Link to="/chuck">Chuck Norris</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}

export default Header;
