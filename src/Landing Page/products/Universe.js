import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/Images/smallcaselogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-3">
            Thematic investing platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/Images/streakLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mt-3">
            Systematic trading platform{" "}
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/Images/sensibullLogo.svg" style={{ width: "55%" }} />
          <p className="text-small text-muted mt-3">
            Options trading platofrom{" "}
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/Images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-3">Our assest management </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/Images/goldenpiLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-2">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/Images/dittoLogo.png" style={{ width: "30%" }} />
          <p className="text-small text-muted mt-3">Insurance</p>
        </div>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="p-2 mt-3 btn btn-primary fs-5"
        >
          Signup Now
        </button>
      </div>
    </div>
  );
};

export default Universe;
