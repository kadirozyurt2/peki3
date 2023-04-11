import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ReferencesSwiper = () => {
  const SwiperProps = {
    speed: 2500,
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
      0: {
          slidesPerView: 2,
          spaceBetweenSlides: 30
      },
      // when window width is <= 999px
      999: {
          slidesPerView: 6,
          spaceBetweenSlides: 40
      }
  },
    grabCursor: true,
  };


  return (
    <>
      <Swiper {...SwiperProps}>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo1.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo2.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo3.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo4.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo5.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo-6.png" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo-7.png" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo-8.png" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo-9.png" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo-10.png" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo-11.png" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo-12.png" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/dentlogo.jpeg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/biletinial1.png" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/kpmg.png" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/cgm.png" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/mobiliz.jpeg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ReferencesSwiper;
