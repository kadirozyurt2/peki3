import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="col-lg-12">
        <h5>
          {props?.title}
        </h5>
        <p className="text-center">{props?.description}</p>
      </div>
    </>
  );
};

export default Header;
