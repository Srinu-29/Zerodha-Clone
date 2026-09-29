import React from 'react'

function Education() {
    return ( <>
    
    <div className="container fw-light mt-5">
        <div className="row justify-content-center">
          <div className="col-4 p-1 me-5">
            <img
              src="media/education.svg"
              className="img-fluid w-70"
              alt="Largest Broker img"
            ></img>
          </div>
          
        
          <div className="ms-5 col-5">
            <h2 className='fw-light'>Free and open market education</h2>
            <p>
              Varsity, the largest online stock market education book in the world
covering everything from the basics to advanced trading.
            </p>
            <br></br>

            <a href='#' >Varsity <i class="fa-solid fa-arrow-right"></i></a>
            <br></br>
            <br></br>
           
            <p>
             TradingQ&A, the most active trading and investment community in
India for all your market related queries.
            </p>
            <br></br>

            <a href='#' >TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
            
          </div>
        </div>
      </div>
    </> );
}

export default Education;