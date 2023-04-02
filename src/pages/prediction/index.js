import React from "react";
import Header from "@/components/prediction/Header";
import Card from "@/components/card/Card";
import Item from "@/components/prediction/Item";
import StartLearning from "@/components/started/StartLearning";
import Marquee from "@/components/marquee_slider/Marquee";
const Prediction = () => {
  return (
    <>
      <Header />
      <Card />
      <section className="blog pt-5">
        <h5 data-aos="fade-right" data-aos-duration="1400">
          Types <span>of</span> prediction model
        </h5>
        <p
          data-aos="fade-left"
          data-aos-duration="1400"
          className="text-center"
        >
          We have so many great services for your products
        </p>
        <div
          data-aos="fade-down"
          data-aos-duration="1400"
          className="container "
        >
          <div className="row">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </section>
      <Card />
      <Marquee title="Peki has you covered" />
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
    </>
  );
};

export default Prediction;
