import React, { useState, useEffect } from "react";
import SwiperCore, { Autoplay, Parallax } from "swiper";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";
import Item from "./Item";

const Services = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === "en" ? en : tr;
  return (
    <>
      <section
        data-aos="fade-down"
        data-aos-duration="1400"
        className="services-boxs mt-5 pt-5"
      >
        <h5>
          {t.Oursuccesfull}
        </h5>
        <p className="text-center mb-5">
         {t.OursuccesfullText}
          We have so many great services for your products
        </p>
        <div className="container-fluid">
          <Item />
        </div>
      </section>
    </>
  );
};

export default Services;
