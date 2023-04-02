import React from "react";
import Link from "next/link";

const Item = () => {
  return (
    <>

      <div className="col-lg-4 item">
        <Link href={'javascript:;'}>
        <img src="/images/Increase.svg" alt="" />
        <h6>Discover our blog</h6>
        <p>Increase product sales, customer fast engagement, generate.</p>
        </Link>
      </div>
    </>
  );
};

export default Item;
