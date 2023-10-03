import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Events from "./Components/Events/Events";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <main>
      <div className="wrapper">
        <Router>
          <div>
            <NavBar />
            <div className="content">
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                  exact
                  activeClassName="active"
                />
                <Route
                  path="/menu"
                  element={<Menu />}
                  activeClassName="active"
                />
                <Route
                  path="/events"
                  element={<Events />}
                  activeClassName="active"
                />
                <Route
                  path="/about"
                  element={<AboutUs />}
                  activeClassName="active"
                />
                <Route
                  path="/signIn"
                  element={<SignIn />}
                  activeClassName="active"
                />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
      <Footer />
    </main>
  );
}

export default App;
