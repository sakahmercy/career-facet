import React from 'react';


const ChildComponent = (props) => {
const {image, title, header, links, stars}= props.object;

    return ( 
        <div className="secondcardContainer">
        <h1 className='reviewsheadings'>{header}</h1>
        <div className="row">
          <div className="col-sm-3">
            <div className="card" id="secondcard">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  <img src={image} id="CompanyLogo" />
                  {stars}
                </p>
                {links}
              </div>
            </div>
          </div>
          </div>
          </div>
     );
}
 


export default ChildComponent;