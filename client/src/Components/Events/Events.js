import "./Events.css";
import eventOne from "../../images/eventOne.jpg";
import eventTwo from "../../images/eventTwo.jpg";
import eventThree from "../../images/eventThree.jpg";
import EventsCard from "./EventsCard";

const Events = () => {
  const eventListings = [
    {
      eventId: 1,
      image: eventOne,
      title: "Bug Bash & Bites",
      description:
        "Debug, munch, and network with techies who love solving problems.",
      date: "November 3rd",
    },
    {
      eventId: 2,
      image: eventTwo,
      title: "API & Appetizers Mixer",
      description:
        "Network and explore the world of APIs while enjoying appetizers.",
      date: "November 6th",
    },
    {
      eventId: 3,
      image: eventThree,
      title: "Web Dev Happy Hour",
      description: "An informal gathering for web developers to network.",
      date: "November 10th",
    },
  ];

  return (
    <div>
      <div className="eventCards">
        {eventListings.map((item) => (
          <EventsCard
            eventId={item.eventId}
            eventImage={item.image}
            eventTitle={item.title}
            eventDescription={item.description}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
