import React, { Component } from 'react';
import Image from "./assets/image.jpg";
import search from "./assets/search.png"
import location from "./assets/location.jpg"
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Welcome to Career-Facet</h1>
          <img src={Image} alt="" />
          <h2>Experience the new way to work.</h2>
          <h3>See jobs we have picked for you.</h3>
          
          <div className="input-group mb-3">
          <div className="input-group-prepend">
              <span className="input-group-text">
                <img src={location} alt="Location" style={{ width: "25px", height: "25px" }} />
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn btn-primary" type="button">Search</button>
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search"  />
            <button className="btn btn-primary" type="button">
            <img src={search} alt="Search" style={{ width: "25px", height: "30px" }}/>
                </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;