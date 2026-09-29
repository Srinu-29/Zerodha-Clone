import React from "react";

function RightSection({
  imgURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-6">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <br></br>

            <p className="mb-5">
              
              &nbsp;&nbsp;
              <a href={learnMore}>
                learn More <i class="fa-solid fa-arrow-right fa-xs"></i>
              </a>{" "}
            </p>
          </div>
          <div className="col-6">
            <img src={imgURL} alt={productName} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
