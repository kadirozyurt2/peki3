import React from "react";
import Item from "./Item";

const Services = () => {
  return (
    <>
      <section
        data-aos="fade-down"
        data-aos-duration="1400"
        className="services-boxs mt-5 pt-5"
      >
        <h5>
          Our <span>succesfull</span> services
        </h5>
        <p className="text-center mb-5">
          We have so many great services for your products
        </p>
        <div className="container-fluid">
          <Item />
        </div>
      </section>
    </>
  );
};

export default Services;
