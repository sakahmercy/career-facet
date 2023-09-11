import React from 'react';
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaSistrix} from 'react-icons/fa'
import '../Home/home.css'
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/footer';





const HomePage = () => {
  return ( 
    <React.Fragment>
        <div className="homeContainer">
          <Navbar/>
          <h1>Welcome to Career-Facet</h1>
          <h2>Experience the new way to work.</h2>
          <h3>See jobs we have picked for you.</h3>

          <div className="row justify-content-center" id='searchBar'>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                   <FaMapMarkerAlt/>
                  </span>
                </div>
                <input type="text" id='mySearch' className="form-control" placeholder="Where, job title, or company" title='type in a category' />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">Search</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                  <FaSistrix/>
                  </span>
                </div>
                <input type="text" className="form-control" placeholder="What, city, state, or remote"  />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">Search</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row" id='userSection'>
            <div className="col-md-12">
              <div className="input-groupType-mb-3">
                <button type='button' className='btn btn-link' id='option'>Job seeker get started</button>
              </div>
            </div>
          </div>
          <div className="row"  id='userSection'>
            <div className="col-md-12">
              <div className="input-groupType-mb-3">
                <button type='button' className='btn btn-link' id='option'>Employer post a job</button>
              </div>
            </div>
          </div>
          <Footer/>
        </div>

        </React.Fragment>  
   );
}
 

export default HomePage;