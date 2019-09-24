import React from 'react';
import './App.css';
/*import axios from 'axios';*/
import Nav from './components/nav';
import Carousel from './components/carousel';
import Footer from './components/footer';
import Sidebar from './components/sidebar';

class App extends React.Component {
  
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
      <div className="App">
        <Nav />
        <Carousel />
        <Sidebar />
        <Footer />
      </div>
     
    );
  }
}

export default App;
