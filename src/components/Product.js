import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="Product">
      <div className="Product_info">
        <p>{title}</p>
        <p className="Product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="Product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="Product_image" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
