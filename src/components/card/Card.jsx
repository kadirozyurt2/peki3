import React from "react";
import Item from "./Item";

const Card = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration="1400"
        className="boxs-info-area"
      >
        <h5 data-aos="fade-right" data-aos-duration="1400">
          We are <span>here</span> for you
        </h5>
        <p
          data-aos="fade-left"
          data-aos-duration="1400"
          className="text-center mb-5"
        >
          We have so many great services for products
        </p>
        <div className="container">
          <div className="row justify-content-between">
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
