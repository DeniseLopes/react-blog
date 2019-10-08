import React from 'react';
/*import axios from 'axios';*/
import Nav from '../../nav';
import Carousel from '../../carousel/index.js';
import Footer from '../../footer/index.js';
import Sidebar from '../../sidebar/index.js';
import Video from '../../video/index.js';


class Principal extends React.Component {
  
 /* constructor(props){
    super(props)
    axios
    .get('/postagens')
    .then(resultado=>{
      console.log(resultado)
    })
  }*/

  render() {
    return (
      <div className="Principal">
        <Nav />
        <Carousel />
        <Sidebar />
        <Video />
        <Footer />
      </div>
     
    );
  }
}

export default Principal;