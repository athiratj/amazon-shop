import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img
          className="Header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      <div className="Header_search">
        <input type="text" className="Header_searchInput" />
        <SearchIcon className="Header_searchIcon" />
      </div>
      <div className="Header_nav">
        <div className="Header_option">
          <span className="Header_optionLineOne">Hello User</span>
          <span className="Header_optionLineTwo">Sign In </span>
        </div>
        <div className="Header_option">
          <span className="Header_optionLineOne">Return</span>
          <span className="Header_optionLineTwo">Orders</span>
        </div>
        <div className="Header_option">
          <span className="Header_optionLineOne">Your</span>
          <span className="Header_optionLineTwo">Prime</span>
        </div>
        <div className="Header_optionBasket">
          <ShoppingBasketIcon />
          <span className="Header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
