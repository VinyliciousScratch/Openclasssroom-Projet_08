import { NavLink} from 'react-router-dom';
import './Header.css';

function Header() {   
  return (
    <header className= "header">
      <img src={logo} alt="logo" />
      <nav>
          <ul>
            <li><NavLink to="/"  className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>À propos</NavLink></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;