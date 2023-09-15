import React from "react";
import Navbar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import "./reviews.css";

const Reviews = () => {
  return (
    <div className="reviews-container">
      <Navbar />
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="reviewh1">Find great places to work</h1>
            <h3>Get access to millions of company reviews</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center min-vh-10">
            <div className="ml-5 mr-5 col-12">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    Find companies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;