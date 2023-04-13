import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";
import React, { useState, useEffect } from "react";
import Questions from "./Questions";

const Faq = (props) => {

  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === "en" ? en : tr;
  
  return (
    <>
      <section data-aos="fade-down" data-aos-duration="1400" className="faq">
        <h5 className="mt-5 pt-5" dangerouslySetInnerHTML={{__html: t.sssTitle}}>
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Questions title={`${t.sssTitle1}`}
               description={`${t.sss1}`}
                order="1"
              />
              <Questions title={`${t.sssTitle2}`}
               description={`${t.sss2}`}
                order="2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
