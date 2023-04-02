import React, { useState, useEffect } from "react";

const Sales = () => {


  const handleChangeImage = (index) => {

    const images = ['slide-1.jpg', 'services.jpg', 'Group28.jpg']
    const img = document.querySelector('.hero-image-bg')
    const classNames = document.querySelectorAll('.link-item')

    const elements = document.querySelectorAll('.link-item');
    elements.forEach((element) => {
      element.classList.remove('activeItem');
    });
    
    classNames[index].classList.add('activeItem')
    img.classList.toggle('fade-in')
    img.src = '/images/' + images[index]

    setTimeout(() => {
      
      img.classList.remove('fade-in')
    }, 1000);
  }

  return (
    <>
      <section className="box-two-area">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1400"
              className="col-lg-5 p-0 left justify-content-center"
            >
              <img src="/images/shape1.svg" className="shape" alt="" />
              <h3>Increase big scale instagram more</h3>
              <p>
                More increase product sales, customer engage, generate qualified
                leads, and deliver instant support through doing personalized.
              </p>
              <a href="/chatbot#instagram" className="btn-sub-text">
                <span>Explore</span>{" "}
                <img src="/images/btn-arrow-right.svg" alt="" />
              </a>
              <div className="links">
                <a className="link-item" onClick={() => handleChangeImage(0)} data-image="0" href="javascript:void(0);">
                  <img src="/images/messenger.png" alt="" />{" "}
                  <span>Get more customers</span>
                  <div className="drop-text-area">
                    Lorem ipsum dolar sit amet
                    Lorem ipsum dolar sit amet
                    Lorem ipsum dolar sit amet
                    Lorem ipsum dolar sit amet
                  </div>
                </a>
                
                <a className="link-item" onClick={() => handleChangeImage(1)} data-image="1" href="javascript:void(0);">
                  <img src="/images/twitter3,.svg" alt="" />{" "}
                  <span>Drive your sales</span>
                  <div className="drop-text-area">
                    Lorem ipsum dolar sit amet
                    Lorem ipsum dolar sit amet
                    Lorem ipsum dolar sit amet
                    Lorem ipsum dolar sit amet
                  </div>
                </a>
                
                <a className="link-item" onClick={() => handleChangeImage(2)} data-image="2" href="javascript:void(0);">
                  <img src="/images/whatsapp3.svg" alt="" />{" "}
                  <span>Daily automation</span>
                  <div className="drop-text-area">
                      Lorem ipsum dolar sit amet
                      Lorem ipsum dolar sit amet
                      Lorem ipsum dolar sit amet
                      Lorem ipsum dolar sit amet
                  </div>
                </a>
                
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1400"
              className="col-lg-6 p-0"
            >
              <img src="/images/slide-1.jpg" className="hero-image-bg w-100" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sales;
