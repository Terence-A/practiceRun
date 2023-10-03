import "./Menu.css";

const MenuCard = (props) => {
  const orderHandler = () => {
    alert("Drink ordered");
  };

  return (
    <div className="menu-cards ">
      <div className="menu-card">
        <img className="cardImg" src={props.image} alt="" />

        <div className="menu-bottom">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <button onClick={orderHandler}>Order</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
