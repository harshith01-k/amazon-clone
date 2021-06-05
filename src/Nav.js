import React from "react";
import amazon from "./amazon.png";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Nav.css";
import { auth } from "./Firebase";
const Nav = ({ cart, user, name, setUser, setName }) => {
  console.log(name);
  const history = useHistory();
  const headerAuthen = () => {
    if (user) {
      auth.signOut();
      history.push("/");
      setUser(false);
      setName("");
    }
  };

  return (
    <div className="header">
      <Link to="/" className="header-logo">
        <div className="logo">
          <img src={amazon} alt="its an amazon logo" className="header-image" />
        </div>
      </Link>
      <div className="header-search">
        <input type="text" className="headerTextBox" />
        <SearchIcon className="headerSearchIcon" />
      </div>
      <div className="headerNavLinks">
        <Link to={!user && "/login"} className="header-link">
          <div className="header-option" onClick={headerAuthen}>
            <span className="first-part">Hello {name} </span>
            <span className="second-part">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <Link to="/" className="header-link removal">
          <div className="header-option">
            <span className="first-part">Returns</span>
            <span className="second-part">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header-link removal">
          <div className="header-option">
            <span className="first-part">Your</span>
            <span className="second-part">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header-link">
          <div className="header-checkout">
            <ShoppingBasketIcon className="cart-icon" />
            <span className="items">{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
