import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="Home_container">
        <img
          className="Home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Edict/r02/1/Edict_GW_1500x600._CB406612940_.png"
          alt="amazon home"
        />

        <div className="Home_row">
          <Product />
          <Product />
        </div>
        <div className="Home_row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="Home_row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
