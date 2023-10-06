import "./Menu.css";
import zestyImg from "../../images/zestyImg.jpg";
import pythonPunch from "../../images/pythonPunch.jpg";
import MenuCard from "./MenuCard";
import highball from "../../images/highball.jpg";
import cooler from "../../images/cooler.jpg";
import rubyMartini from "../../images/rubyMartini.jpg";
import javaJive from "../../images/javaJive.jpg";
import sour from "../../images/sour.jpg";
import collins from "../../images/collins.jpg";

const Menu = () => {
  const techDrinks = [
    {
      id: 1,
      image: zestyImg,
      title: "JavaScript Jolt",
      description:
        "A zesty mix of citrus and spirits for the ultimate code refresher.",
      price: 7,
    },
    {
      id: 2,
      image: highball,
      title: "HTML Highball",
      description: "A classic cocktail with a web development twist.",
      price: 8,
    },
    {
      id: 3,
      image: cooler,
      title: "CSS Cooler",
      description: "A cool and refreshing drink that styles up your evening.",
      price: 8,
    },
    {
      id: 4,
      image: pythonPunch,
      title: "Python Punch",
      description: "A punchy blend of fruity flavors for Python enthusiasts.",
      price: 7,
    },
    {
      id: 5,
      image: rubyMartini,
      title: "Ruby Red Martini",
      description: "An elegant martini with a ruby twist for Ruby lovers.",
      price: 6,
    },
    {
      id: 6,
      image: javaJive,
      title: "Java Jive",
      description:
        "A smooth coffee-infused cocktail to keep your coding energy high.",
      price: 9,
    },
    {
      id: 7,
      image: sour,
      title: "SQL Sour",
      description: "A tangy and sour mix that queries your taste buds.",
      price: 7,
    },
    {
      id: 8,
      image: collins,
      title: "C++ Collins",
      description: "A classic collins cocktail with a C++ twist. ",
      price: 10,
    },
  ];
  return (
    <div className="menu-content">
      <h2>Tech Drinks</h2>
      <div className="menu-cards">
        {techDrinks.map((item) => (
          <div className="menu-card">
            <MenuCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
