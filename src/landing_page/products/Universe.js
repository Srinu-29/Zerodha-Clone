import React from "react";

function Universe() {
  return (
    <>
            <div className="container">
        <p className="text-center">want to know more about the university</p>
        <div className="row">
          <h1  className="text-center">The Zerodha Universe</h1>
        </div>
        <p className="text-center">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <br></br>

        <div className="row justify-content-center ms-5">
          {/* First Row of Images */}
          <div className="col-3 ms-4">
            <img src="media/smallcaseLogo.png" width={"50%"} alt="smallcaseLogo" />
            <br></br><br></br>
            <p className="fa-sm">thematic Investment platform</p>
          </div>
          <div className="col-3">
            <img src="media/StreakLogo.png" width={"50%"} alt="StreakLogo" />
            <br></br><br></br>
            <p className="fa-sm">thematic Investment platform</p>
          </div>
          <div className="col-3">
            <img src="media/sensibullLogo.svg" width={"50%"} alt="sensibullLogo" />
            <br></br><br></br>
            <p className="fa-sm">thematic Investment platform</p>
          </div>
        </div>

        <div className="row mt-5   justify-content-center"> {/* Added mt-5 here for space between the rows! */}
          {/* Second Row of Images */}
          <div className="col-3">
            <img src="media/zerodhaFundhouse.png" width={"50%"} alt="zerodhaFundhouse" />
            <br></br><br></br>
            <p className="fa-sm">thematic Investment platform</p>

          </div>
          <div className="col-3">
            <img src="media/goldenpiLogo.png" width={"50%"} alt="goldenpiLogo" />
            <br></br><br></br>
            <p className="fa-sm">thematic Investment platform</p>
          </div>
          <div className="col-2">
            <img src="media/dittoLogo.png" width={"50%"} alt="dittoLogo" />
            <br></br><br></br>
            <p className="fa-sm">thematic Investment platform</p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
}

export default Universe;