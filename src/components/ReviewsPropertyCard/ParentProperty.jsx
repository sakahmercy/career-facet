import React from "react";
import ChildComponent from "./ChildProperty";
import CompanyLogo from "../../assets/company_logo.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewsParentCard = () => {
  const samsClubCard = {
    image: CompanyLogo,
    header: "Popular companies",
    title: "Sam's Club",
    stars: (
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        38,480 reviews
      </div>
    ),
    links: (
      <div>
        <Link to="#" className="btn" id="secondcard-btn">
          Q&A
        </Link>
        <Link to="#" className="btn" id="secondcard-btn">
          Open jobs
        </Link>
      </div>
    ),
  };
  const hebCard = {
    image: CompanyLogo,
    title: "HEB",
    stars: (
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        38,480 reviews
      </div>
    ),
    links: (
      <div>
        <Link to="#" className="btn" id="secondcard-btn">
          Q&A
        </Link>
        <Link to="#" className="btn" id="secondcard-btn">
          Open jobs
        </Link>
      </div>
    ),
  };
  const indeedCard = {
    image: CompanyLogo,
    title: "Indeed",
    stars: (
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        38,480 reviews
      </div>
    ),
    links: (
      <div>
        <Link to="#" className="btn" id="secondcard-btn">
          Q&A
        </Link>
        <Link to="#" className="btn" id="secondcard-btn">
          Open jobs
        </Link>
      </div>
    ),
  };
  const doorDashCard = {
    image: CompanyLogo,
    title: "Door Dash",
    stars: (
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        38,480 reviews
      </div>
    ),
    links: (
      <div>
        <Link to="#" className="btn" id="secondcard-btn">
          Q&A
        </Link>
        <Link to="#" className="btn" id="secondcard-btn">
          Open jobs
        </Link>
      </div>
    ),
  };
  const unitedStateCard = {
    image: CompanyLogo,
    title: "United State Postal Services",
    stars: (
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        38,480 reviews
      </div>
    ),
    links: (
      <div>
        <Link to="#" className="btn" id="secondcard-btn">
          Q&A
        </Link>
        <Link to="#" className="btn" id="secondcard-btn">
          Open jobs
        </Link>
      </div>
    ),
  };
  const appleCard = {
    image: CompanyLogo,
    title: "Apple",
    stars: (
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        38,480 reviews
      </div>
    ),
    links: (
      <div>
        <Link to="#" className="btn" id="secondcard-btn">
          Q&A
        </Link>
        <Link to="#" className="btn" id="secondcard-btn">
          Open jobs
        </Link>
      </div>
    ),
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 d-flex justify-content-center">
          <ChildComponent object={samsClubCard} />
        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center">
          <ChildComponent object={unitedStateCard} />
        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center">
          <ChildComponent object={indeedCard} />
        </div>
     <div className="col-12 col-lg-4 d-flex justify-content-center">
          <ChildComponent object={doorDashCard} />
        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center">
          <ChildComponent object={hebCard} />
        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center">
          <ChildComponent object={appleCard} />
        </div>
      </div>
    </div>
  );
};



export default ReviewsParentCard;