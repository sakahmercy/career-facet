import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import CompanyLogo from "../../assets/company_logo.png";
import companylogo2 from "../../assets/company_logo_2.png"

const SecondReviewsCard = () => {
  return (
    <div className="secondcardContainer">
      <h1>Popular Companies</h1>
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
        <div className="col-sm-3">
          <div className="card" id="secondcard">
            <div className="card-body">
              <h5 className="card-title">Dollar Tree</h5>
              <p className="card-text">
                <img src={CompanyLogo} id="CompanyLogo" />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                36,880 reviews
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
        <div className="col-sm-3">
          <div className="card" id="secondcard">
            <div className="card-body">
              <h5 className="card-title">Tesla</h5>
              <p className="card-text">
                <img src={CompanyLogo} id="CompanyLogo" />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                36,800 reviews
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
        <div className="col-sm-3">
          <div className="card" id="secondcard">
            <div className="card-body">
              <h5 className="card-title">Walgreens</h5>
              <p className="card-text">
                <img src={CompanyLogo} id="CompanyLogo" />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                37,880 reviews
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
        <div className="col-sm-3">
          <div className="card" id="secondcard">
            <div className="card-body">
              <h5 className="card-title">Panera Bread</h5>
              <p className="card-text">
                <img src={companylogo2} id="CompanyLogo" />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                56,880 reviews
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
        <div className="col-sm-3">
          <div className="card" id="secondcard">
            <div className="card-body">
              <h5 className="card-title">Domino's</h5>
              <p className="card-text">
                <img src={companylogo2} id="CompanyLogo" />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                45,880 reviews
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
        <div className="col-sm-3">
          <div className="card" id="secondcard">
            <div className="card-body">
              <h5 className="card-title">UnitedHealth Group</h5>
              <p className="card-text">
                <img src={companylogo2} id="CompanyLogo" />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                36,670 reviews
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
        <div className="col-sm-3">
          <div className="card" id="secondcard">
            <div className="card-body">
              <h5 className="card-title">Amazon Flex</h5>
              <p className="card-text">
                <img src={companylogo2} id="CompanyLogo" />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                55,880 reviews
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
