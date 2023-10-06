import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const EventDetailsLayout = (props) => {
  const { eventId, eventTitle, eventDescription, date } = useParams();
  return (
    <div className="eventDetailsLayout">
      <h2>Event Details</h2>
      <p>Event ID {eventId}</p>
      <p>Event Title {eventTitle}</p>
      <p>Event Description {eventDescription}</p>
      <p>Event Date {date}</p>
      <p>Buy Tickets</p>
      <p>Order Menu</p>
      <Outlet />
    </div>
  );
};

export default EventDetailsLayout;
