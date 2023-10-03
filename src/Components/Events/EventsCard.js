import "./EventsCard.css";

const EventsCard = (props) => {
  const puchaseHandler = () => {
    alert("Purchase Ticket");
  };

  return (
    <div className="eventCards">
      <div className="eventCard">
        <div className="eventInfo">
          <h3>{props.eventTitle}</h3>
          <p>{props.eventDescription}</p>
          <button className="purchaseTicket" onClick={puchaseHandler}>
            Purchase Ticket
          </button>
        </div>
        <img className="eventCardImg" src={props.eventImage} alt="" />
      </div>
    </div>
  );
};

export default EventsCard;
