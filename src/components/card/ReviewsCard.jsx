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
      <h1 className="reviewsheadings">Browse informal job sectors</h1>
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
              Domestic Workers
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
              Day Laborers
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
              Hairdressers/Barbers
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
              Motorcycle or Bicycle Taxi Drivers
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
          Artisans/Craftspeople
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
          Tailors/Seamstresses
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
          Street Food Vendors
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
          Construction Workers
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
          Personal Drivers
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
          Personal Assistants
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
          Event Organizers/Planners
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
          House Cleaners
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
            Restaurants & Food services
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
          Language Tutors
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
          Freelance Photographers
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">    
          Home-based Beauty Services
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
          Informal Retailers
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
          Mobile Phone Repair Technicians
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="#" className="btn btn-light" id="cardlinks">
          Freelance Graphic Designers
          </Link>
        </div>
      </div>
    </div>
  );
};



export default ReviewsCard;
