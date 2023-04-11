import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <section className="peki-learn-detail-head">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12 center-area">
              <h1 data-aos="fade-right" data-aos-duration="1400">
                Our <span>latest</span> blog
              </h1>
              <p data-aos="fade-left" data-aos-duration="1400">
                Browse the agency list or fill in the form so we can match you
                with.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-down"
        data-aos-duration="1400"
        className="blog pt-0"
      >
        <div className="container ">
          <div className="row">
            <div className="col-lg-4 item">
              <Link href={"/blog/detail"}>
                <span className="img">
                  <img src="/images/sentiment-analysis-1.jpg" alt="" />
                </span>
                <span className="text">
                  <span className="date">12 April 2022</span>
                  <span className="title">
                    How to Use Instagram Automation by Peki
                  </span>
                </span>
              </Link>
            </div>
            <div className="col-lg-4 item">
              <Link href={"/blog/detail"}>
                <span className="img">
                  <img src="/images/sentiment-analysis-1.jpg" alt="" />
                </span>
                <span className="text">
                  <span className="date">12 April 2022</span>
                  <span className="title">
                    How to Use Instagram Automation by Peki
                  </span>
                </span>
              </Link>
            </div>
            <div className="col-lg-4 item">
              <Link href={"/blog/detail"}>
                <span className="img">
                  <img src="/images/sentiment-analysis-1.jpg" alt="" />
                </span>
                <span className="text">
                  <span className="date">12 April 2022</span>
                  <span className="title">
                    How to Use Instagram Automation by Peki
                  </span>
                </span>
              </Link>
            </div>
            <div className="col-lg-4 item">
              <Link href={"/blog/detail"}>
                <span className="img">
                  <img src="/images/sentiment-analysis-1.jpg" alt="" />
                </span>
                <span className="text">
                  <span className="date">12 April 2022</span>
                  <span className="title">
                    How to Use Instagram Automation by Peki
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
