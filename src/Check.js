import React from "react";
import "./Check.css";
import StarIcon from "@material-ui/icons/Star";

const Check = ({ title, price, rating, image, setCart, buy, cart }) => {
  const deleteItem = () => {
    setCart(cart.filter((item) => item.id !== buy.id));
  };
  return (
    <div className="check">
      <img src={image} className="finalImg" alt="gdv" />

      <div className="info">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="price">
          <span>Price : </span>
          <small>$</small>
          <strong>{price}</strong>
        </div>

        <div className="rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>
                <StarIcon className="icon-color" />
              </p>
            ))}
        </div>
        <button type="button" className="deleteBtn" onClick={deleteItem}>
          Remove Item
        </button>
      </div>
    </div>
  );
};
export default Check;
