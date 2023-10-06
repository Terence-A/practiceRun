import "./NavBar.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import myCart from "../../images/emptyCart.png";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <div className="main-nav">
        <h1>Fact-V Tech Lounge</h1>
        <ul className="nav-list">
          <li>
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <p>Menu</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/events">
              <p>Events</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <p>About</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact">
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>

        <ul className="contact-li">
          <li>
            <Link to="/myCart">
              <img src={myCart} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/signIn">
              <p className="main-nav-btn">Sign In</p>
            </Link>
          </li>
        </ul>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
