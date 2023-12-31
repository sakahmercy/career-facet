import React from 'react';
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaSistrix} from 'react-icons/fa'
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import '../Home/home.css'
import { Link } from 'react-router-dom';


const HomePage = () => {
  return ( 
    <React.Fragment>
        <div className="homeContainer">
          <Navbar/>
          <hr />
          <h1 className='welcome'>Welcome to Career-Facet</h1>
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
                <Link to ="/job-seekers-signup">
                <button type='button' className='btn btn-link' id='option'>Job seeker get started</button>
                </Link>
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
          <h3 className='home'>Career_Facet help people get Jobs</h3>
        </div>

       <hr/>
          <Footer/>

        </React.Fragment>  
   );
}
 

export default HomePage;