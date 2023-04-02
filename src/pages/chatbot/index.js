import React from "react";
import Header from "@/components/chatbot/Header";
import Card from "@/components/chatbot/Card";
import Marquee from "@/components/marquee_slider/Marquee";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

const Chatbot = () => {
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
            Get Started <small>~ It’s Free</small>
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
            Get Started <small>~ It’s Free</small>
          </span>
        </a>

        <h5 className="mt-5 pt-5" id="whatsapp">
          Chatbot <span>for</span> Whatsapp{" "}
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
                  src="/images/whatsapp3.svg"
                  className="shape w-auto"
                />
                <h3>Connect with your Customers Stage</h3>
                <div className="col-md-12">
                  <Swiper pagination={{ clickable: true }} {...SwiperProps}>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                          Automatically respond to comments on your Whatsapp
                          posts with the Comments Growth Tool. Answer common
                          questions, offer product recos, initiate newsletter
                          sign-ups, and more.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-md-12">
                        <p>
                          Automatically respond to comments on your Whatsapp
                          posts with the Comments Growth Tool. Answer common
                          questions, offer product recos, initiate newsletter
                          sign-ups, and more.
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

        <Card />
        <Marquee />

        <a href="#" className="sub-btn mt-5 mb-5">
          <span>
            Get Started <small>~ It’s Free</small>
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
            Get Started <small>~ It’s Free</small>
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
                    <span>Get Started</span> <small>~ It’s Free</small>
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
