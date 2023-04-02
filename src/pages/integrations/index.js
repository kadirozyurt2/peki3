import React from "react";
import InnerPageHeader from "@/components/page/InnerPageHeader";
import Categories from "@/components/integrations/Categories";
import Item from "@/components/integrations/Item";
import StartLearning from "@/components/started/StartLearning";
import Card from "@/components/card/Card";

const Integrations = () => {
  return (
    <>
      <InnerPageHeader
        title="Peki Integrations"
        description="Connect your Peki account to your favorite tools"
      />
      <section
        data-aos="fade-down"
        data-aos-duration="1400"
        className="filter-wrapper"
      >
        <div className="container">
          <Categories />
          <div
            data-aos="fade-down"
            data-aos-duration="1400"
            className="row box-integrations"
          >
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </section>
      <StartLearning />
      <Card />
    </>
  );
};

export default Integrations;
