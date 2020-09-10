import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="Product">
      <div className="Product_info">
        <p>The first product</p>
        <p className="Product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="Product_rating">
          <p>*</p>
        </div>
      </div>
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/81s6DUyQCZL._AC_UL480_SR312,480_.jpg"
        alt=""
        className="Product_image"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
