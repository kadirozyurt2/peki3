import React from "react";

const Categories = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="filter-btns">
            <a href="#" className="active">
              <span>ALL</span>
            </a>
            <a href="#">
              <span>WORKFLOW</span>
            </a>
            <a href="#">
              <span>SOCIAL MEDIA</span>
            </a>
            <a href="#">
              <span>SOFTWARE</span>
            </a>
            <a href="#">
              <span>CONTACT</span>
            </a>
            <a href="#">
              <span>DESKTOP</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
