import React from "react";
import {
  FaGraduationCap,
  FaTree,
  FaPlane,
  FaTools,
  FaCompass,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./reviewcards.css";

const ReviewsCard = () => {
  return (
    <div className="cardContainer">
      <h1 className="reviewsheadings">Browse companies by industries</h1>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <FaGraduationCap />
              </p>
              <Link to="#" className="btn btn-light">
                Education
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <FaTree />
              </p>
              <Link to="#" className="btn btn-light">
                Agriculture
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" >
            <div className="card-body">
              <p className="card-text">
                <FaPlane />
              </p>
              <Link to="#" className="btn btn-light">
                Aerospace & Defense
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card" >
            <div className="card-body">
              <p className="card-text">
                <FaCompass />
              </p>
              <Link to="#" className="btn btn-light">
                Arts, Entertainment & Recreation
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <FaTools />
              </p>
              <Link to="#" className="btn btn-light">
                Construction, Repair & Maintenance
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <FaTools />
              </p>
              <Link to="#" className="btn btn-light" >
                Energy, mining & Utilities
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
            Human Resources & Staffing
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
           Insurance
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
            Management & Consultation
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
            Manufacturing
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
            Media and Communication
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
            Telecommunication
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
           Retail & wholesale
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
            Transport & logistics
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
            Restaurants & Food services
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
            Real Estate
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
            Personal Consumer services
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
           Management and consultation
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
            Information & Technology
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
            Healthcare
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
            Governance & public administration
          </Link>
        </div>
      </div>
    </div>
  );
};



export default ReviewsCard;
