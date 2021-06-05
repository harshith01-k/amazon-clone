import React from "react";
import StarIcon from '@material-ui/icons/Star';
import "./Product.css";
import { v4 as uuidv4 } from "uuid";


const Product = ({ title, price, rating, image,items,cart,setCart,item }) => {

  function addToBasket(){
    console.log(item);
    setCart([...cart,{item,id : uuidv4()}])
    
  }
  return (
    <div className="product-items">
      <div className="procuct-title">
        <p>{title}</p>
      </div>
      <div className="product-price">
        <span>Price : </span>
        <small> $ </small>
        <strong> { price } </strong>
      </div>
      <div className="rating">
        {Array(rating)
          .fill()
          .map(() => (
            <p><StarIcon className="icon-color" /></p>
          ))}
      </div>
      <img className="product-img" src={image} alt="product user information"></img>
      <button onClick={addToBasket} className="addBtn">Add to cart</button>
    </div>
  );
};
export default Product;
