import NavBar from "../NavBar/NavBar";
import image from "../../images/pub.jpg";
import cocktailNight from "../../images/cocktailNight.jpg";
import serverSour from "../../images/serverSour.jpg";
import appletini from "../../images/appletini.jpg";
import "./Home.css";

import SpecialsCard from "../Specials/SpecialsCard";

const listings = [
  {
    image: cocktailNight,
    title: "Code & Cocktails Night",
    description:
      "A vibrant and refreshing drink designed to fuel your coding creativity. With a crisp and invigorating flavor, it's the perfect companion for a tech-themed night of networking and innovation.",
  },
  {
    image: appletini,
    title: "API Appletini",
    description:
      "A delightful twist on the classic Appletini, infused with just the right mix of APIs (Appletini Programming Ingredients) to satisfy your tech-savvy taste buds. Sip, code, and enjoy the perfect blend of sophistication and innovation.",
  },
  {
    image: serverSour,
    title: "Server Sour",
    description:
      "A zesty and tangy cocktail with a touch of server-side sophistication. Sip on the Server Sour and let its refreshing flavor inspire your tech-driven conversations and elevate your coding experience.",
  },
];

const Home = () => {
  return (
    <div className="home-content">
      <img className="banner" src={image} alt="" />
      <div className="cards">
        {listings.map((item) => (
          <SpecialsCard
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
