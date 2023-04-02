import React from "react";

const Questions = (props) => {

  const handleAccordion = (id = null) => {
    const el = document.querySelector(`.faq-content[data-order="${id}"]`)

    if(el.style.maxHeight === '0px' || el.style.maxHeight === "") {
      el.style.maxHeight = '50px'
      document.querySelector(`.faq-item[data-order="${id}"]`).classList.add('minus-accordion')
    } else {
      el.style.maxHeight = '0px'
      document.querySelector(`.faq-item[data-order="${id}"]`).classList.remove('minus-accordion')
    }
  }

  return (
    <>
      <div onClick={() => handleAccordion(props?.order)} data-order={props?.order} className="faq-item">{props?.title}</div>
      <div data-order={props?.order} className="faq-content">{props?.description}</div>
    </>
  );
};

export default Questions;
