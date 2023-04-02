import React from "react";

const Item = () => {
  return (
    <>
      <div className="row d-flex justify-content-center item">
        <div
          data-aos="fade-right"
          data-aos-duration="1400"
          className="col-lg-4 left"
        >
          <h2>RECOMMENDATION ENGINES</h2>
          <h3>Think big scale to our big engine</h3>
          <p>
            Increase product sales, customer more engage, generate qualified
            leads, and deliver instant support through personalized. Easily
            build and automate interactive conversations.
          </p>
          <a href="/reccomendations" className="btn-sub-text">
            <span>Learn more</span> <img src="/images/btn-arrow-right.svg" />
          </a>
        </div>
        <div data-aos="fade-left" data-aos-duration="1400" className="col-lg-6">
          <img src="/images/services.jpg" />
        </div>
      </div>
      <div className="row d-flex justify-content-center item">
        <div className="col-lg-4 left">
          <h2>RECOMMENDATION ENGINES</h2>
          <h3>Think big scale to our big engine</h3>
          <p>
            Increase product sales, customer more engage, generate qualified
            leads, and deliver instant support through personalized. Easily
            build and automate interactive conversations.
          </p>
          <a href="/reccomendations" className="btn-sub-text">
            <span>Learn more</span>{" "}
            <img src="/images/btn-arrow-right.svg" alt="" />
          </a>
        </div>
        <div className="col-lg-6">
          <img src="/images/Group28.jpg" alt="" />
        </div>
      </div>
      <div className="row d-flex justify-content-center item">
        <div className="col-lg-4 left">
          <h2>RECOMMENDATION ENGINES</h2>
          <h3>Think big scale to our big engine</h3>
          <p>
            Increase product sales, customer more engage, generate qualified
            leads, and deliver instant support through personalized. Easily
            build and automate interactive conversations.
          </p>
          <a href="/reccomendations" className="btn-sub-text">
            <span>Learn more</span>{" "}
            <img src="/images/btn-arrow-right.svg" alt="" />
          </a>
        </div>
        <div className="col-lg-6">
          <img src="/images/Group29.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Item;
