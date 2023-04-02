import React from "react";

const Header = () => {
  return (
    <>
      <section className="home-banner">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <img
                data-aos="fade-down"
                data-aos-duration="1400"
                src="/images/chatbot.png"
                className="bg"
              />
              <h1 data-aos="fade-right" data-aos-duration="1400">
                  Chatbot automations <span>with</span> one click
              </h1>
              <p data-aos="fade-left" data-aos-duration="1400">
                 Our mission is to help businesses grow by building relationships
              </p>
              <a href="#" className="sub-btn">
                <span>
                  Get Started <small>~ It’s Free</small>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
