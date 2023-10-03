import "./Events.css";
import eventOne from "../../images/eventOne.jpg";
import eventTwo from "../../images/eventTwo.jpg";
import eventThree from "../../images/eventThree.jpg";
import EventsCard from "./EventsCard";

const Events = () => {
  const eventListings = [
    {
      image: eventOne,
      title: "Bug Bash & Bites",
      description:
        "Debug, munch, and network with techies who love solving problems.",
    },
    {
      image: eventTwo,
      title: "API & Appetizers Mixer",
      description:
        "Network and explore the world of APIs while enjoying appetizers.",
    },
    {
      image: eventThree,
      title: "Web Dev Happy Hour",
      description: "An informal gathering for web developers to network.",
    },
  ];

  return (
    <div>
      <div className="eventCards">
        {eventListings.map((item) => (
          <EventsCard
            eventImage={item.image}
            eventTitle={item.title}
            eventDescription={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
