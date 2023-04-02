import Link from "next/link";
import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";
import React, { useState, useEffect } from "react";

const Menu = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const t = locale === "en" ? en : tr;

  const changeLocale = (e) => {
    const locale = e;
    router.push("/", "/", { locale });
  };

  const handleClick = (target = null) => {
      const el = document.querySelector(`.drop-mobil[data-target="${target}"]`);
      el.classList.toggle("d-block");
  };

  const handleClick2 = () => {
      document.querySelector('.app-menu-wrapper').classList.remove('active')
      document.querySelector('body').classList.remove('active')
  };

  const handleDropdown = () => {
    const el = document.querySelector(".drop");
    el.classList.remove("drop-hover");
  };

  useEffect(() => {
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
      const label = item.querySelector(".drop");
      if (label !== null) {
        item.addEventListener("mouseover", () => {
          label.classList.add("drop-hover");
        });
        item.addEventListener("mouseleave", () => {
          label.classList.remove("drop-hover");
        });
      }
    });

    const links = document.querySelectorAll('.item-mobil')
    links.forEach((link) => {
      link.addEventListener('click', () => {
        document.querySelector('.app-menu-wrapper').classList.remove('active')
        document.querySelector('body').classList.remove('active')
      })
    })
  }, []);

  return (
    <>
      {/* mobile */}
      <nav className="mobile-menu">
        <Link
          onClick={() => handleClick("product")}
          className="mobil-click-item"
          data-href="product"
          href=""
        >
          {t.product}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 5L8.06329 11L3 5L13 5Z" fill="black" />
          </svg>
        </Link>
        <div className="drop-mobil" data-target="product">
          <Link className="item-mobil" href="/chatbot#whatsapp">
            Whatsapp
          </Link>
          <Link className="item-mobil" href="/chatbot#instagram">
            Instagram
          </Link>
          <Link className="item-mobil" href="/chatbot#messenger">
            Facebook
          </Link>
          <Link className="item-mobil" href="/chatbot#twitter">
            Twitter
          </Link>
          <Link className="item-mobil" href="/integrations">
            Integrations
          </Link>
        </div>{" "}
        <Link
          onClick={() => handleClick("services")}
          className="mobil-click-item"
          data-href="services"
          href=""
        >
          {t.services}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 5L8.06329 11L3 5L13 5Z" fill="black" />
          </svg>
        </Link>
        <div className="drop-mobil" data-target="services">
          <Link className="item-mobil" href="/reccomendations">Reccomendations Engine</Link>
          <Link className="item-mobil" href="/sentiment">Sentiment Analysis</Link>
          <Link className="item-mobil" href="/prediction">Prediction Model</Link>
        </div>
        <Link
          onClick={() => handleClick("agencies")}
          className="mobil-click-item"
          data-href="agencies"
          href=""
        >
          {t.agencies}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 5L8.06329 11L3 5L13 5Z" fill="black" />
          </svg>
        </Link>
        <div className="drop-mobil" data-target="agencies">
          <Link className="item-mobil" href="/agencies">Hire Agency</Link>
          <Link className="item-mobil" href="/">Become a Partner</Link>
        </div>
        <div className="item">
          <Link className="single-link" onClick={() => handleClick2()} href="/pricing">
            {t.pricing}
          </Link>
        </div>
        <Link
          onClick={() => handleClick("resources")}
          className="mobil-click-item"
          data-href="resources"
          href=""
        >
          {t.resources}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 5L8.06329 11L3 5L13 5Z" fill="black" />
          </svg>
        </Link>
        <div className="drop-mobil" data-target="resources">
          <Link className="item-mobil" href="/">Resources</Link>
          <Link className="item-mobil" href="/blog">Blog</Link>
          <Link className="item-mobil" href="/learn">Learn</Link>
          <Link className="item-mobil" href="/">Get Inspired</Link>
        </div>
      </nav>
      {/* mobile */}

      {/* desktop */}
      <nav className="desktop-menu">
        <div className="item">
          <Link href="">{t.product}</Link>
          <div className="drop">
            <Link onClick={handleDropdown} href="/chatbot#whatsapp">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/whatsapp.742928a4.svg" alt="" />
                <span>Whatsapp</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
            <Link onClick={handleDropdown} href="/chatbot#instagram">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/instagram.07dc14cd.svg" alt="" />
                <span>Instagram</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
            <Link onClick={handleDropdown} href="/chatbot#messenger">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/messenger.aac6546b.svg" alt="" />
                <span>Facebook</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
            <Link onClick={handleDropdown} href="/chatbot#twitter">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/sms.b1647791.svg" alt="" />
                <span>Twitter</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
            <Link onClick={handleDropdown} href="/integrations">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/integrations.56fc2a5f.svg" alt="" />
                <span>Integrations</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
          </div>
        </div>
        <div className="item">
          <Link href="">{t.services}</Link>
          <div className="drop">
            <Link onClick={handleDropdown} href="/reccomendations">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/whatsapp.742928a4.svg" alt="" />
                <span>Reccomendations Engine</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
            <Link onClick={handleDropdown} href="/sentiment">
                 <img src="https://mccdn.me/martech/next-lp//_next/static/media/whatsapp.742928a4.svg" alt="" />
                <span>Sentiment Analysis</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
            <Link onClick={handleDropdown} href="/prediction">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/whatsapp.742928a4.svg" alt="" />
                <span>Prediction Model</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
          </div>
        </div>
        <div className="item">
          <Link href="">{t.agencies}</Link>
          <div className="drop">
            <Link onClick={handleDropdown} href="/agencies">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/whatsapp.742928a4.svg" alt="" />
                <span>Hire Agency</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
            <Link onClick={handleDropdown} href="/">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/whatsapp.742928a4.svg" alt="" />
                <span>Become a Partner</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
          </div>
        </div>
        <div className="item">
          <Link href="/pricing">{t.pricing}</Link>
        </div>
        <div className="item">
          <Link href="">{t.resources}</Link>
          <div className="drop">
            <Link onClick={handleDropdown} href="/">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/whatsapp.742928a4.svg" alt="" />
                <span>Resources</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
            <Link onClick={handleDropdown} href="/blog">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/whatsapp.742928a4.svg" alt="" />
                <span>Blog</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
            <Link onClick={handleDropdown} href="/learn">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/whatsapp.742928a4.svg" alt="" />
                <span>Learn</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
            <Link onClick={handleDropdown} href="/">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/whatsapp.742928a4.svg" alt="" />
                <span>Get Inspired</span>
                <small>Connect with your Customers Instantly</small>
            </Link>
          </div>
        </div>
      </nav>
      {/* desktop */}

      <Link onClick={() => handleClick2()} className="btn-get-started" href="/">
        <span>{t.getStarted}</span>
      </Link>
      <Link onClick={() => handleClick2()} className="login-btn" href="/">
        {t.login}
      </Link>
      <div className="lang">
        <a href="#">
          <span>{defaultLocale.toUpperCase()}</span>{" "}
          <img src="/images/down-arr.svg" alt="" />
        </a>
        <div className="drop">
          <a onClick={() => changeLocale("en")}>EN</a>
          <a onClick={() => changeLocale("tr")}>TR</a>
        </div>
      </div>
    </>
  );
};

export default Menu;
