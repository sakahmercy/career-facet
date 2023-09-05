import React, { Component } from 'react';
import Image from "./assets/image.jpg";
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
          <button type="button" className="btn btn-lg btn-light">Get Started</button>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;