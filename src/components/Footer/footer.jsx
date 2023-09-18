import React from 'react';
import "../Footer/footer.css"
import {FaGooglePlay} from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa';


const Footer = () => {
    return ( 
        
        <footer className="footer">
            <hr/>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-3">
                    <h3>General</h3>
                    <p>Sign Up</p>
                    <p>Help Center</p>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Developers</p>
                </div>
                <div className="col-sm-3">
                    <h3>Brouse Career-Facet</h3>
                    <p>Jobs</p>
                    <p>Salaries</p>
                    <p>Company Reviews</p>
                    <p>Services</p>
                </div>
                <div className="col-sm-3">
                    <h3>Business solutions</h3>
                    <p>Talent</p>
                    <p>Marketing</p>
                    <FaGoogle/>
                    <FaGooglePlay/>
                </div>
                <div className="col sm-3">
                    <h3>Directories</h3>
                    <p>Posts</p>
                    <p>News</p>
                    <p>People search</p>
                </div>
                <div className="col sm-3">
                    <h3>Apps</h3>
                    <p>©2023 Career-Facet</p>
                    <p>Accessibility at Career-facet</p>
                    <p>Your privacy</p>
                </div>
            </div>
        </div>
        </footer>
     );
}
 

<<<<<<< Updated upstream
export default Footer;
=======

export default Footer;
>>>>>>> Stashed changes
