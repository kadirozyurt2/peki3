import React from "react";
import Item from "./Item";
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
           <Item />
           <Item />
           <Item />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
