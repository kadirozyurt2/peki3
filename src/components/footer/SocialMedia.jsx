import Link from "next/link";
const SocialMedia = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="social-footer-links">
            <Link href="/">
              <img src="images/social-1.png" alt="" />
            </Link>
            <Link href="/">
              <img src="images/social-2.png" alt="" />
            </Link>
              <Link href="/">
              <img src="images/social-3.png" alt="" />
            </Link>
            <Link href="/">
              <img src="images/social-4.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="col-lg-6 copyright">©2022, Peki, Inc.</div>
        <div className="col-lg-6 justify-content-end d-flex footer-right-links">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
