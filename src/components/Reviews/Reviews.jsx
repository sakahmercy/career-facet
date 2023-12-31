 import React from "react";
import Navbar from "../NavBar/NavBar";
import ReviewsCard from "../card/ReviewsCard";
import Footer from "../Footer/Footer";
import ThirdReviewsCard from "../card/ThirdReveiwsCard";
import ReviewsParentCard from "../ReviewsPropertyCard/ParentProperty";
import "./reviews.css";


const Reviews = () => {
  return (
    <div className="reviews-container">
      <Navbar />
      <hr />

      <div className="headingcontainer">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="reviewh1">Find great places to work</h1>
            <h3>Get access to millions of informal job sector reviews</h3>
          </div>
        </div>
      </div>
      <div className="searchcontainer">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="col-8">
              <div className="input-group mb-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    Find sectors
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <ReviewsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <ReviewsParentCard/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="col-12">
                <ThirdReviewsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Reviews;