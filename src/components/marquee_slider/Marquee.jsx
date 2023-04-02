import React from "react";
import Header from "./Header";
import MarqueeSwiper from "./MarqueeSwiper";
const Marquee = (props) => {
  return (
    <>
      {(props?.title || props?.description) && (
        <Header title={props?.title} description={props?.description} />
      )}
      <section
        data-aos="fade-down"
        data-aos-duration="1400"
        className="marquee-slide-wrapper"
      >
        <div className="marquee-slider">
          <MarqueeSwiper />
        </div>
      </section>
    </>
  );
};

export default Marquee;
