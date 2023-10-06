import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./EventDetailsLayout.css";

const EventDetailsLayout = (props) => {
  const navigate = useNavigate();
  const { eventTitle, eventDescription, date, encodedEventImage } = useParams();
  const onOrderHandler = () => {
    navigate("/menu");
  };
  return (
    <div className="eventDetailsLayout">
      <h2>Event Details</h2>
      <div className="largeCard">
        <img className="lgEventCardImg" src={encodedEventImage} alt="" />
        <div className="large-card-side">
          <div className="large-card-content">
            <p className="event-title">{eventTitle}</p>
            <p className="event-description">
              Event Description {eventDescription}
            </p>
            <p className="event-date">Event Date {date}</p>
          </div>
          <div className="large-card-btns">
            <button className="purchase-btn">Buy Tickets</button>
            <button className="order-menu-btn" onClick={onOrderHandler}>
              Order Menu
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default EventDetailsLayout;
