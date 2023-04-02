import { useRouter } from "next/router";
import en from "locales/en";
import tr from "locales/tr";
import React, { useState, useEffect } from "react";

const Header = (props) => {
    const router = useRouter();
    const { locale, locales, defaultLocale } = router;
    const t = locale === "en" ? en : tr;

  return (
    <>
        <section className="values">
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h5>{t.PekiHas}</h5>
                        <p>{t.PekiHasTxt}</p>
                        {/* {
                            props?.title && (
                               
                                // {props.title}
                            )
                        } */}
                        {
                            props?.description && (
                                <p className='text-center'>
                                    {props.description}
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Header