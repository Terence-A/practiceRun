import { useParams } from "react-router-dom";
const EventDetails = (props) => {
  const { eventId } = useParams();

  // Fetch event details using the 'eventId' from the route parameter

  return (
    <div>
      <h2>Event Details</h2>
      <p>Event ID: {eventId}</p>
      {/* Display other event details based on the fetched data */}
    </div>
  );
};
export default EventDetails;
