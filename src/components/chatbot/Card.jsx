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
        <h5 className="mb-5" data-aos="fade-right" data-aos-duration="1400">
          More features <span>for</span> Instagram
        </h5>
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
