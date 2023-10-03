import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="main-nav">
      <h1>Fact-V Tech Lounge</h1>
      <ul className="nav-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/menu"> Menu</a>
        </li>
        <li>
          <a href="/events"> Events</a>
        </li>
        <li>
          <a href="/about"> About Us</a>
        </li>
      </ul>
      <ul className="contact-li">
        <li>
          <a className="main-nav-btn" href="/signIn">
            Sign In
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
