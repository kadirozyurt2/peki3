import Header from "@/components/chatbot/Header";
import Card from "@/components/chatbot/Card";
import Marquee from "@/components/marquee_slider/Marquee";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";
import React, { useState, useEffect } from "react";

SwiperCore.use([Pagination]);

const Chatbot = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === "en" ? en : tr;
  
  const SwiperProps = {
    spaceBetween: 20,
  };
  return (
    <>
      <Header />

      <div className="chatbot-wrapper">
        <h5 className="mt-5 pt-5" id="instagram">
          Chatbot <span>for</span> Instagram{" "}
        </h5>
        <p className="text-center mb-5">
          We help you to build good relationships with your customers
        </p>

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
                <h3>Increase big scale instagram more</h3>
                <div className="col-md-12">
                  <Swiper pagination={{ clickable: true }} {...SwiperProps}>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                          More increase product sales, customer engage, generate
                          qualified leads, and deliver instant support through
                          doing personalized.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                          More increase product sales, customer engage, generate
                          qualified leads, and deliver instant support through
                          doing personalized.
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


        <Card />
        <Marquee />

        <a href="#" className="sub-btn mt-5 mb-5">
          <span>
            {t.getStarted} <small>~  {t.itsFree}</small>
          </span>
        </a>

        <h5 className="mt-5 pt-5" id="messenger">
          Chatbot <span>for</span> Messenger{" "}
        </h5>
        <p className="text-center mb-5">
          We help you to build good relationships with your customers
        </p>

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
                <h3>Your Customers are on Messenger</h3>
                <div className="col-md-12">
                  <Swiper pagination={{ clickable: true }} {...SwiperProps}>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                          Peki is the #1 Facebook Messenger chatbot that
                          automates getting and keeping customers happy, so you
                          have more time for everything else.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                          Peki is the #1 Facebook Messenger chatbot that
                          automates getting and keeping customers happy, so you
                          have more time for everything else.
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

        <Card />
        <Marquee />

        <a href="#" className="sub-btn mt-5 mb-5">
          <span>
            {t.getStarted} <small>~  {t.itsFree}</small>
          </span>
        </a>

        <h5 className="mt-5 pt-5" id="whatsapp">
          {t.ChatbotFor}
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
        <h5 className="mb-5" data-aos="fade-right" data-aos-duration="1400">
          {t.MorefeaturesWhatsapp}
        </h5>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                  <img src="/images/Increase.svg" alt="" />
                  <h6>{t.dahayuksek}</h6>
                  <p>{t.whatsapEntegrasyonu}</p>
                </Link>
            </div>

            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                <img src="/images/Increase.svg" alt="" />
                  <h6>{t.kisisel}</h6>
                  <p>{t.kisiselTxt}</p>
                </Link>
            </div>

            <div className="col-lg-4 item">
                <Link href={'javascript:;'}>
                <img src="/images/Increase.svg" alt="" />
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

        <h5 className="mt-5 pt-5" id="twitter">
          Chatbot <span>for</span> Twitter
        </h5>
        <p className="text-center mb-5">
          We help you to build good relationships with your customers
        </p>

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
                <h3>Direct Customers to Your Twitter</h3>
                <div className="col-md-12">
                  <Swiper pagination={{ clickable: true }} {...SwiperProps}>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                          Use Peki URL Growth Tool to create a messenger link
                          for your chatbot that customers can access from their
                          preferred channel. Website. Email. Text message.
                          Anywhere.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                          Use Peki URL Growth Tool to create a messenger link
                          for your chatbot that customers can access from their
                          preferred channel. Website. Email. Text message.
                          Anywhere.
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

        <Card />
        <Marquee />

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
