import React, {useState, useEffect } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
const Header = () => {

    const handleMenu = () => {
      document.querySelector('body').classList.toggle('active')
      document.querySelector('header .col-lg-8.d-flex.justify-content-end.align-items-center').classList.toggle('active')
    }


  return (
    <>
      <header>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-4">
              <Logo />
            </div>
            <div className="col-lg-8 d-flex justify-content-end align-items-center app-menu-wrapper">
              <Menu />
            </div>
          </div>
        </div>
        <div className="mobil-btn" onClick={() => handleMenu()}>
          <img src="/images/mobil-btn.svg" alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
