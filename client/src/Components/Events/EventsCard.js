import "./EventsCard.css";
import { useNavigate } from "react-router-dom";

const EventsCard = (props) => {
  const navigate = useNavigate();
  const puchaseHandler = () => {
    navigate(`/eventDetails/${props.eventId}`);
  };

  return (
    <div className="eventCards">
      <div className="eventCard">
        <div className="eventInfo">
          <h3>{props.eventTitle}</h3>
          <p>{props.eventDescription}</p>
          <p>{props.date}</p>

          <button className="purchaseTicket" onClick={puchaseHandler}>
            View Event
          </button>
        </div>
        <img className="eventCardImg" src={props.eventImage} alt="" />
      </div>
    </div>
  );
};

export default EventsCard;
