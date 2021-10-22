import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name,shortDes, img,id} = props.service;
    const url = `/service/:${id}`
    return (
        <div>
           <div className="row g-2 mt-2">
              <div className="col-md-4">
                <img className='img-fluid' src = {img} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{shortDes}</p>
                  <Link to= {url} className='mt-0 btn btn-link'>know more</Link>
                </div>
           </div>
          </div>
        </div>
    );
};

export default Service;