import React from "react";
import Navbar from "../NavBar/NavBar";
import "./salaries.css"

const Salaries = () => {
  return (
    <div className="salaries-container">
      <Navbar />
      <hr />
      <div className="row-12">
        <div className="col-12 ml-12">
            <div className="salary">
            <h1>Find a career you will love </h1>
            <h6>Explore which careers have the best satisfaction, best salaries and more</h6>
            </div>
        </div>
      </div>
      <div className="floating-div">This is a floating div</div>
    </div>
  );
};

export default Salaries;