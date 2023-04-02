import React from "react";

const InnerPageHeader = (props) => {
  return (
    <>
      <section className="bottom-page-head">
        <img src="/images/Integrations.png" className="bg" alt="" />
        <div className="container-fluid">
          <div className="row">
            <div className="text">
              <h1 data-aos="fade-right" data-aos-duration="1400">
                {props?.title}
              </h1>
              <p data-aos="fade-left" data-aos-duration="1400">
                {props?.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerPageHeader;
