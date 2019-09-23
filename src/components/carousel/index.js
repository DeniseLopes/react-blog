import React from 'react';
import './style.css'
import '../../bootstrap.min.css'

const Carousel = () => (

<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active "  height =" 400px">
      <img src="k1.jpg" className="d-block w-100 " alt="..."/>
    </div>

    <div className="carousel-item ">
      <img src="k2.jpg" className="d-block w-100 " alt="..."/>
    </div>

    <div className="carousel-item ">
      <img src="k3.jpg" className="d-block w-100 " alt="..."/>
    </div>

  </div>
  
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

);

export default Carousel;