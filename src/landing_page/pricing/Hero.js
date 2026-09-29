import React from "react";

function Hero() {
  return (
    <>
      <div className="container">
        <div className="row text-center m-5 p-5">
          <h1>Pricing</h1>
          <br></br>
          <p className=" text-muted ">
            {" "}
            Free equity investments and flat ₹20 traday and F&O trades{" "}
          </p>
        </div>
        <div className="row p-5 m-5">
          <div className="col-4 p-5">
            <img src="media/pricing0.svg"></img>
            <h3>Free equity delivery</h3>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free -
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="media/intradayTrades.svg"></img>
            <h3>Intraday and F&O trades</h3>
            <p className="text-muted">
              Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="media/pricing0.svg"></img>
            <h3>Free direct MF</h3>
            <p>
              All direct mutual funds are absolutely free -
              ₹ 0 brokerage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
