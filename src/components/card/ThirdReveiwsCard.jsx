import React from "react";
import CompanyLogo2 from "../../assets/company_logo_2.png"
import { FaStar } from "react-icons/fa";

const ThirdReviewsCard = () => {
  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={CompanyLogo2} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Sam's Club</h5>
              <p className="card-text">
                3.4 <FaStar/>21.1k reviews
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ThirdReviewsCard;
