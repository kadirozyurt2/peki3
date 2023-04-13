import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";
import React, {Fragment, useState, useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === "en" ? en : tr;
  
  return (
    <>
      <section className="home-banner">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <img
                data-aos="fade-down"
                data-aos-duration="1400"
                src="/images/chatbot.png"
                className="bg"
              />
               <h1 
                data-aos="fade-down" 
                data-aos-duration="1400"
                dangerouslySetInnerHTML={{__html: t.ChatbotAutomations}}
                >
              </h1>
              <p data-aos="fade-left" data-aos-duration="1400">
                {t.OurMission}
              </p>
              <a href="#" className="sub-btn">
                <span>
                  {t.getStart} <small>~ {t.free}</small>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
