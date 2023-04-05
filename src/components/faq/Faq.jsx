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
        <h5>
            {/* {props?.title} */}
            Frequently <span>asked</span> questions

        </h5>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Questions 
                title="{{t.IncreaseInstagram1}}"
                description="Lorem ipsum dolor sit"
                order="1"
              />
              <Questions 
                title="How can so many automation for chatbot?"
                description="Lorem ipsum dolor sit"
                order="2"
              />
              <Questions 
                title="Why do I need a Instagram automation?"
                description="Lorem ipsum dolor sit"
                order="3"
              />
              <Questions 
                title="Can I create a Messenger and automation?"
                description="Lorem ipsum dolor sit"
                order="4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
