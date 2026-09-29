import React from "react";

function Hero() {
  return (
    <>
      <div className="container mb-2">
        <div className="row text-center ms-5">
          <div>
            
            <img
              src="media/homeHero.png"
              alt="Home hero"
              className="mb-5 w-20 col-10"
              width={"90%"}
              height={"90%"}
            ></img>
          </div>

          <h1> Invest in everything</h1>
          <p>online platform to Invest in stocks,derivatives,mutual funds</p>
          <button className="btn btn-primary  Sign-up-btn">Sign Up Now</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
