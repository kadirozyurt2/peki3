import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";
import React, { useState, useEffect } from "react";

const Sales = () => {

  const [activeItem1, setActiveItem1] = useState(false)
  const [activeItem2, setActiveItem2] = useState(false)
  const [activeItem3, setActiveItem3] = useState(false)
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === "en" ? en : tr;

  const handleChangeImage = (index) => {
    
    if(index === 0) {
      setActiveItem1(!activeItem1)
      setActiveItem2(false)
      setActiveItem3(false)
    } else if(index === 1) {
      setActiveItem1(false)
      setActiveItem2(!activeItem2)
      setActiveItem3(false)
    } else if(index === 2) {
      setActiveItem1(false)
      setActiveItem2(false)
      setActiveItem3(!activeItem3)
    }

    const images = ['slide-1.jpg', 'services.jpg', 'Group28.jpg']
    const img = document.querySelector('.hero-image-bg')
    const classNames = document.querySelectorAll('.link-item')

    const elements = document.querySelectorAll('.link-item');
    elements.forEach((element) => {
    });
    // if(elements.classList.contains('activeItem')){
    //   elements.forEach((element) => {
    //     element.classList.remove('activeItem');
    //   });
    // }
    //classNames[index].classList.add('activeItem')
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
              <h3>{t.Increase}</h3>
              <p>
               {t.MoreIncreas}
              </p>
              <a href="/chatbot#instagram" className="btn-sub-text">
                <span>{t.explore}</span>{" "}
                <img src="/images/btn-arrow-right.svg" alt="" />
              </a>
              <div className="links">
                <a className={`link-item ${activeItem1 ? 'activeItem' : ''}`} onClick={() => handleChangeImage(0)} data-image="0" href="javascript:void(0);">
                  <img src="/images/messenger.png" alt="" />{" "}
                  <span>{t.GetMoreCustomers}</span>
                  <div className="drop-text-area">
                      {t.GetMoreCustomersText}
                  </div>
                </a>
                
                <a className={`link-item ${activeItem2 ? 'activeItem' : ''}`} onClick={() => handleChangeImage(1)} data-image="1" href="javascript:void(0);">
                  <img src="/images/twitter3,.svg" alt="" />{" "}
                  <span> {t.drive}</span>
                  <div className="drop-text-area">
                    {t.driveTxt}
                  </div>
                </a>
                
                <a className={`link-item ${activeItem3 ? 'activeItem' : ''}`} onClick={() => handleChangeImage(2)} data-image="2" href="javascript:void(0);">
                  <img src="/images/whatsapp3.svg" alt="" />{" "}
                  <span>{t.increaseEfficiency}</span>
                  <div className="drop-text-area">
                      {t.increaseEfficiencyTxt}
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
