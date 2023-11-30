import React from "react";
import Navbar from "../NavBar/NavBar";
import { FaComment, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../JobSeekersPage/jobseekerspage.css"

const JobSeekersHomePage = () => {
  return (
    <div className="jobseekershomepagecontainer">
      <Navbar />
      <hr />
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <h1>
                <u>Add name</u>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12"id="userinformation">
              <div className="floating-div">
                <Link>
                  <FaComment /> Enter your email
                </Link>
                <Link>
                  <FaPhone /> Add phone number
                </Link>
                <Link>
                  <FaMapMarkerAlt /> Add location
                </Link>
              </div>
            </div>
          </div>
          <div className="row" id="userResume">
        <div className="col" >
        <h2>Resume</h2>
        <div>
        <h4>Upload Resume</h4>
        </div>
        <div><h4>Build a Career-facet Resume</h4></div>
        
        </div>
      </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-6"></div>
      </div>
      <div className="row">
        <div className="col-6"></div>
      </div>
    </div>
  );
};



export default JobSeekersHomePage;