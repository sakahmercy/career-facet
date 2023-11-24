import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import CompanyLogo from "../../assets/company_logo.png";


const SecondReviewsCard = () => {
  return (
    <div className="secondcardContainer">
      <h1>Popular Informal Job Sectors</h1>
      <div className="row">
        <div className="col-sm-3">
          <div className="card" id="secondcard">
            <div className="card-body">
              <h5 className="card-title">Dollar General</h5>
              <p className="card-text">
                <img src={CompanyLogo} id="CompanyLogo" />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                38,480 reviews
              </p>
              <Link to="#" className="btn" id="secondcard-btn">
                Q&A
              </Link>
              <Link to="#" className="btn" id="secondcard-btn">
                Open jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default SecondReviewsCard;
