import React from "react";

function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container mb-5 ">
        <div className="row align-items-center">
          <div className="col-6">
            <img src={imgURL} alt={productName} />
          </div>
          <div className="col-6">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <br></br>

            <p className="mb-5">
              <a href={tryDemo}>
                try demo <i class="fa-solid fa-arrow-right fa-xs"></i>
              </a>{" "}
             &nbsp;&nbsp;
              <a href={learnMore}>
                learn More <i class="fa-solid fa-arrow-right fa-xs"></i>
              </a>{" "}
            </p>

            <div className="row">
              <div className="col">
                <a href={googlePlay}>
                  <img src="media/googlePlayBadge.svg" alt="appStore"></img>
                </a>
              </div>
              <div className="col">
                <a href={appStore}>
                  <img src="media/appStoreBadge.svg" alt="appStore"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
