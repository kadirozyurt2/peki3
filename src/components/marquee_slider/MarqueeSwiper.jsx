import React, { useState, useEffect } from "react";
import SwiperCore, { Autoplay, Parallax } from "swiper";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";

const MarqueeSwiper = () => {
    const router = useRouter();
    const { locale, locales, defaultLocale } = router;
    const t = locale === "en" ? en : tr;
  
  const SwiperProps = {
    speed: 3000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    watchSlidesProgress: true,
    spaceBetween: 20,
    breakpoints: {
      // when window width is <= 499px
      499: {
          slidesPerView: 1,
          spaceBetweenSlides: 30
      },
      // when window width is <= 999px
      999: {
          slidesPerView: 3,
          spaceBetweenSlides: 40
      }
  },
    grabCursor: true,
  };

  SwiperCore.use([Autoplay, Parallax]);

  return (
    <>
      <Swiper {...SwiperProps}>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.DataCollection}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.CostSavings}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.MoreSales}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.Availability}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.Personalized}</span>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MarqueeSwiper;
