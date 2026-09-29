import React from "react";

function Awards() {
  return (
    <>
      
      <div className="container mt-5">
        <div className="row justify-content-center mt-5 p-5">
          <div className="col-4">
            <img
              src="media/largestBroker.svg"
              className="img-fluid w-70"
              alt="Largest Broker img"
            ></img>
          </div>

          <div className="ms-3 col-5">
            <h2>Largest Stock Broker in India</h2>
            <p>
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India
            </p>
            <br></br>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li> Futures and Options </li>
                  <br></br>
                  <li> Commodity derivatives </li>
                  <br></br>
                  <li> Currency derivatives</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li> Stock & IPOs</li>
                  <br></br>
                  <li> Direct mutual funds </li>
                  <br></br>
                  <li>Bonds</li>
                </ul>
              </div>
            </div>
            <img src="media/pressLogos.png" alt="Press Logos"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
