import React from "react";

function Stats() {
  return (
    <>
      <div className="container mt-5 mb-5 p-5">
        <div className="row justify-content-center align-items-center">
          <br></br>
          <br></br>
         
          <div className="col-6 fw-light p-5">
            <h2 className="ml-5 ">Trust with Confidence</h2>
            <br></br>
            <h3  className="fw-normal">Customer-first always</h3>

            <p className="text-muted">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+lakh
              crores worth of equity investments.
            </p>
            <h3  className="fw-normal">No spam or gimmicks</h3>

            <p  className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h3  className="fw-normal">The Zerodha universe</h3>
            <p  className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h3  className="fw-normal">Do better with money</h3>
            <p  className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-5 text-center ">
            <img src="media/ecosystem.png" alt="ecosystem"  className="img-fluid w-75"></img><br></br>
            <div className="justify-content-align align-items-center">
                <a href="#">explore our products <i class="fa-solid fa-arrow-right fa-xs"></i> try kite</a>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
