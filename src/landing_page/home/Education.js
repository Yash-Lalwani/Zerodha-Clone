import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/education.svg" style={{ width: "90%" }}></img>
        </div>
        <div className=" col-6 p-5 mt-4">
          <h1 className="fs-2 mb-4">Free and open market education</h1>
          <p className="mb-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            see pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mb-3 mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            see pricing <i class="fa-solid fa-arrow-right"></i>
          </a>

          <img
            src="media/images/pressLogos.png"
            style={{ width: "90%" }}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
