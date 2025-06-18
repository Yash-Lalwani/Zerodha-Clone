import React from "react";

function Universe() {
  return (
    <div className="container mt-5 p-5">
      <div className="row text-center">
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="/media/images/smallcaseLogo.png"></img>
          <p className="text-small text-muted">Systematic trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/zerodhaFundhouse.png"
            style={{ width: "55%" }}
          ></img>
          <p className="text-small text-muted">Systematic trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/sensibullLogo.svg"
            style={{ width: "80%" }}
          ></img>
          <p className="text-small text-muted">Systematic trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/streakLogo.png"
            style={{ width: "50%" }}
          ></img>
          <p className="text-small text-muted">Systematic trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/images/dittoLogo.png" style={{ width: "43%" }}></img>
          <p className="text-small text-muted">Systematic trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/images/goldenpiLogo.png" style={{ width: "60%" }}></img>
          <p className="text-small text-muted">Systematic trading platform</p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
