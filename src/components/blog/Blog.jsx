import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";
import React, {Fragment, useState, useEffect } from "react";
// import Item from "./Item";
import Link from "next/link";


const Blog = (props) => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === "en" ? en : tr;

  return (
    <>
      <section data-aos="fade-up" data-aos-duration="1400" className="blog">
        <h5 dangerouslySetInnerHTML={{__html: t.Ourtrending}}>
        </h5>
        <p className="text-center">
            {props?.description}
        </p>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 item">
             <Link href={"/blog1"}>
                <span className="img">
                  <img src="/images/blog.jpg" alt="" />
                </span>
                <span className="text">
                  <span className="date">04 March 2022</span>
                  <p>Öneri Motorları Nedir?</p>
                </span>
              </Link>
            </div>

            <div className="col-lg-4 item">
            <Link href={"/blog2"}>
                <span className="img">
                  <img src="/images/blog.jpg" alt="" />
                </span>
                <span className="text">
                  <span className="date">04 March 2022</span>
                  <p>Chatbot Kullanmanın Yararları</p>
                </span>
              </Link>
            </div>

            <div className="col-lg-4 item">
            <Link href={"/blog3"}>
                <span className="img">
                  <img src="/images/blog.jpg" alt="" />
                </span>
                <span className="text">
                  <span className="date">04 March 2022</span>
                  <p>Duygu Analizi Motorları Nedir?</p>
                </span>
              </Link>
            </div>


           {/* <Item  />
           <Item />
           <Item /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
