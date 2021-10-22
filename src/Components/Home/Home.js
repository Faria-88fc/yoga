import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css';


const Home = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(service => setService(service))

  }, []);
  return (
    <div className='container-fluid'>
      <div className='banner'>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div className="carousel-item active">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqjC4CDDE1xyTeNNEETm9D7bJaKOYX9S9yQ&usqp=CAU" className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item ">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVU9APF1PhZxB7TfPkd_thO3a4Te_XmPZAhQ&usqp=CAU" className="d-block  w-100" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src="https://images.indianexpress.com/2018/12/yoga.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <h2 id='services'>Yoga Services</h2>
        <div className="card mb-3 border-0">
          {
            services.map(service => <Service key={service.id} service={service}></Service>)
          }
        </div>
      </div>

    </div>
  );
};

export default Home;