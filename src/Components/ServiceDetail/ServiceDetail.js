import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    console.log(serviceId)
    const [services, setServices] = useState([]);
    const[singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch ('/servicedetail.json')
        .then (res => res.json())
        .then (data => setServices(data.service))

    }, []);

    useEffect(()=>{
      const seviceDetail= services.find(service =>(service?.id) === serviceId)
      setSingleService(seviceDetail);

    }, [services,serviceId])


    

    
    
    return (
        <div className='session-img'>
          <div className="row g-2 mx-auto">
            <div className="col-md-5">
              <img className='img-fluid rounded' src = {singleService?.img} alt="..." />
            </div>
            <div className="col-md-7 ">
              <div className="card-body">
                <h5 className="card-title">{singleService?.name}</h5>
                 <p className="card-text">{singleService?.detail}</p>
                 <Link to= '/home' className='btn btn-danger text-primary fw-bold'>Go Back</Link>
              </div>
            </div>
                
          </div>   
        </div>
    );
};

export default ServiceDetail;