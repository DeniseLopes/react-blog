import React from 'react';

import '../../bootstrap.min.css'
import './style.css';

const Carousel = () => (

<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active "  >
      <div id="k1" className="d-block w-100"></div>
    </div>

    <div className="carousel-item  "  >
      <div id="k2" className="d-block w-100"></div>
    </div>
    <div className="carousel-item  "  >
      <div id="k3" className="d-block w-100"></div>
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