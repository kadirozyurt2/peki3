import React from "react";

const TabItem = (props) => {
  return (
    <>
      <a href="#">
        <span>{props?.title}</span>
      </a>
    </>
  );
};

export default TabItem;
