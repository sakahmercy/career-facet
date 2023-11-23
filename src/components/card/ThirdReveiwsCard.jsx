import React from "react";
import ReviewLogo from "../../assets/review_logo.webp"
import { FaRegStar } from "react-icons/fa";


const ThirdReviewsCard = () => {
  return (
    <div className="container">
      <div className="card mb-5" id="thirdcard">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="row ">
              <div className="col-2">
                <img src={ReviewLogo} className="CompanyLogo2" alt="" />
              </div>
              <div className="col-10">
                <div className="card-body" id="thirdcardbody">
                  <h5 className="card-title"> Rate your recent employer: <FaRegStar/><FaRegStar/><FaRegStar/></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ThirdReviewsCard;
