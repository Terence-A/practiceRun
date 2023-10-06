import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//pages
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Events from "./Components/Events/Events";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/SignIn/SignIn";
// import EventDetails from "./Components/Events/EventDetails";

//Layouts
import RootLayout from "./Components/Layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} exact />
      <Route path="menu" element={<Menu />} />
      <Route path="events" element={<Events />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="eventDetails" element={<EventDetails />} /> */}
    </Route>
  )
);

function App() {
  return (
    <main-wrapper>
      <div className="wrapper">
        <div className="content">
          <RouterProvider router={router} />
        </div>
      </div>
      <Footer />
    </main-wrapper>
  );
}

export default App;
