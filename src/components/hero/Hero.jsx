import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";
import React, { useState, useEffect } from "react";


const Hero = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === "en" ? en : tr;
  return (
    <>
      <section className="home-banner">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <img src="/images/home-banner.png" className="bg" />
              <h1 data-aos="fade-down" data-aos-duration="1400">
                {t.bringYour}
              </h1>
              <p data-aos="fade-up" data-aos-duration="1400">
                {t.automate}
                Automate interactive conversations in Instagram Messages,
                Facebook Messenger, Whatsapp and Twitter to grow your brand.
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

export default Hero;
