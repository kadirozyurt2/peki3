import React from "react";
// import Item from "./Item";
import Link from "next/link";

const Blog = (props) => {
  return (
    <>
      <section data-aos="fade-up" data-aos-duration="1400" className="blog">
        <h5>
          {props?.title}
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
                  <p>How to monetize a blog and make money online</p>
                </span>
              </Link>
            </div>

            <div className="col-lg-4 item">
            <Link href={"/blog1"}>
                <span className="img">
                  <img src="/images/blog.jpg" alt="" />
                </span>
                <span className="text">
                  <span className="date">04 March 2022</span>
                  <p>How to monetize a blog and make money online</p>
                </span>
              </Link>
            </div>

            <div className="col-lg-4 item">
            <Link href={"/blog1"}>
                <span className="img">
                  <img src="/images/blog.jpg" alt="" />
                </span>
                <span className="text">
                  <span className="date">04 March 2022</span>
                  <p>How to monetize a blog and make money online</p>
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
