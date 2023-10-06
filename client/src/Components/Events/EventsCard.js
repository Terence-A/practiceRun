import "./EventsCard.css";
import { useNavigate } from "react-router-dom";

const EventsCard = (props) => {
  const navigate = useNavigate();
  const puchaseHandler = () => {
    console.log(props.eventId, props.eventTitle);
    const encodedEventImage = encodeURIComponent(props.eventImage);
    // navigate("/eventDetails");
    navigate(
      `/eventDetails/${props.eventId}/${props.eventTitle}/${props.eventDescription}/${props.date}/${encodedEventImage}`
    );
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
