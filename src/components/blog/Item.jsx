import React from "react";
import Link from "next/link";

const Item = (props) => {
  return (
    <>
      <div className="col-lg-4 item">
        <a href="#">
          <span className="img">
            <img src="/images/blog.jpg" alt="" />
          </span>
          <span className="text">
            <span className="date">04 March 2022</span>
            <p>How to monetize a blog and make money online</p>
          </span>
        </a>
      </div>
    </>
  );
};

export default Item;
