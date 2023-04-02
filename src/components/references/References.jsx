import React from "react";
import Header from "./Header";
import ReferencesSwiper from "./ReferencesSwiper";

const References = (props) => {
  return (
    <>
      <div data-aos="fade-down" data-aos-duration="1400" className="trusted-by">
        <div className="container-fluid p-0">
          <div className="row">
            <Header 
                title={props?.title}
                description={props?.description}
            />
            <div className="col-lg-12">
              <div className="marquee-slide-wrapper logo-slide">
                <div className="marquee-slider">
                    <ReferencesSwiper />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default References;
