import React from "react";
import Item from "../team/Item";
const Team = (props) => {
  return (
    <>
      <section data-aos="fade-up" data-aos-duration="1400" className="team">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h5>{props?.title}</h5>
              <p className="text-center">{props?.description}</p>
            </div>
          </div>
          <div className="row mt-5">
            <Item title="John Doe" jobTitle="Co-Founder" />
            <Item title="John Doe" jobTitle="Co-Founder" />
            <Item title="John Doe" jobTitle="Co-Founder" />
            <Item title="John Doe" jobTitle="Co-Founder" />
            <Item title="John Doe" jobTitle="Co-Founder" />
            <Item title="John Doe" jobTitle="Co-Founder" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
