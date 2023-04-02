import React from "react";

const InnerPageContent = (props) => {
  return (
    <>
      <section className="text-container">
        <div className="container m-auto">
          <div className="row">
            <div
              data-aos="fade-right"
              data-aos-duration="1400"
              className="col-lg-4"
            >
              <h2>
                {props?.title}
              </h2>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1400"
              className="col-lg-6"
            >
              <p>{props?.content}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerPageContent;
