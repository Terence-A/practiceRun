import "./NavBar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="main-nav">
      <h1>Fact-V Tech Lounge</h1>
      <ul className="nav-list">
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/">
            <p>Home</p>
          </Link>
        </li>
        <li className={splitLocation[1] === "menu" ? "active" : ""}>
          <Link to="/menu">
            <p>Menu</p>
          </Link>
        </li>
        <li className={splitLocation[1] === "events" ? "active" : ""}>
          <Link to="/events">
            <p>Events</p>
          </Link>
        </li>
        <li className={splitLocation[1] === "about" ? "active" : ""}>
          <Link to="/about">
            <p>About</p>
          </Link>
        </li>
      </ul>
      <ul className="contact-li">
        <li>
          <Link to="/signIn">
            <p className="main-nav-btn">Sign In</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
