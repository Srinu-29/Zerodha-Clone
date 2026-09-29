import React from "react";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <img src="media/logo.svg" width={"50%"}></img>
            <br></br>
            <br></br>
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <br></br>

            {/* Social Media Icons Row */}
            <div className="social-icons fs-5">
              <a href="#" className="Footer-Links me-4">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="Footer-Links me-4">
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a href="#" className="Footer-Links me-4">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="Footer-Links me-4">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="Footer-Links">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <p>Company About</p>
            <a href="#" className="Footer-Links">
              Pricing
            </a>
            <br></br>
            <br></br>
            <a href="#" className="Footer-Links">
              Products
            </a>
            <br></br>
            <br></br>
            <a href="#" className="Footer-Links">
              Referral programme
            </a>
            <br></br>
            <br></br>
            <a href="#" className="Footer-Links">
              Careers
            </a>
            <br></br>
            <br></br>
            <a href="#" className="Footer-Links">
              Zerodha.tech
            </a>
            <br></br>
            <br></br>
            <a href="#" className="Footer-Links">
              Press & media
            </a>
            <br></br>
            <br></br>
            <a href="#" className="Footer-Links">
              Zerodha cares (CSR){" "}
            </a>
            <br></br>
            <br></br>
          </div>
          <div className="col">
            {" "}
            <p>Support</p>
            <a href="#" className="Footer-Links">
              Contact
            </a>
            <br></br>
            <br></br>
            <a href="#" className="Footer-Links">
              Support portal
            </a>
            <br></br>
            <br></br>
            <a href="#" className="Footer-Links">
              Z-Connect blog
            </a>
            <br></br>
            <br></br>
            <a href="#" className="Footer-Links">
              List of charges
            </a>
            <br></br>
            <br></br>
            <a href="#" className="Footer-Links">
              Downloads & resources
            </a>
          </div>
          <div className="col">
            {" "}
            <p>Account</p>
            <a href="#" className="Footer-Links">
              Open an account
            </a>
            <br></br>
            <br></br>
            <a href="#" className="Footer-Links">
              Fund transfer
            </a>
            <br></br>
            <br></br>
            <a href="#" className="Footer-Links">
              60 day challenge
            </a>
          </div>
        </div>
        <p>
          <div className="text-muted" style={{ fontSize: "14px" }}>
            <p>
              Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
              INZ000031633 CDSL: Depository services through Zerodha Securities
              Pvt. Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
              Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI
              Registration no.: INZ000038238 Registered Address: Zerodha Broking
              Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
              School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
              For any complaints pertaining to securities broking please write
              to complaints@zerodha.com, for DP related to dp@zerodha.com.
              Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account.
            </p>
          </div>
        </p>
      </div>
    </>
  );
}

export default Footer;
