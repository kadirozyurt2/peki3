import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";
import React, { useState, useEffect } from "react";

const Item = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === "en" ? en : tr;
  return (
    <>
      <div className="row d-flex justify-content-center item">
        <div
          data-aos="fade-right"
          data-aos-duration="1400"
          className="col-lg-4 left"
        >
          <h2>{t.recomda}</h2>
          <h3>{t.Thinkbig} </h3>
          <p>
             {t.ThinkbigTxt}
          </p>
          <a href="/reccomendations" className="btn-sub-text">
            <span>{t.Learnmore} </span> <img src="/images/btn-arrow-right.svg" />
          </a>
        </div>
        <div data-aos="fade-left" data-aos-duration="1400" className="col-lg-6">
          <img src="/images/services.jpg" />
        </div>
      </div>
      <div className="row d-flex justify-content-center item">
        <div className="col-lg-4 left">
          <h2>{t.recomda}</h2>
          <h3>{t.startlearning}</h3> 
          <p>
           {t.startLearningTxt}
          </p>
          <a href="/reccomendations" className="btn-sub-text">
            <span>{t.Learnmore}</span>{" "}
            <img src="/images/btn-arrow-right.svg" alt="" />
          </a>
        </div>
        <div className="col-lg-6">
          <img src="/images/Group28.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Item;
