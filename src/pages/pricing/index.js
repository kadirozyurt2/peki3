import React from "react";
import InnerPageHeader from "@/components/page/InnerPageHeader";
import Free from "@/components/pricing/Free";
import Pro from "@/components/pricing/Pro";
import Premium from "@/components/pricing/Premium";
const Pricing = () => {
  return (
    <>
      <InnerPageHeader
        title="Select your plan"
        description="Connect your Peki account to your favorite tools"
      />
      <section className="your-plan">
        <div className="container-fluid">
          <div
            data-aos="fade-down"
            data-aos-duration="1400"
            className="row justify-content-between"
          >
            <Free />
            <Pro />
            <Premium />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
