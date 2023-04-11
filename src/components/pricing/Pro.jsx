import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";
import React, { useState, useEffect } from "react";

const Pro = () => {

  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === "en" ? en : tr;

  return (
    <>
      <div className="col-lg-4 item pro">
        <span className="top-text-populer">{t.popular}</span>
        <h3>Pro</h3>
        <p className="text">
           {t.proTop}
        </p>
        <div className="price">
          <b>999</b>
          <span>TRY</span>
          <small>/ mo</small>
        </div>
        <a href="#">
          <span>{t.getStarted}</span>
        </a>
        <h4>{t.proTxt1}</h4>
        <ul>
          <li> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height="10.5"
              viewBox="0 0 14 10.5"
            >
              <g
                id="Group_5"
                data-name="Group 5"
                transform="translate(-5.013 -7.02)"
              >
                <path
                  id="Path"
                  d="M5.251,10.5,14,1.75,12.25,0l-7,7L1.75,3.5,0,5.25Z"
                  transform="translate(5.013 7.02)"
                  fill="#100f0f"
                />
              </g>
            </svg>
            <span>AI Chatbot</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height="10.5"
              viewBox="0 0 14 10.5"
            >
              <g
                id="Group_5"
                data-name="Group 5"
                transform="translate(-5.013 -7.02)"
              >
                <path
                  id="Path"
                  d="M5.251,10.5,14,1.75,12.25,0l-7,7L1.75,3.5,0,5.25Z"
                  transform="translate(5.013 7.02)"
                  fill="#100f0f"
                />
              </g>
            </svg>
            <span>Web bot</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height="10.5"
              viewBox="0 0 14 10.5"
            >
              <g
                id="Group_5"
                data-name="Group 5"
                transform="translate(-5.013 -7.02)"
              >
                <path
                  id="Path"
                  d="M5.251,10.5,14,1.75,12.25,0l-7,7L1.75,3.5,0,5.25Z"
                  transform="translate(5.013 7.02)"
                  fill="#100f0f"
                />
              </g>
            </svg>
            <span>{t.aylik500}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height="10.5"
              viewBox="0 0 14 10.5"
            >
              <g
                id="Group_5"
                data-name="Group 5"
                transform="translate(-5.013 -7.02)"
              >
                <path
                  id="Path"
                  d="M5.251,10.5,14,1.75,12.25,0l-7,7L1.75,3.5,0,5.25Z"
                  transform="translate(5.013 7.02)"
                  fill="#100f0f"
                />
              </g>
            </svg>
            <span>{t.liveAgent}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pro;
