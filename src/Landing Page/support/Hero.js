import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      
      {/* Top bar */}
      <div className="container">
        <div
          className="d-flex justify-content-between align-items-center py-4"
          id="supportWrapper"
        >
          <h4 className="mb-0">Support Portal</h4>
          <a href="#" className="text-white text-decoration-none">
            Track Tickets
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="container">
        <div className="row py-5 gx-5 justify-content-center align-items-center">

          {/* Left */}
          <div className="col-md-6 text-left">
            <h1 className="fs-3 mb-3">
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input
              type="text"
              className="form-control mb-3"
              style={{ maxWidth: "400px" }}
              placeholder="Eg. how do I activate F&O?"
            />

            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          {/* Right */}
          <div className="col-md-3 text-left">
            <h1 className="fs-3">Featured</h1>
            <ol style={{ lineHeight: "30px", listStylePosition: "inside" }}>
              <li>
                <a href="#">Current Takeovers and Delisting - January 2025</a>
              </li>
              <li>
                <a href="#">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
