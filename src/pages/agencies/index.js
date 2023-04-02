import React from "react";
import InnerPageHeader from "@/components/page/InnerPageHeader";
import Item from "@/components/agency/Item";
const Agencies = () => {
  return (
    <>
      <InnerPageHeader
        title="Hello Friend."
        description="Lorem ipsum dolor sit"
      />
      <section className="filter-wrapper">
        <div className="container-fluid">
          <div
            data-aos="fade-down"
            data-aos-duration="1400"
            className="row box-integrations"
          >
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </section>
    </>
  );
};

export default Agencies;
