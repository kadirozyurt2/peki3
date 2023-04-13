import Header from "@/components/chatbot/Header";
import Card from "@/components/chatbot/Card";
import Marquee from "@/components/marquee_slider/Marquee";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import SwiperCore, { Pagination,Parallax,Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";
import React, { useState, useEffect } from "react";

SwiperCore.use( [Autoplay, Parallax, Pagination]);

const Chatbot = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === "en" ? en : tr;
  
  const SwiperProps = {
    spaceBetween: 20,
  };

  const SwiperProps2 = {
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

  
  return (
    <>
      <Header />

      <div className="chatbot-wrapper">
        <h5 className="mt-5 pt-5" id="instagram" dangerouslySetInnerHTML={{__html: t.ChatbotForInstagram}}>
        </h5>
        {/* <p className="text-center mb-5">
          We help you to build good relationships with your customers
        </p> */}

        <section className="chatbot-twitter-swiper box-two-area">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-5 p-0 left justify-content-center">
                <img
                  data-aos="fade-down"
                  data-aos-duration="1400"
                  src="/images/shape1.svg"
                  className="shape w-auto"
                />
                <h3> {t.IncreaseInstagram}</h3>
                <div className="col-md-12">
                  <Swiper pagination={{ clickable: true }} {...SwiperProps}>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                        {t.IncreaseInstagram1}
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                        {t.IncreaseInstagram2}
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                        {t.IncreaseInstagram3}
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <img
                  data-aos="fade-down"
                  data-aos-duration="1400"
                  src="/images/slide-1.jpg"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </section>


        <div
        data-aos="fade-down"
        data-aos-duration="1400"
        className="boxs-info-area"
      >
        <h5 className="mb-5" data-aos="fade-right" data-aos-duration="1400" dangerouslySetInnerHTML={{__html: t.MorefeaturesInstagram}}>
        </h5>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                  <img src="/images/ins-1.jpg" alt="" />
                  <h6>{t.InstagramTitle1}</h6>
                  <p>{t.InstagramTxt1}</p>
                </Link>
            </div>

            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                <img src="/images/ins-2.jpg" alt="" />
                  <h6>{t.InstagramTitle2}</h6>
                  <p>{t.InstagramTxt2}</p>
                </Link>
            </div>

            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                <img src="/images/ins-3.jpg" alt="" />
                  <h6>{t.SwiperCore}</h6>
                  <p>{t.InstagramTxt3}</p>
                </Link>
            </div>

          </div>
        </div>
      </div>

      <section
        data-aos="fade-down"
        data-aos-duration="1400"
        className="marquee-slide-wrapper"
      >
        <div className="marquee-slider">
         
      <Swiper {...SwiperProps2}>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.InstagramMarquee1}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.InstagramMarquee2}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.InstagramMarquee3}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.InstagramMarquee4}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.InstagramMarquee5}</span>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </section>




        {/* <Marquee /> */}

        <a href="#" className="sub-btn mt-5 mb-5">
          <span>
            {t.getStarted} <small>~  {t.itsFree}</small>
          </span>
        </a>

        <h5 className="mt-5 pt-5" id="messenger" dangerouslySetInnerHTML={{__html: t.ChatbotAutomations}}>
        </h5>
        {/* <p className="text-center mb-5">
          We help you to build good relationships with your customers
        </p> */}

        <section className="box-two-area">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-5 p-0 left justify-content-center">
                <img
                  data-aos="fade-down"
                  data-aos-duration="1400"
                  src="/images/messenger.png"
                  className="shape w-auto"
                />
                <h3>  {t.MessengerT} </h3>
                <div className="col-md-12">
                  <Swiper pagination={{ clickable: true }} {...SwiperProps}>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                        {t.MessengerTitle1}
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                        {t.MessengerTitle2}
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <img
                  data-aos="fade-down"
                  data-aos-duration="1400"
                  src="/images/Group3.png"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </section>

        <div
        data-aos="fade-down"
        data-aos-duration="1400"
        className="boxs-info-area"
      >
        <h5 className="mb-5" data-aos="fade-right" data-aos-duration="1400" dangerouslySetInnerHTML={{__html: t.MorefeaturesMessenger}}>
        </h5>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                  <img src="/images/messenger1.jpg" alt="" />
                  <h6>{t.MessenTitle1}</h6>
                  <p>{t.MessenTxt1}</p>
                </Link>
            </div>

            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                <img src="/images/messenger2.jpg" alt="" />
                  <h6>{t.MessenTitle2}</h6>
                  <p>{t.MessenTxt2}</p>
                </Link>
            </div>

            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                <img src="/images/messenger3.jpg" alt="" />
                  <h6>{t.MessenTitle3}</h6>
                  <p>{t.MessenTxt3}</p>
                </Link>
            </div>

          </div>
        </div>
      </div>

      <section
        data-aos="fade-down"
        data-aos-duration="1400"
        className="marquee-slide-wrapper"
      >
        <div className="marquee-slider">
         
      <Swiper {...SwiperProps2}>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.MessengerMarquee1}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.MessengerMarquee2}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.MessengerMarquee3}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.MessengerMarquee4}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.MessengerMarquee5}</span>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </section>

        

        <a href="#" className="sub-btn mt-5 mb-5">
          <span>
            {t.getStarted} <small>~  {t.itsFree}</small>
          </span>
        </a>

        <h5 className="mt-5 pt-5" id="whatsapp" dangerouslySetInnerHTML={{__html: t.ChatbotFor}}>
        </h5>

        <section className="box-two-area">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-5 p-0 left justify-content-center">
                <img
                  data-aos="fade-down"
                  data-aos-duration="1400"
                  src="/images/whatsapp3.svg"
                  className="shape w-auto"
                />
                <h3> {t.ConnectWhatsap}</h3>
                <div className="col-md-12">
                  <Swiper pagination={{ clickable: true }} {...SwiperProps}>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                        {t.ConnectWhatsapp1}
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                        {t.ConnectWhatsapp2}
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                        {t.ConnectWhatsapp3}
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <img
                  data-aos="fade-down"
                  data-aos-duration="1400"
                  src="/images/whatsapp-img.png"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </section>

        <div
        data-aos="fade-down"
        data-aos-duration="1400"
        className="boxs-info-area"
      >
        <h5 className="mb-5" data-aos="fade-right" data-aos-duration="1400" dangerouslySetInnerHTML={{__html: t.MorefeaturesWhatsapp}}>
        </h5>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                  <img src="/images/whatsapp1.jpg" alt="" />
                  <h6>{t.dahayuksek}</h6>
                  <p>{t.whatsapEntegrasyonu}</p>
                </Link>
            </div>

            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                <img src="/images/whatsapp2.jpg" alt="" />
                  <h6>{t.kisisel}</h6>
                  <p>{t.kisiselTxt}</p>
                </Link>
            </div>

            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                <img src="/images/whatsapp3.jpg" alt="" />
                  <h6>{t.dahafazlasatis}</h6>
                  <p>{t.dahafazlasatisTxt}</p>
                </Link>
            </div>

          </div>
        </div>
      </div>

        <Marquee />

        <a href="#" className="sub-btn mt-5 mb-5">
          <span>
            {t.getStarted} <small>~  {t.itsFree}</small>
          </span>
        </a>

        <h5 className="mt-5 pt-5" id="twitter" dangerouslySetInnerHTML={{__html: t.ChatbotForTwitter}}>
        </h5>

        <section className="box-two-area">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-5 p-0 left justify-content-center">
                <img
                  data-aos="fade-down"
                  data-aos-duration="1400"
                  src="/images/twit.svg"
                  className="shape w-auto"
                />
                <h3> {t.TwiiterT}</h3>
                <div className="col-md-12">
                  <Swiper pagination={{ clickable: true }} {...SwiperProps}>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                        {t.TwiiterSlide1}
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                        {t.TwiiterSlide2}
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                        {t.TwiiterSlide3}
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <img
                  data-aos="fade-down"
                  data-aos-duration="1400"
                  src="/images/twitter-img.png"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </section>

        
        <div
        data-aos="fade-down"
        data-aos-duration="1400"
        className="boxs-info-area"
      >
        <h5 className="mb-5" data-aos="fade-right" data-aos-duration="1400" dangerouslySetInnerHTML={{__html: t.MorefeaturesTwit}} >
        </h5>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                  <img src="/images/whatsapp1.jpg" alt="" />
                  <h6>{t.twitTitle1}</h6>
                  <p>{t.twitText1}</p>
                </Link>
            </div>

            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                <img src="/images/whatsapp2.jpg" alt="" />
                  <h6>{t.twitTitle2}</h6>
                  <p>{t.twitText2}</p>
                </Link>
            </div>

            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                <img src="/images/whatsapp3.jpg" alt="" />
                  <h6>{t.twitTitle3}</h6>
                  <p>{t.twitText3}</p>
                </Link>
            </div>

          </div>
        </div>
      </div>


        
      <section
        data-aos="fade-down"
        data-aos-duration="1400"
        className="marquee-slide-wrapper"
      >
        <div className="marquee-slider">
         
      <Swiper {...SwiperProps2}>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.TwitterMarquee1}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.TwitterMarquee2}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.TwitterMarquee3}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.TwitterMarquee4}</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>{t.TwitterMarquee5}</span>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </section>



        <a href="#" className="sub-btn mt-5 mb-5">
          <span>
            {t.getStarted} <small>~  {t.itsFree}</small>
          </span>
        </a>

        <section className="start-recommendations mt-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="in">
                  <h6>
                    Start <span>recommendations</span> now
                  </h6>
                  <p>Build your chatbot for customers right now</p>
                  <a href="#">
                    <span>{t.getStarted}</span> <small>~  {t.itsFree}</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Chatbot;
