import React from "react";
import homepage from "./banner.jpg";
import "./Banner.css";
import Product from "./Product";
const Banner = ({ items, cart, setCart, setItems }) => {
  return (
    <div>
      <div className="banner">
        <img
          className="banner-img"
          src={homepage}
          alt="an alternative home banner"
        />
      </div>
      <div className="products">
        {items.map((item) => (
          <Product
          item={item}
            setItems={setItems}
            items={items}
            cart={cart}
            setCart={setCart}
            key={item.id}
            id={item.id}
            title={item.tittle}
            price={item.price}
            rating={item.rating}
            image={item.product}
          />
        ))}
      </div>
    </div>
  );
};
export default Banner;
