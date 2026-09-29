import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <>
      <h1 className="team-heading">People</h1>
      <div className="container">
        <div className="row ">
          <div className="col justify-content-center">
            <img
              src="media/nithinKamath.jpg"
              width={"50%"}
              className="team-img"
              alt="NithinKamth"
            />
            <div className="team-img-text">
              <p> Nithin Kamath </p>
              <p>Founder & CEO</p>
            </div>
          </div>

          <div className="col-5 team-text">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC). Playing
              basketball is his zen.
            </p>

            <br></br>

            <p>
              Connect on <Link to="/">HomePage</Link>/{" "}
              <Link to="/tradingQnA">tradingQnA</Link>/
              <Link to="/Twitter">Twitter</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
