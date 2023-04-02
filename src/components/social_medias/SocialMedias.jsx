import React from "react";

const SocialMedias = (props) => {
  return (
    <>
      <section className="social-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5>
                {props?.title}
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 justify-content-center align-items-center d-flex">
              <a href="#" target="_blank">
                <img src="/images/social-1.svg" alt="" />
              </a>
              <a href="#" target="_blank">
                <img src="/images/social-2.svg" alt="" />
              </a>
              <a href="#" target="_blank">
                <img src="/images/social-3.svg" alt="" />
              </a>
              <a href="#" target="_blank">
                <img src="/images/social-4.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMedias;
