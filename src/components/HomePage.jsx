import React from 'react';
import SearchIcon from "./assets/search.png";
import LocationIcon from "./assets/location.jpg";
import "bootstrap/dist/css/bootstrap.css";
import '../styles/home.css'
import "../index.css";



const HomePage = () => {
  return ( 
    <React.Fragment>
        <div className="container text-center">
          <h1>Welcome to Career-Facet</h1>
          <h2>Experience the new way to work.</h2>
          <h3>See jobs we have picked for you.</h3>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <img src={LocationIcon} alt="Location" className='searchIcon' style={{ width: "25px", height: "25px" }} />
                  </span>
                </div>
                <input type="text" id='mySearch' className="form-control" placeholder="Where" title='type in a category' />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">Search</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <img src={SearchIcon} alt="Search" className='searchIcon' style={{ width: "25px", height: "30px" }}/>
                  </span>
                </div>
                <input type="text" className="form-control" placeholder="What"  />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">Search</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="input-groupType-mb-3">
                <button type='button' className='btn btn-link'>Job seeker get started</button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="input-groupType-mb-3">
                <button type='button' className='btn btn-link'>Employer post a job</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
   );
}
 
export default HomePage;