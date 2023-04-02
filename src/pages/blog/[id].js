import React from "react";

const BlogDetail = () => {
  return (
    <>
      <div>
        <div className="social-right">
          <a href="#" target="_blank">
            <img src="/images/twitter2.svg" alt="" />
          </a>
          <a href="#" target="_blank">
            <img src="/images/linkedin2.svg" alt="" />
          </a>
          <a href="#" target="_blank">
            <img src="/images/social2.svg" alt="" />
          </a>
        </div>
        <section className="peki-learn-detail-head">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-lg-12 center-area">
                <h1>How to Build an Instagram Bot with No Code</h1>
                <p>
                  We help you to build good relationships with your customers
                </p>
                <div className="info-area">
                  <div className="subject">INSTAGRAM</div>
                  <div className="date">08 February 2022</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="detail-learn-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="img">
                  <img src="/images/detail-learn.jpg" alt="" />
                </div>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occa
                  ecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                  <br />
                  <br />
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos irure.
                  <br />
                  <br />
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                  <br />
                  <br />
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat facere possimus,
                  omnis voluptas assumenda est, omnis dolor repellendus.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* other learn */}
        <section className="blog pt-0">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12">
                <h5 className="mb-5 pt-3">Related blogs</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 item">
                <a href="#">
                  <span className="img">
                    <img src="/images/sentiment-analysis-1.jpg" alt="" />
                  </span>
                  <span className="text">
                    <span className="subtitle">INSTAGRAM</span>
                    <span className="title">
                      How to Use Instagram Automation by Peki
                    </span>
                  </span>
                </a>
              </div>
              <div className="col-lg-4 item">
                <a href="#">
                  <span className="img">
                    <img src="/images/sentiment-analysis-1.jpg" alt="" />
                  </span>
                  <span className="text">
                    <span className="subtitle">INSTAGRAM</span>
                    <span className="title">
                      How to Use Instagram Automation by Peki
                    </span>
                  </span>
                </a>
              </div>
              <div className="col-lg-4 item">
                <a href="#">
                  <span className="img">
                    <img src="/images/sentiment-analysis-1.jpg" alt="" />
                  </span>
                  <span className="text">
                    <span className="subtitle">INSTAGRAM</span>
                    <span className="title">
                      How to Use Instagram Automation by Peki
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* other learn */}
      </div>
    </>
  );
};

export default BlogDetail;
