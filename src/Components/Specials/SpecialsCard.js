import "./SpecialsCard.css";

const SpecialsCard = (props) => {
  return (
    <div className="cards ">
      <div className="card">
        <img className="cardImg" src={props.image} alt="" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default SpecialsCard;
