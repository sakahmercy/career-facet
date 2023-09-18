import React from "react";
import {
  FaGraduationCap,
  FaTree,
  FaPlane,
  FaTools,
  FaCompass,
} from "react-icons/fa";
import "./reviewcards.css";

const ReviewsCard = () => {
  return (
    <div className="cardContainer">
      <h1>Browse companies by industries</h1>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <FaGraduationCap />
              </p>
              <a href="#" className="btn btn-light">
                Education
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <FaTree />
              </p>
              <a href="#" className="btn btn-light">
                Agriculture
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <FaPlane />
              </p>
              <a href="#" className="btn btn-light">
                Aerospace & Defense
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <FaCompass />
              </p>
              <a href="#" className="btn btn-light">
                Arts, Entertainment & Recreation
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <FaTools />
              </p>
              <a href="#" className="btn btn-light">
                Construction, Repair & Maintenance
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <FaTools />
              </p>
              <a href="#" className="btn btn-light">
                Energy, mining & Utilities
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
            Human Resources & Staffing
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
           Insurance
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
            Management & Consultation
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
            Manufacturing
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
            Media and Communication
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
            Telecommunication
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
           Retail & wholesale
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
            Transport & logistics
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
            Restaurants & Food services
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
            Real Estate
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
            Personal Consumer services
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
           Management and consultation
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
            Information & Technology
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
            Healthcare
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="btn btn-light">
            Governance & public administration
          </a>
        </div>
      </div>
    </div>
  );
};



export default ReviewsCard;
