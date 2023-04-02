import React from "react";

const Item = (props) => {
  return (
    <>
      <div className="col-lg-4 item">
        <div className="img">
          <img src="/images/team1.jpg" alt="" />
        </div>
        <div className="in">
          <span>{props?.title}</span>
          <small>{props?.jobTitle}</small>
          <div className="social-btns">
            <a href="#" target="_blank">
              <img src="/images/linkedin2.svg" alt="" />
            </a>
            <a href="#" target="_blank">
              <img src="/images/twitter2.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
