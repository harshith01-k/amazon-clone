// import { Check } from "@material-ui/icons";
import React from "react";
import Check from "./Check";
import add from "./ad.jpg";

const Checkout = ({ cart, setCart }) => {
  return (
    <div className="orders-list">
      <div className="add">
        <img style={{width:"100%"}} src={add} alt="its an alternative add" />
      </div>

      <h1>{cart.length > 0 ? "" : "Your cart is empty"}</h1>
      <div className="checkout">
        {cart.map((buy) => (
          <Check
            buy={buy}
            cart={cart}
            setCart={setCart}
            title={buy.item.tittle}
            price={buy.item.price}
            rating={buy.item.rating}
            image={buy.item.product}
            id={buy.item.id}
          />
        ))}
      </div>
      
    </div>
  );
};
export default Checkout;
