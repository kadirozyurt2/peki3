import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";
import React, { useState, useEffect } from "react";

const Premium = () => {

  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === "en" ? en : tr;

  return (
    <>
      <div className="col-lg-4 item premium">
        <h3>Premium</h3>
        <p className="text">
          {t.premiumTop}
        </p>
        <div className="price-not">{t.lets}</div>
        <a href="#">
          <span>{t.Contact} </span>
        </a>
        <h4>{t.AllPro}</h4>
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
            <span>{t.premium1}</span>
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
            <span>{t.premium2}</span>
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
            <span>{t.premium3}</span>
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
            <span>{t.premium4}</span>
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
            <span>{t.premium5}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Premium;
