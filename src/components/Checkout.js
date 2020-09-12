import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="Checkout">
      <div className="Checkout__left">
        <img
          className="Checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, User</h3>
          <h2 className="Checkout__title">Your shopping Basket</h2>
        </div>
      </div>
      <div className="Checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
