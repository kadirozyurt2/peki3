import React, { useState, useEffect } from "react";
import InnerPageHeader from "@/components/page/InnerPageHeader";
import Free from "@/components/pricing/Free";
import Pro from "@/components/pricing/Pro";
import Premium from "@/components/pricing/Premium";
import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";


const Pricing = () => {

  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === "en" ? en : tr;
  
  return (
    <>
      <InnerPageHeader title={`${t.SelectYour}`} description={`${t.SelectYour}`}
        
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
