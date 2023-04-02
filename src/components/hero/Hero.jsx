import React from "react";

const Hero = () => {
  return (
    <>
      <section className="home-banner">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <img src="/images/home-banner.png" className="bg" />
              <h1 data-aos="fade-down" data-aos-duration="1400">
                Bring your products to life <span>with</span> Peki
              </h1>
              <p data-aos="fade-up" data-aos-duration="1400">
                Automate interactive conversations in Instagram Messages,
                Facebook Messenger, Whatsapp and Twitter to grow your brand.
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

export default Hero;
