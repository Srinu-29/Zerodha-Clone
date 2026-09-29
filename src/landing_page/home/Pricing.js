import React from "react";

function Pricing() {
  return (
    <>
     
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 p-5">
            <h2 className=" fs-3"> Unbeatable Pricing </h2>
            <br></br>
            <p className="fw-normal text-muted col-8">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
              <br></br>
              <br></br>
              <a href="#" className="align-items-center">
                see pricing <i class="fa-solid fa-arrow-right fa-xs"></i>
              </a>
            </p>
          </div>
          <div className="col-6 justify-content-center align-items-center price-box ">
            <div className="row">
                <div className="col-6 p-5 text-center zero-box">
                    
                    <h1 className="text-center mb-4"><i class="fa-solid fa-indian-rupee-sign fa-xs"></i>0</h1>

                    <p>Free equity delivery and direct mutual fnds </p>
                </div>
                <div className="col-6 p-5 text-center">
                     <h1 className="text-center mb-4" ><i class="fa-solid fa-indian-rupee-sign fa-xs"></i>20</h1>

                    <p>Intraday & F&O </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
