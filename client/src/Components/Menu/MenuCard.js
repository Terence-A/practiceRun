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
          <p>${props.price}</p>
          <button onClick={orderHandler}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
