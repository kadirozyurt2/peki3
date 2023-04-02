import React from "react";
import Link from "next/link";

const Item = () => {
  return (
    <>
      <div className="col-lg-4 item mb-3">
        <Link href="/agencies/detail">
          <span className="top-info">
            <span className="logo-area border-0 w-auto">
              <img src="/images/Zapier.svg" className="p-0" alt="" />
            </span>
            <small>WORKFLOW</small>
          </span>
          <h3>Zapier</h3>
          <p>
            At vero eos et accusamus et iu odio dignissimos ducimus quit more
            blandit lorem ipsum solo mano dolor.
          </p>
          <span className="sub">
            <small className="text1">İstanbul</small>{" "}
            <small className="text">
              View More <img src="/images/arrow.svg" alt="" />
            </small>
          </span>
        </Link>
      </div>
    </>
  );
};

export default Item;
