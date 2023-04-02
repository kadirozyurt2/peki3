import React from "react";
import Header from "@/components/reccomendations/Header";
import Card from "@/components/card/Card";
import Services from "@/components/Services/Services";
import StartLearning from "@/components/started/StartLearning";

const Reccomendations = () => {
  return (
    <>
      <Header />
      <Card />
      <Services />
      <Card />
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
      <Card />

    </>
  );
};

export default Reccomendations;
